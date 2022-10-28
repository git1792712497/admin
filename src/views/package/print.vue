<template>
  <el-card shadow="hover" ref="dom">
    <template #header>
      <nav class="flex justify-between">
        <span>页面打印</span>
        <el-button type="primary" @click="onClickPrint">打印</el-button>
      </nav>
    </template>
    <el-descriptions id="descriptions" :column="1" border title="用户信息">
      <el-descriptions-item label="姓名">张三</el-descriptions-item>
      <el-descriptions-item label="年龄">22岁</el-descriptions-item>
      <el-descriptions-item label="性别">男</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script lang="ts" name="print" setup>
import print from 'print-js'
import {onMounted, shallowRef} from "vue";

/*
参数	默认值	说明
printable	null	文档源：pdf 或图像 url、html 元素 id 或 json 数据对象。
type	 	‘pdf’
header	null	用于 HTML、图像或 JSON 打印的可选标头。它将放置在页面顶部。此属性将接受文本或原始 HTML。
headerStyle	‘font-weight: 300;’	要应用于页眉文本的可选页眉样式。
maxWidth	800	最大文档宽度（以像素为单位）。根据需要更改此设置。在打印 HTML、图像或 JSON 时使用。
css	null	这允许我们传递一个或多个应应用于正在打印的html的css文件URL。值可以是具有单个 URL 的字符串，也可以是具有多个 URL 的数组。
style	null	这允许我们传递一个具有自定义样式的字符串，该字符串应应用于正在打印的html。
scanStyles	true	设置为 false 时，库将不会处理应用于正在打印的 html 的样式。使用参数css时很有用。
targetStyle	null	默认情况下，在打印 HTML 元素时，库仅处理某些样式。此选项允许您传递要处理的样式数组。例如：[‘padding-top’, ‘border-bottom’]
targetStyles	null	但是，与"targetStyle"相同，这将处理任何一系列样式。例如：[‘border’， ‘padding’]，将包括’border-bottom’， ‘border-top’， ‘border-left’， ‘border-right’， 'padding-top’等。
您还可以传递 [‘*’] 来处理所有样式。
ignoreElements	[]	接受在打印父 html 元素时应忽略的 html ID 数组。
properties	null	在打印 JSON 时使用。这些是对象属性名称。
gridHeaderStyle	‘font-weight: bold;’	打印 JSON 数据时网格标头的可选样式。
gridStyle	‘border: 1px solid lightgray; margin-bottom: -1px;’	打印 JSON 数据时网格行的可选样式。
repeatTableHeader	true	打印JSON数据时使用。当设置为false时，数据表头将只显示在第一页。
showModal	null	启用此选项可在检索或处理大型 PDF 文件时显示用户反馈。
modalMessage	‘Retrieving Document…’	showModal设置为true时，向用户显示的消息。
onLoadingStart	null	加载 PDF 时要执行的功能
onLoadingEnd	null	加载 PDF 后要执行的功能
documentTitle	‘Document’	打印 html、图像或 json 时，这将显示为文档标题。
fallbackPrintable	null	打印 pdf 时，如果浏览器不兼容（检查浏览器兼容性表），库将在新选项卡中打开 pdf。这允许您传递要打开的不同pdf文档，而不是在"可打印"中传递的原始文档。如果您在备用pdf文件中注入javascript，这可能很有用。
onPdfOpen	null	打印 pdf 时，如果浏览器不兼容（检查浏览器兼容性表），库将在新选项卡中打开 pdf。可以在此处传递回调函数，该函数将在发生这种情况时执行。在某些情况下，如果要处理打印流、更新用户界面等，它可能很有用。
onPrintDialogClose	null	在浏览器打印对话框关闭后执行的回调函数。
onError	error => throw error	发生错误时要执行的回调函数。
base64	false	在打印作为 base64 数据传递的 PDF 文档时使用。
honorMarginPadding (已弃用)	true	这用于保留或删除正在打印的元素中的填充和边距。有时这些样式设置在屏幕上很棒，但在打印时看起来很糟糕。您可以通过将其设置为 false 来将其删除。
honorColor (已弃用)	false	若要以彩色打印文本，请将此属性设置为 true。默认情况下，所有文本都将以黑色打印。
font(已弃用)	‘TimesNewRoman’	打印 HTML 或 JSON 时使用的字体。
font_size (已弃用)	‘12pt’	打印 HTML 或 JSON 时使用的字体大小。
imageStyle(已弃用)	‘width:100%;’	打印图像时使用。接受具有要应用于每个图像的自定义样式的字符串。*/
const onClickPrint = () => {
  print({
    printable: 'table',	//打印区域id
    type: 'html',		//打印类型是html
    scanStyles: true,
    targetStyles: ['*'],
  })
}
</script>

<style lang="less" scoped>

</style>