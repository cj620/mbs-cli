// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCategoryList extends MBSCommand {
  static description = '商品类目分页列表查询：商品类目维护页查询：按层级(levelnum)与父类目(parentCatId)分页查询某一级类目列表，支持按类目名称(catName)子类搜索、按状态(openflag)开启/关闭筛选；返回类目列表及总数、当前页。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。来源 dataPage.page(默认1)；下钻/搜索时固定传1', required: true }),
    levelnum: Flags.string({ description: '类目层级数(1=一级,2=二级,3=三级,4=四级)，控制查询哪一级类目', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传50', required: true }),
    parentCatId: Flags.string({ description: '父类目ID(sequenceid)，下钻选中行的sequenceid；查一级类目时为null' }),
    openflag: Flags.string({ description: '状态筛选(单选按钮组)。\'\'=所有;\'1\'=开启;\'0\'=关闭，默认\'1\'' }),
    catName: Flags.string({ description: '类目名称(子类搜索关键词)，来源输入框，全类搜索命中后回填' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCategoryList)

    const data = await this.client.post('/erpProduct/erpProduct/categoryController/getCategoryList', { "currentPage": flags.currentPage, "levelnum": flags.levelnum, "pageSize": flags.pageSize, "parentCatId": flags.parentCatId, "openflag": flags.openflag, "catName": flags.catName })
    this.output(data)
  }
}
