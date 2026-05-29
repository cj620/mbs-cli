# MBS CLI

閸忣剙寰冮崘鍛村劥閻㈤潧鏅㈢粻锛勬倞缁崵绮洪惃鍕嚒娴犮倛顢戝銉ュ徔閿涘苯鐨㈡す顒€搴滈獮鍐插酱閻ㄥ嫪绗熼崝鈩冩殶閹诡喕浜掔紒鎾寸€崠?JSON 鏉堟挸鍤敍灞炬暜閹镐浇鍓奸張顒勬肠閹存劕鎷?AI agent 鐠嬪啰鏁ら妴?

> **If you are an AI agent:** 鐏炴洖绱戞稉瀣煙閵嗗瓑I Agent 閹恒儱鍙嗛幐鍥у础閵嗗稄绱濋幐澶嬵劄妤犮倖澧界悰灞界暚閹存劖甯撮崗銉礉娑撳秷顩︾捄瀹犵箖閵?

<details>
<summary><strong>AI Agent 閹恒儱鍙嗛幐鍥у础閿涘牏鍋ｉ崙璇茬潔瀵偓閿?/strong></summary>

## 闁倻鏁ょ€电钖?

- 閺傛壆鏁搁懘鎴炲灗閺堫亪鍘ょ純顔跨箖 `mbs` 閻ㄥ嫮骞嗘晶?
- 閸忓嘲顦?shell 閹笛嗩攽閼宠棄濮忛惃鍕矒缁旑垰鐎?AI agent
- 闂団偓鐟曚焦鐓＄拠?MBS 娑撴艾濮熼弫鐗堝祦閿涘苯鑻熸担璺ㄦ暏閺堫兛绮ㄦ惔?`skills/` 閺傚洦銆傛担婊€璐熷銉ょ稊娑撳﹣绗呴弬鍥╂畱娴滅儤鍨?agent

## Agent 閹笛嗩攽閸樼喎鍨?

- 閸忓牊顥呴弻銉у箛閻樿绱濋崘宥呯暔鐟佸懐宸辨径閬嶃€嶉敍灞肩瑝鐟曚線鍣告径宥呯暔鐟?
- 娑撴艾濮熼弻銉嚄缂佺喍绔撮柅姘崇箖 `mbs`閿涘奔绗夌憰浣烘暏 `curl` 閹存牗澧滈崘?HTTP
- 娑撳秶瀵?API 鐠侯垰绶為妴涓閵嗕礁寮弫鏉库偓纭风幢韫囧懘銆忛崗鍫熺叀閸涙垝鎶ら崪宀冪箲閸ョ偟绮ㄩ弸?
- `mbs` 閸涙垝鎶ゆ径杈Е閺冭泛鍘涢惇瀣波閺嬪嫬瀵?JSON 閻?`error.hint`
- 闁偓閸戣櫣鐖?`2` 鐞涖劎銇氱拋銈堢槈婢惰鲸鏅ラ敍灞界安閹绘劗銇氶幋鏍ㄥ⒔鐞?`mbs login`
- CLI 鐎瑰顥婇崪?skill 閹恒儱鍙嗛弰顖欒⒈娴犳湹绨ㄩ敍姘閼板懓袙閸愬啿鎳℃禒銈呭讲閻㈩煉绱濋崥搴も偓鍛靶掗崘?agent 婵″倷缍嶅锝団€樻担璺ㄦ暏閸涙垝鎶?

## 娑撶粯绁︾粙?

### Step 1: 閸掋倖鏌囬弰顖氭儊娴兼ê鍘涢幒銉ュ弳 Agent Skill

閸忓牆灏崚鍡樼濡ゆ矮绗佹禒鏈电皑閿?

