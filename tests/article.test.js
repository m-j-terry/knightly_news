require('dotenv').config()
require('./config/testDatabase'); // runs the file because it gets compiled as an IIFE

const request = require('supertest')
// const mongoose = require('mongoose')
// const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app-test-server')
const PORT = process.env.PORT
const adminEmail = process.env.adminEmail
const adminPassword = process.env.adminPassword
const server = app.listen(PORT, () => console.log(`let's get ready to test!`))
const Administrator = require('../models/administrator')
const Archive = require('../models/archive')
const Article = require('../models/article')
const Category = require('../models/category')
const Contributor = require('../models/contributor')

describe('Test the Administrator Endpoints', () => {
    test('It should create an administrator document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const response = await request(app)
        .post('/admin')
        .send({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`test${random}`)
        expect(response.body.email).toEqual(`test${random}@test.com`)
        expect(response.body.password).toEqual('testpassword')
    })

    test('It should login an administrator', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const response = await request(app)
        .post('/admin/login')
        .send({ email: `test${random}@test.com`, password: "testpassword" })

        expect(response.statusCode).toBe(200)
        expect(response.body.email).toEqual(`test${random}@test.com`)
        expect(response.body.password).toEqual('testpassword')
        expect(response.body).toHaveProperty('token')
    })

    test('It should update an administrator document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const token = await user.generateAuthToken()

        const response = await request(app)
        .put(`/admin/${admin._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ name: `test${random - 1}`, email: `test${random - 1}@test.com` })

        expect(response.statuscode).toBe(200)
        expect(response.body.name).toEqual(`test${random - 1}`)
        expect(response.body.email).toEqual(`test${random - 1}@test.com`)
        })

    test('It should destroy an administrator document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const token = await user.generateAuthToken()

        const response = await request(app)
        .delete(`/admin/${admin._id}`)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual("Administrator deleted")

    })
})