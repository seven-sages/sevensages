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
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
        <span
          class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl"
          v-html="strandPage.Header"
        />
        <span
          class="mx-auto max-w-screen-md text-center text-gray-500 dark:text-gray-200 md:text-lg"
          v-html="strandPage.Tagline"
        />
      </div>
      <div class="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <StrandCard
          v-for="strand in strands"
          :key="strand.id"
          :header="strand.Header"
          :content="strand.Content"
          :link="strand.Link"
          :img="img(strand.Image)"
        />
        <!--          <span
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          v-html="strand.Header"
        />
        <br />
        <span
          class="text-justify font-normal text-gray-700 dark:text-white"
          v-html="strand.Content"
        />-->
      </div>
    </div>
  </div>
</template>
