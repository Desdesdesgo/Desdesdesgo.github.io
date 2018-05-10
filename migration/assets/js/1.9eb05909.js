(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{58:function(t,s,a){t.exports=a.p+"assets/img/editor.ee1a75e3.jpg"},59:function(t,s,a){t.exports=a.p+"assets/img/process.ab7dc90a.jpg"},61:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"高级选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 高级选项")]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTES")]),n("p",[t._v("在参数设置界面勾选 process hook : use javascript injection")]),n("p",[t._v("写这里的js脚本同时需要js 语法知识 和java nashorn知识")])]),n("h2",{attrs:{id:"流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 流程")]),n("p",[n("img",{attrs:{src:a(59),alt:"流程"}}),n("img",{attrs:{src:a(58),alt:"编辑器"}})]),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" api")]),n("p",[t._v("在脚本中你可以使用java原生数据类型以及其方法")]),n("p",[t._v("还有额外可用的类：")]),n("ul",[n("li",[t._v("jdbcUtil")])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v('/**\n    * 精确统计总数（myisam表，或者需要精确统计，使用这个方法）\n    * @param from  "source" 或者 "target"\n    * @param table  表名\n    * @return number\n    */')]),t._v("\njdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTotal")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String from"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("String table"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v('/**\n    * 粗略统计总数(innodb表如果没有精确需求，建议使用这个方法)\n    * @param from  "source" 或者 "target"\n    * @param table  表名\n    * @return number\n    */')]),t._v("\njdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTotalRough")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String from"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("String sourceDatabaseName"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("String tableName"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v('/**\n\t * 根据 sql 查询转list map\n\t * @param from  "source" 或者 "target"\n\t * @param sql   \n\t * @return List<HashMap<String,Object>\n\t */')]),t._v("\njdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("queryBySqlForMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String from "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("String sql"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v('/**\n\t * 批量插入\n\t * @param from  "source" 或者 "target"\n     * @param tableName  表名 \n\t * @param List<HashMap<String,Object>>    需要插入的list\n\t * @return  \n\t */')]),t._v("\njdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("insertsWithMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String from"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("String tableName"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("List"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("HashMap"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" datas"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("ul",[n("li",[t._v("cachedValue")])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("//提供四个静态变量（也可以使用js 的共享变量来替代）")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" List"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("HashMap"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" cachedList1"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" List"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("HashMap"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" cachedList2"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" HashMap"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cachedMap1"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" HashMap"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cachedMap2"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("h3",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//引入 jdbcUtil类")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jdbcUtil "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("type")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"com.seassoon.synchro.util.JdbcUtil"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//使用")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" total "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTotalRough")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"target"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"db_qy_test"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"com_main"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//引入 cachedValue类")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cachedValue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("type")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"com.seassoon.synchro.util.CachedValue"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//使用")]),t._v("\ncachedValue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cachedList1"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("jdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("queryBySqlForMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"source"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"select * from test1"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),n("h2",{attrs:{id:"场景一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景一","aria-hidden":"true"}},[t._v("#")]),t._v(" 场景一")]),n("h3",{attrs:{id:"将字段-money-的内容格式化：-金额：10000-改为-10000-数据类型改为int"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将字段-money-的内容格式化：-金额：10000-改为-10000-数据类型改为int","aria-hidden":"true"}},[t._v("#")]),t._v(' 将字段 money 的内容格式化："金额：10000" 改为 "10000",数据类型改为int')]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("process")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("money "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token function"}},[t._v("Number")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("money"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("substring")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"场景二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景二","aria-hidden":"true"}},[t._v("#")]),t._v(" 场景二")]),n("h3",{attrs:{id:"映射完成之后填补空缺字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#映射完成之后填补空缺字段","aria-hidden":"true"}},[t._v("#")]),t._v(" 映射完成之后填补空缺字段")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//源表数据：")]),t._v("\noriginList"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"王小虎"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gender"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"男"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//映射完成后：")]),t._v("\nlist "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        students_name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"王小虎"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gender"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"男"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        phone"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        grade"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),n("p",[t._v("需要将空缺的字段填上，而相应数据在另一张表中")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("process")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jdbcUtil "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("type")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"com.seassoon.synchro.util.JdbcUtil"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newList "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("stream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" student_name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student_name"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("queryBySqlForMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"source"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"select * from another_table where student_name = \'"')]),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("student_name"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token string"}},[t._v('"\'"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            students_name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("students_name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            gender"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            phone"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            grade"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grade"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("collect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Collectors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newList"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),n("p",[t._v("如果每次循环查询效率过低，则先在preprocess中，将所需数据全部查询出来，存储在map中")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("preprocess")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jdbcUtil "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("type")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"com.seassoon.synchro.util.JdbcUtil"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cachedValue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("type")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"com.seassoon.synchro.util.CachedValue"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    cachedValue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cachedList1 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbcUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("queryBySqlForMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"source"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"select * from another_table"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//然后再process函数中通过  cachedValue.cachedList1.stream().filter() 来获取。")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"测试脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试脚本")]),n("p",[t._v("点击 test script 按钮可以测试脚本，测试多少条数据由按钮右边input 输入")]),n("p",[t._v("测试程序运行到process 函数为止。不会进行目标表的数据插入。")]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),n("p",[t._v("脚本中可以通过 print() 函数 来打印输出，将会在右边日志窗内看到。")]),n("p",[t._v("最终运行完毕后在右边log窗口中看到***after process ，意味着程序顺利执行，如果出现error，意味着脚本有错误。")])])])}],o=a(0),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=c.exports}}]);