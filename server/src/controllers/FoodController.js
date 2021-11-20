const { Food } = require('../models')

module.exports = {
  async new (req, res) {
    try {
      const food = await Food.create(req.body)
      return res.status(201).json(food)
    } catch (err) {
      return res.status(400).json({
        error: 'The creaction of new food failed.'
      })
    }
  },

  async get (req, res) {
    try {
      const food = await Food.findByPk(req.params.id)
      if (food === null) {
        throw new Error('Food not found.')
      }
      return res.status(200).json(food)
    } catch (err) {
      return res.status(404).json({
        error: 'There was not any food in the box'
      })
    }
  },

  async update (req, res) {
    try {
      const food = await Food.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      return res.status(200).json({ ...req.body, returned: !!food })
    } catch (err) {
      return res.status(400).json({
        error: 'The update of food failed.'
      })
    }
  }
}
