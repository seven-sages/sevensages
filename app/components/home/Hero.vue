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

const { y } = useWindowScroll({ behavior: "smooth" });
const { height } = useWindowSize();
</script>

<template>
  <div v-if="hero" class="group bg-[#FCFCFA] px-8 py-4">
    <section
      class="relative flex h-[calc(100dvh-150px)] w-full shrink-0 items-center justify-center overflow-hidden rounded bg-gray-100 transition-transform duration-300"
    >
      <img
        :src="img(hero.Image, { format: 'webp', quality: 40 }) ?? undefined"
        loading="eager"
        alt="The Seven Sages and the emperor’s son, with the rubric, Incipit liber septem philosophorum cuiusda[m] Imperatoris Romani, Italy, N. (Venice), 1440s, Add MS 15685, f. 83r"
        class="absolute inset-0 h-full w-full object-cover object-center saturate-[.9] transition-transform duration-300 ease-in-out group-hover:scale-105"
        :class="{ 'saturate-[.7]': y > 0 }"
      />

      <div
        class="absolute inset-0 bg-black opacity-70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-75"
      ></div>

      <div class="relative flex h-full w-full items-center justify-center p-4">
        <div class="flex flex-col items-center gap-3 text-center">
          <span
            class="relax font-prata max-w-4xl self-center text-center text-5xl leading-none font-semibold text-white max-[400px]:text-[1.8rem] md:text-[4rem] 2xl:max-w-full"
            v-html="hero.Header"
          />
          <span
            class="text-medium max-w-10/12 self-center text-center text-[1.3rem] leading-none font-semibold text-white md:max-w-8/12 md:text-[1.8rem]"
            v-html="hero.Tagline"
          />
        </div>
      </div>
      <button
        @click="y = height"
        aria-label="scroll down"
        class="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 animate-bounce duration-700"
      >
        <Icon name="ph:caret-down-light" class="size-8 text-white" />
      </button>
    </section>
  </div>
</template>
