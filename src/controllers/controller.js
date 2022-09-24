const axios = require('axios')
const Weather = require('../model/Weather')

exports.renderHomePage = (_req, res) => {
  res.render('index', {
    weather: '',
  })
}

exports.getWeather = async (req, res) => {
  const CITY_NAME = req.body.city
  const API_KEY = '7380d589a8aee61d2a9626459bfbc27f'
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`

  const WEATHER = new Weather(CITY_NAME)
  WEATHER.validateUserInput()

  if (WEATHER.errors.length) {
    res.render('index', { error: WEATHER.errors.toString() })
  } else {
    await axios
      .get(WEATHER_URL)
      .then((response) => {
        const { temp: temperature } = response.data.main
        const { name: location } = response.data

        res.render('index', {
          weather: `${location}의 현재 온도는 ${temperature}도 `,
        })
      })
      .catch((Error) => {
        console.log(Error)
      })
  }
}

exports.renderAboutPage = (_req, res) => {
  res.render('about')
}
