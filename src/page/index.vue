<template lang="html">
  <div class="get-container-height">
    <Header></Header>
    <main class="cd-main-content">
      <div v-for="i in dat" class="get-container-height-2x">
        <div :style="{backgroundImage:`url(${i.pirtures})`}" class="cd-fixed-bg">
          <h1 v-text="i.titles"></h1>
        </div> <!-- cd-fixed-bg -->
        <div class="cd-scrolling-bg cd-color-2">
          <div class="cd-container">
            <p v-text="i.words"></p>
          </div> <!-- cd-container -->
        </div> <!-- cd-scrolling-bg -->
      </div>
      <div :style="{backgroundImage:`url(${foot.pirtures})`}" class="cd-fixed-bg">
        <h2>{{foot.titles}}<br>
        <a href="javascript:void(0)">{{foot.link}}</a></h2>
      </div> <!-- cd-fixed-bg -->
    </main> <!-- cd-main-content -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  components: {Header, Footer},
  data () {
    return {
      dat: [
        {
          pirtures: '../../static/imgs/cd-background-1.jpg',
          titles: '标题1',
          words: '文字1'
        },
        {
          pirtures: '../../static/imgs/cd-background-2.jpg',
          titles: '标题2',
          words: '文字2'
        },
        {
          pirtures: '../../static/imgs/cd-background-3.jpg',
          titles: '标题3',
          words: '文字3'
        },
        {
          pirtures: '../../static/imgs/cd-background-4.jpg',
          titles: '标题4',
          words: '文字4'
        }
      ],
      foot: {
        pirtures: '../../static/imgs/cd-background-4.jpg',
        titles: '尾标题',
        link: '广告'
      }
    }
  },
  created () {
    this.getImgWidth()
  },
  methods: {
    getImgWidth () {

    }
  }
}
</script>
<style lang="css">
</style>
