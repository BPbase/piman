<template>
  <label
    :for="fixId"
    :class="[
      'pi-radio-label',
      disabled ? 'pi-radio-label--disabled' : ''
    ]"
  >
    <input
      type="radio"
      :id="fixId"
      v-model="activeCheck"
      :value="value"
      :name="name"
      :disabled="disabled"
      class="pi-radio-input"
      @blur="onEvent('blur')"
      @change="onEvent('change')"
    />
    <div class="pi-radio__inner"><slot></slot></div>
  </label>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, onMounted, ref } from 'vue';
import { generateId } from '@/utils/generateId';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  disabled: Boolean,
  value: String,
  modelValue: String,
  name: String
})

const emit = defineEmits([ 'input', 'blur', 'change', 'update:modelValue' ])

const fixId = ref('')

const activeCheck = computed({
  get(){
    return props.modelValue
  },
  set(){
    return emit('update:modelValue', props.value)
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

onMounted(() => {
  fixId.value = props.id ? `pi-checkbox-${props.id}` : `pi-checkbox-${generateId()}`
});
</script>


<style scoped>
.pi-radio-label {
  position: relative;
  font-size: 1rem;
  margin-right: var(--spacing-m);
  margin-bottom: var(--spacing-xs);
  display: inline-block;
  & .pi-radio__inner {
    display: inline-block;
    padding-left: var(--spacing-l);
    color: oklch(var(--radio-label-color));
    line-height: 1.5;
    &:before {
      content:'';
      position: absolute;
      transform: translate3d(calc(-1.5rem + 0.15625rem - 0.5px), 0.3125rem, 0);
      width: 0.875rem;
      height: 0.875rem;
      background-color: oklch(var(--radio-circle-checked-bg));
      border-radius: 50%;
      opacity: 0;
      transition: opacity 120ms ease-in;
      @media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){
        display: none;
      }
    }
    &:hover {
      color: oklch(var(--radio-label-hover-color));
    }
    &:active {
      color: oklch(var(--radio-label-active-color));
    }
    &:focus-within {
      color: oklch(var(--radio-label-focus-color));
    }
    & .pi-input-box {
      line-height: 1.15;
    }
  }
  &.pi-radio-label--disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
  &:last-child {
    margin-right: 0;
  }
}

.pi-radio-input {
  &[type="radio"] {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0.1875rem;
    left: 0;
    width: 1.125rem;
    height: 1.125rem;
    background-color: oklch(var(--radio-circle-bg));
    border: 1px solid oklch(var(--color-border));
    border-radius: 50%;
    transition: background-color 160ms ease-in, border-color 160ms ease-in, box-shadow 160ms ease-in;
    &:hover {
      border-color: oklch(var(--radio-border-hover-color));
    }
    &:active {
      border-color: oklch(var(--radio-border-active-color));
      background-color: oklch(var(--radio-circle-active-bg));
    }
    &:checked + .pi-radio__inner {
      &:before {
        opacity: 1;
      }
    }
    &:focus-within {
      box-shadow: 0 0 0 3px oklch(var(--color-focus));
    }
  }
}
</style>