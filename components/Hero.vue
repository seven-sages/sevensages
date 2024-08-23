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

const { y } = useWindowScroll({ behavior: 'smooth' })
const { width, height } = useWindowSize()
</script>

<template>
  <div class="h-[100dvh] group bg-white">
    <section
      class="h-full relative shrink-0 overflow-hidden bg-gray-100"
    >
      <!-- image - start -->
      <img
        :src="img(hero.Image,
        { format: 'webp', quality: 40 })"
        loading="eager"
        alt="The Seven Sages and the emperor’s son, with the rubric, Incipit liber septem philosophorum cuiusda[m] Imperatoris Romani, Italy, N. (Venice), 1440s, Add MS 15685, f. 83r"
        class="absolute inset-0 h-full w-full object-cover object-[10%] md:object-left saturate-[.85]"
        :class="{ 'saturate-[.70]': y > 0 }"
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
      <div @click="y = height" class="absolute bottom-4 left-0 right-0 cursor-pointer">
        <span class="text-center flex flex-col w-full text-white font-bold">
        <i class="pi pi-arrow-circle-down" style="font-size: 1.5rem"></i>
        </span>
      </div>
    </section>
  </div>
</template>
