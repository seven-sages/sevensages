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
  date?: Date;
}

const now = new Date();
const forthcomingEvents: Ref<IEvent[]> = ref([]);
const pastEvents: Ref<IEvent[]> = ref([]);

const items = await $directus.request(readItems("Event")) as IEvent[];

for (const item of items) {
  item.date = new Date(Number(item.Year), useMonthStringToNumber(item.Month));
  item.date.getTime() > now.getTime()
    ? forthcomingEvents.value.push(item)
    : pastEvents.value.push(item);
}

forthcomingEvents.value = forthcomingEvents.value.sort(function (a, b) {
  return (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0);
});

pastEvents.value = pastEvents.value.sort(function (a, b) {
  return (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0);
});
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6"
      >
        Events
      </h1>
      <div
        class="flex flex-col justify-center divide-y divide-slate-200 *:py-16"
      >
        <div class="mx-auto w-full max-w-3xl">
          <h2
            class="mb-4 text-center text-lg font-bold text-gray-800 sm:text-2xl md:mb-6"
          >
            Forthcoming events
          </h2>
          <div class="-my-6" v-if="forthcomingEvents.length > 0">
            <Event
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
            class="mb-4 text-center text-lg font-bold text-gray-800 sm:text-2xl md:mb-6"
          >
            Past events
          </h2>
          <div class="-my-6">
            <Event v-for="event in pastEvents" :key="event.id" :event="event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
