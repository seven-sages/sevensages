<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import { useWindowScroll } from "@vueuse/core";

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

const { y } = useWindowScroll()
</script>

<template>
  <div class="h-screen group p-2 bg-white">
    <section
      class="h-full relative shrink-0 overflow-hidden rounded-xl bg-gray-100"
    >
      <!-- image - start -->
      <img
        :src="img(hero.Image, { format: 'webp' })"
        loading="eager"
        alt="The Seven Sages and the emperor’s son, with the rubric, Incipit liber septem philosophorum cuiusda[m] Imperatoris Romani, Italy, N. (Venice), 1440s, Add MS 15685, f. 83r"
        class="absolute inset-0 h-full w-full object-cover object-[10%] md:object-left saturate-[.85]"
        :class="{ 'saturate-[.5]': y > 0 }"
      />
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-800/70 from-35% via-white to-zinc-700/90 mix-blend-multiply"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div
        class="relative flex items-end h-full p-12"
      >
        <div class="flex flex-col space-y-2">
          <span
            class="relax text-5xl font-bold text-white sm:text-6xl md:text-7xl max-w-lg self-begin"
            v-html="hero.Header"
          />
          <span class="text-left w-full md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 text-md md:text-xl text-white self-begin" v-html="hero.Tagline" />
        </div>
      </div>
      <!-- text end -->
    </section>
  </div>
</template>
