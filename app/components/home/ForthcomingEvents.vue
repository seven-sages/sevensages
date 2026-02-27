<script setup lang="ts">
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

const { width } = useWindowSize();

const slidesPerView = computed(() => {
  const currentWidth = width.value || Number.MAX_SAFE_INTEGER;

  if (currentWidth <= 1200) {
    return 1;
  }

  if (currentWidth <= 1600) {
    return 2;
  }

  return 3;
});

const carouselStyle = computed(() => ({
  "--slides-per-view": String(slidesPerView.value),
}));

const carouselBreakpoints = {
  "(max-width: 1600px)": { slidesToScroll: 1 },
  "(max-width: 1200px)": { slidesToScroll: 1 },
};
</script>
<template>
  <div class="mx-auto flex w-full flex-col space-y-8 px-4 xl:px-24">
    <div
      class="mb-4 flex flex-col items-center justify-center space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-4 md:px-4 lg:px-0"
    >
      <div class="hidden md:block" />
      <h2 class="font-prata text-3xl font-bold md:pl-24">Forthcoming Events</h2>
      <a
        href="/events/overview"
        class="rounded border border-zinc-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-primary-800 transition-colors duration-400 hover:border-white hover:bg-black hover:text-white"
        >All events</a
      >
    </div>
    <div
      v-if="events.length"
      class="responsive-carousel"
      :style="carouselStyle"
    >
      <UCarousel
        :items="events"
        :slides-to-scroll="3"
        :breakpoints="carouselBreakpoints"
        :arrows="true"
        :dots="true"
      >
        <template #default="slotProps">
          <EventsCard :event="slotProps.item" />
        </template>
      </UCarousel>
    </div>
    <template v-else>
      <p class="text-center">No upcoming events.</p>
      <a id="past-event-text" class="text-center" href="/events/overview"
        >Have a look at our past events.</a
      >
    </template>
  </div>
</template>
<style scoped>
.responsive-carousel :deep([data-slot="item"]) {
  flex: 0 0 calc(100% / var(--slides-per-view)) !important;
  max-width: calc(100% / var(--slides-per-view));
}

#past-event-text {
  color: var(--color-link);
}
</style>
