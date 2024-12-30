<template>
  <n-card title="素材" :bordered="false">
    <n-tabs type="line" animated>
      <n-tab-pane name="样式" tab="样式">
        <n-scrollbar style="max-height: 80vh">
          <n-list hoverable clickable>
            <n-list-item v-for="itmes, index in templateData.data" :key="index" @click="clickHtml(itmes.html)">
              <div class="relative group">
                <div class="" v-html="itmes.html"></div>
                <!-- <div class="flex-items-center justify-between border-t border-black-300 py-2">
                        <p>{{ itmes.name }}</p>
                      </div> -->
              </div>
            </n-list-item>
          </n-list>
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="模版" tab="模版">
        <n-scrollbar style="max-height: 80vh">
          <n-list hoverable clickable>
            <n-list-item v-for="itmes, index in template2Data.data" :key="index" @click="clickHtml(itmes.html)">
              <div class="relative group">
                <div class="" v-html="itmes.html"></div>
                <!-- <div class="flex-items-center justify-between border-t border-black-300 py-2">
                        <p>{{ itmes.name }}</p>
                      </div> -->
              </div>
            </n-list-item>
          </n-list>
        </n-scrollbar>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { editor } from "../editor.js";
import templateData from '../template.json';
import template2Data from '../template2.json';
const dialog = useDialog()
function clickHtml(html) {
  // editor.commands.clearContent();
  handleInsert(html)
}

// 空标签添加空格
function insertNonEmptyTags(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const elements = doc.querySelectorAll('*');

  elements.forEach(el => {
    if (el.children.length === 0 && !el.textContent.trim()) {
      const span = document.createElement('span');
      span.innerHTML = '&nbsp;';
      el.appendChild(span);
    }
  });

  return doc.body.innerHTML;
}

// 插入内容
function handleInsert(html) {
  try {
    editor
      .chain()
      .focus()
      .insertContent(insertNonEmptyTags(html) + "\n" + "<p></p>", {
        parseOptions: {
          preserveWhitespace: true,
        },
      })
      .run();
  } catch (error) {
    dialog.warning({
      title: '温馨提示',
      content: '当前模板添加失败，请联系管理员',
      positiveText: '反馈',
      negativeText: '不反馈',
      onPositiveClick: () => {

      },
      onNegativeClick: () => {

      }
    })
  }
}
</script>

<style lang="scss" scoped></style>