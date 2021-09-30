<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="server-list bg-discord-dark-gray">
    <ul>
      <!-- Margin -->
      <div class="block relative m-0 p-0">
        <div class="flex justify-center relative p-0" style="width: 72px; margin-bottom: 8px"></div>
      </div>

      <!-- Home -->
      <ServerIcon
        icon="M10 20C10 20 10 14 10 14 10 14 14 14 14 14 14 14 14 20 14 20 14 20 19 20 19 20 19 20 19 12 19 12 19 12 22 12 22 12 22 12 12 3 12 3 12 3 2 12 2 12 2 12 5 12 5 12 5 12 5 20 5 20 5 20 10 20 10 20"
        :isSvg="true"
        serverid="home"
        name="Home"
        svgBackgroundHover="bg-discord-blurple"
        svgFill="text-white"
        customHref="/dashboard/home"
      ></ServerIcon>

      <!-- Spacer -->
      <div class="listItem flex relative justify-center">
        <div class="guildSeparator block"></div>
      </div>

      <!-- User Servers -->
      <ServerIcon
        v-for="server in servers"
        :key="server.id"
        :serverid="server.id"
        :icon="server.icon"
        :name="server.name"
      ></ServerIcon>

      <!-- Add Server -->
      <ServerIcon
        icon="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
        :isSvg="true"
        serverid="add-server"
        name="Add Server"
        customHref="https://discord.com/api/oauth2/authorize?client_id=767478359348740148&permissions=5368709119918&scope=bot%20applications.commands"
      ></ServerIcon>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ServerList',
  data() {
    return {
      servers: [
        {
          id: '516977525906341928',
          name: "Moulberry's Bush",
          icon: 'https://cdn.discordapp.com/icons/516977525906341928/df9910e0efddf5d7e42798bed833af19.webp?size=96',
        },
        {
          id: '784597260465995796',
          name: 'MB Staff & BushBot',
          icon: 'https://cdn.discordapp.com/icons/784597260465995796/f3278ba356ebcbf71d731c646b74f683.webp?size=96',
        },
        {
          id: '717176538717749358',
          name: "IRONM00N's Spaceship",
          icon: 'https://cdn.discordapp.com/icons/717176538717749358/9e302e61499450c52ea5099b4b73b9db.webp?size=96',
        },
      ],
    }
  },
})
</script>

<style>
.listItem {
  width: 72px;
  margin: 0 0 8px;
}

.guildSeparator {
  background-color: rgba(255, 255, 255, 0.06);
  height: 2px;
  width: 32px;
}
.server-list {
  width: 72px;
  height: calc(100vh - 4rem);
}
</style>
