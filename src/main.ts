// 引入自定义样式
import "/@/styles/index.scss";
// 引入 tailwind
import "/@/styles/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "/@/router";
import { setupStore } from "/@/store";

function bootstrap() {
  const app = createApp(App);

  app.use(router);
  setupStore(app);

  app.mount("#app");
}

bootstrap();
