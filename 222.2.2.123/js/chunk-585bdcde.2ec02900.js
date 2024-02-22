(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585bdcde","chunk-0bc829d0","chunk-2d0bd650","chunk-2d0d7882"],{"1df5":function(e,t,a){},"29fc":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("Card",[a("Row",{staticClass:"operation",attrs:{align:"middle",justify:"space-between"}},[a("div",[a("Button",{directives:[{name:"show",rawName:"v-show",value:"tree"==e.showType,expression:"showType == 'tree'"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加子部门")]),a("Button",{attrs:{icon:"md-add"},on:{click:e.addRoot}},[e._v("添加一级部门")]),a("Button",{attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),a("Button",{attrs:{icon:"md-refresh"},on:{click:e.getParentList}},[e._v("刷新")]),a("Input",{directives:[{name:"show",rawName:"v-show",value:"list"==e.showType,expression:"showType == 'list'"}],staticStyle:{width:"250px"},attrs:{suffix:"ios-search",placeholder:"输入部门名搜索",clearable:""},on:{"on-change":e.search},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),a("i-switch",{directives:[{name:"show",rawName:"v-show",value:"tree"==e.showType,expression:"showType == 'tree'"}],staticStyle:{"margin-left":"5px"},attrs:{size:"large"},model:{value:e.strict,callback:function(t){e.strict=t},expression:"strict"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("级联")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("单选")])])],1),a("div",[a("RadioGroup",{attrs:{type:"button"},model:{value:e.showType,callback:function(t){e.showType=t},expression:"showType"}},[a("Radio",{attrs:{title:"树结构",label:"tree"}},[a("Icon",{attrs:{type:"md-list"}})],1),a("Radio",{attrs:{title:"列表",label:"list"}},[a("Icon",{attrs:{type:"ios-apps"}})],1)],1)],1)]),a("Row",{directives:[{name:"show",rawName:"v-show",value:"tree"==e.showType,expression:"showType == 'tree'"}],attrs:{type:"flex",justify:"start",gutter:16}},[a("Col",{attrs:{sm:8,md:8,lg:8,xl:6}},[a("Alert",{attrs:{"show-icon":""}},[e._v(" 当前选择编辑： "),a("span",{staticClass:"select-title"},[e._v(e._s(e.editTitle))]),a("a",{directives:[{name:"show",rawName:"v-show",value:e.form.id&&e.editTitle,expression:"form.id && editTitle"}],staticClass:"select-clear",on:{click:e.cancelEdit}},[e._v("取消选择")])]),a("Input",{attrs:{suffix:"ios-search",placeholder:"输入部门名搜索",clearable:""},on:{"on-change":e.search},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"tree-bar",style:{maxHeight:e.maxHeight}},[a("Tree",{ref:"tree",attrs:{data:e.data,"load-data":e.loadData,"show-checkbox":"","check-strictly":!e.strict},on:{"on-check-change":e.changeSelect,"on-select-change":e.selectTree}})],1),e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1),a("Col",{attrs:{sm:16,md:16,lg:16,xl:9}},[a("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate}},[a("FormItem",{staticClass:"form-noheight",attrs:{label:"上级部门",prop:"parentTitle"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{staticStyle:{"margin-right":"10px"},attrs:{readonly:""},model:{value:e.form.parentTitle,callback:function(t){e.$set(e.form,"parentTitle",t)},expression:"form.parentTitle"}}),a("Poptip",{attrs:{transfer:"",trigger:"click",placement:"right-start",title:"选择上级部门",width:"250"}},[a("Button",{attrs:{icon:"md-list"}},[e._v("选择部门")]),a("div",{staticClass:"tree-bar tree-select",attrs:{slot:"content"},slot:"content"},[a("Tree",{attrs:{data:e.dataEdit,"load-data":e.loadData},on:{"on-select-change":e.selectTreeEdit}}),e.loadingEdit?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1)],1)]),a("FormItem",{attrs:{label:"部门名称",prop:"title"}},[a("Input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("FormItem",{attrs:{label:"部门负责人",prop:"mainHeader"}},[a("user-select",{ref:"mainHeader",attrs:{multiple:""},model:{value:e.form.mainHeader,callback:function(t){e.$set(e.form,"mainHeader",t)},expression:"form.mainHeader"}})],1),a("FormItem",{attrs:{label:"副负责人",prop:"viceHeader"}},[a("user-select",{ref:"viceHeader",attrs:{multiple:""},model:{value:e.form.viceHeader,callback:function(t){e.$set(e.form,"viceHeader",t)},expression:"form.viceHeader"}})],1),a("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[a("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[a("InputNumber",{attrs:{max:1e3,min:0},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}})],1)],1),a("FormItem",{attrs:{label:"是否启用",prop:"status"}},[a("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1),a("FormItem",{staticClass:"br"},[a("Button",{attrs:{loading:e.submitLoading,disabled:!e.form.id||!e.editTitle,type:"primary",icon:"ios-create-outline"},on:{click:e.submitEdit}},[e._v("修改并保存")]),a("Button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1)],1),a("Alert",{directives:[{name:"show",rawName:"v-show",value:"list"==e.showType,expression:"showType == 'list'"}],attrs:{"show-icon":""}},[e._v(" 已选择 "),a("span",{staticClass:"select-count"},[e._v(e._s(e.selectList.length))]),e._v(" 项 "),a("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])]),"list"==e.showType?a("Table",{ref:"table",attrs:{"row-key":"title","load-data":e.loadData,columns:e.columns,data:e.data,loading:e.loading,border:"","update-show-children":!0},on:{"on-selection-change":e.showSelect}}):e._e()],1),a("Modal",{attrs:{title:e.modalTitle,"mask-closable":!1,width:500},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("Form",{ref:"formAdd",attrs:{model:e.formAdd,"label-width":85,rules:e.formValidate}},[e.showParent?a("div",[a("FormItem",{attrs:{label:"上级部门："}},[e._v(e._s(e.form.title))])],1):e._e(),a("FormItem",{attrs:{label:"部门名称",prop:"title"}},[a("Input",{model:{value:e.formAdd.title,callback:function(t){e.$set(e.formAdd,"title",t)},expression:"formAdd.title"}})],1),a("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[a("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[a("InputNumber",{attrs:{max:1e3,min:0},model:{value:e.formAdd.sortOrder,callback:function(t){e.$set(e.formAdd,"sortOrder",t)},expression:"formAdd.sortOrder"}})],1)],1),a("FormItem",{attrs:{label:"是否启用",prop:"status"}},[a("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:e.formAdd.status,callback:function(t){e.$set(e.formAdd,"status",t)},expression:"formAdd.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.cancelAdd}},[e._v("取消")]),a("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitAdd}},[e._v("提交")])],1)],1)],1)},i=[],n=a("365c"),l=a("4fdd"),r={name:"department-manage",components:{userSelect:l["default"]},data:function(){var e=this;return{showType:"tree",loading:!0,maxHeight:"500px",strict:!0,loadingEdit:!0,modalVisible:!1,selectList:[],showParent:!1,modalTitle:"",editTitle:"",searchKey:"",form:{id:"",title:null,parentId:"",parentTitle:"",sortOrder:0,status:0},formAdd:{},formValidate:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"change"}]},submitLoading:!1,data:[],dataEdit:[],columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"部门名称",key:"title",minWidth:120,sortable:!0,tree:!0},{title:"排序",key:"sortOrder",width:150,sortable:!0,align:"center",sortType:"asc"},{title:"创建时间",key:"createTime",sortable:!0,width:200},{title:"操作",key:"action",width:300,align:"center",render:function(t,a){return t("div",[t("a",{on:{click:function(){e.tableAdd(a.row)}}},"添加子部门"),t("Divider",{props:{type:"vertical"}}),t("a",{on:{click:function(){e.remove(a.row)}}},"删除")])}}]}},methods:{init:function(){this.getParentList(),this.getParentListEdit()},getParentList:function(){var e=this;this.loading=!0,Object(n["Mb"])().then((function(t){e.loading=!1,t.success&&(t.result.forEach((function(e){e.isParent&&(e.loading=!1,e.children=[],e._loading=!1)})),e.data=t.result)}))},getParentListEdit:function(){var e=this;this.loadingEdit=!0,Object(n["Mb"])().then((function(t){if(e.loadingEdit=!1,t.success){t.result.forEach((function(e){e.isParent&&(e.loading=!1,e.children=[])}));var a={id:"0",title:"一级部门"};t.result.unshift(a),e.dataEdit=t.result}}))},loadData:function(e,t){Object(n["Ob"])(e.id).then((function(e){e.success&&(e.result.forEach((function(e){e.isParent&&(e.loading=!1,e.children=[],e._loading=!1)})),t(e.result))}))},search:function(){var e=this;this.searchKey?(this.loading=!0,Object(n["cc"])({title:this.searchKey}).then((function(t){e.loading=!1,t.success&&(t.result.forEach((function(e){e.isParent&&(e.loading=!1,e.children=[],e._loading=!1)})),e.data=t.result)}))):this.getParentList()},selectTree:function(e){if(e.length>0){for(var t in e[0])null==e[0][t]&&(e[0][t]="");var a=JSON.stringify(e[0]),s=JSON.parse(a);this.editTitle=s.title,this.form=s,this.$refs.mainHeader.setData(s.mainHeaders),this.$refs.viceHeader.setData(s.viceHeaders)}else this.cancelEdit()},cancelEdit:function(){var e=this.$refs.tree.getSelectedNodes()[0];e&&(e.selected=!1),this.$refs.form.resetFields(),delete this.form.id,this.editTitle=""},selectTreeEdit:function(e){if(e.length>0){for(var t in e[0])null==e[0][t]&&(e[0][t]="");var a=JSON.stringify(e[0]),s=JSON.parse(a);if(this.form.id==s.id)return this.$Message.warning("请勿选择自己作为父节点"),void(e[0].selected=!1);this.form.parentId=s.id,this.form.parentTitle=s.title}},cancelAdd:function(){this.modalVisible=!1},handleReset:function(){this.$refs.form.resetFields(),this.form.status=0},submitEdit:function(){var e=this;this.$refs.form.validate((function(t){if(t){if(!e.form.id)return void e.$Message.warning("请先点击选择要修改的部门");e.submitLoading=!0,delete e.form.mainHeaders,delete e.form.viceHeaders,Object(n["H"])(e.form).then((function(t){e.submitLoading=!1,t.success&&(e.$Message.success("编辑成功"),e.init(),e.modalVisible=!1)}))}}))},submitAdd:function(){var e=this;this.$refs.formAdd.validate((function(t){t&&(e.submitLoading=!0,Object(n["a"])(e.formAdd).then((function(t){e.submitLoading=!1,t.success&&(e.$Message.success("添加成功"),e.init(),e.modalVisible=!1)})))}))},add:function(){""!=this.form.id&&null!=this.form.id?(this.modalTitle="添加子部门",this.showParent=!0,this.form.children||(this.form.children=[]),this.formAdd={parentId:this.form.id,sortOrder:this.form.children.length+1,status:0},this.modalVisible=!0):this.$Message.warning("请先点击选择一个部门")},addRoot:function(){this.modalTitle="添加一级部门",this.showParent=!1,this.formAdd={parentId:0,sortOrder:this.data.length+1,status:0},this.modalVisible=!0},changeSelect:function(e){this.selectList=e},tableAdd:function(e){this.form=e,this.add(),this.editTitle="";var t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1)},showSelect:function(e){this.selectList=e},clearSelectAll:function(){this.$refs.table.selectAll(!1)},remove:function(e){this.selectList=[],this.selectList.push(e),this.delAll()},delAll:function(){var e=this;this.selectList.length<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据及其下级所有数据?",loading:!0,onOk:function(){var t="";e.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(n["s"])({ids:t}).then((function(t){e.$Modal.remove(),t.success&&(e.$Message.success("删除成功"),e.selectList=[],e.cancelEdit(),e.init())}))}})}},mounted:function(){var e=document.documentElement.clientHeight;this.maxHeight=Number(e-287)+"px",this.init()}},o=r,c=(a("83ea"),a("2877")),d=Object(c["a"])(o,s,i,!1,null,null,null);t["default"]=d.exports},"2c8a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Cascader",{attrs:{data:e.department,"load-data":e.loadData,"change-on-select":"",size:e.size,transfer:e.transfer,"transfer-class-name":e.transferClassName,disabled:e.disabled,filterable:e.filterable,clearable:e.clearable,placeholder:e.placeholder},on:{"on-change":e.handleChangeDep,"on-visible-change":e.handleVisibleChange},model:{value:e.selectDep,callback:function(t){e.selectDep=t},expression:"selectDep"}})],1)},i=[],n=a("365c"),l={name:"departmentChoose",props:{size:String,transfer:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},placeholder:{type:String,default:"请选择或输入搜索部门"},transferClassName:String},data:function(){return{selectDep:[],department:[]}},methods:{initDepartmentData:function(){var e=this;Object(n["Mb"])().then((function(t){t.success&&(t.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),e.department=t.result)}))},loadData:function(e,t){e.loading=!0,Object(n["Ob"])(e.value).then((function(a){e.loading=!1,a.success&&(a.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),e.children=a.result,t())}))},handleChangeDep:function(e,t){var a="";e&&e.length>0&&(a=e[e.length-1]),this.$emit("on-change",a)},handleVisibleChange:function(e){this.$emit("on-visible-change",e)},clearSelect:function(){this.selectDep=[],this.$emit("on-change","")}},mounted:function(){this.initDepartmentData()}},r=l,o=a("2877"),c=Object(o["a"])(r,s,i,!1,null,null,null);t["default"]=c.exports},"4fdd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex"}},[a("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:"",transfer:e.transfer,clearable:e.clearable,placement:e.placement,"not-found-text":e.notFoundText,"label-in-value":e.labelInValue,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder,"remote-method":e.searchUser},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.userList,(function(t,s){return a("Option",{key:s,attrs:{value:t.id,label:t.nickname,tag:t.username}},[a("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(t.nickname))]),a("span",{staticStyle:{color:"#ccc"}},[e._v(e._s(t.username))])])})),1),e.showButton?a("Button",{staticStyle:{"margin-left":"10px"},attrs:{size:e.size,disabled:e.disabled,icon:e.icon,type:e.type,shape:e.shape,ghost:e.ghost},on:{click:function(t){e.userModalVisible=!0}}},[e._v(e._s(e.text))]):e._e()],1),e.showButton?a("Drawer",{staticClass:"user-select-drawer",attrs:{title:"选择用户",closable:"",width:"815",draggable:"",transfer:e.drawerTransfer,"mask-style":e.maskStyle,"class-name":e.className},model:{value:e.userModalVisible,callback:function(t){e.userModalVisible=t},expression:"userModalVisible"}},[a("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":70}},[a("FormItem",{attrs:{label:"用户名",prop:"nickname"}},[a("Input",{staticStyle:{width:"180px"},attrs:{type:"text",clearable:"",placeholder:"请输入用户名"},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1),a("FormItem",{attrs:{label:"部门",prop:"department"}},[a("department-choose",{ref:"dep",staticStyle:{width:"180px"},on:{"on-change":e.handleSelectDep}})],1),e.drop?a("span",[a("FormItem",{attrs:{label:"手机号",prop:"mobile"}},[a("Input",{staticStyle:{width:"180px"},attrs:{type:"text",clearable:"",placeholder:"请输入手机号"},model:{value:e.searchForm.mobile,callback:function(t){e.$set(e.searchForm,"mobile",t)},expression:"searchForm.mobile"}})],1),a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("Input",{staticStyle:{width:"180px"},attrs:{type:"text",clearable:"",placeholder:"请输入邮箱"},model:{value:e.searchForm.email,callback:function(t){e.$set(e.searchForm,"email",t)},expression:"searchForm.email"}})],1),a("FormItem",{attrs:{label:"性别",prop:"sex"}},[a("dict",{staticStyle:{width:"180px"},attrs:{dict:"sex"},model:{value:e.searchForm.sex,callback:function(t){e.$set(e.searchForm,"sex",t)},expression:"searchForm.sex"}})],1),a("FormItem",{attrs:{label:"登录账号",prop:"username"}},[a("Input",{staticStyle:{width:"180px"},attrs:{type:"text",clearable:"",placeholder:"请输入登录账号"},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),a("FormItem",{attrs:{label:"用户ID",prop:"id"}},[a("Input",{staticStyle:{width:"180px"},attrs:{type:"text",clearable:"",placeholder:"请输入用户ID"},model:{value:e.searchForm.id,callback:function(t){e.$set(e.searchForm,"id",t)},expression:"searchForm.id"}})],1)],1):e._e(),a("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearchUser}},[e._v("搜索")]),a("Button",{on:{click:e.handleResetUser}},[e._v("重置")]),a("a",{staticClass:"drop-down",on:{click:e.dropDown}},[e._v(" "+e._s(e.dropDownContent)+" "),a("Icon",{attrs:{type:e.dropDownIcon}})],1)],1)],1),a("Alert",{attrs:{"show-icon":""}},[e._v(" 已选择 "),a("span",{staticClass:"select-count"},[e._v(e._s(e.selectCount))]),e._v(" 项 "),a("a",{staticStyle:{"margin-left":"10px"},on:{click:e.clearData}},[e._v("清空已选")])]),a("Table",{staticStyle:{margin:"2vh 0"},attrs:{loading:e.userLoading,border:"",columns:e.userColumns,data:e.userData}}),a("Row",{attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.searchForm.pageNumber,total:e.totalUser,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":"",transfer:!0},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1):e._e()],1)},i=[],n=a("365c"),l=a("2c8a"),r=a("76e2"),o={name:"userSelect",components:{departmentChoose:l["default"],dict:r["default"]},props:{showButton:{type:Boolean,default:!0},text:{type:String,default:"选择用户"},icon:{type:String,default:"md-person-add"},size:String,type:String,shape:String,ghost:{type:Boolean,default:!1},transfer:{type:Boolean,default:!0},drawerTransfer:{type:Boolean,default:!0},placeholder:{type:String,default:"请输入用户名搜索选择用户"},placement:{type:String,default:"bottom-start"},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},notFoundText:{type:String,default:"无匹配数据"},labelInValue:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0},maskStyle:Object,className:Object},data:function(){var e=this;return{value:null,userList:[],loading:!1,userLoading:!0,userModalVisible:!1,drop:!1,dropDownContent:"展开",dropDownIcon:"ios-arrow-down",selectCount:0,searchForm:{id:"",nickname:"",type:"",status:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc"},userColumns:[{type:"index",width:60,align:"center"},{title:"用户名",key:"nickname",minWidth:130,sortable:!0},{title:"登录账号",key:"username",minWidth:130,sortable:!0},{title:"头像",key:"avatar",width:80,align:"center",render:function(e,t){return e("Avatar",{props:{src:t.row.avatar}})}},{title:"所属部门",key:"departmentTitle",width:120},{title:"手机",key:"mobile",width:125,sortable:!0},{title:"邮箱",key:"email",width:180,sortable:!0},{title:"性别",key:"sex",width:70,align:"center"},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",width:170},{title:"操作",key:"action",width:130,align:"center",fixed:"right",render:function(t,a){var s="添加该用户";return e.multiple||(s="选择该用户"),t("div",[t("Button",{props:{type:"info",size:"small"},on:{click:function(){e.addUser(a.row)}}},s)])}}],userData:[],totalUser:0}},methods:{searchUser:function(e){var t=this;e&&(this.loading=!0,Object(n["fc"])(e).then((function(e){t.loading=!1,e.success&&(t.userList=e.result)})))},handleChange:function(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange:function(e){this.$emit("on-query-change",e)},handleClear:function(){this.$emit("on-clear","")},handleOpenChange:function(e){this.$emit("on-open-change",e)},handleSelect:function(e){this.$emit("on-select",e)},setData:function(e){var t=this;if(e.length||0==e.length)if(e.length>0){if(!this.multiple)return void this.$Message.warning("单个选择仅支持传入单个用户数据");var a=[],s=[];e.forEach((function(e){a.push(e),s.push(e.id)})),this.userList=a,setTimeout((function(){t.value=s,t.$emit("input",s),t.selectCount=e.length}),10)}else this.multiple?(this.value=[],this.$emit("input",[])):(this.value="",this.$emit("input",""));else{if(this.multiple)return void this.$Message.warning("多个选择仅支持传入用户数组数据");if(!e)return;var i=[e];this.userList=i,setTimeout((function(){t.value=e.id,t.$emit("input",e.id),t.selectCount=1}),10)}},handleSelectDep:function(e){this.searchForm.departmentId=e},dropDown:function(){this.drop?(this.dropDownContent="展开",this.dropDownIcon="ios-arrow-down"):(this.dropDownContent="收起",this.dropDownIcon="ios-arrow-up"),this.drop=!this.drop},changePage:function(e){this.searchForm.pageNumber=e,this.getDataList()},changePageSize:function(e){this.searchForm.pageSize=e,this.getDataList()},getDataList:function(){var e=this;this.userLoading=!0,Object(n["Hb"])(this.searchForm).then((function(t){e.userLoading=!1,t.success&&(e.userData=t.result.content,e.totalUser=t.result.totalElements)}))},handleSearchUser:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleResetUser:function(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.$refs.dep.clearSelect(),this.searchForm.departmentId="",this.getDataList()},clearData:function(){this.selectCount=0,this.multiple?(this.value=[],this.$emit("input",[]),this.$emit("on-change",[])):(this.value="",this.$emit("input",""),this.$emit("on-change",""))},addUser:function(e){var t=this;if(this.multiple){var a=!0;if(this.value&&this.value.length>0?this.value.forEach((function(s){e.id==s&&(t.$Message.warning("已经添加过啦，请勿重复选择"),a=!1)})):this.value=[],a){var s={id:e.id,username:e.username,nickname:e.nickname},i=!1;this.userList.forEach((function(t){e.id==t.id&&(i=!0)})),i||this.userList.push(s),setTimeout((function(){t.value.push(e.id),t.$emit("input",t.value),t.$emit("on-change",t.value),t.selectCount=t.value.length}),10),this.$Message.success("添加用户 ".concat(e.nickname," 成功"))}}else this.userList=[{id:e.id,username:e.username,nickname:e.nickname}],setTimeout((function(){t.value=e.id,t.$emit("input",t.value),t.$emit("on-change",t.value),t.selectCount=1}),10),this.$Message.success("选择用户 ".concat(e.nickname," 成功"))}},mounted:function(){this.getDataList()}},c=o,d=(a("b148"),a("2877")),u=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports},"5ff7":function(e,t,a){},"76e2":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(t,s){return a("Option",{key:s,attrs:{value:t.value}},[e._v(e._s(t.title))])})),1)],1)},i=[],n=a("365c"),l={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data:function(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData:function(e){var t=this;this.loading=!0,Object(n["ib"])(e).then((function(e){t.loading=!1,e.success&&(t.dictData=e.result)}))},handleChange:function(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange:function(e){this.$emit("on-query-change",e)},handleClear:function(){this.$emit("on-clear","")},handleOpenChange:function(e){this.$emit("on-open-change",e)},handleSelect:function(e){this.$emit("on-select",e)},setCurrentValue:function(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value:function(e){this.setCurrentValue(e)},dict:function(e){this.getData(e)}},mounted:function(){this.getData(this.dict)}},r=l,o=a("2877"),c=Object(o["a"])(r,s,i,!1,null,null,null);t["default"]=c.exports},"83ea":function(e,t,a){"use strict";a("5ff7")},b148:function(e,t,a){"use strict";a("1df5")}}]);