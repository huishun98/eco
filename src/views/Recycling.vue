<template>
  <div>
    <Banner
      height="50vh"
      :title="initiativeTypeTwo"
      imgname="claudio-schwarz-unsplash.jpg"
    />
    <v-container
      class="max-port-width my-6"
      v-if="$store.state.initiativeTypeTwo.length > 0"
    >
      <v-row dense>
        <v-col
          v-for="card in $store.state.initiativeTypeTwo"
          :key="card._rowNumber"
          sm="6"
          md="4"
        >
          <Card :values="card" />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="max-port-width my-6">
      <div class="text-center">No initiatives</div>
    </v-container>
  </div>
</template>

<script>
import Card from "../components/Card";
import Banner from "../components/Banner";
import { initiativeTypeTwo } from "../../config";

export default {
  name: "Recycling",
  data: () => ({
    initiativeTypeTwo,
  }),
  components: {
    Card,
    Banner,
  },
};
</script>
