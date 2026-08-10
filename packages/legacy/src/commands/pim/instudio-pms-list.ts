// Manually maintained backward-compatibility command.
// Contract source: published @mb-it-org/cli@0.1.58.
import { Flags } from '@oclif/core';
import { MBSCommand } from '@mb-it-org/shared';
/**
 * Preserves the published `mbs pim instudio-pms-list` read-only contract from CLI 0.1.58.
 *
 * The command keeps the historical flags and sends requests to `/yypms/pms/skuManager/list`
 * through the shared authenticated gateway client. It performs no local writes.
 */
export default class PimInstudioPmsList extends MBSCommand {
    static description = '开发中台的列表数据：开发中台的列表数据';
    static flags = {
        skuOper: Flags.string({ description: '开发姓名' }),
        times: Flags.string({ description: '时间 (yyyy-MM)' }),
        position: Flags.integer({ description: '职位' }),
        skuOperList: Flags.string({ description: '开发员 (comma-separated)' }),
        page: Flags.integer({ description: '页码' }),
        pageSize: Flags.integer({ description: '页容量' }),
        directors: Flags.string({ description: '总监 (comma-separated)' }),
        managers: Flags.string({ description: '经理 (comma-separated)' }),
        shopManagerIds: Flags.string({ description: '店长id (comma-separated)' }),
        startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
        area: Flags.string({ description: '区域（字段名推断,语义待核实）' }),
        areaSpecial: Flags.string({ description: '启元人只能看启元的' }),
        companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
        permissionsOperList: Flags.string({ description: '开发员 (comma-separated)' }),
        chartType: Flags.string({ description: '趋势图字段' }),
        gtInductionTime: Flags.string({ description: '入职时间大于' }),
        ltInductionTime: Flags.string({ description: '入职时间小于' }),
        hideSkuOperList: Flags.string({ description: '隐藏开发员 (comma-separated)' }),
        warningIndexList: Flags.string({ description: '警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 (comma-separated)' }),
        exportTitleList: Flags.string({ description: '需要导出的标题头 (comma-separated)' }),
        exportTimeList: Flags.string({ description: '导出使用的时间字段 (comma-separated)' }),
    };
    /**
     * Parses the historical flags, performs the original read-only request, and emits the shared JSON envelope.
     *
     * @returns A promise that resolves after the response has been written to stdout.
     * @throws Error when flag parsing, authentication, transport, or the upstream API fails; MBSCommand formats it.
     */
    async run(): Promise<void> {
        const { flags } = await this.parse(PimInstudioPmsList);
        /**
         * Converts one historical comma-separated flag into the array shape expected by the upstream query API.
         *
         * @param value Raw flag value, or undefined when the caller omitted the flag.
         * @param itemType Element conversion required by the published 0.1.58 request contract.
         * @returns Undefined for an omitted flag; otherwise a trimmed array with blank elements removed.
         */
        const toArray = (value: string | undefined, itemType: 'string' | 'integer' | 'number' = 'string'): unknown[] | undefined => {
            if (value === undefined)
                return undefined;
            const items = value.split(',').map((item) => item.trim()).filter(Boolean);
            if (itemType === 'integer' || itemType === 'number')
                return items.map((item) => Number(item));
            return items;
        };
        const data = await this.client.post('/yypms/pms/skuManager/list', { "skuOper": flags.skuOper, "times": flags.times, "position": flags.position, "skuOperList": toArray(flags.skuOperList, 'string'), "page": flags.page, "pageSize": flags.pageSize, "directors": toArray(flags.directors, 'string'), "managers": toArray(flags.managers, 'string'), "shopManagerIds": toArray(flags.shopManagerIds, 'string'), "startIndex": flags.startIndex, "area": flags.area, "areaSpecial": flags.areaSpecial, "companyId": flags.companyId, "permissionsOperList": toArray(flags.permissionsOperList, 'string'), "chartType": flags.chartType, "gtInductionTime": flags.gtInductionTime, "ltInductionTime": flags.ltInductionTime, "hideSkuOperList": toArray(flags.hideSkuOperList, 'string'), "warningIndexList": toArray(flags.warningIndexList, 'string'), "exportTitleList": toArray(flags.exportTitleList, 'string'), "exportTimeList": toArray(flags.exportTimeList, 'string') });
        this.output(data);
    }
}
