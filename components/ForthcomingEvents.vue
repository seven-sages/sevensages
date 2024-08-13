<script setup lang="ts">
import EventCard from "~/components/EventCard.vue";
const { getItems } = useDirectusItems();

interface IEvent {
  id?: string | number;
  Name: string;
  Day: string;
  Month: string;
  Year: string;
  Link: string;
  Location: string;
  Short_Description: string;
  date?: Date;
}

const responsiveOptions = ref([
  {
    breakpoint: '1600px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1200px',
    numVisible: 1,
    numScroll: 1
  }
]);

const now = new Date();
const forthcomingEvents: Ref<IEvent[]> = ref([]);
const items = await getItems<IEvent>({
  collection: "Event",
});

for (const item: IEvent of items) {
  item.date = new Date(item.Year as Number, useMonthStringToNumber(item.Month));
  if(item.date.getTime() > now.getTime()) forthcomingEvents.value.push(item)
}

forthcomingEvents.value = forthcomingEvents.value.sort(function(a,b) {
  return new Date(b.date) - new Date(a.date);
})
</script>
<template>
  <div class="flex flex-col px-4 xl:px-24 mx-auto space-y-8 w-full">
    <div class="flex flex-col md:flex-row mb-4 md:px-4 lg:px-0 items-center justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-4">
      <div class="hidden md:block" />
      <h2 class="font-bold text-3xl md:pl-24">Forthcoming Events</h2>
      <a
        href="/events"
        class="rounded whitespace-nowrap border border-zinc-500 px-2.5 py-0.5 text-sm text-zinc-700 hover:bg-black hover:text-white hover:border-white transition-colors duration-400"
      >All events</a>
    </div>
    <Carousel :value="forthcomingEvents" :numVisible="3" :numScroll="3" :responsive-options="responsiveOptions">
      <template #item="slotProps">
        <EventCard :event="slotProps.data" />
      </template>
      <template #empty>
        <p class="text-center">No upcoming events.</p>
        <a id="past-event-text" class="text-center" href="/events">Have a look at our past events.</a>
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
#past-event-text {
  @apply text-blue-700
}
</style>
