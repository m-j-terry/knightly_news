require('dotenv').config()
// require('../config/testDatabase.js'); // runs the file because it gets compiled as an IIFE

const fs = require('fs');
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app-test-server')
const PORT = process.env.PORT || 4500
const server = app.listen(PORT, () => console.log(`let's get ready to test!`))
const Administrator = require('../models/administrator')
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
/*** ADMINISTRATOR TESTS ***/
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

/*** ARTICLE TESTS ***/
describe('Test the Article Endpoints', () => {
    // Article tests requiring Admin authorization
    test('It should create an article document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const token = await admin.generateAuthToken()
        fs.writeFileSync('test-image.jpg', 'fake image content');
        const response = await request(app)
        .post('/api/admin/article')
        // .field('title', `title${random}`)
        // .field('contributor', `contibutor${random}`)
        // .field('category', `${category._id}`)
        // .field('featured', false)
        // .field('text', `text${random}`)
        // .attach('file', 'test-image.jpg')
        .send({
            title: `title${random}`,
            contributor: `contributor${random}`,
            category: category,
            featured: false,
            text: `text${random}`
        })
        
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual(`title${random}`)
        expect(response.body.contributor).toEqual(`contibutor${random}`)
        expect(response.body.category).toEqual(category)
        expect(response.body.featured).toEqual(false)
        // expect(response.body.imageUrl).toBe(String)
        expect(response.body.text).toEqual(`text${random}`)
    })

    test('It should update an article document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const token = await admin.generateAuthToken()
        const article = new Article({ title: `title${random}`, contributor: `contributor${random}`, category: category, featured: false, imageUrl: `www.${random}.com`, text: `text${random}` })
        await article.save()
        const response = await request(app)
        .put(`/api/admin/article/${article._id}`)
        .send({ title: `title${random - 1}`, contributor: `contributor${random - 1}`, featured: true, imageUrl: `www.${random - 1}.com`, text: `text${random - 1}` })
        .set('Authorization', `Bearer ${token}`)


        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual(`title${random - 1}`)
        expect(response.body.contributor).toEqual(`contributor${random - 1}`)
        expect(response.body.featured).toEqual(true)
        expect(response.body.imageUrl).toEqual(`www.${random - 1}.com`)
        expect(response.body.text).toEqual(`text${random - 1}`)
    })

    test('It should destroy an article document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const token = await admin.generateAuthToken()
        const article = new Article({ title: `title${random}`, contributor: `contributor${random}`, category: category, featured: false, imageUrl: `www.${random}.com`, text: `text${random}` })
        await article.save()
        const response = await request(app)
        .delete(`/api/admin/article/${article._id}`)
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual('Article deleted')
    })

    // Article tests not requiring Admin authorization
    test('It should get an article', async() => {
        const random = Math.floor(Math.random() * 10000)
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const article = new Article({ title: `title${random}`, contributor: `contributor${random}`, category: category, featured: false, imageUrl: `www.${random}.com`, text: `text${random}` })
        await article.save()
        const response = await request(app)
        .get(`/api/article/${article._id}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual(`title${random}`)
        expect(response.body.contributor).toEqual(`contibutor${random}`)
        expect(response.body.category).toEqual(category)
        expect(response.body.featured).toEqual(false)
        expect(response.body.imageUrl).toEqual(`www.${random}.com`)
        expect(response.body.text).toEqual(`text${random}`)
    })
    test('It should index all articles', async() => {
        const random = Math.floor(Math.random() * 10000)
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const article = new Article({ title: `title${random}`, contributor: `contributor${random}`, category: category, featured: false, imageUrl: `www.${random}.com`, text: `text${random}` })
        await article.save()
        const article2 = new Article({ title: `title${random + 1}`, contributor: `contributor${random + 1}`, category: category, featured: false, imageUrl: `www.${random + 1}.com`, text: `text${random + 1}` })
        await article2.save()
        const response = await request(app)
        .get(`/api/article`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(Array)
    })
})

/*** CONTRIBUTOR TESTS ***/
describe('Test the Contributor Endpoints', () => {
    // Contributor tests requiring Admin authorization
    test('It should create an contributor document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const token = await admin.generateAuthToken()
        const response = await request(app)
        .post('/api/admin/contributor')
        .send({ name: `name${random}` }) //might need to be field
        .set('Authorization', `Bearer ${token}`)


        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`Name${random}`)
    })

    test('It should update an contributor document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const contributor = new Contributor({ name: `name${random}`})
        await contributor.save()
        const token = await admin.generateAuthToken()
        const response = await request(app)
        .put(`/api/admin/contributor/${contributor._id}`)
        .send({ name: `name${random - 1}` })
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`Name${random - 1}`)
    })

    test('It should destroy an contributor document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const contributor = new Contributor({ name: `name${random}`})
        await contributor.save()
        const token = await admin.generateAuthToken()
        const response = await request(app)
        .delete(`/api/admin/contributor/${contributor._id}`)
        .set('Authorization', `Bearer ${token}`)


        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual('Contributor deleted')
    })

    //Contributor tests not requiring Admin authorization
    test('It should get a contributor', async() => {
        const random = Math.floor(Math.random() * 10000)
        const contributor = new Contributor({ name: `name${random}`})
        await contributor.save()
        const response = await request(app)
        .get(`/api/contributor/${contributor._id}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual(`name${random}`)
        expect(response.body.articles).toBe(Array)
    })
    test('It should index all contributors', async() => {
        const random = Math.floor(Math.random() * 10000)
        const contributor = new Contributor({ name: `name${random}` })
        await contributor.save()
        const contributor2 = new Contributor({ name: `name${random + 1}` })
        await contributor2.save()
        const response = await request(app)
        .get(`/api/contributor`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(Array)
    })
})

