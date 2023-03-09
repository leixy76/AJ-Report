/*
 * @Descripttion: json 入口文件
 * @version:
 * @Author: qianlishi
 * @Date: 2021-08-29 07:46:46
 * @LastEditors: qianlishi qianlishi@anji-plus.com
 * @LastEditTime: 2023-03-06 16:03:17
 */

import { widgetText } from "./configure/texts/widget-text"
import { widgetMarquee } from "./configure/texts/widget-marquee"
import { widgetHref } from "./configure/texts/widget-href"
import { widgetTime } from "./configure/texts/widget-time"
import { widgetImage } from "./configure/texts/widget-image"
import { widgetSliders } from "./configure/texts/widget-slider"
import { widgetVideo } from "./configure/texts/widget-video"
import { widgetTable } from "./configure/texts/widget-table"
import { widgetIframe } from "./configure/texts/widget-iframe"
import { widgetUniversal } from "./configure/widget-universal"
import { widgetBarchart } from "./configure/barCharts/widget-barchart"
import { widgetGradientBarchart } from "./configure/barCharts/widget-gradient-barchart"
import { widgetLinechart } from "./configure/lineCharts/widget-linechart"
import { widgetBarlinechart } from "./configure/barlineCharts/widget-barlinechart"
import { widgetPiechart } from "./configure/pieCharts/widget-piechart"
import { widgetFunnel } from "./configure/funnelCharts/widget-funnel"
import { widgetGauge } from "./configure/percentCharts/widget-gauge"
import { widgetLineMap } from "./configure/mapCharts/widget-line-map"
import { widgetPieNightingale } from "./configure/pieCharts/widget-pie-nightingale"
import { widgetPiePercentage } from "./configure/percentCharts/widget-pie-percentage"
import { widgetAirbubbleMap } from "./configure/mapCharts/widget-airbubble-map"
import { widgetBarStack } from "./configure/barCharts/widget-bar-stack"
import { widgetLineStack } from "./configure/lineCharts/widget-line-stack"
import { widgetBarCompare } from "./configure/barCharts/widget-bar-compare"
import { widgetLineCompare } from "./configure/lineCharts/widget-line-compare"
import { widgetDecoratePie } from "./configure/decorateCharts/widget-decorate-pie";
import { widgetMoreBarLine } from "./configure/barlineCharts/widget-more-bar-line";
import { widgetWordCloud } from "./configure/wordcloudCharts/widget-word-cloud";
import { widgetHeatmap } from "./configure/heatmap/widget-heatmap";
import { widgetRadar } from "./configure/radarCharts/widget-radar";
import { widgetBarLineStack } from "./configure/barlineCharts/widget-bar-line-stack";
import { widgetSelect } from "./configure/form/widget-select";
import { widgetInput } from "./configure/form/widget-input";
import { widgetFormTime } from "./configure/form/widget-form-time";

export const widgetTool = [
  // type=html类型的组件
  widgetText,
  widgetMarquee,
  widgetHref,
  widgetTime,
  widgetImage,
  //  widgetSliders,
  widgetVideo,
  widgetTable,
  widgetIframe,
  //  widgetUniversal,
  widgetBarchart,
  widgetGradientBarchart,
  widgetLinechart,
  widgetBarlinechart,
  widgetPiechart,
  widgetFunnel,
  widgetGauge,
  widgetLineMap,
  widgetPieNightingale,
  widgetPiePercentage,
  widgetAirbubbleMap,
  widgetBarStack,
  widgetLineStack,
  widgetBarCompare,
  widgetLineCompare,
  widgetDecoratePie,
  widgetMoreBarLine,
  // widgetWordCloud,
  widgetHeatmap,
  widgetRadar,
  widgetBarLineStack,
  widgetSelect,
  widgetInput,
  widgetFormTime
]
