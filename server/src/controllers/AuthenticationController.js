const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).send({
        userId: user.id
      })
    } catch (err) {
      res.status(400).send({
        error: 'Cannot create an account'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },
  async update (req, res) {
    try {
      const user = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      return res.status(200).json({ ...req.body, returned: !!user })
    } catch (err) {
      return res.status(400).json({
        error: 'The update of user failed.'
      })
    }
  },
  async deactivate (req, res) {
    try {
      const user = await User.update({
        active: false
      }, {
        where: {
          id: req.params.id
        }
      })
      return res.status(200).json({ ...req.body, returned: !!user })
    } catch (err) {
      return res.status(400).json({
        error: 'The deactivation of user failed.'
      })
    }
  }
}