/*** CATEGORY TESTS ***/
describe('Test the Category Endpoints', () => {
    // Category tests requiring Admin authorization
    test('It should create a category document', async () => {
        const random = Math.floor(Math.random() * 10000)
        const admin = new Administrator({ name: `test${random}`, email: `test${random}@test.com`, password: "testpassword" })
        await admin.save()
        const token = await admin.generateAuthToken()
        const response = await request(app)
        .post('/api/admin/category')
        .send({ category: `category${random}`, sortOrder: random })
        .set('Authorization', `Bearer ${token}`)


        expect(response.statusCode).toBe(200)
        expect(response.body.category).toEqual(`category${random}`)
        expect(response.body.sortOrder).toEqual(random)
    })
    // Category tests not requiring Admin authorization
    test('It should get a category', async() => {
        const random = Math.floor(Math.random() * 10000)
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        console.log(category)
        const response = await request(app)
        .get(`/api/category/${category._id}`)

        console.log(response.body)
        expect(response.statusCode).toBe(200)
        expect(response.body.category).toEqual(`category${random}`)
        expect(response.body.sortOrder).toEqual(random)
    })
    test('It should index all categories', async() => {
        const random = Math.floor(Math.random() * 10000)
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const category2 = new Category({ category: `category${random + 1}`, sortOrder: (random +  1) })
        await category2.save()
        console.log(category, category2)
        const response = await request(app)
        .get(`/api/category`)

        console.log(response.body)
        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(Array)
    })
    test('It should index all articles in a category', async () => {
        const random = Math.floor(Math.random() * 10000)
        const category = new Category({ category: `category${random}`, sortOrder: random })
        await category.save()
        const categoryId = JSON.stringify(category._id)
        console.log(categoryId)
        const article = new Article({ title: `title${random}`, contributor: `contributor${random}`, category: category._id, featured: false, imageUrl: `www.${random}.com`, text: `text${random}` })
        await article.save()
        const article2 = new Article({ title: `title${random + 1}`, contributor: `contributor${random + 1}`, category: category._id, featured: false, imageUrl: `www.${random + 1}.com`, text: `text${random + 1}` })
        await article2.save()
        console.log(article.category)
        console.log(article, article2)
        const response = await request(app)
        .get(`/api/category/articles/${category._id}`)

        console.log(response.body)
        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(Array)
    })
})