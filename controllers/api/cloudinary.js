const cloudinary = require('../../config/cloudinary')
const fs = require('fs')

async function upload(req, res, next) {
    try {
        console.log(req.files)
        if (!req.files) { return next() }
        const file = req.files.file 
        console.log(file)
        const imagePath = `${__dirname}/temp/${Math.random() * 1000 + file.name}`
        file.mv(imagePath, (error) => {
            if (error) {
                throw new Error(error.message)
            }
            cloudinary.uploader.upload(imagePath, {}, (err, result) => {
                console.log('result = ' + result)
                if (err) {
                    throw new Error(err.message)
                } else {
                    res.locals.imageData = result.secure_url
                    console.log(result.secure_url)
                    fs.unlink(imagePath, (err) => {
                        if (err) {
                            throw new Error(err.message)
                        }
                    })
                    next()
                }
            })
        })
    } catch (error) {
        console.log(error.message)
        res.status(402).json({ message: error.message })
    }
}

module.exports = { upload }