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
        <!-- default -->
        <pi-button @click="callMsg('', 'hello I\'m default')">Default</pi-button>
        <pi-button theme="primary" @click="callMsg('primary', 'hello I\'m primary')">Primary</pi-button>
        <pi-button theme="success" @click="callMsg('success', 'hello I\'m success')">Success</pi-button>
        <pi-button theme="warning" @click="callMsg('warning', 'hello I\'m warning')">Warning</pi-button>
        <pi-button theme="danger" @click="callMsg('danger', 'hello I\'m danger')">Danger</pi-button>
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import type { themeType } from '@/components/Msg/PiMsg';
import { inject, ref } from 'vue';
const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Msg'},
])
const myMsg: Function = inject('PiMsg');
const callMsg = (type: themeType, msg: string) => {
  myMsg({
    msg: msg,
    theme: type,
    duration: 3000,
    onClose: () => {
      console.log('msg closed')
    }
  })
}

</script>
