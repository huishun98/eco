<template>
  <v-footer padless>
    <v-col class="text-center grey--text text-overline" cols="12">
      Copyright © {{ new Date().getFullYear() }}. All rights reserved.
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>
