import {RouteRecordRaw} from "vue-router";

export const tools: RouteRecordRaw[] = [
  {
    path: '/tools',
    name: 'tools',
    meta: {
      index: 3,
      title: '常用功能',
      icon:'FolderAdd'
    },
    children: [
      {
        path: 'VueUse',
        name: 'VueUse',
        component: () => import('@/views/tools/VueUse.vue'),
        meta: {
          title: 'VueUse使用',
          icon: 'Menu'
        }
      },
      {
        path: 'lodash',
        name: 'lodash',
        component: () => import('@/views/tools/lodash.vue'),
        meta: {
          title: 'lodash使用',
          icon: 'Menu'
        }
      },
      {
        path: 'pageSelection',
        name: 'pageSelection',
        component: () => import('@/views/tools/pageSelection.vue'),
        meta: {
          title: 'element分页选择',
          icon:'Menu'
        }
      },
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