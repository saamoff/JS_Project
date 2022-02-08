import iconsWeather from './iconsWeather.js'

export default function weather() {
  fetch('https://api.weatherapi.com/v1/current.json?key=c54d9525f89c41f0a7c194602220202&q=Juiz-de-Fora&aqi=no')

  .then(answer => answer.json())
  .then(data =>{
    const city = document.querySelector('#weatherHeader h1')
    const tempC = document.querySelector('#iconTemp h2')

    city.textContent = `${data.location.name}`
    tempC.textContent = `${data.current.temp_c.toFixed(0)}`
    
    let iconData = iconsWeather(data) 
    const iconHTML = document.querySelector('#icon img')
    iconHTML.src = iconData
  })
}