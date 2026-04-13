import { MBSCommand } from '@mb-it-org/shared'

interface Screenshot {
  fileTime: string
  ossPath: string
}

interface ShopHealth {
  dates: string
  policyCompliance: string
  accountHealthRating: number
  suspectedIntellectualPropertyViolation: number
  intellectualPropertyComplaint: number
  productAuthenticitycomplaint: number
  productConditionComplaint: number
  foodAndProductSafetyIssue: number
  listingPolicyViolation: number
  restrictedProductPolicyViolation: number
  customerReviewPolicyViolation: number
  otherPolicyViolation: number
  regulatoryCompliance: number
}

interface ShopHealthItem {
  shopName: string
  screenshot: Screenshot
  health: ShopHealth
}

interface HealthResponse {
  code: number
  message: string
  data: ShopHealthItem[]
}

export default class ShopsHealth extends MBSCommand {
  static description = 'Get Amazon shop account health info (账号健康信息)'

  static examples = [
    '<%= config.bin %> shops health',
    '<%= config.bin %> shops health | jq \'.data[] | {shop: .shopName, rating: .health.accountHealthRating}\'',
  ]

  async run(): Promise<void> {
    await this.parse(ShopsHealth)
    const result = await this.client.get<HealthResponse>(
      '/gateway/crm-web-service/rpa/getAmazonAccHealthInfo',
    )
    this.output(result.data, { total: result.data.length })
  }
}
