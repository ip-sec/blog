
function getTime (data) {
    if( Object.prototype.toString.call(data.data) === '[object Array]'){
        data.data.forEach((item)=>{
            getTime(item)
        })
    }
    if( Object.prototype.toString.call(data) === '[object Array]'){
        data.forEach((item)=>{
            getTime(item)
        })
    }else if( Object.prototype.toString.call(data) === '[object Object]' && data.datetime != undefined){
        data.datetime = new Date(parseInt(data.datetime)).toLocaleDateString()
    }else{
        return data
    }
}

export {
    getTime
}
    