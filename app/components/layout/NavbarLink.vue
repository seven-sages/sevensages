<script setup lang="ts">
import CenterUnderline from "~/components/CenterUnderline.vue";

defineProps<{
  name?: string;
  link?: string;
  index: boolean
}>();

const { y } = useWindowScroll()
</script>

<template>
  <NuxtLink
    :to="link"
    class="text-base text-black transition duration-100"
  >
    <CenterUnderline>
      {{ name }}
    </CenterUnderline>
  </NuxtLink>
</template>
<style scoped>
</style>
