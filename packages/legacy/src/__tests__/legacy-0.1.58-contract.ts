// Frozen public-contract baseline extracted from published @mb-it-org/cli@0.1.58.
// It contains no credentials, user data, or response samples.
export const LEGACY_CLI_0_1_58_CONTRACT = {
  "crm crm-web-service-get-amazon-acc-health-info": {
    "method": "get",
    "path": "/crm-web-service/rpa/getAmazonAccHealthInfo",
    "helpHash": "45bdaedefc93397bdf69d9c641d3e797c738c80363401da5ff8493c578aacfef",
    "flags": []
  },
  "product erp-monitor-hot-product-all-listing": {
    "method": "post",
    "path": "/erpmonitor/erpmonitor/hotProductMonitor/hotProductAllListing",
    "helpHash": "3ca1481c300278fb457544b25a4f38b447a31934ef1219100a1f0a65de621b6c",
    "flags": [
      {
        "name": "platformId",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "currency",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopType",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "minPrice",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "maxPrice",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "costPriceMax",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "costPriceMin",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "managerShopIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "director",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "manager",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "littleLeaders",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopManager",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopNames",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "allPlatformId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "finalShopNameList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "orderWay",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "orderFiled",
        "kind": "string",
        "required": true,
        "allowNo": false
      },
      {
        "name": "emoloyeeId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "startTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "endTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "currPage",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "matchKey",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sidCheck",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "publishOper",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuDescription",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sku",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "projectSpu",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "logisticsType",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "itemId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "yySpuStatus",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "firstCategory",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "secondCategory",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "bigChief",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "isSold",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "site",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "siteList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "proStatus",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuDispatchTimeMax",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "price5",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "country",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "payPalEmailAddress",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuCreateTime1",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuCreateTime2",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "profitMax",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "profitMin",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "isMedia",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "minCollection",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "maxCollection",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "minPageView",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "maxPageView",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "minRate",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "maxRate",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuThirtyDaysSoldCount1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuThirtyDaysSoldCount2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuSevenOrdernum1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuSevenOrdernum2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuThirtyOrdernum1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuThirtyOrdernum2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuFiftyOneOrdernum1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuFiftyOneOrdernum2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuNinetyOrdernum1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuNinetyOrdernum2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuHalfYearOrdernum1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuHalfYearOrdernum2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuNumberSold1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spuNumberSold2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuInventory1",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuInventory2",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "pageSize",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "isQingcang",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "autoPublish",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "isNotActive",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "statisDate",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "scrollId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "itemIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "itemIdList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "customerService",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "categorys",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "secondCategorys",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "exportItemIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "whiteList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "whiteListItemId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tortWhiteListing",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tortWhiteListItemId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "infringingWhiteWord",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "infringingWhiteWordItem",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "continuouOrderFifteen",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "continuouOrderThirty",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tort",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "bannedPlatform",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sellWellCountry",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "lowRate",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "folderId",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "collectProIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "freightTemplateIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "hasInfringedWord",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "productTagList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "diagnosisType",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "outOfStock",
        "kind": "boolean",
        "required": false,
        "allowNo": true
      },
      {
        "name": "isopenshop",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "operatestatus",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "smtProductType",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "specialmark",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "threeDaySalesChange",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "autoPublishType",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "autoPublishTypeList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "hasPhishingWord",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "amazonFollowUp",
        "kind": "boolean",
        "required": false,
        "allowNo": true
      },
      {
        "name": "groupCompanyId",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "brand",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "multipleWarehousesLabel",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "multipleWarehousesTestLabel",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tortStartTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tortEndTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "gmShop",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "ozonFbpProduct",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "bundType",
        "kind": "integer",
        "required": false,
        "allowNo": false
      }
    ]
  },
  "product erp-product-product": {
    "method": "post",
    "path": "/erpProduct/erpProduct/product/product",
    "helpHash": "9a262fb18fa2fa112eddf768b750aed9d3681f2db7f4467ac2aff01a0b5065f2",
    "flags": [
      {
        "name": "categoryId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "levelNum",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sku",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sonSku",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spu",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "manufacture",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "proName",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "productName",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "englishTitle",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "batchSku",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "proNameForAny",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "fuzzyQuery",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "location",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "salesStatus",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuStatus",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sellingStatus",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "status",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "oper",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "buyer",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "orderBy",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "startDate",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "endDate",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "publishStartTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "publishEndTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "saleStartTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "saleEndTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "reduceCost",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tort",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopIdList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "propertiesid",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "spotcheck",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tkVideo",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "buyflag",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "purchaseFlag",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "isAll",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "searchCompanyId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "isAccount",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "positionId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "pageSize",
        "kind": "string",
        "required": true,
        "allowNo": false
      },
      {
        "name": "page",
        "kind": "string",
        "required": true,
        "allowNo": false
      }
    ]
  },
  "pim instudio-pms-get-shop-manager-ranking-list": {
    "method": "post",
    "path": "/yypms/pms/middlePanel/getShopManagerRankingList",
    "helpHash": "e33a6678d257c36f070a94d501efedc7127e503bd932f966d865e0031aa372a9",
    "flags": [
      {
        "name": "times",
        "kind": "string",
        "required": true,
        "allowNo": false
      },
      {
        "name": "platformName",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "platformNameList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "bigChief",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "teamNumber",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopName",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "grade",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "warningIndexs",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopManagers",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "page",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "pageSize",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "startIndex",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "customerServiceList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopNameList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "smallScore",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "bigScore",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopManager",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "chartType",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "position",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "operateStatus",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "managerEmployeeList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sqlList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "grades",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "keyWord",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "keyWordList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "platformIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "bigChiefList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "employeeList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "customerServiceMgr",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopNames",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "lastTimes",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "directors",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "managers",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopManagerIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "sites",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopManagerStar",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "tableName",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuOperList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "openShopStartTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "openShopEndTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "qualifyTotalAmountFlag",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "qualifyfhmaoliFlag",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "firstMonthFlag",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "submitStrategy",
        "kind": "boolean",
        "required": false,
        "allowNo": true
      },
      {
        "name": "shopModel",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "categoryId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "companyId",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "companyIdSpecial",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "companyIdEmp",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "companyIdSpecialEmp",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "categoryShopList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "specialSumRanking",
        "kind": "boolean",
        "required": false,
        "allowNo": true
      },
      {
        "name": "exportTitleList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "exportTimeList",
        "kind": "string",
        "required": false,
        "allowNo": false
      }
    ]
  },
  "pim instudio-pms-list": {
    "method": "post",
    "path": "/yypms/pms/skuManager/list",
    "helpHash": "4dc141da8ec46a62b8a4f10bebe052d382e575f91aafaec3afbc566e17d88b49",
    "flags": [
      {
        "name": "skuOper",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "times",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "position",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "skuOperList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "page",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "pageSize",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "directors",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "managers",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "shopManagerIds",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "startIndex",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "area",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "areaSpecial",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "companyId",
        "kind": "integer",
        "required": false,
        "allowNo": false
      },
      {
        "name": "permissionsOperList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "chartType",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "gtInductionTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "ltInductionTime",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "hideSkuOperList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "warningIndexList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "exportTitleList",
        "kind": "string",
        "required": false,
        "allowNo": false
      },
      {
        "name": "exportTimeList",
        "kind": "string",
        "required": false,
        "allowNo": false
      }
    ]
  }
} as const

