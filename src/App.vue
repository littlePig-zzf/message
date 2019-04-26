<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div class="message" :class="type" v-show="show">
        <span class="text">{{text}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: val => ['info', 'success', 'warning', 'error'].includes(val),
      // ['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
    },
    text: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.message {
  position: fixed;
  top: 20px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: 20px 40px;
  color: #fff;
  background: #f5f5f5;
  font-size: 28px;
  line-height: 1.4;
  border-radius: 50px;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  &.info {
    color: #2d8cf0;
  }
  &.success {
    color: #19be6b;
  }
  &.error {
    color: #ed4014;
  }
  &.warning {
    color: #ff9900;
  }
}
</style>
