const server = require('../server')

describe('Account', () => {
  describe('POST /account/create', () => {
    it('should fail if nothing is provided', (done) => {
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
})
