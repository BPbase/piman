<template>
 <li class="pi-breadcrumb__item">
    <router-link
      v-if="to"
      :to="to"
      :title="title"
    >
      <slot></slot>
    </router-link>
    <slot v-else></slot>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  to: [String, Object],
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.pi-breadcrumb__item {
  color: oklch(var(--breadcrumb-color));
  &:not(:last-of-type) {
    &:after {
      content: '/';
      margin: 0 var(--spacing-xs);
    }
  }
}
</style>
