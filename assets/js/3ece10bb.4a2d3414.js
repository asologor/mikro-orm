"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5763],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),y=r,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1461:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},p=void 0,l={unversionedId:"repositories",id:"repositories",title:"Using EntityRepository instead of EntityManager",description:"Entity Repositories are thin layers on top of EntityManager. They act as an",source:"@site/docs/repositories.md",sourceDirName:".",slug:"/repositories",permalink:"/docs/next/repositories",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/repositories.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1645562051,formattedLastUpdatedAt:"2/22/2022",frontMatter:{title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},sidebar:"docs",previous:{title:"Collections",permalink:"/docs/next/collections"},next:{title:"Transactions and Concurrency",permalink:"/docs/next/transactions"}},c=[{value:"Custom Repository",id:"custom-repository",children:[{value:"Inferring custom repository type",id:"inferring-custom-repository-type",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Entity Repositories are thin layers on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". They act as an\nextension point, so we can add custom methods, or even alter the existing ones.\nThe default, ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository")," implementation just forwards the calls to\nunderlying ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository")," class carries the entity type, so we do not have to pass\nit to every ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"findOne")," calls.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const booksRepository = em.getRepository(Book);\n\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  orderBy: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),(0,i.kt)("p",null,'Note that there is no such thing as "flushing repository" - it is just a shortcut\nto ',(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),". In other words, we always flush the whole Unit of Work, not just\na single entity that this repository represents."),(0,i.kt)("h2",{id:"custom-repository"},"Custom Repository"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since v4, we need to make sure we are working with correctly typed ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository"),"\nto have access to driver specific methods (like ",(0,i.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()"),"). Use the one\nexported from your driver package."))),(0,i.kt)("p",null,"To use custom repository, just extend ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityRepository } from '@mikro-orm/mysql'; // or any other driver package\n\nexport class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),(0,i.kt)("p",null,"And register the repository via ",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity")," decorator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Author {\n  // ...\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"@Repository()")," decorator has been removing in v5, use\n",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity({ customRepository: () => MyRepository })")," instead.")),(0,i.kt)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),(0,i.kt)("p",null,"Now we can access our custom repository via ",(0,i.kt)("inlineCode",{parentName:"p"},"em.getRepository()")," method."),(0,i.kt)("h3",{id:"inferring-custom-repository-type"},"Inferring custom repository type"),(0,i.kt)("p",null,"To have the ",(0,i.kt)("inlineCode",{parentName:"p"},"em.getRepository()")," method return correctly typed custom repository\ninstead of the generic ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository<T>"),", we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepositoryType"),"\nsymbol:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ customRepository: () => AuthorRepository })\nexport class Author {\n\n  [EntityRepositoryType]?: AuthorRepository;\n\n}\n\nconst repo = em.getRepository(Author); // repo has type AuthorRepository\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We can also register custom base repository (for all entities where we do not specify\n",(0,i.kt)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"),".")),(0,i.kt)("p",null,"For more examples, take a look at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."))}m.isMDXComponent=!0}}]);