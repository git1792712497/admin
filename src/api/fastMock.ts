import {fastMock} from "@/axios/config";


export function getImageList(){
  return fastMock.get({
    url:`/imageList`,
  })
}

export function getHistogramData(){
  return fastMock.get({
    url:`/histogram`,
  })
}
