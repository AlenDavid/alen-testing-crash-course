async function endpoint (event, context) {
  const errors = {
    email: ['The email field is required.'],
    password: ['The password field is required.']
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ errors })
  }
}

module.exports = endpoint
