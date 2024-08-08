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
  <section class="mx-auto py-12 max-w-screen-2xl px-4 space-y-12">
    <header class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
        {{ strandPage.Header }}
      </h2>

      <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-800">
        {{ strandPage.Tagline }}
      </p>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-2 md:gap-x-8 gap-y-2 auto-rows-fr justify-center ">
      <StrandCard
        v-for="strand in strands"
        :key="strand.id"
        :header="strand.Header"
        :content="strand.Content"
        :link="strand.Link"
        :img="img(strand.Image, { format: 'webp' })"
      />
    </div>
  </section>
</template>

