(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae98889a","chunk-688e6f79","chunk-04f998c9","chunk-8cb1c234","chunk-1c49fd68","chunk-2d0ceda3"],{"10fd":function(t,e,o){"use strict";o.d(e,"c",(function(){return s})),o.d(e,"b",(function(){return n})),o.d(e,"a",(function(){return i}));var s=function(t,e,o){var s=/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;e.length>16?o(new Error("长度不能超过16个字符")):s.test(e)?o():o(new Error("仅支持大小写英文、中文和下划线_"))},n=function(t,e,o){e.length<6?o(new Error("密码长度不得小于6位")):o()},i=function(t,e,o){var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;s.test(e)?o():o(new Error("手机号格式错误"))}},1338:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},["darkMode"==t.mainTheme?s("img",{attrs:{src:o("d939"),width:"220px"}}):s("img",{attrs:{src:o("9279"),width:"220px"}}),s("div",{staticClass:"description"},[t._v(t._s(t.$t("xboot")))])])])},n=[],i={name:"xboot-header",computed:{mainTheme:function(){return this.$store.state.theme.theme.mainTheme}}},a=i,r=(o("811f"),o("2877")),c=Object(r["a"])(a,s,n,!1,null,null,null);e["default"]=c.exports},3988:function(t,e,o){},"46a4":function(t,e,o){},"60e8":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Button",{attrs:{countTime:t.countTime,loading:t.loading,type:t.type,size:t.size,ghost:t.ghost,disabled:t.disabled||t.clicked,icon:t.icon,shape:t.shape,long:t.long},on:{click:t.handleClick}},[t._v(t._s(t.buttonText))])],1)},n=[],i={name:"iconChoose",props:{text:{type:String,default:"提交"},autoCountDown:{type:Boolean,default:!0},countTime:{type:[Number,String],default:60},suffixText:{type:String,default:"秒后重试"},type:String,size:String,loading:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:String,shape:String,long:{type:Boolean,default:!1}},data:function(){return{buttonText:this.text,count:Number(this.countTime),clicked:!1}},methods:{init:function(){},handleClick:function(){this.autoCountDown&&(this.clicked=!0,this.countDown()),this.$emit("on-click",!0)},startCountDown:function(){this.clicked=!0,this.countDown()},countDown:function(){var t=this;if(0==this.count)return this.clicked=!1,this.count=this.countTime,void(this.buttonText=this.text);this.buttonText=this.count+" "+this.suffixText,this.count--,setTimeout((function(){t.countDown()}),1e3)},setText:function(t){t!==this.buttonText&&(this.buttonText=t)}},watch:{text:function(t){this.setText(t)}},mounted:function(){this.init()}},a=i,r=o("2877"),c=Object(r["a"])(a,s,n,!1,null,null,null);e["default"]=c.exports},"811f":function(t,e,o){"use strict";o("46a4")},"87a0":function(t,e,o){},"8ab0":function(t,e,o){},"8d45":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"spinner"},[o("div",{staticClass:"rect1"}),o("div",{staticClass:"rect2"}),o("div",{staticClass:"rect3"}),o("div",{staticClass:"rect4"}),o("div",{staticClass:"rect5"})])}],i={name:"rectLoading"},a=i,r=(o("958a"),o("2877")),c=Object(r["a"])(a,s,n,!1,null,null,null);e["default"]=c.exports},"958a":function(t,e,o){"use strict";o("e699")},ab7e:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lang-icon"},[s("Dropdown",{attrs:{transfer:""},on:{"on-click":t.langChange}},[s("Icon",{attrs:{type:"md-globe",size:"26"}}),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{name:"zh-CN",selected:"zh-CN"==t.currLang}},[s("div",{staticClass:"lan-logo-content"},[s("img",{staticClass:"country-logo",attrs:{src:o("6336")}}),t._v("简体中文 ")])]),s("DropdownItem",{attrs:{name:"en-US",selected:"en-US"==t.currLang}},[s("div",{staticClass:"lan-logo-content"},[s("img",{staticClass:"country-logo",attrs:{src:o("38f6")}}),t._v("English ")])])],1)],1)],1)},n=[],i={name:"langSwitch",data:function(){return{currLang:"zh-CN"}},methods:{langChange:function(t){this.currLang=t,this.$i18n.locale=t,this.$store.commit("switchLang",t)}},mounted:function(){localStorage.lang&&(this.currLang=localStorage.lang)}},a=i,r=(o("fac3"),o("2877")),c=Object(r["a"])(a,s,n,!1,null,null,null);e["default"]=c.exports},b95b:function(t,e,o){"use strict";o("87a0")},c9d5:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"foot"},[o("Row",{staticClass:"foot-item",attrs:{type:"flex",justify:"space-around"}},[o("a",{staticClass:"item",attrs:{href:"https://www.kancloud.cn/zwz/xboot/1009234",target:"_blank"}},[t._v(t._s(t.$t("docs")))]),o("a",{staticClass:"item",attrs:{href:"https://github.com/zwz/x-boot",target:"_blank"}},[o("Icon",{attrs:{custom:"iconfont icon-github",size:"16"}})],1),o("a",{staticClass:"item",attrs:{href:"http://xpay.zwz.cn/pay?xboot",target:"_blank"}},[t._v(t._s(t.$t("fullVersion")))])]),o("Row",{staticClass:"copyright",attrs:{type:"flex",justify:"center"}},[t._v(" Copyright © 2018 - Present "),o("a",{staticStyle:{margin:"0 5px"},attrs:{href:"http://zwz.cn",target:"_blank"}},[t._v("zwz")]),t._v(" "+t._s(t.$t("rights"))+" ")])],1)},n=[],i={name:"xboot-footer"},a=i,r=(o("e400"),o("2877")),c=Object(r["a"])(a,s,n,!1,null,null,null);e["default"]=c.exports},e400:function(t,e,o){"use strict";o("3988")},e699:function(t,e,o){},eb74:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("Row",{staticStyle:{height:"100%"},attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin.apply(null,arguments)}}},[o("Col",{staticClass:"content"},[o("div",[o("Header"),t.socialLogining?t._e():o("div",[o("Tabs",{model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[o("TabPane",{attrs:{label:t.$t("usernameLogin"),name:"username",icon:"md-person"}},["username"==t.tabName?o("Form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:t.form,rules:t.rules}},[o("FormItem",{attrs:{prop:"username"}},[o("Input",{attrs:{prefix:"ios-contact",size:"large",clearable:"",placeholder:"账号/邮箱/手机号",autocomplete:"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),o("FormItem",{attrs:{prop:"password"}},[o("Input",{attrs:{type:"password",prefix:"ios-lock",size:"large",password:"",placeholder:"请输入密码",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),o("FormItem",{attrs:{prop:"imgCode"}},[o("Row",{staticStyle:{"align-items":"center",overflow:"hidden"},attrs:{type:"flex",justify:"space-between"}},[o("Input",{staticClass:"input-verify",attrs:{size:"large",clearable:"",placeholder:"请输入图片验证码",maxlength:10},model:{value:t.form.imgCode,callback:function(e){t.$set(t.form,"imgCode",e)},expression:"form.imgCode"}}),o("div",{staticClass:"code-image",staticStyle:{position:"relative","font-size":"12px"}},[t.loadingCaptcha?o("Spin",{attrs:{fix:""}}):t._e(),o("img",{staticStyle:{width:"110px",cursor:"pointer",display:"block"},attrs:{src:t.captchaImg,alt:"加载验证码失败"},on:{click:t.getCaptchaImg}})],1)],1)],1)],1):t._e()],1),o("TabPane",{attrs:{label:t.$t("mobileLogin"),name:"mobile",icon:"ios-phone-portrait"}},["mobile"==t.tabName?o("Form",{ref:"mobileLoginForm",staticClass:"form",attrs:{model:t.form,rules:t.rules}},[o("FormItem",{attrs:{prop:"mobile"}},[o("Input",{attrs:{prefix:"ios-phone-portrait",size:"large",clearable:"",placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),o("FormItem",{attrs:{prop:"code",error:t.errorCode}},[o("Row",{attrs:{type:"flex",justify:"space-between"}},[o("Input",{staticClass:"input-verify",attrs:{prefix:"ios-mail-outline",size:"large",clearable:"",placeholder:"请输入短信验证码",maxlength:6},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),o("CountDownButton",{ref:"countDown",attrs:{autoCountDown:!1,size:"large",loading:t.sending,text:t.getSms},on:{"on-click":t.sendSmsCode}})],1)],1)],1):t._e()],1)],1),o("Row",{attrs:{justify:"space-between",align:"middle"}},[o("Checkbox",{attrs:{size:"large"},model:{value:t.saveLogin,callback:function(e){t.saveLogin=e},expression:"saveLogin"}},[t._v(t._s(t.$t("autoLogin")))]),o("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.handleDropDown}},[o("a",{staticClass:"forget-pass"},[t._v(t._s(t.$t("forgetPass")))]),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"test"}},[t._v("体验测试账号")]),o("DropdownItem",{attrs:{name:"resetByMobile"}},[t._v("使用手机号重置密码(付费)")]),o("DropdownItem",{attrs:{name:"resetByEmail"}},[t._v("使用邮箱重置密码(付费)")])],1)],1)],1),o("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.submitLogin}},[t.loading?o("span",[t._v(t._s(t.$t("logining")))]):o("span",[t._v(t._s(t.$t("login")))])]),o("Row",{staticClass:"other-login",attrs:{type:"flex",justify:"space-between"}},[o("div",{staticClass:"other-way icons"},[t._v(" "+t._s(t.$t("otherLogin"))+" "),o("div",{staticClass:"other-icon",on:{click:t.toGithubLogin}},[o("Icon",{staticClass:"other-icon",attrs:{custom:"iconfont icon-github",size:"20"},on:{click:t.toGithubLogin}})],1),o("div",{staticClass:"other-icon",on:{click:t.toQQLogin}},[o("Icon",{attrs:{custom:"iconfont icon-qq",size:"22"}})],1),o("div",{staticClass:"other-icon",on:{click:t.toWeixinLogin}},[o("Icon",{attrs:{custom:"iconfont icon-weixin",size:"23"}})],1),o("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],staticClass:"other-icon",attrs:{type:"ios-arrow-down",size:"16"},on:{click:function(e){t.showMore=!0}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"other-icon",on:{click:t.toWeiboLogin}},[o("Icon",{attrs:{custom:"iconfont icon-weibo",size:"23"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"other-icon",on:{click:t.toDingdingLogin}},[o("Icon",{attrs:{custom:"iconfont icon-dingding",size:"20"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"other-icon",on:{click:t.toWorkwechatLogin}},[o("Icon",{attrs:{custom:"iconfont icon-qiyeweixin",size:"20"}})],1),o("Icon",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"other-icon",attrs:{type:"ios-arrow-up",size:"16"},on:{click:function(e){t.showMore=!1}}})],1),o("router-link",{attrs:{to:"/regist"}},[o("a",{staticClass:"forget-pass"},[t._v(t._s(t.$t("regist")))])])],1)],1),t.socialLogining?o("div",[o("RectLoading")],1):t._e()],1),o("Footer")],1),o("LangSwitch")],1)],1)},n=[],i=o("365c"),a=o("10fd"),r=o("be65"),c=o.n(r),l=o("1338"),u=o("c9d5"),f=o("ab7e"),g=o("8d45"),d=o("60e8"),h=o("c276"),m={components:{CountDownButton:d["default"],RectLoading:g["default"],LangSwitch:f["default"],Header:l["default"],Footer:u["default"]},data:function(){return{showMore:!1,captchaId:"",captchaImg:"",loadingCaptcha:!0,socialLogining:!0,error:!1,tabName:"username",saveLogin:!0,getSms:"获取验证码",loading:!1,sending:!1,errorCode:"",form:{username:"test或test2 可注册 支持第三方账号登录",password:"123456",mobile:"阿里云短信0.045/条 若余额不足联系作者充值",code:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"change"}],password:[{required:!0,message:"密码不能为空",trigger:"change"}],imgCode:[{required:!0,message:"验证码不能为空",trigger:"change"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"change"},{validator:a["a"],trigger:"change"}]}}},methods:{getCaptchaImg:function(){var t=this;this.loadingCaptcha=!0,Object(i["Lb"])().then((function(e){t.loadingCaptcha=!1,e.success&&(t.captchaId=e.result,t.captchaImg=i["G"]+t.captchaId)}))},sendSmsCode:function(){var t=this;this.$refs.mobileLoginForm.validate((function(e){e&&(t.sending=!0,t.getSms="发送中",Object(i["jc"])(t.form.mobile).then((function(e){t.getSms="获取验证码",t.sending=!1,e.success&&(t.$Message.success("发送短信验证码成功"),t.$refs.countDown.startCountDown())})))}))},afterLogin:function(t){var e=this,o=t.result;this.setStore("accessToken",o),Object(i["vb"])().then((function(t){if(t.result){var e=t.result.ssoDomain;c.a.set("accessToken",o,{domain:e,expires:7})}})),Object(i["sc"])().then((function(t){if(t.success){delete t.result.permissions;var o=[];t.result.roles.forEach((function(t){o.push(t.name)})),delete t.result.roles,e.setStore("roles",o),e.setStore("saveLogin",e.saveLogin),e.saveLogin?c.a.set("userInfo",JSON.stringify(t.result),{expires:7}):c.a.set("userInfo",JSON.stringify(t.result)),e.setStore("userInfo",t.result),e.$store.commit("setUserInfo",t.result),h["a"].initRouter(e),e.$router.push({name:"home_index"})}else e.loading=!1}))},submitLogin:function(){var t=this;"username"==this.tabName?this.$refs.usernameLoginForm.validate((function(e){e&&(t.loading=!0,Object(i["Qb"])({username:t.form.username,password:t.form.password,code:t.form.imgCode,captchaId:t.captchaId,saveLogin:t.saveLogin}).then((function(e){e.success?t.afterLogin(e):(t.loading=!1,t.getCaptchaImg())})))})):"mobile"==this.tabName&&this.$refs.mobileLoginForm.validate((function(e){if(e){if(""==t.form.code)return void(t.errorCode="验证码不能为空");t.errorCode="",t.loading=!0,t.form.saveLogin=t.saveLogin,Object(i["oc"])(t.form).then((function(e){e.success?t.afterLogin(e):t.loading=!1}))}}))},toGithubLogin:function(){var t=this;this.socialLogining=!0,Object(i["Jb"])().then((function(e){e.success?window.location.href=e.result:t.socialLogining=!1}))},toQQLogin:function(){var t=this;this.socialLogining=!0,Object(i["Sb"])().then((function(e){e.success?window.location.href=e.result:t.socialLogining=!1}))},toWeiboLogin:function(){var t=this;this.socialLogining=!0,Object(i["xc"])().then((function(e){e.success?window.location.href=e.result:t.socialLogining=!1}))},toWeixinLogin:function(){var t=this;this.socialLogining=!0,Object(i["wc"])().then((function(e){e.success?window.location.href=e.result:t.socialLogining=!1}))},toDingdingLogin:function(){var t=this;this.socialLogining=!0,Object(i["E"])().then((function(e){e.success?window.location.href=e.result:t.socialLogining=!1}))},toWorkwechatLogin:function(){var t=this;this.socialLogining=!0,Object(i["yc"])().then((function(e){e.success?window.location.href=e.result:t.socialLogining=!1}))},relatedLogin:function(){var t=this,e=this.$route.query,o=e.error;""!==o&&void 0!==o&&this.$Message.error(o);var s=e.related,n=e.JWTKey;s&&"1"==s&&n?Object(i["mb"])({JWTKey:n}).then((function(e){if(e.success){t.socialLogining=!0;var o=e.result;t.setStore("accessToken",o),Object(i["vb"])().then((function(t){if(t.result){var e=t.result.ssoDomain;c.a.set("accessToken",o,{domain:e,expires:7})}})),Object(i["sc"])().then((function(e){if(e.success){delete e.result.permissions;var o=[];e.result.roles.forEach((function(t){o.push(t.name)})),delete e.result.roles,t.setStore("roles",o),c.a.set("userInfo",JSON.stringify(e.result),{expires:7}),t.setStore("userInfo",e.result),t.$store.commit("setUserInfo",e.result),h["a"].initRouter(t),t.$router.push({name:"home_index"})}else t.socialLogining=!1,t.$Message.error("获取登录用户信息失败")}))}else t.socialLogining=!1,t.$Message.error("使用第三方账号登录失败")})):this.socialLogining=!1},handleDropDown:function(t){"test"==t?this.test():"resetByMobile"==t?this.$router.push({name:"reset"}):"resetByEmail"==t&&this.$router.push({name:"reset",query:{type:"1"}})},showNotice:function(){var t=this;Object(i["sb"])().then((function(e){if(e.success){if(!e.result)return;var o=e.result;o.open&&(o.title||o.content)&&"LOGIN"==o.position&&t.$Notice.info({title:o.title,desc:o.content,duration:o.duration})}}))},test:function(){this.$Notice.info({title:"测试体验账号",desc:"账号：test或test2<br>密码：123456"})}},mounted:function(){this.showNotice(),this.relatedLogin(),this.getCaptchaImg()}},p=m,v=(o("b95b"),o("2877")),b=Object(v["a"])(p,s,n,!1,null,null,null);e["default"]=b.exports},fac3:function(t,e,o){"use strict";o("8ab0")}}]);