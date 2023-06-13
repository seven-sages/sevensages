<script setup lang="ts">
const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

interface Article {
  id?: string | number;
  Name: string;
  Tagline: string;
  Description: string;
  Image: string;
  Twitter_Account: string;
  Mail_Address: string;
  Type: string;
}

const items = await getItems<Article>({
  collection: "Person",
});
</script>

<template>
  <div class="bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl"
        >
          Our team members
        </h2>
      </div>
      <div
        class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <template v-for="item in items" :key="item.id">
          <Suspense>
            <TeamCard
              v-if="item.Type === 'Team'"
              :key="item.id"
              :name="item.Name"
              :title="item.Tagline"
              :description="item.Description"
              :image="img(item.Image)"
              :alt="item.Name"
              :mail="item.Mail_Address"
              :twitter="item.Twitter_Account"
            />
          </Suspense>
        </template>
      </div>
      <div class="mb-10 mt-10 md:mb-16">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl"
        >
          Advisory board members
        </h2>
      </div>
      <div
        class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <template v-for="item in items">
          <TeamCard
            v-if="item.Type === 'Board'"
            :key="item.id"
            :name="item.Name"
            :title="item.Tagline"
            :description="item.Description"
            :image="img(item.Image)"
            :alt="item.Name"
            :mail="item.Mail_Address"
            :twitter="item.Twitter_Account"
          />
        </template>
      </div>
    </div>
  </div>
</template>
