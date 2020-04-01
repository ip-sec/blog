const photoLayout = (arr,dom) => {
    let pushArr = arr.concat()
    let winWidth = window.innerWidth
    let padLeft = 10
    let padTop = 10
    let imgWidth = Math.ceil(winWidth * 0.8333333) - 38
    let col = (winWidth >= 920 && 4) || (winWidth > 768 && 3) || (winWidth > 400 && 2) || (winWidth <= 400 && 1)
    let width = (imgWidth/col)-padLeft
    let divWidth = width
    let domHeight = []
    for( let i = 0; i < pushArr.length; i++){
        dom.$children[i].$el.style.width = divWidth+'px'
        pushArr[i]['height'] = dom.$children[i].$el.offsetHeight
        if((i + 1) <= col){
            pushArr[i]['top'] = padTop
            pushArr[i]['left'] = (i * divWidth) + (padLeft * (i + 1))
            domHeight[i] = pushArr[i]['height'] + pushArr[i]['top']
        }else{
            pushArr[i]['top'] = Math.min.apply(null,domHeight) + padTop
            domHeight[domHeight.indexOf(Math.min.apply(null,domHeight))] += (pushArr[i]['height'] +  + padTop)
            for(let j = 0; j <= i; j++){
                if((pushArr[j]['height'] + pushArr[j]['top']) == (pushArr[i]['top'] - padTop)){
                    pushArr[i]['left'] = pushArr[j]['left']
                }
            }
        }
    }
    dom.$el.style.height = Math.max.apply(null,domHeight) + 'px'
    return pushArr
}

export {
    photoLayout
} 