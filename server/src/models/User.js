const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  console.log(options)

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobilenumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adressline1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adressline2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    postalcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  return User
}
