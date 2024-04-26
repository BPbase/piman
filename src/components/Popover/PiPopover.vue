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
      role="tooltip"
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
import { onMounted, ref, onBeforeUnmount, provide, inject, Ref, getCurrentInstance, watch } from 'vue';
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
const slots = defineSlots();
const self = getCurrentInstance();

const openIntercept = ref({
  escEvent: true,
  clickOutSideEvent: true
})
provide('openIntercept', openIntercept);
const parentIntercept = (self.parent as any).provides.openIntercept ? inject('openIntercept') as Ref<{ escEvent: boolean, clickOutSideEvent: boolean }> : undefined;

const refPiPopover = ref(null);
const ariaExpanded = ref(false);
const fixId = ref('');
const handleClick = () => {
  ariaExpanded.value ? close() : open();
}
const handleClickOutside = () => {
  const list: HTMLElement = refPiPopover.value as unknown as HTMLElement;
  if(!ariaExpanded.value) return;
  if(list.contains(event!.target as Node)) return;
  if(!openIntercept.value.clickOutSideEvent) return;
  close();
}
const handleEsc = (e: KeyboardEvent) => {
  if(e.key !== 'Escape') return;
  if(!openIntercept.value.escEvent) return;
  close();
}
const open = () => {
  close();
  ariaExpanded.value = true;
  if(parentIntercept) {
    parentIntercept.value.escEvent = false;
    parentIntercept.value.clickOutSideEvent = false;
  }
  document.addEventListener('keyup', handleEsc, false);
}
const close = () => {
  ariaExpanded.value = false;
  if(parentIntercept) {
    parentIntercept.value.escEvent = true;
    parentIntercept.value.clickOutSideEvent = true;
  }
  document.removeEventListener('keyup', handleEsc);
}

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
<style>
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
  color: oklch(var(--accordion-content-color));
  line-height: 1.5rem;
  &[aria-hidden="true"] {
    display: none;
  }
  /* &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-color: transparent transparent #3c3c3c transparent;
    top: -0.5rem;
    left: 50%;
    margin: auto;
    transform: translate3d(-50%, 0, 0);
  } */
}
</style>