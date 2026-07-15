<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-db-sysadmin

查询当前登录管理员信息(getDbSysadmin)：从 HttpSession(sysloginadmin) 取出当前登录管理员实体 DbSysadmin 并整体返回。移动端页面初始化时调用，用于获取当前用户的部门、职位、平台、店铺管理权限等信息；前端将整个返回对象存入 localStorage.userInfo，并据 depart(部门) 控制页面跳转与展示。直接返回实体，未包装 CommonResponse。

## 用法

```bash
mbs oms erp-mobile-get-db-sysadmin
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/pushController/getDbSysadmin`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `operId` | string | 操作员(用户)ID | - |
| `oper` | string | 操作员/登录用户姓名(如“王丽”) | - |
| `mobile` | string | 手机号 | - |
| `sclass` | string | 用户类别/权限等级标识 | - |
| `password` | string | 登录密码(加密串) | - |
| `depart` | string | 部门。前端核心字段，据此判断 总经办/产品部/销售部/平台大酋长 等控制页面跳转与展示 | - |
| `position` | string | 职位编码(逗号分隔，如 ,1,2,3,) | - |
| `spcode` | string | 商品编码权限标识 | - |
| `reserve1` | string | 预留字段1 | - |
| `reserve2` | string | 预留字段2 | - |
| `reserve3` | string | 预留字段3 | - |
| `reserve4` | string | 预留字段4 | - |
| `reserve5` | string | 预留字段5(如 5#7#24#467#19127#.1125## 类目/平台权限编码串) | - |
| `menuid` | string | 菜单ID(菜单权限) | - |
| `storage` | string | 仓库标识 | - |
| `yyemployeeId` | string | 营运(运营)员工ID | - |
| `yyuserId` | string | 营运(运营)用户ID | - |
| `platformId` | string | 平台ID(前端存 localStorage.platformId) | - |
| `manageShopIds` | string | 管理的店铺ID集合 | - |
| `manageEmployeeNames` | string | 管理的员工姓名集合 | - |
| `mabangerpId` | string | 马帮ERP用户ID | - |
| `allPlatformId` | string | 管理的所有平台ID | - |
| `manageAuthority` | string | 管理权限标识 | - |
| `dataPermission` | string | 数据权限。0=高等权限;1=中等权限;2=低等权限 | - |
| `leaderId` | string | 大酋长或独立小酋长ID | - |
| `leaderName` | string | 大酋长或小酋长姓名 | - |
| `teamTypeList[]` | array | 团队类型列表(字符串数组) | - |
| `teamEmployeeNames` | string | 登录信息中自己及下级的员工名称 | - |
| `groupCompanyId` | number | 集团ID(区分集团公司信息) | - |
| `groupCompanyName` | string | 集团名称(区分公司信息) | - |
| `departmentId` | number | 部门ID(前端存 localStorage.departmentId) | - |
| `positionId` | number | 职位ID(前端存 localStorage.positionId) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
