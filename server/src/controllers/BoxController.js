const { Box } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async new (req, res) {
    try {
      const box = await Box.create(req.body)
      return res.status(201).json(box)
    } catch (err) {
      return res.status(400).json({
        error: 'The creaction of new box failed.'
      })
    }
  },

  async get (req, res) {
    try {
      const box = await Box.findByPk(req.params.id)
      if (box === null) {
        throw new Error('Box not found.')
      }
      return res.status(200).json(box)
    } catch (err) {
      return res.status(404).json({
        error: 'The box was not found.'
      })
    }
  },

  async getInRadius (req, res) {
    try {
      const boxes = await Box.findAll({
        where: {
          locationX: {
            [Op.between]: [req.params.locationX - req.params.radius, req.params.locationX + req.params.radius]
          },
          locationY: {
            [Op.between]: [req.params.locationY - req.params.radius, req.params.locationY + req.params.radius]
          }
        }
      })
      return res.status(200).json(boxes)
    } catch (err) {
      return res.status(400).json({
        error: 'The boxes were not found.'
      })
    }
  },

  async update (req, res) {
    try {
      const box = await Box.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      return res.status(200).json({ ...req.body, returned: !!box })
    } catch (err) {
      return res.status(400).json({
        error: 'The update of box failed.'
      })
    }
  }
}
