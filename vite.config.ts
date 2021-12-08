import { UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// import styleImport from "vite-plugin-style-import";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("src"),
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // styleImport({
      //   libs: [
      //     // 按需加载 element-plus
      //     {
      //       libraryName: "element-plus",
      //       esModule: true,
      //       ensureStyleFile: true,
      //       resolveStyle: (name: string) => {
      //         return `element-plus/lib/theme-chalk/${name}.css`;
      //       },
      //       resolveComponent: (name: string) => {
      //         return `element-plus/lib/${name}`;
      //       },
      //     },
      //   ],
      // }),
    ],
    resolve: {
      alias,
    },
  };
};
