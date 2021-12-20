<template>
  <v-app-bar dense fixed elevate-on-scroll>
    <router-link to="/">
      <v-app-bar-title class="text-uppercase primary-color">
        <span class="font-weight-light">Eco</span> <span>sg</span>
      </v-app-bar-title>
    </router-link>

    <v-spacer></v-spacer>
    <div class="d-none d-sm-inline-block">
      <router-link
        :to="{ name: initiativeTypeTwo }"
        class="text-button link teal--text mx-2"
        >{{ initiativeTypeTwo }}</router-link
      >
      <router-link
        :to="{ name: initiativeTypeOne }"
        class="text-button link teal--text mx-2"
        >{{ initiativeTypeOne }}</router-link
      >
    </div>

    <v-app-bar-nav-icon
      class="d-sm-none"
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import { initiativeTypeOne, initiativeTypeTwo } from "../../config";

export default {
  name: "Navbar",
  data: () => ({
    initiativeTypeOne,
    initiativeTypeTwo,
  }),
};
</script>
