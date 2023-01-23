import {RouteRecordRaw} from "vue-router";

export const directives: RouteRecordRaw[] = [
  {
    path: '/components',
    name: 'components',
    meta: {
      index: 3,
      title: '组件封装',
      icon: 'Cpu'
    },
    children: [
      {
        path: 'noticeBar',
        name: 'noticeBar',
        component: () => import('@/views/components/noticeBar.vue'),
        meta: {
          title: '通告栏',
          icon:'Menu'
        }
      },
      {
        path: 'svgIcon',
        name: 'svgIcon',
        component: () => import('@/views/components/svgIcon.vue'),
        meta: {
          title: 'svg图标',
          icon: 'Menu'
        }
      },
    ]
  }
]
