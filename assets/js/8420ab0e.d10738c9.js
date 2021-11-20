"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74565],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49297:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Smart Nested Populate"},s=void 0,p={unversionedId:"nested-populate",id:"version-4.3/nested-populate",isDocsHomePage:!1,title:"Smart Nested Populate",description:"MikroORM is capable of loading large nested structures while maintaining good",source:"@site/versioned_docs/version-4.3/nested-populate.md",sourceDirName:".",slug:"/nested-populate",permalink:"/docs/4.3/nested-populate",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/nested-populate.md",tags:[],version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637421162,formattedLastUpdatedAt:"11/20/2021",frontMatter:{title:"Smart Nested Populate"},sidebar:"version-4.3/docs",previous:{title:"Logging",permalink:"/docs/4.3/debugging"},next:{title:"Smart Query Conditions",permalink:"/docs/4.3/query-conditions"}},d=[{value:"Populating already loaded entities",id:"populating-already-loaded-entities",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," is capable of loading large nested structures while maintaining good\nperformance, querying each database table only once. Imagine you have this nested\nstructure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Book")," has one ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher")," (M:1), one ",(0,r.kt)("inlineCode",{parentName:"li"},"Author")," (M:1) and many ",(0,r.kt)("inlineCode",{parentName:"li"},"BookTag"),"s (M:N)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Publisher")," has many ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),"s (M:N)")),(0,r.kt)("p",null,"When you use nested populate while querying all ",(0,r.kt)("inlineCode",{parentName:"p"},"BookTag"),"s, this is what happens in\nthe background:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const tags = await orm.em.findAll(BookTag, ['books.publisher.tests', 'books.author']);\nconsole.log(tags[0].books[0].publisher.tests[0].name); // prints name of nested test\nconsole.log(tags[0].books[0].author.name); // prints name of nested author\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"BookTag"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"BookTag"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher"),"s"),(0,r.kt)("li",{parentName:"ol"},"Load all ",(0,r.kt)("inlineCode",{parentName:"li"},"Author"),"s associated with previously loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"s")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also populate all relationships by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"populate: true"),".")),(0,r.kt)("p",null,"For SQL drivers with pivot tables this means:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT `e0`.* FROM `book_tag` AS `e0`;\n\nSELECT `e0`.*, `e1`.`book_id`, `e1`.`book_tag_id`\n  FROM `book` AS `e0` LEFT JOIN `book_to_book_tag` AS `e1` ON `e0`.`id` = `e1`.`book_id`\n  WHERE `e1`.`book_tag_id` IN (?, ?, ?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `publisher` AS `e0` WHERE `e0`.`id` IN (?, ?, ?);\n\nSELECT `e0`.*, `e1`.`test_id`, `e1`.`publisher_id`\n  FROM `test` AS `e0` LEFT JOIN `publisher_to_test` AS `e1` ON `e0`.`id` = `e1`.`test_id`\n  WHERE `e1`.`publisher_id` IN (?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`id` IN (?);\n")),(0,r.kt)("p",null,"For mongo driver its even simpler as no pivot tables are involved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'db.getCollection("book-tag").find({}).toArray();\ndb.getCollection("book").find({"tags":{"$in":[...]}}).toArray();\ndb.getCollection("publisher").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("test").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("author").find({"_id":{"$in":[...]}}).toArray();\n')),(0,r.kt)("h2",{id:"populating-already-loaded-entities"},"Populating already loaded entities"),(0,r.kt)("p",null,"To populate existing entities, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.populate()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authors = await orm.em.createQueryBuilder(Author).select('*').getResult();\nawait em.populate(authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")))}c.isMDXComponent=!0}}]);