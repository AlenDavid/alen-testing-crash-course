const server = require('../server')

describe('Authentication', () => {
  describe('POST /auth/login', () => {
    it('should fail if nothing is provided', (done) => {
      const errors = {
        email: ['The email field is required.'],
        password: ['The password field is required.']
      }

      server
        .post('/auth/login')
        .expect(400)
        .expect({ errors })
        .end(done)
    })
  })
})
