<script setup lang="ts">
const props = defineProps<{
  id: number;
  header: string;
  abstract: string;
  img: string | null;
  date: string;
}>();

const link = `/news/${props.id}`
</script>
<template>
  <NuxtLink :href="link">
    <article class="flex h-full min-h-64 w-full bg-white pr-8 transition">
      <div class="rotate-180 p-2 [writing-mode:vertical-lr]">
        <time
          :datetime="date"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-primary-900"
        >
          <span>{{ useDateFormat(date, 'YYYY', { locales: 'en-US' }) }}</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>{{ useDateFormat(date, 'MMM DD', { locales: 'en-US' }) }}</span>
        </time>
      </div>

      <div v-if="img" class="hidden sm:block sm:basis-56 sm:shrink-0">
        <img
          alt=""
          :src="img"
          class="aspect-square size-64 rounded-xl object-cover"
        />
      </div>
      <div v-else class="hidden sm:block sm:basis-px sm:shrink-0" aria-hidden="true" />

      <div class="flex flex-1 flex-col justify-between">
        <div class="p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 class="font-bold uppercase text-primary-900">
              {{ header }}
            </h3>
          </a>
          <div class="mt-2 line-clamp-3 text-sm/relaxed text-primary-800 [&_p]:m-0 [&_p]:inline" v-html="abstract" />
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="rounded block px-5 py-3 text-center text-xs font-bold uppercase bg-white hover:bg-black border border-black text-primary-900 hover:text-white transition-colors duration-200"
          >
            Read News
          </a>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
