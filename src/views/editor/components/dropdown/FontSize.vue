<script setup>
import { editor } from "@/views/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";

const dropdownSizeRef = ref();
onMounted(() => {
  new Dropdown({ el: dropdownSizeRef.value });
});

// 设置字号
const currentFontsize = ref(14);
const fontsizeList = [12, 14, 15, 16, 18, 20, 24, 28];
const handleSetFontsize = (size) => {
  editor.chain().focus().setFontSize(`${size}px`).run();
  currentFontsize.value = size;
};

// 字号状态回显
const handleUpdateFontsizeState = ({ editor, transaction }) => {
  let fontSizeValue = editor.getAttributes("textStyle").fontSize;
  if (!fontSizeValue) {
    const pos = transaction.curSelection.from;
    let node = editor.view.domAtPos(pos).node;
    while (node.nodeType !== 1) {
      node = node.parentNode;
    }
    fontSizeValue = window.getComputedStyle(node).fontSize;
  }
  currentFontsize.value = fontSizeValue.match(/\d+/)[0];
};
editor.on(
  "transaction",
  throttle(handleUpdateFontsizeState, 240, { leading: false })
);
</script>

<template>
  <div ref="dropdownSizeRef" class="dropdown dropdown-size">
    <button class="dropdown-toggle">
      <div class="flex-items-center justify-between">
        <span class="size">{{ currentFontsize }}px</span>
        <i class="icon-arrow"></i>
      </div>
    </button>
    <div class="dropdown-menu">
      <div v-for="size in fontsizeList" :key="size" class="menu-item" :style="`font-size: ${size}px`"
        @click="handleSetFontsize(size)">
        {{ size }}px
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