- `CLI 瀹告彃鐣ㄧ憗鍗勯敍姝歮bs` 閸涙垝鎶ら弰顖氭儊閸欘垱澧界悰?
- `鐠併倛鐦夊鎻掔暚閹存亝閿涙瓪mbs whoami` 閺勵垰鎯佸锝呯埗鏉╂柨娲?
- `agent skill 瀹稿弶甯撮崗顧﹂敍姝沢ent 閺勵垰鎯佸鍙夊瘯鏉炶姤鍨ㄧ拠璇插絿 `skills/` 閺傚洦銆傛担婊€璐熸禒璇插鐟欏嫮瀹?

婵″倹鐏夎ぐ鎾冲楠炲啿褰撮弨顖涘瘮閺堫剙婀?skill / prompts / tool docs 濞夈劌鍞介張鍝勫煑閿涘奔绱崗鍫熷Ω娴犳挸绨?`skills/` 閻╊喖缍嶉幒銉ュ弳楠炲啿褰撮柊宥囩枂閿涘苯鍟€缂佈呯敾閸氬海鐢诲銉╊€冮妴?

### Step 2: 濡偓閺屻儱鐔€绾偓閻滎垰顣?

```bash
node -v    # 闂団偓鐟?>= 18
npm -v
```

`node` 閹?`npm` 娑撳秴鐡ㄩ崷銊︽閸忓牆鐣ㄧ憗?Node.js 18 LTS閿涘苯鍟€缂佈呯敾閵?

### Step 3: 鐎瑰顥?CLI

```bash
npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/
```

> 瀹歌尙鐓?`https://registry.npmmirror.com` 閸欘垵鍏樼紓鎾崇摠閺冄呭 `0.1.25`閿涘牆鎯?`workspace:*` 娓氭繆绂嗛敍灞界暔鐟佸懏濮?`EUNSUPPORTEDPROTOCOL`閿涘绱濈拠铚傚▏閻?npm 鐎规ɑ鏌熷┃鎰┾偓?

婵″倹鐏?`mbs` 瀹告彃鐣ㄧ憗鍜冪礉鐠哄疇绻冨銈嗩劄閿涘本澧界悰?`mbs update` 閸楀啿褰查妴?

### Step 4: 绾喛顓婚惂璇茬秿濞村繗顫嶉崳銊ュ讲閻?

`mbs login` 娴兼矮绱崗鍫滃▏閻劎閮寸紒鐔峰嚒閺堝娈?Chrome閿涘苯鍙惧▎?Edge閵嗗倷绔撮懜顒€濮欓崗顒傚箚婢у啫鍑￠張澶嬬セ鐟欏牆娅掗敍灞肩瑝闂団偓鐟曚線顤傛径鏍у櫙婢跺洦绁荤憴鍫濇珤鏉╂劘顢戦弮韬测偓?

閸欘亝婀侀崷銊ч兇缂?Chrome / Edge 闁垝绗夐崣顖滄暏閿涘奔绗?`mbs login` 閺勫海鈥橀幓鎰仛缂傚搫鐨ù蹇氼潔閸ｃ劏绻嶇悰灞炬閺冭绱濋幍宥嗗瘻闁挎瑨顕ら幓鎰仛鐞涖儵缍堟潻鎰攽閺冭翰鈧倷绗夌憰浣告躬闂冨懓顕伴弬鍥ㄣ€傞幋鏍箚婢у啯顥呴弻銉╂▉濞堝吀瀵岄崝銊ョ暔鐟佸懌鈧?

### Step 5: 閻ц缍嶉獮鍫曠崣鐠囦浇顓荤拠?

```bash
mbs login    # 閹峰鎹ｉ崣妤佸付濞村繗顫嶉崳顭掔礉鐎瑰本鍨氶惂璇茬秿閸?CLI 閹绘劕褰囩拋銈堢槈 key
mbs whoami   # 绾喛顓荤拋銈堢槈閻樿埖鈧?
```

