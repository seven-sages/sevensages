<script setup lang="ts">
import NavbarLink from "~/components/layout/NavbarLink.vue";
import { useWindowScroll } from '@vueuse/core'
import { navLinks } from "./sidebar"

defineProps<{
  index: boolean;
}>();

const { y } = useWindowScroll()

const emit = defineEmits(["toggleDrawer"]);
</script>

<template>
  <header
    class="fixed w-full z-50 top-0 px-8 py-6"
    :class="{ 'bg-white py-4 border-b': y > 0 }">
    <div
      class="flex items-center justify-between">
        <!-- logo - start -->
        <a
          href="/"
          class="text-xl md:text-3xl tracking-widest text-white font-semibold cursor-pointer"
          :class="{ 'text-zinc-800': y > 0 || !index }"
          aria-label="The Seven Sages of Rome"
        >
          The Seven Sages of Rome
        </a>
        <!-- logo - end -->

        <!-- nav - start -->
        <nav class="hidden gap-12 desktop:flex">
          <NavbarLink
            v-for="link in navLinks"
            :index="index"
            :key="link.name"
            :link="link.link"
            :name="link.name"
          />
        </nav>
        <button class="rtL:ml-6 ltr:mr-6 desktop:hidden" @click="emit('toggleDrawer')" tabindex="0" aria-label="menu">
          <div class="w-10 h-1 rotate-0 transition-all mb-2" :class="[ y > 0 || !index ? 'bg-black' : 'bg-white']" />
          <div class="w-10 h-1 rotate-0 transition-all" :class="[ y > 0 || !index ? 'bg-black' : 'bg-white']" />
        </button>
        <!-- nav - end -->
      </div>
  </header>
</template>
