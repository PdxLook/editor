<template>
  <div class="flex flex-justify-center bg-black-200 h-[100vh] p-5 overflow-hidden">
    <div class="template bg-white rounded w-[374px] fixed left-5 top-5 " style="height: calc(100vh - 40px);">
      <MjxTemplate />
    </div>
    <div class="mjx-editor  pt-10 pb-15">
      <div class="mjx-editor-tool ">
        <ToolMenu />
      </div>
      <n-scrollbar style="height: 100%">
        <div ref="editorContainerRef" class="mjx-editor-container"></div>
      </n-scrollbar>
      <div
        class="mjx-editor-footer flex-items-center space-x-4 mt-4 py-6 border-t border-black-100 text-3 text-black-700 leading-5">
        <div class="info">
          <!-- <div class="save-time">20:23&emsp;已保存</div> -->
          <div>正文字数 <span class="word-count">0</span></div>
        </div>
        <div class="flex-items-center space-x-4">
          <!-- <div class="btn editor-preview">预览</div> -->
          <!-- <div class="btn editor-copy">
            一键复制
          </div> -->
        </div>
      </div>
      <div class="mjx-editor-right absolute bottom-15 -right-[84px]">
        <ul>
          <li>
            <n-button tertiary @click="clearContent">清空内容</n-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { editor } from "./editor.js";
import MjxTemplate from "./components/Template.vue";
import ToolMenu from "./components/ToolMenu.vue";

const dialog = useDialog()
const editorContainerRef = ref();

function clearContent() {
  dialog.warning({
    title: '警告',
    content: '未保存的内容清空后将无法恢复，是否继续？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      editor.commands.clearContent()
    },
    onNegativeClick: () => { },
  })
}

onMounted(() => {
  if (editorContainerRef.value) {
    editorContainerRef.value.appendChild(editor.options.element);
  }
});
</script>

<style lang="scss">
@use './style' as *;
@use '@/assets/styles/tiptap-appmsg' as *;
</style>