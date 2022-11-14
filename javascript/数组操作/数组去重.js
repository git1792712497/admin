let arr = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:1},{id:1}];
let newArr = [];

arr.forEach(item => {
    if(!newArr.find(v => v.id === item.id)){
        newArr.push(item)
    }
})

console.log(newArr)



//去重函数
function noRepetition(arr){
    let newArr = []
    arr.forEach(item => {
        if(!newArr.find(v => v.id === item.id)){
            newArr.push(item)
        }
    })
    return newArr
}


console.log(noRepetition(arr));



