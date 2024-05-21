import { createRouter, createWebHistory } from 'vue-router';
import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PiBreadcrumb from "../PiBreadcrumb.vue";
import PiBreadcrumbItem from "../PiBreadcrumbItem.vue";

interface pathItem {
  title: string;
  url: string;
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<h1>首頁</h1>' } },
    { path: '/page1', component: { template: '<h1>頁面1</h1>' } },
  ]
});

const wrapper = mount({
  template: `
    <pi-breadcrumb key="/">
      <pi-breadcrumb-item
        v-for="(pathItem, pathIndex) in path"
        :key="'pathIndex-' + pathIndex"
        :title="'前往' + pathItem.title"
        :to="pathItem.url"
      >
        {{ pathItem.title }}
      </pi-breadcrumb-item>
    </pi-breadcrumb>
  `,
  components:{
    PiBreadcrumb, PiBreadcrumbItem
  }
}, {
  data() {
    return {
      path: [
        { title: '首頁', url: '/' },
        { title: '頁面1', url: '/page1' },
      ] as pathItem[]
    }
  },
  global: {
    plugins: [router]
  },  
  attachTo: document.body,
});

describe("Breadcrumb", async() => {
  it("麵包屑數量", () => expect(wrapper.findAll('.pi-breadcrumb__item').length).toBe(((wrapper.vm.path as pathItem[]).length)));
  it("麵包屑設定", () => {
    const links = wrapper.findAll('.pi-breadcrumb__item a');
    links.forEach((link, index) => {
      expect(link.attributes('href')).toBe((wrapper.vm.path[index] as pathItem).url);
      expect(link.attributes('title')).toBe('前往' + (wrapper.vm.path[index] as pathItem).title);
    })
  });
})

