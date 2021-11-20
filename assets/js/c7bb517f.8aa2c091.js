"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53502],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36635:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],c={id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null,hide_title:!0},s="Interface: QueryResult",l={unversionedId:"api/interfaces/core.queryresult",id:"version-4.5/api/interfaces/core.queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"core.QueryResult",source:"@site/versioned_docs/version-4.5/api/interfaces/core.queryresult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.queryresult",permalink:"/docs/api/interfaces/core.queryresult",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637421162,formattedLastUpdatedAt:"11/20/2021",frontMatter:{id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"QueryOrderMap",permalink:"/docs/api/interfaces/core.queryordermap"},next:{title:"ReferenceOptions",permalink:"/docs/api/interfaces/core.referenceoptions"}},p=[{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[],level:3},{value:"insertId",id:"insertid",children:[],level:3},{value:"row",id:"row",children:[],level:3},{value:"rows",id:"rows",children:[],level:3}],level:2}],u={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-queryresult"},"Interface: QueryResult"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".QueryResult"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"affectedrows"},"affectedRows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"affectedRows"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L127"},"packages/core/src/connections/Connection.ts:127")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"insertid"},"insertId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"insertId"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L128"},"packages/core/src/connections/Connection.ts:128")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"row"},"row"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"row"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,a.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L129"},"packages/core/src/connections/Connection.ts:129")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rows"},"rows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"rows"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,a.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/connections/Connection.ts#L130"},"packages/core/src/connections/Connection.ts:130")))}f.isMDXComponent=!0}}]);