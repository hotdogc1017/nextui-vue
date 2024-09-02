<template>
  <el-popover
    v-model="isShowTip"
    placement="top"
    trigger="manual"
    :visible-arrow="true"
  >
    <!-- 点击之后提示 -->
    <div class="tip">
      <img v-if="tipText.includes('成功')" src="@/assets/images/radio.png" />
      {{ tipText }}
    </div>
    <!-- 按钮复制 -->

    <div
      v-if="isButton"
      slot="reference"
      :style="buttonStyle"
      class="copy_btn"
      @click="copy($event, copyText)"
    >
      复制
    </div>
    <!-- 图标icon复制 -->
    <img
      v-else
      slot="reference"
      src="@/assets/images/order/copy-ICON.png"
      alt=""
      :style="iconStyle"
      class="copy_btn"
      @click="copy($event, copyText)"
    />
  </el-popover>
</template>

<script>
import Clipboard from "clipboard";

export default {
  props: {
    // 是否是按钮格式
    isButton: {
      type: Boolean,
      default: true,
    },
    // 按钮默认样式
    buttonStyle: {
      type: Object,
      default: function () {
        return {
          padding: "3px 6px",
          background: "#ff8d5d",
          color: "#fff",
          cursor: "pointer",
          "border-radius": "5px",
          "margin-left": "10px",
        };
      },
    },
    // 图片icon默认样式
    iconStyle: {
      type: Object,
      default: function () {
        return {
          height: "14px !important",
          width: "14px !important",
          cursor: "pointer",
          "margin-left": "10px",
        };
      },
    },
    // 复制文字
    copyText: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isShowTip: false,
      tipText: "复制成功",
      timer: null,
    };
  },

  methods: {
    copy(e, text) {
      const clipboard = new Clipboard(e.target, {
        text: function () {
          return text;
        },
      });
      clipboard.on("success", () => {
        clipboard.destroy();
        this.isShowTip = true;
        this.tipText = `复制成功`;
      });
      clipboard.on("error", () => {
        clipboard.destroy();
        this.isShowTip = true;
        this.tipText = "复制失败";
      });
      clipboard.onClick(event);
      this.timer = setTimeout(() => {
        this.isShowTip = false;
        this.timer = null;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.popper__arrow::after {
  border: none !important;
}

.el-popover {
  min-width: 0;
  padding: 4px 8px;
}

.tip {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 12px;
    margin-right: 5px;
  }
}
</style>
