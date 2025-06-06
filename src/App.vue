<template>
  <div id="app">
    <!-- 头部 -->
    <HeaderBar />
    <!-- 案例轮播 -->
    <CaseCarousel />
    <!-- Banner 横幅 -->
    <BannerSection @openDialog="dialogVisible = true" />
    <!-- 服务卡片 -->
    <ServiceCards />
    <!-- 页脚 -->
    <FooterBar />
    <!-- 咨询弹窗 -->
    <el-dialog
      title="预约咨询"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleBeforeClose"
    >
      <el-form :model="form" :rules="rules" ref="consultForm" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入联系电话" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="需求描述" prop="desc">
          <el-input type="textarea" v-model="form.desc" placeholder="请输入需求描述" rows="6"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="button" :disabled="isSubmitting">
            {{ isSubmitting ? '提交中...' : '提交' }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import CaseCarousel from './components/CaseCarousel.vue'
import BannerSection from './components/BannerSection.vue'
import ServiceCards from './components/ServiceCards.vue'
import FooterBar from './components/FooterBar.vue'
import emailjs from 'emailjs-com'

export default {
  name: 'App',
  components: {
    HeaderBar, 
    CaseCarousel, 
    BannerSection, 
    ServiceCards, 
    FooterBar
  },
  data() {
    return {
      dialogVisible: false,
      isSubmitting: false,
      form: {
        name: '',
        phone: '',
        desc: ''
      },
      caseList: [
        require('@/assets/picture/case/01.jpg'),
        require('@/assets/picture/case/02.png'),
        require('@/assets/picture/case/03.jpg'),
        require('@/assets/picture/case/04.jpg'),
        require('@/assets/picture/case/05.jpg'),
        require('@/assets/picture/case/06.jpg'),
        require('@/assets/picture/case/07.jpg'),
        require('@/assets/picture/case/08.jpg'),
        require('@/assets/picture/case/09.jpg'),
        require('@/assets/picture/case/10.jpg'),
        require('@/assets/picture/case/11.jpg'),
        require('@/assets/picture/case/12.jpg'),
        require('@/assets/picture/case/13.jpg'),
        require('@/assets/picture/case/14.jpg'),
        require('@/assets/picture/case/15.jpg')
      ],
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入需求描述', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
  },
  methods: {
    async submitForm() {
      this.$refs.consultForm.validate(async valid => {
        if (!valid) {
          this.$message.error('请完整填写信息')
          return
        }

        this.isSubmitting = true // 禁用按钮防止多次点击
        const serviceID = 'your_service_id'
        const templateID = 'your_template_id'
        const userID = 'your_user_id'
        const templateParams = {
          name: this.form.name,
          phone: this.form.phone,
          desc: this.form.desc
        }

        try {
          await emailjs.send(serviceID, templateID, templateParams, userID)
          this.$message.success('提交成功！我们将尽快联系您。')
          this.dialogVisible = false
          this.resetForm()
        } catch (error) {
          console.error('发送失败:', error)
          this.$message.error('提交失败，请稍后再试')
        } finally {
          this.isSubmitting = false // 恢复按钮可用
        }
      })
    },
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        desc: ''
      }
      // 如果需要清除校验（可选）
      this.$refs.consultForm && this.$refs.consultForm.clearValidate()
    },
    handleBeforeClose(done) {
      if (this.isSubmitting) {
        // 提交中，阻止关闭弹窗
        this.$message.warning('正在提交，请稍候...')
        return
      }
      this.resetForm()
      done() // 允许关闭
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.button{
  width: 100%; 
}

</style>
