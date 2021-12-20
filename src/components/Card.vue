<template>
  <v-card class="mx-auto" height="100%">
    <v-img height="200" :src="values['src']" v-if="values['src']"></v-img>

    <v-card-title>{{ values["title"] }}</v-card-title>

    <v-card-subtitle>
      <div v-if="values['description']">{{ values["description"] }}</div>
    </v-card-subtitle>

    <v-card-actions v-if="values['link']">
      <v-btn color="teal accent-4" text @click="open(values['link'])">
        explore
        <v-icon
          small
          right
          v-if="
            values['link'].substring(0, 8) == 'https://' ||
            values['link'].substring(0, 7) == 'http://'
          "
          >exit_to_app</v-icon
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["values"],
  methods: {
    open(link) {
      // check if https://
      if (
        link.substring(0, 8) == "https://" ||
        link.substring(0, 7) == "http://"
      ) {
        window.open(link);
      } else {
        this.$router.push(link);
      }
    },
  },
};
</script>