<script setup lang="ts">
const props = defineProps<{
  header?: string;
  content?: string;
  link?: string;
  img?: string;
  position: number
}>();

console.log(props.position % 2 === 0)

const imageClasses = computed(() => {
  return props.position % 2 === 0
    ? 'order-none md:order-0'
    : 'order-none md:order-1';
});
</script>
<template>
  <div class="flex flex-col md:flex-row items-center justify-center my-8 md:my-32 gap-x-12">
    <div class="w-full md:w-1/2 px-4" :class="imageClasses">
      <img
        :src="img"
        :alt="header"
        class="w-full h-auto rounded-lg object-cover sm:h-64 lg:h-96"
      />
    </div>
    <div class="w-full flex flex-col md:w-1/2 px-4 mt-4 md:mt-0 space-y-2 md:space-y-4">
      <h2 class="text-2xl md:text-3xl font-bold">{{ header }}</h2>
      <p class="text-gray-600 leading-relaxed">{{ content }}</p>
      <NuxtLink :to="link" class="self-start rounded-md border border-black py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-black hover:border-black focus:text-white focus:bg-black focus:border-black active:border-black active:text-white active:bg-black disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        More
      </NuxtLink>
    </div>
  </div>
</template>
