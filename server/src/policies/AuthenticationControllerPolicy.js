const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const passwordPattern = '^[a-zA-Z0-9]{8,50}$'

    const schema = Joi.object({
      username: Joi.string(),
      firstname: Joi.string(),
      lastname: Joi.string(),
      fullname: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(passwordPattern)
      ),
      birth: Joi.date(),
      mobilenumber: Joi.number(),
      adressline1: Joi.string(),
      adressline2: Joi.string(),
      postalcode: Joi.number(),
      city: Joi.string()
    })

    const { error } = schema.validate(req.body) // { error, value }
    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username.'
          })
          break
        case 'firstname':
          res.status(400).send({
            error: 'You must provide a valid first name.'
          })
          break
        case 'lastname':
          res.status(400).send({
            error: 'You must provide a valid last name.'
          })
          break
        case 'fullname':
          res.status(400).send({
            error: 'You must provide a valid full name.'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password provided failed to match the following rules.',
            rules: [
              'It must contain ONLY the following characters: lower case, upper case, numerics.',
              'It must be at least 8 characters long and not greater than 50 characters in length.'
            ]
          })
          break
        case 'birth':
          res.status(400).send({
            error: 'You must provide a valid birth date.'
          })
          break
        case 'mobilenumber':
          res.status(400).send({
            error: 'You must provide a valid mobile number.'
          })
          break
        case 'adressline1':
          res.status(400).send({
            error: 'You must provide a valid adress.'
          })
          break
        case 'adressline2':
          res.status(400).send({
            error: 'You must provide a valid adress.'
          })
          break
        case 'postalcode':
          res.status(400).send({
            error: 'You must provide a valid postal code.'
          })
          break
        case 'city':
          res.status(400).send({
            error: 'You must provide a valid city.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    } else {
      next()
    }
  }
}
