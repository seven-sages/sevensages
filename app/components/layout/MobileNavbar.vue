<script setup lang="ts">
const visible = ref(false);

import { navLinks } from "~/constants/navigation";

function toggle(value: boolean) {
  visible.value = value;
}

function closeDrawer() {
  visible.value = false;
}

defineExpose({
  toggle,
});
</script>
<template>
  <UDrawer
    v-model:open="visible"
    direction="left"
    :handle="false"
    :content="{ class: 'w-full max-w-none rounded-none h-full p-0' }"
  >
    <template #content>
      <div class="flex h-full flex-col">
        <div class="flex shrink-0 items-center justify-between px-6 pt-4">
          <span class="inline-flex min-w-0 items-center gap-2">
            <NuxtLink
              to="/"
              class="items-center"
              aria-label="The Seven Sages of Rome"
            >
              <LayoutProjectLogo class="h-12 w-auto md:h-14" />
            </NuxtLink>
          </span>
          <span>
            <button
              class="rtL:ml-6 md:p-4 ltr:mr-6"
              @click="closeDrawer"
              tabindex="0"
              aria-label="menu"
            >
              <div
                class="absolute mb-0 h-1 w-10 rotate-45 bg-black transition-all"
              />
              <div class="h-1 w-10 -rotate-45 bg-black transition-all" />
            </button>
          </span>
        </div>
        <div class="overflow-y-auto">
          <ul class="m-0 list-none p-4">
            <li>
              <ul class="m-0 list-none overflow-hidden p-0">
                <li v-for="link in navLinks" :key="link.name">
                  <NuxtLink
                    :to="link.link"
                    class="group lg:text-8 xl flex items-center rounded-lg p-2 text-5xl text-gray-900 hover:bg-gray-100 md:text-6xl"
                    @click="visible = false"
                  >
                    {{ link.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </UDrawer>
</template>
