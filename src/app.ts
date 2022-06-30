import express from 'express'

const app = express()
app.use(express.json())

app.set('port', process.env.PORT ?? 5000)

app.use('/', (_, res) => {
  res.send('Hello Worldss!!')
})

export default app
