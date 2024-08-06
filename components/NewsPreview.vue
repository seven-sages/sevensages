<script setup lang="ts">
import { useDateFormat } from "../.nuxt/imports";
const { getUserById } = useDirectusUsers();;

const props = defineProps(["author", "date", "title", "abstract", "img", "id"]);

const formattedDate = useDateFormat(props.date, "DD.MM.YYYY");
const authorName = await getUserById({
  id: props.author,
});
const newsLink = `/news/${props.id}`;
</script>

<template>
  <div class="flex flex-wrap py-8 md:flex-nowrap">
    <div class="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
      <span class="title-font font-semibold text-gray-700 dark:text-gray-200"
        >{{ authorName.first_name }} {{ authorName.last_name }}</span
      >
      <span class="mt-1 text-sm text-gray-400">{{ formattedDate }}</span>
    </div>
    <div class="md:flex-grow flex space-x-4">
      <img :src="img" class="w-64 h-64 rounded-xl">
      <div>
        <h2
          class="title-font mb-2 text-2xl font-medium text-gray-900 dark:text-gray-200"
        >
          {{ title }}
        </h2>
        <ClientOnly>
          <p class="leading-relaxed dark:text-gray-300" v-html="abstract" />
        </ClientOnly>
        <NuxtLink
          :to="newsLink"
          class="mt-4 inline-flex items-center text-indigo-500 dark:text-indigo-400"
        >More
          <svg
            class="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
