<template>
  <div ref="wrapRef"></div>
</template>

<script lang="ts">
  import {
    defineComponent,
    nextTick,
    ref,
    Ref,
    unref,
    onBeforeUnmount,
    onDeactivated,
    watch,
  } from "vue";
  import Vditor from "vditor";
  import "vditor/dist/index.css";
  import { onMountedOrActivated } from "/@/hooks/core/onMountedOrActivated";
  export default defineComponent({
    name: "Markdown",
    props: {
      height: {
        type: Number,
        default: 360,
      },
      value: {
        type: String,
        default: "",
      },
    },
    emits: ["change", "get", "update:value"],
    setup: (props, context) => {
      const wrapRef = ref<ElRef>();
      const vditorRef = ref(null) as Ref<Nullable<Vditor>>;
      const initedRef = ref(false);
      const valueRef = ref(props.value || "");
      const instance = {
        getVditor: (): Vditor => vditorRef.value!,
      };

      watch(
        () => props.value,
        (v) => {
          // if (v !== valueRef.value) {
          //   instance.getVditor?.setValue(v);
          // }
          valueRef.value = v;
        }
      );

      /**
       * @description 初始化编辑器
       */
      function init() {
        const wrapEl = unref(wrapRef) as HTMLElement;
        if (!wrapEl) {
          return;
        }
        const bindValue = { ...context.attrs, ...props };
        const insEditor = new Vditor(wrapEl, {
          theme: "classic",
          lang: "zh_CN",
          fullscreen: {
            index: 520,
          },
          preview: {
            actions: [],
          },
          input: (v) => {
            valueRef.value = v;
            context.emit("update:value", v);
            context.emit("change", v);
          },
          after: () => {
            nextTick(() => {
              insEditor.setValue(valueRef.value);
              vditorRef.value = insEditor;
              initedRef.value = true;
              context.emit("get", instance);
            });
          },
          ...bindValue,
          cache: {
            enable: false,
          },
        });
      }

      function destroy() {
        const vditorInstance = unref(vditorRef);
        if (!vditorInstance) {
          return;
        }
        try {
          vditorInstance?.destroy?.();
        } catch (error) {
          console.log("error: ", error);
        }
        vditorRef.value = null;
        initedRef.value = false;
      }

      onMountedOrActivated(init);
      onBeforeUnmount(destroy);
      onDeactivated(destroy);

      return {
        wrapRef,
      };
    },
  });
</script>
