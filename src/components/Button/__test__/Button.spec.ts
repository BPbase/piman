import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PiButton from "../PiButton.vue";

const wrapper = mount(PiButton, {
  props: {
    size: 'large',
    theme: 'primary',
    a11y: true,
    disabled: true,
    loading: true
  },
  slots: {
    default: '按鈕'
  },
  attachTo: document.body,
});

describe("Button", async() => {
  it("按鈕size設定", () => expect(wrapper.find('.pi-btn--large').exists()).toBe(true));
  it("按鈕theme設定", () => expect(wrapper.find('.pi-btn--primary').exists()).toBe(true));
  it("按鈕ally設定", () => expect(wrapper.find('.a11y').exists()).toBe(true));
  it("按鈕disabled設定", () => expect(wrapper.findComponent(PiButton).props().disabled).toBe(true));
  it("按鈕loading設定", () => expect(wrapper.findComponent(PiButton).props().loading).toBe(true));
})

