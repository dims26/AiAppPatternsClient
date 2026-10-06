<template>
  <NuxtRouteAnnouncer />

  <v-app class="overflow-hidden">
    <v-main class="overflow-hidden">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>

    <v-bottom-navigation app :elevation="2">
      <v-btn to="/" value="chats">
        <v-icon>mdi-message-outline</v-icon>

        <span>Chats</span>
      </v-btn>

      <v-btn to="/tickets" value="tickets">
        <v-icon>mdi-view-list-outline</v-icon>

        <span>Tickets</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>