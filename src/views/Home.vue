<template>
  <v-container class="max-port-width">
    <v-row dense>
      <v-col v-for="card in cards" :key="card._rowNumber" sm="6" md="4">
        <Card :values="card" :headers="headers" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getInitiativesSheet } from "../api/sheets";
import Card from "../components/Card";

export default {
  name: "Home",
  mounted() {
    this.updateData();
  },
  data: () => ({
    cards: [],
    headers: [],
  }),
  components: {
    Card,
  },
  methods: {
    async updateData() {
      const sheet = await getInitiativesSheet();
      this.headers = sheet.headerValues;
      sheet.getRows().then((rows) => {
        this.cards = rows;
      });
    },
  },
};
</script>
