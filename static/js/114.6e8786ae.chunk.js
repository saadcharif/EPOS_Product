"use strict";(self.webpackChunkepos=self.webpackChunkepos||[]).push([[114],{432:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(4165),r=a(5861),s=a(2791),i=a(9434),c=a(885),o=a(2596),l=a(1460),u=a(7689),d=a(9806),m=a(1632),x=a(4768),p=(a(1150),a(6007),a(1959)),f=a(184),h=function(e){e.customSettingComponent;var t=e.searchBar,a=void 0===t||t,n=e.searchKeyword,r=void 0===n?"":n,h=(e.normalBar,e.disableRealestate,(0,u.s0)()),v=(0,s.useState)(!1),g=(0,c.Z)(v,2),y=(g[0],g[1],(0,i.v9)(x.dy)),b=((0,i.I0)(),(0,s.useState)(r)),j=(0,c.Z)(b,2),w=(j[0],j[1],(0,i.v9)(p._6),(0,s.useState)("")),N=(0,c.Z)(w,2),k=N[0],C=N[1],F=(0,s.useState)(""),S=(0,c.Z)(F,2),Z=S[0],B=S[1];return(0,f.jsx)("div",{className:"navbar w-full",children:(0,f.jsx)("div",{className:"flex items-center w-full justify-between",children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.v,{as:"div",className:"relative inline-block text-left nav-menu mr-5 mt-1",children:(0,f.jsx)(o.v.Button,{onClick:function(){h(-1)},"data-tip":!0,"data-for":"notificationId",className:"inline-flex w-full justify-center rounded-md text-sm text-gray-400 hover:text-gray-100",children:(0,f.jsx)(d.G,{icon:m.Uu6,className:"text-3xl"})})}),a&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{className:"appearance-none italic bg-transparent border-b border-gray-300 w-[30%] text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"search",placeholder:"Search Product",value:k,onChange:function(e){return C(e.target.value)},onKeyUp:function(e){"Enter"===e.code&&h("/search/product/"+k)}}),(0,f.jsx)("input",{className:"appearance-none italic bg-transparent border-b border-gray-300 w-[30%] text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"search",placeholder:"Search Customer",value:Z,onChange:function(e){return B(e.target.value)},onKeyUp:function(e){"Enter"===e.code&&h("/search/customer/"+Z)}})]}),(0,f.jsxs)(o.v,{as:"div",className:"relative inline-block text-left nav-menu mt-1",children:[(0,f.jsx)(o.v.Button,{className:"inline-flex w-full justify-center rounded-md text-sm text-gray-400 hover:text-app-black",children:(0,f.jsx)(d.G,{icon:m.ILF,className:"text-4xl"})}),(0,f.jsx)(l.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,f.jsx)(o.v.Items,{className:"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-2 ring-gray-200 focus:outline-none z-10",children:(0,f.jsxs)("div",{className:"px-1 py-1 ",children:[y&&(0,f.jsx)("div",{className:"bg-[#606060] text-gray-100 py-2 text-center font-bold",children:y.username?y.username:y.businessname}),(0,f.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,f.jsxs)("button",{className:"".concat(t?"bg-[#404040] text-white":"text-gray-900"," group  w-full items-center rounded-sm px-2 py-2 text-sm text-center"),children:["Wallet \xa0",(0,f.jsx)("i",{className:"fa fa-right-from-backet",children:"\xa0"})]})}}),(0,f.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,f.jsxs)("button",{className:"".concat(t?"bg-[#404040] text-white":"text-gray-900"," group  w-full items-center rounded-sm px-2 py-2 text-sm text-center"),onClick:function(e){h("/logout")},children:["Logout \xa0",(0,f.jsx)("i",{className:"fa fa-right-from-backet",children:"\xa0"})]})}})]})})})]})]})})})},v=function(e){var t=e.children,a=e.showNavbar,c=void 0===a||a,o=e.navbarCustomSettingComponent,l=e.layoutClass,u=void 0===l?"bg-app-form-border":l,d=e.searchBar,m=e.searchKeyword,x=e.showNormal,p=void 0!==x&&x,v=e.noRealestate,g=void 0!==v&&v,y=e.classes,b=void 0===y?"":y;(0,i.I0)();return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:"clipboard-read",allowWithoutGesture:!1},e.next=3,navigator.permissions.query(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{className:"w-full min-h-screen bg-[#404040] ".concat(u),children:[c&&(p?(0,f.jsx)("div",{className:"px-6 md:px-10 lg:px-12 py-2",children:(0,f.jsx)(h,{normalBar:!0,disableRealestate:g})}):(0,f.jsx)("div",{className:"px-6 md:px-10 lg:px-12 py-2",children:(0,f.jsx)(h,{customSettingComponent:o,searchBar:d,searchKeyword:m,disableRealestate:g})})),(0,f.jsx)("div",{className:"".concat(b),children:t})]})}},6114:function(e,t,a){a.r(t);a(2791);var n=a(432),r=a(184);t.default=function(){return(0,r.jsx)(n.Z,{classes:"bg-[#F5F5F5] h-full",children:(0,r.jsx)("div",{className:"flex flex-cols relative"})})}}}]);
//# sourceMappingURL=114.6e8786ae.chunk.js.map