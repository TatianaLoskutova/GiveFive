function dontGiveMeFive(start, end) {
    let res = []

    for (let i = start; i <= end ; i++) {
        let iStr = i.toString()
        if (!iStr.includes('5')) {
            res.push(i)
        }
    }
    return res.length
}