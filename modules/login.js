import loginError from './loginError.js';
import timerHome from './timerHome.js'

export default function login() {
  const user = document.querySelector('#userLogin');
  const password = document.querySelector('#userPassword');
  const btnContinue = document.querySelector('#btnLogin button');
  const loginPage = document.querySelector('#loginMain');
  const homePage = document.querySelector('#homeMain');
  const homeFooter = document.querySelector('#footerHome')

  btnContinue.addEventListener('click', () => {
    if (user.value === 'admin' && password.value === 'admin') {
      history.pushState(null, "Home - Intranet", "https://saamoff.github.io/JS_Project/home");
      loginPage.style.display = 'none';
      homePage.style.display = 'flex';
      homeFooter.style.display = 'grid';
      timerHome();
    } else {
      loginError();
    }
  });
}
