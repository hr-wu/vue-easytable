(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7fa5b4"],{8444:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Combining Pagination")]),t("Explain"),t("Basic")],1)},i=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、The table component and the paging component are separate"),t("br"),e._v(" 2、The following example is simulated data, and paging is usually combined with back-end services"),t("br"),e._v(" 3、There is a lot of data, but you don't want to use paging. You can also use virtual scrolling"),t("br")])])])}],o=t("2877"),s={},c=Object(o["a"])(s,r,l,!1,null,null,null),p=c.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Example",fileName:"basic.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table :columns="columns" :table-data="tableData" />\n        <div class="table-pagination">\n            <ve-pagination\n                :total="totalCount"\n                :page-index="pageIndex"\n                :page-size="pageSize"\n                @on-page-number-change="pageNumberChange"\n                @on-page-size-change="pageSizeChange"\n            />\n        </div>\n    </div>\n</template>\n\n<style>\n    .table-pagination {\n        margin-top: 20px;\n        text-align: right;\n    }\n</style>\n\n<script>\n    // Simulation table data from database\n    let DB_DATA = [];\n\n    export default {\n        data() {\n            return {\n                // page index\n                pageIndex: 1,\n                // page size\n                pageSize: 10,\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "Number",\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;\n                        },\n                    },\n                    { field: "name", key: "b", title: "Name", align: "center" },\n                    { field: "date", key: "c", title: "Date", align: "left" },\n                    { field: "hobby", key: "d", title: "Hobby", align: "left" },\n                    { field: "address", key: "e", title: "Address", width: "" },\n                ],\n            };\n        },\n        computed: {\n            // table data\n            tableData() {\n                const { pageIndex, pageSize } = this;\n                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);\n            },\n            // total count\n            totalCount() {\n                return DB_DATA.length;\n            },\n        },\n        methods: {\n            // page number change\n            pageNumberChange(pageIndex) {\n                this.pageIndex = pageIndex;\n            },\n\n            // page size change\n            pageSizeChange(pageSize) {\n                this.pageIndex = 1;\n                this.pageSize = pageSize;\n            },\n\n            // Simulation table data\n            initDatabase() {\n                DB_DATA = [];\n                for (let i = 0; i < 1000; i++) {\n                    DB_DATA.push({\n                        name: "John" + i,\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat" + i,\n                        address: "No.1 Century Avenue, Shanghai" + i,\n                    });\n                }\n            },\n        },\n        created() {\n            this.initDatabase();\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData}}),e._v(" "),t("div",{staticClass:"table-pagination"},[t("ve-pagination",{attrs:{total:e.totalCount,"page-index":e.pageIndex,"page-size":e.pageSize},on:{"on-page-number-change":e.pageNumberChange,"on-page-size-change":e.pageSizeChange}})],1)],1)]],2)},n=[],t=[],a={data:function(){var e=this;return{pageIndex:1,pageSize:10,columns:[{field:"",key:"a",title:"Number",align:"center",renderBodyCell:function(n,t){n.row,n.column;var a=n.rowIndex;return(e.pageIndex-1)*e.pageSize+a+1}},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{tableData:function(){var e=this.pageIndex,n=this.pageSize;return t.slice((e-1)*n,e*n)},totalCount:function(){return t.length}},methods:{pageNumberChange:function(e){this.pageIndex=e},pageSizeChange:function(e){this.pageIndex=1,this.pageSize=e},initDatabase:function(){t=[];for(var e=0;e<1e3;e++)t.push({name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}},created:function(){this.initDatabase()}};return b({render:e,staticRenderFns:n},a)}()}},f=m,v=(t("e9f0"),Object(o["a"])(f,d,g,!1,null,null,null)),y=v.exports,x={name:"basic-main",components:{Explain:p,Basic:y}},z=x,D=Object(o["a"])(z,a,i,!1,null,null,null);n["default"]=D.exports},"947a":function(e,n,t){},e9f0:function(e,n,t){"use strict";t("947a")}}]);
//# sourceMappingURL=chunk-0c7fa5b4.36ba9914.js.map