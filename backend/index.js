const express = require('express')
const {getAirQualityIndexFromUSB} = require('./helpers/airQualityIndexService')
const app = express()
const port = 3000

app.get('/aqi', (req, res) =>{
  res.send({aqi:getAirQualityIndexFromUSB()})
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})