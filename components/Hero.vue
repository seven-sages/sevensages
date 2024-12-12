<script setup lang="ts">
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
  <div class="h-[100dvh] group bg-white p-2">
    <section
      class="h-full relative shrink-0 overflow-hidden bg-gray-100 rounded-lg"
    >
      <!-- image - start -->
      <img
        :src="img(hero.Image,
        { format: 'webp', quality: 40 })"
        loading="eager"
        alt="The Seven Sages and the emperor’s son, with the rubric, Incipit liber septem philosophorum cuiusda[m] Imperatoris Romani, Italy, N. (Venice), 1440s, Add MS 15685, f. 83r"
        class="absolute inset-0 h-full w-full object-cover object-[10%] md:object-left saturate-[1.5] rounded-lg"
        :class="{ 'saturate-[.70]': y > 0 }"
      />
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="absolute inset-0 bg-zinc-500 mix-blend-multiply"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div
        class="relative flex items-center h-full p-12"
      >
        <div class="flex flex-col space-y-2">
          <span
            class="relax text-6xl font-bold text-white sm:text-7xl md:text-7xl 3xl:text-8xl max-w-4xl 2xl:max-w-7xl self-center text-center"
            v-html="hero.Header"
          />
          <span class="w-full xl:w-9/12 2xl:w-7/12 3xl:w-6/12 text-xl text-justify md:text-2xl text-white self-center" v-html="hero.Tagline" />
        </div>
      </div>
      <!-- text end -->
      <!-- scroll down button start -->
      <button @click="y = height" aria-label="scroll down" class="absolute z-10 left-2/4 right-2/4 bottom-5 animate-bounce duration-700">
        <Icon name="ph:caret-down-light" class="text-white size-8" />
      </button>
      <!-- scroll down button end -->
    </section>
  </div>
</template>
