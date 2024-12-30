<script setup>
const props = defineProps({
  name: { type: String, default: "" },
});

const svgModules = import.meta.glob("./svg/**/*.svg", {
  query: "?component",
});

const SvgComponent = computed(() => {
  if (props.name && svgModules[`./svg/${props.name}.svg`]) {
    return defineAsyncComponent(svgModules[`./svg/${props.name}.svg`]);
  }
});
</script>

<template>
  <component :is="SvgComponent" :key="props.name" />
</template>

<style scoped></style>
