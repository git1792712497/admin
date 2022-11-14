let arr = [[1,2],[3,4]];


let newArray = arr.flat(1)//默认是降1层

console.log(newArray)


//给数组降维,便利
let arr1 = arr.flatMap((item,index,arr) => {
    return item * 10
})

console.log(arr1)