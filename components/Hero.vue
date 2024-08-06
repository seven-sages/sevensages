<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";

const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

interface Hero {
  id?: string | number;
  Header: string;
  Tagline: string;
  Image: string;
}

const hero = await getItems<Hero>({
  collection: "Hero",
});
</script>

<template>
  <div class="h-[90vh] group p-2 bg-white dark:bg-gray-800">
    <section
      class="h-full relative shrink-0 overflow-hidden rounded-xl bg-gray-100"
    >
      <!-- image - start -->
      <img
        :src="img(hero.Image)"
        loading="eager"
        alt="The Seven Sages and the emperor’s son, with the rubric, Incipit liber septem philosophorum cuiusda[m] Imperatoris Romani, Italy, N. (Venice), 1440s, Add MS 15685, f. 83r"
        class="absolute inset-0 h-full w-full object-cover object-left saturate-[.65]"
      />
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 from-35% via-white to-white mix-blend-multiply"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div
        class="relative flex items-end h-full p-12"
      >
        <div class="flex flex-col space-y-2">
          <span
            class="w-full md:w-8/12 text-left text-7xl md:text-8xl font-bold text-white"
            v-html="hero.Header"
          />
          <span class="text-left w-full md:w-6/12 text-md md:text-xl text-white" v-html="hero.Tagline" />
        </div>
      </div>
      <!-- text end -->
    </section>
  </div>
</template>
