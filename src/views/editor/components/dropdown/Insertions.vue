<script setup>
import { editor } from "@/views/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";
import Image from "../modal/Image.vue";
const imageShowModal = ref(false);
const dropdownInsertionsRef = ref();
const imageRef = ref(null);

const featureList = [
  {
    name: "图片",
    function: openImages,
  }
]

function openImages() {
  imageRef.value.openImageModal();
}

function imageBeforeUpload(e) {
  // console.log(e)
  editor
    .chain()
    .focus()
    .setImage({
      src: e.file.fullPath,
    })
    .run();
}

onMounted(() => {
  new Dropdown({ el: dropdownInsertionsRef.value });
});
</script>

<template>
  <div class="">
    <div ref="dropdownInsertionsRef" class="dropdown">
      <button class="dropdown-toggle">
        <div class="flex-items-center justify-between">
          <span class="text-3.5">插入</span>
          <i class="icon-arrow"></i>
        </div>
      </button>
      <div class="dropdown-menu">
        <!-- <div v-for="item in featureList" :key="item" class="menu-item" @click="item.function">
          {{ item.name }}
        </div> -->
        <div class="menu-item">
          <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :data="{ 'file': 'image-file', }"
            @before-upload="imageBeforeUpload" :show-file-list="false">
            本地图片
          </n-upload>
        </div>
        <div class="menu-item" @click="openImages">
          图片链接
        </div>

      </div>
    </div>

    <Image ref="imageRef" />
  </div>


</template>

<style lang="scss" scoped></style>
