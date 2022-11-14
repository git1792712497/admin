let object = {
    name:'周龙权',
    age:18
}

//监听所以属性设置获取
Object.keys(object).forEach(key => {
    let value = object[key]
    //给对象定义属性描述符
    Object.defineProperty(object,key,{
        //访问属性描述符
        get(){
            console.log(`监听object对象${key}属性被访问`)
            return value
        },
        //设置属设置符
        set(newValue) {
            console.log(`监听object对象${key}属性被设置值`)
            value = newValue
        }
        
    })
})

console.log(object.name)
object.age = 30
