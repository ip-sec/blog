const photoLayout = (arr,dom,parent,size) => {
    let pushArr = arr
    let winWidth = window.innerWidth
    let padLeft = 10
    let padTop = 10
    let imgWidth = size
    let col = (winWidth >= 920 && 4) || (winWidth > 768 && 3) || (winWidth > 400 && 2) || (winWidth <= 400 && 1)
    let width = (imgWidth/col)-padLeft
    let divWidth = width
    let domHeight = []
    let domIndex = []
    for( let i = 0; i < pushArr.length; i++){
        dom[i].$el.style.width = divWidth+'px'
        pushArr[i]['height'] = dom[i].$el.clientHeight
        if((i + 1) <= col){
            pushArr[i]['top'] = padTop
            pushArr[i]['left'] = (i * divWidth) + (padLeft * (i + 1))
            domHeight[i] = pushArr[i]['height'] + pushArr[i]['top']
            domIndex[i] = i
        }else{
            pushArr[i]['top'] = Math.min.apply(null,domHeight) + padTop
            let index = domHeight.indexOf(Math.min.apply(null,domHeight))
            domHeight[index] += (pushArr[i]['height'] + padTop)
            pushArr[i]['left'] = pushArr[domIndex[index]]['left']
            domIndex[index] = i
        }
    }
    parent.$el.style.height = Math.max.apply(null,domHeight) + 'px'
    return pushArr
}

export {
    photoLayout
} 