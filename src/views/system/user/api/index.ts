import { koa } from '@/axios/config'

export function getUserRegisterApi(data) {
  return koa.post({
    url: `/user/register`,
    data,
  })
}

export function getUserListApi() {
  return koa.get({
    url: `/user/list`,
  })
}

export function getUserUpdateApi(data) {
  return koa.patch({
    url: `/user/update`,
    data
  })
}

export function getUserDeleteApi(id) {
  return koa.delete({
    url: `/user/delete`,
    data: {
      id,
    },
  })
}
