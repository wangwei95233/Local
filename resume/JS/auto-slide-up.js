!function(){
    setTimeout(function(){
    siteWelcome.classList.remove('active')
},500)
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 1;i<specialTags.length; i++){
    specialTags[i].classList.add('offset')        
}           
setTimeout(function(){
    findClosestAndRemoveOffset()
}, 501)
window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
})

// help
function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1;i<specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop-window.scrollY) < Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
            minIndex = i
        }
    }
    // minIndex 就是离窗口最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    // id =='siteAbout' 'a[href=#siteAbout]'
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
    }
}.call()