<template>
  <div
    ref="refPiSelect"
    :id=fixId
    class="pi-select"
  >
    <pi-button
      type="button"
      :id="`${fixId}-btn`"
      :theme=theme
      ref="refOpenBtn"
      aria-haspopup="listbox"
      :aria-expanded="listboxOpen ? 'true' : 'false'"
      :aria-controls="`${fixId}-listbox`"
      :disabled="disabled"
      :size="size"
      @click="handleClickSelect"
      :class="[
        'pi-select-btn',
        listboxOpen ? 'pi-select-btn--open' : '',
      ]"
      :a11y="a11y"
    >
      <slot name="prefix"></slot>
      <span class="visually-hidden">{{ t('select.hint') }}</span>
      <span
        v-if="selectedVal.length === 0"
        :id="`${fixId}-label-text`"
        class="pi-select-text pi-select-placeholder"
      >
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>{{ t('select.placeholder') }}</span>
      </span>
      <span
        v-else-if="multiple !== undefined"
        class="pi-select-text multiple-label-group"
      >
        <template v-if="multiple === 'accordion' && selectedVal.length > 1">
          <span class="multiple-label">{{ selectedVal[0].label }}</span>
          <span class="pi-badge">+{{ selectedVal.length -1 }}</span>
        </template>
        <span
          v-else
          v-for="item in selectedVal"
          :key="item.value"
          class="multiple-label"
        >
          {{ item.label }}
        </span>
      </span>
      <span
        v-else
        :id="`${fixId}-label-text`"
        class="pi-select-text"
      >
        {{ selectedVal[0].label  }}
      </span>
      <slot name="affix"></slot>
      <div
        role="button"
        v-if="selectedVal.length > 0 && showClear == true"
        tabindex="0"
        @click.stop="handleClearSelected"
        @keydown.enter.prevent.stop="handleClearSelected"
        @keydown.enter.prevent.space="handleClearSelected"
        class="pi-select-clear-btn"
      >
        <span aria-hidden="true" :title="t('select.clear')">✖</span>
        <span class="visually-hidden">{{ t('select.clear') }}</span>
      </div>
    </pi-button>
    <ul
      :id="`${fixId}-listbox`"
      role="listbox"
      ref="refListbox"
      tabindex="-1"
      :aria-labelledby="`${fixId}-label-text`"
      :aria-activedescendant="selectedId"
      :aria-multiselectable="multiple !== undefined"
      :class="[
        'pi-select-popup',
        listboxOpen ? 'pi-select-popup--open' : '',
        listboxClass ? listboxClass : ''
      ]"
    >
      <div
        v-if="toolbar"
        class="toolbar"
      >
        <label :for="`${fixId}-search`">
          <pi-input
            v-model="searchInput"
            ref="refSelectSearch"
            v-if="toolbar.includes('search')"
            :id="`${fixId}-search`"
            :placeholder="t('select.search')"
            @input="debounceSearch"
          />
          <span class="visually-hidden">{{ t('select.area_search') }}</span>
        </label>
      </div>
      <template v-for="(item, index) in innerOptions">
        <!-- 群組選項 -->
        <li
          role="group"
          v-if="item.type === 'group'"
          :key="`${index}-group`"
          tabindex="-1"
        >
          <ul
            role="none"
            :aria-label="item.label"
            tabindex="-1"
            :aria-labelledby="`${fixId}-optgroup-${index}`"
          >
            <li 
              role="presentation"
              class="optgroup-title"
              :id="`${fixId}-optgroup-${index}`"
            >
              {{ item.label }}
            </li>
            <li
              role="option"
              :id="`${fixId}-optgroup-${index}-option-${childIndex}`"
              v-for="(item, childIndex) in item.options"
              :key="childIndex"
              tabindex="0"
              :class="{
                'option-checked': item.checked,
                'option-multi-checked': multiple !== undefined
              }"
              :aria-selected="item.checked"
              @click="handleClickOption(item, childIndex, index, true)"
              @keydown.enter.prevent.stop="handleClickOption(item, childIndex, index, true)"
              @keydown.space.prevent.stop="onKeypress"
            >
              <slot name="option" :option="item">{{ item.label }}</slot>
            </li>
          </ul>
        </li>
        <!-- 選項 -->
        <li
          v-else
          role="option"
          :id="`${fixId}-option-${index}`"
          :key="index"
          tabindex="0"
          :class="{
            'option-checked': item.checked,
            'option-checked--multi': multiple !== undefined
          }"
          :aria-selected="item.checked"
          @click="handleClickOption(item, index, false)"
          @keydown.enter.prevent.stop="handleClickOption(item, index, false)"
          @keydown.space.prevent.stop="onKeypress"
        >
          <slot name="option" :option="item">{{ item.label }}</slot>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import useI18n from "@/locales/useI18n"
