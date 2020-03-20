import {myRandom} from './common.js'
function PhotoLayout (arr) {
    let pushArr = arr.concat()
    let winWidth = window.innerWidth
    let imgWidth = Math.floor(winWidth * 0.8333333)
    let col = (winWidth >= 1200 && 3) || (winWidth >= 920 && 2) || (winWidth >= 768 && 2) || (winWidth >= 300 && 1)
    let width = (winWidth >= 1200 && ((imgWidth / col) - (col * 10))) || (winWidth >= 920 && ((imgWidth / col) - (col * 10))) || (winWidth >= 768 && ((imgWidth / col) - (col * 10))) || (winWidth >= 300 && (imgWidth - (col * 10)))
    let divWidth = width
    for( let i = 0; i < pushArr.length; i++){
        pushArr[i]['height'] = myRandom(250, 400)
        pushArr[i]['width'] = divWidth
        if((i + 1) <= col){
            pushArr[i]['top'] = 0
            pushArr[i]['left'] = (i * divWidth) + (i * 10)
        }else{
            pushArr[i]['top'] = pushArr[i - col]['height'] + pushArr[i - col]['top'] + (Math.ceil((i + 1) / col) * 5)
            pushArr[i]['left'] = pushArr[i - col]['left']
        }
    }
    return pushArr
}

export {
    PhotoLayout
}