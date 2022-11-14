const dom = document.querySelector('#id') as HTMLImageElement
//类型断言(把类型转换为更具体的)
dom.src = 'https://'


class Person{

}

class Student extends Person{
	studying(){
	
	}
}

function Hello(p: Person){
	(p as Student).studying()
}

const stu = new Student()
Hello(stu)
