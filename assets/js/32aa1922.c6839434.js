"use strict";(self.webpackChunkybn_creative_marketplace_github_io=self.webpackChunkybn_creative_marketplace_github_io||[]).push([[948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||k[m]||l;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"Config"},o=void 0,c={unversionedId:"carsteal/config",id:"carsteal/config",title:"Config",description:"How to use",source:"@site/docs/carsteal/config.md",sourceDirName:"carsteal",slug:"/carsteal/config",permalink:"/docs/carsteal/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/carsteal/config.md",tags:[],version:"current",frontMatter:{title:"Config"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/carsteal/getting-started"}},i={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Locale",id:"locale",level:2},{value:"Configure",id:"configure",level:2},{value:"Platepattern",id:"platepattern",level:3},{value:"Lock npc cars",id:"lock-npc-cars",level:3},{value:"Framework",id:"framework",level:3},{value:"Lockpick",id:"lockpick",level:2},{value:"Alarm",id:"alarm",level:3},{value:"Item",id:"item",level:3},{value:"Difficulty",id:"difficulty",level:3},{value:"Animation",id:"animation",level:3}],s={toc:p},u="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"You can configure the script by using Convars."),(0,n.kt)("p",null,"If you want to know how to modify them use: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.fivem.net/docs/scripting-reference/convars/"},"Fivem docs on Convars"))),(0,n.kt)("h2",{id:"locale"},"Locale"),(0,n.kt)("p",null,"The ressource ships with a english locale."),(0,n.kt)("p",null,"For adding your own one read more here: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://overextended.github.io/docs/ox_lib/Locale/Shared#setup"},"ox_lib locales"))),(0,n.kt)("h2",{id:"configure"},"Configure"),(0,n.kt)("h3",{id:"platepattern"},"Platepattern"),(0,n.kt)("p",null,"Set the npc carpattern so there cars get locked"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},". all characters\n%a  letters\n%c  control characters\n%d  digits\n%l  lower case letters\n%p  punctuation characters\n%s  space characters\n%u  upper case letters\n%w  alphanumeric characters\n%x  hexadecimal digits\n%z  the character with representation 0\n")),(0,n.kt)("p",null,"In server.cfg: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfg"},'setr carsteal:platePattern "%d%d%a%a%a%d%d"\n')),(0,n.kt)("h3",{id:"lock-npc-cars"},"Lock npc cars"),(0,n.kt)("p",null,"Set to true if npc cars should be locked."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfg"},'setr carsteal:lockNpcCars "true"\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This option should always stay on yes.")),(0,n.kt)("h3",{id:"framework"},"Framework"),(0,n.kt)("p",null,"Change to the framework you are using"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"esx"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Soon")," qbcore")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'set carsteal:framework "esx"\n')),(0,n.kt)("h2",{id:"lockpick"},"Lockpick"),(0,n.kt)("h3",{id:"alarm"},"Alarm"),(0,n.kt)("p",null,"Chance in %"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"setr carsteal:chanceToLockpickAlarm 50\n")),(0,n.kt)("p",null,"Time in seconds"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"setr carsteal:lockpickAlarmTime 20\n")),(0,n.kt)("h3",{id:"item"},"Item"),(0,n.kt)("p",null,"Name of the item used for lockpick"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'set carsteal:lockpickItem "lockpick"\n')),(0,n.kt)("p",null,"How many lockpicks you can use in a given time"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set lockpick:max_lockpicks 3\n")),(0,n.kt)("p",null,"The time when the lockpick cooldown resets in seconds"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set lockpick:unlock_time 60000\n")),(0,n.kt)("h3",{id:"difficulty"},"Difficulty"),(0,n.kt)("p",null,"Difficulty for the lockpick minigame easy/medium/hard"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"More on this ",(0,n.kt)("a",{parentName:"li",href:"https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck"},"here"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'setr carsteal:lockpickDifficulty "easy"\n')),(0,n.kt)("p",null,"How often the skillcheck should be repeated"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"setr carsteal:lockpickSkillCheckRepeats 3\n")),(0,n.kt)("h3",{id:"animation"},"Animation"),(0,n.kt)("p",null,"Animation displayed when lockpicking a car"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dictionary"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'setr carsteal:lockpickAnimationDictionary "mini@repair"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'setr carsteal:lockpickAnimationName "fixing_a_player"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Flag"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"setr carsteal:lockpickAnimationFlag 49\n")))))}k.isMDXComponent=!0}}]);