import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { ElementPlusResolver,AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'

/*
pnpm install unplugin-vue-components -D
插件会生成一个ui库组件以及指令路径components.d.ts文件
注意还需要在tsconfig.json里面添加上刚刚自动生成的components.d.ts文件（不然自定义的组件会有错误提示找不到文件
include:["./components.d.ts"]
*/

export default function (){
  return Components({
    dts: true,
    dirs: ['src/components'], // 按需加载的文件夹
    resolvers: [
      ElementPlusResolver({
        importStyle:true,
        directives:true,
      }),
      AntDesignVueResolver({
        resolveIcons: true,
        importStyle:true
      }),
      IconsResolver({
        prefix: false, // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
        // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
        // alias: { park: 'icon-park' } 集合的别名
      }),
    ],
  })
}

