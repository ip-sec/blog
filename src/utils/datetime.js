const getTime = (data) => {
    let date = data
    if(Object.prototype.toString.call(date) === '[object Array]'){
        date.forEach((item)=>{
            item.datetime = new Date(parseInt(item.datetime)).toLocaleDateString()
        })
    }else if(Object.prototype.toString.call(date.data) === '[object Array]'){
        date.data.forEach((item)=>{
            item.datetime = new Date(parseInt(item.datetime)).toLocaleDateString()
        })
    }else{
        date.datetime = new Date(parseInt(date.datetime)).toLocaleDateString()
    }
    return date
}

export default getTime