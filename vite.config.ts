import { UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
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
    ],
    resolve: {
      alias,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/@/styles/variables.scss";',
        },
      },
    },
  };
};
