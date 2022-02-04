import login from './modules/login.js'
import clock from './modules/clock.js'
import logout from './modules/logout.js'

login()
logout()

setInterval(() => {
  clock()
}, 1000);
