<script setup lang="ts">
import { useScroll } from "@vueuse/core";
import { internalNavLinks, projectTierLinks } from "~/constants/navigation";

defineProps<{
  index: boolean;
}>();

const emit = defineEmits(["toggleDrawer"]);
const scrollTarget = import.meta.client ? window : undefined;
const { y } = useScroll(scrollTarget);
const showDesktopTopTier = ref(true);
const ignoreNextScrollChange = ref(false);

watch(y, (currentY, previousY = 0) => {
  if (currentY <= 0) {
    ignoreNextScrollChange.value = false;
    showDesktopTopTier.value = true;
    return;
  }

  if (ignoreNextScrollChange.value) {
    ignoreNextScrollChange.value = false;
    return;
  }

  if (currentY === previousY) {
    return;
  }

  const nextShowDesktopTopTier = currentY < previousY;

  if (nextShowDesktopTopTier !== showDesktopTopTier.value) {
    showDesktopTopTier.value = nextShowDesktopTopTier;
    ignoreNextScrollChange.value = true;
  }
});
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="w-full border-b bg-white px-8 py-1 xl:hidden">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center rounded-md p-1 hover:bg-gray-100"
          aria-label="The Seven Sages of Rome"
        >
          <LayoutProjectLogo class="h-10 w-auto md:h-10" />
        </NuxtLink>

        <button
          type="button"
          aria-label="Open Navigation Drawer"
          class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          @click="emit('toggleDrawer')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="hidden bg-white xl:block">
      <div
        v-show="showDesktopTopTier"
        class="border-b border-gray-200 bg-white px-8"
      >
        <div class="mx-auto flex h-14 items-center justify-between">
          <NuxtLink
            to="/"
            class="inline-flex items-center rounded-md p-1 hover:bg-gray-100"
            aria-label="The Seven Sages of Rome"
          >
            <LayoutProjectLogo class="h-10 w-auto" />
          </NuxtLink>

          <nav class="flex items-center gap-8">
            <template v-for="link in projectTierLinks" :key="link.name">
              <a
                v-if="link.external"
                :href="link.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 py-1 font-sans text-base text-black transition-colors hover:text-gray-700"
              >
                <span>{{ link.name }}</span>
                <Icon name="ph:arrow-up-right" class="size-4 text-gray-500" aria-hidden="true" />
              </a>
              <NuxtLink
                v-else
                :to="link.link"
                class="inline-flex items-center py-1 font-sans text-base text-black"
                :class="link.active ? 'font-semibold' : 'hover:text-gray-700'"
              >
                {{ link.name }}
              </NuxtLink>
            </template>
          </nav>
        </div>
      </div>

      <div
        class="border-b border-gray-200 bg-white px-8"
      >
        <div class="mx-auto flex h-14 items-center">
          <nav class="flex items-center gap-10">
            <LayoutNavbarLink
              v-for="link in internalNavLinks"
              :index="index"
              :key="link.name"
              :link="link.link"
              :name="link.name"
            />
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
