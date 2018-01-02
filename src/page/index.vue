<template lang="html">
  <div class="container">
    <Header></Header>
    <main  class="cd-main-content">
      <div class="cd-fixed-bg cd-bg-1">
        <h1>Alternate Fixed &amp; Scroll Backgrounds</h1>
      </div> <!-- cd-fixed-bg -->

      <div class="cd-scrolling-bg cd-color-2">
        <div class="cd-container">
          <p>
          sfsfs
          </p>
        </div> <!-- cd-container -->
      </div> <!-- cd-scrolling-bg -->

      <div  class="cd-fixed-bg cd-bg-2">
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div> <!-- cd-fixed-bg -->

      <div class="cd-scrolling-bg cd-color-3">
        <div class="cd-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus sapiente repudiandae labore rerum amet culpa inventore, modi non. Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto, officia exercitationem. Voluptates quibusdam odit odio incidunt consequatur, consectetur aspernatur optio vitae molestias, quas repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo ut error, consequuntur enim temporibus, adipisci tempora voluptate, id consequatur mollitia eveniet blanditiis. Illo quod repellendus alias? Cum rem doloremque adipisci accusantium? Saepe, necessitatibus!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus sapiente repudiandae labore rerum amet culpa inventore, modi non. Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto, officia exercitationem. Voluptates quibusdam odit odio incidunt consequatur, consectetur aspernatur optio vitae molestias, quas repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo ut error, consequuntur enim temporibus, adipisci tempora voluptate, id consequatur mollitia eveniet blanditiis. Illo quod repellendus alias? Cum rem doloremque adipisci accusantium? Saepe, necessitatibus!
          </p>
        </div> <!-- cd-container -->
      </div> <!-- cd-scrolling-bg -->

      <div class="cd-fixed-bg cd-bg-3">
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div> <!-- cd-fixed-bg -->

      <div class="cd-scrolling-bg cd-color-1">
        <div class="cd-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus sapiente repudiandae labore rerum amet culpa inventore, modi non. Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto, officia exercitationem. Voluptates quibusdam odit odio incidunt consequatur, consectetur aspernatur optio vitae molestias, quas repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo ut error, consequuntur enim temporibus, adipisci tempora voluptate, id consequatur mollitia eveniet blanditiis. Illo quod repellendus alias? Cum rem doloremque adipisci accusantium? Saepe, necessitatibus!
          </p>
        </div> <!-- cd-container -->
      </div> <!-- cd-scrolling-bg -->

      <div class="cd-fixed-bg cd-bg-4">
        <h2>Lorem ipsum dolor sit amet.</h2>
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
