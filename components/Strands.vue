<script setup lang="ts">
import StrandCard from "~/components/StrandCard.vue";

const { getSingletonItem, getItemById } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();
interface Strands {
  id?: string;
  Header: string;
  Tagline: string;
  Strands: string[];
}

interface Strand {
  id?: string;
  Header: string;
  Content: string;
  Link: string;
  Image: string;
}

const strandPage = await getSingletonItem<Strands>({
  collection: "Strands",
});

const strands = [];
for (const strandId of strandPage.Strands) {
  const item = await getItemById<Strand[]>({
    collection: "Strand",
    id: strandId,
  });
  strands.push(item);
}
</script>
<template>
  <div class="bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    <div class="mx-auto px-2">
      <div class="mb-10 md:mb-16">
        <span
          class="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white md:mb-6 lg:text-3xl"
          v-html="strandPage.Header"
        />
        <span
          class="mx-auto max-w-screen-md text-center text-gray-900 dark:text-gray-200 md:text-lg"
          v-html="strandPage.Tagline"
        />
      </div>
      <div class="flex flex-col max-w-screen-2xl mx-auto space-y-8">
        <StrandCard
          v-for="(strand, index) in strands"
          :key="strand.id"
          :index="index"
          :header="strand.Header"
          :content="strand.Content"
          :link="strand.Link"
          :img="img(strand.Image)"
        />
      </div>
    </div>
  </div>
</template>
