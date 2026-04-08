import { Flags } from "@oclif/core";
import { MBSCommand } from "@mbs/skill-shared";

export default class OrgManagers extends MBSCommand {
  static description = "List managers (经理下拉)";

  static flags = {
    company: Flags.string({ description: "Company ID (1=胤元, 33=启元)" }),
    platform: Flags.string({ description: "Platform ID" }),
    leaders: Flags.string({ description: "Leader IDs, comma-separated" }),
    type: Flags.string({ description: "Employee type: 1=sales, 2=dev" }),
    keyword: Flags.string({ description: "Search keyword" }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(OrgManagers);
    const buildArray = (val?: string) => val?.split(",").map((v) => v.trim()) ?? [];
    const data = await this.client.post(
      "/teamDropDown/managerDropDown",
      {
        companyIds: flags.company ? [Number(flags.company)] : [],
        platformIds: buildArray(flags.platform),
        leaders: buildArray(flags.leaders),
        employeeType: flags.type,
        keyWord: flags.keyword ?? "",
      },
      { pathPrefix: "/erpOrder/erpOrder" },
    );
    this.output(data);
  }
}
