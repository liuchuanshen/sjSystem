<template>
  <footer class="footer">
    <div class="footer__qrcode-row">
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCode/QRCODE-WECHAT.png" alt="建房顾问">
        <div class="footer__qrcode-label">建房顾问</div>
      </div>
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCode/QRCODE-WechatPublicAccount.png" alt="微信公众号">
        <div class="footer__qrcode-label">微信公众号</div>
      </div>
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCode/QRCODE-TIKTOK.png" alt="官方抖音">
        <div class="footer__qrcode-label">官方抖音</div>
      </div>
      <div class="footer__qrcode-item">
        <img src="@/assets/picture/qrCode/QRCODE-REDNOTE.png" alt="官方小红书">
        <div class="footer__qrcode-label">官方小红书</div>
      </div>
    </div>

    <div class="footer__main">
      <div class="footer__contact">
        <div>热线电话：131-3848-4787</div>
        <div>联系邮箱：tonightf9u@qq.com</div>
        <div>上班时间：每天09:30-22:00</div>
        <div>公司地址：广州市花都区</div>
      </div>
      <div class="footer__company-info">
        广花设计是农村别墅设计公司，承接现代别墅、中式别墅、欧式别墅，独栋别墅、双拼别墅、农村小别墅、一层别墅、两层别墅、三层别墅设计与建造。
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__links">
        友情链接：消防公司加盟 | 建筑设计公司加盟 | 成都店铺装修
      </div>
      <div class="footer__copyright">
        ©2025 广花设计 版权所有<br>
        <!-- 手机版 | 渝ICP备2021002672号-1 -->
      </div>
      <div class="footer__phone">13138484787</div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterBar'
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 14px;
}

.footer__links {
  color: #aaa;
  flex: 2;
  min-width: 300px;
}

.footer__copyright {
  color: #aaa;
  flex: 1;
  text-align: center;
  min-width: 200px;
}

.footer__phone {
  color: #aaa;
  flex: 0 0 120px;
  text-align: right;
  font-family: monospace;
  font-size: 18px;
  letter-spacing: 4px;
}

/* 移动端适配 */
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
</style>
