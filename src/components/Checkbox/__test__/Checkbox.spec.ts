import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PiCheckbox from "../PiCheckbox.vue";

const wrapper = mount(PiCheckbox, {
  props: {
    id: 'test',
    value: 1,
    modelValue: []
  },
  slots: {
    default: 'Checkbox1'
  },
  attachTo: document.body,
});

describe("Checkbox", async() => {
  it("Checkbox無障礙屬性", () => {
    expect(wrapper.find('#pi-checkbox-test').exists()).toBe(true);
    expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBe(wrapper.find('label').attributes('for'));
  });
  it("Checkbox點擊", async() => {
    await wrapper.find('input[type="checkbox"]').trigger("click");
    expect(wrapper.emitted('update:modelValue')).toEqual([[[1]]]);
    await wrapper.find('input[type="checkbox"]').trigger("click");
    expect(wrapper.emitted('update:modelValue')).toEqual([[[1]],[[]]]);
  });
})

