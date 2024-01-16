<script setup lang="ts">
const { getItems } = useDirectusItems();

interface IEvent {
  id?: string | number;
  Name: string;
  Month: string;
  Year: string;
  Link: string;
  date?: Date;
}

const now = new Date();
const forthcomingEvents = ref([]);
const pastEvents = ref([]);

const items = await getItems<IEvent>({
  collection: "Event",
});

for (const item: IEvent of items) {
  item.date = new Date(item.Year as Number, useMonthStringToNumber(item.Month));
  item.date.getTime() > now.getTime()
    ? forthcomingEvents.value.push(item)
    : pastEvents.value.push(item);
}
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 dark:text-white"
      >
        Events
      </h1>

      <h2
        class="mb-4 text-center text-xl font-bold text-gray-800 sm:text-3xl md:mb-6 dark:text-white"
      >
        Forthcoming events
      </h2>

      <ul
        class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 dark:text-gray-200"
      >
        <li
          v-for="event in forthcomingEvents.sort((a, b) => a.time - b.time)"
          :key="event.id"
        >
          <NuxtLink target="_blank" :to="event.Link">
            {{ event.Name }} ({{ event.Month }} {{ event.Year }})
          </NuxtLink>
        </li>
      </ul>

      <h2
        class="mb-4 text-center text-xl font-bold text-gray-800 sm:text-3xl md:mb-6 dark:text-white"
      >
        Past events
      </h2>
      <ul
        class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 dark:text-gray-200"
      >
        <li v-for="event in pastEvents" :key="event.id">
          <NuxtLink
            target="_blank"
            :to="event.Link"
            :class="{ 'text-blue-600 hover:underline': event.Link }"
          >
            {{ event.Name }} ({{ event.Month }} {{ event.Year }})
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
