<script setup>
import UndoButton from "./button/UndoButton.vue";
import RedoButton from "./button/RedoButton.vue";
import ClearFormatButton from "./button/ClearFormatButton.vue";
// import PainterButton from "./button/PainterButton.vue";
import FontSize from "./dropdown/FontSize.vue";
import BoldButton from "./button/BoldButton.vue";
import ItalicButton from "./button/ItalicButton.vue";
import UnderlineButton from "./button/UnderlineButton.vue";
import StrikeButton from "./button/StrikeButton.vue";
import ColorPickerButton from "./button/ColorPickerButton.vue";
import HighlightPickerButton from "./button/HighlightPickerButton.vue";
import AlignDropdown from "./dropdown/AlignDropdown.vue";
import TopRowSpacingDropdown from "./dropdown/TopRowSpacingDropdown.vue";
import BottomRowSpacingDropdown from "./dropdown/BottomRowSpacingDropdown.vue";
import LineHeightDropdown from "./dropdown/LineHeightDropdown.vue";
import DividerButton from "./button/DividerButton.vue";
import ListDropdown from "./dropdown/ListDropdown.vue";
import FloatDropdown from "./dropdown/FloatDropdown.vue";
// import CodeButton from "./button/CodeButton.vue";
import EmojiDropdown from "./dropdown/EmojiDropdown.vue";
import Insertions from "./dropdown/Insertions.vue";
</script>

<template>
  <div class="toolbar-wrapper ">
    <div class="toolbar flex-items-center w-full bg-[#fafafa] p-2 divide-x divide-black-500">
      <div class="flex-items-center px-1">
        <UndoButton class="edit-btn" />
        <RedoButton class="edit-btn" />
      </div>
      <div class="flex-items-center px-1">
        <ClearFormatButton class="edit-btn" />
        <!-- <PainterButton class="edit-btn" /> -->
      </div>
      <div class="flex-items-center px-1">
        <FontSize class="edit-btn" />
        <BoldButton class="edit-btn" />
        <ItalicButton class="edit-btn" />
        <UnderlineButton class="edit-btn" />
        <StrikeButton class="edit-btn" />
        <ColorPickerButton class="edit-btn" />
        <HighlightPickerButton class="edit-btn" />
      </div>
      <div class="flex-items-center px-1">
        <AlignDropdown class="edit-btn" />
        <TopRowSpacingDropdown class="edit-btn" />
        <BottomRowSpacingDropdown class="edit-btn" />
        <LineHeightDropdown class="edit-btn" />
      </div>
      <div class="flex-items-center px-1">
        <DividerButton class="edit-btn" />
        <ListDropdown class="edit-btn" />
        <FloatDropdown class="edit-btn" />
        <!-- <CodeButton class="edit-btn" /> -->
        <EmojiDropdown class="edit-btn" />
      </div>
      <div class="flex-items-center px-1">
        <Insertions class="edit-btn" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.btn-group+.btn-group {
  border-left: 1px solid #ddd;
}

.edit-btn {
  // width: 24px;
  height: 24px;
  padding: 0 3px;
  color: #4a4a51;
  font-size: 16px;
  line-height: 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: transparent;
  cursor: pointer;

  // justify-content: center;
  svg {
    // color: #4A4A51;
    width: 16px;
    height: 16px;
  }
}

.edit-btn:hover {
  background-color: rgba(0, 0, 0, 0.07);
}

.edit-btn.active {
  color: #07c160;
}

.edit-btn+.edit-btn {
  margin-left: 6px;
}

/* 下拉菜单 */
.dropdown {
  cursor: default;

  .dropdown-toggle {
    display: flex;
    align-items: center;
    padding: 0 2px;
    border: none;
    color: inherit;
    font-size: inherit;
    background-color: unset;
  }

  .dropdown-toggle.disabled {
    cursor: not-allowed;
    color: #aaa;
  }

  .dropdown-toggle .icon-arrow {
    display: inline-block;
    width: 0;
    height: 0px;
    border-width: 4px 4px 0 4px;
    border-style: solid;
    vertical-align: middle;
    border-color: currentColor transparent transparent transparent;
    transform: scale(0.8);
    margin-left: 4px;
  }

  .dropdown-menu {
    min-width: 120px;
    padding: 6px 0;
    line-height: 1.2;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .menu-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 6px 12px;
  }

  .menu-item:hover {
    background-color: #fafafa;
  }

  .menu-item.active {
    color: #07c160;
  }

  .menu-item svg {
    color: inherit;
    margin-right: 10px;
  }
}

/* 颜色选择器 */
.picker {
  position: relative;

  .color-lump {
    position: absolute;
    display: inline-block;
    height: 2px;
    width: 18px;
    left: 3px;
    bottom: 2px;
    border-radius: 1px;
  }
}
</style>