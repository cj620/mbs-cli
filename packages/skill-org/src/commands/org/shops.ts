import { Flags } from "@oclif/core";
import { MBSCommand } from "@mbs/skill-shared";

export default class OrgShops extends MBSCommand {
  static description = "List shops (店铺下拉)";

  static flags = {
    company: Flags.string({
      description: "Company ID (1=胤元, 33=启元)",
      required: true,
    }),
    platform: Flags.string({ description: "Platform ID" }),
    leaders: Flags.string({ description: "Leader IDs, comma-separated" }),
    managers: Flags.string({ description: "Manager IDs, comma-separated" }),
    littleLeaders: Flags.string({
      description: "Little Leader IDs, comma-separated",
    }),
    shopManagers: Flags.string({
      description: "Shop Manager IDs, comma-separated",
    }),
    keyword: Flags.string({ description: "Search keyword (shop name)" }),
    status: Flags.string({ description: "Operation status: 1=运营中" }),
    rank: Flags.string({ description: "Rank/level filter" }),
    page: Flags.integer({ description: "Page number", default: 1 }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(OrgShops);

    const buildArray = (val?: string) =>
      val?.split(",").map((v) => v.trim()) ?? [];

    const data = await this.client.post(
      "/teamDropDown/shopDropDown",
      {
        companyIds: [Number(flags.company)],
        platformIds: buildArray(flags.platform),
        leaders: buildArray(flags.leaders),
        managers: buildArray(flags.managers),
        littleLeaders: buildArray(flags.littleLeaders),
        shopManagers: buildArray(flags.shopManagers),
        keyWord: flags.keyword ?? "",
        operatestatus: flags.status,
        rank: flags.rank,
        page: flags.page,
        shopNameList: [],
      },
      { pathPrefix: "/erpOrder/erpOrder" },
    );
    this.output(data);
  }
}
