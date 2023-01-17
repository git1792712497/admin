import type {FormRules} from 'element-plus'

export const rules: FormRules  = {
  username: [
    {
      type: 'string',
      required: true,
      message: '用户名称是必填项',
      trigger:"blur",
    }
  ],
  password: [
    {
      type: 'string',
      required: true,
      message: '用户密码是必填项',
      trigger:"blur",
    }
  ],
  roleId: [
    {
      required: true,
      message: '所属角色是必选项',
      trigger:"change",
    }
  ],
}
