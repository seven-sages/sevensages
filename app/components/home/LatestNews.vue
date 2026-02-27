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
  if (image) {
    return img(image, { format: "webp", quality: 40 });
  }
  return null;
}

const { width } = useWindowSize();

const slidesPerView = computed(() => {
  const currentWidth = width.value || Number.MAX_SAFE_INTEGER;

  if (currentWidth <= 1200) {
    return 1;
  }

  if (currentWidth <= 1600) {
    return 2;
  }

  return 3;
});

const carouselStyle = computed(() => ({
  "--slides-per-view": String(slidesPerView.value),
}));

const carouselBreakpoints = {
  "(max-width: 1600px)": { slidesToScroll: 1 },
  "(max-width: 1200px)": { slidesToScroll: 1 },
};
</script>
<template>
  <div class="grid grid-cols-1 gap-y-8 px-4 xl:px-24">
    <div
      class="mb-4 flex flex-col items-center justify-center space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-4 md:px-4 lg:px-0"
    >
      <div class="hidden md:block" />
      <h2 class="font-prata text-3xl font-bold md:pl-24">Latest news</h2>
      <a
        href="/news/latest"
        class="rounded border border-zinc-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-primary-800 transition-colors duration-400 hover:border-white hover:bg-black hover:text-white"
        >All news</a
      >
    </div>
    <div class="responsive-carousel" :style="carouselStyle">
      <UCarousel
        :items="items"
        :slides-to-scroll="3"
        :breakpoints="carouselBreakpoints"
        :arrows="true"
        :dots="true"
      >
        <template #default="slotProps">
          <NewsEntry
            :id="slotProps.item.id"
            :abstract="slotProps.item.Abstract"
            :date="slotProps.item.date_created"
            :header="slotProps.item.Title"
            :img="getImage(slotProps.item.Abstract_Image)"
          />
        </template>
      </UCarousel>
    </div>
  </div>
</template>
<style scoped>
.responsive-carousel :deep([data-slot="item"]) {
  flex: 0 0 calc(100% / var(--slides-per-view)) !important;
  max-width: calc(100% / var(--slides-per-view));
}
</style>
