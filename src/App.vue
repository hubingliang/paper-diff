<template>
  <div id="app">
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <h3>
          <a href="#">Paper Diff</a>
        </h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1">
        <button>
          <label for="collapsible1">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </label>
        </button>
        <div class="collapsible-body">
          <ul class="inline">
            <li>
              <a href="https://github.com/hubingliang/paper-different">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
@import './paper.min.css';
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
