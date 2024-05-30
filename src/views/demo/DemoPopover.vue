<template>
  <div class="page">
    <div class="page-header">
      <pi-breadcrumb :key="$route.path">
        <pi-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        >
          {{ pathItem.title }}</pi-breadcrumb-item
        >
      </pi-breadcrumb>
    </div>

    <div class="page-main">
      <router-link
        to="#ak-container"
        title="中央內容區塊"
        id="ak-container"
        accesskey="C"
        name="ak-container"
        >:::</router-link
      >
      <h2>Popover</h2>
      <section>
        <h3>Size</h3>
        <pi-popover size="small"> Small Popover </pi-popover>
        <pi-popover> Normal Popover </pi-popover>
        <pi-popover size="large"> Large Popover </pi-popover>
      </section>
      <section>
        <h3>Colors</h3>
        <pi-popover theme="primary"> Primary Popover </pi-popover>
        <pi-popover theme="success">Success Popover</pi-popover>
        <pi-popover theme="warning">Warning Popover</pi-popover>
        <pi-popover theme="danger">Danger Popover</pi-popover>
        <pi-popover theme="primary-ghost">Primary Ghost Popover</pi-popover>
        <pi-popover theme="success-ghost">Success Ghost Popover</pi-popover>
        <pi-popover theme="warning-ghost">Warning Ghost Popover</pi-popover>
        <pi-popover theme="danger-ghost">Danger Ghost Popover</pi-popover>
      </section>
      <section>
        <h3>Custom Button</h3>
        <pi-popover title="Popover Button Text"> Custom Button Popover </pi-popover>
        <pi-popover>
          <template v-slot:title>
            <mark>Popover Button Text</mark>
          </template>
          Slot Custom Button Popover
        </pi-popover>
      </section>
      <section>
        <h3>Padding = 0</h3>
        <pi-popover nopadding> Popover Content (no padding) </pi-popover>
      </section>
      <section>
        <h3>Select</h3>
        <pi-popover>
          <pi-select v-model="value" :options="options" />
        </pi-popover>
      </section>
      <section>
        <h3>Popover + Popover</h3>
        <pi-popover>
          Parent Popover <br />
          <pi-popover> Child Popover </pi-popover>
        </pi-popover>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const path = ref([{ title: '🏠首頁', url: '/' }, { title: 'Popover' }])

const options = [
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' }
]

const value = ref('1')
</script>
