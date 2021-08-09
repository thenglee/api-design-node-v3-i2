import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  req.myData = 'data1'
  next()
}

app.get('/', [log, log, log], (req, res) => {
  res.send({ message: req.myData })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

// other CRUD routes
// app.put()
// app.delete()

app.get('/data', (req, res) => {
  res.send({ message: 'hi' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

// avoid: route matching on regex
app.get(/^\/(me)/, (req, res) => {
  res.send({ message: 'me' })
})

// avoid: route matching on glob
app.get('/users/*', (req, res) => {
  res.send({ message: 'user *' })
})

// param matching
app.get('/users/:id', (req, res) => {
  res.send(req.params.id)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
