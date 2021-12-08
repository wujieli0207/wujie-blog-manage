<template>
  <web-form :form-field="formField" v-model="form" />
  <el-button type="primary" :onclick="submitForm">提交</el-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import WebForm from "/@/components/WebForm/index.vue";
  import useState from "./hooks/useState";
  import useFormField from "./hooks/useFormField";
  export default defineComponent({
    name: "WebFormDemo",
    components: {
      WebForm,
    },
    setup: (props, context) => {
      const { form } = useState();
      const { formField } = useFormField();

      const submitForm = (): void => {
        console.log("form: ", form.value);
      };

      return {
        form,
        formField,
        submitForm,
      };
    },
  });
</script>
