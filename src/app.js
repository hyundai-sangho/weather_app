const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const router = require('./router')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'hbs')

app.use('/', router)

app.listen(3000, () => {
  '3000번 포트 서버 작동 중'
})
