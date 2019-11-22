const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

// Models
const model = require('./models/index')

// Routes
const index = require('./routes/index')
const unidades = require('./routes/unidades')

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/', index)
app.use('/unidades', unidades)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

model.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server running on port ', port)
  })
})
