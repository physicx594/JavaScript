let JN = document.querySelector('.joinnow')
let SI = document.querySelector('.signIn')

//監聽
JN.addEventListener('click',JoinNow)
SI.addEventListener('click',SignIn)


//註冊
function JoinNow(){
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    let account = {}
    account.email = email
    account.password = password

    let xhr = new XMLHttpRequest()
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)
    xhr.setRequestHeader('Content-type','application/json')
    let data = JSON.stringify(account)
    xhr.send(data)
    xhr.onload = function(){
        let callbackdata = JSON.parse(xhr.responseText) 
        let callbackmsg = callbackdata.message
        if(callbackmsg == '帳號註冊成功'){
            alert('帳號註冊成功')
        }else{
            alert(callbackmsg)
        }
        console.log(xhr)
    }
}

//登入
function SignIn(){
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    let account = {}
    account.email = email
    account.password = password

    let xhr = new XMLHttpRequest()
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true)
    xhr.setRequestHeader('Content-type','application/json')
    let data = JSON.stringify(account)
    xhr.send(data)
    xhr.onload = function(){
        let callbackdata =JSON.parse(xhr.responseText)
        let callbackmsg = callbackdata.message
        if(callbackmsg == '登入成功'){
            alert('登入成功')
        }else{
            alert(callbackmsg)
        }
    }
}