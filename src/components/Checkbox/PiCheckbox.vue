<template>
  <label
    :for=fixId
    :class="[
      'pi-checkbox-label',
      disabled ? 'pi-checkbox-label--disabled' : ''
    ]"
  >
    <input
      type="checkbox"
      :id="fixId"
      v-model="activeCheck"
      :disabled="disabled"
      :value="value"
      class="pi-checkbox-input"
      v-bind="$attrs"
      @change="onEvent('change')"
      @blur="onEvent('blur')"
    />
    <div class="pi-checkbox__inner">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, onMounted, ref } from 'vue';
import { generateId } from '@/utils/generateId';

const props = defineProps({
  id: String,
  disabled: Boolean,
  value: {
    type: [String, Number],
    default: ''
  },
  modelValue: {
    type: Array,
    default: ()=>([])
  }
})

const emit = defineEmits([ 'input', 'blur', 'change', 'update:modelValue' ])

const fixId = ref('')

const activeCheck = computed({
  get(){
    return props.modelValue.includes(props.value)
  },
  set(checked){
    let result = props.modelValue

    if(checked && !result.includes(props.value)) result.push(props.value)
    else if(!checked) result = result.filter(r => r !== props.value)

    return emit('update:modelValue', result)
  }
})

const formItem = computed(()=>{
  const self = getCurrentInstance()
  if(!self) return null
  let parent = self.parent;
  if(!parent) return null
  let parentName = parent.type.__name;

  while (parentName !== 'PiFormItem') {
    parent = parent.parent;
    if(!parent) return null
    parentName = parent.type.__name;
  }
  return parent;
})

const onEvent = (event: 'blur' | 'change') => {
  emit(event)
  nextTick(()=>{
    if(formItem.value) formItem.value.emit(event)
  })
}

onMounted(()=>{
  fixId.value = props.id ? `pi-checkbox-${props.id}` : `pi-checkbox-${generateId()}`
})
</script>

<style scoped>
.pi-checkbox-label {
  position: relative;
  font-size: 1rem;
  margin-right: var(--spacing-m);
  margin-bottom: var(--spacing-xs);
  display: inline-block;
  vertical-align: top;
  & .pi-checkbox__inner {
    display: inline-block;
    vertical-align: top;
    padding-left: var(--spacing-l);
    color: oklch(var(--checkbox-label-color));
    line-height: 1.5;
    &:before {
      content:'';
      position: absolute;
      transform: translate3d(-1.1875rem, 0.25rem, 0) rotate(45deg);
      width: 0.5rem;
      height: 0.75rem;
      border: solid oklch(var(--checkbox-inner-icon-color));
      border-width: 0 0.2rem 0.2rem 0;
      opacity: 0;
      transition: opacity 120ms ease-in;
      @media screen and (-ms-high-contrast: active),(-ms-high-contrast: none) {
        display: none;
        border-color: oklch(var(--color-black));
      }
    }
    &:after {
      content:'';
      position: absolute;
      top: 50%;
      left: calc((1.125rem - 0.75rem) / 2);
      width: 0.75rem;
      height: 0.2rem;
      opacity: 0;
      transform: translate3d(0, -50%, 0);
      background-color: oklch(var(--checkbox-inner-icon-color));
      @media screen and (-ms-high-contrast: active),(-ms-high-contrast: none) {
        display: none;
        border-color: oklch(var(--color-black));
      }
    }
    &:hover {
      color: oklch(var(--checkbox-label-hover-color));
    }
    &:active {
      color: oklch(var(--checkbox-label-active-color));
    }
    &:focus {
      color: oklch(var(--checkbox-label-focus-color));
    }
    &.pi-checkbox-input--indeterminate {
      &:after {
        opacity: 1;
      }
    }
  }
  &.pi-checkbox-label--disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
}

.pi-checkbox-input[type="checkbox"] {
  cursor: pointer;
  appearance: none;
  position: absolute;
  top: 0.1875rem;
  left: 0;
  width: 1.125rem;
  height: 1.125rem;
  background-color: oklch(var(--checkbox-square-bg));
  border: 1px solid oklch(var(--checkbox-square-border-color));
  border-radius: var(--radius);
  transition: background-color 160ms ease-in, border-color 160ms ease-in, box-shadow 160ms ease-in;
  &:hover {
    color: oklch(var(--checkbox-hover-color));
    border-color: oklch(var(--checkbox-square-hover-border-color));
  }
  &:active {
    color: oklch(var(--checkbox-label-active-color));
    background-color: oklch(var(--checkbox-square-active-bg));
  }
  &:checked + .pi-checkbox__inner {
    &:before {
      opacity: 1;
    }
  }
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px oklch(var(--color-focus));
  }
}
</style>
