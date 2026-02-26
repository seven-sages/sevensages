<script setup lang="ts">
const { getAssetUrl: img } = useDirectusAssetUrl();
interface StrandsPage {
  id?: string;
  Header: string;
  Tagline: string;
}

interface Strand {
  id?: string | number;
  Header: string;
  Content: string;
  Link: string;
  Image: string;
}

defineProps<{
  strandPage: StrandsPage;
  strands: Strand[];
}>();
</script>
<template>
  <section class="space-y-12 px-4 xl:px-24">
    <header class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 sm:text-5xl font-prata">
        {{ strandPage.Header }}
      </h2>

        <p class="mx-auto mt-4 max-w-5xl text-xl text-gray-800">
          {{ strandPage.Tagline }}
        </p>
      </header>
      <div class="grid-cols-1 md:grid-cols-2">
        <HomeStrandCard
          v-for="(strand, index) in strands"
          :key="strand.id"
          :header="strand.Header"
          :content="strand.Content"
          :link="strand.Link"
          :position="index"
          :img="img(strand.Image, { format: 'webp', quality: 50 }) ?? undefined"
        />
      </div>
    </section>
</template>
