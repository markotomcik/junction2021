module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'junction2021',
    user: process.env.DB_USER || 'junction2021',
    password: process.env.DB_PASS || 'lol',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './junction2021.sqlite'
    }
  }
}
