"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[722],{46538:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(67294),r=n(53342),a=n(5979);function l(){var e=1280,t=window.innerWidth,n=window.innerHeight;return t>e&&(n=(t=e)*n/window.innerWidth),n>720&&(t=t*(n=720)/window.innerHeight),(e-t)/2+" 0 "+t+" "+n}function c(){if("undefined"==typeof window)return null;var e=(0,a.If)(),t=e.colorMode;e.setColorMode;return(0,i.useEffect)((function(){null===pubHero.onresize&&(pubHero.onresize=function(){pubHero.setAttribute("viewBox",l())},window.addEventListener("resize",pubHero.onresize)),"dark"===t&&animate.beginElement()})),i.createElement("div",{style:{overflow:"hidden"}},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:l(),height:"100%",width:"100%",id:"pubHero"},i.createElement("defs",null,i.createElement("rect",{fill:"url(#tex-sand-stone-grained)",id:"rect-cab",width:"1280",height:"690",x:"0",y:"30"}),i.createElement("rect",{fill:"#FAD6B1",id:"rect-cab-top",width:"1280",height:"30",x:"0",y:"0"}),i.createElement("g",{id:"baku-logo"},i.createElement("path",{d:"m 671.98645,191.37241 c -5.41263,-5.02604 -14.29347,-10.51283 -28.83744,-17.81636 -7.52765,-3.78013 -15.21794,-7.89972 -17.08957,-9.15458 -1.87162,-1.25487 -3.49862,-2.1859 -3.61561,-2.06899 -0.97939,0.97926 4.78894,6.2677 10.05118,9.21502 l 4.47074,2.50402 -6.7061,0.005 c -8.30714,0.005 -14.07459,0.86264 -23.34713,3.47168 -5.88385,1.65564 -17.61893,4.47344 -18.62989,4.47344 -0.13552,0 -0.24662,-20.70021 -0.24662,-46.00054 V 90 l 3.35305,0.34081 c 1.84417,0.187456 5.51877,0.773726 8.16573,1.302747 30.33044,6.061995 61.12361,35.099163 81.86393,77.195513 4.01579,8.15078 9.35737,20.82597 10.2039,24.21303 l 0.34137,1.36586 -8.37435,-0.0223 -8.3744,-0.0223 z"}),i.createElement("text",{id:"baku-text",x:"639.74115",y:"191.74371"},i.createElement("tspan",{x:"639.74115",y:"191.74371",style:{textAlign:"center",textAnchor:"middle"}},"Baku"),i.createElement("tspan",{x:"639.74115",y:"204.97284",style:{textAlign:"center",textAnchor:"middle"}},"Public House"))),i.createElement("pattern",{patternUnits:"userSpaceOnUse",id:"tex-sand-stone",height:"128",width:"128"},i.createElement("image",{href:"/texture/tex_sand_stone.jpg",height:"128",width:"128"})),i.createElement("pattern",{patternUnits:"userSpaceOnUse",id:"tex-sand-stone-grained",height:"64",width:"64"},i.createElement("image",{href:"/texture/tex_sand_stone.jpg",height:"64",width:"64"})),i.createElement("filter",{id:"night-bg-shader"},i.createElement("feColorMatrix",{in:"SourceGraphic",type:"luminanceToAlpha",result:"night-bg-bump"}),i.createElement("feDiffuseLighting",{in:"night-bg-bump",result:"night-bg-light-center",x:"0",y:"0",height:"720"},i.createElement("fePointLight",{x:"640",y:"-80",z:"15"})),i.createElement("feComposite",{in:"SourceGraphic",in2:"night-bg-light-center",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"},i.createElement("animate",{id:"animate",attributeName:"k1",values:"0;.5;1",dur:"1.5s"}))),i.createElement("filter",{id:"day-bg-shader"},i.createElement("feColorMatrix",{in:"SourceGraphic",type:"luminanceToAlpha",result:"day-bg-bump"}),i.createElement("feDiffuseLighting",{in:"day-bg-bump",result:"day-bg-light-env",x:"0",y:"0",height:"720"},i.createElement("feDistantLight",{azimuth:"315",elevation:"10"})),i.createElement("feComposite",{in:"SourceGraphic",in2:"day-bg-light-env",result:"day-bg-light1",operator:"arithmetic",k1:"3",k2:"0",k3:"0",k4:"0"}))),i.createElement("g",{filter:"dark"===t?"url(#night-bg-shader)":"url(#day-bg-shader)"},i.createElement("use",{href:"#rect-cab"}),i.createElement("use",{href:"#rect-cab-top"}),i.createElement("use",{href:"#baku-logo",fill:"white",fillOpacity:".8"}))))}function h(){return i.createElement(r.Z,null,i.createElement(c,null))}}}]);