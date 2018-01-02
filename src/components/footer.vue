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
    border-top: 1px solid #303030;
  }
  .foot-inverse {
    background-color: rgba(34,34,34,1);
    border-color: #080808;
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
  @media (min-width: 768px)
    .navbar-fixed-bottom, .navbar-fixed-top {
        border-radius: 0;
  }
</style>
