var sendBtn = document.querySelector('.textSend')

sendBtn.addEventListener('click', save)

function save(){
    var textName = document.querySelector('.textName')
    localStorage.setItem('myName', textName.value)
}

var getBtn = document.querySelector('.textGet')
getBtn.addEventListener('click', get)

function get(){
    alert(localStorage.getItem('myName'))
}