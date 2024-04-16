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
      <h2>Select</h2>
      <section>
        <h3>Size</h3>
        <pi-select
          v-model="value"
          :options="options"
          size="small"
          listboxClass="aaa"
        />
        <pi-select
          v-model="value"
          :options="options"
        />
        <pi-select
          v-model="value"
          :options="options"
          size="large"
        />
      </section>
      <section>
        <h3>Custom Placeholder</h3>
        <pi-select
          v-model="value"
          :options="options"
          placeholder="請點擊選擇"
        />
      </section>
      <section>
        <h3>Show Clear Button</h3>
        <pi-select
          v-model="value"
          :options="options"
          placeholder="請點擊選擇"
          showClear
        />
      </section>
      <section>
        <h3>Prefix, Affix</h3>
        <pi-select
          v-model="value"
          :options="options"
          size="small"
        >
          <template v-slot:prefix>前綴插槽</template>
          <template v-slot:affix>後綴插槽</template>
        </pi-select>
        <pi-select
          v-model="value"
          :options="options"
        >
          <template v-slot:prefix>
            <img src="/favicon.ico" alt=""/>
          </template>
          <template v-slot:affix>
            <img src="/favicon.ico" alt=""/>
          </template>
        </pi-select>
        <pi-select
          v-model="value"
          :options="options"
          size="large"
        >
          <template v-slot:prefix>
            <img src="/favicon.ico" alt=""/>
          </template>
          <template v-slot:affix>
            <img src="/favicon.ico" alt=""/>
          </template>
        </pi-select>
      </section>
      <section>
        <h3>Colors</h3>
        <pi-select
          v-model="value"
          :options="options"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary-ghost"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success-ghost"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning-ghost"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger-ghost"
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary-ghost"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success-ghost"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning-ghost"
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger-ghost"
          a11y
        />
      </section>
      <section>
        <h3>Disabled</h3>
        <pi-select
          v-model="value"
          :options="options"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary-ghost"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success-ghost"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning-ghost"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger-ghost"
          disabled
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="primary-ghost"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="success-ghost"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="warning-ghost"
          disabled
          a11y
        />
        <pi-select
          v-model="value"
          :options="options"
          theme="danger-ghost"
          disabled
          a11y
        />
      </section>
      <section>
        <h3>Custom Popup Width</h3>
        <pi-select
          v-model="value"
          :options="options"
          optionWidth="100px"
        />
      </section>
      <section>
        <h3>Multiple</h3>
        <pi-select
          v-model="valueM"
          :options="options"
          multiple
          theme="primary"
          a11y
          size="large"
          showClear
        >
          <template v-slot:prefix>前綴插槽</template>
          <template v-slot:affix>後綴插槽</template>
        </pi-select>
        <pi-select
          v-model="valueM"
          :options="options"
          multiple="accordion"
        />
      </section>
      <section>
        <h3>Simple Search(Filter)</h3>
        <pi-select
          v-model="valueM"
          :options="options"
          multiple
          :toolbar="['search']"
        />
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const options = [
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' },
  { 
    type: 'group',
    label: '第一群',
    options: [
      { label: 'label10', value: '10' },
      { label: 'label20', value: '20' },
      { label: 'label30', value: '30' }
    ]
  },
  { 
    type: 'group',
    label: '第二群',
    options: [
      { label: 'label11', value: '11' },
      { label: 'label21', value: '21' },
      { label: 'label31', value: '31' }
    ]
  },
  { label: 'label2', value: '42' },
  { label: 'label3', value: '43' },
]

const value = ref('1')
const valueM = ref('')


const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Select'},
])


</script>
