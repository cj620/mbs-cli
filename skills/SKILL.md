---
name: mbs
description: "Use when working with MBS / 椹府 CLI for authentication, CLI version checks, CLI updates, raw API access, or business data queries (org hierarchy, orders, procurement, products, operations, finance)."
metadata:
  requires:
    bins: ["mbs"]
---

# MBS CLI

閫氳繃 `mbs` 鍛戒护鏌ヨ椹府骞冲彴鏁版嵁锛屾垨澶勭悊 CLI 鑷韩鐨勭増鏈笌鏇存柊銆?

## 涓ユ牸绂佹 (NEVER DO)

- 涓嶄娇鐢?`mbs` 浠ュ鐨勬柟寮忚姹?MBS 鏁版嵁锛屼緥濡?`curl` 鎴栨墜鍐?HTTP
- 涓嶇紪閫?ID锛屽繀椤讳粠鍛戒护杩斿洖缁撴灉涓彁鍙?
- 涓嶇寽娴嬪弬鏁板€硷紝鎵ц鍓嶅厛鏌ヨ纭
- **涓嶅湪鎰忓浘涓嶆槑纭椂闈欓粯鎵ц**鈥斺€斿厛娑堟锛屽啀琛屽姩

---

## 妯″潡璺敱琛?

**绗竴姝?*锛氭牴鎹敤鎴锋剰鍥惧叧閿瘝瀹氫綅妯″潡锛?*绗簩姝?*锛氳瀵瑰簲 SKILL.md 鑾峰彇鍛戒护璇︽儏銆?

| 鐢ㄦ埛鎰忓浘鍏抽敭璇嶏紙涓?/ EN锛?                                                                   | 妯″潡  | 璇︾粏鏂囨。                                            |
|---------------------------------------------------------------------------------------------|-------|-----------------------------------------------------|
| 缁勭粐 / 骞冲彴 / 绔欑偣 / 鎬荤洃 / 缁忕悊 / 涓荤 / 搴楅暱 / 鍛樺伐 / org / platform / site / leader / manager | `org`    | [references/org/SKILL.md](references/org/SKILL.md)       |
| 搴楅摵鍋ュ悍 / 璐﹀彿鍋ュ悍 / 鍋ュ悍璇勫垎 / 杩濊 / 鐭ヨ瘑浜ф潈鎶曡瘔 / 鏀跨瓥鍚堣 / Amazon 鍋ュ悍                   | `shops`  | [references/shops/SKILL.md](references/shops/SKILL.md)   |
| Doris / SQL / 鏁版嵁搴?/ 琛ㄧ粨鏋?/ 鏁版嵁鍒嗘瀽 / agent query | `doris`  | [references/doris/SKILL.md](references/doris/SKILL.md) |
| test / whoami / auth status / authentication | `test` | [references/test/SKILL.md](references/test/SKILL.md) |
| 鏇存柊 / 鍗囩骇 / 鐗堟湰 / 鏈夋柊鐗堟湰 / update / upgrade / version / check update                        | `update` | [references/update/SKILL.md](references/update/SKILL.md) |
| <!-- AUTO-GENERATED API MODULES START --> |  |  |
| <!-- AUTO-GENERATED API MODULES END --> |  |  |

> 鍚庣画妯″潡鎸夐渶杩藉姞鍒版琛紝Agent 鍙渶璇绘湰鏂囦欢鍗冲彲瀹屾垚涓€绾ц矾鐢憋紝鏃犻渶鎵弿鍏ㄩ儴鏂囨。銆?

---

## 妯＄硦鎰忓浘娑堟鍗忚

褰撶敤鎴锋剰鍥句笉澶熸槑纭椂锛屾寜浠ヤ笅鍐崇瓥鏍戝鐞嗭紝**绂佹鐚滄祴鍚庣洿鎺ユ墽琛?*銆?

### 鎯呭喌 A 鈥?鍏抽敭璇嶅懡涓?0 涓ā鍧?

鐢ㄦ埛璇寸殑鍐呭涓庤矾鐢辫〃涓换浣曟ā鍧楃殑鍏抽敭璇嶅潎涓嶅尮閰嶃€?

**澶勭悊鏂瑰紡**锛氫粠涓婃柟璺敱琛ㄤ腑鍒楀嚭鎵€鏈夊凡娉ㄥ唽妯″潡锛岃鐢ㄦ埛閫夋嫨銆?

```
鎴戜笉纭畾浣犳兂鏌ュ摢涓笟鍔℃ā鍧楋紝鐩墠鏀寔锛?
- org锛堢粍缁囨灦鏋勶細骞冲彴 / 绔欑偣 / 浜哄憳灞傜骇锛?
- shops锛堝簵閾鸿繍钀ワ細Amazon 璐﹀彿鍋ュ悍 / 杩濊 / 鍚堣璇勫垎锛?
锛堝叾浠栨ā鍧楀紑鍙戜腑锛?

璇烽棶浣犳兂鏌ュ摢涓柟鍚戠殑鏁版嵁锛?
```

