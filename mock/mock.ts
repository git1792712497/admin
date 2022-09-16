import { MockMethod } from 'vite-plugin-mock';

const logList = {
  total: 31,
  page: 1,
  page_size: 20,
};

export default [
	 {
    url: '/mock/api/getList',
    method: 'post',
    response: () => {
      return logList;
    },
  },
] as MockMethod[];
