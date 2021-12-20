<template>
  <v-app>
    <Navbar @toggle-drawer="drawer = !drawer" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />

    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-uppercase primary-color">
            <span class="font-weight-light">Eco</span> <span>SG</span>
          </v-list-item-title>
          <!-- <v-list-item-subtitle> </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item exact
          v-for="item in items"
          :key="item.title"
          link
          :to="{ name: item.routeName }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
:root {
  --primary-color: rgba(25, 73, 21, 0.8);
}
.primary-color {
  color: var(--primary-color);
}
.max-port-width {
  max-width: 1000px;
}
a:-webkit-any-link {
  text-decoration: none;
}
</style>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { initiativeTypeOne, initiativeTypeTwo } from "../config";

export default {
  name: "App",
  components: { Navbar, Footer },
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", routeName: "Home" },
      {
        title: initiativeTypeOne,
        icon: "mdi-view-dashboard",
        routeName: initiativeTypeOne,
      },
      {
        title: initiativeTypeTwo,
        icon: "mdi-view-dashboard",
        routeName: initiativeTypeTwo,
      },
    ],
  }),
  mounted() {
    this.$store.dispatch("updateData");
  },
};
</script>
