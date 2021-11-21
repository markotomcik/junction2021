const { Reward } = require('../models')

module.exports = {
  async new (req, res) {
    try {
      const reward = await Reward.create(req.body)
      return res.status(201).json(reward)
    } catch (err) {
      return res.status(400).json({
        error: 'The creaction of new reward failed.'
      })
    }
  },

  async get (req, res) {
    try {
      const reward = await Reward.findByPk(req.params.id)
      if (reward === null) {
        throw new Error('Reward not found.')
      }
      return res.status(200).json(reward)
    } catch (err) {
      return res.status(404).json({
        error: 'There was no reward'
      })
    }
  },

  async update (req, res) {
    try {
      const reward = await Reward.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      return res.status(200).json({ ...req.body, returned: !!reward })
    } catch (err) {
      return res.status(400).json({
        error: 'The update of reward failed.'
      })
    }
  }
}
