export default function timerHome(){
  const seconds = document.querySelector('#timer')
  let number = 600

  setInterval(() => {
      seconds.innerHTML = number
      number--
      if(number === 0){
        window.location.reload()
      }
  }, 1000);
}