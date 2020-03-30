const photoLayout = (arr) => {
    let pushArr = arr
    let winWidth = window.innerWidth
    let padLeft = 10
    let padTop = 10
    let imgWidth = Math.ceil(winWidth * 0.8333333)
    let col = (winWidth >= 1200 && 3) || (winWidth >= 920 && 2) || (winWidth >= 400 && 1)
    let width = (col == 3 && (imgWidth/col)-(col*padLeft)) || (col == 2 && (imgWidth/col)-(col*padLeft)) || (col == 1 && (imgWidth/col)-(col*padLeft))
    let divWidth = width
    for( let i = 0; i < pushArr.length; i++){
        let image = new Image()
        image.src = pushArr[i].url
        image.onload = () => {
            pushArr[i]['height'] = width/image.width * image.height
        }
        pushArr[i]['width'] = divWidth
        if((i + 1) <= col){
            pushArr[i]['top'] = 0
            pushArr[i]['left'] = (i * divWidth) + (i * padLeft)
        }else{
            pushArr[i]['top'] = pushArr[i - col]['height'] + pushArr[i - col]['top'] + (Math.ceil((i + 1) / col) * padTop)
            pushArr[i]['left'] = pushArr[i - col]['left']
        }
        console.log(pushArr[i]['height'])
    }
    return pushArr
}

export {
    photoWidth,
    photoLayout
} 