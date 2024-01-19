<script setup lang="ts">
import NavbarLink from "~/components/layout/NavbarLink.vue";

const visible = ref(false);

const navLinks = [
  {
    link: "/team",
    name: "Team",
  },
  {
    link: "/edition",
    name: "Edition",
  },
  {
    link: "/database",
    name: "Database",
  },
  {
    link: "/gender",
    name: "Gender",
  },
  {
    link: "/genre",
    name: "Genre",
  },
  {
    link: "/events",
    name: "Events",
  },
  {
    link: "/materials",
    name: "Materials",
  },
  {
    link: "/news/latest",
    name: "News",
  },
];
</script>

<template>
  <Sidebar
    v-model:visible="visible"
    header=""
    position="right"
    :pt="{
      closeButton: {
        class: 'dark:text-white mx-auto',
      },
    }"
    class="overflow-y-auto border-l-2 border-gray-100 bg-white p-4 brightness-100 transition-transform xl:hidden dark:border-gray-900 dark:bg-gray-800"
  >
    <div class="grid h-full grid-cols-1 content-between pt-6 blur-none">
      <ul class="space-y-2 font-medium">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            :to="link.link"
            class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            @click="visible = false"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="mx-auto">
        <DarkToggle />
      </div>
    </div>
  </Sidebar>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header class="mb-4 flex items-center justify-between py-4 md:py-8">
        <!-- logo - start -->
        <a
          href="/"
          class="inline-flex items-center gap-2.5 text-2xl font-bold text-gray-800 md:text-3xl dark:text-white"
          aria-label="Seven Sages of Rome"
        >
          Seven Sages of Rome
        </a>
        <!-- logo - end -->

        <!-- nav - start -->
        <nav class="hidden gap-12 xl:flex">
          <NavbarLink
            v-for="link in navLinks"
            :key="link.name"
            :link="link.link"
            :name="link.name"
          />
          <DarkToggle />
        </nav>
        <!-- nav - end -->
        <button
          type="button"
          aria-label="Open Navigation Drawer"
          class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base xl:hidden"
          @click="visible = true"
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
      </header>
    </div>
  </div>
</template>
