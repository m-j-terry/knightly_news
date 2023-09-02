const Administrator = require('../../models/administrator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
    console.log('req.administrator', req.administrator)
    res.json(req.exp)
}

async function create(req, res, next) {
    try {
        const administrator = await Administrator.create(req.body)
        //token will be a string
        const token = createJWT(administrator)
        // send back the token as a string
        // which we need to account for 
        // in the client
        res.locals.data.administrator = administrator
        res.locals.data.token = token
        next()
    } catch (error) {
        console.log('you got a database problem')
        res.status(400).json(error)
    }
}

async function login(req, res, next ) {
    try {
        const administrator = await Administrator.findOne({ email: req.body.email })
        if (!administrator) throw new Error()
        const match = await bcrypt.compare(req.body.password, administrator.password)
        if (!match) throw new Error()
        res.locals.data.administrator = administrator
        res.locals.data.token = createJWT(administrator)
        next()
    } catch (error) {
        res.status(400).json('Your credentials be whack')
    }
}

async function update(req, res, next) {
    try {
        const administrator = await Administrator.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!administrator) throw new Error('Administrator not found')
        res.locals.data.administrator = administrator
        next()
    } catch (error) {
        res.status(400).json('Was not able to update administrator info')
    }
}
async function destroy(req, res) {
    try {
        const administrator = await Administrator.findOne({ _id: req.params.id })
        await administrator.deleteOne()
        if (!administrator) throw new Error('Administrator not found')
        res.status(200).json({ message: 'Administrator deleted' })
    } catch (error) {
        res.status(400).json('Administrator NOT Deleted')
    }
}


const apiController = {
    auth (req, res) {
        res.json(res.locals.data.token)
    }
}

module.exports = {
    checkToken, 
    create,
    login,
    update, 
    destroy, 
    apiController
}

function createJWT (administrator) {
    return jwt.sign(
        //data payload
        { administrator },
        process.env.SECRET,
        { expiresIn: '72h'}
    )
}