<script setup lang="ts">
import type { IStudentAssistant } from "~/pages/team.vue";

const props = defineProps<{
  student: IStudentAssistant
}>();

console.log(props)
</script>
<template>
<li><b>{{ student.Name.trim() }}</b>, {{ student.Affiliation.trim() }}, {{ student.Role }}</li>
</template>
