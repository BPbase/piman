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
      <h2>Checkbox</h2>
      <section>
        <h3>Basic</h3>
        <pi-checkbox value="1" v-model="valCheckbox">Checkbox1</pi-checkbox>
        <pi-checkbox value="2" v-model="valCheckbox">Checkbox2</pi-checkbox>
        <pi-checkbox value="3" v-model="valCheckbox">Checkbox3</pi-checkbox>
        <div>{{ valCheckbox }}  <pi-button size="small" @click="onClearCheckbox">Clear</pi-button></div>
      </section>
      <section>
        <h3>Disabled</h3>
        <pi-checkbox value="1" v-model="valCheckbox" disabled>Checkbox1</pi-checkbox>
        <pi-checkbox value="2" v-model="valCheckbox" disabled>Checkbox2</pi-checkbox>
        <pi-checkbox value="3" v-model="valCheckbox" disabled>Checkbox3</pi-checkbox>
        <div>{{ valCheckbox }}  <pi-button size="small" @click="onClearCheckbox">Clear</pi-button></div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// checkbox
const valCheckbox = ref([])
const onClearCheckbox = () => {
  valCheckbox.value = []
}

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Checkbox'},
])
</script>
