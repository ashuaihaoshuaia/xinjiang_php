(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26a9dc80","chunk-688e6f79","chunk-04f998c9","chunk-8cb1c234","chunk-2d0ceda3"],{"10fd":function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var s=function(t,e,n){var s=/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;e.length>16?n(new Error("长度不能超过16个字符")):s.test(e)?n():n(new Error("仅支持大小写英文、中文和下划线_"))},a=function(t,e,n){e.length<6?n(new Error("密码长度不得小于6位")):n()},o=function(t,e,n){var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;s.test(e)?n():n(new Error("手机号格式错误"))}},1338:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},["darkMode"==t.mainTheme?s("img",{attrs:{src:n("d939"),width:"220px"}}):s("img",{attrs:{src:n("9279"),width:"220px"}}),s("div",{staticClass:"description"},[t._v(t._s(t.$t("xboot")))])])])},a=[],o={name:"xboot-header",computed:{mainTheme:function(){return this.$store.state.theme.theme.mainTheme}}},r=o,i=(n("811f"),n("2877")),c=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},3988:function(t,e,n){},"46a4":function(t,e,n){},"47cd":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"regist"},[n("Row",{staticStyle:{height:"100%"},attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitRegist.apply(null,arguments)}}},[n("Col",{staticClass:"content"},[n("div",[n("Header"),n("Form",{ref:"registForm",staticClass:"form",attrs:{model:t.form,rules:t.rules}},[n("span",{staticClass:"regist-title"},[t._v(t._s(t.$t("register")))]),n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{maxlength:16,size:"large",clearable:"",placeholder:"请输入注册登录账号"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),n("FormItem",{attrs:{prop:"nickname"}},[n("Input",{attrs:{maxlength:20,size:"large",clearable:"",placeholder:"请输入用户名（昵称）"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),n("FormItem",{attrs:{prop:"email"}},[n("Input",{attrs:{size:"large",clearable:"",placeholder:"请输入邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("SetPassword",{attrs:{size:"large"},on:{"on-change":t.changeInputPass},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("FormItem",{attrs:{prop:"mobile"}},[n("Input",{attrs:{size:"large",clearable:"",placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}},[n("Select",{staticStyle:{width:"70px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[n("Option",{attrs:{value:"86"}},[t._v("+86")])],1)],1)],1),n("FormItem",{attrs:{prop:"code",error:t.errorCode}},[n("Row",{attrs:{type:"flex",justify:"space-between"}},[n("Input",{staticClass:"input-verify",attrs:{size:"large",clearable:"",placeholder:"请输入短信验证码",maxlength:10},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),n("CountDownButton",{ref:"countDown",attrs:{autoCountDown:!1,size:"large",loading:t.sending,text:t.getSms},on:{"on-click":t.checkVaptcha}})],1)],1)],1),n("Row",{attrs:{type:"flex",justify:"space-between"}},[n("Button",{staticClass:"regist-btn",attrs:{type:"primary",size:"large",loading:t.loading},on:{click:t.submitRegist}},[t.loading?n("span",[t._v(t._s(t.$t("registering")))]):n("span",[t._v(t._s(t.$t("register")))])]),n("router-link",{attrs:{to:"/login"}},[n("a",{staticClass:"to-login"},[t._v(t._s(t.$t("loginNow")))])])],1)],1),n("Footer")],1),n("LangSwitch")],1)],1)},a=[],o=n("365c"),r=n("10fd"),i=n("1338"),c=n("c9d5"),l=n("ab7e"),u=n("60e8"),f=n("5e58"),d={components:{CountDownButton:u["default"],LangSwitch:l["default"],SetPassword:f["default"],Header:i["default"],Footer:c["default"]},data:function(){return{vaptchaObject:null,getSms:"获取验证码",error:!1,loading:!1,sending:!1,select:"86",errorCode:"",form:{username:"",password:"",mobile:"",code:""},rules:{username:[{required:!0,message:"请输入注册登录账号",trigger:"change"},{validator:r["c"],trigger:"change"}],nickname:[{required:!0,message:"请输入用户名（昵称）",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"},{validator:r["b"],trigger:"change"}],email:[{required:!0,message:"请输入邮箱地址"},{type:"email",message:"邮箱格式不正确"}],mobile:[{required:!0,message:"请输入手机号",trigger:"change"},{validator:r["a"],trigger:"change"}]}}},methods:{initVaptcha:function(){var t=this;vaptcha({vid:o["uc"],type:"invisible",offline_server:o["vc"]}).then((function(e){t.vaptchaObject=e,e.listen("pass",(function(){t.form.token=e.getToken(),t.sendSmsCode()}))}))},checkVaptcha:function(){var t=this;this.$refs.registForm.validate((function(e){e&&t.vaptchaObject.validate()}))},sendSmsCode:function(){var t=this;this.sending=!0,this.getSms="发送中",Object(o["kc"])(this.form.mobile,this.form).then((function(e){t.getSms="获取验证码",t.sending=!1,t.vaptchaObject.reset(),e.success&&(t.$Message.success("发送短信验证码成功"),t.$refs.countDown.startCountDown())}))},changeInputPass:function(t,e,n){this.form.passStrength=n},submitRegist:function(){var t=this;this.$refs.registForm.validate((function(e){if(e){if(!t.form.code)return void(t.errorCode="验证码不能为空");t.errorCode="",t.loading=!0,Object(o["Tb"])(t.form).then((function(e){if(t.loading=!1,e.success){var n={username:t.form.username};t.$router.push({name:"regist-result",query:n})}else t.vaptchaObject.reset()}))}}))}},mounted:function(){this.initVaptcha()}},m=d,h=(n("9448"),n("2877")),g=Object(h["a"])(m,s,a,!1,null,null,null);e["default"]=g.exports},"60e8":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Button",{attrs:{countTime:t.countTime,loading:t.loading,type:t.type,size:t.size,ghost:t.ghost,disabled:t.disabled||t.clicked,icon:t.icon,shape:t.shape,long:t.long},on:{click:t.handleClick}},[t._v(t._s(t.buttonText))])],1)},a=[],o={name:"iconChoose",props:{text:{type:String,default:"提交"},autoCountDown:{type:Boolean,default:!0},countTime:{type:[Number,String],default:60},suffixText:{type:String,default:"秒后重试"},type:String,size:String,loading:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:String,shape:String,long:{type:Boolean,default:!1}},data:function(){return{buttonText:this.text,count:Number(this.countTime),clicked:!1}},methods:{init:function(){},handleClick:function(){this.autoCountDown&&(this.clicked=!0,this.countDown()),this.$emit("on-click",!0)},startCountDown:function(){this.clicked=!0,this.countDown()},countDown:function(){var t=this;if(0==this.count)return this.clicked=!1,this.count=this.countTime,void(this.buttonText=this.text);this.buttonText=this.count+" "+this.suffixText,this.count--,setTimeout((function(){t.countDown()}),1e3)},setText:function(t){t!==this.buttonText&&(this.buttonText=t)}},watch:{text:function(t){this.setText(t)}},mounted:function(){this.init()}},r=o,i=n("2877"),c=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},"811f":function(t,e,n){"use strict";n("46a4")},"8ab0":function(t,e,n){},9448:function(t,e,n){"use strict";n("a677")},a677:function(t,e,n){},ab7e:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lang-icon"},[s("Dropdown",{attrs:{transfer:""},on:{"on-click":t.langChange}},[s("Icon",{attrs:{type:"md-globe",size:"26"}}),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{name:"zh-CN",selected:"zh-CN"==t.currLang}},[s("div",{staticClass:"lan-logo-content"},[s("img",{staticClass:"country-logo",attrs:{src:n("6336")}}),t._v("简体中文 ")])]),s("DropdownItem",{attrs:{name:"en-US",selected:"en-US"==t.currLang}},[s("div",{staticClass:"lan-logo-content"},[s("img",{staticClass:"country-logo",attrs:{src:n("38f6")}}),t._v("English ")])])],1)],1)],1)},a=[],o={name:"langSwitch",data:function(){return{currLang:"zh-CN"}},methods:{langChange:function(t){this.currLang=t,this.$i18n.locale=t,this.$store.commit("switchLang",t)}},mounted:function(){localStorage.lang&&(this.currLang=localStorage.lang)}},r=o,i=(n("fac3"),n("2877")),c=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},c9d5:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[n("Row",{staticClass:"foot-item",attrs:{type:"flex",justify:"space-around"}},[n("a",{staticClass:"item",attrs:{href:"https://www.kancloud.cn/zwz/xboot/1009234",target:"_blank"}},[t._v(t._s(t.$t("docs")))]),n("a",{staticClass:"item",attrs:{href:"https://github.com/zwz/x-boot",target:"_blank"}},[n("Icon",{attrs:{custom:"iconfont icon-github",size:"16"}})],1),n("a",{staticClass:"item",attrs:{href:"http://xpay.zwz.cn/pay?xboot",target:"_blank"}},[t._v(t._s(t.$t("fullVersion")))])]),n("Row",{staticClass:"copyright",attrs:{type:"flex",justify:"center"}},[t._v(" Copyright © 2018 - Present "),n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"http://zwz.cn",target:"_blank"}},[t._v("zwz")]),t._v(" "+t._s(t.$t("rights"))+" ")])],1)},a=[],o={name:"xboot-footer"},r=o,i=(n("e400"),n("2877")),c=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},e400:function(t,e,n){"use strict";n("3988")},fac3:function(t,e,n){"use strict";n("8ab0")}}]);