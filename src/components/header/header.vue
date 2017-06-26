<template>
  <div id="home">
    <div class="header">
      <div id="image"></div>
      <div class="title">
        <div class="img">
          <img src="./img_01.jpg" alt="">
        </div>
        <div class="brand">
          <div>
            <img src="./brand@3x.png" alt="">
          </div>
          <div>
            <span>粥品香坊（大运村）</span>
          </div>
          <p>蜂鸟转送/38分钟送达</p>
          <div class="Sale">
            <img src="./decrease_1@3x.png" alt="">
            <span>在线支付满28减5，满50减10</span>
          </div>
        </div>
        <div class="Jump">
          <span>5个 ></span>
        </div>
      </div>
      <div class="board">
        <img src="./bulletin@3x.png" alt="">
        <p>粥品香坊其烹饪的秘方源于中国千年古法，再融和现代制作工艺 ... <span>></span></p>
      </div>
    </div>
    <div class="Router">
      <ul>
        <li>
          <router-link to="/content1" class="active">商品</router-link>
        </li>
        <li>
          <router-link to="/content2">评价</router-link>
        </li>
        <li>
          <router-link to="/content3">商家</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  @import "../../common/css/Header";
</style>
