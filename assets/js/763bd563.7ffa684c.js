"use strict";(self.webpackChunkrenote=self.webpackChunkrenote||[]).push([[9645],{3444:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=s(5893),r=s(1151);const a={},t="Kysely",i={id:"libraries/sql-libraries/kysely",title:"Kysely",description:"Install",source:"@site/docs/libraries/sql-libraries/kysely.mdx",sourceDirName:"libraries/sql-libraries",slug:"/libraries/sql-libraries/kysely",permalink:"/renote/docs/libraries/sql-libraries/kysely",draft:!1,unlisted:!1,editUrl:"https://github.com/xREMAGIx/renote/tree/main/docs/libraries/sql-libraries/kysely.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL libraries - packages",permalink:"/renote/docs/category/sql-libraries---packages"},next:{title:"Markdown",permalink:"/renote/docs/category/markdown"}},o={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Kysely codegen",id:"kysely-codegen",level:2},{value:"Install",id:"install-1",level:3},{value:"Usage",id:"usage-1",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"kysely",children:"Kysely"}),"\n",(0,l.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn add kysely\n"})}),"\n",(0,l.jsx)(n.p,{children:"Depending on your database, you may also need to install one of the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# PostgreSQL\nyarn add pg\n\n# MySQL\nyarn add mysql2\n\n# SQLite\nyarn add sqlite3\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",metastring:'title="src/db.ts"',children:'import { Kysely, PostgresDialect } from "kysely";\nimport { Pool } from "pg";\n\nconst DATABASE_URL = process.env.DATABASE_URL;\n\nexport const db = new Kysely({\n  dialect: new PostgresDialect({\n    pool: new Pool({\n      connectionString: DATABASE_URL,\n    }),\n  }),\n});\n'})}),"\n",(0,l.jsx)(n.p,{children:"You need to add .env file to the root of your project with the following content:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"DATABASE_URL=postgres://user:password@localhost:5432/database\n"})}),"\n",(0,l.jsx)(n.h2,{id:"kysely-codegen",children:"Kysely codegen"}),"\n",(0,l.jsx)(n.p,{children:"Kysely codegen is a tool for generating TypeScript types and functions for your database queries."}),"\n",(0,l.jsx)(n.h3,{id:"install-1",children:"Install"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn add kysely-codegen\n"})}),"\n",(0,l.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn run kysely-codegen --dialect postgres\n"})})]})}function y(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var l=s(7294);const r={},a=l.createContext(r);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);