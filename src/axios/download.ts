import {AxiosResponse} from 'axios'

export function download(res: AxiosResponse){
  let filename = res.headers["content-disposition"];
  filename = decodeURI(filename.split(";")[1].split("filename=")[1]);
  let url = URL.createObjectURL(new Blob([res.data], {type: res.headers['content-type']}));
  let a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click(); //执行下载
  URL.revokeObjectURL(a.href); //释放url
  document.body.removeChild(a); //释放标签
}