<script setup lang="ts">
const { getItems } = useDirectusItems()

interface Hero {
  id?: string | number;
  Header: string;
  Tagline: string;
}

const hero = await getItems<Event>({
  collection: 'Hero'
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 pb-6 sm:pb-8 lg:pb-12">
    <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-8 flex flex-wrap justify-between md:mb-16">
        <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
          <span v-html="hero.Header" class="text-gray-800 dark:text-white mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl" />
          <span v-html="hero.Tagline" class="max-w-md leading-relaxed text-gray-700 dark:text-gray-200 xl:text-lg text-justify" />
        </div>

        <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div class="group relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
            <img src="/img/hero_2.webp" loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
          </div>

          <div class="group overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img src="/img/hero_1.webp" loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
