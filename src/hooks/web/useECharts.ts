import { ref, Ref, unref } from "vue";
import type { EChartsOption } from "echarts";

import echarts from "/@/plugins/ECharts";

export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme: "light" | "dark" | "default" = "light"
) {
  let chartInstance: echarts.ECharts | null = null;
  const cacheOptions = ref<EChartsOption>({});

  /**
   *
   * @param t
   * @description 初始化图表格
   */
  function initCharts(t = theme) {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }

    chartInstance = echarts.init(el, t);
  }
}
