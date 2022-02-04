export default function logout() {
  const btnLogout = document.querySelector('#logout')
  console.log(btnLogout)

  btnLogout.addEventListener('click', ()=> {
    window.location.reload();
  })
}