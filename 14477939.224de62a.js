(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(78)),o={title:"Intro \ud83e\udd13",sidebar_label:"Intro"},c={unversionedId:"basics/basics",id:"basics/basics",isDocsHomePage:!1,title:"Intro \ud83e\udd13",description:"Writing a Flamingo program involves five steps:",source:"@site/docs\\basics\\basics.md",permalink:"/docs/basics/basics",editUrl:"https://github.com/flamingo-lang/flamingo-docs/edit/master/docs/basics/basics.md",sidebar_label:"Intro",sidebar:"sidebar",previous:{title:"Installing Flamingo \ud83d\udce6",permalink:"/docs/start_here/install"},next:{title:"Step 1: Sorts \ud83c\udf0e",permalink:"/docs/basics/sorts"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Writing a Flamingo program involves five steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Decide what ",Object(i.b)("em",{parentName:"p"},"sorts")," of objects make up your domain. These include concrete\nthings like people or places, but can also be more abstract entities like\nintegers or groups.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Decide the ",Object(i.b)("em",{parentName:"p"},"relationships")," between objects. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Describe the ",Object(i.b)("em",{parentName:"p"},"actions")," or events that cause change in your domain.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Describe the ",Object(i.b)("em",{parentName:"p"},"axioms")," of your domain, the laws that bring it to life.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Test the program, verifying the relationships are maintained in every\npossible sequence of actions."))),Object(i.b)("p",null,"If you've worked with a typed language, steps 1-3 are equivalent to writing\ndown the all the types you'll be working with. Step 4 is equivalent to\nwriting the implementations, and where things really diverge from imperative\nor functional programming. Step 5 is done ",Object(i.b)("em",{parentName:"p"},"automatically")," by the Flamingo\ncompiler - no need to write tests by hand!"),Object(i.b)("p",null,"In the next few sections, we'll go through each step in the context of designing\na simple example system: fruits and a fruit basket. Our system won't be\n\"plugged in\" to the DOM or anything - we'll cover that in the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/todomvc/intro"}),"TodoMVC example")," a bit later."))}p.isMDXComponent=!0},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,f=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);