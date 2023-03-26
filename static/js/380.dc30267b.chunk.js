"use strict";(self.webpackChunkepos=self.webpackChunkepos||[]).push([[380],{9380:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var r=a(9439),n=a(2791),s=a(432),l=a(8675),i=a(9806),c=a(1632),o=a(3793),d=a(9593),m=a(9434),u=a(2322),x=a(184),h=function(e){var t=e.isModal,a=e.setIsModal,s=(0,m.I0)(),l=(0,n.useState)(""),i=(0,r.Z)(l,2),c=i[0],h=i[1];return(0,x.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,x.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,x.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,x.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,x.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Please enter category name:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:c,onChange:function(e){return h(e.target.value)}})}),(0,x.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return s((0,u.lb)(0,{name:c})),h(""),void a(!1)},children:"Confirm"})]})]})})})})]})})},p=a(4165),f=a(5861),v=a(7492),g=a(7577),j=a(5169),b=function(){var e=(0,f.Z)((0,p.Z)().mark((function e(t){var a,r;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",body:t},r=fetch("".concat(j.Sg,"/upload/image"),a),e.next=4,(0,g._y)(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={uploadFiles:b},N=function(e){var t=e.isModal,a=e.setIsModal,s=e.categories,l=(0,m.I0)(),i=(0,n.useState)(""),c=(0,r.Z)(i,2),u=c[0],h=c[1],g=(0,n.useState)(""),j=(0,r.Z)(g,2),b=j[0],N=j[1],w=(0,n.useState)(0),D=(0,r.Z)(w,2),F=D[0],C=D[1],k=(0,n.useState)(""),Z=(0,r.Z)(k,2),I=Z[0],S=Z[1],T=(0,n.useState)(""),M=(0,r.Z)(T,2),_=M[0],P=M[1],V=(0,n.useState)(""),E=(0,r.Z)(V,2),U=E[0],z=E[1];(0,n.useEffect)((function(){s[0]&&S(s[0]._id)}),[s[0]]);var A=function(){var e=(0,f.Z)((0,p.Z)().mark((function e(t){var a,r,n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files&&t.target.files.length>0)){e.next=9;break}return a=document.getElementById("image_photo").files[0],(r=new FormData).append("file",a),r.append("name",a.name),e.next=7,y.uploadFiles(r);case 7:"success"===(n=e.sent).status&&z(n.result);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,x.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,x.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,x.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,x.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Product Name:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:u,onChange:function(e){return h(e.target.value)}})}),(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Description:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:b,onChange:function(e){return N(e.target.value)}})}),(0,x.jsxs)("div",{className:"flex min-h-[2rem] gap-4",children:[(0,x.jsxs)("div",{className:"w-[40%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Price:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"number",value:F,onChange:function(e){return C(e.target.value)}})})]}),(0,x.jsxs)("div",{className:"w-[60%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Category:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("select",{className:"bg-[#404040] border-b border-gray-300 text-gray-100 text-sm block w-full p-2.5 focus:outline-none",onChange:function(e){return function(e){S(e.target.value)}(e)},children:s.map((function(e,t){return(0,x.jsx)("option",{value:e._id,children:e.name},t)}))})})]})]}),(0,x.jsxs)("div",{className:"flex min-h-[8rem] gap-4",children:[(0,x.jsxs)("div",{className:"w-[50%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"SKU:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:_,onChange:function(e){return P(e.target.value)}})})]}),(0,x.jsxs)("div",{className:"w-[50%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Image:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsxs)("div",{className:"w-full flex flex-col text-ato-form-text text-sm  justify-center px-3 py-2 font-universLight ",children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"relative cursor-pointer",onClick:function(e){var t;null===(t=document.getElementById("image_photo"))||void 0===t||t.click()},children:(0,x.jsx)("div",{className:"w-full h-[2rem] rounded-[0.6rem] m-auto border border-gray-300 text-gray-300 leading-[2rem]",children:"Upload"})})}),(0,x.jsx)("input",{id:"image_photo",accept:"image/*",type:"file",onChange:A,className:"hidden",name:"avatar"})]})})]})]}),(0,x.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return l((0,v.if)(0,{name:u,desc:b,price:F,sku:_,photo:U,categoryId:I})),h(""),N(""),C(0),S(s[0]._id),P(""),z(""),void a(!1)},children:"Confirm"})]})]})})})})]})})},w=function(e){var t=e.isModal,a=e.setIsModal,s=e.category,l=e.setCategory,i=(0,m.I0)(),c=(0,n.useState)(""),h=(0,r.Z)(c,2),p=h[0],f=h[1];return(0,n.useEffect)((function(){s&&s._id&&f(s.name)}),[s._id]),(0,x.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,x.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,x.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,x.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,x.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Please enter category name:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:p,onChange:function(e){return f(e.target.value)}})}),(0,x.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return i((0,u.lb)(s._id,{name:p})),f(""),l([]),void a(!1)},children:"Update"})]})]})})})})]})})},D=function(e){var t=e.isModal,a=e.setIsModal,s=e.categories,l=e.product,i=e.setProduct,c=(0,m.I0)(),u=(0,n.useState)(""),h=(0,r.Z)(u,2),g=h[0],j=h[1],b=(0,n.useState)(""),N=(0,r.Z)(b,2),w=N[0],D=N[1],F=(0,n.useState)(0),C=(0,r.Z)(F,2),k=C[0],Z=C[1],I=(0,n.useState)(""),S=(0,r.Z)(I,2),T=S[0],M=S[1],_=(0,n.useState)(""),P=(0,r.Z)(_,2),V=P[0],E=P[1],U=(0,n.useState)(""),z=(0,r.Z)(U,2),A=z[0],B=z[1];(0,n.useEffect)((function(){s[0]&&M(s[0]._id)}),[s[0]]),(0,n.useEffect)((function(){l&&l._id&&(j(l.name),D(l.description),Z(l.price),M(l.categoryId),E(l.sku),B(l.photo))}),[l._id]);var K=function(){var e=(0,f.Z)((0,p.Z)().mark((function e(t){var a,r,n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files&&t.target.files.length>0)){e.next=9;break}return a=document.getElementById("image_photo").files[0],(r=new FormData).append("file",a),r.append("name",a.name),e.next=7,y.uploadFiles(r);case 7:"success"===(n=e.sent).status&&B(n.result);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,x.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,x.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,x.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,x.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Product Name:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:g,onChange:function(e){return j(e.target.value)}})}),(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Description:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:w,onChange:function(e){return D(e.target.value)}})}),(0,x.jsxs)("div",{className:"flex min-h-[7rem] gap-4",children:[(0,x.jsxs)("div",{className:"w-[40%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Price:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"number",value:k,onChange:function(e){return Z(e.target.value)}})})]}),(0,x.jsxs)("div",{className:"w-[60%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Category:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("select",{className:"bg-[#404040] border-b border-gray-300 text-gray-100 text-sm block w-full p-2.5 focus:outline-none",onChange:function(e){return function(e){M(e.target.value)}(e)},children:s.map((function(e,t){return(0,x.jsx)("option",{value:e._id,children:e.name},t)}))})})]})]}),(0,x.jsxs)("div",{className:"flex min-h-[8rem] gap-4",children:[(0,x.jsxs)("div",{className:"w-[50%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"SKU:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:V,onChange:function(e){return E(e.target.value)}})})]}),(0,x.jsxs)("div",{className:"w-[50%]",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Image:"})}),(0,x.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,x.jsxs)("div",{className:"w-full flex flex-col text-ato-form-text text-sm  justify-center px-3 py-2 font-universLight ",children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"relative cursor-pointer",onClick:function(e){var t;null===(t=document.getElementById("image_photo"))||void 0===t||t.click()},children:(0,x.jsx)("div",{className:"w-full h-[2rem] rounded-[0.6rem] m-auto border border-gray-300 text-gray-300 leading-[2rem]",children:"Upload"})})}),(0,x.jsx)("input",{id:"image_photo",accept:"image/*",type:"file",onChange:K,className:"hidden",name:"avatar"})]})})]})]}),(0,x.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return c((0,v.if)(l._id,{name:g,desc:w,price:k,sku:V,photo:A,categoryId:T})),j(""),D(""),Z(0),E(""),B(""),M(s[0]._id),i([]),void a(!1)},children:"Update"})]})]})})})})]})})},F=function(e){var t=e.isModal,a=e.setIsModal,r=e.category,s=(0,m.I0)();return(0,x.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,x.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,x.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,x.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,x.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("div",{className:"px-[2rem] text-xl mb-2 text-[#D9D9D9] font-bold",children:"Are you sure you wish to delete category?"})}),(0,x.jsx)("div",{className:"min-h-[6rem] pb-[0.5rem]"}),(0,x.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return s((0,u.uu)(r._id)),void a(!1)},children:"Confirm"})]})]})})})})]})})},C=function(e){var t=e.isModal,a=e.setIsModal,r=e.product,s=(0,m.I0)();return(0,x.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,x.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,x.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,x.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,x.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,x.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("div",{className:"px-[2rem] text-xl mb-2 text-[#D9D9D9] font-bold",children:"Are you sure you wish to delete product?"})}),(0,x.jsx)("div",{className:"min-h-[6rem] pb-[0.5rem]"}),(0,x.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,x.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return s((0,v.Ir)(r._id)),void a(!1)},children:"Confirm"})]})]})})})})]})})},k=function(){var e=(0,m.I0)(),t=(0,n.useState)(!1),a=(0,r.Z)(t,2),o=a[0],d=a[1],p=(0,n.useState)(!1),f=(0,r.Z)(p,2),g=f[0],j=f[1],b=(0,n.useState)(!1),y=(0,r.Z)(b,2),k=y[0],Z=y[1],I=(0,n.useState)(!1),S=(0,r.Z)(I,2),T=S[0],M=S[1],_=(0,n.useState)(!1),P=(0,r.Z)(_,2),V=P[0],E=P[1],U=(0,n.useState)(!1),z=(0,r.Z)(U,2),A=z[0],B=z[1],K=(0,n.useState)([]),L=(0,r.Z)(K,2),O=L[0],R=L[1],G=(0,n.useState)([]),J=(0,r.Z)(G,2),X=J[0],Y=J[1],q=(0,m.v9)(u.us),H=(0,m.v9)(v.nR);(0,n.useEffect)((function(){e((0,u.CP)()),e((0,v.Xp)())}),[]);var Q=function(e){var t=q.filter((function(t){return t._id===e}));return t[0]?t[0].name:""};return(0,x.jsxs)(s.Z,{classes:"bg-[#404040] h-full",children:[(0,x.jsxs)("div",{className:"flex flex-row",children:[(0,x.jsxs)("div",{className:"w-full h-[calc(100vh-80px)]",children:[(0,x.jsxs)("div",{className:"text-gray-100 text-2xl flex flex-row items-center px-[2rem] mt-6",children:[(0,x.jsx)(i.G,{icon:c.J9Y}),(0,x.jsx)("p",{className:"ml-2 font-bold",children:"Inventory"})]}),(0,x.jsxs)("div",{className:"w-[50%] flex px-[2rem] mt-[2rem] text-gray-100 text-xl italic",children:[(0,x.jsx)("button",{className:"w-[10rem] text-md leading-[2.1rem] rounded-[0.6rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return d(!0)},children:"Add Category"}),(0,x.jsx)("button",{className:"w-[10rem] text-md leading-[2.1rem] rounded-[0.6rem] bg-[#D9D9D9] text-gray-800 ml-6",onClick:function(){return j(!0)},children:"Add Product"})]}),(0,x.jsxs)("div",{className:"text-md divide-y divide-gray-400 py-1 mt-2 px-[2rem]",children:[(0,x.jsx)("div",{className:"text-xl font-bold uppercase text-gray-100 mb-2",children:"Categories"}),(0,x.jsx)("div",{className:"h-[28vh] overflow-y-auto",children:q.map((function(e,t){return(0,x.jsxs)("div",{className:"w-full flex text-gray-100 leading-[1.4rem]",children:[(0,x.jsx)("p",{className:"w-[70%]",children:e.name}),(0,x.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){Z(!0),R(e)},children:"Edit"}),(0,x.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){E(!0),R(e)},children:"Delete"})]},t)}))})]}),(0,x.jsxs)("div",{className:"text-md divide-y divide-gray-400 py-1 mt-2 px-[2rem]",children:[(0,x.jsx)("div",{className:"text-xl font-bold uppercase text-gray-100 mb-2",children:"PRODUCTS"}),(0,x.jsx)("div",{className:"h-[28vh] overflow-y-auto",children:H.map((function(e,t){return(0,x.jsxs)("div",{className:"w-full flex text-gray-100 leading-[1.4rem]",children:[(0,x.jsxs)("p",{className:"w-[70%]",children:[e.name," > ",Q(e.categoryId)]}),(0,x.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){M(!0),Y(e)},children:"Edit"}),(0,x.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){B(!0),Y(e)},children:"Delete"})]},t)}))})]})]}),(0,x.jsx)(l.Z,{})]}),(0,x.jsx)(h,{isModal:o,setIsModal:d}),(0,x.jsx)(N,{isModal:g,setIsModal:j,categories:q}),(0,x.jsx)(w,{isModal:k,setIsModal:Z,category:O,setCategory:R}),(0,x.jsx)(D,{isModal:T,setIsModal:M,categories:q,product:X,setProduct:Y}),(0,x.jsx)(F,{isModal:V,setIsModal:E,category:O}),(0,x.jsx)(C,{isModal:A,setIsModal:B,product:X})]})}}}]);
//# sourceMappingURL=380.dc30267b.chunk.js.map