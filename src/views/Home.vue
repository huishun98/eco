<template>
  <Banner
    height="100vh"
    title="Eco SG"
    description="A one-stop green SG"
    :button1="button1"
    :button2="button2"
    imgname="mathew-schwartz-unsplash.jpg"
  />
</template>

<script>
import Banner from "../components/Banner";
import Card from "../components/Card";
import { initiativeTypeOne, initiativeTypeTwo } from "../../config";

export default {
  name: "Home",
  components: {
    Banner,
    Card,
  },
  data: () => ({
    button1: {
      title: initiativeTypeOne,
      routeName: initiativeTypeOne,
    },
    button2: {
      title: initiativeTypeTwo,
      routeName: initiativeTypeTwo,
    },
  }),
};
</script>
