"use strict";(self.webpackChunkrenote=self.webpackChunkrenote||[]).push([[7606],{8408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(5893),s=r(3905);const i={},a="References",o={id:"crdt/references",title:"References",description:"All resources that I used to note about this article.",source:"@site/docs/crdt/references.md",sourceDirName:"crdt",slug:"/crdt/references",permalink:"/docs/crdt/references",draft:!1,unlisted:!1,editUrl:"https://github.com/xREMAGIx/renote/tree/main/docs/crdt/references.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set CRDTs",permalink:"/docs/crdt/set-crdts"},next:{title:"Yjs Framework",permalink:"/docs/crdt/yjs-framework"}},c={},l=[{value:"Shorthand Words",id:"shorthand-words",level:2},{value:"Defines",id:"defines",level:2},{value:"Monotonic semilattice object",id:"monotonic-semilattice-object",level:3},{value:"Commutativity",id:"commutativity",level:3},{value:"Papers",id:"papers",level:2},{value:"Blogs",id:"blogs",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"references",children:"References"}),"\n",(0,n.jsx)(t.p,{children:"All resources that I used to note about this article."}),"\n",(0,n.jsx)(t.h2,{id:"shorthand-words",children:"Shorthand Words"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"LUB"}),": Least upper bound"]}),"\n",(0,n.jsx)(t.h2,{id:"defines",children:"Defines"}),"\n",(0,n.jsx)(t.h3,{id:"monotonic-semilattice-object",children:"Monotonic semilattice object"}),"\n",(0,n.jsx)(t.p,{children:"A state-based object, equipped with partial order\xa0\u2264, noted\xa0(S,\u2264,s0,q,u,m), that has the following properties, is called a monotonic semi-lattice:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Set\xa0S\xa0of payload values forms a semilattice ordered by\xa0\u2264."}),"\n",(0,n.jsx)(t.li,{children:"Merging state\xa0s\xa0with remote state\xa0s\u2032\xa0computes the LUB of the two states, i.e.,\xa0s\xa0-\xa0m(s\u2032\xa0) =\xa0s\xa0\u2294\xa0s\u2032\xa0."}),"\n",(0,n.jsx)(t.li,{children:"State is monotonically non-decreasing across updates, i.e.,\xa0s\xa0\u2264\xa0s\xa0-\xa0u"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"commutativity",children:"Commutativity"}),"\n",(0,n.jsx)(t.p,{children:"Operations\xa0f\xa0and\xa0g\xa0commute, if for any reachable replica state\xa0S\xa0where their source pre-condition is enabled, the source precondition of\xa0f\xa0(resp.\xa0g) remains enabled in state\xa0S\xa0-\xa0g\xa0(resp.\xa0S\xa0-\xa0f), and\xa0S\xa0-\xa0f\xa0-\xa0g\xa0and\xa0S\xa0-\xa0f\xa0-\xa0g\xa0are equivalent abstract states."}),"\n",(0,n.jsx)(t.h2,{id:"papers",children:"Papers"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://inria.hal.science/inria-00555588/document",children:"A comprehensive study of Convergent and Commutative Replicated Data Types"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://inria.hal.science/inria-00609399v1/document",children:"Conflict-free Replicated Data Types"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://arxiv.org/pdf/1806.10254.pdf",children:"Conflict-free Replicated Data Types: An Overview"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.researchgate.net/publication/310212186_Near_Real-Time_Peer-to-Peer_Shared_Editing_on_Extensible_Data_Types",children:"Near Real-Time Peer-to-Peer Shared Editing on Extensible Data Types"})}),"\n",(0,n.jsx)(t.h2,{id:"blogs",children:"Blogs"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.bartoszsypytkowski.com/the-state-of-a-state-based-crdts/",children:"An introduction to state-based CRDTs"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.bartoszsypytkowski.com/yata/",children:"Delta-state CRDTs: indexed sequences with YATA"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://medium.com/@amberovsky/crdt-conflict-free-replicated-data-types-b4bfc8459d26",children:"CRDT: Conflict-free Replicated Data Types"})})]})}function p(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(r),u=s,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));p.displayName="MDXCreateElement"}}]);