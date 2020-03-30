function debounce (fn, time) {
    let name = null
    return function () {
        let that = this
        let args = arguments
        clearTimeout(name)
        name = setTimeout(() => {
            fn.apply(that,args)
        },time)
    }
}
function throttle (fn, time) {
    let run = true
    return function () {
        let that = this
        let args = arguments
        if(!run) return
        run = false
        setTimeout(()=>{
            fn.apply(that,args)
            run = true
        },time)
    }
}
function throttleTwo (fn, time) {
    let last = 0
    return function () {
        let that = this
        let args = arguments
        let first = new Date().getTime()
        if(first - last > time){
            fn.apply(that,args)
            last = first
        }
    }
}
function myRandom (first, last) {
    return Math.floor((Math.random() * ( last - first))) + first
}
function launchFullscreen() {
    if(document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if(document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if(document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if(document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}
function exitFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
export { 
    throttle,
    throttleTwo,
    debounce,
    myRandom,
    launchFullscreen,
    exitFullscreen
}