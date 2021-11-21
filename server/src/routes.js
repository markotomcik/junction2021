const AuthenticationController = require('./controllers/AuthenticationController')
const BoxController = require('./controllers/BoxController')
const FoodController = require('./controllers/FoodController')
const RewardController = require('./controllers/RewardController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // User Routes
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.put('/user/update/:id',
    AuthenticationController.update)

  app.put('/user/deactivate/:id',
    AuthenticationController.deactivate)

  // Box Routes
  app.post('/box/new',
    BoxController.new)

  app.get('/box/:id',
    BoxController.get)

  app.get('/box/:locationX/:locationY/:radius',
    BoxController.getInRadius)

  app.put('/box/:id',
    BoxController.update)

  app.get('/box/:id/food',
    BoxController.getFood)

  // Food Routes
  app.post('/food/new',
    FoodController.new)

  app.get('/food/:id',
    FoodController.get)

  app.put('/food/:id',
    FoodController.update)

  // Reward Routes
  app.post('/reward/new',
    RewardController.new)

  app.get('/reward/:id',
    RewardController.get)

  app.put('/reward/:id',
    RewardController.update)
}
