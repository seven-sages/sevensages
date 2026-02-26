<script setup lang="ts">
import Hero from "~/components/Hero.vue";
import Strands from "~/components/Strands.vue";
import Funding from "~/components/Funding.vue";
import LatestNews from "~/components/LatestNews.vue"
import ForthcomingEvents from "~/components/ForthcomingEvents.vue";

definePageMeta({
  layout: 'landing-page'
})
</script>

<template>
  <div class="grid grid-cols-1 justify-center gap-y-24">
    <Hero />
    <Strands />
    <LatestNews />
    <ForthcomingEvents />
    <Funding />
  </div>
</template>