import { generateId } from '@/utils/generateId'
import useClickOutside from "@/composables/useClickOutside"
import FocusTrap from '@/composables/useFocusTrap'

interface ThisData {
  listboxOpen: boolean;
  selectedId: string;
  selected: string | null | {value: string, label: string};
  innerOptions: {value: string, label: string, checked: boolean}[];
  options: (Option|OptionGroup)[];
  selectedVal: {value: string, label: string}[];
  keyword: string;
  searchInput: string;
  debounce: { wait: number, timer: number };
  formItem: Vue | null;
  trap: FocusTrap | null;
  toolbar: string;
  vcoIntercept: null|Vue;
  close(): void;
  open(): void;
  handleEsc(): void;
  handleClickOutside(): void;
  onSearch(): void;
  resetTrap(el: HTMLElement): void;
}

interface OptionGroup {
  label: string,
  type: 'group',
  options: Option[]
}

interface Option {
  value: string,
  label: string,
}

const { t } = useI18n()
const props = defineProps({
  id: String,
  theme: String,
  options: {
    type: Array,
    required: true,
  },
  modelValue: [ String, Number, Array ],
  multiple: [ String ],
  placeholder: String,
  showClear: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  toolbar: Array,
  optionWidth: String,
  size: String,
  listboxClass: String,
  a11y: Boolean,
})
const emit = defineEmits([ 'search', 'update:modelValue', 'blur', 'change', 'toggleSlotItem', 'mountVcoItem' ])

// refs
const refPiSelect = ref(null)
const refOpenBtn = ref<InstanceType<typeof PiButton> | null>(null);
const refListbox = ref(null)
const refSelectSearch = ref(null)
const listboxOpen = ref(false)
const selectedId = ref('')
const fixId = ref(generateId());
const keyword = ref('')
const searchInput = ref('')
const trap = ref(null)
const debounce = reactive({
  timer: undefined,
  wait: 800
})

// Value
const selectedVal = computed({
  get: () => {
    if(props.multiple === undefined){
      let groupOpt: typeof Option |undefined;
      const opt = props.options
        .find(o => {
          if((o as OptionGroup).type === 'group'){
            const found = (o as OptionGroup).options
              .find(subO => subO.value === props.modelValue )
            if(found) groupOpt = found
          }
          else {
            return (o as Option).value === props.modelValue
          }
        })
        
      return opt? [opt] : groupOpt ? [groupOpt] : []
    }
    else {
      let groupOpts: Option[] = []
      const opt = props.options.filter(o => {
        if((o as OptionGroup).type === 'group' && Array.isArray(props.modelValue)) {
          const found = (o as OptionGroup).options
            .filter( subO => props.modelValue.includes(subO.value))
          groupOpts = groupOpts.concat(found)
        }
        else if (Array.isArray(props.modelValue)) {
          return (props.modelValue as Array<string | number>).includes((o as Option).value)
        }
      })
      return opt.concat(groupOpts)
    }
  },
  set: (val) => {
    emit('update:modelValue', val)
    if(formItem.value){
      nextTick(()=>{
        formItem.value!.emit('change', val)
      })
    }
  }
})

// Search delay
const debounceSearch = () => {
  if(debounce.timer) { 
    clearTimeout(debounce.timer)
  }
  debounce.timer = setTimeout(onSearch, debounce.wait)
}

// Search
const onSearch = () => {
  if(emit && emit.search) {
    emit('search', searchInput.value)
  }
  else {
    keyword.value = searchInput.value
    resetTrap(refSelectSearch.value as unknown as HTMLElement)
  }
}

// Focus Back to Select Button
const resetTrap = (firstFocus: HTMLElement) => {
  nextTick(()=>{
    if(trap.value) trap.value.dismiss()
    const list: HTMLElement = refListbox.value as unknown as HTMLElement
    trap.value = new FocusTrap([refPiSelect.value as unknown as HTMLElement, list], firstFocus)
  })
}

// Click Select Button
const handleClickSelect = () => {
  if (props.disabled) return;
  listboxOpen.value ? close() : open();
}

