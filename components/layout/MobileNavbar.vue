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
                    class="group text-5xl flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
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
