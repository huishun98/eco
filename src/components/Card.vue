<template>
  <v-card class="mx-auto" height="100%">

    <v-img height="250" :src="values['Image']" v-if="values['Image']"></v-img>

    <v-card-title>{{ values["Title"] }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0" v-if="values['Rating']">
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ values["Rating"] }}</div>
      </v-row>

      <div class="my-4 text-subtitle-1" v-if="values['Type']">
        {{ values["Type"] }}
      </div>

      <div v-if="values['Description']">
        {{ values["Description"] }}
      </div>
    </v-card-text>

    <div v-if="values['Link']">
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="teal accent-4" text @click="open(values['Link'])">
          Open <v-icon small right>exit_to_app</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["values", "headers"],
  data: () => ({
    loading: true,
    selection: 1,
  }),
  computed: {
    rating: function () {
      return Number(this.values["Rating"]);
    },
  },
  methods: {
    open(link) {
      // check if https://
      if (
        link.substring(0, 8) == "https://" ||
        link.substring(0, 7) == "http://"
      ) {
        window.open(link);
      } else {
        window.open(`https://${link}`);
      }
    },
  },
};
</script>