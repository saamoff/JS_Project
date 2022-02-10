export default function iconsWeather(data){
  const $ = document.querySelector.bind(document)
  let weather = data.current.condition.text
  let addIcon = ''

  if(weather.includes('Sun')){
    addIcon = './assets/iconsWeather/sun.png'

  }else if(weather.includes('fog')){
    addIcon = './assets/iconsWeather/fog.png'
  
  }else if(weather.includes('Cloudy')){
    addIcon = './assets/iconsWeather/cloudy.png'
  
  }else if(weather.includes('rain')){
    addIcon = './assets/iconsWeather/rain.png'
  
  }else if(weather.includes('thunder')){
    addIcon = './assets/iconsWeather/thunder.png'
  
  }
  return addIcon
}
