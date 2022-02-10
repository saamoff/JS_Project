export default function logout() {
  const btnLogout = document.querySelector('#logout')

  btnLogout.addEventListener('click', ()=> {
    history.pushState(null, "Home - Intranet", "https://saamoff.github.io/JS_Project/");
    window.location.reload();
  })
}