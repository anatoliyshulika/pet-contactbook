"use strict";(self.webpackChunkpet_contactbook=self.webpackChunkpet_contactbook||[]).push([[965],{965:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t=r(1413),a=r(3044),o=r(6151),i=r(4708),c=r(8317),s=r(3433),u=r(4942),l=r(3366),d=r(7462),m=r(2791),p=r(8182),f=r(1184),v=r(8519),h=r(4419),g=r(6934),x=r(1402),b=r(3967);var Z=m.createContext(),w=r(5878),S=r(1217);function k(n){return(0,S.Z)("MuiGrid",n)}var j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,w.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,s.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,s.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,s.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,s.Z)(j.map((function(n){return"grid-xs-".concat(n)}))),(0,s.Z)(j.map((function(n){return"grid-sm-".concat(n)}))),(0,s.Z)(j.map((function(n){return"grid-md-".concat(n)}))),(0,s.Z)(j.map((function(n){return"grid-lg-".concat(n)}))),(0,s.Z)(j.map((function(n){return"grid-xl-".concat(n)}))))),W=r(184),N=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function M(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function z(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var a=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return a.slice(0,a.indexOf(t))}var C=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,a=r.direction,o=r.item,i=r.spacing,c=r.wrap,u=r.zeroMinWidth,l=r.breakpoints,d=[];t&&(d=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&t.push(r["spacing-".concat(e,"-").concat(String(a))])})),t}(i,l,e));var m=[];return l.forEach((function(n){var t=r[n];t&&m.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,o&&e.item,u&&e.zeroMinWidth].concat((0,s.Z)(d),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],m)}})((function(n){var e=n.ownerState;return(0,d.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,f.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,f.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(y.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.rowSpacing,o={};if(t&&0!==a){var i,c=(0,f.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(i=z({breakpoints:e.breakpoints.values,values:c})),o=(0,f.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,u.Z)({marginTop:"-".concat(M(a))},"& > .".concat(y.item),{paddingTop:M(a)}):null!=(t=i)&&t.includes(r)?{}:(0,u.Z)({marginTop:0},"& > .".concat(y.item),{paddingTop:0})}))}return o}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.columnSpacing,o={};if(t&&0!==a){var i,c=(0,f.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(i=z({breakpoints:e.breakpoints.values,values:c})),o=(0,f.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,u.Z)({width:"calc(100% + ".concat(M(a),")"),marginLeft:"-".concat(M(a))},"& > .".concat(y.item),{paddingLeft:M(a)}):null!=(t=i)&&t.includes(r)?{}:(0,u.Z)({width:"100%",marginLeft:0},"& > .".concat(y.item),{paddingLeft:0})}))}return o}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,a){var o={};if(t[a]&&(e=t[a]),!e)return n;if(!0===e)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var i=(0,f.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof i?i[a]:i;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var l=r.spacing(t.columnSpacing);if("0px"!==l){var m="calc(".concat(s," + ").concat(M(l),")");u={flexBasis:m,maxWidth:m}}}o=(0,d.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[a]?Object.assign(n,o):n[r.breakpoints.up(a)]=o,n}),{})}));var E=function(n){var e=n.classes,r=n.container,t=n.direction,a=n.item,o=n.spacing,i=n.wrap,c=n.zeroMinWidth,u=n.breakpoints,l=[];r&&(l=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var a="spacing-".concat(e,"-").concat(String(t));r.push(a)}})),r}(o,u));var d=[];u.forEach((function(e){var r=n[e];r&&d.push("grid-".concat(e,"-").concat(String(r)))}));var m={root:["root",r&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,s.Z)(l),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==i&&"wrap-xs-".concat(String(i))],d)};return(0,h.Z)(m,k,e)},P=m.forwardRef((function(n,e){var r=(0,x.Z)({props:n,name:"MuiGrid"}),t=(0,b.Z)().breakpoints,a=(0,v.Z)(r),o=a.className,i=a.columns,c=a.columnSpacing,s=a.component,u=void 0===s?"div":s,f=a.container,h=void 0!==f&&f,g=a.direction,w=void 0===g?"row":g,S=a.item,k=void 0!==S&&S,j=a.rowSpacing,y=a.spacing,M=void 0===y?0:y,z=a.wrap,P=void 0===z?"wrap":z,T=a.zeroMinWidth,O=void 0!==T&&T,B=(0,l.Z)(a,N),F=j||M,G=c||M,_=m.useContext(Z),D=h?i||12:_,L={},V=(0,d.Z)({},B);t.keys.forEach((function(n){null!=B[n]&&(L[n]=B[n],delete V[n])}));var R=(0,d.Z)({},a,{columns:D,container:h,direction:w,item:k,rowSpacing:F,columnSpacing:G,wrap:P,zeroMinWidth:O,spacing:M},L,{breakpoints:t.keys}),q=E(R);return(0,W.jsx)(Z.Provider,{value:D,children:(0,W.jsx)(C,(0,d.Z)({ownerState:R,className:(0,p.Z)(q.root,o),as:u,ref:e},V))})})),T=P,O=r(4554),B=r(403),F=r(890),G=r(1614),_=r(7107),D=r(7012),L=r(9434),V=r(4796);function R(n){return(0,W.jsxs)(F.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center"},n),{},{children:["Copyright \xa9 ","ContactBook ",(new Date).getFullYear(),"."]}))}var q=(0,_.Z)();function H(){var n=(0,L.I0)();return(0,W.jsx)(D.Z,{theme:q,children:(0,W.jsxs)(G.Z,{component:"main",maxWidth:"xs",children:[(0,W.jsx)(i.ZP,{}),(0,W.jsxs)(O.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,W.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,W.jsx)(B.Z,{})}),(0,W.jsx)(F.Z,{component:"h1",variant:"h5",children:"Register"}),(0,W.jsxs)(O.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var r=new FormData(e.currentTarget),t={name:r.get("firstName")+" "+r.get("lastName"),email:r.get("email"),password:r.get("password")};n((0,V.Vf)(t))},sx:{mt:3},children:[(0,W.jsxs)(T,{container:!0,spacing:2,children:[(0,W.jsx)(T,{item:!0,xs:12,sm:6,children:(0,W.jsx)(c.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,W.jsx)(T,{item:!0,xs:12,sm:6,children:(0,W.jsx)(c.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,W.jsx)(T,{item:!0,xs:12,children:(0,W.jsx)(c.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,W.jsx)(T,{item:!0,xs:12,children:(0,W.jsx)(c.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,W.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"})]})]}),(0,W.jsx)(R,{sx:{mt:5}})]})})}},403:function(n,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");e.Z=i},4708:function(n,e,r){var t=r(9439),a=r(7462),o=r(2791),i=r(1402),c=r(5502),s=r(184),u=function(n,e){return(0,a.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!n.vars&&{colorScheme:n.palette.mode})},l=function(n){return(0,a.Z)({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}})};e.ZP=function(n){var e=(0,i.Z)({props:n,name:"MuiCssBaseline"}),r=e.children,d=e.enableColorScheme,m=void 0!==d&&d;return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(c.Z,{styles:function(n){return function(n){var e,r,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};o&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach((function(e){var r,a=(0,t.Z)(e,2),o=a[0],c=a[1];i[n.getColorSchemeSelector(o).replace(/\s*&/,"")]={colorScheme:null==(r=c.palette)?void 0:r.mode}}));var c=(0,a.Z)({html:u(n,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:(0,a.Z)({margin:0},l(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},i),s=null==(e=n.components)||null==(r=e.MuiCssBaseline)?void 0:r.styleOverrides;return s&&(c=[c,s]),c}(n,m)}}),r]})}},7012:function(n,e,r){r.d(e,{Z:function(){return f}});var t=r(2791),a=r(7462),o=r(8023),i=r(9598),c="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=r(184);var u=function(n){var e=n.children,r=n.theme,u=(0,i.Z)(),l=t.useMemo((function(){var n=null===u?r:function(n,e){return"function"===typeof e?e(n):(0,a.Z)({},n,e)}(u,r);return null!=n&&(n[c]=null!==u),n}),[r,u]);return(0,s.jsx)(o.Z.Provider,{value:l,children:e})},l=r(9886),d=r(3459),m={};function p(n){var e=(0,d.Z)();return(0,s.jsx)(l.T.Provider,{value:"object"===typeof e?e:m,children:n.children})}var f=function(n){var e=n.children,r=n.theme;return(0,s.jsx)(u,{theme:r,children:(0,s.jsx)(p,{children:e})})}}}]);
//# sourceMappingURL=965.ae7679a1.chunk.js.map