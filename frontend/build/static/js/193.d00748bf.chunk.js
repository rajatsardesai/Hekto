"use strict";(self.webpackChunkhekto=self.webpackChunkhekto||[]).push([[193],{5193:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(7762),a=(n(2791),n(2495)),c=n(7022),s=n(9743),o=n(2677),i=n(8934),l=n(3360),d=n(9434),u=n(7689),m=n(1087),h=n(3791),p=n(9355),f=n(184),x=function(){var t=(0,d.I0)(),e=(0,u.s0)(),n=(0,d.v9)((function(t){return t.cart})).cartItems,x=n.reduce((function(t,e){return t+e.quantity*e.price}),0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:"Cart -@Hekto"}),0===n.length?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c.Z,{className:"cart-page d-flex flex-column align-items-center justify-content-center",children:[(0,f.jsx)("span",{className:"font-22",children:"No products in your cart"}),(0,f.jsx)(l.Z,{className:"bg-secondary-color border-0 my-2 py-2 px-3 rounded-0",children:(0,f.jsx)(m.rU,{to:"/products",className:"text-decoration-none text-white",children:"View Products"})})]})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.Z,{className:"cart-page my-5",children:(0,f.jsxs)(s.Z,{children:[(0,f.jsxs)(o.Z,{md:8,className:"mb-5 mb-lg-0 pe-md-5",children:[(0,f.jsx)("h5",{className:"fw-bold font-22 text-blue-500-color mb-4",children:"Order Summary"}),(0,f.jsx)("div",{className:"product-cart-items overflow-auto pe-0 pe-md-5 mb-4",children:n&&n.map((function(t){return(0,f.jsx)(i.Z,{item:t},t.product)}))}),(0,f.jsx)(l.Z,{className:"bg-secondary-color text-white border-0 my-2 py-2 px-3 rounded-0",onClick:function(){localStorage.removeItem("cartItems");var e,a=(0,r.Z)(n);try{for(a.s();!(e=a.n()).done;){var c=e.value;t((0,h.h2)(c.product))}}catch(s){a.e(s)}finally{a.f()}},children:"Clear Cart"})]}),(0,f.jsxs)(o.Z,{md:4,children:[(0,f.jsx)("h5",{className:"fw-bold font-22 text-blue-500-color text-center mb-4",children:"Cart Totals"}),(0,f.jsx)(p.Z,{cartItems:n,checkoutHandler:function(){e("/login?redirect=shipping")},totalPrice:x})]})]})})})]})}},8934:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(9439),a=n(2791),c=n(4266),s=n(381),o=n(7689),i=n(1087),l=n(9434),d=n(3791),u=n(184),m=function(t){var e=t.item,n=e.image,m=e.name,h=e.product,p=e.price,f=e.quantity,x=e.stock,j=m.replace(/ /g,"-"),g=(0,l.I0)(),y=(0,o.TH)(),b=(0,a.useState)(f),N=(0,r.Z)(b,2),Z=N[0],v=N[1],w=Array.from({length:x},(function(t,e){return e+1}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.Z,{direction:"horizontal",className:"mb-3",children:[(0,u.jsx)(i.rU,{to:"/product/".concat(j,"/").concat(h),className:"me-3",children:(0,u.jsx)("img",{src:n,alt:m,className:"rounded product-cart-items--image"})}),(0,u.jsxs)(c.Z,{direction:"vertical",children:[(0,u.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between",gap:3,children:[(0,u.jsx)(i.rU,{to:"/product/".concat(j,"/").concat(h),className:"font-18 text-decoration-none text-dark text-overflow",style:"/cart"===y.pathname?{width:"70%"}:{width:"100%"},children:m}),"/cart"===y.pathname&&(0,u.jsx)(i.rU,{className:"text-dark",onClick:function(){g((0,d.h2)(h))},children:"Remove"})]}),(0,u.jsxs)("div",{className:"py-2",children:[(0,u.jsx)("span",{className:"fs-6",children:"\u20b9"}),(0,u.jsxs)("span",{className:"font-18 fw-bold text-blue-400-color",children:[p,".00"]})]}),"/cart"===y.pathname?(0,u.jsxs)(s.Z,{onSelect:function(t){v(t),g((0,d.Xq)(j,h,t))},children:[(0,u.jsxs)(s.Z.Toggle,{className:"border",variant:"transparent",children:["Qty: ",Z&&Z]}),(0,u.jsx)(s.Z.Menu,{className:"addtocart-dropdown",children:w.map((function(t,e){return(0,u.jsx)(s.Z.Item,{eventKey:t,children:t},e)}))})]}):(0,u.jsxs)("span",{children:["Qty: ",f]})]})]}),(0,u.jsx)("hr",{})]})}},9355:function(t,e,n){var r=n(2791),a=n(4266),c=n(3360),s=n(7689),o=n(184),i=(0,r.forwardRef)((function(t,e){var n=t.cartItems,r=t.id,i=t.checkoutHandler,l=t.submitbuttonref,d=t.shippingSubmit,u=t.totalPrice,m=t.shippingPrice,h=t.gstPrice,p=t.grandTotal,f=(0,s.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.Z,{className:"w-100 bg-gray-200-color border-0 p-4 rounded",children:[(0,o.jsxs)(a.Z,{direction:"horizontal",className:"align-items-start my-3",children:[(0,o.jsx)("span",{className:"font-lato fw-semibold font-18 text-blue-500-color",children:"Subtotal:"}),(0,o.jsx)(a.Z,{direction:"vertical",children:n&&n.map((function(t){return(0,o.jsxs)("span",{className:"font-lato font-16 text-blue-400-color text-end",children:["\u20b9",t.price*t.quantity,".00 (",t.quantity," items)"]},t.product)}))})]}),("/shipping"===f.pathname||f.pathname==="/order/".concat(r))&&(0,o.jsxs)(a.Z,{direction:"horizontal",className:"align-items-start my-3",children:[(0,o.jsx)("span",{className:"font-lato fw-semibold font-18 text-blue-500-color",children:"Shipping:"}),(0,o.jsx)(a.Z,{direction:"vertical",children:(0,o.jsxs)("span",{className:"font-lato font-16 text-blue-400-color text-end",children:["\u20b9",Math.floor(m),".00"]})})]}),("/shipping"===f.pathname||f.pathname==="/order/".concat(r))&&(0,o.jsxs)(a.Z,{direction:"horizontal",className:"align-items-start my-3",children:[(0,o.jsx)("span",{className:"font-lato fw-semibold font-18 text-blue-500-color",children:"GST:"}),(0,o.jsx)(a.Z,{direction:"vertical",children:(0,o.jsxs)("span",{className:"font-lato font-16 text-blue-400-color text-end",children:["\u20b9",Math.floor(h),".00"]})})]}),(0,o.jsx)("hr",{className:"mb-4"}),(0,o.jsxs)(a.Z,{direction:"horizontal",className:"justify-content-between my-3",children:[(0,o.jsx)("span",{className:"font-lato fw-semibold font-18 text-blue-500-color",children:"Total:"}),(0,o.jsxs)("span",{className:"font-lato font-16 text-blue-400-color",children:["\u20b9","/cart"===f.pathname?Math.floor(u):Math.floor(p),".00"]})]}),"/process/payment"!==f.pathname&&f.pathname!=="/order/".concat(r)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("hr",{className:"mb-4"}),(0,o.jsxs)(a.Z,{direction:"horizontal",className:"mb-4",children:[(0,o.jsx)("img",{src:"/assets/style/check.png",alt:"check symbol"}),(0,o.jsx)("span",{className:"font-lato font-12 text-gray-100-color ms-2",children:"Shipping & taxes calculated at checkout"})]}),(0,o.jsx)(c.Z,{className:"w-100 font-lato font-14 fw-bold bg-green-100-color border-0 p-2 mb-2",submitbuttonref:l,onClick:i||d,children:"/shipping"===f.pathname?"Proceed To Payment":"Proceed To Checkout"})]})]})})}));e.Z=i},2495:function(t,e,n){n(2791);var r=n(6907),a=n(184);e.Z=function(t){var e=t.title;return(0,a.jsx)(r.B6,{children:(0,a.jsx)(r.ql,{children:(0,a.jsx)("title",{children:e})})})}},3791:function(t,e,n){n.d(e,{Xq:function(){return o},h2:function(){return i},l5:function(){return l}});var r=n(4165),a=n(5861),c=n(4566),s=n(1243),o=function(t,e,n){return function(){var o=(0,a.Z)((0,r.Z)().mark((function a(o,i){var l,d;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o({type:c.HD,headerLoading:0}),r.next=3,s.Z.get("/api/v1/product/".concat(t,"/").concat(e));case 3:l=r.sent,d=l.data,o({type:c.G2,payload:{product:d.product._id,name:d.product.name,price:d.product.price,image:d.product.images[0].url,stock:d.product.stock,quantity:n}}),o({type:c.HD,headerLoading:50}),localStorage.setItem("cartItems",JSON.stringify(i().cart.cartItems)),o({type:c.HD,headerLoading:100});case 9:case"end":return r.stop()}}),a)})));return function(t,e){return o.apply(this,arguments)}}()},i=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:c.OZ,payload:t}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:c.EE,payload:t}),localStorage.setItem("shippingInfo",JSON.stringify(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=193.d00748bf.chunk.js.map