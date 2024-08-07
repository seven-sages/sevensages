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
  <div class="bg-white flex justify-center py-6 dark:bg-gray-800 max-w-screen-2xl px-4">
    <div>
      <div>
      <span
        class="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white md:mb-6 lg:text-3xl"
        v-html="strandPage.Header"
      />
        <span
          class="mx-auto max-w-screen-md text-center text-gray-900 dark:text-gray-200 md:text-lg"
          v-html="strandPage.Tagline"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-2 md:gap-x-8 gap-y-2 auto-rows-fr justify-center ">
        <StrandCard
          v-for="strand in strands"
          :key="strand.id"
          :header="strand.Header"
          :content="strand.Content"
          :link="strand.Link"
          :img="img(strand.Image)"
        />
      </div>
    </div>
  </div>
</template>
