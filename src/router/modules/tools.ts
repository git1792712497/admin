import {RouteRecordRaw} from "vue-router";

export const tools: RouteRecordRaw[] = [
  {
    path: '/tools',
    name: 'tools',
    meta: {
      index: 1,
      title: '通用功能',
      icon:'FolderAdd'
    },
    children: [
      {
        path: 'popup',
        name: 'popup',
        component: () => import('@/views/tools/popup.vue'),
        meta: {
          title: '弹出层',
          icon:'Menu'
        }
      },
      {
        path: 'aMap',
        name: 'aMap',
        component: () => import('@/views/tools/aMap.vue'),
        meta: {
          title: '高德地图',
          icon:'Menu'
        }
      },
      {
        path: 'validate',
        name: 'validate',
        component: () => import('@/views/tools/validate.vue'),
        meta: {
          title: '表单验证',
          icon:'Menu'
        }
      },
      {
        path: 'waterfall',
        name: 'waterfall',
        component: () => import('@/views/tools/waterfall.vue'),
        meta: {
          title: '瀑布流',
          icon:'Menu'
        }
      },
    ]
  }
]