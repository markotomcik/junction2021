module.exports = (sequelize, DataTypes) =>
  sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiringDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })
