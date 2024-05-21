<template>
  <div class="pi-accordion__item">
    <div class="pi-accordion__item-header">
      <button
        type="button"
        :aria-controls="`accordion-content-${fixId}`"
        :id="`accordion-title-${fixId}`"
        :aria-expanded="`${accordionContainerOpen}`"
        @click="handleClickAccordion"
      >
        <slot name="title">{{ title ? title : t('accordion.title') }}</slot>
      </button>
    </div>
    <div
      role="region"
      :id="`accordion-content-${fixId}`"
      :aria-labelledby="`accordion-title-${fixId}`"
      :aria-hidden="`${!accordionContainerOpen}`"
      class="pi-accordion__item-container"
      v-show="accordionContainerOpen"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { generateId } from '@/utils/generateId'
import { onMounted, ref } from 'vue'
import useI18n from '@/locales/useI18n'

const props = defineProps({
  id: String,
  title: {
    type: String
  },
  open: {
    type: Boolean,
    default: false
  }
})

const { t } = useI18n()

const fixId = ref('')
const accordionContainerOpen = ref(false)
const handleClickAccordion = () => {
  accordionContainerOpen.value = !accordionContainerOpen.value
}

onMounted(() => {
  if (props.open == true) {
    accordionContainerOpen.value = true
  }
  if (props.id) {
    fixId.value = props.id
  } else {
    fixId.value = String(generateId())
  }
})
</script>

<style scoped>
.pi-accordion__item {
  border-bottom: 1px solid oklch(var(--color-border, 78.94% 0 0));
  word-break: break-all;
  word-break: break-word;
}

.pi-accordion__item-header {
  position: relative;
  > button {
    position: relative;
    display: block;
    width: 100%;
    padding: var(--spacing-m, 1rem) var(--spacing-xxl, 4rem) var(--spacing-m, 1rem)
      var(--spacing-m, 1rem);
    font-size: 1.125rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    line-height: 1.5rem;
    word-break: break-all;
    word-break: break-word;
    color: oklch(var(--accordion-header-color, 24.84% 0 0));
    background: oklch(var(--accordion-header-bg, 99.4% 0 0));
    border: none;
    > div {
      width: 100%;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 0;
      background-color: oklch(var(--accordion-bar-color, 46.28% 0.156 255.66));
      transition:
        height 160ms ease-in,
        background-color 160ms ease-in;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      border-width: 0 0.1875rem 0.1875rem 0;
      border-color: oklch(var(--accordion-icon-color, 46.28% 0.156 255.66));
      width: 0.625rem;
      height: 0.625rem;
      right: 1.25rem;
      top: calc(50% - 0.40625rem);
      transform: rotate(45deg);
      /* transform: translate3d(0, 0.1rem, 0); */
      transition: transform 160ms ease-in;
    }
    &:hover {
      &:before {
        height: 100%;
      }
    }
    &:active {
      &:before {
        background-color: oklch(var(--accordion-active-bar-color, 55.89% 0.119 72.49));
      }
    }
    &:focus {
      box-shadow: inset 0 0 0 3px
        oklch(var(--color-focus, 83.15% 0.15681888825079074 78.05241467152487));
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        &:before {
          height: 100%;
        }
      }
    }
    &[aria-expanded='true'] {
      &:after {
        top: calc(50% - 4px);
        transform: rotate(225deg);
      }
    }
  }
}

.pi-accordion__item-container {
  padding: var(--spacing-m);
  background-color: oklch(var(--accordion-content-bg, 94.66% 0 0));
  color: oklch(var(--accordion-content-color, 44.64% 0 0));
  line-height: 1.5rem;
  word-break: break-all;
  word-break: break-word;
  &[aria-hidden='true'] {
    display: none;
  }
}
</style>
