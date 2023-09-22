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
  <div class="bg-white pb-6 dark:bg-gray-800 sm:pb-8 lg:pb-12">
    <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-8 flex flex-wrap justify-between md:mb-16">
        <div
          class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48"
        >
          <span
            class="mb-4 text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl md:mb-8 md:text-6xl"
            v-html="hero.Header"
          />
          <span
            class="max-w-md text-justify leading-relaxed text-gray-700 dark:text-gray-200 xl:text-lg"
            v-html="hero.Tagline"
          />
        </div>

        <!-- image - start -->
        <div
          class="min-h-48 overflow-hidden rounded-xl lg:h-auto xl:w-7/12"
        >
          <img
            :src="img(hero.Image)"
            loading="lazy"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  </div>
</template>
