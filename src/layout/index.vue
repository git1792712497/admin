<template>
	<el-container>
			<el-aside><Menus/></el-aside>
		<el-container>
			<el-header>
        <NavBar/>
        <TabsView/>
      </el-header>
			<el-main>
        <Content/>
      </el-main>
			<el-footer><Bottom/></el-footer>
		</el-container>
	</el-container>
</template>
<script lang="ts" setup name="Layout">
import Menus from './menus/Menus.vue'
import TabsView from './tabsView/TabsView.vue'
import NavBar from './header/NavBar.vue'
import Content from './main/Content.vue'
import Bottom from './bottom/Bottom.vue'
</script>
<style lang="less" scoped>
.el-container{
	width: 100%;
	height: 100%;
	.el-aside{
		width: auto;
		overflow: inherit;
	}
	.el-header,.el-footer{
		height: auto;
		padding: 0;
	}
	.el-main{
		box-sizing: border-box;
		padding:10px;
    width: 100%;
		background: #f0f2f5;
    :deep(.el-scrollbar__view){
      height: 100%;
    }
		&::-webkit-scrollbar{
      width: 0;
		}
	}
}

</style>
