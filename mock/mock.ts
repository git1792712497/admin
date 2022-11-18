import { MockMethod } from 'vite-plugin-mock';
import {mapData} from './mapData/china'
import {yunNan} from "./mapData/yunNan";


export default [
	 {
    url: '/mock/chinaMapData',
    method: 'get',
    response: () => {
      return mapData;
    },
  },
  {
    url: '/mock/yunNanData',
    method: 'get',
    response: () => {
      return yunNan;
    },
  },
] as MockMethod[];
