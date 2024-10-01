<script setup lang="ts">
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

const props = defineProps<{
  event: IEvent
}>();

const eventLink = `/events/${props.event.id}`;
</script>
<template>
  <div class="relative pl-8 py-6 group flex flex-col space-y-2">
    <div class="flex flex-col space-y-4 items-start mb-1 group-last:before:hidden before:absolute before:left-2 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
      <div class="flex w-full justify-between">
        <time class="translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-6 text-zinc-700">{{ event.Day }} {{ event.Month }} {{ event.Year }}</time>
        <div v-show="event.Location" class="text-zinc-700 flex items-end space-x-2">
          <i class="pi pi-map-marker pt-0.5" />
          <p class="text-xs font-semibold">{{ event.Location }}</p>
        </div>
      </div>
      <a :href="event.Link" target="_blank" class="text-xl font-normal" :class="{ 'text-blue-800': event.Link }">{{ event.Name }}</a>
    </div>
    <NuxtLink
      v-show="event.Content"
      :to="eventLink"
      class="rounded self-start block px-5 py-3 text-center text-xs font-bold uppercase bg-white hover:bg-black border border-black text-black hover:text-white transition-colors duration-200"
    >
      Read More
    </NuxtLink>
  </div>
</template>
