(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[6346],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,d=f["".concat(s,".").concat(p)]||f[p]||u[p]||i;return n?r.createElement(d,a(a({ref:t},h),{},{components:n})):r.createElement(d,a({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return h}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},l={unversionedId:"amateur/computer/svg",id:"amateur/computer/svg",isDocsHomePage:!1,title:"SVG: Scalable Vector Graphics",description:"Filter",source:"@site/docs/amateur/computer/svg.md",sourceDirName:"amateur/computer",slug:"/amateur/computer/svg",permalink:"/docs/amateur/computer/svg",version:"current",frontMatter:{},sidebar:"amateur_computer",previous:{title:"Computer",permalink:"/docs/amateur/computer/index"}},s=[{value:"Filter",id:"filter",children:[]},{value:"\u89c6\u53e3\u88c1\u526a",id:"\u89c6\u53e3\u88c1\u526a",children:[]},{value:"sin\u52a8\u753b\u6267\u884c\u5e8f\u5217",id:"sin\u52a8\u753b\u6267\u884c\u5e8f\u5217",children:[]}],c={toc:s};function h(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"feDiffuseLighting (\u6f2b\u53cd\u5c04\u5149)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"feDistantLight"),(0,i.kt)("li",{parentName:"ul"},"fePointLight"),(0,i.kt)("li",{parentName:"ul"},"feSpotLight"))),(0,i.kt)("li",{parentName:"ul"},"feSpecularLighting (\u955c\u9762\u5149)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fePointLight")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<feDiffuseLighting surfaceScale="\u8868\u9762\u5e73\u6574\u5ea6" diffuseConstant="\u6f2b\u53cd\u5c04\u5f3a\u5ea6"/>\n<feSpecularLighting surfaceScale="\u8868\u9762\u5e73\u6574\u5ea6" specularConstant="\u955c\u9762\u53cd\u5c04\u5f3a\u5ea6"/>\n<feDistantLight azimuth="\u5165\u5c04\u89d2" elevation="\u5149\u6e90\u9ad8\u5ea6"/>\n<feSpotLight x y z pointsAtX pointsAtY pointsAtZ specularExponent limitingConeAngle />\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"feBlend")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"normal\nThe final color is the top color, regardless of what the bottom color is. The effect is like two opaque pieces of paper overlapping.\n\nmultiply\nThe final color is the result of multiplying the top and bottom colors. A black layer leads to a black final layer, and a white layer leads to no change. The effect is like two images printed on transparent film overlapping.\n\nscreen\nThe final color is the result of inverting the colors, multiplying them, and inverting that value. A black layer leads to no change, and a white layer leads to a white final layer. The effect is like two images shone onto a projection screen.\n\noverlay\nThe final color is the result of multiply if the bottom color is darker, or screen if the bottom color is lighter. This blend mode is equivalent to hard-light but with the layers swapped.\ndarken\nThe final color is composed of the darkest values of each color channel.\n\nlighten\nThe final color is composed of the lightest values of each color channel.\n\ncolor-dodge\nThe final color is the result of dividing the bottom color by the inverse of the top color. A black foreground leads to no change. A foreground with the inverse color of the backdrop leads to a fully lit color. This blend mode is similar to screen, but the foreground need only be as light as the inverse of the backdrop to create a fully lit color.\n\ncolor-burn\nThe final color is the result of inverting the bottom color, dividing the value by the top color, and inverting that value. A white foreground leads to no change. A foreground with the inverse color of the backdrop leads to a black final image. This blend mode is similar to multiply, but the foreground need only be as dark as the inverse of the backdrop to make the final image black.\n\nhard-light\nThe final color is the result of multiply if the top color is darker, or screen if the top color is lighter. This blend mode is equivalent to overlay but with the layers swapped. The effect is similar to shining a harsh spotlight on the backdrop.\n\nsoft-light\nThe final color is similar to hard-light, but softer. This blend mode behaves similar to hard-light. The effect is similar to shining a diffused spotlight on the backdrop.\n\ndifference\nThe final color is the result of subtracting the darker of the two colors from the lighter one. A black layer has no effect, while a white layer inverts the other layer's color.\n\nexclusion\nThe final color is similar to difference, but with less contrast. As with difference, a black layer has no effect, while a white layer inverts the other layer's color.\n\nhue\nThe final color has the hue of the top color, while using the saturation and luminosity of the bottom color.\n\nsaturation\nThe final color has the saturation of the top color, while using the hue and luminosity of the bottom color. A pure gray backdrop, having no saturation, will have no effect.\n")),(0,i.kt)("p",null,"|feColorMatrix|\n|feComponentTransfer|\n|feComposite|\n|feConvolveMatrix|\n|feDisplacementMap|\n|feDropShadow|\n|feFlood|\n|feFuncA|\n|feFuncB|\n|feFuncG|\n|feFuncR|\n|feGaussianBlur|\n|feImage|\n|feMerge|\n|feMergeNode|\n|feMorphology|\n|feOffset|\n|feTile|\n|feTurbulence|\n|filter|\n|foreignObject|"),(0,i.kt)("p",null,"\uff08lens type\uff09\u548c\u89c6\u89d2\uff08Field of View\uff09\u8bbe\u7f6e\u6709\u8bef\uff1b 2\u3001\u5bf9\u89c6\u91ce\u88c1\u5207\uff08Crop\uff09"),(0,i.kt)("h2",{id:"\u89c6\u53e3\u88c1\u526a"},"\u89c6\u53e3\u88c1\u526a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function cropViewBox(){\n  const ovb_width=1280;\n  const ovb_height=720;\n  let nvb_width=window.innerWidth;\n  let nvb_height=window.innerHeight;\n  let nvb_x=0;\n  let nvb_y=0;\n  //tailor\n  if(nvb_width>ovb_width){\n    nvb_width=ovb_width;\n    nvb_height=(nvb_width*nvb_height)/window.innerWidth;\n  }\n  if(nvb_height>ovb_height){\n    nvb_height=ovb_height;\n    nvb_width=(nvb_width*nvb_height)/window.innerHeight;\n  }\n  //position\n  nvb_x=(ovb_width-nvb_width)/2;\n  \n  return `${nvb_x} ${nvb_y} ${nvb_width} ${nvb_height}`;\n}\n")),(0,i.kt)("h2",{id:"sin\u52a8\u753b\u6267\u884c\u5e8f\u5217"},"sin\u52a8\u753b\u6267\u884c\u5e8f\u5217"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class SinSynthesizer{\n  actionQuery:Map<number,Actor>;\n  x:number;\n  y:number;\n  constructor(x_incr=0.0157){\n    this.actionQuery=[];\n    this.x=0;\n    this.y=0;\n  }\n  \n  gen():{\n    this.x+=x_incr;\n    //\u4e09\u4e2a\u7279\u6b8a\u70b9\n    if(this.x===x_incr*100){\n      this.y=1;\n    }\n    else if(this.x===x_incr*300){\n      this.y=-1;\n    }\n    else if(this.x>=2*Math.PI){\n      this.x=0;\n    }\n    //doSomething(this.x,this.y);\n\n  }\n}\n")))}h.isMDXComponent=!0}}]);