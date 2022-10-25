<template>
  <nav :style="{ background, height: `${height}px` }" class="notice-bar" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div :style="{ color, fontSize: `${size}px` }" class="notice-bar-warp">
      <div v-if="$slots.leftIcon" class="notice-bar-warp-left-icon">
        <slot name="leftIcon"></slot>
      </div>
      <div ref="noticeBarWarpRef" class="notice-bar-warp-text-box">
        <div v-if="scrollable" class="notice-bar-warp-slot">
          <slot></slot>
        </div>
        <div v-else ref="noticeBarTextRef" :class="state.flag ? 'one' : 'two'" class="notice-bar-warp-text">{{text}}</div>
      </div>
      <div v-if="$slots.rightIcon" class="notice-bar-warp-right-icon">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" name="noticeBar" setup>
import { reactive, ref, onMounted } from 'vue';

const props = defineProps({
  // 通知栏模式，可选值为 closeable link
  mode: {
    type: String,
    default: () => '',
  },
  // 通知文本内容
  text: {
    type: String,
    default: () => '',
  },
  // 通知文本颜色
  color: {
    type: String,
    default: () => 'var(--el-color-primary)',
  },
  // 通知背景色
  background: {
    type: String,
    default: () => 'var(--el-color-primary-light-9)',
  },
  // 字体大小，单位px
  size: {
    type: [Number, String],
    default: () => 14,
  },
  // 通知栏高度，单位px
  height: {
    type: Number,
    default: () => 40,
  },
  // 滚动速率 (px/s)
  speed: {
    type: Number,
    default: () => 100,
  },
  // 是否开启垂直滚动
  scrollable: {
    type: Boolean,
    default: () => false,
  }
})

const noticeBarWarpRef = ref();
const noticeBarTextRef = ref();
const state = reactive({
  flag: true,
  oneTime: '0s',
  twoTime: '0s',
  warpOWidth: '0px', //通知栏宽
  textOWidth: '0px', //文本宽
  start: 'running',
});

// 页面加载时
onMounted(() => {
  if (props.scrollable) return
  state.warpOWidth = noticeBarWarpRef.value.offsetWidth + 'px';
  state.textOWidth = -noticeBarTextRef.value.offsetWidth + 'px';
  // 计算 animation 滚动时长
  state.oneTime = (-parseFloat(state.textOWidth) / props.speed) + 's';
  state.twoTime = ((-parseFloat(state.textOWidth) + parseFloat(state.warpOWidth)) / props.speed) + 's';
  // 监听 animation 动画的结束
  noticeBarTextRef.value.addEventListener('animationend', () => {
    state.flag = false
  }, false);
});

const onMouseenter = () => state.start = 'paused'
const onMouseleave = () => state.start = 'running'

</script>

<style lang="less" scoped>
.notice-bar {
  padding: 0 15px;
  width: 100%;
  border-radius: 4px;

  .notice-bar-warp {
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;

    .notice-bar-warp-text-box {
      flex: 1;
      height: inherit;
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;

      .notice-bar-warp-text {
        white-space: nowrap;
        position: absolute;
        left: 0;
      }

      .notice-bar-warp-slot {
        width: 100%;
        white-space: nowrap;

        :deep(.el-carousel__item) {
          display: flex;
          align-items: center;
        }
      }
    }

    .notice-bar-warp-left-icon {
      width: 24px;
      font-size: inherit !important;
    }

    .notice-bar-warp-right-icon {
      width: 24px;
      text-align: right;
      font-size: inherit !important;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

@keyframes oneAnimation {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translateX(v-bind('state.textOWidth'));
  }
}

.one {
  animation: oneAnimation v-bind('state.oneTime') linear;
  animation-play-state: v-bind('state.start');
}


@keyframes twoAnimation {
  0% {
    transform: translateX(v-bind('state.warpOWidth'));
  }
  100% {
    transform: translateX(v-bind('state.textOWidth'));
  }
}

.two {
  animation: twoAnimation v-bind('state.twoTime') linear infinite;
  animation-play-state: v-bind('state.start');
}
</style>