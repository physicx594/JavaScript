



var screenX = document.querySelector('.screenX')
var screenY = document.querySelector('.screenY')
var clientX = document.querySelector('.clientX')
var clientY = document.querySelector('.clientY')
var pageX = document.querySelector('.pageX')
var pageY = document.querySelector('.pageY')
var mouseImg = document.querySelector('.mouseImg')

function goWhere(e){
    screenX.textContent = e.screenX;
    screenY.textContent = e.screenY;
    clientX.textContent = e.clientX;
    clientY.textContent = e.clientY;
    pageX.textContent = e.pageX;
    pageY.textContent = e.pageY;
    mouseImg.style.left = e.clientX + 'px'
    mouseImg.style.top = e.clientY + 'px'
}

var body = document.body
body.addEventListener('mousemove', goWhere)
