// https://runthatline.com/how-to-detect-outside-click-with-vue-3/

import { onMounted, onBeforeUnmount } from 'vue'

export default function useClickOutside(
  component,
  callback,
  excludeComponent
) {
  // fail early if any of the required params is missing
  if (!component) {
    throw new Error('A target component has to be provided.')
  }
  
  if (!callback) {
    throw new Error('A callback has to be provided.')
  }

  const listener = (event) => {
    if (
      event.target === component.value ||
      event.composedPath().includes(component.value) ||
      event.target === excludeComponent ||
      event.composedPath().includes(excludeComponent)
    ) {
      return
    }
    if (typeof callback === 'function') {
      callback()
    }
  }
  onMounted(() => {
    window.addEventListener('click', listener)
    window.addEventListener('touchstart', listener);
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', listener)
    window.removeEventListener('touchstart', listener);
  })
}