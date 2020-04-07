var from = [
    {Taiwan: 'taipei'}
];

var dataJson = JSON.stringify(from)
console.log(dataJson)
localStorage.setItem('country', dataJson)



var data = localStorage.getItem('country')
var getData = JSON.parse(data)

console.log(getData[0].Taiwan )