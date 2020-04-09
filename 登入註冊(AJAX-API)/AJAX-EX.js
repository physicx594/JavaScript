var JN = document.querySelector('.joinnow')
var SI = document.querySelector('.signIn')

//監聽
JN.addEventListener('click',JoinNow)
SI.addEventListener('click',SignIn)


//註冊
function JoinNow(){
    var email = document.querySelector('.email').value
    var password = document.querySelector('.password').value
    var account = {}
    account.email = email
    account.password = password

    var xhr = new XMLHttpRequest()
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)
    xhr.setRequestHeader('Content-type','application/json')
    var data = JSON.stringify(account)
    xhr.send(data)
    xhr.onload = function(){
        var callbackdata = JSON.parse(xhr.responseText) 
        var callbackmsg = callbackdata.message
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
    var email = document.querySelector('.email').value
    var password = document.querySelector('.password').value
    var account = {}
    account.email = email
    account.password = password

    var xhr = new XMLHttpRequest()
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true)
    xhr.setRequestHeader('Content-type','application/json')
    var data = JSON.stringify(account)
    xhr.send(data)
    xhr.onload = function(){
        var callbackdata =JSON.parse(xhr.responseText)
        var callbackmsg = callbackdata.message
        if(callbackmsg == '登入成功'){
            alert('登入成功')
        }else{
            alert(callbackmsg)
        }
    }
}