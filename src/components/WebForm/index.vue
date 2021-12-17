<template>
  <div class="web-form">
    <el-form ref="webFormRef" :model="form" :label-width="labelWidth">
      <el-form-item
        v-for="item in formField"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        :rules="{
          required: item.require,
          message: item.errMsg || item.placeholder || item.label + '是毕录项',
          trigger: 'change',
        }"
      >
        <!-- 输入框、富文本编辑 -->
        <template v-if="[EFormType.INPUT, EFormType.TEXTAREA].includes(item.type)">
          <el-input
            :type="item.type"
            v-bind="item.other"
            :placeholder="item.placeholder"
            v-model="form[item.value]"
          ></el-input>
        </template>
        <!-- 下拉选择 -->
        <template v-if="item.type === EFormType.SELECT">
          <el-select v-model="form[item.value]" placeholder v-bind="item.other">
            <template v-for="(op, index) in item.options" :key="index">
              <el-option
                v-if="op && item.selectValue && item.selectLabel"
                :key="op[item.selectValue]"
                :label="op[item.selectLabel]"
                :value="op[item.selectValue]"
              ></el-option>
            </template>
          </el-select>
        </template>
        <!-- 单选框 -->
        <template v-if="item.type === EFormType.RADIO">
          <el-radio-group v-model="form[item.value]" v-bind="item.other">
            <template v-for="(op, index) in item.options" :key="index">
              <el-radio
                v-if="op && item.selectValue && item.selectLabel"
                :key="op[item.selectValue]"
                :label="op[item.selectLabel]"
                :value="op[item.selectValue]"
                >{{ op[item.selectLabel] }}</el-radio
              >
            </template>
          </el-radio-group>
        </template>
        <!-- 复选框 -->
        <template v-if="item.type === EFormType.CHECKBOX">
          <el-checkbox-group v-model="form[item.value]" v-bind="item.other">
            <template v-for="(op, index) in item.options" :key="index">
              <el-checkbox
                v-if="op && item.selectValue && item.selectLabel"
                :label="op[item.selectLabel]"
                v-model="op[item.selectValue]"
                :value="op[item.selectValue]"
                >{{ op[item.selectLabel] }}</el-checkbox
              >
            </template>
          </el-checkbox-group>
        </template>
        <!-- switch 选择 -->
        <template v-if="item.type === EFormType.SWITCH">
          <el-switch v-model="form[item.value]" v-bind="item.other" />
        </template>
        <template v-if="item.type === EFormType.DATE">
          <el-date-picker v-model="form[item.value]" v-bind="item.other"></el-date-picker>
        </template>
        <!-- 自定义插槽 -->
        <template v-if="item.type === EFormType.UPLOAD">
          <web-upload
            v-model="form[item.value]"
            :image-url="form[item.value]"
            v-bind="item.other"
          />
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, watch } from "vue";
  import WebUpload from "./components/WebUpload/Index.vue";
  import useState from "./hooks/useState";
  import type { IWebFormField } from "./type";
  import { EFormType } from "/@/enums/componentEnum";
  export default defineComponent({
    name: "WebForm",
    components: {
      WebUpload,
    },
    props: {
      labelWidth: {
        type: String,
        default: "90px",
      },
      formField: {
        type: Array as PropType<IWebFormField[]>,
        default: () => [],
      },
      modelValue: {
        type: Object,
        default: () => ({}),
      },
    },
    setup: (props, context) => {
      const { webFormRef } = useState();
      const form = computed(() => props.modelValue);

      watch(
        () => form,
        (val) => {
          context.emit("update:modelValue", val);
        },
        {
          deep: true,
        }
      );

      return {
        EFormType,
        webFormRef,
        form,
      };
    },
  });
</script>
