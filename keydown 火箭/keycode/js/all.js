var body = document.body

function gofly(e){
    console.log(e.keyCode)
    switch(e.keyCode){  
        case 49:
            document.querySelector('.rocket-1').style.bottom = '2000px'
            break;
        case 50:
            document.querySelector('.rocket-2').style.bottom = '2000px'
            break;
        case 51:
            document.querySelector('.rocket-3').style.bottom = '2000px'
            break;
    }

}

body.addEventListener('keydown',gofly,false)