<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { getAssetUrl: img } = useDirectusAssetUrl();

interface HeroData {
  id?: string | number;
  Header: string;
  Tagline: string;
  Image: string;
}

defineProps<{
  hero?: HeroData | null;
}>();

const { y } = useWindowScroll({ behavior: 'smooth' });
const { height } = useWindowSize();
</script>

<template>
  <div v-if="hero" class="group bg-white py-6 px-8">
    <section
      class="relative flex h-[calc(100dvh-150px)] w-full shrink-0 items-center justify-center overflow-hidden rounded bg-gray-100 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300"
    >
      <!-- image - start -->
      <img
        :src="img(hero.Image,
        { format: 'webp', quality: 40 }) ?? undefined"
        loading="eager"
        alt="The Seven Sages and the emperor’s son, with the rubric, Incipit liber septem philosophorum cuiusda[m] Imperatoris Romani, Italy, N. (Venice), 1440s, Add MS 15685, f. 83r"
        class="absolute inset-0 h-full w-full object-cover object-center saturate-[.9] transition-transform duration-300 ease-in-out group-hover:scale-105"
        :class="{ 'saturate-[.7]': y > 0 }"
      />
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="absolute inset-0 bg-black opacity-70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-75"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div
        class="relative flex h-full w-full items-center justify-center p-4"
      >
        <div class="flex flex-col items-center gap-3 text-center">
          <span
            class="relax max-w-4xl self-center text-center font-prata text-5xl leading-none font-semibold text-white max-[400px]:text-[1.8rem] md:text-[4rem] 2xl:max-w-full"
            v-html="hero.Header"
          />
          <span
            class="max-w-[70%] self-center text-center text-[1.3rem] leading-none text-white max-[400px]:text-base md:text-[1.8rem]"
            v-html="hero.Tagline"
          />
        </div>
      </div>
      <!-- text end -->
      <!-- scroll down button start -->
      <button
        @click="y = height"
        aria-label="scroll down"
        class="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 animate-bounce duration-700"
      >
        <Icon name="ph:caret-down-light" class="size-8 text-white" />
      </button>
      <!-- scroll down button end -->
    </section>
  </div>
</template>
