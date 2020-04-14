<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Maze Solver</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" class="md-primary">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Algorithm Explanation</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Potential Optimization</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p>Dijsktra</p>
        <p>Bellman - Ford</p>
        <p>Prim</p>
        <p>Kruskal</p>
        <p>BFS</p>
        <grid />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Grid from './components/Grid'
export default {
  name: 'app',
  data() {
    return {
      menuVisible: false,
        
    }
  },
  components: {
    Grid
  }
}
</script>

<style lang="scss" scoped>
  .md-app {
    height: 1000px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
