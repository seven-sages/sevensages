<script setup lang="ts">
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

const props = defineProps<{
  event: IEvent
}>();

const eventLink = `/events/${props.event.id}`;
</script>
<template>
    <div class="flex flex-col w-full">
      <div class="flex flex-col w-full md:flex-row h-full">
        <div class="flex flex-row h-full justify-around p-4 font-medium leading-none text-gray-800 uppercase bg-gray-200 rounded md:flex-col md:items-center md:justify-center md:w-/4">
          <div v-show="event.Day" class="md:text-3xl">{{ event.Day }}</div>
          <div v-show="event.Month" class="md:text-4xl">{{ event.Month }}</div>
          <div v-show="event.Year" class="md:text-xl">{{ event.Year }}</div>
        </div>
        <div class="flex flex-col space-y-2 p-4 font-normal text-gray-800 md:w-3/4">
          <a :href="event.Link" target="_blank" class="text-2xl font-bold leading-none tracking-tight text-gray-800">{{ event.Name }}</a>
          <div class="flex flex-row items-center mt-4 text-gray-700">
            <div class="w-1/2 line-clamp-3">
              {{ event.Location }}
            </div>
          </div>
          <NuxtLink
            v-show="event.Content"
            :to="eventLink"
            class="rounded self-start block px-5 py-3 text-center text-xs font-bold uppercase bg-white hover:bg-black border border-black text-black hover:text-white transition-colors duration-200"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

