(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f0f9"],{d7e5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("添加")]),a("Form",{ref:"form",attrs:{model:t.form,"label-width":90,rules:t.formValidate}},[a("FormItem",{attrs:{label:"名称",prop:"name"}},[a("Input",{staticStyle:{width:"400px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("FormItem",{staticClass:"br"},[a("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),a("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1)},i=[],o={name:"add",data:function(){return{loading:!0,submitLoading:!1,form:{id:"",name:""},formValidate:{name:[{required:!0,message:"不能为空",trigger:"change"}]},backRoute:""}},methods:{init:function(){this.backRoute=this.$route.query.backRoute},handleReset:function(){this.$refs.form.resetFields()},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.submitLoading=!1,t.$Message.success("添加成功"),t.closeCurrentPage())}))},closeCurrentPage:function(){this.$store.commit("removeTag","add"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList),this.$router.push({name:this.backRoute})}},watch:{$route:function(t,e){"add"==t.name&&this.handleReset()}},mounted:function(){this.init()}},s=o,r=a("2877"),u=Object(r["a"])(s,n,i,!1,null,null,null);e["default"]=u.exports}}]);