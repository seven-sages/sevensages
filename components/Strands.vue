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
  <section class="space-y-12 px-4 xl:px-24">
    <header class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
        {{ strandPage.Header }}
      </h2>

        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-800">
          {{ strandPage.Tagline }}
        </p>
      </header>
      <div class="grid-cols-1 md:grid-cols-2">
        <StrandCard
          v-for="(strand, index) in strands"
          :key="strand.id"
          :header="strand.Header"
          :content="strand.Content"
          :link="strand.Link"
          :position="index"
          :img="img(strand.Image, { format: 'webp', quality: 50 })"
        />
      </div>
    </section>
</template>

