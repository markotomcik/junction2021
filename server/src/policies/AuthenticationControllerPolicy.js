const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const passwordPattern = '^[a-zA-Z0-9]{8,32}$'

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
            error: `The passwrod privoded failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics.
            <br>
            2. It must be at least 8 characters ing legth and not greater than 50 characters length.
            `
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
