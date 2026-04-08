import { Flags } from "@oclif/core";
import { MBSCommand } from "@mbs/skill-shared";

export default class OrgEmployees extends MBSCommand {
  static description = "List employees / team numbers (员工/团队编号下拉)";

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
    managers: Flags.string({
      description: "Manager IDs, comma-separated",
      required: true,
    }),
    littleLeaders: Flags.string({
      description: "Little Leader IDs, comma-separated",
      required: true,
    }),
    shopManagers: Flags.string({
      description: "Shop Manager IDs, comma-separated",
      required: true,
    }),
    type: Flags.string({ description: "Employee type: 1=sales, 2=dev" }),
    keyword: Flags.string({ description: "Search keyword" }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(OrgEmployees);
    const data = await this.client.post(
      "/teamDropDown/teamNumberDropDown",
      {
        companyIds: [Number(flags.company)],
        platformIds: [flags.platform],
        leaders: flags.leaders.split(",").map((l) => l.trim()),
        managers: flags.managers.split(",").map((m) => m.trim()),
        littleLeaders: flags.littleLeaders.split(",").map((l) => l.trim()),
        shopManagers: flags.shopManagers.split(",").map((s) => s.trim()),
        employeeType: flags.type,
        keyWord: flags.keyword ?? "",
      },
      { pathPrefix: "/erpOrder/erpOrder" },
    );
    this.output(data);
  }
}
