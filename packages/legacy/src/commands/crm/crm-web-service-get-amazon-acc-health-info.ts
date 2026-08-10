// Manually maintained backward-compatibility command.
// Contract source: published @mb-it-org/cli@0.1.58.
import { MBSCommand } from '@mb-it-org/shared';
/**
 * Preserves the published `mbs crm crm-web-service-get-amazon-acc-health-info` read-only contract from CLI 0.1.58.
 *
 * The command keeps the historical flags and sends requests to `/crm-web-service/rpa/getAmazonAccHealthInfo`
 * through the shared authenticated gateway client. It performs no local writes.
 */
export default class CrmCrmWebServiceGetAmazonAccHealthInfo extends MBSCommand {
    static description = '获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。';
    static flags = {};
    /**
     * Parses the historical flags, performs the original read-only request, and emits the shared JSON envelope.
     *
     * @returns A promise that resolves after the response has been written to stdout.
     * @throws Error when flag parsing, authentication, transport, or the upstream API fails; MBSCommand formats it.
     */
    async run(): Promise<void> {
        const { flags } = await this.parse(CrmCrmWebServiceGetAmazonAccHealthInfo);
        const data = await this.client.get('/crm-web-service/rpa/getAmazonAccHealthInfo', { params: {} });
        this.output(data);
    }
}

