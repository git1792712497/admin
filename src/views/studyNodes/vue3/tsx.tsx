export default defineComponent({
	name:'tsx',
	setup(){
		const a = ref(1)
		setInterval(() => {
			a.value += 1
		},100)
		const handle = () => {
			console.log('aaa')
		}
		
		let arr = [1,2,3,4,5,6]
		
		return () => (
				<section>
					{
						arr.map(item => {
							return <div class={'caret-amber-200 caret-amber-400'}>{item}</div>
						})
					}
				</section>
		)
	}
})