<script setup lang="ts">
import { NewsPreview } from "#components";

const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

interface INews {
  id?: string;
  Title: string;
  Abstract: string;
  Abstract_Image: string;
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

const sortedNews = computed(() => {
  return allNews.sort(function(a,b) {
    return new Date(b.date_created) - new Date(a.date_created);
  })
})

function getImage(image) {
  if(image){
    return img(image, { format: 'webp', quality: 40 })
  }
  return null
}
</script>
<template>
  <div class="bg-white py-6 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl"
      >
        Latest News
      </h1>

      <div v-if="!allNews.length">
        <section class="body-font overflow-hidden text-gray-600">
          <p class="mb-4 text-center text-gray-800">
            No news yet
          </p>
        </section>
      </div>
      <div v-else>
        <section class="body-font overflow-hidden text-gray-600">
          <div class="container mx-auto px-6 py-12">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <NewsPreview
                v-for="news in sortedNews"
                :key="news.id"
                :img="getImage(news.Abstract_Image)"
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
