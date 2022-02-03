let selectedColor = 'blue'

const painting = document.querySelector('.painting')

painting.addEventListener('click',function(e){
    //console.log('testing, testing, 123')
    //console.log(e.target)
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
})

const colorRed = document.querySelector('#red')
const colorYellow = document.querySelector('#yellow')
const colorBlue = document.querySelector('#blue')
const colorGreen = document.querySelector('#green')

colorRed.addEventListener('click', function(){
    selectedColor = 'red'
})

colorYellow.addEventListener('click', function(){
    selectedColor = 'yellow'
})

colorBlue.addEventListener('click', function(){
    selectedColor = 'blue'
})

colorGreen.addEventListener('click', function(){
    selectedColor = 'green'
})