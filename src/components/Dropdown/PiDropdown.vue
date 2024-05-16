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
    >
      <slot name="prefix"></slot>
      <span class="pi-dropdown-text" :id="`${fixId}-label-text`">
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>{{ t('dropdown.placeholder') }}</span>
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
import FocusTrap from '@/composables/useFocusTrap'
import { onMounted, ref } from 'vue'
import { generateId } from '@/utils/generateId'
const { t } = useI18n()
type Option = {
  label: string
  htmlLabel?: string
  url?: string
  type?: string
  disabled?: boolean
}
const props = defineProps({
  theme: String,
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
  listboxClass: String
})
const emits = defineEmits(['click'])
const refPiDropdown = ref(null)
const refPiDropdownList = ref(null)
const listboxOpen = ref(false)
const fixId = ref('')
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
const handleClickOption = (item: Option, index: number, type: string) => {}
const onKeypress = () => {}
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
  .pi-dropdown-text {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 0 0%;
    .pi-badge {
      margin-left: 0.25rem;
    }
  }
  img {
    max-height: 1.5rem;
  }
  &.pi-btn--small {
    padding-right: 2.5rem;
    img {
      max-height: 1rem;
    }
  }
  &.pi-btn--large {
    padding-right: 2.5rem;
  }
  .pi-dropdown-clear-btn {
    font-size: 0.875rem;
    color: darken(oklch(var(--color-gray-100)), 20%);
    border-radius: 50%;
    transition: opacity 160ms ease-in;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
    &:focus {
      box-shadow: inset 0 0 0 3px oklch(var(--color-focus));
    }
  }
  &.pi-dropdown-btn--open {
    [data-icon='chevron-down'] {
      transform: rotate3d(0, 0, 1, -180deg);
    }

    &::after {
      top: calc(50% - 4px);
      transform: rotate(225deg);
    }
  }
  &[class*='pi-btn--'] {
    .pi-dropdown-clear-btn {
      color: oklch(var(--color-white));
    }
  }
  &[class*='-ghost'] {
    .pi-dropdown-clear-btn {
      color: darken(oklch(var(--color-gray-100)), 20%);
    }
  }
}
.pi-dropdown-popup {
  display: none;
  position: absolute;
  padding: 0.5rem 0;
  width: 100%;
  min-width: 8rem;
  background-color: oklch(var(--color-white));
  border: 1px solid oklch(var(--color-black, 13.98% 0 0));
  border-radius: 0.25rem;
  box-shadow: var(--box-shadow);
  [role='option'] {
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: oklch(var(--color-black));
    transition: background-color 160ms ease-in;
    &:hover {
      background-color: oklch(var(--color-gray-100));
    }
    &:active {
      background-color: oklch(var(--color-gray-100));
    }
    &:focus {
      background-color: oklch(var(--color-gray-100));
    }
    a {
      margin: -0.5rem -1rem;
      padding: 0.5rem 1rem;
      display: block;
      color: oklch(var(--color-black));
      &:hover {
        background-color: oklch(var(--color-gray-100));
        opacity: 1;
      }
      &:active {
        background-color: oklch(var(--color-gray-100));
      }
      &:focus {
        outline: auto;
        outline-color: oklch(var(--color-gray-100));
        background-color: oklch(var(--color-gray-100));
      }
    }
  }
  &.pi-dropdown-popup--open {
    display: block;
    z-index: 999;
  }
}
</style>
