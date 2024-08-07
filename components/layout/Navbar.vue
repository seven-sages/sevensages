<script setup lang="ts">
import NavbarLink from "~/components/layout/NavbarLink.vue";
import { useWindowScroll } from '@vueuse/core'

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

const { x, y } = useWindowScroll()
</script>

<template>
  <Drawer v-model:visible="visible" class="!w-full md:!w-80 lg:!w-[30rem]">
    <template #container="{ closeCallback }">
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                    <span class="font-semibold text-2xl text-primary">Seven Sages of Rome</span>
                </span>
          <span>
              <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined></Button>
          </span>
        </div>
        <div class="overflow-y-auto">
          <ul class="list-none p-4 m-0">
            <li>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li v-for="link in navLinks" :key="link.name">
                  <NuxtLink
                    :to="link.link"
                    class="group text-5xl flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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
  </Drawer>
  <header
    ref="header"
    class="fixed w-full z-50 top-0 px-8 py-6"
    :class="{ 'bg-white py-4': y > 0 }">
    <div
      class="flex items-center justify-between">
        <!-- logo - start -->
        <a
          href="/"
          class="inline-flex items-center gap-2.5 text-2xl font-bold text-gray-50 dark:text-white md:text-3xl cursor-pointer"
          :class="{ 'text-zinc-800': y > 0 }"
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
      </div>
  </header>
</template>
