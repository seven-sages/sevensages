<script setup lang="ts">
const { getItems } = useDirectusItems()

interface Event {
  id?: string | number;
  Name: string;
  Month: string;
  Year: string;
  Link: string,
  date?: Date
}

const now = new Date()
const forthcomingEvents = ref([])
const pastEvents = ref([])

const items = await getItems<Event>({
  collection: 'Event'
})

for (const item: Event of items) {
  item.date = new Date(item.Year as Number, useMonthStringToNumber(item.Month))
  item.date.getTime() > now.getTime() ? forthcomingEvents.value.push(item) : pastEvents.value.push(item)
}
</script>
<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6">
        Events
      </h1>

      <h2 class="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6">
        Forthcoming events
      </h2>

      <ul class="mb-6 list-inside list-disc text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
        <li v-for="event in forthcomingEvents.sort((a, b) => a.time - b.time)" :key="event.id">
          {{ event.Name }} ({{ event.Month }} {{ event.Year }})
        </li>
      </ul>

      <h2 class="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6">
        Past events
      </h2>
      <ul class="mb-6 list-inside list-disc text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
        <li v-for="event in pastEvents" :key="event.id">
          {{ event.Name }} ({{ event.Month }} {{ event.Year }})
        </li>
      </ul>
    </div>
  </div>
</template>
