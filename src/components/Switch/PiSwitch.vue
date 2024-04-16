<template>
  <div class="pi-switch">
    <button
      type="button"
      role="switch"
      :aria-checked="`${modelValue}`"
      :id="`pi-switch-${fixId}`"
      @click="onSwitch"
      @blur="onEvent('blur')"
    >
      <div class="pi-switch-square pi-switch-square--close">
        <slot name="close-text">{{ t('switch.off') }}</slot>
      </div>
      <div class="pi-switch-square pi-switch-square--open">
        <slot name="open-text">{{ t('switch.on') }}</slot>
      </div>
    </button>
    <label
      :for="`pi-switch-${fixId}`"
      class="visually-hidden"
    >
      {{ labelText }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, onMounted, ref  } from 'vue';
import { generateId } from '@/utils/generateId';
import useI18n from "@/locales/useI18n";

const props = defineProps({
  id: String,
  labelText: {
    type: String,
    required: true,
  },
  modelValue: Boolean,
});

const { t } = useI18n()
const emit = defineEmits([ 'input', 'blur', 'change', 'update:modelValue' ])

const fixId = ref('');
const switchOpen = ref(false);

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

const onSwitch = () => {
  switchOpen.value = !props.modelValue;
  emit('update:modelValue', switchOpen.value);
  emit('change', switchOpen.value);
  onEvent('change');
};

onMounted(()=>{
  fixId.value = props.id ? `${props.id}` : `${generateId()}`
})
</script>

<style scoped>
.pi-switch {
  & button {
    padding: var(--spacing-xxs);
    border-radius: var(--radius);
    display: flex;
    flex-direction: row;
    align-items: stretch;
    transition: background-color 160ms ease-in;
    &[aria-checked="false"] {
      background-color: oklch(var(--switch-unchecked-bg));
      color: oklch(var(--switch-square-color));
      transition: background-color 160ms ease-in;
      & .pi-switch-square--close {
        background-color: oklch(var(--switch-square-bg));
      }
      & .pi-switch-square--open {
        background-color: transparent;
      }
    }
    &[aria-checked="true"] {
      background-color: oklch(var(--switch-checked-bg));
      color: oklch(var(--switch-square-color));
      transition: background-color 160ms ease-in;
      & .pi-switch-square--close {
        background-color: transparent;
        color: oklch(var(--switch-square-checked-color));
      }
      & .pi-switch-square--open {
        background-color: oklch(var(--switch-square-bg));
      }
    }
    &:focus-within {
      box-shadow: 0 0 0 3px oklch(var(--color-focus));
    }
  }
}

.pi-switch-square {
  padding: var(--spacing-xxs) var(--spacing-xs);
  border-radius: var(--radius-inner);
}
</style>