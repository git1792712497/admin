export default defineComponent({
	name:'demi',
	setup(){
		
		const a = ref(1)
		setInterval(() => {
			a.value += 1
		},100)
		return () => {
			return (
					<div>
						{a.value}
					</div>
			)
		}
	}
})