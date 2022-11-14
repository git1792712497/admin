let points = [{id:1},{id:10},{id:66},{id:9}];



	let array = points.sort((x,y) => x.id - y.id)

	console.log(array)



//冒泡排序
function bubbleSort(arr) {
	let len = arr.length
	for (let i = 0; i < len - 1; i++) {
		// 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let num = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = num
			}
		}
		// 每次遍历结束，都能找到一个最大值，放在数组最后
	}
	return arr
}

//测试
console.log(bubbleSort([2, 3, 1, 5, 4])) // [1, 2, 3, 4, 5]
