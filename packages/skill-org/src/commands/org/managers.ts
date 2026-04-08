import { Flags } from "@oclif/core";
import { MBSCommand } from "@mbs/skill-shared";

export default class OrgManagers extends MBSCommand {
  static description = "List managers (经理下拉)";

  static flags = {
    company: Flags.string({
      description: "Company ID (1=胤元, 33=启元)",
      required: true,
    }),
    platform: Flags.string({ description: "Platform ID", required: true }),
    leaders: Flags.string({
      description: "Leader IDs, comma-separated",
      required: true,
    }),
    type: Flags.string({ description: "Employee type: 1=sales, 2=dev" }),
    keyword: Flags.string({ description: "Search keyword" }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(OrgManagers);
    const data = await this.client.post(
      "/teamDropDown/managerDropDown",
      {
        companyIds: [Number(flags.company)],
        platformIds: [flags.platform],
        leaders: flags.leaders.split(",").map((l) => l.trim()),
        employeeType: flags.type,
        keyWord: flags.keyword ?? "",
      },
      { pathPrefix: "/erpOrder/erpOrder" },
    );
    this.output(data);
  }
}
