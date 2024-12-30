<script setup>
import { editor } from "@/views/editor/editor.js";
import { throttle } from "lodash-es";

// 切换下划线
const isUnderlineActive = ref(false);
const handleChangeUnderline = () => {
  editor.chain().focus().toggleUnderline().run();
};

// 处理更新下划线状态的函数
const handleUpdateUnderlineState = ({ editor }) => {
  isUnderlineActive.value = editor.isActive("underline");
};

editor.on(
  "transaction",
  throttle(handleUpdateUnderlineState, 240, { leading: false })
);
</script>

<template>
  <button class="underline" :class="{ active: isUnderlineActive }" @click="handleChangeUnderline">
    <svg-icon name="underline"></svg-icon>
  </button>
</template>

<style lang="scss" scoped></style>
