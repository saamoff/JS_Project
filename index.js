import login from './modules/login.js'
import clock from './modules/clock.js'
import logout from './modules/logout.js'
import weather from './modules/weather.js'

login()
logout()
weather()
setInterval(() => {
  clock()
}, 1000);
