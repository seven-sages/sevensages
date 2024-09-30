<script setup lang="ts">
const router = useRoute();
const { getItemById } = useDirectusItems();

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

const event = await getItemById<IEvent>({
  collection: "Event",
  id: router.params.id,
});

const hasDate = computed(() => {
  return event.Day || event.Month || event.Year
})
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-3xl px-4 md:px-8">
      <div class="mx-auto flex max-w-screen-3xl justify-between px-4">
        <article
          class="format format-sm sm:format-base lg:format-lg format-blue mx-auto w-full max-w-screen-md"
        >
          <NuxtLink
            to="/events/overview"
            class="flex items-center space-x-2 pb-6 transition duration-100 !text-zinc-700 hover:!text-zinc-900 active:!text-zinc-900"
          >
            <Icon name="carbon:arrow-left" />
            <p>All Events</p>
          </NuxtLink
          >
          <header class="not-format mb-4 lg:mb-6">
            <accordion
              :href="event.Link"
              target="_blank"
              class="mb-4 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl"
              :class="{ 'text-blue-800': event.Link }"
            >
              {{ event.Name }}
            </accordion>
            <address class="mb-6 flex items-center not-italic text-gray-700">
              <div
                class="flex flex-col sm:flex-row w-full justify-between"
              >
                  <div v-show="hasDate" class="flex space-x-2 items-center">
                    <Icon name="carbon:calendar" class="size-6" />
                    <p class="text-lg text-gray-700">
                      {{ event.Day }} {{ event.Month }} {{ event.Year }}
                    </p>
                  </div>
                  <div v-show="event.Location" class="flex space-x-2 items-center">
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
  @apply my-4 rounded-lg
}

:deep(a) {
  @apply text-blue-700
}
</style>
