<template>
  <div id="app">
    <w-header></w-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'w-header': header
    }
  };
</script>

<style>

</style>
