import {RouteRecordRaw} from "vue-router";

export const toolComponents: RouteRecordRaw[] = [
  {
    path: '/toolComponents',
    name: 'toolComponents',
    meta: {
      index: 1,
      title: '功能组件',
      icon:'FolderAdd'
    },
    children: [
      {
        path: 'popup',
        name: 'popup',
        component: () => import('@/views/toolComponents/popup.vue'),
        meta: {
          title: '弹出层',
          icon:'Menu'
        }
      }
    ]
  }
]