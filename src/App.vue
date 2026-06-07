<template>
  <div id="app">
    <!-- 头部 -->
    <HeaderBar />
    <!-- 菜单栏 -->
    <div class="menu">
      <div
        v-for="(menu, index) in menuList"
        :key="index"
        :class="['menu-item', currentIndex === index ? 'active' : '']"
        @click="selectMenu(index)"
      >
        {{ menu }}
      </div>
    </div>
    <!-- 轮播图 -->
    <CaseCarousel :categoryIndex="currentIndex" />
    <div class="scope">
      <div class="scope__title title-bold">
        <span class="highlight">致电咨询：13138484787，18588686184，<br></span>
        <span class="highlight">或点击下方按钮预约咨询，<br></span> 
        <span class="highlight">或扫描网页底部各平台二维码咨询</span> 
      </div>
      <div class="scope__title title-small">
        <span>
          我们总部在广州，服务珠三角。<br><br>
          专业承接建筑设计、混凝土结构设计、钢结构设计、水暖电设计、动力设计、幕墙设计、室内设计、室内水暖电、空调通风地暖设计、管道支架设计、消防设计、园林景观设计、市政道路设计、BIM正向设计等等。<br><br>
          方案设计，效果图设计，施工图设计，各种工程设计包您满意。专业出施工图，可以出效果图+全专业施工图+预算造价，包审图通过。只有问不到，没有做不到，欢迎各位领导老板咨询。<br>
        </span>
      </div>
      <el-button type="primary" @click="dialogVisible = true" class="appointmentButton">预约咨询</el-button>
    </div>
    <!-- 服务卡片 -->
    <ServiceCards />

    <div class="scope">
      <div class="scope__title title-bold">
        <span class="highlight">1000+</span> 
        <span>原创案例赏鉴</span></div>
      <div class="scope__title title-small">
        <span>选自己喜欢的风格,过自己喜欢的生活</span>
      </div>
    </div>

    <!-- 案例 -->
    <CaseCards :categoryIndex="currentIndex"/>
    
    <div class="scope">
      <div class="scope__title title-bold">
        <span class="highlight">立即预约</span> 
        <span>开启美好生活</span
      ></div>
      <div class="scope__title title-small">
        <span>专业团队，匠心筑家</span>
      </div>
      <el-button type="primary" @click="dialogVisible = true" class="appointmentButton">预约咨询</el-button>
    </div>
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
    <el-backtop />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import CaseCarousel from './components/CaseCarousel.vue'
import ServiceCards from './components/ServiceCards.vue'
import CaseCards from './components/CaseCards.vue'
import FooterBar from './components/FooterBar.vue'
import emailjs from 'emailjs-com'

export default {
  name: 'App',
  components: {
    HeaderBar,
    CaseCarousel,
    ServiceCards,
    CaseCards,
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
      currentIndex: 0,
      menuList: ['建筑设计', '室内设计', '厂房新建及改扩建', '光伏', '机电设计', '结构加固', '合作联系'],
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
    selectMenu(index) {
      this.currentIndex = index;
    },
    async submitForm() {
      this.$refs.consultForm.validate(async valid => {
        if (!valid) {
          this.$message.error('请完整填写信息')
          return
        }

        this.isSubmitting = true // 禁用按钮防止多次点击
        const serviceID = 'xshonex'
        const templateID = 'template_omfvk5b'
        const userID = 'cRWZd-dgrAgofJwU6'
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
  box-sizing: border-box;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 84px;
  font-size: 16px;
  background: rgba(0, 0, 0, 1);
  padding: 10px 10px;
}

.menu-item {
  cursor: pointer;
  padding-bottom: 4px;
  color: rgba(255, 255, 255, 1);
  transition: 0.3s;
  border-bottom: 2px solid transparent;
}

.menu-item.active {
  color: rgba(214, 181, 127, 1);
  border-color: rgba(214, 181, 127, 1);
}

.appointmentButton{
  /* width: 20%; */
  margin-top: 20px !important;
}

.scope {
  background: #fff;
  padding: 56px 0 40px;
  text-align: center;
}

.scope__title {
  text-align: center;
  font-size: 36px;
  color: #222;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.title-bold {
  font-weight: bold;
}

.title-small {
  margin-bottom: 0;
  font-size: 14px;
  color: rgb(136, 136, 136);
}

.highlight {
  color: rgb(211, 177, 106);
}

/* 响应式样式 */
@media screen and (max-width: 768px) {
  .el-dialog {
    width: 90% !important;
    margin: 0 auto;
  }
  
  .el-form-item {
    margin-bottom: 15px;
  }
  
  .el-input {
    width: 100% !important;
  }
  
  .el-form-item__label {
    float: none;
    display: block;
    text-align: left;
    padding: 0 0 8px;
  }
  
  .el-form-item__content {
    margin-left: 0 !important;
  }

  .menu {
    font-size: 8px;
    gap: 20px
  }

  .scope__title{
    font-size: 12px;
  }

  .title-bold{
    font-size: 30px;
  }
}
</style>
