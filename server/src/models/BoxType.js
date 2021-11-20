module.exports = (sequelize, DataTypes) =>
  sequelize.define('BoxType', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  })
