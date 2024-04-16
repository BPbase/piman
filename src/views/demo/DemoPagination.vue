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
      <h2>Pagination</h2>
      <section>
        <!-- 
          @change:pageSize="onChangeSize" 
          :pageSizeOptions="pageSizeOptions"
          not yet
        -->
        <section>
          <h3>Size</h3>
          <pi-pagination
            :total="totalPages"
            v-model:current-page="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            :pageSize="pageSize"
            size="small"
          />
          <pi-pagination
            :total="totalPages"
            v-model:current-page="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            :pageSize="pageSize"
          />
          <pi-pagination
            :total="totalPages"
            v-model:current-page="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            :pageSize="pageSize"
            size="large"
          />
        </section>
        <section>
          <h3>Change Text</h3>
          <pi-pagination
            :total="totalPages"
            v-model:current-page="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            :pageSize="pageSize"
          >
            <template v-slot:first-page-text>最前</template>
            <template v-slot:prev-page-text>往前</template>
            <template v-slot:next-page-text>往後</template>
            <template v-slot:last-page-text>最後</template>
          </pi-pagination>
        </section>
        <section>
          <h3>Change Pager Count</h3>
          <p>pagerCount & pageSize must same</p>
          <pi-pagination
            :total="totalPages"
            v-model:current-page="currentPage"
            :pager-count="3"
            @change:page="onChangePage"
            :pageSize="3"
          />
        </section>
        <section>
          <h3>Layout</h3>
          <p>:layout="['total_item', 'total_page', 'page_size', 'first', 'last', 'jump']"</p>
          <pi-pagination
            :total="totalPages"
            v-model:current-page="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            :pageSize="pageSize"
            :layout="[]"
          />
        </section>
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const totalPages = ref(100)
const currentPage = ref(2)
const pagerCount = ref(5)
// const pageSizeOptions = [
//   { label: '3', value: 3 },
//   { label: '18', value: 18 }
// ]
const pageSize = ref(5)

const onChangePage = (page: number) => {
  console.log('turn to ', page);
}

// const onChangeSize= (size: number) => {
//   pageSize.value = size
//   currentPage.value = 1
//   console.log('expand to ', size);
// }

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Pagination'},
])
</script>
