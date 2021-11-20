const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const passwordPattern = '^[a-zA-Z0-9]{8,50}$'

    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(passwordPattern)
      )
    })

    const { error } = schema.validate(req.body) // { error, value }

    if (error) {
      switch (error.details[0].context.key) {
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
