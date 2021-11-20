module.exports = (sequelize, DataTypes) =>
  sequelize.define('Box', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    locationX: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    locationY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['edible', 'inedibleForHumans', 'inedible'],
      allowNull: false
    }
  })
