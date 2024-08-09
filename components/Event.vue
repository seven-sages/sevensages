<script setup lang="ts">
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

defineProps<{
  event: IEvent
}>();
</script>
<template>
  <div class="relative pl-8 py-6 group flex flex-col space-y-2">
    <div class="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
      <time class="translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-6 mb-3 text-zinc-700">{{ event.Day }} {{ event.Month }} {{ event.Year }}</time>
      <a :href="event.Link" target="_blank" class="text-xl font-normal" :class="{ 'text-blue-800': event.Link }">{{ event.Name }}</a>
    </div>
    <div v-show="event.Short_Description" class="text-slate-500" v-html="event.Short_Description" />
    <div v-show="event.Location" class="text-slate-500 flex space-x-2">
      <i class="pi pi-map-marker pt-0.5" />
      <p>{{ event.Location }}</p>
    </div>
  </div>
</template>
