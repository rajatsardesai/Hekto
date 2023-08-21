"use strict";(self.webpackChunkhekto=self.webpackChunkhekto||[]).push([[465],{6465:function(e,r,t){t.r(r);var n=t(9439),a=t(2791),s=t(2495),o=t(9184),c=t(5890),d=t(9890),i=t(7022),u=t(4266),p=t(9743),l=t(2677),m=t(5630),h=t(3360),f=t(9434),x=t(7689),y=t(8934),g=t(6672),v=t(8213),b=t(184);r.default=function(){var e=(0,f.I0)(),r=(0,x.UO)(),t=(0,f.v9)((function(e){return e.orderDetails})),Z=t.loading,j=t.headerLoading,w=t.error,N=t.message,D=t.order,S=(0,f.v9)((function(e){return e.order})),k=S.headerLoading,I=S.error,L=S.message,H=S.isUpdated,O=(0,a.useState)(""),U=(0,n.Z)(O,2),C=U[0],q=U[1],A=Math.round(D.totalPrice),P=new Date(D.createdAt).toLocaleDateString();return(0,a.useEffect)((function(){H&&setTimeout((function(){e({type:v.Q})}),5e3),e((0,g.s$)(r.id))}),[e,r.id,I,H]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Z,{title:"Process Order - Admin"}),(0,b.jsx)(o.Z,{progressLoading:j||k}),(I||w||H)&&(0,b.jsx)(c.Z,{error:I||w,message:L||N}),(0,b.jsx)(i.Z,{className:"my-5 h-60vh",children:(0,b.jsxs)(p.Z,{children:[(0,b.jsx)("h5",{className:"fw-bold font-22 text-blue-500-color mb-4",children:"Admin Dashboard"}),(0,b.jsx)(l.Z,{lg:4,className:"mb-5 pe-md-5",children:(0,b.jsx)(d.Z,{})}),(0,b.jsx)(l.Z,{lg:8,children:(0,b.jsxs)(u.Z,{className:"bg-gray-300-color px-4 py-5",children:[!Z&&D.user&&D.shippingInfo&&(0,b.jsxs)(u.Z,{className:"mb-5 font-18",children:[(0,b.jsx)("h5",{className:"fw-bold text-blue-500-color mb-4",children:"Shipping Address"}),(0,b.jsx)("span",{className:"fw-bold",children:D.user.name}),(0,b.jsxs)("p",{className:"m-0",children:[D.shippingInfo.address,", ",D.shippingInfo.landmark,", ",D.shippingInfo.city,", ",D.shippingInfo.state,", ",D.shippingInfo.country]}),(0,b.jsx)("span",{className:"m-0",children:D.shippingInfo.phoneNo}),(0,b.jsx)("span",{children:D.user.email})]}),(0,b.jsxs)(u.Z,{className:"mb-5 font-18",children:[(0,b.jsx)("h5",{className:"fw-bold text-blue-500-color mb-4",children:"Order Summary"}),(0,b.jsxs)(u.Z,{className:"mb-4 flex-column flex-md-row",gap:3,children:[(0,b.jsxs)("span",{children:["Ordered on ",P]}),(0,b.jsxs)("span",{children:["Order #",D._id]})]}),D.orderItems&&D.orderItems.map((function(e){return(0,b.jsx)(y.Z,{item:e,quantity:e.quantity},e.product)}))]}),(0,b.jsxs)(u.Z,{className:"mb-5 font-18 flex-column flex-md-row",children:[(0,b.jsxs)(u.Z,{children:[(0,b.jsx)("h5",{className:"fw-bold text-blue-500-color mb-4",children:"Payment Status"}),(0,b.jsx)("span",{className:D.paymentInfo&&"succeeded"===D.paymentInfo.status?"text-success":"text-danger",children:D.paymentInfo&&"succeeded"===D.paymentInfo.status?"Paid":"Not paid"}),(0,b.jsxs)("span",{children:["Amount: ",A]})]}),(0,b.jsxs)(u.Z,{className:"mt-5 mt-md-0",children:[(0,b.jsx)("h5",{className:"fw-bold font-18 text-blue-500-color mb-4",children:"Order Status"}),(0,b.jsx)("span",{className:D.orderStatus&&"Delivered"===D.orderStatus?"text-success":"text-danger",children:D.orderStatus&&D.orderStatus}),D.orderStatus&&("Processing"===D.orderStatus||"Shipped"===D.orderStatus)&&(0,b.jsxs)(m.Z.Select,{value:C,onChange:function(e){return q(e.target.value)},"aria-label":"Choose status",children:[(0,b.jsx)("option",{children:"Choose status"}),"Shipped"!==D.orderStatus&&(0,b.jsx)("option",{value:"Shipped",children:"Shipped"}),"Delivered"!==D.orderStatus&&(0,b.jsx)("option",{value:"Delivered",children:"Delivered"})]})]})]}),(0,b.jsx)(h.Z,{className:"bg-secondary-color border-0 py-2 px-3 rounded-0",disabled:"Delivered"===D.orderStatus||""===D.orderStatus,onClick:function(){var t=new FormData;t.set("status",C),e((0,g.Cs)(r.id,t))},children:"Update"})]})})]})})]})}},9890:function(e,r,t){var n=t(2791),a=t(1398),s=t(1087),o=t(184),c=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(a.Z.Item,{as:s.rU,to:"/admin/dashboard",className:"bg-gray-300-color border-0 p-3 font-18",children:"Dashboard"}),(0,o.jsx)(a.Z.Item,{as:s.rU,to:"/admin/products",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Products"}),(0,o.jsx)(a.Z.Item,{as:s.rU,to:"/admin/orders",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Orders"}),(0,o.jsx)(a.Z.Item,{as:s.rU,to:"/admin/users",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Users"}),(0,o.jsx)(a.Z.Item,{as:s.rU,to:"/admin/reviews",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Reviews"})]})})};r.Z=(0,n.memo)(c)},8934:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(9439),a=t(2791),s=t(4266),o=t(381),c=t(7689),d=t(1087),i=t(9434),u=t(3791),p=t(184),l=function(e){var r=e.item,t=r.image,l=r.name,m=r.product,h=r.price,f=r.quantity,x=r.stock,y=l.replace(/ /g,"-"),g=(0,i.I0)(),v=(0,c.TH)(),b=(0,a.useState)(f),Z=(0,n.Z)(b,2),j=Z[0],w=Z[1],N=Array.from({length:x},(function(e,r){return r+1}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.Z,{direction:"horizontal",className:"mb-3",children:[(0,p.jsx)(d.rU,{to:"/product/".concat(y,"/").concat(m),className:"me-3",children:(0,p.jsx)("img",{src:t,alt:l,className:"rounded product-cart-items--image"})}),(0,p.jsxs)(s.Z,{direction:"vertical",children:[(0,p.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between",gap:3,children:[(0,p.jsx)(d.rU,{to:"/product/".concat(y,"/").concat(m),className:"font-18 text-decoration-none text-dark text-overflow",style:"/cart"===v.pathname?{width:"70%"}:{width:"100%"},children:l}),"/cart"===v.pathname&&(0,p.jsx)(d.rU,{className:"text-dark",onClick:function(){g((0,u.h2)(m))},children:"Remove"})]}),(0,p.jsxs)("div",{className:"py-2",children:[(0,p.jsx)("span",{className:"fs-6",children:"\u20b9"}),(0,p.jsxs)("span",{className:"font-18 fw-bold text-blue-400-color",children:[h,".00"]})]}),"/cart"===v.pathname?(0,p.jsxs)(o.Z,{onSelect:function(e){w(e),g((0,u.Xq)(y,m,e))},children:[(0,p.jsxs)(o.Z.Toggle,{className:"border",variant:"transparent",children:["Qty: ",j&&j]}),(0,p.jsx)(o.Z.Menu,{className:"addtocart-dropdown",children:N.map((function(e,r){return(0,p.jsx)(o.Z.Item,{eventKey:e,children:e},r)}))})]}):(0,p.jsxs)("span",{children:["Qty: ",f]})]})]}),(0,p.jsx)("hr",{})]})}},2495:function(e,r,t){t(2791);var n=t(6907),a=t(184);r.Z=function(e){var r=e.title;return(0,a.jsx)(n.B6,{children:(0,a.jsx)(n.ql,{children:(0,a.jsx)("title",{children:r})})})}},3791:function(e,r,t){t.d(r,{Xq:function(){return c},h2:function(){return d},l5:function(){return i}});var n=t(4165),a=t(5861),s=t(4566),o=t(1243),c=function(e,r,t){return function(){var c=(0,a.Z)((0,n.Z)().mark((function a(c,d){var i,u;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:s.HD,headerLoading:0}),n.next=3,o.Z.get("/api/v1/product/".concat(e,"/").concat(r));case 3:i=n.sent,u=i.data,c({type:s.G2,payload:{product:u.product._id,name:u.product.name,price:u.product.price,image:u.product.images[0].url,stock:u.product.stock,quantity:t}}),c({type:s.HD,headerLoading:50}),localStorage.setItem("cartItems",JSON.stringify(d().cart.cartItems)),c({type:s.HD,headerLoading:100});case 9:case"end":return n.stop()}}),a)})));return function(e,r){return c.apply(this,arguments)}}()},d=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t({type:s.OZ,payload:e}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 2:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},i=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t({type:s.EE,payload:e}),localStorage.setItem("shippingInfo",JSON.stringify(e));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}},6672:function(e,r,t){t.d(r,{Cs:function(){return i},LV:function(){return c},TG:function(){return d},s$:function(){return l},wH:function(){return u},zk:function(){return p}});var n=t(4165),a=t(5861),s=t(8213),o=t(1243),c=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,c,d;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.ib}),t({type:s.HD,orderLoading:0}),a={headers:{"Content-Type":"application/json"}},r.next=6,o.Z.post("/api/v1/order/new",e,a);case 6:c=r.sent,d=c.data,t({type:s.HD,orderLoading:50}),t({type:s.mr,payload:d}),t({type:s.HD,orderLoading:100}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),t({type:s.Sr,payload:r.t0.response.data.message});case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e){return r.apply(this,arguments)}}()},d=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:s.c$}),r({type:s.HD,headerLoading:0}),e.next=5,o.Z.get("/api/v1/orders/me");case 5:t=e.sent,a=t.data,r({type:s.HD,headerLoading:50}),r({type:s.gF,payload:a.orders}),r({type:s.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:s.I7,payload:e.t0.response.data.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},i=function(e,r){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var c,d,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:s.Mi}),a({type:s.HD,headerLoading:0}),c={headers:{"Content-Type":"application/json"}},t.next=6,o.Z.put("/api/v1/admin/order/".concat(e),r,c);case 6:d=t.sent,i=d.data,a({type:s.HD,headerLoading:50}),a({type:s.Bx,payload:i}),a({type:s.HD,headerLoading:100}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:s.vs,payload:t.t0.response.data.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.B6}),t({type:s.HD,headerLoading:0}),r.next=5,o.Z.delete("/api/v1/admin/order/".concat(e));case 5:a=r.sent,c=a.data,t({type:s.HD,headerLoading:50}),t({type:s.Sn,payload:c}),t({type:s.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),t({type:s.gq,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},p=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:s.ym}),r({type:s.HD,headerLoading:0}),e.next=5,o.Z.get("/api/v1/admin/orders");case 5:t=e.sent,a=t.data,r({type:s.HD,headerLoading:50}),r({type:s.Wd,payload:a.orders}),r({type:s.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:s.RB,payload:e.t0.response.data.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},l=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.YO}),t({type:s.HD,headerLoading:0}),r.next=5,o.Z.get("/api/v1/order/".concat(e));case 5:a=r.sent,c=a.data,t({type:s.HD,headerLoading:50}),t({type:s.um,payload:c.order}),t({type:s.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),t({type:s.Ab,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=465.4e0f7c0a.chunk.js.map