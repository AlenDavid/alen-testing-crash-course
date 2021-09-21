const login = require('../../../src/routes/auth/login')

describe('/auth', () => {
  describe('POST /auth/login', () => {
    it('should fail when nothing is provided', async () => {
      const errors = {
        email: ['The email field is required.'],
        password: ['The password field is required.']
      }

      const expected = {
        statusCode: 400,
        body: JSON.stringify({ errors })
      }

      expect(await login()).toEqual(expected)
    })
  })
})
