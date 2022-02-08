export default function iconsWeather(data){
  const $ = document.querySelector.bind(document)
  let weather = data.current.condition.text
  let addIcon = ''

  if(weather.includes('Sun')){
    addIcon = './assets/icons2/sun.png'

  }else if(weather.includes('fog')){
    addIcon = './assets/icons2/fog.png'
  
  }else if(weather.includes('Cloudy')){
    addIcon = './assets/icons2/cloudy.png'
  
  }else if(weather.includes('rain')){
    addIcon = './assets/icons2/rain.png'
  
  }else if(weather.includes('thunder')){
    addIcon = './assets/icons2/thunder.png'
  
  }
  return addIcon
}
