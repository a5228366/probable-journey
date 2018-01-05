<template>
  <div id="app">
    <Loading v-if="!loadType"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from './components/loading'
export default {
  components: {Loading},
  name: 'app',
  data () {
    return {
      loadType: this.$isLoad
    }
  },
  created () {
    this.getIsLoad()
  },
  methods: {
    getIsLoad () {
      // if (!window.localStorage.loadStatus) {
      //   window.localStorage.loadStatus  = true
      // }
      (window.localStorage.loadStatus) ? this.loadType = !this.loadType : this.isLoad
    }
  }
}
</script>

<style lang="scss">
  @import "./style/style";
  #app{
    height: 100%;
  }
</style>
