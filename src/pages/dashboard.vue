<template>
  <div class="bg-discord-content h-screen">
    <Navbar />
    <ServerList />
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

export default Vue.extend({
  router: new VueRouter({
    routes: [{ path: '/dashboard/guild/:id' }],
  }),
})
</script>

<style></style>
