require('dotenv').config()
// require('../config/testDatabase.js'); // runs the file because it gets compiled as an IIFE

const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app-test-server')
const PORT = process.env.PORT || 4500
const server = app.listen(PORT, () => console.log(`let's get ready to test!`))
const Administrator = require('../models/administrator')
const Archive = require('../models/archive')
const Article = require('../models/article')
const Category = require('../models/category')
const Contributor = require('../models/contributor')
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Test the Administrator Endpoints', () => {
    test('It should create an administrator document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const response = await request(app)
        .post('/api/admin')
        .send({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`test${random}`)
        expect(response.body.email).toEqual(`test${random}@test.com`)
    })

    test('It should login an administrator', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const response = await request(app)
        .post('/api/admin/login')
        .send({ email: `test${random}@test.com`, password: "testpassword" })

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`test${random}`)
        expect(response.body.email).toEqual(`test${random}@test.com`)
    })

    test('It should update an administrator document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const token = await admin.generateAuthToken()

        const response = await request(app)
        .put(`/api/admin/${admin._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ name: `test${random - 1}`, email: `test${random - 1}@test.com` })

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`test${random - 1}`)
        expect(response.body.email).toEqual(`test${random - 1}@test.com`)
        })

    test('It should destroy an administrator document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const token = await admin.generateAuthToken()

        const response = await request(app)
        .delete(`/api/admin/${admin._id}`)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual("Administrator deleted")

    })
})