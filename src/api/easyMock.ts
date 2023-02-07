import { easyMock } from "@/axios/config";


export function getChinaMapData(){
  return easyMock.get({
    url:`/chinaMapData`,
  })
}

export function getYunNanMapData(){
  return easyMock.get({
    url:`/yunNan`,
  })
}
