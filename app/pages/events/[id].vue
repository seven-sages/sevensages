<script setup lang="ts">
import { readItem } from "@directus/sdk";

const router = useRoute();
const { $directus } = useNuxtApp();
const eventId = Array.isArray(router.params.id)
  ? router.params.id[0]
  : router.params.id;

if (!eventId) {
  throw createError({ statusCode: 404, statusMessage: "Event not found" });
}

interface IEvent {
  id?: string | number;
  Name: string;
  Day: string;
  Month: string;
  Year: string;
  Link: string;
  Location: string;
  Content?: string;
  date?: Date;
}

const { data: pageData } = await useAsyncData(
  `page:event:${eventId}`,
  async () => {
    const event = (await $directus.request(
      readItem("Event", eventId),
    )) as IEvent;
    return { event };
  },
);

if (!pageData.value) {
  throw createError({ statusCode: 500, statusMessage: "Failed to load event" });
}

const { event } = pageData.value;

const hasDate = computed(() => {
  return event.Day || event.Month || event.Year;
});
</script>

<template>
  <div class="bg-[#FCFCFA] py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-3xl mx-auto px-4 md:px-8">
      <div class="max-w-screen-3xl mx-auto flex justify-between px-4">
        <article
          class="format format-sm sm:format-base lg:format-lg format-blue mx-auto w-full max-w-(--breakpoint-md)"
        >
          <NuxtLink
            to="/events/overview"
            class="group flex items-center space-x-2 pb-6 text-zinc-700! transition duration-100 hover:text-zinc-900! active:text-zinc-900!"
          >
            <Icon name="fluent:arrow-left-24-filled" />
            <p class="group-hover:font-bold">All Events</p>
          </NuxtLink>
          <header class="not-format mb-4 lg:mb-6">
            <a
              v-if="event.Link"
              :href="event.Link"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 text-xl leading-tight font-bold text-gray-900 lg:mb-6 lg:text-2xl"
              :class="{ 'text-blue-800': event.Link }"
            >
              {{ event.Name }}
            </a>
            <h1
              v-else
              class="mb-4 text-xl leading-tight font-bold text-gray-900 lg:mb-6 lg:text-2xl"
            >
              {{ event.Name }}
            </h1>
            <address class="mb-6 flex items-center text-gray-700 not-italic">
              <div class="flex w-full flex-col justify-between sm:flex-row">
                <div v-show="hasDate" class="flex items-center space-x-2">
                  <Icon name="carbon:calendar" class="size-6" />
                  <p class="text-lg text-gray-700">
                    {{ event.Day }} {{ event.Month }} {{ event.Year }}
                  </p>
                </div>
                <div
                  v-show="event.Location"
                  class="flex items-center space-x-2"
                >
                  <Icon name="carbon:location" class="size-6" />
                  <p class="text-lg text-gray-700">
                    {{ event.Location }}
                  </p>
                </div>
              </div>
            </address>
          </header>
          <span
            class="mb-6 list-inside text-justify text-gray-800 sm:text-lg md:mb-8"
            v-html="event.Content"
          />
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
  color: #1d4ed8;
}
</style>
