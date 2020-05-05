const wrapper = document.querySelector('.wrapper')

window.onload = () => {
  const title = `
    <div class="title">
        <div class="topLine">
            <span>X</span>
            <hr>
            <span>X</span>
        </div>
        <div class="content">
            <h1>九九乘法表</h1>
            <P>MULTIPLICATION CHART</P>
        </div>
        <div class="bottomLine">
            <span>X</span>
            <hr>
            <span>X</span>
        </div>
    </div>`
  let box = ''
  // let rightNum = ''
  // let leftNum = ''
  for (let i = 2; i < 10; i++) {
    let rightNum = ''
    let leftNum = ''
    for (let j = 2; j < 10; j++) {
      if (j < 5) {
        leftNum += `<p>${i} x ${j} = ${i * j}</p>`
      } else {
        rightNum += `<p>${i} x ${j} = ${i * j}</p>`
      }
    }
    box += `
    <div class="box">
        <div class="left">
            <h1 class="num">${i}</h1>
            ${leftNum}
        </div>
        <div class="right">
            ${rightNum}
        </div>
    </div>`
  }
  wrapper.innerHTML = title + box
}
