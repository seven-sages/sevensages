<script setup lang="ts">
const props = defineProps<{
  header?: string;
  content?: string;
  link?: string;
  img?: string;
  position: number;
}>();

const imageColumnClasses = computed(() => {
  return props.position % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2";
});

const cardColumnClasses = computed(() => {
  return props.position % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1";
});

const cardIsLeft = computed(() => {
  return props.position % 2 !== 0;
});

const cardTone = computed(() => {
  const tones = [
    "bg-strand-1",
    "bg-strand-2",
    "bg-strand-3",
    "bg-strand-4",
  ];

  return tones[props.position % tones.length];
});

const headerAlignmentClasses = computed(() => {
  return cardIsLeft.value
    ? "md:self-end md:text-right"
    : "md:self-start md:text-left";
});

const moreAlignmentClasses = computed(() => {
  return cardIsLeft.value ? "md:self-start" : "md:self-end";
});
</script>
<template>
  <article class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div :class="imageColumnClasses">
      <div
        class="halftone h-88 overflow-hidden rounded-lg md:h-full md:min-h-136"
      >
        <img
          :src="img"
          :alt="header"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div :class="cardColumnClasses">
      <div
        class="relative flex h-full min-h-88 flex-col rounded-lg p-6 md:min-h-136 md:p-10"
        :class="cardTone"
      >
        <h2
          class="z-10 text-3xl leading-tight text-primary-900 md:text-5xl"
          :class="headerAlignmentClasses"
        >
          {{ header }}
        </h2>
        <p
          class="pointer-events-none absolute top-1/2 left-1/2 w-[calc(100%-3rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 text-center text-base leading-relaxed text-primary-800 md:text-2xl"
        >
          {{ content }}
        </p>
        <NuxtLink
          :to="link"
          class="z-10 mt-auto self-end rounded-md border border-primary-900 px-5 py-2 text-sm text-primary-900 transition-colors hover:bg-primary-900 hover:text-neutral-50"
          :class="moreAlignmentClasses"
          type="button"
        >
          More
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.halftone {
  position: relative;
  isolation: isolate;
}

.halftone img {
  filter: brightness(88%) contrast(130%) saturate(105%);
}

.halftone::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(28, 28, 28, 0.05) 0 1px,
      transparent 1px 2px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(245, 245, 245, 0.04) 0 1px,
      transparent 1px 2px
    );
  mix-blend-mode: soft-light;
  opacity: 0.5;
}

.halftone::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(
      circle at 1px 1px,
      rgba(0, 255, 255, 0.34) 0 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 2px 1px,
      rgba(255, 0, 255, 0.34) 0 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 1px 2px,
      rgba(255, 220, 0, 0.3) 0 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 2px 2px,
      rgba(24, 27, 32, 0.22) 0 1px,
      transparent 1px
    );
  background-size: 3px 3px;
  mix-blend-mode: multiply;
  opacity: 0.48;
  filter: blur(1px);
}
</style>
