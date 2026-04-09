import { Flags } from "@oclif/core";
import { MBSCommand } from "@mbs/shared";

export default class OrgLeaders extends MBSCommand {
  static description = "List leaders (总监下拉)";

  static flags = {
    company: Flags.string({ description: "Company ID (1=胤元, 33=启元)" }),
    platform: Flags.string({ description: "Platform ID" }),
    type: Flags.string({ description: "Employee type: 1=sales, 2=dev" }),
    keyword: Flags.string({ description: "Search keyword" }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(OrgLeaders);
    const data = await this.client.post(
      "/teamDropDown/leaderDropDown",
      {
        companyIds: [Number(flags.company)],
        platformIds: [flags.platform],
        employeeType: flags.type,
        keyWord: flags.keyword ?? "",
      },
      { pathPrefix: "/erpOrder/erpOrder" },
    );
    this.output(data);
  }
}
