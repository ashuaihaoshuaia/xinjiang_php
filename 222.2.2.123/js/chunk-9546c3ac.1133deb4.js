(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9546c3ac"],{"1c9b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:t.id+"-toolbar"}},[a("button",{staticClass:"ql-bold",attrs:{title:"粗体"}}),a("button",{staticClass:"ql-italic",attrs:{title:"斜体"}}),a("button",{staticClass:"ql-underline",attrs:{title:"下划线"}}),a("button",{staticClass:"ql-strike",attrs:{title:"删除线"}}),t._m(0),t._m(1),a("select",{staticClass:"ql-font",attrs:{title:"字体"}}),a("select",{staticClass:"ql-align",attrs:{title:"对齐方式"}}),a("select",{staticClass:"ql-color",attrs:{title:"字体颜色"}}),a("select",{staticClass:"ql-background",attrs:{title:"背景颜色"}}),a("button",{staticClass:"ql-blockquote",attrs:{title:"引用"}}),a("button",{staticClass:"ql-code-block",attrs:{title:"代码块"}}),a("button",{staticClass:"ql-list",attrs:{value:"ordered",title:"数字列表"}}),a("button",{staticClass:"ql-list",attrs:{value:"bullet",title:"点列表"}}),a("button",{staticClass:"ql-script",attrs:{value:"sub",title:"右下标"}}),a("button",{staticClass:"ql-script",attrs:{value:"super",title:"右上标"}}),a("button",{staticClass:"ql-indent",attrs:{value:"-1",title:"向左缩进"}}),a("button",{staticClass:"ql-indent",attrs:{value:"+1",title:"向右缩进"}}),a("button",{staticClass:"ql-clean",attrs:{title:"清空样式"}}),a("button",{staticClass:"ql-link",attrs:{title:"链接"}}),t.base64?a("button",{staticClass:"ql-image",attrs:{title:"插入图片"}}):t._e(),t.base64?t._e():a("div",{staticClass:"q-menu",attrs:{title:"插入图片"}},[a("Upload",{ref:"qup",attrs:{action:t.uploadFileUrl,headers:t.accessToken,"on-success":t.handleSuccess,"on-error":t.handleError,format:["jpg","jpeg","png","gif","bmp"],accept:".jpg, .jpeg, .png, .gif, .bmp","max-size":5120,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.beforeUpload,"show-upload-list":!1}},[a("Icon",{attrs:{type:"md-images",size:"20"}})],1)],1),a("button",{staticClass:"ql-video",attrs:{title:"插入视频链接"}}),t.expandHtml?a("div",{staticClass:"q-menu",attrs:{title:"编辑HTML代码"},on:{click:t.editHTML}},[a("Icon",{attrs:{type:"md-code-working",size:"22"}})],1):t._e(),t.expandPreview?a("div",{staticClass:"q-menu",attrs:{title:"预览"},on:{click:function(e){t.fullscreenModal=!0}}},[a("Icon",{attrs:{type:"ios-eye",size:"24"}})],1):t._e(),t.expandClear?a("div",{staticClass:"q-menu",attrs:{title:"清空"},on:{click:t.clear}},[a("Icon",{staticStyle:{display:"block"},attrs:{type:"md-trash",size:"18"}})],1):t._e()]),a("div",{style:{height:t.height},attrs:{id:t.id}}),a("Modal",{attrs:{title:"编辑html代码","mask-closable":!1,width:900,fullscreen:t.full},model:{value:t.showHTMLModal,callback:function(e){t.showHTMLModal=e},expression:"showHTMLModal"}},[t.full?t._e():a("Input",{staticStyle:{"max-height":"60vh",overflow:"auto"},attrs:{rows:15,type:"textarea"},model:{value:t.dataEdit,callback:function(e){t.dataEdit=e},expression:"dataEdit"}}),t.full?a("Input",{attrs:{rows:32,type:"textarea"},model:{value:t.dataEdit,callback:function(e){t.dataEdit=e},expression:"dataEdit"}}):t._e(),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{icon:"md-expand"},on:{click:function(e){t.full=!t.full}}},[t._v("全屏开/关")]),a("Button",{attrs:{type:"primary",icon:"md-checkmark-circle-outline"},on:{click:t.editHTMLOk}},[t._v("确定保存")])],1)],1),a("Modal",{attrs:{title:"预览",fullscreen:""},model:{value:t.fullscreenModal,callback:function(e){t.fullscreenModal=e},expression:"fullscreenModal"}},[a("div",{domProps:{innerHTML:t._s(t.data)}},[t._v(t._s(t.data))]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:function(e){t.fullscreenModal=!1}}},[t._v("关闭")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"ql-size",attrs:{title:"字体大小"}},[a("option",{attrs:{value:"small"}}),a("option",{attrs:{selected:""}}),a("option",{attrs:{value:"large"}}),a("option",{attrs:{value:"huge"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"ql-header",attrs:{title:"标题大小"}},[a("option",{attrs:{value:"1"}}),a("option",{attrs:{value:"2"}}),a("option",{attrs:{value:"3"}}),a("option",{attrs:{value:"4"}}),a("option",{attrs:{value:"5"}}),a("option",{attrs:{value:"6"}}),a("option",{attrs:{selected:""}})])}],l=a("365c"),o=a("6c81"),n=a.n(o),r=(a("8096"),a("5e38")),c=a.n(r),d={name:"editor",props:{id:{type:String,default:"quill"},value:String,base64:{type:Boolean,default:!1},height:{type:String,default:"300px"},expandHtml:{type:Boolean,default:!0},expandPreview:{type:Boolean,default:!0},expandClear:{type:Boolean,default:!0},openXss:{type:Boolean,default:!1}},data:function(){return{accessToken:{},uploadFileUrl:l["rc"],editor:null,options:{theme:"snow",modules:{toolbar:"#".concat(this.id,"-toolbar")},placeholder:"在这输入内容 ..."},data:this.value,dataEdit:"",showHTMLModal:!1,full:!1,fullscreenModal:!1}},methods:{initEditor:function(){this.accessToken={accessToken:this.getStore("accessToken")},this.editor=new n.a("#".concat(this.id),this.options);var t=this;this.value&&this.editor.pasteHTML(this.value),this.editor.on("text-change",(function(e,a,s){var i=t.editor.container.firstChild.innerHTML;t.openXss?t.data=c()(i):t.data=i,t.$emit("input",t.data),t.$emit("on-change",t.data)}))},handleFormatError:function(t){this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+t.name+" ’格式不正确, 请选择 .jpg .jpeg .png .gif .bmp格式文件"})},handleMaxSize:function(t){this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+t.name+" ’大小过大, 不得超过 5M."})},beforeUpload:function(){return!0},handleSuccess:function(t,e){if(t.success){var a,s=t.result,i=this.editor.getSelection(!0),l=this.editor.getContents().length;a=i?i.index:l,this.editor.insertEmbed(a,"image",s),this.editor.setSelection(a+1,0)}else this.$Message.error(t.message)},handleError:function(t,e,a){this.$Message.error(t.toString())},editHTML:function(){this.dataEdit=this.data,this.showHTMLModal=!0},editHTMLOk:function(){this.editor.pasteHTML(this.dataEdit),this.$emit("input",this.data),this.$emit("on-change",this.data),this.showHTMLModal=!1},clear:function(){var t=this;this.$Modal.confirm({title:"确认清空",content:"确认要清空编辑器内容？清空后不能撤回",onOk:function(){t.data="",t.editor.pasteHTML(t.data),t.$emit("input",t.data),t.$emit("on-change",t.data)}})},setData:function(t){if(this.editor||this.initEditor(),t!=this.data){this.data=t;var e=this.editor.selection.savedRange.index;this.editor.pasteHTML(this.data),this.editor.setSelection(e,0),this.$emit("input",this.data),this.$emit("on-change",this.data)}}},watch:{value:function(t){this.setData(t)}},mounted:function(){this.initEditor()}},u=d,h=(a("4c3b"),a("2877")),p=Object(h["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports},"4c3b":function(t,e,a){"use strict";a("f735")},8096:function(t,e,a){},f735:function(t,e,a){}}]);