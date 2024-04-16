<template>
  <div
    role="presentation"
    class="pi-accordion"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.pi-accordion {
  & .pi-accordion {
   border-top: 1px solid oklch(var(--color-border));
   border-right: 1px solid oklch(var(--color-border));
   border-left: 1px solid oklch(var(--color-border));
  }
}
</style>
