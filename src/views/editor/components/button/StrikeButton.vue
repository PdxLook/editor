<script setup>
import { editor } from "@/views/editor/editor.js";
import { throttle } from "lodash-es";

// 切换删除线
const isStrikethroughActive = ref(false);
/**
 * 切换删除线格式
 * 使编辑器聚焦并切换当前选中文本的删除线格式
 */
const handleChangeStrikethrough = () => {
  editor.chain().focus().toggleStrike().run();
};

// 删除线状态回显
/**
 * 更新删除线状态
 * 根据编辑器的当前状态更新isStrikethroughActive的值
 * @param {Object} data - 包含编辑器实例的对象
 */
const handleUpdateStrikethroughState = ({ editor }) => {
  isStrikethroughActive.value = editor.isActive("strike");
};


editor.on(
  "transaction",
  throttle(handleUpdateStrikethroughState, 240, { leading: false })
);
</script>

<template>
  <button class="strike" :class="{ active: isStrikethroughActive }" @click="handleChangeStrikethrough">
    <svg-icon name="strike"></svg-icon>
  </button>
</template>

<style lang="scss" scoped></style>