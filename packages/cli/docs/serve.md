# `mbs serve` 閺堫剙婀?HTTP 缂冩垵鍙?

`mbs serve` 閸氼垰濮╂稉鈧稉顏呮拱閸?HTTP 閺堝秴濮熼敍宀冾唨濞村繗顫嶉崳銊┿€夐棃銏犲讲娴犮儱顦查悽?CLI 瀹稿弶婀佺拋銈堢槈閸樼粯鐓＄拠?MBS API閵嗗倸鐣犻惃鍕壋韫囧啰鏁ら柅鏃€妲搁弨顖涘瘮娑撴艾濮熼幒銉ュ經閻ㄥ嫰銆夐棃銏犲娴滃本顐煎鈧崣鎴窗閸撳秶顏崣顖欎簰閹?manifest 娑擃厼鍑＄€孤ゎ吀閻ㄥ嫬褰х拠缁樺复閸欙絿绮嶉崥鍫熷灇閸愬懘鍎撮惇瀣緲閵嗕浇绻嶉拃銉ㄧ窡閸斺晠銆夐妴浣峰閺冭泛鍨庨弸鎰般€夐幋鏍︾瑹閸斺€冲斧閸ㄥ绱濋懓灞肩瑝閻劌婀い鐢告桨闁插矂鍣搁弬鏉跨杽閻滀即鈹堢敮顔炬瑜版洏鈧竼ookie 閸掗攱鏌婇崪?API 鏉烆剙褰傞妴?

娑撴艾濮熼弻銉嚄闁槒绶禒宥勪簰 audit manifest 娑撶儤娼靛┃鎰剁礉娑撳秵澧滈崘娆庣瑹閸斅ょ熅閻究鈧倽绻栭弽鐑姐€夐棃顫癌濞嗏€崇磻閸欐垵褰х拹鐔荤煑鐏炴洜銇氶妴浣虹摣闁鈧椒姘︽禍鎺戞嫲缂佸嫬鎮庢稉姘閺佺増宓侀敍灞惧复閸欙綀绔熼悾灞肩矝鐠?CLI 閻ㄥ嫬褰х拠鑽ゅ閺夌喍绻氶幐浣风閼锋番鈧?

## 闁倻鏁ら崷鐑樻珯

- 閸╄桨绨鎻掔殱鐟佸懍绗熼崝鈩冨复閸欙絽鎻╅柅鐔蜂粵娑撯偓娑擃亜鍞撮柈銊ょ瑹閸旓繝銆夐棃?
- 娑撻缚绻嶉拃銉ｂ偓浣藉偍閸斅扳偓浣虹矋缂佸洨鐡戞稉姘閺佺増宓侀崚鏈电稊閺堫剙婀撮崣顏囶嚢閻婢?
- 閸︺劍顒滃蹇撶殱鐟佸懎澧犻敍宀€鏁ゆい鐢告桨閸樼喎鐎锋宀冪槈鐎涙顔岄妴浣虹摣闁娼禒璺烘嫲娴溿倓绨板ù浣衡柤
- 鐠?AI 閹存牕澧犵粩顖氫紣閸忕兘鈧俺绻冨ù蹇氼潔閸?fetch 鐠嬪啰鏁ら張顒€婀寸純鎴濆彠閿涘矁鈧奔绗夐弰顖滄纯閹恒儱顦╅悶?MBS 鐠併倛鐦?

## 閸氼垰濮?

```bash
mbs login
mbs serve --manifest fixtures/sample-audit-manifest.json
```

鐢摜鏁ら崣鍌涙殶閿?

| 閸欏倹鏆?| 姒涙顓婚崐?| 鐠囧瓨妲?|
|------|--------|------|
| `--manifest <file>` | 韫囧懎锝?| audit manifest JSON 鐠侯垰绶?|
| `--port <number>` | `7878` | 閺堫剙婀撮惄鎴濇儔缁旑垰褰?|
| `--host <host>` | `127.0.0.1` | 閻╂垵鎯夐崷鏉挎絻閿涙盯绮拋銈呭涧缂佹垵鐣鹃張顒佹簚 |

缁€杞扮伐閿?

```bash
mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878
```

閸氼垰濮╅幋鎰閸氬簼绱版潏鎾冲毉 JSON閿涘苯瀵橀崥?`address`閵嗕梗host`閵嗕梗port`閵嗕梗routes` 閸滃苯鐣ㄩ崗銊﹀絹缁€鎭掆偓?

## 鐠侯垳鏁辩憴鍕灟

`serve` 娴兼矮绮?manifest 閻?`modules[].actions[]` 閻㈢喐鍨氶張顒€婀寸捄顖滄暠閿?

```text
/api/<domain>/<action>
```

婵″倹鐏夋稉濠冪埗 API path 娑擃厼瀵橀崥?`{param}`閿涘奔绱版潻钘夊娑撶儤婀伴崷鎷岀熅瀵板嫬寮弫甯窗

```text
娑撳﹥鐖? /v1/org/sites/{siteId}
閺堫剙婀? /api/org/site-detail/:siteId
```

鐠囬攱鐪版潪顒€褰傜憴鍕灟閿?

| manifest method | 閺堫剙婀寸拠閿嬬湴 | 鏉烆剙褰傞崚?APIClient |
|-----------------|----------|------------------|
| `GET` | query string | `client.get(path, { params: query })` |
| `POST` | JSON body | `client.post(path, body)` |

閸欘垳鏁ょ捄顖滄暠閸欐垹骞囬幒銉ュ經閿?

```text
GET /__routes
```

鏉╂柨娲栧В蹇庨嚋鐠侯垳鏁遍惃?`method`閵嗕梗url`閵嗕梗domain`閵嗕梗action` 閸?`description`閵?