// Click Select Button Outside
const handleClickOutside = () => {
  const list: HTMLElement = refListbox.value as unknown as HTMLElement
  // Check if options from the multiple-select have been clicked
  if(listboxOpen.value && !list.contains(event.target as Node)) {
    close()
  }
}

// Clickoutside Composable
useClickOutside(refPiSelect, handleClickOutside)

// Click Clear Button
const handleClearSelected = () => {
  innerOptions.value.forEach(o => o.checked = false)
  const val = props.multiple === undefined ? '' : []
  emit('update:modelValue', val)
  if(formItem.value) formItem.value.emit('change', val)
  selectedId.value = '';
  document.getElementById(fixId.value+'-btn')!.focus();
}

// Click Select Option Item
const handleClickOption = (item: {value: any, label: string}, index: number, parentIndex: number, group: boolean) => {
  selectedId.value = group ? `${fixId.value}-optgroup-${parentIndex}-option-${index}` : `${fixId.value}-option-${index}`;
  if(props.multiple === undefined){
    close()
    selectedVal.value = item.value;
  }
  else {
    let arr = selectedVal.value.map(s=>(s as any).value)
    let idx = arr.indexOf(item.value)
    if(idx >= 0) {
      arr.splice(idx, 1)
      selectedVal.value = arr as any
    }
    else {
      arr.push(item.value)
      selectedVal.value = arr as any
    }
  }
}

// Keyboard Click
const onKeypress = (evt: KeyboardEvent) => {
  if( evt.target ) (evt.target as HTMLElement).click()
}

// Keyboard Click: ESC 
const handleEsc = (e: KeyboardEvent) => {
  if(e.key === 'Escape' || e.keyCode === 27) close()
}

// Close Select Options
const close = () => {
  // 確保 close 方法可以在下拉列表沒有打開的情況下安全地被呼叫。
  if (!listboxOpen.value) return;

  listboxOpen.value = false

  const list: HTMLElement = refListbox.value as unknown as HTMLElement

  if(trap.value){
    trap.value.dismiss()
    trap.value = null as any
  }

  refOpenBtn.value?.$el.focus()
  
  document.body.removeChild(list)
  
  if(formItem.value) formItem.value.emit('blur')

  document.removeEventListener('keyup', handleEsc)

  if(vcoIntercept.value){
    vcoIntercept.value.emit('toggleSlotItem', false, this)
  }
}

// Open Select Options
const open = () => {

  close()

  listboxOpen.value = true
  
  const list: HTMLElement = refListbox.value as unknown as HTMLElement

  document.body.appendChild(list)
  trap.value = new FocusTrap([refPiSelect.value as unknown as HTMLElement, list])

  const coor = refOpenBtn.value?.$el.getBoundingClientRect()

  list.style.top = `${window.scrollY + coor.top + coor.height}px`;
  const totalWidthOfDropdown = coor.left + (16 * 8);
  if (totalWidthOfDropdown > document.body.clientWidth && coor.width < 16 * 8) {
    list.style.right = "0";
    list.style.width = "auto";
  } else {
    list.style.left = `${coor.left}px`;
    list.style.width = props.optionWidth || `${coor.width}px`;
  }

  document.addEventListener('keyup', handleEsc)

  if(vcoIntercept.value){
    vcoIntercept.value.emit('toggleSlotItem', true, this)
  }
}

