"use strict";(self.webpackChunkhekto=self.webpackChunkhekto||[]).push([[10],{2495:function(e,t,n){n(2791);var r=n(6907),a=n(184);t.Z=function(e){var t=e.title;return(0,a.jsx)(r.B6,{children:(0,a.jsx)(r.ql,{children:(0,a.jsx)("title",{children:t})})})}},5010:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var r=n(9439),a=n(2791),s=n(2495),c=n(7107),i=n(7022),o=n(9743),d=n(2677),l=n(1413),u=n(5987),p=n(1694),f=n.n(p),x=n(162),v=n(6445),y=n(184),m=["active","disabled","className","style","activeLabel","children"],h=["children"],g=a.forwardRef((function(e,t){var n=e.active,r=void 0!==n&&n,a=e.disabled,s=void 0!==a&&a,c=e.className,i=e.style,o=e.activeLabel,d=void 0===o?"(current)":o,p=e.children,x=(0,u.Z)(e,m),h=r||s?"span":v.Z;return(0,y.jsx)("li",{ref:t,style:i,className:f()(c,"page-item",{active:r,disabled:s}),children:(0,y.jsxs)(h,(0,l.Z)((0,l.Z)({className:"page-link"},x),{},{children:[p,r&&d&&(0,y.jsx)("span",{className:"visually-hidden",children:d})]}))})}));g.displayName="PageItem";var Z=g;function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,r=a.forwardRef((function(e,r){var a=e.children,s=(0,u.Z)(e,h);return(0,y.jsxs)(g,(0,l.Z)((0,l.Z)({},s),{},{ref:r,children:[(0,y.jsx)("span",{"aria-hidden":"true",children:a||t}),(0,y.jsx)("span",{className:"visually-hidden",children:n})]}))}));return r.displayName=e,r}var N=j("First","\xab"),b=j("Prev","\u2039","Previous"),w=j("Ellipsis","\u2026","More"),C=j("Next","\u203a"),L=j("Last","\xbb"),k=["bsPrefix","className","size"],H=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.size,s=(0,u.Z)(e,k),c=(0,x.vE)(n,"pagination");return(0,y.jsx)("ul",(0,l.Z)((0,l.Z)({ref:t},s),{},{className:f()(r,c,a&&"".concat(c,"-").concat(a))}))}));H.displayName="Pagination";var D=Object.assign(H,{First:N,Prev:b,Ellipsis:w,Item:Z,Next:C,Last:L}),P=n(4266),E=n(9184),A=n(5890),I=n(2989),S=n(8580),K=n(7858);function R(e,t){return Array.isArray(e)?e.includes(t):e===t}var T=a.createContext({});T.displayName="AccordionContext";var z=T,O=["as","bsPrefix","className","children","eventKey"],F=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,s=e.bsPrefix,c=e.className,i=e.children,o=e.eventKey,d=(0,u.Z)(e,O),p=(0,a.useContext)(z).activeEventKey;return s=(0,x.vE)(s,"accordion-collapse"),(0,y.jsx)(K.Z,(0,l.Z)((0,l.Z)({ref:t,in:R(p,o)},d),{},{className:f()(c,s),children:(0,y.jsx)(r,{children:a.Children.only(i)})}))}));F.displayName="AccordionCollapse";var B=F,M=a.createContext({eventKey:""});M.displayName="AccordionItemContext";var q=M,U=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],W=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,s=e.bsPrefix,c=e.className,i=e.onEnter,o=e.onEntering,d=e.onEntered,p=e.onExit,v=e.onExiting,m=e.onExited,h=(0,u.Z)(e,U);s=(0,x.vE)(s,"accordion-body");var g=(0,a.useContext)(q).eventKey;return(0,y.jsx)(B,{eventKey:g,onEnter:i,onEntering:o,onEntered:d,onExit:p,onExiting:v,onExited:m,children:(0,y.jsx)(r,(0,l.Z)((0,l.Z)({ref:t},h),{},{className:f()(c,s)}))})}));W.displayName="AccordionBody";var X=W,_=n(3433),J=["as","bsPrefix","className","onClick"];var V=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"button":n,s=e.bsPrefix,c=e.className,i=e.onClick,o=(0,u.Z)(e,J);s=(0,x.vE)(s,"accordion-button");var d=(0,a.useContext)(q).eventKey,p=function(e,t){var n=(0,a.useContext)(z),r=n.activeEventKey,s=n.onSelect,c=n.alwaysOpen;return function(n){var a=e===r?null:e;c&&(a=Array.isArray(r)?r.includes(e)?r.filter((function(t){return t!==e})):[].concat((0,_.Z)(r),[e]):[e]),null==s||s(a,n),null==t||t(n)}}(d,i),v=(0,a.useContext)(z).activeEventKey;return"button"===r&&(o.type="button"),(0,y.jsx)(r,(0,l.Z)((0,l.Z)({ref:t,onClick:p},o),{},{"aria-expanded":Array.isArray(v)?v.includes(d):d===v,className:f()(c,s,!R(v,d)&&"collapsed")}))}));V.displayName="AccordionButton";var $=V,Q=["as","bsPrefix","className","children","onClick"],Y=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"h2":n,a=e.bsPrefix,s=e.className,c=e.children,i=e.onClick,o=(0,u.Z)(e,Q);return a=(0,x.vE)(a,"accordion-header"),(0,y.jsx)(r,(0,l.Z)((0,l.Z)({ref:t},o),{},{className:f()(s,a),children:(0,y.jsx)($,{onClick:i,children:c})}))}));Y.displayName="AccordionHeader";var G=Y,ee=["as","bsPrefix","className","eventKey"],te=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,s=e.bsPrefix,c=e.className,i=e.eventKey,o=(0,u.Z)(e,ee);s=(0,x.vE)(s,"accordion-item");var d=(0,a.useMemo)((function(){return{eventKey:i}}),[i]);return(0,y.jsx)(q.Provider,{value:d,children:(0,y.jsx)(r,(0,l.Z)((0,l.Z)({ref:t},o),{},{className:f()(c,s)}))})}));te.displayName="AccordionItem";var ne=te,re=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],ae=a.forwardRef((function(e,t){var n=(0,S.Ch)(e,{activeKey:"onSelect"}),r=n.as,s=void 0===r?"div":r,c=n.activeKey,i=n.bsPrefix,o=n.className,d=n.onSelect,p=n.flush,v=n.alwaysOpen,m=(0,u.Z)(n,re),h=(0,x.vE)(i,"accordion"),g=(0,a.useMemo)((function(){return{activeEventKey:c,onSelect:d,alwaysOpen:v}}),[c,d,v]);return(0,y.jsx)(z.Provider,{value:g,children:(0,y.jsx)(s,(0,l.Z)((0,l.Z)({ref:t},m),{},{className:f()(o,h,p&&"".concat(h,"-flush"))}))})}));ae.displayName="Accordion";var se=Object.assign(ae,{Button:$,Collapse:B,Item:ne,Header:G,Body:X}),ce=n(5630),ie=n(1398),oe=(0,a.memo)((function(e){var t=e.categories,n=e.categoryActiveIndex,r=e.isCategory,a=e.setIsCategory,s=e.setCategory,c=e.setCategoryActiveIndex;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(ce.Z.Label,{className:"font-20 fw-bold text-primary-color text-decoration-underline",children:"Category"}),(0,y.jsx)(ie.Z,{as:"ul",children:t.map((function(e,t){return(0,y.jsx)(ie.Z.Item,{as:"li",className:"font-lato text-gray-500-color border-0 cursor-pointer py-1 px-0 ".concat(n===t?"fw-bold":""),onClick:function(){return function(e,t){a(!r),c(r?t:""),s(r?e:"")}(e,t)},children:e},t)}))})]})})),de=oe,le=(0,a.memo)((function(e){var t=e.price,n=e.setPrice;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(ce.Z.Label,{className:"mt-5 font-20 fw-bold text-primary-color text-decoration-underline",children:"Price"}),(0,y.jsx)(ce.Z.Range,{min:0,max:5e4,value:t,onChange:function(e){n(e.target.value)},"aria-label":"price-range"}),(0,y.jsxs)(P.Z,{direction:"horizontal",className:"justify-content-between",children:[(0,y.jsx)(ce.Z.Label,{className:"font-lato text-gray-500-color",children:"\u20b90"}),(0,y.jsxs)(ce.Z.Label,{className:"font-lato text-gray-500-color",children:["\u20b9",t]})]})]})})),ue=n(5112),pe=(0,a.memo)((function(e){var t=e.ratingActiveIndex,n=e.setRatingActiveIndex,r=e.setRatings,a=function(e,t){r(e),n(t)},s={edit:!1,color:"rgb(20,20,20,0.1)",activeColor:"tomato",size:window.innerWidth<600?20:25,isHalf:!0};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(ce.Z.Label,{className:"mt-5 font-20 fw-bold text-primary-color text-decoration-underline",children:"Avg. Customer Review"}),(0,y.jsxs)("div",{className:"d-flex cursor-pointer",onClick:function(){return a(4,3)},children:[(0,y.jsx)(ue.Z,(0,l.Z)((0,l.Z)({},s),{},{value:4}))," ",(0,y.jsx)("span",{className:"mx-2 fs-6 ".concat(3===t?"fw-bold":""),children:"& up"})]}),(0,y.jsxs)("div",{className:"d-flex cursor-pointer",onClick:function(){return a(3,2)},children:[(0,y.jsx)(ue.Z,(0,l.Z)((0,l.Z)({},s),{},{value:3}))," ",(0,y.jsx)("span",{className:"mx-2 fs-6 ".concat(2===t?"fw-bold":""),children:"& up"})]}),(0,y.jsxs)("div",{className:"d-flex cursor-pointer",onClick:function(){return a(2,1)},children:[(0,y.jsx)(ue.Z,(0,l.Z)((0,l.Z)({},s),{},{value:2}))," ",(0,y.jsx)("span",{className:"mx-2 fs-6 ".concat(1===t?"fw-bold":""),children:"& up"})]}),(0,y.jsxs)("div",{className:"d-flex cursor-pointer",onClick:function(){return a(1,0)},children:[(0,y.jsx)(ue.Z,(0,l.Z)((0,l.Z)({},s),{},{value:1}))," ",(0,y.jsx)("span",{className:"mx-2 fs-6 ".concat(0===t?"fw-bold":""),children:"& up"})]})]})})),fe=["Sofas","Beds","Wardrobes","Dressing Tables","Dining Tables","Study Tables","Chairs","TV and Media Units"],xe=function(e){var t=e.price,n=e.setPrice,s=e.setCategory,c=e.setRatings,i=(0,a.useState)(null),o=(0,r.Z)(i,2),d=o[0],l=o[1],u=(0,a.useState)(null),p=(0,r.Z)(u,2),f=p[0],x=p[1],v=(0,a.useState)(!1),m=(0,r.Z)(v,2),h=m[0],g=m[1],Z=function(){window.innerWidth>767&&document.querySelector(".accordion-collapse").classList?document.querySelector(".accordion-collapse").classList.add("show"):document.querySelector(".accordion-collapse").classList.remove("show")};return(0,a.useEffect)((function(){window.addEventListener("resize",Z)}),[]),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:"bg-white",children:(0,y.jsx)(se,{children:(0,y.jsxs)(se.Item,{className:"border-0",children:[(0,y.jsx)(se.Header,{className:"d-md-none",children:"Filter"}),(0,y.jsxs)(se.Body,{className:"ps-0",children:[(0,y.jsx)(de,{categories:fe,categoryActiveIndex:d,isCategory:h,setIsCategory:g,setCategory:s,setCategoryActiveIndex:l}),(0,y.jsx)(le,{price:t,setPrice:n}),(0,y.jsx)(pe,{ratingActiveIndex:f,setRatings:c,setRatingActiveIndex:x})]})]})})})})},ve=n(9434),ye=n(7689),me=n(1359),he=function(){for(var e=(0,ve.I0)(),t=(0,ye.UO)().keyword,n=(0,a.useState)(""),l=(0,r.Z)(n,2),u=l[0],p=l[1],f=(0,a.useState)(5e4),x=(0,r.Z)(f,2),v=x[0],m=x[1],h=(0,a.useState)(0),g=(0,r.Z)(h,2),Z=g[0],j=g[1],N=(0,ve.v9)((function(e){return e.products})),b=N.products,w=N.productsCount,C=N.filteredProductsCount,L=N.resultPerPage,k=N.loading,H=N.headerLoading,S=N.error,K=N.message,R=[],T=(0,a.useState)(1),z=(0,r.Z)(T,2),O=z[0],F=z[1],B=Math.ceil((u?C:w)/L),M=1;M<=B;M++)R.push((0,y.jsx)(D.Item,{active:M===Number(O),children:M},M));return(0,a.useEffect)((function(){e((0,me.XS)(t,O,v,u,Z))}),[e,t,O,v,u,Z]),k?(0,y.jsx)(c.Z,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.Z,{title:"All Products: Shop Online in India for Furniture, Home Decor, Homeware Products @Hekto"}),(0,y.jsx)(E.Z,{progressLoading:H}),S&&(0,y.jsx)(A.Z,{error:S,message:K}),(0,y.jsxs)(i.Z,{children:[(0,y.jsxs)(P.Z,{className:"flex-column flex-md-row align-items-start align-items-xs-center justify-content-between my-5",children:[(0,y.jsxs)(P.Z,{className:"mb-4 mb-md-0",children:[(0,y.jsx)("h2",{className:"font-22 text-primary-color fw-bold",children:t?"Searched Products":"All Products"}),(0,y.jsxs)("span",{className:"font-12 font-lato text-gray-100-color",children:["About ",C," products (0.62 seconds)"]})]}),(0,y.jsxs)("span",{className:"text-start text-xs-center text-md-end",children:["Per Page: ",(0,y.jsx)("input",{disabled:!0,type:"number",placeholder:L,className:"w-25"})]})]}),(0,y.jsx)("hr",{}),(0,y.jsxs)(o.Z,{className:"mb-5",children:[(0,y.jsx)(d.Z,{md:3,children:(0,y.jsx)(xe,{price:v,setPrice:m,setCategory:p,setRatings:j})}),(0,y.jsx)(d.Z,{md:9,children:(0,y.jsxs)(i.Z,{className:"p-4 text-center",children:[b&&b.length>0?(0,y.jsx)(o.Z,{xs:1,md:2,xl:3,className:"g-4",children:b&&b.map((function(e){return(0,y.jsx)(I.Z,{product:e},e._id)}))}):(0,y.jsx)("span",{children:"No products to show"}),L<(u?C:w)&&(0,y.jsx)("div",{className:"my-4",children:(0,y.jsx)(D,{size:"lg",onClick:function(e){F(e.target.innerText)},className:"justify-content-center",children:R})})]})})]})]})]})}},2989:function(e,t,n){var r=n(1413),a=(n(2791),n(1087)),s=n(9140),c=n(2677),i=n(4266),o=n(5112),d=n(184);t.Z=function(e){var t=e.product,n={edit:!1,color:"rgb(20,20,20,0.1)",activeColor:"tomato",size:window.innerWidth<600?20:25,value:t.ratings,isHalf:!0};return(0,d.jsx)(a.rU,{className:"product-cards text-decoration-none",to:"/product/".concat(t._id),children:(0,d.jsx)(c.Z,{children:(0,d.jsxs)(s.Z,{className:"cards border-0",children:[(0,d.jsx)(s.Z.Img,{variant:"top",src:t.images[0].url,alt:t.name,className:"card-image m-auto object-fit-cover"}),(0,d.jsxs)(s.Z.Body,{className:"text-dark",children:[(0,d.jsx)(s.Z.Title,{className:"text-overflow fw-bold font-18 text-primary-color text-center",children:t.name}),(0,d.jsxs)(i.Z,{className:"align-items-center",children:[(0,d.jsx)(o.Z,(0,r.Z)({},n)),(0,d.jsxs)("span",{className:"text-primary",children:[t.numberOfReviews," Reviews"]})]}),(0,d.jsxs)(s.Z.Text,{className:"text-center font-20 text-secondary-color",children:["\u20b9",t.price]})]})]})})})}},1359:function(e,t,n){n.d(t,{Dg:function(){return i},Ir:function(){return v},KL:function(){return l},Mm:function(){return p},XS:function(){return o},nM:function(){return y},p8:function(){return d},rK:function(){return u},ry:function(){return x},tT:function(){return f}});var r=n(4165),a=n(5861),s=n(1243),c=n(7456),i=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.u9}),t({type:c.HD,headerLoading:0}),e.next=5,s.Z.get("/api/v1/allproducts");case 5:n=e.sent,a=n.data,t({type:c.HD,headerLoading:50}),t({type:c.$L,payload:a}),t({type:c.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:c.D1,payload:e.t0.response.data.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e4,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var d=(0,a.Z)((0,r.Z)().mark((function a(d){var l,u,p;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,d({type:c.hQ}),d({type:c.HD,headerLoading:0}),l="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&price[lte]=").concat(n,"&ratings[gte]=").concat(o),i&&(l="/api/v1/products?category=".concat(i,"&keyword=").concat(e,"&page=").concat(t,"&price[lte]=").concat(n,"&ratings[gte]=").concat(o)),r.next=7,s.Z.get(l);case 7:u=r.sent,p=u.data,d({type:c.HD,headerLoading:50}),d({type:c.do,payload:p}),d({type:c.HD,headerLoading:100}),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),d({type:c.Fq,payload:r.t0.response.data.message});case 17:case"end":return r.stop()}}),a,null,[[0,14]])})));return function(e){return d.apply(this,arguments)}}()},d=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.Iq}),t({type:c.HD,headerLoading:0}),e.next=5,s.Z.get("/api/v1/admin/products");case 5:n=e.sent,a=n.data,t({type:c.HD,headerLoading:50}),t({type:c.AT,payload:a.products}),t({type:c.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:c.zH,payload:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.Uy}),n({type:c.HD,headerLoading:0}),t.next=5,s.Z.get("/api/v1/product/".concat(e));case 5:a=t.sent,i=a.data,n({type:c.HD,headerLoading:50}),n({type:c.xe,payload:i.product}),n({type:c.HD,headerLoading:100}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:c.gh,payload:t.t0.response.data.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,i,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.zK}),n({type:c.HD,headerLoading:0}),a={headers:{"Content-Type":"application/json"}},t.next=6,s.Z.put("/api/v1/review",e,a);case 6:i=t.sent,o=i.data,n({type:c.HD,headerLoading:50}),n({type:c.Yu,payload:o.success}),n({type:c.HD,headerLoading:100}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:c.V_,payload:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.MJ}),n({type:c.HD,headerLoading:0}),t.next=5,s.Z.get("/api/v1/reviews?id=".concat(e));case 5:a=t.sent,i=a.data,n({type:c.HD,headerLoading:50}),n({type:c.zh,payload:i.reviews}),n({type:c.HD,headerLoading:100}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:c.Rc,payload:t.t0.response.data.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var i,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:c.fz}),a({type:c.HD,headerLoading:0}),n.next=5,s.Z.delete("/api/v1/reviews?id=".concat(e,"&productId=").concat(t));case 5:i=n.sent,o=i.data,a({type:c.HD,headerLoading:50}),a({type:c.g6,payload:o}),a({type:c.HD,headerLoading:100}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:c.Om,payload:n.t0.response.data.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,i,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.TK}),n({type:c.HD,headerLoading:0}),a={headers:{"Content-Type":"multipart/form-data"}},t.next=6,s.Z.post("/api/v1/admin/product/new",e,a);case 6:i=t.sent,o=i.data,n({type:c.HD,headerLoading:50}),n({type:c.Cy,payload:o}),n({type:c.HD,headerLoading:100}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:c.J$,payload:t.t0.response.data.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.bi}),n({type:c.HD,headerLoading:0}),t.next=5,s.Z.delete("/api/v1/admin/product/".concat(e));case 5:a=t.sent,i=a.data,n({type:c.HD,headerLoading:50}),n({type:c.cO,payload:i}),n({type:c.HD,headerLoading:100}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:c.IX,payload:t.t0.response.data.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var i,o,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:c.L7}),a({type:c.HD,headerLoading:0}),i={headers:{"Content-Type":"multipart/form-data"}},n.next=6,s.Z.put("/api/v1/admin/product/".concat(e),t,i);case 6:o=n.sent,d=o.data,a({type:c.HD,headerLoading:50}),a({type:c.zk,payload:d}),a({type:c.HD,headerLoading:100}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),a({type:c.ki,payload:n.t0.response.data.message});case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=10.dd8e3dff.chunk.js.map