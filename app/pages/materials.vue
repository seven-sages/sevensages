<script setup lang="ts">
import { readItems, readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();
interface IMaterials {
  id?: string;
  Header: string;
  Material: Array<{ Material_id: string | number }>;
}

interface IMaterial {
  id?: string | number;
  Content: string;
  Link: string;
}

const { data: pageData } = await useAsyncData("page:materials", async () => {
  const materials = (await $directus.request(
    readSingleton("Materials", {
      fields: ["Header", "Material.Material_id"],
    }),
  )) as IMaterials;

  const materialIds = materials.Material.map((entry) => entry.Material_id);
  let material: IMaterial[] = [];

  if (materialIds.length) {
    const fetchedMaterials = (await $directus.request(
      readItems("Material", {
        filter: {
          id: {
            _in: materialIds,
          },
        },
      }),
    )) as IMaterial[];

    const materialsById = new Map(
      fetchedMaterials.map((item) => [String(item.id), item]),
    );

    material = materialIds
      .map((id) => materialsById.get(String(id)))
      .filter((item): item is IMaterial => Boolean(item));
  }

  return { materials, material };
});

if (!pageData.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to load materials page",
  });
}

const { materials, material } = pageData.value;
</script>
<template>
  <div class="bg-[#FCFCFA] py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6"
      >
        {{ materials.Header }}
      </h1>

      <div v-if="!material.length">
        <p class="mb-4 text-center text-gray-800">
          No research publication and material added yet
        </p>
      </div>
      <div v-else>
        <ul class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
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
  color: #1d4ed8;
}
</style>
