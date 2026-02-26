<script setup lang="ts">
import EventCard from "~/components/EventCard.vue";

interface IEvent {
  id?: string | number;
  Name: string;
  Day: string;
  Month: string;
  Year: string;
  Link: string;
  Location: string;
  Short_Description?: string;
  Content?: string;
}

defineProps<{
  events: IEvent[];
}>();

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

</script>
<template>
  <div class="flex flex-col px-4 xl:px-24 mx-auto space-y-8 w-full">
    <div class="flex flex-col md:flex-row mb-4 md:px-4 lg:px-0 items-center justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-4">
      <div class="hidden md:block" />
      <h2 class="font-bold text-3xl md:pl-24">Forthcoming Events</h2>
      <a
        href="/events/overview"
        class="rounded whitespace-nowrap border border-zinc-500 px-2.5 py-0.5 text-sm text-zinc-700 hover:bg-black hover:text-white hover:border-white transition-colors duration-400"
      >All events</a>
    </div>
    <Carousel :value="events" :numVisible="3" :numScroll="3" :responsive-options="responsiveOptions">
      <template #item="slotProps">
        <EventCard :event="slotProps.data" />
      </template>
      <template #empty>
        <p class="text-center">No upcoming events.</p>
        <a id="past-event-text" class="text-center" href="/events/overview">Have a look at our past events.</a>
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
#past-event-text {
  color: #1d4ed8;
}
</style>
