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
        <pi-dropdown v-model="value" :options="options" size="small" @click="onClick" />
        <br />
        <pi-dropdown v-model="value" :options="options2" @click="onClick" listboxClass="abc" />
        <br />
        <pi-dropdown v-model="value" :options="options" size="large" @click="onClick" />
        <br />
        <h3>主題色</h3>
        <div>
          <pi-dropdown v-model="value" :options="options" theme="primary" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="primary-ghost" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="success" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="success-ghost" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="warning" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="warning-ghost" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="danger" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="danger-ghost" @click="onClick" />
          <pi-dropdown v-model="value" :options="options" theme="primary" @click="onClick" a11y />
          <pi-dropdown
            v-model="value"
            :options="options"
            theme="primary-ghost"
            @click="onClick"
            a11y
          />
          <pi-dropdown v-model="value" :options="options" theme="success" @click="onClick" a11y />
          <pi-dropdown
            v-model="value"
            :options="options"
            theme="success-ghost"
            @click="onClick"
            a11y
          />
          <pi-dropdown v-model="value" :options="options" theme="warning" @click="onClick" a11y />
          <pi-dropdown
            v-model="value"
            :options="options"
            theme="warning-ghost"
            @click="onClick"
            a11y
          />
          <pi-dropdown v-model="value" :options="options" theme="danger" @click="onClick" a11y />
          <pi-dropdown
            v-model="value"
            :options="options"
            theme="danger-ghost"
            @click="onClick"
            a11y
          />
        </div>
        <br />
        <h3>提示</h3>
        <pi-dropdown v-model="value" placeholder="請選擇" :options="options2" @click="onClick" />
        <br />
        <h3>禁用</h3>
        <pi-dropdown v-model="value" disabled :options="options2" @click="onClick" />
        <pi-dropdown v-model="value" :options="options" theme="primary" @click="onClick" disabled />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="primary-ghost"
          @click="onClick"
          disabled
        />
        <pi-dropdown v-model="value" :options="options" theme="success" @click="onClick" disabled />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="success-ghost"
          @click="onClick"
          disabled
        />
        <pi-dropdown v-model="value" :options="options" theme="warning" @click="onClick" disabled />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="warning-ghost"
          @click="onClick"
          disabled
        />
        <pi-dropdown v-model="value" :options="options" theme="danger" @click="onClick" disabled />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="danger-ghost"
          @click="onClick"
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="primary"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="primary-ghost"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="success"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="success-ghost"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="warning"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="warning-ghost"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="danger"
          @click="onClick"
          a11y
          disabled
        />
        <pi-dropdown
          v-model="value"
          :options="options"
          theme="danger-ghost"
          @click="onClick"
          a11y
          disabled
        />
        <br />
        <h3>前綴與後綴</h3>
        <pi-dropdown v-model="value" placeholder="請選擇" :options="options" @click="onClick">
          <template #prefix>
            <div>😆</div>
          </template>
          <template #affix>
            <div>😆after</div>
          </template>
        </pi-dropdown>
        <br />
        <pi-dropdown v-model="value" placeholder="請選擇" :options="options" @click="onClick">
          <template v-slot:prefix>
            <img src="/favicon.ico" alt="" />
          </template>
          <template v-slot:affix>
            <img src="/favicon.ico" alt="" />
          </template>
        </pi-dropdown>
        <br />
        <h3>position: fixed</h3>
        <pi-dropdown
          v-model="value"
          placeholder="fixed"
          fixed
          :options="options2"
          @click="onClick"
        />
        <br />
        <h3>自定義選項列表寬度</h3>
        <pi-dropdown
          v-model="value"
          placeholder="option width"
          optionWidth="300px"
          :options="options2"
          @click="onClick"
        />
        <br />
        <h3>在 listbox增加自定義 classname</h3>
        <pi-dropdown
          v-model="value"
          placeholder="custom class"
          :options="options2"
          @click="onClick"
          listboxClass="custom-class"
        />
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
  { label: '功能按鈕', value: 'feature' },
  { label: '功能按鈕2', value: 'feature2' }
]
const options2 = [
  { label: '全部', value: '' },
  { type: 'link', url: '/', label: '內部連結2' },
  { type: 'link', url: '/msg', label: '內部連結3' },
  { type: 'external-link', url: 'https://google.com', label: '外部連結' },
  { label: '功能按鈕', value: 'feature' },
  { label: '功能按鈕2', value: 'feature2' }
]
const onClick = (item: any) => {
  if (typeof item.value !== 'undefined') value.value = item.value
  // you can do something here
}
</script>

<style scoped>
/* Your scoped styles here */
.pi-dropdown {
  margin-top: 10px;
}
</style>
