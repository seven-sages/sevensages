<script setup lang="ts">
import { readItem, readUser } from "@directus/sdk";

const router = useRoute();
const { $directus } = useNuxtApp();
const newsId = Array.isArray(router.params.id)
  ? router.params.id[0]
  : router.params.id;

if (!newsId) {
  throw createError({ statusCode: 404, statusMessage: "News not found" });
}

interface INews {
  id?: string;
  Title: string;
  Abstract: string;
  Content: string;
  date_created: string;
  date_updated: string;
  user_created: string;
  user_updated: string;
}

const { data: pageData } = await useAsyncData(
  `page:news:${newsId}`,
  async () => {
    const news = (await $directus.request(readItem("News", newsId))) as INews;
    const authorName = await $directus.request(readUser(news.user_created));

    return { news, authorName };
  },
);

if (!pageData.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to load news article",
  });
}

const { news, authorName } = pageData.value;

const formattedDateCreated = useDateFormat(news.date_created, "DD.MM.YYYY");
</script>

<template>
  <div class="bg-[#FCFCFA] py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <div class="mx-auto flex max-w-(--breakpoint-xl) justify-between px-4">
        <article
          class="format format-sm sm:format-base lg:format-lg format-blue mx-auto w-full max-w-2xl"
        >
          <NuxtLink
            to="/news/latest"
            class="group flex items-center space-x-2 pb-6 text-primary-800! transition duration-100 hover:text-primary-900! active:text-primary-900!"
          >
            <Icon name="carbon:arrow-left" />
            <p class="group-hover:font-bold">All News</p>
          </NuxtLink>
          <header class="not-format mb-4 lg:mb-6">
            <address class="mb-6 flex items-center not-italic">
              <div class="mr-3 inline-flex items-center text-sm text-primary-900">
                <div>
                  <p class="text-xl font-bold text-primary-900">
                    {{ authorName.first_name }} {{ authorName.last_name }}
                  </p>
                  <p class="text-base text-primary-800">
                    <time>{{ formattedDateCreated }}</time>
                  </p>
                </div>
              </div>
            </address>
            <h1
              class="font-prata mb-4 text-3xl leading-tight font-extrabold text-primary-900 lg:mb-6 lg:text-4xl"
            >
              {{ news.Title }}
            </h1>
          </header>
          <div
            class="rich-text prose mb-6 text-justify text-primary-900 sm:text-lg md:mb-8"
            v-html="news.Content"
          ></div>
        </article>
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(img) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

:deep(a) {
  color: var(--color-link);
}
</style>
