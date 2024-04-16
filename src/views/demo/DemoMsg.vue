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
      <h2>Message</h2>
      <section>
        Msg Content
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Pagination'},
])
</script>
