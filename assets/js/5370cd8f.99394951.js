"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3866],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},15373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},c="Interface: OnConflictQueryBuilder<TRecord, TResult>",d={unversionedId:"api/interfaces/knex.knex-1.onconflictquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder",isDocsHomePage:!1,title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",description:"knex.Knex.OnConflictQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.onconflictquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637421162,formattedLastUpdatedAt:"11/20/2021",frontMatter:{id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MySqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},next:{title:"OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig"}},u=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"ignore",id:"ignore",children:[],level:3},{value:"merge",id:"merge",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-onconflictquerybuildertrecord-tresult"},"Interface: OnConflictQueryBuilder<TRecord, TResult",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OnConflictQueryBuilder"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TRecord"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TResult"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"ignore"},"ignore"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"ignore"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:456"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"merge"},"merge"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"merge"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data?"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<Partial<AnyOrUnknownToOther<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},(0,i.kt)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Readonly"),"<Partial<AnyOrUnknownToOther<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},(0,i.kt)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:457"))}s.isMDXComponent=!0}}]);