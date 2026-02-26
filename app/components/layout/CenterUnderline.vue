<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

interface Props {
  /**
   * HTML Tag to render the component as
   * @default 'span'
   */
  as?: string;

  /**
   * Optional class name for styling
   */
  className?: string;

  /**
   * Animation duration in seconds
   * @default 0.25
   */
  duration?: number;

  /**
   * Animation easing function
   * @default 'ease-in-out'
   */
  easing?: string;

  /**
   * Height of the underline as a ratio of font size
   * @default 0.1
   */
  underlineHeightRatio?: number;

  /**
   * Padding of the underline as a ratio of font size
   * @default 0.01
   */
  underlinePaddingRatio?: number;
}

const props = withDefaults(defineProps<Props>(), {
  as: "span",
  className: "",
  duration: 0.25,
  easing: "ease-in-out",
  underlineHeightRatio: 0.1,
  underlinePaddingRatio: 0.01,
});

const textRef = ref<HTMLElement | null>(null);
const underlineHeight = ref("0px");
const underlinePadding = ref("0px");

const computedClasses = computed(() => {
  return `relative inline-block cursor-pointer ${props.className}`;
});

const transitionStyle = computed(() => {
  return `width ${props.duration}s ${props.easing}`;
});

const updateUnderlineStyles = () => {
  if (textRef.value) {
    const fontSize = parseFloat(getComputedStyle(textRef.value).fontSize);
    underlineHeight.value = `${fontSize * props.underlineHeightRatio}px`;
    underlinePadding.value = `${fontSize * props.underlinePaddingRatio}px`;
  }
};

onMounted(() => {
  updateUnderlineStyles();
  window.addEventListener("resize", updateUnderlineStyles);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateUnderlineStyles);
});

watch(
  () => [props.underlineHeightRatio, props.underlinePaddingRatio],
  () => {
    updateUnderlineStyles();
  },
);
</script>

<template>
  <component :is="as" ref="textRef" :class="computedClasses" class="group">
    <span><slot /></span>
    <div
      class="absolute left-1/2 w-0 origin-center -translate-x-1/2 bg-current group-hover:w-full"
      :style="{
        height: underlineHeight,
        bottom: `calc(-1 * ${underlinePadding})`,
        transition: transitionStyle,
      }"
      aria-hidden="true"
    />
  </component>
</template>
