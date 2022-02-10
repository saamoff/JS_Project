export default function loginError() {
    const msgErro = document.querySelector('#errorMsg p')
    const user = document.querySelector('#userLogin')
    const password = document.querySelector('#userPassword')

    msgErro.classList.remove('invisibility')
    msgErro.classList.add('visible')

    user.value = ''
    password.value = ''

    user.style.border = '1px solid #E9B425'
    password.style.border = '1px solid #E9B425'
}