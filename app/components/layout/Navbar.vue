<script setup lang="ts">
import { internalNavLinks, projectTierLinks } from "~/constants/navigation";

defineProps<{
  index: boolean;
}>();

const emit = defineEmits(["toggleDrawer"]);

const { y } = useWindowScroll();
const showDesktopTopTier = ref(true);

watch(y, (currentY, previousY = 0) => {
  if (currentY <= 0) {
    showDesktopTopTier.value = true;
    return;
  }

  if (currentY < previousY) {
    showDesktopTopTier.value = true;
    return;
  }

  if (currentY > previousY) {
    showDesktopTopTier.value = false;
  }
});
</script>

<template>
  <header>
    <div class="fixed top-0 z-50 w-full border-b bg-white px-4 py-2 xl:hidden">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center rounded-md p-1 hover:bg-gray-100"
          aria-label="The Seven Sages of Rome"
        >
          <LayoutProjectLogo class="h-10 w-auto md:h-12" />
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

    <div class="hidden xl:block">
      <divp
        class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white px-4 transition-transform duration-200"
        :class="showDesktopTopTier ? 'translate-y-0' : '-translate-y-full'"
      >
        <div class="mx-auto flex h-16 items-center justify-between">
          <NuxtLink
            to="/"
            class="inline-flex items-center rounded-md p-1 hover:bg-gray-100"
            aria-label="The Seven Sages of Rome"
          >
            <LayoutProjectLogo class="h-12 w-auto" />
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
      </divp>

      <div
        class="fixed inset-x-0 z-40 border-b border-gray-200 bg-white px-4 transition-all duration-200"
        :class="showDesktopTopTier ? 'top-16' : 'top-0'"
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
