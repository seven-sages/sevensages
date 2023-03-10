<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import Strands from '~/components/Strands.vue'
import Funding from '~/components/Funding.vue'
</script>

<template>
<!--  <Suspense>-->
    <Hero />
    <Strands />
    <Funding />
<!--    <template #fallback>-->
<!--      <div class="opacity-50 italic">-->
<!--        <span class="pulse">Loading...</span>-->
<!--      </div>-->
<!--    </template>-->
<!--  </Suspense>-->
</template>
