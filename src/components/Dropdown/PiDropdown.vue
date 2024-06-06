<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <div ref="refPiDropdown" :id="fixId" class="pi-dropdown">
    <pi-button
      type="button"
      :id="`${fixId}-btn`"
      :theme="theme"
      aria-haspopup="listbox"
      :aria-expanded="listboxOpen ? 'true' : 'false'"
      :aria-controls="`${fixId}-listbox`"
      :disabled="disabled"
      :size="size"
      @click="handleClickSelect"
      :class="['pi-dropdown-btn', listboxOpen ? 'pi-dropdown-btn--open' : '']"
      :a11y="a11y"
    >
      <slot name="prefix"></slot>
      <span class="pi-dropdown-text" :id="`${fixId}-label-text`">
        <span :class="`placeholder-${theme}`" v-if="placeholder">{{ placeholder }}</span>
        <span :class="`placeholder-${theme}`" v-else>{{ t('dropdown.placeholder') }}</span>
        <span class="visually-hidden">{{ t('dropdown.hint') }}</span>
      </span>
      <slot name="affix"></slot>
    </pi-button>
    <ul
      :id="`${fixId}-listbox`"
      role="listbox"
      ref="refPiDropdownList"
      tabindex="-1"
      :aria-labelledby="`${fixId}-label-text`"
      :class="[
        'pi-dropdown-popup',
        listboxOpen ? 'pi-dropdown-popup--open' : '',
        listboxClass ? listboxClass : ''
      ]"
    >
      <template v-for="(item, index) in options" :key="index">
        <li
          :id="`${fixId}-option-${index}`"
          role="option"
          :tabindex="item.type != 'link' && item.type != 'external-link' ? '0' : '-1'"
          @click.capture="handleClickOption(item, index, item.type)"
          @keyup.capture.prevent.enter="handleClickOption(item, index, item.type)"
          @keydown.capture.prevent.space="onKeypress"
        >
          <router-link
            v-if="item.type == 'link'"
            :to="item.url"
            :title="`${t('dropdown.goto')} ${item.label}`"
            v-html="item.htmlLabel || item.label"
          ></router-link>

          <a
            v-else-if="item.type == 'external-link'"
            :href="item.url"
            :title="`${t('dropdown.new_tab')} ${item.label}`"
            target="_blank"
            rel="noopener noreferrer"
            v-html="item.label"
          ></a>
          <span v-html="item.label" v-else></span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import useI18n from '@/locales/useI18n'
import useClickOutside from '@/composables/useClickOutside'
import { onMounted, ref } from 'vue'
import { generateId } from '@/utils/generateId'
const { t } = useI18n()
type Option = {
  label: string
  value?: string
  htmlLabel?: string
  url?: string
  type?: string
  disabled?: boolean
}
const props = defineProps({
  theme: {
    type: String,
    default: 'default'
  },
  disabled: Boolean,
  id: String,
  options: {
    type: Array<Option>,
    required: true
  },
  placeholder: {
    type: String
  },
  fixed: Boolean,
  optionWidth: String,
  size: String,
  listboxClass: {
    type: String,
    default: ''
  },
  a11y: Boolean
})
const emit = defineEmits(['click'])
const refPiDropdown = ref(null)
const refPiDropdownList = ref(null)
const listboxOpen = ref(false)
const fixId = ref('')
const showLabel = ref('')
const openListbox = () => {
  listboxOpen.value = true
  // fixed
  if (props.fixed) {
    const btn = document.getElementById(`${fixId.value}`)
    const coords = btn.getBoundingClientRect()
    refPiDropdownList.value.style.top = coords.top + coords.height + 'px'
    refPiDropdownList.value.style.position = 'fixed'
    refPiDropdownList.value.style.width = coords.width + 'px'
  }
  if (props.optionWidth) {
    refPiDropdownList.value.style.width = props.optionWidth
  }
}
const handleClickSelect = () => {
  if (listboxOpen.value) listboxOpen.value = !listboxOpen.value
  else openListbox()
}
const handleClickOption = (item: Option, index: number, type: string) => {
  listboxOpen.value = false
  if (item.label && item.type !== 'link' && item.type !== 'external-link')
    showLabel.value = item.label
  emit('click', item)
}
const onKeypress = () => {
  console.log('onKeypress')
}
const handleClickOutside = () => {
  listboxOpen.value = false
}

useClickOutside(refPiDropdown, handleClickOutside)
onMounted(() => {
  if (props.id) fixId.value = `pi-dropdown-${props.id}`
  else fixId.value = `pi-dropdown-${generateId()}`
})
</script>

<style scoped>
.pi-dropdown {
  position: relative;
}

.pi-dropdown-btn {
  position: relative;
  width: 100%;
  margin: 0;
  padding-right: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-width: 0 0.1875rem 0.1875rem 0;
    width: 0.625rem;
    height: 0.625rem;
    right: 1.25rem;
    top: calc(50% - 0.40625rem);
    transform: rotate(45deg);
    transition: transform 160ms ease-in;
  }
  & img {
    max-height: 1.5rem;
  }
  &.pi-btn--small {
    padding-right: 2.5rem;
    & img {
      max-height: 1rem;
    }
  }
  &.pi-btn--large {
    padding-right: 2.5rem;
  }
  &.pi-dropdown-btn--open {
    &:after {
      top: calc(50% - 4px);
      transform: rotate(225deg);
    }
  }
}

.pi-dropdown-text {
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1 0 0%;
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    flex: auto;
  }
}

.pi-dropdown-popup {
  display: none;
  position: absolute;
  padding: var(--spacing-xs) 0;
  width: 100%;
  min-width: 8rem;
  background-color: oklch(var(--popover-content-bg));
  border: 1px solid oklch(var(--color-border));
  border-radius: var(--radius);
  box-shadow: var(--box-shadow);
  max-height: 50vh;
  overflow: auto;
  z-index: 1;
  [role='option'] {
    cursor: pointer;
    padding: var(--spacing-xs) var(--spacing-m);
    color: oklch(var(--popover-content-color));
    transition: background-color 160ms ease-in;
    &:hover {
      background-color: oklch(var(--color-gray-100));
    }
    &:active {
      background-color: oklch(var(--color-gray-200));
    }
    &:focus {
      background-color: oklch(var(--color-gray-200));
    }
    & a {
      margin: -0.5rem -1rem;
      padding: var(--spacing-xs) var(--spacing-m);
      display: block;
      color: oklch(var(--color-black));
      &:hover {
        background-color: oklch(var(--color-gray-100));
        opacity: 1;
      }
      &:active {
        background-color: oklch(var(--color-gray-200));
      }
      &:focus {
        outline: auto;
        outline-color: -webkit-focus-ring-color;
        background-color: oklch(var(--color-gray-100));
      }
    }
  }
  &.pi-dropdown-popup--open {
    display: block;
  }
}
</style>
