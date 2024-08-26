<script setup lang="ts">
const visible = ref(false);

import { navLinks } from "./sidebar"

function toggle(value: boolean){
  visible.value = value
}

defineExpose({
  toggle
})
</script>
<template>
  <Drawer v-model:visible="visible" class="!w-full">
    <template #container="{ closeCallback }">
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                    <NuxtLink to="/" class="font-semibold text-3xl text-primary">Seven Sages of Rome</NuxtLink>
                </span>
          <span>
            <button class="rtL:ml-6 ltr:mr-6 md:p-4" @click="closeCallback" tabindex="0" aria-label="menu">
              <div class="w-10 h-1 rotate-45 transition-all bg-black mb-0 absolute"/>
              <div class="w-10 h-1 -rotate-45 transition-all bg-black" />
            </button>
          </span>
        </div>
        <div class="overflow-y-auto">
          <ul class="list-none p-4 m-0">
            <li>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li v-for="link in navLinks" :key="link.name">
                  <NuxtLink
                    :to="link.link"
                    class="group text-5xl md:text-6xl lg:text-8 xl flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
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
</template>
