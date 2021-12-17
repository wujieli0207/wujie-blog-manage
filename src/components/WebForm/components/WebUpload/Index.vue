<template>
  <div class="web-upload">
    <el-upload
      class="avatar-uploader"
      :show-file-list="showFileList"
      :before-upload="handleBeforeUpload"
    >
      <el-image v-if="imageUrl" :src="imageUrl" />
    </el-upload>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "WebUpload",
    props: {
      showFileList: {
        type: Boolean,
        default: false,
      },
      imageUrl: {
        type: String,
        required: true,
        default: "",
      },
      fileLimit: {
        type: Object,
        default: () => ({}),
      },
    },
    setup: (props, context) => {
      /**
       * TODO
       * @description  上传前校验
       *
       */
      const handleBeforeUpload = (): void => {
        console.log("handleBeforeUpload: ", handleBeforeUpload);
      };

      return {
        handleBeforeUpload,
      };
    },
  });
</script>
