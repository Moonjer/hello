(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0b55":function(e,t,n){"use strict";n.r(t);var i=n("4a1e"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"4a1e":function(e,t,n){"use strict";n("a9e3"),n("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{src:"",type:0,isShow:!1,current:0,tabbarHeight:0}},onLoad:function(e){this.change(Number(e.current))},methods:{change:function(e){var t=this;this.current=e,this.$nextTick((function(){var n=uni.createSelectorQuery().in(t).select(".bottom-line");n.fields({size:!0,scrollOffset:!0},(function(e){t.tabbarHeight=e.height})).exec(),0==e?t.$refs["myCustomer"].initPage():1==e?t.$refs["teamIndex"].initPage():2==e?t.$refs["taskList"].initPage():3==e?t.$refs["projectManage"].initPage():4==e&&t.$refs["userCenter"].initPage()}))}}};t.default=i},"9f05":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={tabbar:n("0e53").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"home"},[n("v-uni-view",{staticClass:"bottom-line"}),n("tabbar",{attrs:{index:e.current},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.isShow&&1==e.type,expression:"isShow && type == 1"}],staticClass:"mask-1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.isShow&&0==e.type,expression:"isShow && type == 0"}],staticClass:"mask-2"})],1)},r=[]},c63e:function(e,t,n){"use strict";n.r(t);var i=n("9f05"),a=n("0b55");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var s,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"59c124bb",null,!1,i["a"],s);t["default"]=o.exports}}]);