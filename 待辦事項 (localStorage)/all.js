let btnSend = document.querySelector('.btnSend')
let list = document.querySelector('.list')
let data = JSON.parse(localStorage.getItem('listData')) || [];

btnSend.addEventListener('click', goData);
list.addEventListener('click', listDelete)
updateList(data)

//加入 localstorage ，即時更新
function goData(){
    let textContent = document.querySelector('.textContent').value
    let textContentToDo = {
        content: textContent
      };
    data.push(textContentToDo)
    updateList(data)
    localStorage.setItem('listData',JSON.stringify(data))
}

//localstorage 轉到網頁上

function updateList(data){
    str = '';
    let len = data.length
    for(i=0; i<len; i++){
        str += `<li class="d-flex justify-content-between"><span>${data[i].content} </span> <a href="#" style="color:red;text-decoration:none" data-num= ${i} >X </a> </li>`
    }
    list.innerHTML = str
} 

//刪除事項
function listDelete(e){
    if(e.target.nodeName !== 'A'){return}
    let index = e.target.dataset.num
    data.splice(index, 1)
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data)
}

// document.querySelector('.body').style.hight = window.innerHeight + "px"