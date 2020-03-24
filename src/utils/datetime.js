const getTime = (time) => {
    let date = new Date(parseInt(time)).toLocaleDateString()
    return date
}

export default getTime