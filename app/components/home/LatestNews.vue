<script setup lang="ts">
const { getAssetUrl: img } = useDirectusAssetUrl();

interface INews {
  id: number | string;
  Title: string;
  Abstract: string;
  Abstract_Image: string;
  date_created: string;
}

defineProps<{
  items: INews[];
}>();

function getImage(image: string | null | undefined) {
  if(image){
    return img(image, { format: 'webp', quality: 40 })
  }
  return null
}

const responsiveOptions = ref([
  {
    breakpoint: '1600px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1200px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>
<template>
  <div class="grid grid-cols-1 gap-y-8 px-4 xl:px-24">
    <div class="flex flex-col md:flex-row mb-4 md:px-4 lg:px-0 items-center justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-4">
      <div class="hidden md:block" />
      <h2 class="font-bold text-3xl md:pl-24">Latest news</h2>
      <a
        href="/news/latest"
        class="rounded whitespace-nowrap border border-zinc-500 px-2.5 py-0.5 text-sm text-zinc-700 hover:bg-black hover:text-white hover:border-white transition-colors duration-400"
      >All news</a>
    </div>
    <CompatCarousel :value="items" :numVisible="3" :numScroll="3" :responsive-options="responsiveOptions">
      <template #item="slotProps">
        <NewsEntry
          :id="slotProps.data.id"
          :abstract="slotProps.data.Abstract"
          :date="slotProps.data.date_created"
          :header="slotProps.data.Title"
          :img="getImage(slotProps.data.Abstract_Image)" />
      </template>
    </CompatCarousel>
  </div>
</template>
