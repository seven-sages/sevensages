<script setup lang="ts">
import { readItems, readUser } from "@directus/sdk";

const { $directus } = useNuxtApp();
const { getAssetUrl: img } = useDirectusAssetUrl();

interface INews {
  id: string | number;
  Title: string;
  Abstract: string;
  Abstract_Image: string;
  Content: string;
  date_created: string;
  date_updated: string;
  user_created: string;
  user_updated: string;
}

interface IUserSummary {
  first_name?: string | null;
  last_name?: string | null;
}

interface INewsWithAuthor extends INews {
  author: IUserSummary | null;
}

const { data: pageData } = await useAsyncData("page:news-latest", async () => {
  const allNews = (await $directus.request(
    readItems("News", {
      filter: { status: "published" },
    }),
  )) as INews[];

  const sortedNews = [...allNews].sort((a, b) => {
    return (
      new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
    );
  });

  const authorIds = [
    ...new Set(sortedNews.map((news) => news.user_created).filter(Boolean)),
  ];

  const authorEntries = await Promise.all(
    authorIds.map(async (authorId) => {
      try {
        const author = (await $directus.request(
          readUser(authorId),
        )) as IUserSummary;
        return [authorId, author] as const;
      } catch {
        return [authorId, null] as const;
      }
    }),
  );

  const authorsById = Object.fromEntries(authorEntries) as Record<
    string,
    IUserSummary | null
  >;

  const newsItems: INewsWithAuthor[] = sortedNews.map((news) => ({
    ...news,
    author: authorsById[news.user_created] ?? null,
  }));

  return { newsItems };
});

const newsItems = computed(() => pageData.value?.newsItems ?? []);

function getImage(image: string | null | undefined) {
  if (image) {
    return img(image, { format: "webp", quality: 40 });
  }
  return null;
}
</script>
<template>
  <div class="bg-[#FCFCFA] py-6 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-xl) px-4 md:px-8">
      <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Latest News
      </h1>

      <div v-if="!newsItems.length">
        <section class="body-font overflow-hidden text-gray-600">
          <p class="mb-4 text-center text-gray-800">No news yet</p>
        </section>
      </div>
      <div v-else>
        <section class="body-font overflow-hidden text-gray-600">
          <div class="container mx-auto px-6 py-12">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <NewsPreview
                v-for="news in newsItems"
                :key="news.id"
                :img="getImage(news.Abstract_Image)"
                :title="news.Title"
                :abstract="news.Abstract"
                :date="news.date_created"
                :author="news.author"
                :id="news.id"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
