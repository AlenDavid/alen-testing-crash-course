const supertest = require('supertest')

const url = 'http://localhost:3000/api'

const server = supertest(url)

describe('Account', () => {
  test('POST /account/create', (done) => {
    const errors = {
      email: ['The email field is required.'],
      password: ['The password field is required.']
    }

    server
      .post('/account/create')
      .expect(400)
      .expect({ errors })
      .end(done)
  })
})
