<template>
  <div ref="refPiPopover" class="pi-popover">
    <pi-button
      :aria-controls="`popover-content-${fixId}`"
      :id="`popover-btn-${fixId}`"
      :aira-expend="ariaExpanded"
      :theme="theme"
      :disabled="disabled"
      :loading="loading"
      :size="size"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </pi-button>
    <div
      :id="`popover-content-${fixId}`"
      :aria-labelledby="`popover-btn-${fixId}`"
      :aria-hidden="`${!ariaExpanded}`"
      role="region"
      :class="[
        'pi-popover__container',
        nopadding ? 'no-padding' : ''
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, provide, inject, Ref, getCurrentInstance } from 'vue';
import { generateId } from '@/utils/generateId';
import useClickOutside from "@/composables/useClickOutside"

const props = defineProps({
  title: {
    type: String,
    default: 'Popover'
  },
  theme: String,
  disabled: Boolean,
  loading: Boolean,
  size: String,
  id: String,
  open: Boolean,
  nopadding: {
    type: Boolean,
    default: false
  }
})
// 如果元件牽涉到esc事件行為或點擊外部事件行為，則提供此事件
const openIntercept = ref({
  escEvent: true,
  clickOutSideEvent: true
})
provide('openIntercept', openIntercept);
// 取得父元素提供的事件，做為影響esc關閉順序的依據
const self = getCurrentInstance();
const parentIntercept = (self.parent as any).provides.openIntercept ? inject('openIntercept') as Ref<{ escEvent: boolean, clickOutSideEvent: boolean }> : undefined;

const refPiPopover = ref(null);
const ariaExpanded = ref(false);
const fixId = ref('');
/**
 * 點擊事件 - 開啟或關閉 Popover
 */
const handleClick = () => {
  ariaExpanded.value ? close() : open();
}
/**
 * 點擊外部事件 - 關閉 Popover
 */
const handleClickOutside = () => {
  if(!ariaExpanded.value) return;
  // 判斷點擊的目標是否在 Popover 內
  const list: HTMLElement = refPiPopover.value as unknown as HTMLElement;
  if(list.contains(event!.target as Node)) return;
  // 判斷是否要關閉 Popover，子元件如果也有clickoutside事件會被攔截
  if(!openIntercept.value.clickOutSideEvent) return;
  close();
}
/**
 * Esc 事件 - 關閉 Popover
 */
const handleEsc = (e: KeyboardEvent) => {
  if(e.key !== 'Escape') return;
  if(!openIntercept.value.escEvent) return;
  close();
}
/**
 * 開啟 Popover
 */
const open = () => {
  // 先關閉popover，避免重複開啟
  close();
  ariaExpanded.value = true;
  // 如果父元素有提供事件，則關閉父元素事件
  if(parentIntercept) {
    parentIntercept.value.escEvent = false;
    parentIntercept.value.clickOutSideEvent = false;
  }
  // 開啟Esc事件
  document.addEventListener('keyup', handleEsc, false);
}
const close = () => {
  ariaExpanded.value = false;
  // 如果父元素有提供事件，則開啟父元素事件
  if(parentIntercept) {
    parentIntercept.value.escEvent = true;
    parentIntercept.value.clickOutSideEvent = true;
  }
  // 關閉Esc事件
  document.removeEventListener('keyup', handleEsc);
}
// 點擊外部事件
useClickOutside(refPiPopover, handleClickOutside);
onMounted(()=>{
  if(props.open == true) {
    ariaExpanded.value = true;
  }
  if(props.id){
    fixId.value = props.id;
  }
  else {
    fixId.value = String(generateId());
  }
})
onBeforeUnmount(() => {
  if(ariaExpanded.value) close()
})
</script>
<style scoped>
.pi-popover {
  display: inline-block;
  &:has(>.pi-btn) {
    margin-right: var(--spacing-m);
    margin-top: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
  }
}
.pi-popover__container {
  position: absolute;
  border: 1px solid oklch(var(--color-border));
  border-radius: var(--radius);
  padding: var(--spacing-m);
  background-color: oklch(var(--popover-content-bg));
  color: oklch(var(--color-gray-900));
  line-height: 1.5rem;
  &[aria-hidden="true"] {
    display: none;
  }
}
</style>