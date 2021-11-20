const AuthenticationController = require('./controllers/AuthenticationController')
const BoxController = require('./controllers/BoxController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
// User Routes
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationControllerPolicy.login)

  // Box Routes
  app.post('/box/new',
    BoxController.new)

  app.get('/box/:id',
    BoxController.get)

  app.get('/box/:locationX/:locationY/:range',
    BoxController.getInRadius)

  app.put('/box/:id',
    BoxController.update)
}
