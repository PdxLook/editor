<template>
  <n-notification-provider>
    <n-modal-provider>
      <n-message-provider>
        <n-dialog-provider>
          <RouterView />
        </n-dialog-provider>
      </n-message-provider>
    </n-modal-provider>
  </n-notification-provider>
</template>

<style scoped></style>
