<script setup lang="ts">
const { getSingletonItem, getItemById } = useDirectusItems();
interface IMaterials {
  id?: string;
  Header: string;
  Material: object[];
}

interface IMaterial {
  Content: string;
  Link: string;
}

const materials = await getSingletonItem<IMaterials>({
  collection: "Materials",
  params: {
    fields: ["Header", "Material.Material_id"],
  },
});
const material = [];
for (const entry of Object.values(materials.Material)) {
  const item = await getItemById<IMaterial[]>({
    collection: "Material",
    id: entry.Material_id,
  });
  material.push(item);
}
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6"
      >
        {{ materials.Header }}
      </h1>

      <div v-if="!material">
        <p class="mb-4 text-center text-gray-800">
          No research publication and material added yet
        </p>
      </div>
      <div v-else>
        <ul
          class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8"
        >
          <li v-for="event in material" :key="event.id">
            <a :href="event.Link" target="_blank">
              {{ event.Content }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(a) {
  @apply text-blue-700
}
</style>
