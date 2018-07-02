window.$ = jQuery

var buttons = $('.container .buttons ul li')

for(let i=0;i<buttons.length;i++){
  $(buttons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var p = index * -920
    $('.images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
    activeButton(buttons.eq(n))      
  })
}


var n=0;
var size= buttons.length
playSlide(n%size)

var timerId = setTimer()


function setTimer(){
  return setInterval(() =>{
  n +=1
  playSlide(n%size)
},1000)
}

function playSlide(index){
  buttons.eq(index).trigger('click')
}

function activeButton(n){
  buttons.eq(n).addClass('active')
  .siblings('.active').removeClass('active')
}


$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})

$('.window').on('mouseleave',function(){
  timerId = setTimer()
})