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
  <div class="bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6"
      >
        {{ materials.Header }}
      </h1>

      <ul
        class="mb-6 list-inside list-disc text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8"
      >
        <li v-for="event in material" :key="event.id">
          <a :href="event.Link" target="_blank">
            {{ event.Content }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
