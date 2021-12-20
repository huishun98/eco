<template>
  <div>
    <Banner
      height="50vh"
      :title="initiativeTypeOne"
      imgname="rachel-park-unsplash.jpg"
    />
    <v-container class="max-port-width my-6" v-if="$store.state.initiativeTypeOne.length > 0">
      <v-row dense>
        <v-col
          v-for="card in $store.state.initiativeTypeOne"
          :key="card._rowNumber"
          sm="6"
          md="4"
        >
          <Card :values="card" />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="max-port-width my-6">
      <div class="text-center">
        No initiatives
      </div>
    </v-container>
  </div>
</template>

<script>
import Card from "../components/Card";
import Banner from "../components/Banner";
import { initiativeTypeOne } from "../../config";

export default {
  name: "Food",
  data: () => ({
    initiativeTypeOne,
  }),
  components: {
    Card,
    Banner,
  },
};
</script>