妫板嫭婀￠敍姝歮bs whoami` 鏉╂柨娲?`ok: true`閿涘苯鎯堥悽銊﹀煕娣団剝浼呴妴鍌濆鏉╂柨娲?`ok: false` 閹存牠鈧偓閸戣櫣鐖?`2`閿涘矂鍣搁弬鐗堝⒔鐞?`mbs login`閵?

### Step 6: 閹恒儱鍙?Skill 閺傚洦銆?

Skill 閺傚洦銆傞梾?CLI 閹垫挸瀵橀崣鎴濈閿涘本娲块弬?CLI 閸楀啿鎮撳銉︽纯閺傜増鏋冨锝嗘瀮娴犺绱辨担?**agent 娴兼俺鐦介崘鍛畱閺冄呯处鐎涙﹢娓舵稉璇插З閸掗攱鏌?*閵?

**閺傜懓绱?1閿涘牊甯归懡鎰剁礆閿涙艾鐣ㄧ憗鍛煂 agent 楠炲啿褰?*

```bash
mbs skills install                  # 閼奉亜濮╃€瑰顥婇崚鏉垮嚒濡偓濞村鍩岄惃?Claude/Codex
mbs skills install --target claude  # 鐎瑰顥婇崚?~/.claude/skills/mbs/
mbs skills install --target codex   # 鐎瑰顥婇崚?~/.codex/skills/mbs/
```

閸涙垝鎶ゆ导姘Ω npm 閸栧懎鍞寸純顔炬畱 `skills/` 鐎瑰本鏆ｆ径宥呭煑娑撳搫閽╅崣?skill 閻╊喖缍嶉敍灞肩伐婵?`~/.claude/skills/mbs/SKILL.md`閿涘苯鑻熸穱婵堟殌 `references/` 缁涘顕涚紒鍡樻瀮濡楋絿绮ㄩ弸鍕┾偓鍌氱暔鐟佸懎鎮楅柌宥呮儙閹存牕鍩涢弬?agent 娴兼俺鐦介敍宀冾唨楠炲啿褰撮柌宥嗘煀閸旂姾娴?skill閵?

閺囧瓨鏌?CLI 閸氬函绱濋柌宥嗘煀鏉╂劘顢戠€瑰顥婇崨鎴掓姢閸楀啿褰茬憰鍡欐磰閺堫剙婀?agent skill閿?

```bash
npm update -g @mb-it-org/cli
mbs skills install
```

婵″倸褰ч弴瀛樻煀閹稿洤鐣鹃獮鍐插酱閿?

```bash
mbs skills install --target claude
mbs skills install --target codex
```

**閺傜懓绱?2閿涘牆顦柅澶涚礆閿涙俺顕伴崣鏍у煂瑜版挸澧犳导姘崇樈娑撳﹣绗呴弬?*

```bash
mbs skills show                                    # 鐠囪褰囨稉璇插弳閸?SKILL.md閿涘牆绻€鐠囦紮绱?
mbs skills show --file references/global.md        # 鐠囪褰囬崗銊ョ湰閸欏倽鈧喛绱欒箛鍛邦嚢閿?mbs skills show --file references/org/SKILL.md    # 閹稿娓堕敍灞剧Ч閸欏﹦绮嶇紒鍥ㄧ仸閺嬪嫭妞傜拠璇插絿
mbs skills show --file references/shops/SKILL.md  # 閹稿娓堕敍灞剧Ч閸欏﹤绨甸柧楦跨箥閽€銉︽鐠囪褰?mbs skills show --file references/doris/SKILL.md  # 閹稿娓堕敍灞剧Ч閸?Doris / SQL 閺佺増宓侀幒銏㈠偍閺冩儼顕伴崣?```

**閺傜懓绱?3閿涘牅绮ㄦ惔鎾虫躬閺堫剚婧€閺冭绱氶敍?*

