<template>
  <v-item-group class="banner">
    <v-img :height="height" :src="require(`../assets/${imgname}`)"></v-img>
    <div class="banner-text white--text">
      <div class="mark px-10 py-2 text-h2" v-if="title">
        {{ title }}
      </div>
      <div class="text-subtitle-1 my-4 px-5 primary-color mark-white" v-if="description">
        {{ description }}
      </div>
      <v-btn
        class="ma-2"
        dark
        color="var(--primary-color)"
        :to="{ name: button1.routeName }"
        v-if="button1"
        >{{ button1.title }}</v-btn
      >
      <v-btn
        class="ma-2"
        dark
        color="var(--primary-color)"
        :to="{ name: button2.routeName }"
        v-if="button2"
        >{{ button2.title }}</v-btn
      >
    </div>
  </v-item-group>
</template>

<script>
export default {
  name: "Banner",
  props: ["height", "button1", "button2", "title", "description", "imgname"],
};
</script>


<style>
.banner {
  position: relative;
}
.banner-text {
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mark {
  background-color: var(--primary-color);
}
.mark-white {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>