<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

defineOptions({
  inheritAttrs: false,
});

type ResponsiveOption = {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
};

const props = withDefaults(
  defineProps<{
    value?: any[];
    numVisible?: number;
    numScroll?: number;
    responsiveOptions?: ResponsiveOption[];
  }>(),
  {
    value: () => [],
    numVisible: 1,
    numScroll: 1,
    responsiveOptions: () => [],
  },
);

defineSlots<{
  item(props: { data: any; index: number }): any;
  empty(props: {}): any;
}>();

const attrs = useAttrs();
const { width } = useWindowSize();

const normalizedResponsiveOptions = computed(() => {
  return [...props.responsiveOptions]
    .map((option) => ({
      breakpoint: Number.parseInt(option.breakpoint, 10),
      numVisible: option.numVisible,
      numScroll: option.numScroll,
    }))
    .filter((option) => Number.isFinite(option.breakpoint))
    .sort((a, b) => a.breakpoint - b.breakpoint);
});

const activeSettings = computed(() => {
  const currentWidth = width.value || Number.MAX_SAFE_INTEGER;

  for (const option of normalizedResponsiveOptions.value) {
    if (currentWidth <= option.breakpoint) {
      return {
        numVisible: option.numVisible || props.numVisible,
        numScroll: option.numScroll || props.numScroll,
      };
    }
  }

  return {
    numVisible: props.numVisible,
    numScroll: props.numScroll,
  };
});

const rootStyle = computed(() => ({
  "--slides-per-view": String(activeSettings.value.numVisible || 1),
}));

const forwardedAttrs = computed(() => {
  const entries = Object.entries(attrs).filter(([key]) => key !== "class");
  return Object.fromEntries(entries);
});

const rootClass = computed(() => attrs.class as any);
const hasItems = computed(() => (props.value?.length ?? 0) > 0);
</script>

<template>
  <div class="carousel-compat" :class="rootClass" :style="rootStyle">
    <slot v-if="!hasItems" name="empty" />

    <UCarousel
      v-else
      :items="value"
      :slides-to-scroll="activeSettings.numScroll"
      :arrows="true"
      :dots="true"
      v-bind="forwardedAttrs"
    >
      <template #default="{ item, index }">
        <slot name="item" :data="item" :index="index" />
      </template>
    </UCarousel>
  </div>
</template>

<style scoped>
.carousel-compat :deep([data-slot="item"]) {
  flex: 0 0 calc(100% / var(--slides-per-view)) !important;
  max-width: calc(100% / var(--slides-per-view));
}
</style>
