"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73398],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96348:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],p={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},s=void 0,l={unversionedId:"entity-helper",id:"entity-helper",isDocsHomePage:!1,title:"EntityHelper and Decorated Entities",description:"Updating Entity Values with entity.assign()",source:"@site/docs/entity-helper.md",sourceDirName:".",slug:"/entity-helper",permalink:"/docs/next/entity-helper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/entity-helper.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637421162,formattedLastUpdatedAt:"11/20/2021",frontMatter:{title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},sidebar:"docs",previous:{title:"Serializing",permalink:"/docs/next/serializing"},next:{title:"Hooks and Events",permalink:"/docs/next/lifecycle-hooks"}},d=[{value:"Updating Entity Values with <code>entity.assign()</code>",id:"updating-entity-values-with-entityassign",children:[{value:"Updating deep entity graph",id:"updating-deep-entity-graph",children:[],level:3}],level:2},{value:"<code>WrappedEntity</code> and <code>wrap()</code> helper",id:"wrappedentity-and-wrap-helper",children:[{value:"Accessing internal prefixed properties",id:"accessing-internal-prefixed-properties",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updating-entity-values-with-entityassign"},"Updating Entity Values with ",(0,r.kt)("inlineCode",{parentName:"h2"},"entity.assign()")),(0,r.kt)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),(0,r.kt)("p",null,"Same result can be easily achieved with ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.assign()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.assign()")," on not managed entities, you need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\ninstance explicitly: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nconst book = new Book();\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n}, { em: orm.em });\n")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.assign(data)")," behaves same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties (not referenced entities),\nuse second parameter to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nbook.meta = { foo: 1, bar: 2 };\n\nwrap(book).assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nwrap(book).assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")),(0,r.kt)("h3",{id:"updating-deep-entity-graph"},"Updating deep entity graph"),(0,r.kt)("p",null,"Since v5, ",(0,r.kt)("inlineCode",{parentName:"p"},"assign")," allows updating deep entity graph by default. To update existing\nentity, we need to provide its PK in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", as well as to ",(0,r.kt)("strong",{parentName:"p"},"load that entity first\ninto current context"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await em.findOneOrFail(Book, 1, { populate: ['author'] });\n\n// update existing book's author's name\nwrap(book).assign({\n  author: {\n    id: book.author.id,\n    name: 'New name...',\n  },\n});\n")),(0,r.kt)("p",null,"If we want to always update the entity, even without the entity PK being present\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"updateByPrimaryKey: false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await em.findOneOrFail(Book, 1, { populate: ['author'] });\n\n// update existing book's author's name\nwrap(book).assign({\n  author: {\n    name: 'New name...',\n  },\n}, { updateByPrimaryKey: false });\n")),(0,r.kt)("p",null,"Otherwise the entity data without PK are considered as new entity, and will trigger\ninsert query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await em.findOneOrFail(Book, 1, { populate: ['author'] });\n\n// creating new author for given book\nwrap(book).assign({\n  author: {\n    name: 'New name...',\n  },\n});\n")),(0,r.kt)("p",null,"Same applies to the case when we do not load the child entity first into the context,\ne.g. when we try to assign to a relation that was not populated. Even if we provide\nits PK, it will be considered as new object and trigger an insert query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await em.findOneOrFail(Book, 1); // author is not populated\n\n// creating new author for given book\nwrap(book).assign({\n  author: {\n    id: book.author.id,\n    name: 'New name...',\n  },\n});\n")),(0,r.kt)("p",null,"When updating collections, we can either pass complete array of all items, or just\na single item - in such case, the new item will be appended to the existing items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// resets the addresses collection to a single item\nwrap(user).assign({ addresses: [new Address(...)] });\n\n// adds new address to the collection\nwrap(user).assign({ addresses: new Address(...) });\n")),(0,r.kt)("h2",{id:"wrappedentity-and-wrap-helper"},(0,r.kt)("inlineCode",{parentName:"h2"},"WrappedEntity")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"wrap()")," helper"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IWrappedEntity")," is an interface that defines public helper methods provided\nby the ORM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IWrappedEntity<T, PK extends keyof T> {\n  isInitialized(): boolean;\n  populated(populated?: boolean): void;\n  init(populated?: boolean, lockMode?: LockMode): Promise<T>;\n  toReference(): IdentifiedReference<T, PK>;\n  toObject(ignoreFields?: string[]): Dictionary;\n  toJSON(...args: any[]): Dictionary;\n  assign(data: any, options?: AssignOptions | boolean): T;\n}\n")),(0,r.kt)("p",null,"There are two ways to access those methods. You can either extend ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntity"),"\n(exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core"),"), that defines those methods, or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"wrap()")," helper to access ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance, where those methods\nexist."),(0,r.kt)("p",null,"Users can choose whether they are fine with polluting the entity interface with\nthose additional methods, or they want to keep the interface clean\nand use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," helper method instead to access them. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since v4 ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," no longer returns the entity, now the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance is\nbeing returned. It contains only public methods (",(0,r.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assign"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isInitialized"),", ...),\nif you want to access internal properties like ",(0,r.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"__em"),", you need to explicitly\nask for the helper via ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity, true)"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity } from '@mikro-orm/core';\n\n@Entity()\nexport class Book extends BaseEntity<Book, 'id'> { ... }\n")),(0,r.kt)("p",null,"Then you can work with those methods directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"book.meta = { foo: 1, bar: 2 };\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n")),(0,r.kt)("h3",{id:"accessing-internal-prefixed-properties"},"Accessing internal prefixed properties"),(0,r.kt)("p",null,"Previously it was possible to access internal properties like ",(0,r.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"__em"),"\nfrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap()")," helper. Now to access them, you need to use second parameter of\nwrap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author { ... }\n\nconsole.log(wrap(author, true).__meta);\n")))}u.isMDXComponent=!0}}]);