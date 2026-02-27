<script setup lang="ts">
import { readItems } from "@directus/sdk";

const { $directus } = useNuxtApp();

interface IEvent {
  id?: string | number;
  Name: string;
  Day: string;
  Month: string;
  Year: string;
  Link: string;
  Location: string;
  Content: string;
}

function eventTimestamp(item: IEvent) {
  return new Date(
    Number(item.Year),
    useMonthStringToNumber(item.Month),
  ).getTime();
}

const { data: pageData } = await useAsyncData(
  "page:events-overview",
  async () => {
    const items = (await $directus.request(readItems("Event"))) as IEvent[];
    const now = Date.now();

    const forthcomingEvents = items
      .filter((item) => eventTimestamp(item) > now)
      .sort((a, b) => eventTimestamp(b) - eventTimestamp(a));

    const pastEvents = items
      .filter((item) => eventTimestamp(item) <= now)
      .sort((a, b) => eventTimestamp(b) - eventTimestamp(a));

    return { forthcomingEvents, pastEvents };
  },
);

if (!pageData.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to load events overview",
  });
}

const { forthcomingEvents, pastEvents } = pageData.value;
</script>
<template>
  <div class="bg-[#FCFCFA] py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="font-prata text-center text-2xl font-bold text-primary-900 sm:text-3xl md:mb-6"
      >
        Events
      </h1>
      <div
        class="flex flex-col justify-center divide-y divide-slate-200 *:py-16"
      >
        <div class="mx-auto w-full max-w-3xl">
          <h2
            class="font-prata mb-4 text-center text-lg font-bold text-primary-900 sm:text-2xl md:mb-6"
          >
            Forthcoming events
          </h2>
          <div class="-my-6" v-if="forthcomingEvents.length > 0">
            <EventsTimelineItem
              v-for="event in forthcomingEvents"
              :key="event.id"
              :event="event"
            />
          </div>
          <div v-else>
            <p class="text-center">No upcoming events.</p>
          </div>
        </div>
        <div class="mx-auto w-full max-w-3xl">
          <h2
            class="font-prata mb-4 text-center text-lg font-bold text-primary-900 sm:text-2xl md:mb-6"
          >
            Past events
          </h2>
          <div class="-my-6">
            <EventsTimelineItem
              v-for="event in pastEvents"
              :key="event.id"
              :event="event"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
