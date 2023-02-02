import type {FormRules} from 'element-plus'

export const rules: FormRules  = {
  type: [
    {
      type: 'number',
      required: true,
      message: '菜单类型是必选项',
      trigger:"blur",
    }
  ],
  sort: [
    {
      type: 'number',
      required: true,
      message: '菜单序号是必选项',
      trigger:"blur",
    }
  ],
  title: [
    {
      type: 'string',
      required: true,
      message: '菜单标题是必填项',
      trigger:"blur",
    }
  ],
  name: [
    {
      type: 'string',
      required: true,
      message: '菜单标识是必填项',
      trigger:"blur",
    }
  ],
  icon: [
    {
      required: true,
      message: '菜单图标是必选项',
      trigger:"change",
    }
  ],
  path: [
    {
      type: 'string',
      required: true,
      message: '菜单路径是必填项',
      trigger:"blur",
    },
    {
      validator(rule, value, callback, source, options) {
        const regex = /^\//
        if (!regex.test(value)) {
          callback(new Error('菜单路径必须以斜杠开头'))
        }else {
          callback()
        }
      }
    }
  ],
  component:[
    {
      type: 'string',
      required: true,
      message: '组件路径是必填项',
      trigger:"blur",
    },
    {
      validator(rule, value, callback, source, options) {
        const regex = /^\//
        if (!regex.test(value)) {
          callback(new Error('组件路径必须以斜杠开头'))
        }else {
          callback()
        }
      }
    }
  ]
}
