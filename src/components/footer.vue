<template lang="html">
  <footer>
    <div class="foot foot-inverse foot-fixed-bottom">
      <p>Copy &copy; Jeff Zore Contact me:347523563@qq.com</p>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .foot {
    height: auto;
    border-top: 0;
  }
  .foot-inverse {
    background-color:rgba(173, 172, 255, 0.1);
    border-color: rgba(187, 177, 177, 0.99);
  }
  .foot-fixed-bottom {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    bottom: 0;
    margin-bottom: 0;
    border-width: 1px 0 0;
    text-align: center;
    color: black;
  }
@media screen and (max-width: 768px){
    .foot {
      height: auto;
      border-top: 0;
      font-size: 0.75rem;
    }
  }
</style>
