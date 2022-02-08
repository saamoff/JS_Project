export default function logout() {
  const btnLogout = document.querySelector('#logout')

  btnLogout.addEventListener('click', ()=> {
    window.location.reload();
  })
}