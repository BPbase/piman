<template>
  <transition @after-leave="handleAfterLeave" name="fade">
    <div
      v-show="visible"
      role="alert"
      :id="id"
      :class="[
        'bpa-msg',
        theme ? `bpa-msg--${ theme }` : ''
      ]"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="bpa-msg-wrap">
        <div>
          <div v-if="dangerHTML === false" class="prefix">{{ prefix }}</div>
          <div v-else  v-html="prefix" class="prefix"></div>
          <a
            href="javascript:;"
            accesskey="M"
            class="accesskey"
            @focus="clearTimer"
            @blur="startTimer"
          >
            <!-- :title="t('msg.area')" -->
            :::
          </a>
        </div>
        <div class="msg-content">{{ msg }}</div>
        <button
          @click="close"
          @focus="clearTimer"
          
          class="close-msg"
        >
          <span aria-hidden="true">✖ close</span>
          <span class="visually-hidden">
            <!-- {{ t('msg.close') }} -->
            Close
          </span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs, watch } from 'vue'
import { defaultMsgOpt } from "./PiMsg"
  const id = ref('bpa-msg-' + Date.now())
  // console.log(defaultMsgOpt)
  const { dangerHTML, prefix, msg, theme, closed, visible } = toRefs(defaultMsgOpt)
  const onClose = defaultMsgOpt.onClose
  const currentTimer = ref<any>(0)
  // watch closed
  watch(closed , (newVal) => {
    if (newVal) {
      visible.value = false
    }
  })
  const handleAfterLeave = () => {
    // this.$destroy();
    // this.$el.parentNode.removeChild(this.$el);
  }
  const close = () => {
    closed.value = true
    if (typeof onClose === 'function') {
      onClose(this)
      clearTimer(currentTimer.value)
      closed.value = false
    }
  }
  const clearTimer = (timer) => {
    clearTimeout(timer)
  }
  const startTimer = () => {
    if (defaultMsgOpt.duration > 0) {
      currentTimer.value = setTimeout(() => {
        if (!closed.value) close()
        clearTimer(currentTimer.value)
      }, defaultMsgOpt.duration)
    }
  }
  onMounted(() => {
    visible.value = true
    closed.value = false
    startTimer()
  })
</script>
<style>
.bpa-msg {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  overflow: auto;
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 0.25rem 0.5rem rgba(var(--color-black), 0.125);
  transition-duration: 0.3s;
  .prefix {
    padding-right: 1rem;
  }
  .accesskey {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    color: oklch(var(--color-black));
  }
}
.bpa-msg--primary {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-primary-500));
  border-color: oklch(var(--color-primary-500));
}
.bpa-msg--success {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-success-500));
  border-color: oklch(var(--color-success-500));
}
.bpa-msg--warning {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-warning-500));
  border-color: oklch(var(--color-warning-500));
}
.bpa-msg--danger {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-danger-500));
  border-color: oklch(var(--color-danger-500));
}
</style>
