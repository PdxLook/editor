<script setup>
import { CloseOutline } from '@vicons/ionicons5'
import { editor } from "@/views/editor/editor.js";
const message = useMessage()
const show = ref(false);

const formRef = ref(null);
const formValue = ref({
  url: ""
})
const rules = {
  url: {
    required: true,
    message: "请输入输入图片链接",
    trigger: ["input"]
  }
}

const SubmitForm = async (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      handleInsertImageLink(formValue.value.url)
    } else {
      console.log(errors);

    }
  });
};
// 插入链接图片
const handleInsertImageLink = (imageUrl) => {
  try {
    new URL(imageUrl);
  } catch (error) {
    message.warning('请输入正确的图片链接')
    return;
  }
  editor.chain().focus().setImage({ src: imageUrl }).run();
  closeImageModal()
};

function openImageModal() {
  show.value = true;
}

function closeImageModal() {
  show.value = false;
}

defineExpose({
  openImageModal,
  closeImageModal
})
</script>

<template>
  <n-modal v-model:show="show">
    <n-card style="width: 600px" title="图片链接" :bordered="false" role="dialog" aria-modal="true">
      <template #header-extra>
        <div class="cursor-pointer" @click="closeImageModal">
          <n-icon size="28">
            <CloseOutline />
          </n-icon>
        </div>
      </template>
      <n-form ref="formRef" :model="formValue" :rules="rules" size="medium">
        <n-form-item path="url">
          <n-input v-model:value="formValue.url" placeholder="输入图片链接" />
        </n-form-item>
        <n-form-item>
          <div class="flex-center mx-auto space-x-3">
            <n-button strong secondary type="tertiary" @click="closeImageModal" class="w-23">
              取消
            </n-button>
            <n-button attr-type="button" type="primary" @click="SubmitForm" class="w-23">
              提交
            </n-button>
          </div>
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>
</template>

<style lang="scss" scoped></style>
