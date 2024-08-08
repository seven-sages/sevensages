<script setup lang="ts">
const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

interface INews {
  id: number;
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
    return img(image, { format: 'webp' })
  }
  return null
}
</script>
<template>
  <div class="max-w-screen-2xl flex flex-col px-4 mx-auto space-y-8">
    <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-center">
      <h2 class="font-bold text-3xl">Latest news</h2>
    </div>
    <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:space-x-8">
      <NewsEntry v-for="news of sortedNews" :id="news.id" :abstract="news.Abstract" :date="news.date_created" :header="news.Title" :img="getImage(news.Abstract_Image)" />
    </div>
  </div>
</template>