> 娉ㄦ剰锛氫笂鏂圭ず渚嬩粎涓烘牸寮忓弬鑰冦€傚疄闄呭洖澶嶆椂锛?*蹇呴』浠ユ湰鏂囦欢璺敱琛ㄤ腑褰撳墠鍒楀嚭鐨勬ā鍧椾负鍑?*锛屼笉瑕佺収鎶勭ず渚嬨€?

### 鎯呭喌 B 鈥?鍏抽敭璇嶅懡涓?鈮?2 涓ā鍧?

鐢ㄦ埛璇寸殑鍐呭鍚屾椂鍖归厤澶氫釜妯″潡鐨勫叧閿瘝锛堜緥濡?鎶ヨ〃"鍦ㄥ涓ā鍧椾腑閮芥湁锛夈€?

**澶勭悊鏂瑰紡**锛氬垪鍑哄懡涓殑鍊欓€夋ā鍧楋紝閫愪竴鎻忚堪鐢ㄩ€旓紝璁╃敤鎴风‘璁ゃ€?

```
"鎶ヨ〃"鍙兘瀵瑰簲浠ヤ笅妯″潡锛岃纭锛?
- orders锛堣鍗曟姤琛細閿€鍞銆佸彂璐ч噺锛?
- finance锛堣储鍔℃姤琛細缁撶畻銆佸洖娆撅級
- procurement锛堥噰璐姤琛細閲囪喘棰濄€佷緵搴斿晢锛?

浣犳兂鏌ュ摢涓紵
```

### 鎯呭喌 C 鈥?妯″潡宸插畾浣嶏紝浣嗗繀濉弬鏁扮己澶?

宸茬‘瀹氱洰鏍囨ā鍧楀拰鍛戒护锛屼絾鎵ц鎵€闇€鐨勫繀濉弬鏁版湭鎻愪緵銆?

**澶勭悊鏂瑰紡**锛氳璇ユā鍧?SKILL.md 涓殑鍛戒护璇存槑锛屾壘鍒扮己澶辩殑蹇呭～鍙傛暟锛?*涓€娆″彧杩介棶涓€涓?*銆?

```
鏌ュ簵閾洪渶瑕佺煡閬撳叕鍙革細
- 1 = 鑳ゅ厓
- 33 = 鍚厓

璇烽棶鏄摢涓叕鍙革紵
```

鍙傛暟纭鍚庡啀鎵ц鍛戒护锛屼笉瑕佹彁鍓嶅亣璁鹃粯璁ゅ€笺€?

### 鎯呭喌 D 鈥?瀹屽叏娌℃湁涓氬姟涓婁笅鏂?

鐢ㄦ埛鎰忓浘鏋佸叾妯＄硦锛屾棤娉曞垽鏂槸鍚︿笌 MBS 鏁版嵁鐩稿叧锛堜緥濡?甯垜鐪嬬湅鎯呭喌"锛夈€?

**澶勭悊鏂瑰紡**锛氬厛纭鐢ㄦ埛鏄惁闇€瑕佹煡璇?MBS / 椹府 鏁版嵁锛屽啀杩涘叆鎯呭喌 A 鐨勬祦绋嬨€?

```
浣犳槸鍚︽兂鏌ヨ椹府骞冲彴鐨勬暟鎹紵濡傛灉鏄紝璇峰憡璇夋垜澶ф鎯崇湅浠€涔堟柟鍚戙€?
```

---

## 鍏ㄥ眬鍙傝€?

璁よ瘉閰嶇疆 / 鐗堟湰鏇存柊 / 杈撳嚭鏍煎紡 / 閫€鍑虹爜 / `raw` 鐩撮€氬懡浠?/ `serve` 鏈湴 HTTP 缃戝叧 鈫?[references/global.md](references/global.md)

---

## 鎰忓浘璺敱瑙勫垯

1. **涓氬姟鏁版嵁鏌ヨ**锛氭煡妯″潡璺敱琛?鈫?鍛戒腑 1 涓ā鍧楀垯璇诲叾 SKILL.md 鈫?鎵ц鍛戒护
2. **鍛戒腑 0 鎴?鈮? 涓ā鍧?*锛氳Е鍙戞秷姝у崗璁紙瑙佷笂鏂癸級
3. **璁よ瘉 / raw / serve**锛氱洿鎺ョ湅 [references/global.md](references/global.md)锛?*鐗堟湰 / 鏇存柊**锛氭煡璺敱琛?`update` 妯″潡 鈫?[references/update/SKILL.md](references/update/SKILL.md)
4. **鎵句笉鍒板搴旀ā鍧?*锛氬憡鐭ョ敤鎴疯妯″潡灏氭湭灏佽锛屽彲鐢?`mbs raw GET <endpoint>` 鎺㈢储鍘熷鎺ュ彛
