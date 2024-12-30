<script setup>
import { editor } from "@/views/editor/editor.js";
</script>

<template>
  <button class="redo" @click="editor.commands.redo">
    <svg-icon name="redo" />
  </button>
</template>

<style lang="scss" scoped></style>