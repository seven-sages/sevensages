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
    <article class="flex bg-white h-full w-full transition pr-8">
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          :datetime="date"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{{ useDateFormat(date, 'YYYY', { locales: 'en-US' }) }}</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>{{ useDateFormat(date, 'MMM DD', { locales: 'en-US' }) }}</span>
        </time>
      </div>

      <div v-if="img" class="hidden sm:block sm:basis-56">
        <img
          alt=""
          :src="img"
          class="aspect-square object-cover size-64 rounded-xl"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 class="font-bold uppercase text-gray-900">
              {{ header }}
            </h3>
          </a>
          <ClientOnly>
            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700" v-html="abstract" />
          </ClientOnly>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="rounded block px-5 py-3 text-center text-xs font-bold uppercase bg-white hover:bg-black border border-black text-black hover:text-white transition-colors duration-200"
          >
            Read News
          </a>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
