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
}
