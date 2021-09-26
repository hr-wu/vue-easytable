(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b01f334"],{2832:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.virtualScrollOption.data,columns:e.db.virtualScrollOption.columns}})],1)},l=[],r=t("3ef3"),i=t("d890"),o={components:{tpl:r["a"]},props:{anchor:{type:String,default:"虚拟滚动配置"},desc:{type:String,default:"virtualScrollOption"}},data:function(){return{db:i["a"]}}},c=o,d=t("2877"),s=Object(d["a"])(c,a,l,!1,null,null,null);n["a"]=s.exports},4746:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("虚拟滚动")]),t("Explain"),t("Base"),t("AutoHeight"),t("RowCheckbox"),t("RowRadio"),t("RowExpand"),t("ColumnFixed"),t("FooterSummary"),t("API",{attrs:{title:"API",anchor:"API",desc:"virtualScrollOption 虚拟滚动配置"}})],1)},l=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、属性"),t("code",[e._v("virtualScrollOption")]),e._v("开启虚拟滚动。建议当一次性需要展示 "),t("strong",[e._v("1000 以上")]),e._v(" 数据时使用，可以支撑 "),t("strong",[e._v("20 万以上")]),e._v("数据"),t("br"),e._v(" 2、属性"),t("code",[e._v("maxHeight")]),e._v("设置虚拟滚动区域的最大高度。"),t("code",[e._v("maxHeight")]),e._v("为必传属性"),t("br"),e._v(" 3、"),t("code",[e._v("rowKeyFieldName")]),e._v("为必传属性。"),t("code",[e._v("rowKeyFieldName")]),e._v("属性对应行数据的列名"),t("br"),e._v(" 4、"),t("strong",[e._v("开启虚拟滚动功能后，其他功能依然可用")])])])])}],o=t("2877"),c={},d=Object(o["a"])(c,r,i,!1,null,null,null),s=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"基础功能",fileName:"base.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "a",\n                        title: "#",\n                        width: 100,\n                        align: "left",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        index: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,index:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return m({render:e,staticRenderFns:n},t)}()}},y=h,v=Object(o["a"])(y,u,b,!1,null,null,null),w=v.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"任意行高",fileName:"auto-height.md"}}),t("demo-block",[t("div",[t("p",[e._v("支持非固定行高")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "a",\n                        title: "#",\n                        width: 100,\n                        align: "left",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            getRandom(min, max) {\n                return Math.floor(Math.random() * (max - min) + min);\n            },\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    let value = "";\n                    if (i % 2 === 0) {\n                        const rowCount = this.getRandom(3, 5);\n\n                        for (let i = 0; i < rowCount; i++) {\n                            value += `this is the long word.<br />`;\n                        }\n                    } else {\n                        value = `name${i}`;\n                    }\n\n                    data.push({\n                        rowKey: i,\n                        index: i,\n                        name: value,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){D(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{getRandom:function(e,n){return Math.floor(Math.random()*(n-e)+e)},initData:function(){for(var e=[],n=0;n<1e4;n++){var t="";if(n%2===0)for(var a=this.getRandom(3,5),l=0;l<a;l++)t+="this is the long word.<br />";else t="name".concat(n);e.push({rowKey:n,index:n,name:t,hobby:"hobby".concat(n),address:"address".concat(n)})}this.tableData=e}},created:function(){this.initData()}};return x({render:e,staticRenderFns:n},t)}()}},P=j,_=Object(o["a"])(P,O,g,!1,null,null,null),S=_.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"结合行多选",fileName:"row-checkbox.md"}}),t("demo-block",[t("div",[t("p",[e._v("行多选，要指定属性"),t("code",[e._v("rowKeyFieldName")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :checkbox-option="checkboxOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                checkboxOption: {\n                    // 行选择改变事件\n                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {\n                        console.log(row, isSelected, selectedRowKeys);\n                    },\n                    // 全选改变事件\n                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {\n                        console.log(isSelected, selectedRowKeys);\n                    },\n                },\n\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=checkbox\n                        type: "checkbox",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},E=[];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){R(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var H={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"checkbox-option":e.checkboxOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},checkboxOption:{selectedRowChange:function(e){var n=e.row,t=e.isSelected,a=e.selectedRowKeys;console.log(n,t,a)},selectedAllChange:function(e){var n=e.isSelected,t=e.selectedRowKeys;console.log(n,t)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return C({render:e,staticRenderFns:n},t)}()}},N=H,A=Object(o["a"])(N,K,E,!1,null,null,null),F=A.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"结合行单选",fileName:"row-radio.md"}}),t("demo-block",[t("div",[t("p",[e._v("行单选，要指定属性"),t("code",[e._v("rowKeyFieldName")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :radio-option="radioOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                radioOption: {\n                    // 行选择改变事件\n                    selectedRowChange: ({ row }) => {\n                        console.log(row);\n                    },\n                },\n\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},I=[];function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){T(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"radio-option":e.radioOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},radioOption:{selectedRowChange:function(e){var n=e.row;console.log(n)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return L({render:e,staticRenderFns:n},t)}()}},q=J,z=Object(o["a"])(q,M,I,!1,null,null,null),G=z.exports,Q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"结合行展开",fileName:"row-expand.md"}}),t("demo-block",[t("div",[t("p",[e._v("行展开，要指定属性"),t("code",[e._v("rowKeyFieldName")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :expand-option="expandOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                expandOption: {\n                    render: ({ row, column, rowIndex }, h) => {\n                        return (\n                            <p>\n                                My name is <span style="color:#1890ff;">{row.name}</span>\n                                ,I\'m living in {row.address}\n                            </p>\n                        );\n                    },\n                },\n\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=expand\n                        type: "expand",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},U=[];function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){X(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"expand-option":e.expandOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},expandOption:{render:function(e,n){var t=e.row;e.column,e.rowIndex;return n("p",["My name is ",n("span",{style:"color:#1890ff;"},[t.name]),",I'm living in ",t.address])}},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return W({render:e,staticRenderFns:n},t)}()}},Z=Y,ee=Object(o["a"])(Z,Q,U,!1,null,null,null),ne=ee.exports,te=t("655f"),ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"结合固定列",fileName:"column-fixed.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            border-y\n            :max-height="500"\n            :scroll-width="1600"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col7",\n                        key: "g",\n                        title: "col7",\n                        width: 50,\n                        fixed: "right",\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},le=[];function re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?re(Object(t),!0).forEach((function(n){oe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ce={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","border-y":"","max-height":500,"scroll-width":1600,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:50,fixed:"right"},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,col1:n,col2:n,col3:n,col4:n,col5:n,col6:n,col7:n,col8:n,col9:n,col10:n});this.tableData=e}},created:function(){this.initData()}};return ie({render:e,staticRenderFns:n},t)}()}},de=ce,se=Object(o["a"])(de,ae,le,!1,null,null,null),ue=se.exports,be=t("2832"),fe={name:"basic-main",components:{Explain:s,Base:w,AutoHeight:S,RowCheckbox:F,RowRadio:G,RowExpand:ne,ColumnFixed:ue,FooterSummary:te["a"],API:be["a"]}},me=fe,pe=Object(o["a"])(me,a,l,!1,null,null,null);n["default"]=pe.exports},"655f":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"footer 结合虚拟滚动",fileName:"virtual-scroll.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、表格设置了虚拟滚动，footer 汇总自动支持，无需额外配置")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            :footer-data="footerData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n\n                columns: [\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n\n                this.footerData = [\n                    {\n                        rowKey: 0,\n                        name: "平均值",\n                        date: 1100,\n                        hobby: 1200,\n                        address: 1300,\n                    },\n                    {\n                        rowKey: 1,\n                        name: "汇总值",\n                        date: 701000,\n                        hobby: 801000,\n                        address: 801000,\n                    },\n                ];\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},l=[];function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e,this.footerData=[{rowKey:0,name:"平均值",date:1100,hobby:1200,address:1300},{rowKey:1,name:"汇总值",date:701e3,hobby:801e3,address:801e3}]}},created:function(){this.initData()}};return i({render:e,staticRenderFns:n},t)}()}},d=c,s=t("2877"),u=Object(s["a"])(d,a,l,!1,null,null,null);n["a"]=u.exports}}]);
//# sourceMappingURL=chunk-0b01f334.c92fc1d3.js.map