(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e671a50"],{"0575":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-line"},[e("Card",[e("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[t._v("加盟店销量")]),e("div",{attrs:{slot:"extra"},slot:"extra"},[e("DatePicker",{staticStyle:{width:"220px"},attrs:{type:"year",placeholder:"选择查看的年份"}})],1),e("div",{staticClass:"wrap"},[e("div",{staticClass:"chart"},[e("apexchart",{attrs:{type:"line",height:"380",options:t.chartOptions,series:t.series}})],1),e("Row",{staticClass:"row"},[e("Col",{staticClass:"text",attrs:{span:"8"}},[e("h6",{},[t._v("距离目标")]),e("h3",[e("Icon",{attrs:{type:"ios-arrow-round-down",size:"28",color:"#f0643b"}}),t._v("￥10,345 ")],1)]),e("Col",{staticClass:"text",attrs:{span:"8"}},[e("h6",{},[t._v("同比上周")]),e("h3",[e("Icon",{attrs:{type:"ios-arrow-round-up",size:"28",color:"#23b397"}}),t._v("￥7,589 ")],1)]),e("Col",{staticClass:"text",attrs:{span:"8"}},[e("h6",{},[t._v("同比上月")]),e("h3",[e("Icon",{attrs:{type:"ios-arrow-round-down",size:"28",color:"#f0643b"}}),t._v("￥1,476 ")],1)])],1)],1)])],1)},o=[],r=e("a3e9"),i={name:"line-chart",components:{},props:{},data:function(){return{series:[{name:"",data:[]}],chartOptions:{chart:{stacked:!1,toolbar:{show:!1},locales:[r],defaultLocale:"zh"},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},markers:{size:0},xaxis:{labels:{formatter:function(t){return t+"月"}},categories:["1","2","3","4","5","6","7","8","9","10","11","12"]},yaxis:{min:0},tooltip:{shared:!0,intersect:!1},dataLabels:{enabled:!1},legend:{offsetY:5}}}},methods:{init:function(){this.series=[{name:"分公司A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30,35]},{name:"分公司B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43,47]},{name:"分公司C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39,45]}]}},mounted:function(){this.init()}},n=i,l=(e("632f"),e("2877")),c=Object(l["a"])(n,a,o,!1,null,null,null);s["default"]=c.exports},"451d":function(t,s,e){},"632f":function(t,s,e){"use strict";e("451d")},a3e9:function(t){t.exports=JSON.parse('{"name":"zh","options":{"months":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"shortMonths":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"days":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"shortDays":["周日","周一","周二","周三","周四","周五","周六"],"toolbar":{"exportToSVG":"下载图表 SVG","exportToPNG":"下载图表 PNG","exportToCSV":"导出数据 CSV","menu":"菜单","selection":"选择","selectionZoom":"区域缩放","zoomIn":"缩小","zoomOut":"放大","pan":"移动","reset":"重置缩放"}}}')}}]);