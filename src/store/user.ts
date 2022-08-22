import { defineStore} from "pinia";

import {ref} from 'vue'


export const user = defineStore('user',() => {
	const app = ref(1000)

	return {
		app
	}
})
