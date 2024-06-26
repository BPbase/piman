<template>
  <transition name="fade">
    <div
      v-show="visible"
      role="alert"
      :class="['pi-msg', theme ? `pi-msg--${theme}` : 'pi-msg--default']"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="pi-msg-wrap">
        <div>
          <div v-if="dangerHTML === false" class="prefix">{{ prefix }}</div>
          <div v-else v-html="prefix" class="prefix"></div>
          <a
            href="javascript:;"
            accesskey="M"
            :class="theme !== '' ? 'accesskey' : 'accesskey-default'"
            @focus="clearTimer"
            @blur="startTimer"
            :title="t('msg.area')"
          >
            :::
          </a>
        </div>
        <div class="msg-content">
          <span class="msg-inner">{{ msg }}</span>
          <button @click="close" @focus="clearTimer" class="msg-close">
            <span aria-hidden="true">✖</span>
            <span class="visually-hidden">
              {{ t('msg.close') }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs, watch } from 'vue'
import useI18n from '@/locales/useI18n'
import { defaultMsgOpt } from './PiMsg'
const { t } = useI18n()
const localOptions = reactive(defaultMsgOpt)
const { dangerHTML, prefix, msg, theme, closed, visible, autoClose } = toRefs(localOptions)
const onClose = defaultMsgOpt.onClose
const currentTimer = ref<any>(0)
// watch closed
watch(closed, (newVal) => {
  if (newVal) {
    visible.value = false
  }
})
const close = () => {
  closed.value = true
  if (typeof onClose === 'function') {
    onClose()
    clearTimer(currentTimer.value)
    closed.value = false
  }
}
const clearTimer = (timer) => {
  clearTimeout(timer)
}
const startTimer = () => {
  if (defaultMsgOpt.duration > 0 && autoClose.value) {
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
.pi-msg {
  position: fixed;
  top: 1rem;
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
    color: oklch(var(--color-white));
  }
  .accesskey-default {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    color: oklch(var(--color-black));
  }
  .msg-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.pi-msg--primary {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-primary-500));
  border-color: oklch(var(--color-primary-500));
}
.pi-msg--success {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-success-500));
  border-color: oklch(var(--color-success-500));
}
.pi-msg--warning {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-warning-500));
  border-color: oklch(var(--color-warning-500));
}
.pi-msg--danger {
  color: oklch(var(--color-white));
  background-color: oklch(var(--color-danger-500));
  border-color: oklch(var(--color-danger-500));
}
.pi-msg--default {
  color: oklch(var(--color-black));
  background-color: oklch(var(--color-white));
  border-color: oklch(var(--color-border));
}
</style>
