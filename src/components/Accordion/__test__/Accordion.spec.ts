import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PiAccordion from "../PiAccordion.vue";
import PiAccordionItem from "../PiAccordionItem.vue";

const wrapper = mount({
  template: `
    <pi-accordion>
      <pi-accordion-item>
        內容1
      </pi-accordion-item>
    </pi-accordion>
  `,
  components:{
    PiAccordion, PiAccordionItem
  }
}, {
  attachTo: document.body
});

describe("Accordion", () => {
  it("Item隱藏", () => expect(wrapper.find(".pi-accordion__item-container").isVisible()).toBe(false))
  it("Item的變數", () => expect(wrapper.findComponent(PiAccordionItem).props().open).toBe(false))
  it("Item無障礙設定", () => expect(wrapper.find(".pi-accordion__item-container").attributes('aria-hidden')).toBe('true'))
  
  it("點擊按鈕", async() => await wrapper.find(".pi-accordion__item-header button").trigger("click"))
  it("Item顯示", () => expect(wrapper.find(".pi-accordion__item-container").isVisible()).toBe(true))
  it("Item無障礙設定", () => expect(wrapper.find(".pi-accordion__item-container").attributes('aria-hidden')).toBe('false'))
})