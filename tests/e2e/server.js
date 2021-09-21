const supertest = require('supertest')

const url = 'http://localhost:3000/api'

const server = supertest(url)

module.exports = server
