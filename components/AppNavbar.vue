<template>
  <div class="columns no-print">
    <div class="column">
      <a v-if="this.$nuxt.$route.path !== '/'" @click="$router.go(-1)"
        >&laquo; Back</a
      >
    </div>
    <nav class="main-navigation column col-auto" role="navigation">
      <nuxt-link to="/">Home</nuxt-link>
      <!-- <nuxt-link to="/blog">Blog</nuxt-link> -->
      <a href="https://rootenginear.gitbook.io/blog/">Blog</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavbar"
};
</script>

<style scoped>
.main-navigation > a {
  margin-left: 0.4rem;
}
</style>