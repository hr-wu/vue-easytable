(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1dd9"],{2258:function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",[t._v("实例方法")]),l("Explain"),l("ScrollTo")],1)},n=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"content example-md-doc"},[l("div",{staticClass:"tip"},[l("p",[t._v("1、Instance methods can be accessed directly through "),l("a",{attrs:{href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"}},[t._v("ref")])])])])}],r=l("2877"),a={},s=Object(r["a"])(a,i,c,!1,null,null,null),u=s.exports,d=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"scrollTo",fileName:"scroll-to.md"}}),l("demo-block",[l("div",[l("p",[t._v("1、Params refer to "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"}},[t._v("scrollTo")])])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollY(1000)">Scroll vertically to 1000px</button>\n            <button class="button-demo" @click="scrollY(500)">Scroll vertically to 500px</button>\n            <button class="button-demo" @click="scrollY(0)">Scroll vertically to 0px</button>\n            <button class="button-demo" @click="scrollX(500)">Scroll horizontally to 300px</button>\n            <button class="button-demo" @click="scrollX(300)">Scroll horizontally to 200px</button>\n            <button class="button-demo" @click="scrollX(0)">Scroll horizontally to 0px</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowkey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowkey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollY(val) {\n                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });\n            },\n            // scroll x\n            scrollX(val) {\n                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function b(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,o)}return l}function m(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?b(Object(l),!0).forEach((function(e){h(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function h(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}var p={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(1e3)}}},[t._v("Scroll vertically to 1000px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(500)}}},[t._v("Scroll vertically to 500px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(0)}}},[t._v("Scroll vertically to 0px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(500)}}},[t._v("Scroll horizontally to 300px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(300)}}},[t._v("Scroll horizontally to 200px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(0)}}},[t._v("Scroll horizontally to 0px")])]),t._v(" "),l("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowkey"}})],1)]],2)},e=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowkey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=t},scrollY:function(t){this.$refs["tableRef"].scrollTo({top:t,behavior:"smooth"})},scrollX:function(t){this.$refs["tableRef"].scrollTo({left:t,behavior:"smooth"})}},created:function(){this.initTableData()}};return m({render:t,staticRenderFns:e},l)}()}},v=p,y=Object(r["a"])(v,d,f,!1,null,null,null),k=y.exports,x={name:"basic-main",components:{Explain:u,ScrollTo:k}},T=x,_=Object(r["a"])(T,o,n,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0b1dd9.3a66e037.js.map