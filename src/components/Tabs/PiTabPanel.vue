<template>
  <div
    :id="`tab-panel-${name}`"
    role="tabpanel"
    v-show="showPanel"
    :aria-labelledby="`tab-${name}`"
    tabindex="0"
    :class="[
      'pi-tabs-panel',
      showPanel ? 'pi-tabs-panel--selected' : '',
      nopadding ? 'no-padding' : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prefixIcon: String,
  label: {
    type: String,
    required: true
  },
  affixIcon: String,
  badge: [String, Number],
  nopadding: Boolean
})

const instance = getCurrentInstance()

const showPanel = computed(() => {
  if (!instance || !instance.parent) return false
  return props.name === (instance.parent as any).props.modelValue
})
</script>

<style scoped>
.pi-tabs-panel {
  padding: var(--spacing-m);
  &:focus-within {
    outline: 3px solid oklch(var(--color-focus));
  }
  &.no-padding {
    padding: 0;
  }
}
</style>
