import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { ElementPlusResolver, AntDesignVueResolver} from 'unplugin-vue-components/resolvers'


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
      })
    ],
  })
}

