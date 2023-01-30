import type {FormRules} from 'element-plus'

export const rules: FormRules  = {
  name: [
    {
      type: 'string',
      required: true,
      message: '角色名称是必填项',
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
          callback(new Error('路径必须已斜杠开头'))
        }else {
          callback()
        }
      }
    }
  ],
}
