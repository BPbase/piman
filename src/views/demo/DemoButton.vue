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
      <h2>Button</h2>
      <section>
        <h3>Size</h3>
        <pi-button size="small">Default</pi-button>
        <pi-button>Default</pi-button>
        <pi-button size="large">Default</pi-button>
      </section>
      <section>
        <h3>Theme</h3>
        <pi-button theme="primary">Primary</pi-button>
        <pi-button theme="success">Success</pi-button>
        <pi-button theme="warning">Warning</pi-button>
        <pi-button theme="danger">Danger</pi-button>
        <pi-button theme="primary-ghost">Primary</pi-button>
        <pi-button theme="success-ghost">Success</pi-button>
        <pi-button theme="warning-ghost">Warning</pi-button>
        <pi-button theme="danger-ghost">Danger</pi-button>
      </section>
      <section>
        <h3>Enhance Accessibility</h3>
        <pi-button theme="primary" a11y>Primary</pi-button>
        <pi-button theme="success" a11y>Success</pi-button>
        <pi-button theme="warning" a11y>Warning</pi-button>
        <pi-button theme="danger" a11y>Danger</pi-button>
        <pi-button theme="primary-ghost" a11y>Primary</pi-button>
        <pi-button theme="success-ghost" a11y>Success</pi-button>
        <pi-button theme="warning-ghost" a11y>Warning</pi-button>
        <pi-button theme="danger-ghost" a11y>Danger</pi-button>
      </section>
      <section>
        <h3>Disabled</h3>
        <pi-button size="small" disabled>Default</pi-button>
        <pi-button disabled>Default</pi-button>
        <pi-button size="large" disabled>Default</pi-button>
        <br/>
        <pi-button theme="primary" disabled>Primary</pi-button>
        <pi-button theme="success" disabled>Success</pi-button>
        <pi-button theme="warning" disabled>Warning</pi-button>
        <pi-button theme="danger" disabled>Danger</pi-button>
        <pi-button theme="primary-ghost" disabled>Primary</pi-button>
        <pi-button theme="success-ghost" disabled>Success</pi-button>
        <pi-button theme="warning-ghost" disabled>Warning</pi-button>
        <pi-button theme="danger-ghost" disabled>Danger</pi-button>
        <br>
        <pi-button theme="primary" a11y disabled>Primary</pi-button>
        <pi-button theme="success" a11y disabled>Success</pi-button>
        <pi-button theme="warning" a11y disabled>Warning</pi-button>
        <pi-button theme="danger" a11y disabled>Danger</pi-button>
        <pi-button theme="primary-ghost" a11y disabled>Primary</pi-button>
        <pi-button theme="success-ghost" a11y disabled>Success</pi-button>
        <pi-button theme="warning-ghost" a11y disabled>Warning</pi-button>
        <pi-button theme="danger-ghost" a11y disabled>Danger</pi-button>
      </section>
      <section>
        <h3>Loading</h3>
        <pi-button size="small" loading></pi-button>
        <pi-button loading></pi-button>
        <pi-button size="large" loading></pi-button>
        <pi-button size="small" loading>Loading</pi-button>
        <pi-button loading>Loading</pi-button>
        <pi-button size="large" loading>Loading</pi-button>
        <br/>
        <pi-button theme="primary" loading>Primary</pi-button>
        <pi-button theme="success" loading>Success</pi-button>
        <pi-button theme="warning" loading>Warning</pi-button>
        <pi-button theme="danger" loading>Danger</pi-button>
        <pi-button theme="primary-ghost" loading>Primary</pi-button>
        <pi-button theme="success-ghost" loading>Success</pi-button>
        <pi-button theme="warning-ghost" loading>Warning</pi-button>
        <pi-button theme="danger-ghost" loading>Danger</pi-button>
        <br>
        <pi-button theme="primary" loading a11y>Primary</pi-button>
        <pi-button theme="success" loading a11y>Success</pi-button>
        <pi-button theme="warning" loading a11y>Warning</pi-button>
        <pi-button theme="danger" loading a11y>Danger</pi-button>
        <pi-button theme="primary-ghost" loading a11y>Primary</pi-button>
        <pi-button theme="success-ghost" loading a11y>Success</pi-button>
        <pi-button theme="warning-ghost" loading a11y>Warning</pi-button>
        <pi-button theme="danger-ghost" loading a11y>Danger</pi-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Button'},
])
</script>
