<script setup lang="ts">
const { getItems } = useDirectusItems();

interface Hero {
  id?: string | number;
  Header: string;
  Tagline: string;
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

        <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div
            class="group relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
          >
            <img
              src="/img/hero_2.webp"
              loading="lazy"
              alt="Photo by Kaung Htet"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <div class="group overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              src="/img/hero_1.webp"
              loading="lazy"
              alt="Photo by Manny Moreno"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
