export default function loginError() {
    const msgErro = document.querySelector('#errorMsg p')
    const user = document.querySelector('#userLogin')
    const password = document.querySelector('#userPassword')

    msgErro.classList.remove('invisibility')
    msgErro.classList.add('visible')
    user.classList.add('loginError')
    password.classList.add('loginError')

    
}