## 娑撴艾濮熸い鐢告桨鐠嬪啰鏁ょ粈杞扮伐

```javascript
const res = await fetch('http://127.0.0.1:7878/api/test/whoami', {
  method: 'GET',
})
const data = await res.json()
```

## 濞村鐦い鐢告桨

娴犳挸绨遍崘鍛絹娓氭稐绨℃稉鈧稉顏堟祩娓氭繆绂嗛棃娆愨偓渚€銆夐棃顫礉閻劍娼垫宀冪槈閺堫剙婀寸純鎴濆彠閵嗕浇鐭鹃悽鍗炲絺閻滄澘鎷?`org/platforms` 閹恒儱褰涢弰顖氭儊濮濓絽鐖堕幒銉┾偓姘剧窗

```bash
node packages/cli/bin/run.js serve --project-apis --port 7878
```

然后直接打开 [`examples/serve-dashboard/index.html`](../../../examples/serve-dashboard/index.html)，或用任意本地静态服务打开 `examples/serve-dashboard/` 目录。页面会默认请求 `http://127.0.0.1:7878/__routes` 和 `http://127.0.0.1:7878/api/test/whoami`，并展示 `test` 模块复用 shared whoami 状态逻辑的结果。

婵″倹鐏夋い鐢告桨閺勫墽銇氱拋銈堢槈婢惰精瑙﹂敍灞藉帥鏉╂劘顢?`mbs login`閿涘苯鍟€闁插秵鏌婇崥顖氬З閹存牕鍩涢弬?`mbs serve`閵?

## 鐎瑰鍙忔潏鍦櫕

- `serve` 濞屸剝婀佹０婵嗩樆闁村瓨娼堥敍灞肩窗婢跺秶鏁よぐ鎾冲閺堝搫娅掓稉濠勬畱 CLI 閻ц缍嶉幀浣碘偓?
- 姒涙顓婚崣顏嗘磧閸?`127.0.0.1`閿涘奔绗夌憰浣规暭閹存劕鍙曠純鎴炲灗鐏炩偓閸╃喓缍夐崷鏉挎絻閵?
- CORS 閸欘亜鍘戠拋?`localhost`閵嗕梗127.0.0.1` 閸滃本婀伴崷鐗堟瀮娴犲爼銆夐棃銏㈡畱 `null` origin閵?
- 閺?CLI 娴犲秵妲搁崣顏囶嚢瀹搞儱鍙块敍灞藉涧閸忎浇顔?manifest 娑擃厾娈?`GET` 娑撳孩鐓＄拠銏㈣ `POST`閵?

## 妤犲矁鐦?

```bash
pnpm --filter @mb-it-org/cli test
node packages/cli/bin/run.js serve --manifest fixtures/sample-audit-manifest.json --help
```

## 閸忋劑鍣洪崣顏囶嚢娴狅絿鎮?
婵″倿娓舵稉宥勭贩鐠?audit manifest閿涘瞼娲块幒銉ゅ敩閻炲棔鎹㈤幇蹇庣瑐濞撶褰х拠缁樺复閸欙綇绱濋崣顖涙▔瀵繐绱戦崥顖氬弿闁插繋鍞悶鍡樐佸蹇ョ窗

```bash
mbs serve --proxy-all
```

鐠嬪啰鏁ょ憴鍕灟閿?
```text
GET  /proxy/<upstream-api-path>?key=value
POST /proxy/<upstream-api-path>
```

缁€杞扮伐閿?
```javascript
const res = await fetch('http://127.0.0.1:7878/proxy/erpOrder/erpOrder/saleReport/getPlatformList', {
  method: 'GET',
})
const data = await res.json()
```

`--proxy-all` 娴犲秴褰у鈧弨?`GET` 閸滃本鐓＄拠銏㈣ `POST`閿涘奔绗夋导姘敩閻?`PUT`閵嗕梗PATCH`閵嗕梗DELETE`閵?
## 妞ゅ湱娲伴崘鍛复閸?
婵″倿娓堕幎濠囥€嶉惄顕€鍣峰鑼病鐏忎浇顥婇惃鍕瑹閸斺剝甯撮崣锝呭弿闁劌绱戦弨鍙ヨ礋閺堫剙婀?HTTP 鐠侯垳鏁遍敍?
```bash
mbs serve --project-apis
```

`--proxy-all` 娑旂喍绱伴懛顏勫З瀵偓閸氼垵绻栨禍娑€嶉惄顔煎敶閹恒儱褰涢妴鍌氱秼閸撳秹銆嶉惄顔藉复閸欙絽瀵橀幏顒婄窗

```text
GET /api/org/platforms
GET  /api/test/whoami
GET  /api/database/schemas
GET  /api/database/show-create-table?tableName=<database.table>
POST /api/database/query
GET  /api/org/platforms
GET  /api/org/sites?platform=<ids>
POST /api/org/leaders
POST /api/org/managers
POST /api/org/little-leaders
POST /api/org/shop-managers
POST /api/org/employees
POST /api/org/shops
```

## Manifest-driven project APIs

`--project-apis` reads the generated project manifest built from `manifests/mbs-api-manifest.json`.
Do not add project APIs by hand in `serve`; add or update actions in the manifest, then run:

```bash
pnpm gen:manifest
pnpm build
```

The generated runtime manifest is bundled at `packages/cli/src/serve/generated-manifest.ts`.
`fixtures/*` is only for samples or incremental validation.

