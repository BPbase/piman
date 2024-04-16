<template>
  <div
    :class="[
      'pi-card',
      shadow ? 'pi-card--shadow' : ''
    ]"
  >
    <div
      v-if="$slots.header || header"
      class="pi-card-header"
    >
      <slot name="header">{{ header }}</slot>
    </div>
    <div
      :class="[
        'pi-card-container',
        nopadding ? 'no-padding' : ''
      ]"
    >
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer || footer"
      class="pi-card-footer"
    >
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  header: {},
  footer: {},
  nopadding: Boolean,
  shadow: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.pi-card {
  border: 1px solid oklch(var(--dialog-border-color));
  border-radius: var(--radius);
  & .pi-card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-m);
    border-bottom: 1px solid oklch(var(--dialog-border-color));
    background-color: oklch(var(--dialog-header-bg));
    border-radius: var(--radius) var(--radius) 0 0;
  }
  & .pi-card-container {
    padding: var(--spacing-m);
    background-color: oklch(var(--dialog-content-bg));
    word-break: break-all;
    word-break: break-word;
    border-radius: var(--radius);
  }
  & .pi-card-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-m);
    border-top: 1px solid oklch(var(--dialog-border-color));
    background-color: oklch(var(--dialog-header-bg));
    border-radius: 0 0 var(--radius) var(--radius);
    ~.pi-card-container {
      border-radius: 0;
    }
  }
  &.pi-card--shadow {
    box-shadow: var(--box-shadow);
  }
}
</style>