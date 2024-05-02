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
      <h2>Tooltip</h2>
      <section>
        <h3>Basic</h3>
        <div class="flex-group">
          <pi-tooltip arrow-placement="lr" text="Left Content is Here.">
            <pi-button>
              Left
            </pi-button>
          </pi-tooltip>
          <pi-tooltip text="Center Content is Here.">
            <pi-button>
              Center
            </pi-button>
          </pi-tooltip>
          <pi-tooltip text="Right Content is Here. ">
            <pi-button>
              Right
            </pi-button>
          </pi-tooltip>
        </div>
      </section>
      <section>
        <h3>Popover + Tooltip</h3>
        <pi-popover>
          <pi-tooltip arrow-placement="lr" text="Tooltip Content in Popover Content">
            <span tabindex="0">
              Tooltip in Popover
            </span>
          </pi-tooltip>
        </pi-popover>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Tooltip'},
]);
</script>
<style>
  .flex-group {
    display: flex;
    justify-content: space-between;
  }
</style>