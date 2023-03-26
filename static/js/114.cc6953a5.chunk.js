"use strict";(self.webpackChunkepos=self.webpackChunkepos||[]).push([[114],{432:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(2791),r=a(9434),s=a(9439),c=a(9241),i=a(3793),l=a(7689),o=a(9806),u=a(1632),d=a(4768),m=(a(1150),a(6007),a(1959)),x=a(1168),h=a(184),f=function(e){e.customSettingComponent;var t=e.searchBar,a=void 0===t||t,f=e.searchKeyword,p=void 0===f?"":f,v=(e.normalBar,e.disableRealestate,(0,l.s0)()),g=(0,l.TH)(),y=(0,n.useState)(!1),b=(0,s.Z)(y,2),j=(b[0],b[1],(0,r.v9)(d.dy)),N=(0,r.I0)(),w=(0,n.useState)(p),C=(0,s.Z)(w,2),k=(C[0],C[1],(0,r.v9)(m._6),(0,n.useState)("")),S=(0,s.Z)(k,2),F=S[0],B=S[1],I=(0,n.useState)(""),Z=(0,s.Z)(I,2),K=Z[0],E=Z[1],R=(0,n.useState)(!0),T=(0,s.Z)(R,2),U=T[0],G=T[1];return(0,n.useEffect)((function(){"/"===g.pathname?G(!1):G(!0)}),[g.pathname]),(0,h.jsx)("div",{className:"navbar w-full",children:(0,h.jsx)("div",{className:"flex items-center w-full justify-between",children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.v,{as:"div",className:"relative inline-block text-left nav-menu mr-5 mt-1",children:U&&(0,h.jsx)(c.v.Button,{onClick:function(){v("/")},"data-tip":!0,"data-for":"notificationId",className:"inline-flex w-full justify-center rounded-md text-sm text-gray-400 hover:text-gray-100",children:(0,h.jsx)(o.G,{icon:u.Uu6,className:"text-3xl"})})}),a&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{className:"appearance-none italic bg-transparent border-b border-gray-300 w-[30%] text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"search",placeholder:"Search Product",value:F,onChange:function(e){return B(e.target.value)},onKeyUp:function(e){"Enter"===e.code&&v("/search/product/"+F)}}),(0,h.jsx)("input",{className:"appearance-none italic bg-transparent border-b border-gray-300 w-[30%] text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"search",placeholder:"Search Customer",value:K,onChange:function(e){return E(e.target.value)},onKeyUp:function(e){"Enter"===e.code&&v("/search/customer/"+K)}})]}),(0,h.jsxs)(c.v,{as:"div",className:"relative inline-block text-left nav-menu mt-1",children:[(0,h.jsx)(c.v.Button,{className:"inline-flex w-full justify-center rounded-md text-sm text-gray-400 hover:text-app-black",children:(0,h.jsx)(o.G,{icon:u.ILF,className:"text-4xl"})}),(0,h.jsx)(i.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,h.jsx)(c.v.Items,{className:"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-2 ring-gray-200 focus:outline-none z-10",children:(0,h.jsxs)("div",{className:"px-1 py-1 ",children:[j&&(0,h.jsx)("div",{className:"bg-[#606060] text-gray-100 py-2 text-center font-bold",children:j.userproxy&&j.userproxy.length>0?j.userproxy[0].username:j.businessname}),(0,h.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,h.jsxs)("button",{className:"".concat(t?"bg-[#404040] text-white":"text-gray-900"," group  w-full items-center rounded-sm px-2 py-2 text-sm text-center"),onClick:function(){v("/wallet")},children:["Wallet \xa0",(0,h.jsx)("i",{className:"fa fa-right-from-backet",children:"\xa0"})]})}}),(0,h.jsx)(c.v.Item,{children:function(e){var t=e.active;return(0,h.jsxs)("button",{className:"".concat(t?"bg-[#404040] text-white":"text-gray-900"," group  w-full items-center rounded-sm px-2 py-2 text-sm text-center"),onClick:function(e){return N((0,x.g6)(0)),N((0,x.HT)()),void v("/logout")},children:["Logout \xa0",(0,h.jsx)("i",{className:"fa fa-right-from-backet",children:"\xa0"})]})}})]})})})]})]})})})},p=function(e){var t=e.children,a=e.showNavbar,s=void 0===a||a,c=e.navbarCustomSettingComponent,i=e.layoutClass,l=void 0===i?"bg-app-form-border":i,o=e.searchBar,u=e.searchKeyword,d=e.showNormal,m=void 0!==d&&d,x=e.noRealestate,p=void 0!==x&&x,v=e.classes,g=void 0===v?"":v;(0,r.I0)();return(0,n.useEffect)((function(){}),[]),(0,h.jsxs)("div",{className:"w-full min-h-screen bg-[#404040] ".concat(l),children:[s&&(m?(0,h.jsx)("div",{className:"px-6 md:px-10 lg:px-12 py-2",children:(0,h.jsx)(f,{normalBar:!0,disableRealestate:p})}):(0,h.jsx)("div",{className:"px-6 md:px-10 lg:px-12 py-2",children:(0,h.jsx)(f,{customSettingComponent:c,searchBar:o,searchKeyword:u,disableRealestate:p})})),(0,h.jsx)("div",{className:"".concat(g),children:t})]})}},6114:function(e,t,a){a.r(t);var n=a(432),r=a(184);t.default=function(){return(0,r.jsx)(n.Z,{classes:"bg-[#F5F5F5] h-full",children:(0,r.jsx)("div",{className:"flex flex-cols relative"})})}}}]);
//# sourceMappingURL=114.cc6953a5.chunk.js.map