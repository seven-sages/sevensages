<script setup lang="ts">
import { useDateFormat } from "../.nuxt/imports";
const { getUserById } = useDirectusUsers();

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
      <span class="title-font font-semibold text-gray-700"
        >{{ authorName.first_name }} {{ authorName.last_name }}</span
      >
      <span class="mt-1 text-sm text-gray-400">{{ formattedDate }}</span>
    </div>
    <div class="md:flex-grow flex-col md:flex-row flex space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <img v-if="img" :src="img" class="w-128 md:w-64 h-64 rounded-lg object-cover" alt="">
      <div class="flex flex-col justify-between space-y-6 md:space-y-0">
        <div>
          <h2
            class="title-font mb-2 text-2xl font-medium text-gray-900"
          >
            {{ title }}
          </h2>
          <ClientOnly>
            <p class="leading-relaxed" v-html="abstract" />
          </ClientOnly>
        </div>
          <div class="sm:flex sm:items-end sm:justify-end align-bottom">
            <NuxtLink
              :to="newsLink"
              class="rounded block px-5 py-3 text-center text-xs font-bold uppercase bg-white hover:bg-black border border-black text-black hover:text-white transition-colors duration-200"
            >
              Read News
            </NuxtLink>
          </div>
      </div>
    </div>
  </div>
</template>
