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
      <h2>Input</h2>
      <p>id manually</p>
      <section>
        <h3>Size</h3>
        <pi-input
          v-model="value"
          size="small"
          id="testId"
        />
        <pi-input
          v-model="value"
        />
        <pi-input
          v-model="value"
          size="large"
        />
      </section>
      <section>
        <h3>Placeholder</h3>
        <pi-input
          v-model="value"
          placeholder="客製化文字"
        />
      </section>
      <section>
        <h3>Disabled</h3>
        <pi-input
          v-model="value"
          disabled
        />
      </section>
      <section>
        <h3>Readonly</h3>
        <pi-input
          v-model="value"
          readonly
        />
      </section>
      <section>
        <h3>Required</h3>
        <pi-input
          v-model="value"
          required
        />
      </section>
      <section>
        <h3>Error</h3>
        <pi-input
          v-model="value"
          error
        />
      </section>
      <section>
        <h3>Accesskey</h3>
        <pi-input
          v-model="value"
          accesskey="K"
        />
      </section>
      <section>
        <h3>Disabled Clear</h3>
        <pi-input
          v-model="value"
          disabledClear
        />
      </section>
      <section>
        <h3>Password</h3>
        <pi-input
          v-model="value"
          type="password"
          placeholder="這是密碼"
        />
      </section>
      <section>
        <h3>Textarea</h3>
        <pi-input
          v-model="value"
          type="textarea"
          placeholder="這是多行文字"
        />
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('')

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Input'},
])
</script>
