import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PiCard from "../PiCard.vue";

const wrapper = mount(PiCard, {
  props: {
    shadow: true
  },
  slots: {
    header: '我是標題',
    default: '我是內容',
    footer: '我是底部'
  },
  attachTo: document.body,
});

describe("Card", async() => {
  it("卡片標頭", () => expect(wrapper.find('.pi-card-header').text()).toBe('我是標題'));
  it("卡片內容", () => expect(wrapper.find('.pi-card-container').text()).toBe('我是內容'));
  it("卡片底部", () => expect(wrapper.find('.pi-card-footer').text()).toBe('我是底部'));
  it("卡片nopadding屬性", () => expect(wrapper.findComponent(PiCard).props().nopadding).toBe(false));
  it("卡片shadow屬性", () => expect(wrapper.findComponent(PiCard).props().shadow).toBe(true));
})

