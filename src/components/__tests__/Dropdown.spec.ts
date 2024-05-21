import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PiDropdown from '../Dropdown/PiDropdown.vue'
const comp = {
  template: `
    <pi-dropdown
      :options=options
    />
  `,
  components: {
    PiDropdown
  },
  data() {
    return {
      options: [
        { type: 'link', url: '/', label: '內部連結' },
        { type: 'external-link', url: 'https://google.com', label: '外部連結' },
        { label: '功能按鈕' }
      ],
      options2: [
        { label: '全部', value: '' },
        { type: 'link', url: '/', label: '內部連結2' },
        { type: 'link', url: '/msg', label: '內部連結3' },
        { type: 'external-link', url: 'https://google.com', label: '外部連結' },
        { label: '功能按鈕', value: 'feature' },
        { label: '功能按鈕2', value: 'feature2' }
      ]
    }
  }
}

const wrapper = mount(comp, {
  attachTo: document.body,
  global: {
    stubs: {
      'router-link': true,
      'pi-button': true
    }
  }
})

describe('Dropdown', () => {
  it('點擊時展開/關閉下拉選單', async () => {
    let popup = wrapper.find('.pi-dropdown-popup--open')
    // check if the dropdown button is visible
    expect(wrapper.find('.pi-dropdown-btn').isVisible()).toBe(true)
    // check popup is empty
    expect(popup.exists()).toBe(false)
    // click the dropdown button
    await wrapper.find('.pi-dropdown-btn').trigger('click')
    // check if the dropdown popup is visible
    popup = wrapper.find('.pi-dropdown-popup--open')
    expect(popup.isVisible()).toBe(true)
    // click the dropdown button again
    await wrapper.find('.pi-dropdown-btn').trigger('click')
    // check if the dropdown popup is invisible
    popup = wrapper.find('.pi-dropdown-popup--open')
    expect(popup.exists()).toBe(false)
  })
})
