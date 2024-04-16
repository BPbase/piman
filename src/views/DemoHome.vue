<template>
  <div id="app">
    <router-link to="#ak-container" title="跳至主要內容" id="ak-jump">跳至主要內容</router-link>
    <h1 class="visually-hidden">Piman 無障礙前端 UI 框架 Vue3版</h1>
    <aside>
      <router-link to="#ak-nav" title="選單區塊" id="ak-nav" accesskey="N" name="ak-nav">:::</router-link>
      <div class="aside-block">
        <router-link to="/" class="logo" title="Logo">
          <img src="/logo-white.svg" alt="Piman Logo">
          <div>無障礙前端 UI 框架</div>
        </router-link>
      </div>
      <!-- <div class="aside-block">
        <bpa-select
          id="lang"
          v-model="value"
          :options="langOptions"
          size="small"
          disabledClear
          style="width: 100%;"
        >
          <template v-slot:prefix>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="language" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-language fa-w-20 fa-2x"><path fill="currentColor" d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z" class=""></path></svg>
          </template>
        </bpa-select>
      </div> -->
      <div class="aside-block">
        <nav class="menu">
          <ul>
            <li><router-link to="/accordion">Accordion</router-link></li>
            <li><router-link to="/breadcrumb">Breadcrumb</router-link></li>
            <li><router-link to="/button">Button</router-link></li>
            <li><router-link to="/card">Card</router-link></li>
            <li><router-link to="/checkbox">Checkbox</router-link></li>
            <li><router-link to="/dialog">Dialog</router-link></li>
            <li><router-link to="/dropdown">Dropdown</router-link></li>
            <li><router-link to="/formvalidate">Form</router-link></li>
            <li><router-link to="/input">Input</router-link></li>
            <li><router-link to="/msg">Msg</router-link></li>
            <li><router-link to="/pagination">Pagination</router-link></li>
            <li><router-link to="/popover">Popover</router-link></li>
            <li><router-link to="/radio">Radio</router-link></li>
            <li><router-link to="/select">Select</router-link></li>
            <li><router-link to="/switch">Switch</router-link></li>
            <li> <router-link to="/tabs">Tabs</router-link></li>
            <li><router-link to="/tooltip">Tooltip</router-link></li>
            <li><router-link to="/tree">Tree</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="aside-block">
        <nav class="menu">
          <ul>
            <li>
              <a href="https://github.com/ya-sai/piman" target="_blank" rel="noreferrer noopener">Github</a>
            </li>
            <!-- <li>
              <a href="https://piman.cc/category/document/components/" target="_blank" rel="noreferrer noopener">Docs</a>
            </li> -->
          </ul>
        </nav>
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>


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
/* #bpa-select-lang{
  width: 200px;
  svg {
    width: 32px;
    height: 32px;
  }
} */
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
  top: 0;;
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
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  }
  & a {
    color: white;
    &:visited {
      color: #FFBB00;
    }
  }
}
.aside-block {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media screen and (width <= 768px) {
    flex: 1;
    border-bottom-width: 0;
  }
}
.menu {
  & ul {
    margin-top: -1rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    @media screen and (width <= 768px) {
      display: flex;
      margin-top: 0;
    }
  }
  & li {
    & a {
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
    }
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
  & button {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  & svg {
    width: 1rem;
    height: 1rem;
    margin: 0;
  }
  & a {
    color: white;
    &:visited {
      color: #FFBB00;
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
</style>