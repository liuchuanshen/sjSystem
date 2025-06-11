<template>
  <footer class="footer">
    <div class="footer__qrcode-row">
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCodePic/QRCODE-WECHAT.jpg" alt="建房顾问">
        <div class="footer__qrcode-label">建房顾问</div>
      </div>
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCodePic/QRCODE-WechatPublicAccount.jpg" alt="微信公众号">
        <div class="footer__qrcode-label">微信公众号</div>
      </div>
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCodePic/QRCODE-TIKTOK.jpg" alt="官方抖音">
        <div class="footer__qrcode-label">官方抖音</div>
      </div>
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCodePic/QRCODE-REDNOTE.jpg" alt="官方小红书">
        <div class="footer__qrcode-label">官方小红书</div>
      </div>
    </div>

    <div class="footer__main">
      <div class="footer__contact">
        <div>热线电话：131-3848-4787</div>
        <div>{{ '&nbsp;'.repeat(22) }}185-8868-6184</div>
        <div>联系邮箱：xshonex@qq.com</div>
        <div>公司地址：广州市花都区</div>
      </div>
      <div class="footer__company-info">
        广花设计承接室内设计、建筑设计、厂房新建及改扩建、光伏、机电设计、结构加固，欢迎咨询。
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__links">
        友情链接：
        <el-link :underline="false" @click="goHome" class="footer__link">建筑设计公司加盟</el-link> |
        <el-link :underline="false" @click="goHome" class="footer__link">室内设计公司加盟</el-link>
      </div>
    </div>
    <div class="footer__copyright">
      ©2025 广花设计 版权所有<br>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterBar',
   methods: {
    goHome() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.footer {
  background: #222;
  color: #eee;
  padding-top: 48px;
  font-size: 15px;
}

/* 二维码区域 */
.footer__qrcode-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 72px;
  padding: 32px 0;
}

.footer__qrcode-item {
  text-align: center;
}

.footer__qrcode-item img {
  width: 248px;
  height: 248px;
  background: #fff;
  border: 4px solid #fff;
  border-radius: 12px;
  margin-bottom: 8px;
}

.footer__qrcode-label {
  font-size: 16px;
  color: #eee;
  margin-top: 2px;
}

/* 联系信息与介绍 */
.footer__main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px 30px;
  gap: 48px;
}

.footer__contact {
  flex: 1;
  text-align: left;
  line-height: 2.1;
  font-size: 16px;
  color: #eee;
  min-width: 260px;
}

.footer__company-info {
  flex: 2;
  text-align: left;
  font-size: 16px;
  color: #eee;
  line-height: 2.1;
  min-width: 320px;
}

/* 底部版权等信息 */
.footer__bottom {
  background: #222;
  border-top: 1px solid #333;
  padding: 18px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.footer__links {
  color: #aaa;
}

.footer__link {
  margin: 0 5px;
  color: #007bff;
}

.footer__link:hover {
  text-decoration: underline;
}

.footer__copyright {
  color: #aaa;
  flex: 1;
  text-align: center;
  min-width: 200px;
  padding: 10px 0 10px 0;
}

/* 移动端适配 */
@media screen and (max-width: 480px) {
  .footer {
    padding: 20px 10px;
  }

  .footer__qrcode-item img {
    width: 100px;
    height: 100px;
  }

  .footer__qrcode-label,
  .footer__company-info,
  .footer__contact {
    font-size: 12px;
  }

  .footer__phone {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding-top: 30px;
  }

  .footer__qrcode-row {
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }

  .footer__qrcode-item img {
    width: 120px;
    height: 120px;
    border: 2px solid #fff;
  }

  .footer__qrcode-label {
    font-size: 14px;
  }

  .footer__main {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  .footer__contact,
  .footer__company-info {
    min-width: 100%;
    font-size: 14px;
    line-height: 1.8;
  }

  .footer__bottom {
    flex-direction: column;
    text-align: center;
    padding: 15px 20px;
    gap: 10px;
  }

  .footer__links,
  .footer__copyright,
  .footer__phone {
    min-width: 100%;
    text-align: center;
  }

  .footer__phone {
    font-size: 16px;
    letter-spacing: 2px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .footer {
    padding: 40px 30px;
  }

  .footer__main {
    flex-direction: row;
    gap: 40px;
  }

  .footer__qrcode-item img {
    width: 140px;
    height: 140px;
  }

  .footer__qrcode-label {
    font-size: 16px;
  }
}

</style>
