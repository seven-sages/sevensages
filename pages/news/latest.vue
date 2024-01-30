<script setup lang="ts">
import { NewsPreview } from "#components";

const { getItems } = useDirectusItems();

interface INews {
  id?: string;
  Title: string;
  Abstract: string;
  Content: string;
  date_created: string;
  date_updated: string;
  user_created: string;
  user_updated: string;
}

const filters = { status: "published" };

const allNews = await getItems<INews>({
  collection: "News",
  params: {
    filter: filters,
  },
});
</script>
<template>
  <div class="bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6"
      >
        Latest News
      </h1>

      <div v-if="!allNews.length">
        <section class="body-font overflow-hidden text-gray-600">
          <p class="mb-4 text-center text-gray-800 dark:text-gray-200">
            No news yet
          </p>
        </section>
      </div>
      <div v-else>
        <section class="body-font overflow-hidden text-gray-600">
          <div class="container mx-auto px-5 py-24">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <NewsPreview
                v-for="news in allNews"
                :key="news.id"
                :title="news.Title"
                :abstract="news.Abstract"
                :date="news.date_created"
                :author="news.user_created"
                :id="news.id"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
