<script setup lang="ts">
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
  <div class="bg-white pb-6 px-4 dark:bg-gray-800 mx-auto max-w-screen-2xl">
    <section class="min-h-90 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <!-- image - start -->
      <img :src="img(hero.Image)" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center" />
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="absolute inset-0 bg-slate-600 mix-blend-multiply"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl xl:max-w-5xl">
        <span
            class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl"
            v-html="hero.Header"
        />
        <span
            class="text-center text-xl text-white"
            v-html="hero.Tagline"
        />
      </div>
      <!-- text end -->
    </section>
  </div>
</template>
