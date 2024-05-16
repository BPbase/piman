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
          {{ pathItem.title }}
        </pi-breadcrumb-item>
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
      <h2>Dropdown</h2>
      <section>
        <h3>大小</h3>
        <pi-dropdown
          v-model="value"
          :options="options"
          size="small"
          @click="onClick"
          listboxClass="abc"
        />
        <br />
        <pi-dropdown v-model="value" :options="options2" @click="onClick" listboxClass="abc" />
        <br />
        <pi-dropdown
          v-model="value"
          :options="options"
          size="large"
          @click="onClick"
          listboxClass="abc"
        />
        <br />
        <pi-dropdown
          v-model="value"
          placeholder="please choose"
          disabled
          :options="options2"
          @click="onClick"
          listboxClass="abc"
        />
        <br />
        <pi-dropdown
          v-model="value"
          placeholder="請選擇"
          :options="options"
          @click="onClick"
          listboxClass="abc"
        >
          <template #prefix>
            <div>😆</div>
          </template>
          <template #affix>
            <div>😆after</div>
          </template>
        </pi-dropdown>
        <br />
        <pi-dropdown
          v-model="value"
          placeholder="fixed"
          fixed
          :options="options2"
          @click="onClick"
          listboxClass="abc"
        />
        <br />
        <pi-dropdown
          v-model="value"
          placeholder="option width"
          optionWidth="100px"
          :options="options2"
          @click="onClick"
          listboxClass="abc"
        />
        <br />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const path = ref([{ title: '🏠首頁', url: '/' }, { title: 'Dropdown' }])
const options = [
  { type: 'link', url: '/', label: '內部連結', htmlLabel: '<mark>內部連結</mark>' },
  { type: 'external-link', url: 'https://google.com', label: '外部連結' },
  { label: '功能按鈕' }
]
const options2 = [
  { type: 'link', url: '/', label: '內部連結2' },
  { type: 'link', url: '/msg', label: '內部連結3' },
  { type: 'external-link', url: 'https://google.com', label: '外部連結' },
  { label: '功能按鈕' }
]
const onClick = (item: any) => {
  console.log(item)
}
</script>

<style scoped>
/* Your scoped styles here */
</style>