// Form and FormItem match
const formItem = computed(()=> {
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

// ??
const innerOptions = computed(()=> {
  let result = props.options.map((opt: OptionGroup|Option) => {
    if((opt as OptionGroup).type === 'group'){
      let subOpts =  (opt as OptionGroup).options.map(subO => {
        return {
          checked: selectedVal.value.map(s=>(s as any).value).includes(subO.value),
          ...subO
        }
      })
      if(keyword.value !== '') subOpts = subOpts.filter(opt => opt.label.includes(keyword.value))
      
      return {
        ...opt,
        options: subOpts
      }
    }else{
      return { 
        checked: selectedVal.value.map(s=>(s as any).value).includes((opt as Option).value), 
        ...opt 
      }
    }
  })
  if(keyword.value !== '') {
    result = result.filter(opt => (opt as OptionGroup).type==='group' || opt.label.includes(keyword.value))
  }

  return result
})

// Count
const optionsLength = computed(() => {
  let opt = 0
  let groupOpt = 0
  props.options.forEach(o => {
    if((o as OptionGroup).type === 'group'){
      groupOpt += (o as OptionGroup).options.length
    }
    else opt++
  })
  return opt + groupOpt
})

// ??
const vcoIntercept = computed(() => {
  const instance = getCurrentInstance();
  if (!instance) {
    return null;
  }
  let parent = instance.parent?.proxy as Vue | null;

  while (parent) {
    const hasIntercept = parent.$options?.vcoIntercept;
    if (hasIntercept) {
      return parent;
    }
    parent = parent.$parent?.proxy as Vue | null;
  }

  return null;
})

watch(optionsLength, (newValue, oldValue) => {
  if (listboxOpen.value) resetTrap(refSelectSearch.value as unknown as HTMLElement)
})

onMounted(() => {
  if(props.id) {
    fixId.value = 'pi-select-' + props.id
  } else {
    fixId.value = 'pi-select-' + generateId() // 假設 generateId 是一個可用的函數
  }

  const list: HTMLElement = refListbox.value as unknown as HTMLElement

  if (vcoIntercept.value) {
    vcoIntercept.value.emit('mountVcoItem', list)
  }
})

onBeforeUnmount(() => {
  if(listboxOpen.value) close()
})
</script>

<style scoped>
.pi-select {
  position: relative;
}

.pi-select-btn {
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
  &.pi-select-btn--open {
    /* & [data-icon="chevron-down"] {
      transform: rotate3d(0, 0, 1, -180deg);
    } */
    &:after {
      top: calc(50% - 4px);
      transform: rotate(225deg);
    }
  }
}

.multiple-label {
  &:not(:last-child){
    &:after {
      content: ',';
      margin-right: var(--spacing-xs);
    }
  }
}

.pi-select-text  {
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1 0 0%;
  @media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){
    flex: auto;
  }
}

.pi-badge {
  margin-left: var(--spacing-xxs);
}

.pi-select-clear-btn {
  font-size: 0.875rem;
  color: oklch(var(--color-gray-500));
  transition: opacity 160ms ease-in;
  padding: 0 var(--spacing-xxs);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
  &:focus {
    box-shadow: inset 0 0 0 3px oklch(var(--color-focus));
  }
  .pi-btn--primary &,
  .pi-btn--success &,
  .pi-btn--warning &,
  .pi-btn--danger & {
    color: oklch(var(--color-white));
  }
}

.pi-select-popup {
  display: none;
  position: absolute;
  padding: var(--spacing-xs) 0;
  max-width: 100vw;
  min-width: 8rem;
  background-color: oklch(var(--color-white));
  border: 1px solid oklch(var(--color-border));
  border-radius: var(--radius);
  box-shadow: var(--box-shadow);
  max-height: 50vh;
  overflow: auto;
  z-index: 1;
  & .toolbar {
    padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
    display: flex;
    border-bottom: 1px solid oklch(var(--color-border));
    > * {
      flex: 1;
      &:not(:last-of-type) {
        margin-right: var(--spacing-m);
      }
    }
  }
  [role="group"] {
    position: relative;
  }
  & .optgroup-title {
    position: sticky;
    top: -0.5rem;
    z-index: 1;
    padding: var(--spacing-xxs) var(--spacing-m);
    font-size: 0.75rem;
    color: oklch(var(--color-gray-700));
    background-color:  oklch(var(--color-white));
    border-top: 1px solid oklch(var(--color-border));
    border-bottom: 1px solid oklch(var(--color-border));
  }
  [role="option"] {
    cursor: pointer;
    padding: var(--spacing-xs) var(--spacing-m);
    color:  oklch(var(--color-black));
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
    &.option-checked {
      background-color: oklch(var(--color-white));
      color: oklch(var(--color-primary-600));
      position: relative;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0.4rem;
        right: 0px;
        transform: translate3d(-1.1875rem, 0.25rem, 0) rotate(45deg);
        width: 0.4rem;
        height: 0.65rem;
        border: solid oklch(var(--color-primary-600));
        border-width: 0 2px 2px 0;
        opacity: 1;
        transition: opacity 120ms ease-in;
      }
      &:hover {
        background-color: oklch(var(--color-primary-bg));
        color: oklch(var(--color-primary-600));
      }
      &:active,
      &:focus {
        background-color: oklch(var(--color-primary-100));
        color: oklch(var(--color-primary-700));
      }
    }
  }
  &.pi-select-popup--open {
    display: block;
  }
}

</style>