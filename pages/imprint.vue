<script setup lang="ts">
const { getSingletonItem } = useDirectusItems();
interface IImprint {
  id?: string;
  Content: string;
  Heading: string;
}

const imprint = await getSingletonItem<IImprint>({
  collection: "Imprint",
});
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6"
      >
        {{ imprint.Heading }}
      </h1>

      <ClientOnly>
        <span
          class="mb-6 text-justify text-gray-800 sm:text-lg md:mb-8"
          v-html="imprint.Content"
        />
      </ClientOnly>

    </div>
  </div>
</template>
