webpackJsonp([4],{"4PCU":function(module,exports,s){module.exports=s("K6sT")},"8Jtg":function(module,exports,s){module.exports=s("OWfJ")},G1CU:function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" row-hover-color="#eee" row-click-color="#edf7ff" :select-all="selectALL" :select-change="selectChange" :select-group-change="selectGroupChange"></v-table>\n</template>\n\n\n',script:'\n\n    export default{\n        data() {\n            return {\n                tableData: [\n                    {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},\n                    {"name":"禁止取消","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼",_checked:true,_disabled:true},\n                    {"name":"禁止选中","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号",_disabled:true},\n                    {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号",_checked:true},\n                    {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}\n                ],\n                columns: [\n                    {width: 60, titleAlign: \'center\',columnAlign:\'center\',type: \'selection\',isFrozen:true},\n                    {field: \'name\', title: \'姓名\', width: 80, titleAlign: \'center\', columnAlign: \'center\',isResize:true},\n                    {field: \'tel\', title: \'手机号码\', width: 150, titleAlign: \'center\', columnAlign: \'center\',isResize:true},\n                    {field: \'hobby\', title: \'爱好\', width: 150, titleAlign: \'center\', columnAlign: \'center\',isResize:true},\n                    {field: \'address\', title: \'地址\', width: 280, titleAlign: \'center\', columnAlign: \'left\',isResize:true}\n                ]\n            }\n        },\n         methods:{\n                 //\n                 selectALL(selection){\n\n                     console.log(\'select-aLL\',selection);\n                 },\n\n                 selectChange(selection,rowData){\n                     console.log(\'select-change\',selection,rowData);\n                 },\n\n                 selectGroupChange(selection){\n                     console.log(\'select-group-change\',selection);\n                 }\n         }\n    }\n',style:null},showDemo:!0}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("v-table",{staticStyle:{width:"100%"},attrs:{"is-horizontal-resize":"",columns:s.columns,"table-data":s.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","select-all":s.selectALL,"select-change":s.selectChange,"select-group-change":s.selectGroupChange}})]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"},[a("p",[s._v("提示：如果存在禁用的 "),a("strong",[s._v("选中项")]),s._v(" 则一直为部分选中状态")]),s._v(" "),a("ul",[a("li",[s._v("通过给 "),a("code",[s._v("table-data")]),s._v(" 设置 "),a("code",[s._v("_checked: true")]),s._v(" 可以默认选中当前项")])]),s._v(" "),a("ul",[a("li",[s._v("通过给 "),a("code",[s._v("table-data")]),s._v(" 设置 "),a("code",[s._v("_disabled: true")]),s._v(" 可以禁止选择当前项")])])]),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("is-horizontal-resize")]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:100%"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":columns")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"columns"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":table-data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tableData"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("row-hover-color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"#eee"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("row-click-color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"#edf7ff"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":select-all")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectALL"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":select-change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectChange"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":select-group-change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectGroupChange"')]),s._v("\n    >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tableData")]),s._v(": [\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"赵伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"156*****1987"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市黄浦区金陵东路569号17楼"')]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"禁止取消"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"182*****1538"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市奉贤区南桥镇立新路12号2楼"')]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("_checked")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("_disabled")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"禁止选中"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"161*****0097"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市崇明县城桥镇八一路739号"')]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("_disabled")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"周伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"197*****1123"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市青浦区青浦镇章浜路24号"')]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("_checked")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"吴伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"183*****6678"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市松江区乐都西路867-871号"')]),s._v("}\n                ],\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columns")]),s._v(": [\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("60")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'selection'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isFrozen")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'姓名'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("80")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'tel'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'手机号码'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'hobby'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爱好'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'address'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'地址'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("280")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("}\n                ]\n            }\n        },\n         "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n                 "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//")]),s._v("\n                 selectALL(selection){\n\n                     "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'select-aLL'")]),s._v(",selection);\n                 },\n\n                 selectChange(selection,rowData){\n                     "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'select-change'")]),s._v(",selection,rowData);\n                 },\n\n                 selectGroupChange(selection){\n                     "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'select-group-change'")]),s._v(",selection);\n                 }\n         }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0},K0cF:function(module,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{tableData:[{name:"赵伟",tel:"156*****1987",hobby:"钢琴、书法、唱歌",address:"上海市黄浦区金陵东路569号17楼"},{name:"李伟",tel:"182*****1538",hobby:"钢琴、书法、唱歌",address:"上海市奉贤区南桥镇立新路12号2楼"},{name:"孙伟",tel:"161*****0097",hobby:"钢琴、书法、唱歌",address:"上海市崇明县城桥镇八一路739号"},{name:"周伟",tel:"197*****1123",hobby:"钢琴、书法、唱歌",address:"上海市青浦区青浦镇章浜路24号"},{name:"吴伟",tel:"183*****6678",hobby:"钢琴、书法、唱歌",address:"上海市松江区乐都西路867-871号"}],columns:[{width:60,titleAlign:"center",columnAlign:"center",type:"selection"},{field:"name",title:"姓名",width:80,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"tel",title:"手机号码",width:150,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"hobby",title:"爱好",width:150,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"address",title:"地址",width:280,titleAlign:"center",columnAlign:"left",isResize:!0}]}},methods:{selectALL:function(s){console.log("select-aLL",s)},selectChange:function(s,t){console.log("select-change",s,t)},selectGroupChange:function(s){console.log("select-group-change",s)}}}},K6sT:function(module,exports,s){var t=s("VU/8")(s("R2lB"),s("d+4k"),null,null,null);t.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\selection\\main.md",t.esModule&&Object.keys(t.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] main.md: functional components are not supported with templates, they should use render functions."),module.exports=t.exports},KTT0:function(module,exports,s){module.exports=s("XHJi")},OWfJ:function(module,exports,s){var t=s("VU/8")(s("K0cF"),s("uVL8"),null,null,null);t.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\selection\\selection-simple.md",t.esModule&&Object.keys(t.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] selection-simple.md: functional components are not supported with templates, they should use render functions."),module.exports=t.exports},R2lB:function(module,exports,s){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(exports,"__esModule",{value:!0});var a=s("8Jtg"),l=t(a),n=s("KTT0"),e=t(n);exports.default={name:"selection-main",components:{selectionSimple:l.default,selectionAdvanced:e.default}}},XHJi:function(module,exports,s){var t=s("VU/8")(s("Zkzi"),s("G1CU"),null,null,null);t.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\selection\\selection-advanced.md",t.esModule&&Object.keys(t.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] selection-advanced.md: functional components are not supported with templates, they should use render functions."),module.exports=t.exports},Zkzi:function(module,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{tableData:[{name:"赵伟",tel:"156*****1987",hobby:"钢琴、书法、唱歌",address:"上海市黄浦区金陵东路569号17楼"},{name:"禁止取消",tel:"182*****1538",hobby:"钢琴、书法、唱歌",address:"上海市奉贤区南桥镇立新路12号2楼",_checked:!0,_disabled:!0},{name:"禁止选中",tel:"161*****0097",hobby:"钢琴、书法、唱歌",address:"上海市崇明县城桥镇八一路739号",_disabled:!0},{name:"周伟",tel:"197*****1123",hobby:"钢琴、书法、唱歌",address:"上海市青浦区青浦镇章浜路24号",_checked:!0},{name:"吴伟",tel:"183*****6678",hobby:"钢琴、书法、唱歌",address:"上海市松江区乐都西路867-871号"}],columns:[{width:60,titleAlign:"center",columnAlign:"center",type:"selection",isFrozen:!0},{field:"name",title:"姓名",width:80,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"tel",title:"手机号码",width:150,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"hobby",title:"爱好",width:150,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"address",title:"地址",width:280,titleAlign:"center",columnAlign:"left",isResize:!0}]}},methods:{selectALL:function(s){console.log("select-aLL",s)},selectChange:function(s,t){console.log("select-change",s,t)},selectGroupChange:function(s){console.log("select-group-change",s)}}}},"d+4k":function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n         <div class="mt30">\n            <h3>多选功能</h3>\n\n            <div class="mt30">\n               <anchor id="selection" label="简单的多选功能" h4></anchor>\n               <selection-simple></selection-simple>\n           </div>\n\n             <div class="mt30">\n                  <anchor id="selection" label="高级多选功能" h4></anchor>\n                  <selection-advanced></selection-advanced>\n              </div>\n        </div>\n</template>\n\n',script:"\n\n    import selectionSimple from './selection-simple.md'\n      import selectionAdvanced from './selection-advanced.md'\n\n    export default{\n        name: \"selection-main\",\n        components: {\n            selectionSimple,\n            selectionAdvanced\n        }\n    }\n",style:null},showDemo:!1}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("div",{staticClass:"mt30"},[a("h3",[s._v("多选功能")]),s._v(" "),a("div",{staticClass:"mt30"},[a("anchor",{attrs:{id:"selection",label:"简单的多选功能",h4:""}}),s._v(" "),a("selection-simple")],1),s._v(" "),a("div",{staticClass:"mt30"},[a("anchor",{attrs:{id:"selection",label:"高级多选功能",h4:""}}),s._v(" "),a("selection-advanced")],1)])]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"}),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n         "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("多选功能"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("\n\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n               "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selection"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"简单的多选功能"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("h4")]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(">")]),s._v("\n               "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("selection-simple")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("selection-simple")]),s._v(">")]),s._v("\n           "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n             "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n                  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selection"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"高级多选功能"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("h4")]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(">")]),s._v("\n                  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("selection-advanced")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("selection-advanced")]),s._v(">")]),s._v("\n              "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" selectionSimple "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./selection-simple.md'")]),s._v("\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" selectionAdvanced "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./selection-advanced.md'")]),s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"selection-main"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n            selectionSimple,\n            selectionAdvanced\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0},uVL8:function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" row-hover-color="#eee" row-click-color="#edf7ff" :select-all="selectALL" :select-change="selectChange" :select-group-change="selectGroupChange"></v-table>\n</template>\n\n\n',script:'\n\n    export default{\n        data() {\n            return {\n                   tableData: [\n                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},\n                        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},\n                        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},\n                        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},\n                        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}\n                    ],\n                    columns: [\n                        {width: 60, titleAlign: \'center\',columnAlign:\'center\',type: \'selection\'},\n                        {field: \'name\', title: \'姓名\', width: 80, titleAlign: \'center\', columnAlign: \'center\',isResize:true},\n                        {field: \'tel\', title: \'手机号码\', width: 150, titleAlign: \'center\', columnAlign: \'center\',isResize:true},\n                        {field: \'hobby\', title: \'爱好\', width: 150, titleAlign: \'center\', columnAlign: \'center\',isResize:true},\n                        {field: \'address\', title: \'地址\', width: 280, titleAlign: \'center\', columnAlign: \'left\',isResize:true}\n                    ]\n            }\n        },\n         methods:{\n                 //\n                 selectALL(selection){\n\n                     console.log(\'select-aLL\',selection);\n                 },\n\n                 selectChange(selection,rowData){\n                     console.log(\'select-change\',selection,rowData);\n                 },\n\n                 selectGroupChange(selection){\n                     console.log(\'select-group-change\',selection);\n                 }\n         }\n    }\n',style:null},showDemo:!0}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("v-table",{staticStyle:{width:"100%"},attrs:{"is-horizontal-resize":"",columns:s.columns,"table-data":s.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","select-all":s.selectALL,"select-change":s.selectChange,"select-group-change":s.selectGroupChange}})]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"},[a("p",[s._v("通过给 "),a("code",[s._v("columns")]),s._v(" 设置 "),a("code",[s._v("type: 'selection'")]),s._v("，即可自动开启多选功能。")]),s._v(" "),a("p",[a("strong",[s._v("回调事件")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("select-all")]),s._v("回调函数，全选后触发，回调参数为 "),a("code",[s._v("selection")]),s._v("，已选项。")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("select-change")]),s._v("回调函数，选中某一项触发，回调参数为 "),a("code",[s._v("selection")]),s._v(" 和 "),a("code",[s._v("rowData")]),s._v("，分别为已选项和刚选择的项")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("select-group-change")]),s._v("回调函数，任意选中项发生变化时就会触发，回调参数为 "),a("code",[s._v("selection")]),s._v("，已选项。")])])]),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("is-horizontal-resize")]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:100%"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":columns")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"columns"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":table-data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tableData"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("row-hover-color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"#eee"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("row-click-color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"#edf7ff"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":select-all")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectALL"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":select-change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectChange"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":select-group-change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectGroupChange"')]),s._v("\n    >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                   "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tableData")]),s._v(": [\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"赵伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"156*****1987"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市黄浦区金陵东路569号17楼"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"李伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"182*****1538"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市奉贤区南桥镇立新路12号2楼"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"孙伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"161*****0097"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市崇明县城桥镇八一路739号"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"周伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"197*****1123"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市青浦区青浦镇章浜路24号"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"吴伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"183*****6678"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市松江区乐都西路867-871号"')]),s._v("}\n                    ],\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columns")]),s._v(": [\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("60")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'selection'")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'姓名'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("80")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'tel'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'手机号码'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'hobby'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爱好'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'address'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'地址'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("280")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("}\n                    ]\n            }\n        },\n         "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n                 "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//")]),s._v("\n                 selectALL(selection){\n\n                     "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'select-aLL'")]),s._v(",selection);\n                 },\n\n                 selectChange(selection,rowData){\n                     "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'select-change'")]),s._v(",selection,rowData);\n                 },\n\n                 selectGroupChange(selection){\n                     "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'select-group-change'")]),s._v(",selection);\n                 }\n         }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0}});