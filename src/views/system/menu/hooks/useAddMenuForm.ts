import { reactive} from "vue";
import type {Ref} from 'vue'
import { AddMenuForm } from "../types/addMenuForm";


export let basicForm = reactive<AddMenuForm>({
  hidden:1,
  fullScreen:0,
  keepAlive:0,
  name:'',
  icon: 'Menu',
  path: '',
  sort:0,
  component:'',
  type:1,
  title:'',
  isLink:0,
  activePath:'',
  parentId:undefined,
  id:undefined
})

export function useResetForm(data?: AddMenuForm) {
  basicForm.type = data?.type ?? 1
  basicForm.hidden = data?.hidden ?? 1
  basicForm.fullScreen = data?.fullScreen ?? 0
  basicForm.keepAlive = data?.keepAlive ?? 0
  basicForm.name = data?.name ?? ''
  basicForm.icon = data?.icon ?? 'Menu'
  basicForm.path = data?.path ?? ''
  basicForm.sort = data?.sort ?? 0
  basicForm.component = data?.component ?? ''
  basicForm.title = data?.title ?? ''
  basicForm.isLink = data?.isLink ?? 0
  basicForm.activePath = data?.activePath ?? ''
  basicForm.parentId = data?.parentId ?? null
  basicForm.id = data?.id ?? undefined
}

export function useValidate(formRef:Ref) {
  return new Promise((resolve, reject) => {
    formRef.value.validate(isValid => {
      isValid ? resolve(true) : reject(false)
    })
  })
}

