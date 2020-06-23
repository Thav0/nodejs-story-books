const express = require('express')
const connectDB = require('./config/db')
const morgan = require('morgan')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')

dotenv.config({ path: '.config/config.env' })

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'handlebars')

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} monde on port ${PORT} `))
