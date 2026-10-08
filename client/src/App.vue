<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink><br />
    <RouterLink to="/hello-world">Hello World</RouterLink>
  </nav>

  <RouterView />
</template>
