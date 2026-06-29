// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 0e4df16515006d442b1504ad89dfc84b4bd0a51e0ca3377eab13abb1c6f2402e
import type { AuditManifest } from './router.js'

export const projectManifest = {
  "schemaVersion": "1",
  "manifestVersion": "2026-05-20T00:00:00+08:00",
  "modules": [
    {
      "domain": "product",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erp-monitor-hot-product-all-listing",
          "description": "在线商品列表展示：按平台/店铺/组织/销量/状态等条件分页查询在线商品(热销Listing)列表。数据源为ES商品SPU索引，查询后回填删除/编辑/改价/复制/同步等任务状态、白名单标记、店铺状态、TikTok差评率、SMT实时调控等。ES scroll分页。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/hotProductAllListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-product",
          "description": "商品(SPU)列表查询：商品中心SPU列表多维度分页查询：支持类目、11种关键词类型、销量/售卖/产品状态、开发员、时间区间、店铺、属性、抽检/轻小件/采样等数十项筛选，返回SPU列表及销量/毛利/平台等汇总字段。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/product",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "crm",
      "pathPrefix": "",
      "actions": [
        {
          "name": "crm-web-service-get-amazon-acc-health-info",
          "description": "获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。",
          "method": "GET",
          "path": "/rpa/getAmazonAccHealthInfo",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    }
  ]
} satisfies AuditManifest
