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
      <div class="aside-block">
        <nav class="menu" aria-label="元件選單">
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
        <nav class="menu" aria-label="資源與連結">
          <div class="aside-group">Coding</div>
          <ul>
            <li>
              <a href="https://github.com/bpbase/piman" target="_blank" rel="noreferrer noopener" title="open new window to Github">Github</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://bpio.gitbook.io/piman/" target="_blank" rel="noreferrer noopener" title="open new window to Docs">Docs</a>
            </li>
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
  a {
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
    /* flex: 1; */
    border-bottom-width: 0;
  }
}
.menu {
  ul {
    margin-top: -1rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    @media screen and (width <= 768px) {
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }
  li {
    @media screen and (width <= 768px) {
      display: inline-block;
      vertical-align: middle;
    }
    a {
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
  &:first-child {
    &:has(.aside-group) {
      margin-top: -1rem;
      @media screen and (width <= 768px) {
        margin-top: 0;
        margin-left: -1rem;
      }
      ul {
        margin-top: 0;
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
    margin: 0;
    width: initial;
    padding: var(--spacing-xxs) var(--spacing-xxs);
    display: inline-block;
    vertical-align: middle;
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
</style>