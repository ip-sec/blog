// const getTime = (data) => {
//     let date = data
//     if(date.datetime != 'undefined'){
//         date.datetime = new Date(parseInt(date.datetime)).toLocaleDateString()
//     }else if(Object.prototype.toString.call(date) === '[object Array]' && date.datetime != 'undefined'){
//         date.forEach((item)=>{
//             item.datetime = new Date(parseInt(item.datetime)).toLocaleDateString()
//         })
//     }else if(Object.prototype.toString.call(date.data) === '[object Array]' && date.datetime != 'undefined'){
//         date.data.forEach((item)=>{
//             item.datetime = new Date(parseInt(item.datetime)).toLocaleDateString()
//         })
//     }else{
//         return date
//     }
// }
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
    