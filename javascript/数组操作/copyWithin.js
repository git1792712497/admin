// copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
// copyWithin()会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置。
// 参数：
// target	必需。复制到指定目标索引位置。
// start	可选。元素复制的起始位置。
// end	可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
 let arr = [1, 2, 3, 4, 5]
 console.log(arr.copyWithin(0, 0, arr.length)) // [4, 5, 3, 4, 5]
