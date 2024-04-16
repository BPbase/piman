<template>
  <button
    v-bind="$attrs"
    :disabled="disabled || loading"
    :class="[
      'pi-btn',
      theme ? `pi-btn--${theme}` : '',
      size ? `pi-btn--${size}` : '',
      a11y ? `a11y` : ''
    ]"
  >
    <slot v-if="$slots.default"></slot>
    <span
      v-if="loading"
      class="pi-btn-loading"
      title="loading"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>

<script lang="ts" setup>

defineProps({
  theme: String,
  disabled: Boolean,
  loading: Boolean,
  size: String,
  a11y: Boolean
})

</script>

<style scoped>
.pi-btn {
  cursor: pointer;
  padding: var(--spacing-s) var(--spacing-m);
  color: oklch(var(--button-default-color));
  background-color: oklch(var(--button-default-bg));
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid oklch(var(--color-border));
  border-radius: var(--radius);
  transition: background-color 160ms ease-in;
  &:hover {
    background-color: oklch(var(--button-default-hover-bg));
  }
  &:active {
    background-color: oklch(var(--button-default-active-bg));
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  }
  &.pi-btn--small {
    padding: var(--spacing-xxs) var(--spacing-xs);
    font-size: 1rem;
    & .pi-btn-loading {
      vertical-align: baseline;
      width: 1rem;
      height: 1rem;
      & span {
        width: 1rem;
        height: 1rem;
      }
    }
  }
  &.pi-btn--large {
    padding: var(--spacing-m) var(--spacing-xl);
    font-size: 1.25rem;
    & .pi-btn-loading {
      vertical-align: baseline;
      width: 1.25rem;
      height: 1.25rem;
      & span {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
  &.a11y {
    transition: none;
  }
  &.pi-btn--primary {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-primary-500));
    border-color: oklch(var(--color-primary-500));
    &:hover {
      background-color: oklch(var(--color-primary-400));
      border-color: oklch(var(--color-primary-400));
    }
    &:active {
      background-color: oklch(var(--color-primary-600));
      border-color: oklch(var(--color-primary-600));
    }
    &.a11y {
      text-shadow: 0 0 0.25rem oklch(var(--color-black) / 0.4);
      background-image: 
        linear-gradient(oklch(var(--color-primary-400) / 0.4) 0.125rem, transparent 0.125rem),
        linear-gradient(to right, oklch(var(--color-primary-400) / 0.4) 0.125rem,  oklch(var(--color-primary-500)) 0.125rem);
      background-size: 1.5rem 1.5rem;
      background-position: center center;
      &:hover {
        background-image: 
          linear-gradient(oklch(var(--color-primary-300) / 0.4) 0.125rem, transparent 0.125rem),
          linear-gradient(to right, oklch(var(--color-primary-300) / 0.4) 0.125rem,  oklch(var(--color-primary-400)) 0.125rem);
      }
      &:active {
        background-image: 
          linear-gradient(oklch(var(--color-primary-500) / 0.4) 0.125rem, transparent 0.125rem),
          linear-gradient(to right, oklch(var(--color-primary-500) / 0.4) 0.125rem,  oklch(var(--color-primary-600)) 0.125rem);
      }
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--success {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-success-500));
    border-color: oklch(var(--color-success-500));
    &:hover {
      background-color: oklch(var(--color-success-400));
      border-color: oklch(var(--color-success-400));
    }
    &:active {
      background-color: oklch(var(--color-success-600));
      border-color: oklch(var(--color-success-600));
    }
    &.a11y {
      text-shadow: 0 0 0.25rem oklch(var(--color-black) / 0.4);
      background: 
        repeating-linear-gradient( 
          45deg,
          oklch(var(--color-success-500) / 0.9),
          oklch(var(--color-success-500) / 0.9) 0.25rem,
          oklch(var(--color-success-500)) 0.25rem,
          oklch(var(--color-success-500)) 1.25rem 
        );
      &:hover {
        background: 
          repeating-linear-gradient( 
            45deg,
            oklch(var(--color-success-400) / 0.9),
            oklch(var(--color-success-400) / 0.9) 0.25rem,
            oklch(var(--color-success-400)) 0.25rem,
            oklch(var(--color-success-400)) 1.25rem 
          );
      }
      &:active {
        background: 
          repeating-linear-gradient( 
            45deg,
            oklch(var(--color-success-600) / 0.9),
            oklch(var(--color-success-600) / 0.9) 0.25rem,
            oklch(var(--color-success-600)) 0.25rem,
            oklch(var(--color-success-600)) 1.25rem 
          );
      }
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--warning {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-warning-500));
    border-color: oklch(var(--color-warning-500));
    &:hover {
      background-color: oklch(var(--color-warning-400));
      border-color: oklch(var(--color-warning-400));
    }
    &:active {
      background-color: oklch(var(--color-warning-600));
      border-color: oklch(var(--color-warning-600));
      
    }
    &.a11y {
      text-shadow: 0 0 0.25rem oklch(var(--color-black) / 0.4);
      background-image:  
        radial-gradient( oklch(var(--color-warning-400)) 0.1rem, transparent 0.1rem),
        radial-gradient( oklch(var(--color-warning-400)) 0.1rem, oklch(var(--color-warning-500)) 0.1rem);
      background-size: 1.5rem 1.5rem;
      background-position: 0 0, 0.75rem 0.75rem;
      &:hover {
        background-image:  
          radial-gradient( oklch(var(--color-warning-300)) 0.1rem, transparent 0.1rem),
          radial-gradient( oklch(var(--color-warning-300)) 0.1rem, oklch(var(--color-warning-400)) 0.1rem);
      }
      &:active {
        background-image:  
          radial-gradient( oklch(var(--color-warning-500)) 0.1rem, transparent 0.1rem),
          radial-gradient( oklch(var(--color-warning-500)) 0.1rem, oklch(var(--color-warning-600)) 0.1rem);
      }
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--danger {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-danger-500));
    border-color: oklch(var(--color-danger-500));
    &:hover {
      background-color: oklch(var(--color-danger-400));
      border-color: oklch(var(--color-danger-400));
    }
    &:active {
      background-color: oklch(var(--color-danger-600));
      border-color: oklch(var(--color-danger-600));
    }
    &.a11y {
      text-shadow: 0 0 0.25rem oklch(var(--color-black) / 0.4);
      background-image: 
        linear-gradient(135deg, oklch(var(--color-danger-400) / 0.6) 25%, transparent 25%),
        linear-gradient(225deg, oklch(var(--color-danger-400) / 0.6) 25%, transparent 25%),
        linear-gradient(45deg, oklch(var(--color-danger-400) / 0.6) 25%, transparent 25%),
        linear-gradient(315deg, oklch(var(--color-danger-400) / 0.6) 25%, oklch(var(--color-danger-500)) 25%);
      background-position:  0.75rem 0, 0.75rem 0, 0 0, 0 0;
      background-size: 1.5rem 1.5rem;
      background-repeat: repeat;
      &:hover {
        background-image: 
          linear-gradient(135deg, oklch(var(--color-danger-300) / 0.6) 25%, transparent 25%),
          linear-gradient(225deg, oklch(var(--color-danger-300) / 0.6) 25%, transparent 25%),
          linear-gradient(45deg, oklch(var(--color-danger-300) / 0.6) 25%, transparent 25%),
          linear-gradient(315deg, oklch(var(--color-danger-300) / 0.6) 25%, oklch(var(--color-danger-400)) 25%);
      }
      &:active {
        background-image: 
          linear-gradient(135deg, oklch(var(--color-danger-500) / 0.6) 25%, transparent 25%),
          linear-gradient(225deg, oklch(var(--color-danger-500) / 0.6) 25%, transparent 25%),
          linear-gradient(45deg, oklch(var(--color-danger-500) / 0.6) 25%, transparent 25%),
          linear-gradient(315deg, oklch(var(--color-danger-500) / 0.6) 25%, oklch(var(--color-danger-600)) 25%);
      }
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--primary-ghost {
    color: oklch(var(--color-primary-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-primary-600));
    &:hover {
      background-color: oklch(var(--color-primary-100));
    }
    &:active {
      background-color: oklch(var(--color-primary-200));
    }
    &.a11y {
      background-image: 
        linear-gradient(oklch(var(--color-primary-100) / 0.3) 0.125rem, transparent 0.125rem),
        linear-gradient(to right, oklch(var(--color-primary-100) / 0.3) 0.125rem,  oklch(var(--button-ghost-bg)) 0.125rem);
      background-size: 1.5rem 1.5rem;
      background-position: center center;
      &:hover {
        background-image: 
          linear-gradient(oklch(var(--color-primary-50) / 0.3) 0.125rem, transparent 0.125rem),
          linear-gradient(to right, oklch(var(--color-primary-50) / 0.3) 0.125rem,  oklch(var(--color-primary-100)) 0.125rem);
      }
      &:active {
        background-image: 
          linear-gradient(oklch(var(--color-primary-100) / 0.4) 0.125rem, transparent 0.125rem),
          linear-gradient(to right, oklch(var(--color-primary-100) / 0.4) 0.125rem,  oklch(var(--color-primary-200)) 0.125rem);
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-primary-600));
    }
  }
  &.pi-btn--success-ghost {
    color: oklch(var(--color-success-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-success-600));
    &:hover {
      background-color: oklch(var(--color-success-100));
    }
    &:active {
      background-color: oklch(var(--color-success-200));
    }
    &.a11y {
      background: 
        repeating-linear-gradient( 
          45deg,
          oklch(var(--color-success-50)),
          oklch(var(--color-success-50)) 0.25rem,
          oklch(var(--button-ghost-bg)) 0.25rem,
          oklch(var(--button-ghost-bg)) 1.25rem 
        );
      &:hover {
        background: 
          repeating-linear-gradient( 
            45deg,
            oklch(var(--color-success-100) / 0.8),
            oklch(var(--color-success-100) / 0.8) 0.25rem,
            oklch(var(--color-success-100)) 0.25rem,
            oklch(var(--color-success-100)) 1.25rem 
          );
      }
      &:active {
        background: 
          repeating-linear-gradient( 
            45deg,
            oklch(var(--color-success-200) / 0.8),
            oklch(var(--color-success-200) / 0.8) 0.25rem,
            oklch(var(--color-success-200)) 0.25rem,
            oklch(var(--color-success-200)) 1.25rem 
          );
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-success-600));
    }
  }
  &.pi-btn--warning-ghost {
    color: oklch(var(--color-warning-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-warning-600));
    &:hover {
      background-color: oklch(var(--color-warning-100));
    }
    &:active {
      background-color: oklch(var(--color-warning-200));
    }
    &.a11y {
      background-image:  
        radial-gradient( oklch(var(--color-warning-100) / 0.5) 0.1rem, transparent 0.1rem),
        radial-gradient( oklch(var(--color-warning-100) / 0.5) 0.1rem, oklch(var(--button-ghost-bg)) 0.1rem);
      background-size: 1.5rem 1.5rem;
      background-position: 0 0, 0.75rem 0.75rem;
      &:hover {
        background-image:  
          radial-gradient( oklch(var(--button-ghost-bg) / 0.4) 0.1rem, transparent 0.1rem),
          radial-gradient( oklch(var(--button-ghost-bg) / 0.4) 0.1rem, oklch(var(--color-warning-100)) 0.1rem);
      }
      &:active {
        background-image:  
          radial-gradient( oklch(var(--color-warning-100)) 0.1rem, transparent 0.1rem),
          radial-gradient( oklch(var(--color-warning-100)) 0.1rem, oklch(var(--color-warning-200)) 0.1rem);
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-warning-600));
    }
  }
  &.pi-btn--danger-ghost {
    color: oklch(var(--color-danger-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-danger-600));
    &:hover {
      background-color: oklch(var(--color-danger-100));
    }
    &:active {
      background-color: oklch(var(--color-danger-200));
    }
    &.a11y {
      background-image: 
        linear-gradient(135deg, oklch(var(--color-danger-100) / 0.2) 25%, transparent 25%),
        linear-gradient(225deg, oklch(var(--color-danger-100) / 0.2) 25%, transparent 25%),
        linear-gradient(45deg, oklch(var(--color-danger-100) / 0.2) 25%, transparent 25%),
        linear-gradient(315deg, oklch(var(--color-danger-100) / 0.2) 25%, oklch(var(--button-ghost-bg)) 25%);
      background-position:  0.75rem 0, 0.75rem 0, 0 0, 0 0;
      background-size: 1.5rem 1.5rem;
      background-repeat: repeat;
      &:hover {
        background-image: 
          linear-gradient(135deg, oklch(var(--button-ghost-bg) / 0.15) 25%, transparent 25%),
          linear-gradient(225deg, oklch(var(--button-ghost-bg) / 0.15) 25%, transparent 25%),
          linear-gradient(45deg, oklch(var(--button-ghost-bg) / 0.15) 25%, transparent 25%),
          linear-gradient(315deg, oklch(var(--button-ghost-bg) / 0.15) 25%, oklch(var(--color-danger-100)) 25%);
      }
      &:active {
        background-image: 
          linear-gradient(135deg, oklch(var(--color-danger-100) / 0.3) 25%, transparent 25%),
          linear-gradient(225deg, oklch(var(--color-danger-100) / 0.3) 25%, transparent 25%),
          linear-gradient(45deg, oklch(var(--color-danger-100) / 0.3) 25%, transparent 25%),
          linear-gradient(315deg, oklch(var(--color-danger-100) / 0.3) 25%, oklch(var(--color-danger-200)) 25%);
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-danger-600));
    }
  }
  &:has(~.pi-btn) {
    margin-right: var(--spacing-m);
    margin-top: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
  }
}

:deep(.pi-badge) {
  position: relative;
  top: -1px;
  padding: var(--spacing-xxxs) var(--spacing-xxs);
  margin-left: var(--spacing-xxs);
  line-height: 1.125;
  border-radius: 1rem;
  background-color: oklch(var(--color-badge-bg));
  color: oklch(var(--color-badge-color));
  font-size: 0.75rem;
}


.pi-btn-loading {
  display: inline-block;
  vertical-align: text-bottom;
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  & span {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem;
    border: 0.125rem solid oklch(var(--color-border));
    border-color: oklch(var(--color-border)) transparent transparent transparent;
    border-radius: 50%;
    animation: btn-loading-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -450ms;
    }
    &:nth-child(2) {
      animation-delay: -300ms;
    }
    &:nth-child(3) {
      animation-delay: -150ms;
    }
  }
}

@keyframes btn-loading-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
