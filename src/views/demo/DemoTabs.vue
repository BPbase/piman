<template>
  <div class="page">
    <div class="page-header">
      <pi-breadcrumb :key="$route.path">
        <pi-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        > {{ pathItem.title }}</pi-breadcrumb-item>
      </pi-breadcrumb>
    </div>
    <div class="page-main">
      <router-link to="#ak-container" title="中央內容區塊" id="ak-container" accesskey="C" name="ak-container">:::</router-link>
      <h2>Tabs</h2>
      <section>
        <h3>Basic</h3>
        <pi-tabs v-model="demoTabs">
          <pi-tab-panel name="first-tab" label="Tab1">This is the content of the first tab</pi-tab-panel>
          <pi-tab-panel name="second-tab" label="Tab2">This is the content of the second tab</pi-tab-panel>
        </pi-tabs>
      </section>
      <section>
        <h3>tab-panel Padding = 0</h3>
        <pi-tabs v-model="demoTabs4">
          <pi-tab-panel name="first-tab4" label="Tab1" nopadding>This is the content of the first tab with padding=0</pi-tab-panel>
          <pi-tab-panel name="second-tab4" label="Tab2" nopadding>This is the content of the second tab with padding=0</pi-tab-panel>
        </pi-tabs>
      </section>
      <section>
        <h3>Badge</h3>
        <pi-tabs v-model="demoTabs2">
          <pi-tab-panel name="first-tab2" label="Tab1" badge="23">This is the content of the first tab</pi-tab-panel>
          <pi-tab-panel name="second-tab2" label="Tab2" badge="new">This is the content of the second tab</pi-tab-panel>
          <pi-tab-panel name="third-tab2" label="Tab3">This is the content of the third tab</pi-tab-panel>
          <pi-tab-panel name="forth-tab2" label="Tab4">This is the content of the forth tab</pi-tab-panel>
        </pi-tabs>
      </section>
      <section>
        <h3>Tabs Prefiix/Affix icon classname</h3>
        <pi-tabs v-model="demoTabs3">
          <pi-tab-panel name="first-tab3" label="Tab1" prefix="fas fa-bars">This is the content of the first tab</pi-tab-panel>
          <pi-tab-panel name="second-tab3" label="Tab2" affix="fas fa-bars">This is the content of the second tab</pi-tab-panel>
        </pi-tabs>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs = ref('first-tab')
const demoTabs2 = ref('first-tab2')
const demoTabs3 = ref('first-tab3')
const demoTabs4 = ref('first-tab4')

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Tabs'},
])
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
</style>
