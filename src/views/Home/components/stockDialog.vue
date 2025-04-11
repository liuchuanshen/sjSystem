<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="90%"
    center
    @close="handleClose"
  >
    <el-descriptions title="股票详情">
      <el-descriptions-item label="公司名称">{{ companyInfo.name }}</el-descriptions-item>
      <el-descriptions-item label="公司英文名称">{{ companyInfo.ename }}</el-descriptions-item>
      <el-descriptions-item label="上市市场">{{ companyInfo.market }}</el-descriptions-item>
      <el-descriptions-item label="概念及板块">{{ companyInfo.idea }}</el-descriptions-item>
      <el-descriptions-item label="上市日期">{{ companyInfo.ldate }}</el-descriptions-item>
      <el-descriptions-item label="发行价格">{{ companyInfo.sprice }}</el-descriptions-item>
      <el-descriptions-item label="主承销商">{{ companyInfo.principal }}</el-descriptions-item>
      <el-descriptions-item label="成立日期">{{ companyInfo.rdate }}</el-descriptions-item>
      <el-descriptions-item label="注册资本">{{ companyInfo.rprice }}</el-descriptions-item>
      <el-descriptions-item label="机构类型">{{ companyInfo.instype }}</el-descriptions-item>
      <el-descriptions-item label="组织形式">{{ companyInfo.organ }}</el-descriptions-item>
      <el-descriptions-item label="董事会秘书">{{ companyInfo.secre }}</el-descriptions-item>
      <el-descriptions-item label="公司电话">{{ companyInfo.phone }}</el-descriptions-item>
      <el-descriptions-item label="董秘电话">{{ companyInfo.sphone }}</el-descriptions-item>
      <el-descriptions-item label="公司传真">{{ companyInfo.fax }}</el-descriptions-item>
      <el-descriptions-item label="董秘传真">{{ companyInfo.sfax }}</el-descriptions-item>
      <el-descriptions-item label="公司电子邮箱">{{ companyInfo.email }}</el-descriptions-item>
      <el-descriptions-item label="董秘电子邮箱">{{ companyInfo.semail }}</el-descriptions-item>
      <el-descriptions-item label="公司网站">{{ companyInfo.site }}</el-descriptions-item>
      <el-descriptions-item label="邮政编码">{{ companyInfo.post }}</el-descriptions-item>
      <el-descriptions-item label="信息披露网址">{{ companyInfo.infosite }}</el-descriptions-item>
      <el-descriptions-item label="证券简称更名历史">{{ companyInfo.oname }}</el-descriptions-item>
      <el-descriptions-item label="注册地址">{{ companyInfo.addr }}</el-descriptions-item>
      <el-descriptions-item label="办公地址">{{ companyInfo.oaddr }}</el-descriptions-item>
      <el-descriptions-item label="公司简介">{{ companyInfo.desc }}</el-descriptions-item>
      <el-descriptions-item label="经营范围">{{ companyInfo.bscope }}</el-descriptions-item>
      <el-descriptions-item label="承销方式">{{ companyInfo.printype }}</el-descriptions-item>
      <el-descriptions-item label="上市推荐人">{{ companyInfo.referrer }}</el-descriptions-item>
      <el-descriptions-item label="发行方式">{{ companyInfo.putype }}</el-descriptions-item>
      <el-descriptions-item label="发行市盈率">{{ companyInfo.pe }}</el-descriptions-item>
      <el-descriptions-item label="首发前总股本">{{ companyInfo.firgu }}</el-descriptions-item>
      <el-descriptions-item label="首发后总股本">{{ companyInfo.lastgu }}</el-descriptions-item>
      <el-descriptions-item label="实际发行量">{{ companyInfo.realgu }}</el-descriptions-item>
      <el-descriptions-item label="预计募集资金">{{ companyInfo.planm }}</el-descriptions-item>
      <el-descriptions-item label="实际募集资金合计">{{ companyInfo.realm }}</el-descriptions-item>
      <el-descriptions-item label="发行费用总额">{{ companyInfo.pubfee }}</el-descriptions-item>
      <el-descriptions-item label="募集资金净额">{{ companyInfo.collect }}</el-descriptions-item>
      <el-descriptions-item label="承销费用">{{ companyInfo.signfee }}</el-descriptions-item>
      <el-descriptions-item label="招股公告日">{{ companyInfo.pdate }}</el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>

<script>
export default {
  name: 'StockDialog',
  data() {
    return {
      dialogVisible: false,
      title: '',
      companyInfo: {}
    }
  },
  methods: {
    openDialog(data) {
      this.companyInfo = { ...data }
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    handleClose() {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