- [`skills/SKILL.md`](skills/SKILL.md)
- [`skills/references/global.md`](skills/references/global.md)
- 閹稿娓堕敍姝歴kills/references/org/*`閵嗕梗skills/references/shops/*`閵嗕梗skills/references/doris/*`

### Step 7: 妤犲本鏁?

闁劖娼幍褑顢戦敍灞藉弿闁劑鈧俺绻冮幍宥囩暬鐎瑰本鍨氶敍?

```bash
node -v           # v18.x 閸欏﹣浜掓稉?
npm -v            # 閺堝澧楅張顒€褰挎潏鎾冲毉
mbs version       # 鏉╂柨娲?JSON閿涘苯鎯堥悧鍫熸拱閸?
mbs whoami        # ok: true閿涘苯鎯堥悽銊﹀煕娣団剝浼?
mbs skills show   # ok: true閿涘苯鎯?SKILL.md 閸愬懎顔?
mbs org platforms # ok: true閿涘苯鎯堥獮鍐插酱閺佺増宓?
```

**agent skill 閹恒儱鍙嗛悩鑸碘偓?*閿涘牊鐗撮幑顔奸挬閸欐壆鈥樼拋銈忕礆閿?
- 楠炲啿褰村鍙夊瘯鏉?`skills/`閿涘本鍨?
- agent 娴兼俺鐦芥稉顓炲嚒鐠囪褰?`skills/SKILL.md` 娑?`skills/references/global.md`

## Bootstrap 閹绘劗銇氱拠?

閸欘垳娲块幒銉ヮ槻閸掑墎绮?AI agent閿?

```text
娴ｇ姷骞囬崷銊ㄧ鐠愶絾濡告潻娆忓酱閻絻鍓抽崙鍡楊槵閹存劕褰查悽銊ф畱 MBS CLI 瀹搞儰缍旈悳顖氼暔閿涘苯鑻熼幒銉ュ弳瑜版挸澧犳禒鎾崇氨闁插瞼娈?skill 閺傚洦銆傞妴?

鐠囬攱瀵滄稉瀣桨鐟欏嫬鍨幍褑顢戦敍?
1. 閸忓牆鍨介弬顓炵秼閸?agent 楠炲啿褰撮弰顖氭儊閺€顖涘瘮閺堫剙婀?skill / prompt / tool docs 濞夈劌鍞介敍娑橆洤閺嬫粍鏁幐渚婄礉娴兼ê鍘涢幎濠傜秼閸撳秳绮ㄦ惔鎾舵畱 skills/ 閹恒儱鍙嗛崚?agent 閼奉亜绻侀惃?skill 閺堝搫鍩楁稉顓溾偓?
2. 閺勫海鈥橀崠鍝勫瀻楠炶泛鍨庨崚顐ｇ湽閹躲儰绗佹禒鏈电皑閿涙LI 瀹告彃鐣ㄧ憗鍛偓浣筋吇鐠囦礁鍑＄€瑰本鍨氶妴涔ent skill 瀹稿弶甯撮崗銉ｂ偓?
3. 濡偓閺屻儲妲搁崥锕€鍑＄€瑰顥?Node.js 閸?npm閿涙稑顩ч弸婊呭繁婢舵唻绱濈€瑰顥?Node.js 18+閿涘奔绱崗鍫濈秼閸?LTS閵?
4. 濡偓閺屻儲妲搁崥锕€鍑＄€瑰顥?mbs閿涙稑顩ч弸婊勭梾閺堝绱濋幍褑顢?npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/閵?
5. 婵″倹鐏夐獮鍐插酱娑撳秵鏁幐?skill 閹稿倽娴囬敍宀冨殾鐏忔垼顕伴崣鏍х秼閸撳秳绮ㄦ惔鎾茶厬閻?skills/SKILL.md 娑?skills/references/global.md閿涙稑顩ч弸婊€鎹㈤崝鈩冪Ч閸欏﹦绮嶇紒鍥ㄧ仸閺嬪嫸绱濋崘宥堫嚢閸?skills/references/org/*閵?
6. 娑撳秷顩︽稉璇插З鐎瑰顥婂ù蹇氼潔閸ｃ劏绻嶇悰灞炬閿涙盯绮拋銈勫▏閻劎閮寸紒鐔峰嚒閺?Chrome/Edge閿涘苯褰ч張?mbs login 閺勫海鈥橀幎銉у繁鐏忔垶绁荤憴鍫濇珤鏉╂劘顢戦弮鑸垫閹靛秷顕╅弰搴ㄦ▎婵夌偟鍋ｉ妴?
7. 閹笛嗩攽 mbs login閿涘瞼鍔ч崥搴ょ箥鐞?mbs version 閸?mbs whoami閿涘苯鑻熺憴锝夊櫞鏉╂柨娲栫紒鎾寸亯閵?
8. 婵″倹鐏?mbs whoami 閺勫墽銇氶張顏嗘瑜版洘鍨ㄩ柅鈧崙铏圭垳娑?2閿涘矂鍣搁弬鐗堝⒔鐞?mbs login閿涘苯鍟€濞嗭繝鐛欑拠浣碘偓?
9. 鏉╂劘顢戦張鈧紒鍫ョ崣閺€璺烘嚒娴犮倧绱皀ode -v閵嗕苟pm -v閵嗕沟bs version閵嗕沟bs whoami閵嗕沟bs skills show閿涙稑顩ч弸婊嗩吇鐠囦礁褰查悽顭掔礉閸愬秷藟閸?mbs org platforms閵?
10. 婵″倹鐏夐柆鍥у煂閺夊啴妾洪梻顕€顣介妴浣虹秹缂佹粓妫舵０妯糕偓涓矨TH 閺堫亞鏁撻弫鍫涒偓浣哄繁鐏忔垶绁荤憴鍫濇珤鏉╂劘顢戦弮鑸靛灗鐠併倛鐦夋径杈Е閿涘本妲戠涵顔款嚛閺勫酣妯嗘繅鐐靛仯閸滃苯缂撶拋顔碱槱閻炲棙鏌熷蹇ョ礉娑撳秷顩︾捄瀹犵箖閵?

娑撴艾濮熼弻銉嚄閺冭泛褰ч崗浣筋啅娴ｈ法鏁?mbs閿涘奔绗夌憰浣规暭閻?curl閿涘奔绡冩稉宥堫洣閻?API 鐠侯垰绶為妴浣稿棘閺佺増鍨?ID閵?
```

## 閺佸懘娈版径鍕倞

### `mbs` 閸涙垝鎶ゆ稉宥呯摠閸?

1. 绾喛顓婚弰顖氭儊閹笛嗩攽鏉?`npm install -g @mb-it-org/cli`
2. 濡偓閺?npm 閸忋劌鐪€瑰顥婇惄顔肩秿閺勵垰鎯佸鎻掑閸?PATH
3. 闁插秵鏌婇幍鎾崇磻 shell 閸氬骸鍟€濞嗏剝澧界悰?`mbs version`

### PATH 閺堫亞鏁撻弫?

npm 閸忋劌鐪€瑰顥婄€瑰本鍨氭担鍡楃秼閸?shell 閹靛彞绗夐崚?`mbs`閿涙岸鍣搁弬鐗堝ⅵ瀵偓缂佸牏顏敍灞惧灗濡偓閺?npm global bin 閻╊喖缍嶉弰顖氭儊閸?PATH 娑擃厹鈧?

### 閻ц缍嶅ù蹇氼潔閸ｃ劏绻嶇悰灞炬缂傚搫銇?

閻滄媽钖勯敍姝歮bs login` 閹?browser executable 娑撳秴鐡ㄩ崷?/ 閹靛彞绗夐崚鏉垮讲閻劍绁荤憴鍫濇珤閵?

婢跺嫮鎮婇敍姘帥绾喛顓荤化鑽ょ埠 Chrome 閹?Edge 閺勵垰鎯侀崣顖滄暏閿涙稑顩ч弸婊€绮涙稉宥呭讲閻㈩煉绱濋崘宥嗗瘻 `mbs login` 閻ㄥ嫰鏁婄拠顖涘絹缁€楦克夋鎰セ鐟欏牆娅掓潻鎰攽閺冭翰鈧?

### npm 閸忋劌鐪€瑰顥婇弮鐘虫綀闂?

娴ｈ法鏁ら崗宄邦槵閺夊啴妾洪惃鍕矒缁旑垶鍣搁弬鐗堝⒔鐞涘矉绱濋幋鏍ㄥ瘻瑜版挸澧犻張鍝勬珤閻?npm 闁板秶鐤嗙拫鍐╂殻閸忋劌鐪€瑰顥婇惄顔肩秿閵嗕繘gent 闂団偓閺勫海鈥樼拠瀛樻閺?閺夊啴妾洪梼璇差敚"閿涘奔绗夌憰浣筋嚖閹躲儲鍨氱€瑰顥婇幋鎰閵?

### 鐠併倛鐦夋径杈ㄦ櫏閿涘牓鈧偓閸戣櫣鐖?2閿?

```bash
mbs login
mbs whoami
```

### 閻楀牊婀伴弴瀛樻煀婢惰精瑙?

鐢瓕顫嗛崢鐔锋礈閿涙pm registry 娑撳秴褰叉潏?/ GitHub API 闂勬劖绁?/ `GITHUB_TOKEN` 閺冪姵鏅?/ 閺冪姵娼堟穱顔芥暭閸忋劌鐪€瑰顥婇惄顔肩秿閵?

閸欏倽鈧?[`packages/cli/docs/version-and-update.md`](packages/cli/docs/version-and-update.md)閵?

</details>

---

## 閸旂喕鍏樺鍌濐潔

| 濡€虫健 | 閸涙垝鎶ら崜宥囩磻 | 閻劑鈧?|
|------|---------|------|
| org | `mbs org` | 缂佸嫮绮愰弸鑸电€敍姘挬閸欒埇鈧胶鐝悙骞库偓浣光偓鑽ゆ磧閵嗕胶绮￠悶鍡愨偓浣峰瘜缁犅扳偓浣哥暗闂€瑁も偓浣哥暗闁炬亽鈧礁鎲冲?|
| shops | `mbs shops` | 鎼存鎽垫潻鎰儉閿涙mazon 鐠愶箑褰块崑銉ユ倣閵嗕浇绻氱憴鍕埠鐠伮扳偓浣告値鐟欏嫯鐦庨崚?|
| doris | `mbs doris` | Doris 閺佺増宓佹惔鎾村赴缁鳖澀绗岄崣顏囶嚢 SQL 閺屻儴顕楅敍姘氨鐞涖劌鍨悰銊ｂ偓浣哥紦鐞涖劏顕㈤崣銉ｂ偓浣圭ウ瀵?SELECT 閺屻儴顕?|
| update | `mbs version` / `mbs update` | CLI 閻楀牊婀板Λ鈧弻銉ょ瑢閺囧瓨鏌?|
| serve | `mbs serve` | 閺堫剙婀?HTTP 缂冩垵鍙ч敍宀冾唨娑撴艾濮熸い鐢告桨娴滃本顐煎鈧崣鎴炴婢跺秶鏁?CLI 鐠併倛鐦夐弻銉嚄 manifest 娑擃厾娈戦崣顏囶嚢閹恒儱褰?|

---

## 韫囶偊鈧喎绱戞慨?

**鐎瑰顥?*閿涘牓娓?Node.js 18+閿涘绱?

```bash
npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/
```

**閻ц缍?*閿?

```bash
mbs login
```

> 姒涙顓绘担璺ㄦ暏缁崵绮哄鍙夋箒 Chrome/Edge 鐎瑰本鍨氶惂璇茬秿閿涙盯鈧艾鐖舵稉宥夋付鐟曚線顤傛径鏍х暔鐟佸懏绁荤憴鍫濇珤鏉╂劘顢戦弮韬测偓?

**妤犲矁鐦?*閿?

```bash
mbs whoami        # 绾喛顓荤拋銈堢槈閻樿埖鈧?
mbs org platforms # 閼惧嘲褰囬獮鍐插酱閸掓銆冮敍宀勭崣鐠囦椒绗熼崝鈩冩殶閹诡喖褰叉潏?
```

**娑撴艾濮熸い鐢告桨娴滃本顐煎鈧崣鎴礄閸欘垶鈧绱?*閿?

```bash
mbs serve --manifest fixtures/sample-audit-manifest.json
```

閸氼垰濮╅崥搴ㄧ帛鐠併倗娲冮崥?`http://127.0.0.1:7878`閿涘苯鑻熸禒?audit manifest 閻㈢喐鍨?`/api/<domain>/<action>` 鐠侯垳鏁遍妴鍌氬缁旑垶銆夐棃銏犲讲娴犮儳娲块幒銉嚞濮瑰倽绻栨稉顏呮拱閸︽壆缍夐崗绛圭礉閹跺﹤鍑＄亸浣筋棅閻ㄥ嫪绗熼崝鈩冨复閸欙絿绮嶉崥鍫熷灇閸愬懘鍎撮惇瀣緲閵嗕浇绶熼崝鈺勭箥閽€銉┿€夐棃銏″灗娑撳瓨妞傞崚鍡樼€芥い鐢告桨閿涘本妫ら棁鈧崷銊┿€夐棃銏ゅ櫡闁插秵鏌婄€圭偟骞囨す顒€搴滈惂璇茬秿閵嗕竼ookie 閸掗攱鏌婇崪?API 鏉烆剙褰傞妴鍌涚叀閻?[packages/cli/docs/serve.md](packages/cli/docs/serve.md) 娴滃棜袙鐠侯垳鏁辩憴鍕灟閸滃苯鐣ㄩ崗銊ㄧ珶閻ｅ被鈧?

需要快速验证本地接口服务时，可以启动网关后打开 [examples/serve-dashboard/index.html](examples/serve-dashboard/index.html)。该测试页面会检查 `/__routes` 和 `/api/test/whoami`，并展示 `test` 模块复用 `whoami` 认证状态逻辑的结果。

---

## 鏉堟挸鍤弽鐓庣础

閹碘偓閺堝鎳℃禒銈囩埠娑撯偓鏉堟挸鍤紒鎾寸€崠?JSON閿?

```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

娓氬顦婚敍姝歮bs doris query` 娴兼氨娲块幒銉┾偓蹇庣炊閺堝秴濮熺粩?NDJSON 濞翠緤绱濇笟澶哥艾 agent 婢х偤鍣哄☉鍫ｅ瀭婢堆呯波閺嬫粓娉﹂妴?
闁偓閸戣櫣鐖滈敍姝?` 閹存劕濮?/ `1` 閸欏倹鏆熼幋?API 闁挎瑨顕?/ `2` 鐠併倛鐦夋径杈ㄦ櫏閿涘牓娓堕柌宥嗘煀 `mbs login`閿?
---

## 閺傚洦銆傜槐銏犵穿

| 閺傚洦銆?| 閻劑鈧?|
|------|------|
| [skills/SKILL.md](skills/SKILL.md) | 娑撴艾濮熷Ο鈥虫健鐠侯垳鏁辨稉搴℃嚒娴犮倝鈧喐鐓?|
| [AGENTS.md](AGENTS.md) | 瀵偓閸欐垶婀版い鍦窗閺冨墎娈?AI agent 閸楀繋缍旂憴鍕瘱 |
| [packages/cli/docs/serve.md](packages/cli/docs/serve.md) | `mbs serve` 閺堫剙婀?HTTP 缂冩垵鍙х拠瀛樻 |
| [packages/cli/docs/version-and-update.md](packages/cli/docs/version-and-update.md) | 閻楀牊婀版稉搴㈡纯閺傜増婧€閸掓儼顕涚憴?|
| [packages/org/docs/overview.md](packages/org/docs/overview.md) | `mbs org` 鐎瑰本鏆ｉ崨鎴掓姢閸欏倽鈧?|

