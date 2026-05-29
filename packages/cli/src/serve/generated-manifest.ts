// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-28T00:00:00+08:00 @ 4cdfc264c904437c4ece4cbcb8087543b8c5ed7422248ec68bdeffb511b9d001
import type { AuditManifest } from './router.js'

export const projectManifest = {
  "schemaVersion": "1",
  "manifestVersion": "2026-05-28T00:00:00+08:00",
  "modules": [
    {
      "domain": "shops",
      "pathPrefix": "",
      "actions": [
        {
          "name": "health",
          "description": "Get Amazon shop account health info",
          "method": "GET",
          "path": "/gateway/crm-web-service/rpa/getAmazonAccHealthInfo",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "doris",
      "pathPrefix": "/gateway/cli-service/cli/doris",
      "actions": [
        {
          "name": "schemas",
          "description": "List Doris databases and tables",
          "method": "GET",
          "path": "/schemas",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "show-create-table",
          "description": "Show Doris CREATE TABLE DDL",
          "method": "GET",
          "path": "/show-create-table",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "query",
          "description": "Execute Doris SELECT query",
          "method": "POST",
          "path": "/query",
          "pathPrefix": "",
          "responseMode": "ndjson"
        }
      ]
    },
    {
      "domain": "org",
      "pathPrefix": "/erpOrder/erpOrder",
      "actions": [
        {
          "name": "platforms",
          "description": "List all platforms",
          "method": "GET",
          "path": "/saleReport/getPlatformList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "sites",
          "description": "List sites by platform",
          "method": "GET",
          "path": "/saleReport/getSiteList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "leaders",
          "description": "List leaders",
          "method": "POST",
          "path": "/teamDropDown/leaderDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "managers",
          "description": "List managers",
          "method": "POST",
          "path": "/teamDropDown/managerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "little-leaders",
          "description": "List little leaders",
          "method": "POST",
          "path": "/teamDropDown/littleManagerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "shop-managers",
          "description": "List shop managers",
          "method": "POST",
          "path": "/teamDropDown/shopManagerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "employees",
          "description": "List employees",
          "method": "POST",
          "path": "/teamDropDown/teamNumberDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "shops",
          "description": "List shops",
          "method": "POST",
          "path": "/teamDropDown/shopDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    }
  ]
} satisfies AuditManifest
