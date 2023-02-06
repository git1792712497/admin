import { MockMethod } from 'vite-plugin-mock';


export default [
	 {
    url: '/mock',
    method: 'get',
    response(){
      return [1,2,3,4,5];
    },
  },
] as MockMethod[];
