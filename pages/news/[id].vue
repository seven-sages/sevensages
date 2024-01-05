<script setup lang="ts">
import { useDateFormat } from "#imports";

const router = useRoute();
const { getItemById } = useDirectusItems();
const { getUserById } = useDirectusUsers();

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

const news = await getItemById<INews>({
  collection: "News",
  id: router.params.id,
});

const authorName = await getUserById({
  id: news.user_created,
});

const formattedDateCreated = useDateFormat(news.date_created, "DD.MM.YYYY");
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <div class="mx-auto flex max-w-screen-xl justify-between px-4">
        <article
          class="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl"
        >
          <header class="not-format mb-4 lg:mb-6">
            <address class="mb-6 flex items-center not-italic">
              <div
                class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white"
              >
                <div>
                  <p class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ authorName.first_name }} {{ authorName.last_name }}
                  </p>
                  <p class="text-base text-gray-500 dark:text-gray-400">
                    <time pubdate>{{ formattedDateCreated }}</time>
                  </p>
                </div>
              </div>
            </address>
            <h1
              class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
            >
              {{ news.Title }}
            </h1>
          </header>
          <span
            class="mb-6 list-inside text-justify text-gray-500 sm:text-lg md:mb-8 dark:text-gray-200"
            v-html="news.Content"
          />
        </article>
      </div>
    </div>
  </div>
</template>
