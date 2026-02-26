<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    visible?: boolean;
  }>(),
  {
    visible: false,
  },
);

const emit = defineEmits<{
  "update:visible": [visible: boolean];
}>();

const attrs = useAttrs();

const open = computed({
  get: () => props.visible,
  set: (value: boolean) => emit("update:visible", value),
});

const forwardedAttrs = computed(() => {
  const entries = Object.entries(attrs).filter(([key]) => key !== "class");
  return Object.fromEntries(entries);
});

const contentClass = computed(() => [
  "w-full max-w-none rounded-none h-full p-0",
  attrs.class,
]);

function closeCallback() {
  open.value = false;
}
</script>

<template>
  <UDrawer
    v-model:open="open"
    direction="left"
    :handle="false"
    :class="contentClass"
    v-bind="forwardedAttrs"
  >
    <template #content>
      <slot name="container" :closeCallback="closeCallback" />
    </template>
  </UDrawer>
</template>
