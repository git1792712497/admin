export interface AddMenuForm {
  type?: 1 | 2 | 3
  name: string
  icon: string
  path: string
  hidden:0 | 1,
  fullScreen: 0 | 1,
  keepAlive:0 | 1,
  component:string,
  sort:number,
  title:string
}
