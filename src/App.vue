<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderImage from './components/HeaderImage.vue'
</script>

<template>
  <header>
    <HeaderImage/>

    <div class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/v-bind">V-Bind</RouterLink>
      <RouterLink to="/v-for">V-For</RouterLink>
      <RouterLink to="/v-if">V-If</RouterLink>
      <RouterLink to="/v-on">V-On</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
</style>
