<script setup lang="ts">
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
</script>
<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
      <h2 class="font-bold text-3xl">Latest news</h2>
      <a class="bg-gray-200 hover:bg-blue-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
        View all
      </a>
    </div>
    <div class="block space-x-0 lg:flex lg:space-x-6">
      <NewsEntry v-for="news of sortedNews" :abstract="news.Abstract" :header="news.Title" :img="img(news.Abstract_Image)" />
    </div>
  </div>
</template>
