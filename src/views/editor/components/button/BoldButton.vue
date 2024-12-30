<script setup>
import { editor } from "@/views/editor/editor.js";
import { throttle } from "lodash-es";

// 切换加粗
const isBoldActive = ref(false);
const handleChangeBold = () => {
  editor.chain().focus().toggleBold().run();
};

// 加粗状态回显
const handleUpdateBoldState = ({ editor }) => {
  isBoldActive.value = editor.isActive("bold")
};
editor.on(
  "transaction",
  throttle(handleUpdateBoldState, 240, { leading: false })
);
</script>

<template>
  <button class="bold" :class="{ active: isBoldActive }" @click="handleChangeBold">
    <svg-icon name="bold"></svg-icon>
  </button>
</template>

<style lang="scss" scoped></style>
