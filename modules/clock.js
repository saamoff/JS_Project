export default function clock() {
  const date = new Date() 
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const dayOfWeek = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  const time = document.getElementById('getTime')
  const pDate = document.getElementById('setDate')

  let weekDay = ''
  switch(dayOfWeek){
    case 0:
      weekDay = 'domingo'
    break
    case 1:
      weekDay = 'segunda-feira'
    break
    case 2:
      weekDay = 'terca-feira'
    break
    case 3:
      weekDay = 'quarta-feira'
    break
    case 4:
      weekDay = 'quinta-feira'
    break
    case 5:
      weekDay = 'sexta-feira'
    break
    case 6:
      weekDay = 'sabado'
    break
    default:
      weekDay = 'Error'
  }

  let currentMonth = ''
  switch(month){
    case 0:
      currentMonth = 'janeiro'
    break
    case 1:
      currentMonth = 'fevereiro'
    break
    case 2:
      currentMonth = 'marco'
    break
    case 3:
      currentMonth = 'abril'
    break
    case 4:
      currentMonth = 'maio'
    break
    case 5:
      currentMonth = 'junho'
    break
    case 6:
      currentMonth = 'julho'
    break
    case 7:
      currentMonth = 'agosto'
    break
    case 8:
      currentMonth = 'setembro'
    break
    case 9:
      currentMonth = 'outubro'
    break
    case 10:
      currentMonth = 'novembro'
    break
    case 11:
      currentMonth = 'dezembro'
    break
    default:
      currentMonth = 'Erro'
  }

  time.innerText = `${hour<=9 ? '0' : ''}${hour}:${minutes<=9 ? '0' : ''}${minutes}`

  pDate.innerText = `${weekDay}, ${day} de ${currentMonth} de ${year}`

}