<template>
  <nav class="navbar bg-navbar-background">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-custom-hover
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="mobileMenuClick"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="mobileHidden"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-8 w-8" src="/assets/bush-bot-pfp.png" alt="BushBot Logo" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <component
                :is="item.type"
                v-for="item in navigation"
                id="nav-item"
                :key="item.name"
                :to="item.type === 'NuxtLink' ? item.href : undefined"
                :href="item.type === 'a' ? item.href : undefined"
                :class="[item.current ? 'nav-item-current' : 'nav-item-not-current', 'px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}
              </component>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" :class="[mobileHidden ? 'hidden sm:hidden' : 'sm:hidden']">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          :class="[item.current ? 'nav-item-current' : 'nav-item-not-current', 'block px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      navigation: [
        {
          name: 'Home',
          type: 'NuxtLink',
          href: '/',
          current: this.$route.path === '/',
        },
        {
          name: 'Commands',
          type: 'NuxtLink',
          href: '/commands',
          current: this.$route.path.startsWith('/commands'),
        },
        {
          name: 'Dashboard',
          type: 'NuxtLink',
          href: '/dashboard',
          current: this.$route.path.startsWith('/dashboard'),
        },
        {
          name: 'Invite',
          type: 'a',
          href: 'https://discord.com/api/oauth2/authorize?client_id=767478359348740148&permissions=5368709119918&scope=bot%20applications.commands',
          current: false,
        },
        {
          name: 'Discord',
          type: 'a',
          href: 'https://discord.gg/bxuF5wCP76',
          current: false,
        },
      ],
      mobileHidden: true,
    }
  },
  methods: {
    mobileMenuClick() {
      this.mobileHidden = !this.mobileHidden
    },
  },
})
</script>

<style>
.navbar {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
  position: relative;
}
#nav-item {
  font-family: Whitney, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
.nav-item-current {
  color: rgba(255, 255, 255);
  border-bottom-color: rgba(255, 255, 255);
}
.nav-item-not-current {
  color: rgba(185, 187, 190);
  border-bottom-color: rgba(0, 0, 0, 0);
}
.nav-item-not-current:hover {
  color: rgba(220, 221, 222);
  border-bottom-color: rgba(220, 221, 222);
}
</style>
