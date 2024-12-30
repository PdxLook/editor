<script setup>
import { editor } from "@/views/editor/editor.js";
import { throttle } from "lodash-es";

const isBrushActive = ref(false);

</script>

<template>
  <button class="painter" @click="handleFormatBrush">
    <svg-icon name="brush" />
  </button>
</template>

<style lang="scss" scoped></style>
