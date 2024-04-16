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
      <h2>Accordion</h2>
      <section>
        <h3>Basic</h3>
        <pi-accordion>
          <pi-accordion-item>
            Content
          </pi-accordion-item>
          <pi-accordion-item open>
            Content (set default open)
            <pi-accordion>
              <pi-accordion-item>
                Content
              </pi-accordion-item>
              <pi-accordion-item open>
                Content (set default open)
              </pi-accordion-item>
            </pi-accordion>
          </pi-accordion-item>
        </pi-accordion>
      </section>
      <section>
        <h3>Custom Header</h3>
        <pi-accordion>
          <pi-accordion-item title="Custom">
            Content
          </pi-accordion-item>
          <pi-accordion-item>
            <template v-slot:title><mark>Custom(HTML)</mark></template>
            Content
          </pi-accordion-item>
        </pi-accordion>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Accrordion'},
])
</script>
