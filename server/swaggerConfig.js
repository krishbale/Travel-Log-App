const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Description of your API'
    }
  },
  apis: ['router/auth.js'] // Path to your API routes
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
