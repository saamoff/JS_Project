export default function loginError() {
    const msgErro = document.querySelector('#errorMsg p')
    const user = document.querySelector('#userLogin')
    const userDiv = document.querySelector('#userImg1')
    const password = document.querySelector('#userPassword')
    const passwordDiv = document.querySelector('#userImg2')

    msgErro.classList.remove('invisibility')
    msgErro.classList.add('visible')

    user.value = ''
    password.value = ''

    userDiv.style.border = '1px solid #E9B425'
    passwordDiv.style.border = '1px solid #E9B425'
}