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
      <h2>Message</h2>
      <section>
        Msg Content
        <pi-button @click="callMsg('', 'hello I\'m default')">Default</pi-button>
        <pi-button theme="primary" @click="callMsg('primary', 'hello I\'m primary')"
          >Primary</pi-button
        >
        <pi-button theme="success" @click="callMsg('success', 'hello I\'m success')"
          >Success</pi-button
        >
        <pi-button theme="warning" @click="callMsg('warning', 'hello I\'m warning')"
          >Warning</pi-button
        >
        <pi-button theme="danger" @click="callMsg('danger', 'hello I\'m danger')">Danger</pi-button>
        <br />
        Msg string content
        <pi-button @click="callStringMsg('', 'this is default string')">Default</pi-button>
        <pi-button theme="primary" @click="callStringMsg('primary', 'this is primary string')"
          >Primary</pi-button
        >
        <pi-button theme="success" @click="callStringMsg('success', 'this is default string')"
          >Success</pi-button
        >
        <pi-button theme="warning" @click="callStringMsg('warning', 'this is warning string')"
          >Warning</pi-button
        >
        <pi-button theme="danger" @click="callStringMsg('danger', 'this is danger string')"
          >Danger</pi-button
        >
        <br />
        Msg option content
        <pi-button @click="callObjectMsg('', 'hello I\'m default')">Default</pi-button>
        <pi-button theme="primary" @click="callObjectMsg('primary', 'hello I\'m primary')"
          >Primary</pi-button
        >
        <pi-button theme="success" @click="callObjectMsg('success', 'hello I\'m success')"
          >Success</pi-button
        >
        <pi-button theme="warning" @click="callObjectMsg('warning', 'hello I\'m warning')"
          >Warning</pi-button
        >
        <pi-button theme="danger" @click="callObjectMsg('danger', 'hello I\'m danger')">
          Danger</pi-button
        >
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ThemeType } from '@/components/Msg/PiMsg'
import { inject, ref } from 'vue'
const path = ref([{ title: '🏠首頁', url: '/' }, { title: 'Msg' }])
const myMsg: any = inject('PiMsg')
const callMsg = (type: ThemeType, msg: string) => {
  myMsg({
    msg: msg,
    theme: type,
    duration: 3000,
    onClose: () => {
      console.log('msg closed')
    }
  })
}
const callStringMsg = (type: ThemeType, msg: string) => {
  // use type to call myMsg.type
  if (type === '') {
    type = 'info'
  }
  myMsg[type](msg)
}
const callObjectMsg = (type: ThemeType, msg: string) => {
  // use type to call myMsg.type
  let option = {
    msg: msg,
    duration: 1000,
    position: 'center',
    width: '300px',
    onClose: () => {
      console.log('msg closed')
    }
  }
  switch (type) {
    case 'primary':
      myMsg.primary(option)
      break
    case 'success':
      myMsg.success(option)
      break
    case 'warning':
      myMsg.warning(option)
      break
    case 'danger':
      myMsg.danger(option)
      break
    default:
      myMsg.info(option)
  }
}
</script>
