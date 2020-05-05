const hour_hand = document.querySelector('.hour_hand')
const minute_hand = document.querySelector('.minute_hand')
const second_hand = document.querySelector('.second_hand')
const nowTime = document.querySelector('.nowTime')

const clockTime = () => {
  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  const nt = h +" "+":"+" "+m+" "+":"+" "+ s

  hour_hand.style.transform = `rotate(${(h * 30 + m * 0.5) - 90}deg)`
  minute_hand.style.transform = `rotate(${(m * 6 + s * 0.1) - 180}deg)`
  second_hand.style.transform = `rotate(${s * 6 - 180}deg)`
  setTimeout(clockTime, 1000)
  nowTime.innerHTML = nt
}
clockTime()
