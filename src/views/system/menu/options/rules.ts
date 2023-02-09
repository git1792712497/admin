import type {FormRules} from 'element-plus'


export const catalogueRules: FormRules  = {
  sort: [
    {
      type: 'number',
      required: true,
      message: '目录序号是必选项',
      trigger:"blur",
    }
  ],
  title: [
    {
      type: 'string',
      required: true,
      message: '目录标题是必填项',
      trigger:"blur",
    }
  ],
  icon: [
    {
      required: true,
      message: '目录图标是必选项',
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
        const regex1 = /^\//
        if (!value){
          callback()
          return
        }
        if (regex1.test(value)) {
          callback()
        } else {
          callback(new Error('目录路径必须以斜杠开头'))
        }
      }
    }
  ],
}


export const buttonRules: FormRules  = {
  title: [
    {
      type: 'string',
      required: true,
      message: '按钮标题是必填项',
      trigger:"blur",
    }
  ],
  name: [
    {
      type: 'string',
      required: true,
      message: '按钮标识是必填项',
      trigger:"blur",
    }
  ],
  icon: [
    {
      required: true,
      message: '按钮图标是必选项',
      trigger:"change",
    }
  ],
  parentId: [
    {
      required: true,
      message: '父级按钮是必选项',
      trigger:"change",
    }
  ],
  sort: [
    {
      type: 'number',
      required: true,
      message: '按钮序号是必选项',
      trigger:"blur",
    }
  ],
}

export const menuRules: FormRules  = {
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
        const regex1 = /^\//
        const regex2 = /^http/
        if (!value){
          callback()
          return
        }
        if (regex1.test(value) || regex2.test(value)) {
          callback()
        } else {
          callback(new Error('菜单路径必须以斜杠开头或http://链接'))
        }
      }
    }
  ],
  component:[
    {
      type: 'string',
      required: false,
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
