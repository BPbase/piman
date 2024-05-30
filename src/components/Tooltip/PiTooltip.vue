<template>
  <div ref="refPiTooltip" class="pi-tooltip">
    <slot>
      <pi-button>
        {{ t('tooltip.title') }}
      </pi-button>
    </slot>
    <div
      ref="refPiTooltipBox"
      :id="`tooltip-content-${fixId}`"
      :aria-labelledby="`tooltip-btn-${fixId}`"
      :aria-hidden="`${!tipboxOpen}`"
      role="tooltip"
      :class="[
        'pi-tooltip__container',
        tipboxOpen ? 'pi-tooltip__container--open' : '',
        dialogPosition ? `pi-tooltip__container--${dialogPosition}` : ''
      ]"
      @mouseover="open"
      @mouseout="close"
    >
      {{ text ? text : t('tooltip.text') }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, provide, inject, Ref, getCurrentInstance } from 'vue'
import { generateId } from '@/utils/generateId'
import useI18n from '@/locales/useI18n'

const props = defineProps({
  id: String,
  text: {
    type: [String, Number],
    default: ''
  },
  // * 對話框文字靠齊位置
  dialogPlacement: {
    type: String as () => 'lr' | 'rl',
    default: ''
  },
  // TODO 箭頭位置
  arrowPlacement: {
    type: String as () => 'top' | 'bottom' | 'left' | 'right',
    default: 'bottom'
  }
})
// * 如果元件牽涉到esc事件行為或點擊外部事件行為，則提供此事件
const openIntercept = ref({
  escEvent: true,
  clickOutSideEvent: true
})
provide('openIntercept', openIntercept)
// * 取得父元素提供的事件，做為影響esc關閉順序的依據
const self = getCurrentInstance()
const parentIntercept = (self.parent as any).provides.openIntercept
  ? (inject('openIntercept') as Ref<{ escEvent: boolean; clickOutSideEvent: boolean }>)
  : undefined

const { t } = useI18n()
const refPiTooltip = ref(null)
const refPiTooltipBox = ref(null)
const tipboxOpen = ref(false)
const isFocus = ref(false)
const fixId = ref('')
const dialogPosition = ref<'lr' | 'rl' | ''>('')
/**
 * * Esc 事件 - 關閉 Tooltip
 */
const handleEsc = (e: KeyboardEvent) => {
  if (e.key !== 'Escape') return
  if (!openIntercept.value.escEvent) return
  if (refPiTooltip.value.contains(e.target)) {
    isFocus.value = true
    open()
  }
  // * 目前focus元素 = Tooltip 內容 或 Tooltip 內容的子元素，會取消焦點
  const focusedElement = document.activeElement
  if (refPiTooltip.value.contains(focusedElement)) {
    isFocus.value = false
    ;(focusedElement as HTMLElement).blur()
  }
  close()
}
/**
 * * Focus 事件 - 開啟 Tooltip
 */
const focus = (e: Event) => {
  if (refPiTooltip.value.contains(e.target)) {
    isFocus.value = true
    open()
  }
}
/**
 * * Blur 事件 - 關閉 Tooltip
 */
const blur = (e: Event) => {
  if (refPiTooltip.value.contains(e.target)) {
    isFocus.value = false
    close()
  }
}
/**
 * * 開啟 Tooltip
 */
const open = () => {
  // * 先關閉tooltip，避免重複開啟
  close()
  const box = refPiTooltipBox.value
  // * 取得Tooltip位置
  const tooltip = refPiTooltip.value.getBoundingClientRect()
  // * 加入Tooltip內容，選擇加入到body，避免被父元素影響
  document.body.appendChild(box)
  box.style.top = `${window.scrollY + tooltip.top + tooltip.height}px`
  // * Tooltip內容 是否會超出邊界，超出則調整位置
  if (tooltip.left - box.offsetWidth / 2 < 0 || props.dialogPlacement === 'lr') {
    box.style.left = `${tooltip.left}px`
    dialogPosition.value = 'lr'
  } else if (
    tooltip.right + box.offsetWidth / 2 > document.documentElement.clientWidth ||
    props.dialogPlacement === 'rl'
  ) {
    box.style.right = `${document.documentElement.clientWidth - tooltip.right}px`
    box.style.left = 'inherit'
    dialogPosition.value = 'rl'
  } else {
    box.style.left = `${tooltip.left - box.offsetWidth / 2 + tooltip.width / 2}px`
    dialogPosition.value = ''
  }
  tipboxOpen.value = true
  // * 開啟Esc事件
  document.addEventListener('keyup', handleEsc, false)
  // * 如果父元素有提供事件，則關閉父元素事件
  if (parentIntercept) {
    parentIntercept.value.escEvent = false
    parentIntercept.value.clickOutSideEvent = false
  }
}
const close = () => {
  // * 非開啟狀態不處理
  if (!tipboxOpen.value) return
  // * 當焦點在Tooltip內容時，不關閉
  if (isFocus.value) return

  setTimeout(() => {
    tipboxOpen.value = false
  }, 300)
  // * 移除Esc事件
  document.removeEventListener('keyup', handleEsc)
  // * 如果父元素有提供事件，則恢復父元素事件
  if (parentIntercept) {
    parentIntercept.value.escEvent = true
    parentIntercept.value.clickOutSideEvent = true
  }
}

onMounted(() => {
  if (props.id) {
    fixId.value = props.id
  } else {
    fixId.value = String(generateId())
  }
  // * 加入事件
  refPiTooltip.value.addEventListener('mouseover', open)
  refPiTooltip.value.addEventListener('mouseout', close)
  document.addEventListener('focus', focus, true)
  document.addEventListener('blur', blur, true)
})
onBeforeUnmount(() => {
  // * 移除事件
  refPiTooltip.value.removeEventListener('mouseover', open)
  refPiTooltip.value.removeEventListener('mouseout', close)
  document.removeEventListener('focus', focus)
  document.removeEventListener('blur', blur)
})
</script>
<style>
.pi-tooltip {
  display: inline-block;
  cursor: pointer;
}
.pi-tooltip__container {
  position: absolute;
  background-color: oklch(var(--tooltip-content-bg));
  color: oklch(var(--tooltip-content-color));
  padding: var(--spacing-m);
  margin-top: var(--spacing-xs);
  border-radius: var(--spacing-xxs);
  transition: opacity 0.3s;
  line-height: 1.5;
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  opacity: 0;
  &:hover {
    opacity: 1;
    pointer-events: inherit;
  }
  &.pi-tooltip__container--open {
    opacity: 1;
    pointer-events: inherit;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.5rem;
    border-color: transparent;
    top: -0.5rem;
    left: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 var(--spacing-xs) var(--spacing-xs);
    border-color: transparent transparent oklch(var(--tooltip-content-bg)) transparent;
    top: -0.5rem;
    left: 50%;
    margin: auto;
    transform: translate3d(-50%, 0, 0);
  }
  &.pi-tooltip__container--lr::after {
    left: 1rem;
    transform: translate3d(0, 0, 0);
    margin: unset;
  }
  &.pi-tooltip__container--rl::after {
    left: unset;
    right: 1rem;
    transform: translate3d(0, 0, 0);
    left: inherit;
    margin: unset;
  }
}
</style>
