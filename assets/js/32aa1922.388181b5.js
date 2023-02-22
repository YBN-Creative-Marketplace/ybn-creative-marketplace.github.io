"use strict";(self.webpackChunkybn_creative_marketplace_github_io=self.webpackChunkybn_creative_marketplace_github_io||[]).push([[948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Config"},l=void 0,c={unversionedId:"carsteal/config",id:"carsteal/config",title:"Config",description:"How to use",source:"@site/docs/carsteal/config.md",sourceDirName:"carsteal",slug:"/carsteal/config",permalink:"/docs/carsteal/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/carsteal/config.md",tags:[],version:"current",frontMatter:{title:"Config"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/carsteal/getting-started"}},i={},s=[{value:"How to use",id:"how-to-use",level:2},{value:"Locale",id:"locale",level:2},{value:"Configure",id:"configure",level:2},{value:"Platepattern",id:"platepattern",level:3},{value:"Lock npc cars",id:"lock-npc-cars",level:3},{value:"Framework",id:"framework",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"You can configure the script by using Convars."),(0,a.kt)("p",null,"If you want to know how to modify them use: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.fivem.net/docs/scripting-reference/convars/"},"Fivem docs on Convars"))),(0,a.kt)("h2",{id:"locale"},"Locale"),(0,a.kt)("p",null,"The ressource ships with a english locale."),(0,a.kt)("p",null,"For adding your own one read more here: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://overextended.github.io/docs/ox_lib/Locale/Shared#setup"},"ox_lib locales"))),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("h3",{id:"platepattern"},"Platepattern"),(0,a.kt)("p",null,"Set the npc carpattern so there cars get locked"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},". all characters\n%a  letters\n%c  control characters\n%d  digits\n%l  lower case letters\n%p  punctuation characters\n%s  space characters\n%u  upper case letters\n%w  alphanumeric characters\n%x  hexadecimal digits\n%z  the character with representation 0\n")),(0,a.kt)("p",null,"In server.cfg: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfg"},'setr carsteal:platePattern "%d%d%a%a%a%d%d"\n')),(0,a.kt)("h3",{id:"lock-npc-cars"},"Lock npc cars"),(0,a.kt)("p",null,"Set to true if npc cars should be locked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfg"},'setr carsteal:lockNpcCars "true"\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This option should always stay on yes.")),(0,a.kt)("h3",{id:"framework"},"Framework"),(0,a.kt)("p",null,"Change to the framework you are using"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"esx"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Soon")," qbcore")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'set carsteal:framework "esx"\n')))}d.isMDXComponent=!0}}]);