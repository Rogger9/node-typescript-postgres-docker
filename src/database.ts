import { Sequelize } from 'sequelize'

const database = process.env.DB_NAME ?? 'test'
const user = process.env.DB_USER ?? 'postgres'
const password = process.env.DB_PASSWORD ?? ''

export const sequelize = new Sequelize(database, user, password, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5001,
})
;(async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()
