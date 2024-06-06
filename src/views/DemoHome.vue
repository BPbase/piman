<template>
  <div id="app">
    <pi-button theme="primary" class="mobile-menu" @click="handleMobileMenuOpen">
      <span v-if="mobileMenuOpen">關閉選單</span>
      <span v-else>展開選單</span>
    </pi-button>
    <router-link to="#ak-container" title="跳至主要內容" id="ak-jump">跳至主要內容</router-link>
    <h1 class="visually-hidden">Piman 無障礙前端 UI 框架 Vue3版</h1>
    <aside :class="[mobileMenuOpen ? 'open' : '']">
      <router-link to="#ak-nav" title="選單區塊" id="ak-nav" accesskey="N" name="ak-nav"
        >:::</router-link
      >
      <div class="aside-block">
        <router-link to="/" class="logo" title="Logo">
          <img src="/logo-white.svg" alt="Piman Logo" />
          <div>無障礙前端 UI 框架</div>
        </router-link>
      </div>
      <div class="aside-block">
        <nav class="menu" aria-label="元件選單">
          <ul>
            <li>
              <router-link to="/accordion" class="label" @click="mobileMenuOpen = false"
                >Accordion</router-link
              >
            </li>
            <li>
              <router-link to="/breadcrumb" class="label" @click="mobileMenuOpen = false"
                >Breadcrumb</router-link
              >
            </li>
            <li>
              <router-link to="/button" class="label" @click="mobileMenuOpen = false"
                >Button</router-link
              >
            </li>
            <li>
              <router-link to="/card" class="label" @click="mobileMenuOpen = false"
                >Card</router-link
              >
            </li>
            <li>
              <router-link to="/checkbox" class="label" @click="mobileMenuOpen = false"
                >Checkbox</router-link
              >
            </li>
            <li>
              <router-link to="/dialog" class="label" @click="mobileMenuOpen = false"
                >Dialog</router-link
              >
            </li>
            <li>
              <router-link to="/dropdown" class="label" @click="mobileMenuOpen = false"
                >Dropdown</router-link
              >
            </li>
            <li>
              <router-link to="/formvalidate" class="label" @click="mobileMenuOpen = false"
                >Form</router-link
              >
            </li>
            <li>
              <router-link to="/input" class="label" @click="mobileMenuOpen = false"
                >Input</router-link
              >
            </li>
            <li>
              <router-link to="/msg" class="label" @click="mobileMenuOpen = false">Msg</router-link>
            </li>
            <li>
              <router-link to="/pagination" class="label" @click="mobileMenuOpen = false"
                >Pagination</router-link
              >
            </li>
            <li>
              <router-link to="/popover" class="label" @click="mobileMenuOpen = false"
                >Popover</router-link
              >
            </li>
            <li>
              <router-link to="/radio" class="label" @click="mobileMenuOpen = false"
                >Radio</router-link
              >
            </li>
            <li>
              <router-link to="/select" class="label" @click="mobileMenuOpen = false"
                >Select</router-link
              >
            </li>
            <li>
              <router-link to="/switch" class="label" @click="mobileMenuOpen = false"
                >Switch</router-link
              >
            </li>
            <li>
              <router-link to="/tabs" class="label" @click="mobileMenuOpen = false"
                >Tabs</router-link
              >
            </li>
            <li>
              <router-link to="/tooltip" class="label" @click="mobileMenuOpen = false"
                >Tooltip</router-link
              >
            </li>
            <li>
              <router-link to="/tree" class="label" @click="mobileMenuOpen = false"
                >Tree</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="aside-block">
        <nav class="menu" aria-label="資源與連結">
          <div class="aside-group">Coding</div>
          <ul>
            <li>
              <a
                href="https://github.com/bpbase/piman"
                class="label"
                target="_blank"
                rel="noreferrer noopener"
                title="open new window to Github"
                @click="mobileMenuOpen = false"
                >Github</a
              >
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://bpio.gitbook.io/piman/"
                class="label"
                target="_blank"
                rel="noreferrer noopener"
                title="open new window to Docs"
                @click="mobileMenuOpen = false"
                >Docs</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="aside-block">
        <nav class="menu" aria-label="測試三層選單">
          <div class="aside-group">Levels</div>
          <pi-accordion>
            <pi-accordion-item title="Level 1">
              <a
                href="https://bpio.gitbook.io/piman/"
                class="label"
                target="_blank"
                rel="noreferrer noopener"
                title="open new window to Docs"
                @click="mobileMenuOpen = false"
                >Level 2</a
              >
              <a
                href="https://bpio.gitbook.io/piman/"
                class="label"
                target="_blank"
                rel="noreferrer noopener"
                title="open new window to Docs"
                @click="mobileMenuOpen = false"
                >Level 2</a
              >
              <a
                href="https://bpio.gitbook.io/piman/"
                class="label"
                target="_blank"
                rel="noreferrer noopener"
                title="open new window to Docs"
                @click="mobileMenuOpen = false"
                >Level 2</a
              >
            </pi-accordion-item>
          </pi-accordion>
          <pi-accordion>
            <pi-accordion-item title="Level 1">
              <pi-accordion>
                <pi-accordion-item title="Level 2">
                  <a
                    href="https://bpio.gitbook.io/piman/"
                    class="label"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="open new window to Docs"
                    @click="mobileMenuOpen = false"
                    >Level 3</a
                  >
                </pi-accordion-item>
              </pi-accordion>
            </pi-accordion-item>
          </pi-accordion>
        </nav>
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
const handleMobileMenuOpen = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style>
#app {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 1.5;
  background: #222;
  @media screen and (width <= 768px) {
    flex-direction: column;
  }
}
&:is(h1, h2, h3, h4, h5, h6) {
  font-weight: bold;
}
h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
}
h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
section {
  margin-bottom: 1.5rem;
}
svg {
  margin-right: 0.25rem;
}
.logo {
  display: block;
  text-align: center;
}
@keyframes shadow-inside {
  from {
    box-shadow: inset -1rem 0 1rem rgb(0 0 0 / 0.8);
  }
  to {
    box-shadow: inset 1rem 0 1rem rgb(0 0 0 / 0.8);
  }
}
#ak-jump {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  color: white;
  background: black;
  &:focus-within {
    opacity: 1;
    z-index: 3;
  }
}
aside {
  position: sticky;
  top: 0;
  width: 260px;
  height: 100vh;
  word-break: break-word;
  overflow: auto;
  color: white;
  white-space: nowrap;
  background: #222;
  animation: shadow-inside linear;
  animation-timeline: scroll(self inline);
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media screen and (width <= 768px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    box-shadow: 0 0 1rem oklch(0% 0 0);
  }
  a {
    color: white;
    &:visited {
      color: #ffbb00;
    }
  }
  &.open {
    @media screen and (width <= 768px) {
      display: block;
    }
  }
}
.aside-block {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media screen and (width <= 768px) {
    /* flex: 1; */
    border-bottom-width: 0;
  }
  &:has(.pi-accordion) {
    padding-left: 0;
    padding-right: 0;
  }
  .pi-accordion__item {
    --color-border: transparent !important;
    --accordion-icon-color: var(--color-white);
    --accordion-bar-color: var(--color-focus);
  }
  .pi-accordion__item-header {
    --accordion-header-color: var(--color-white);
    button {
      padding-left: 1.5rem !important;
      background: none !important;
    }
  }
  .pi-accordion__item-container {
    --accordion-content-bg: transparent !important;
    padding: 0 0 0 1.5rem !important;
    @media screen and (width <= 768px) {
      padding: 0 !important;
    }
  }
}
.menu {
  ul {
    margin-top: -1rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  li {
    @media screen and (width <= 768px) {
    }
  }
  .label {
    display: block;
    padding: 1rem 1.5rem;
    &:hover {
      background-color: rgba(2, 2, 2, 0.7);
      opacity: 1;
    }
    &:focus-within {
      box-shadow: inset 0 0 0 3px oklch(var(--color-focus));
    }
    &[aria-current] {
      background-color: #020202;
    }
    & + ul {
      margin: 0;
      margin-left: 1rem;
    }
  }
  &:first-child {
    &:has(.aside-group) {
      margin-top: -1rem;
      ul {
        margin-top: 0;
      }
    }
  }
  &:has(.pi-accordion) {
    .aside-group {
      width: 100%;
      margin-left: 0;
    }
    @media screen and (width <= 768px) {
      .aside-group {
        margin-left: 1.5rem;
        width: calc(100% - 3rem);
      }
    }
  }
  @media screen and (width <= 768px) {
    margin: 0;
  }
}
.aside-group {
  background-color: oklch(100% 0 0 / 0.5);
  color: oklch(var(--color-black));
  font-size: 0.75rem;
  padding: var(--spacing-xxs) var(--spacing-l);
  margin-left: calc(0px - var(--spacing-l));
  margin-top: 0;
  width: calc(100% + 2 * (var(--spacing-l)));
  @media screen and (width <= 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0 0 0 0.25rem;
    border-radius: var(--radius);
  }
}
main {
  flex: 1;
}
.page-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
  button {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  svg {
    width: 1rem;
    height: 1rem;
    margin: 0;
  }
  a {
    color: white;
    &:visited {
      color: #ffbb00;
    }
  }
  .pi-breadcrumb__item {
    &[aria-current] {
      color: white;
    }
  }
}
.page-main {
  min-height: 100vh;
  word-break: break-word;
  padding: 1rem 2rem;
  background-color: #f2f2f2;
  border-top-left-radius: 0.75rem;
  @media screen and (width <= 768px) {
    padding: 1rem;
    border-top-right-radius: 0.75rem;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
}
.mobile-menu {
  display: none;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;
  @media screen and (width <= 768px) {
    display: block;
  }
}
</style>
