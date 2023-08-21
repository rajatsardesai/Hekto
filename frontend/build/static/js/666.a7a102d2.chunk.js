"use strict";(self.webpackChunkhekto=self.webpackChunkhekto||[]).push([[666],{2495:function(e,r,a){a(2791);var s=a(6907),t=a(184);r.Z=function(e){var r=e.title;return(0,t.jsx)(s.B6,{children:(0,t.jsx)(s.ql,{children:(0,t.jsx)("title",{children:r})})})}},2666:function(e,r,a){a.r(r);a(2791);var s=a(2495),t=a(9184),n=a(5890),o=a(7022),i=a(4266),l=a(9140),d=a(5630),c=a(3360),m=a(9434),u=a(9600),h=a(5705),b=a(4848),p=a(184),P={email:""};r.default=function(){var e=(0,m.I0)(),r=(0,m.v9)((function(e){return e.forgotPassword})),a=r.loading,f=r.error,y=r.isResetPassword,Z=r.message,w=r.headerLoading,x=(0,h.TA)({initialValues:P,validationSchema:b.cu,onSubmit:function(r){return e((0,u.gF)(r.email))}}),v=x.values,g=x.errors,N=x.touched,q=x.handleBlur,j=x.handleChange,_=x.handleSubmit;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{title:"Hekto Forgot Password"}),(0,p.jsx)(t.Z,{progressLoading:w}),(f||y||a)&&(0,p.jsx)(n.Z,{error:f,message:Z}),(0,p.jsx)(i.Z,{className:"users-page my-5 py-5",children:(0,p.jsx)(o.Z,{children:(0,p.jsxs)(l.Z,{className:"p-3 p-md-5 border-0 card-shadow",children:[(0,p.jsx)(l.Z.Title,{className:"fw-bold mb-1 text-center",children:"Forgot Password?"}),(0,p.jsx)("span",{className:"text-center text-gray-500-color font-lato font-17",children:"Please enter your registered email address below."}),(0,p.jsxs)(d.Z,{onSubmit:_,className:"mt-5",children:[(0,p.jsxs)(d.Z.Group,{className:"mb-4",controlId:"email",children:[(0,p.jsx)(d.Z.Control,{type:"email",name:"email",value:v.email,autoComplete:"off",placeholder:"Email address",className:"font-lato font-16",onChange:j,onBlur:q,isInvalid:N.email&&g.email}),g.email&&N.email?(0,p.jsx)(d.Z.Control.Feedback,{type:"invalid",children:g.email}):null]}),(0,p.jsx)(c.Z,{type:"submit",className:"w-100 my-4 bg-secondary-color border-0 rounded-1",children:"Submit"})]})]})})})]})}},4848:function(e,r,a){a.d(r,{Iy:function(){return m},JE:function(){return u},KC:function(){return c},cu:function(){return n},dm:function(){return t},if:function(){return i},jE:function(){return l},v6:function(){return d},xr:function(){return o}});var s=a(8007),t=s.Ry({email:s.Z_().email("Invalid Email").required("Please enter your email"),password:s.Z_().min(6,"Password must be at least 6 characters").required("Please enter your password")}),n=s.Ry({email:s.Z_().email("Invalid Email").required("Please enter your email")}),o=s.Ry({password:s.Z_().min(6,"Password must be at least 6 characters").required("Please enter your new password"),confirmPassword:s.Z_().min(6,"Password must be at least 6 characters").oneOf([s.iH("password"),null],"Password does not match").required("Please confirm your new password")}),i=s.Ry({name:s.Z_().min(2,"Name must be at least 2 characters").max(25,"Name should not be more than 25 characters").required("Please enter your name"),email:s.Z_().email("Invalid Email").required("Please enter your email"),password:s.Z_().min(6,"Password must be at least 6 characters").required("Please enter your password"),avatar:s.nK().required("Please enter your image")}),l=s.Ry({name:s.Z_().min(2,"Name must be at least 2 characters").max(25,"Name should not be more than 25 characters").required("Please enter your name"),email:s.Z_().email("Invalid Email").required("Please enter your email")}),d=s.Ry({oldPassword:s.Z_().min(6,"Old password must be at least 6 characters").required("Please enter your old password"),newPassword:s.Z_().min(6,"New password must be at least 6 characters").required("Please enter your new password"),confirmNewPassword:s.Z_().min(6,"New password must be at least 6 characters").oneOf([s.iH("newPassword"),null],"Password does not match").required("Please confirm your new password")}),c=s.Ry({address:s.Z_().min(6,"Address must be at least 6 characters").required("Please enter your address"),city:s.Z_().min(3,"City must be at least 3 characters").required("Please enter your city"),state:s.Z_().required("Please select your state"),landmark:s.Z_().min(3,"Landmark must be at least 3 characters"),pinCode:s.Rx().typeError("Pin code must be a number").min(3,"Pin code must be at least 3 characters").required("Please enter your pin code"),phoneNo:s.Rx().typeError("Phone number must be a number").required("Please enter your phone number")}),m=s.Ry({name:s.Z_().min(3,"Name must be at least 3 characters").required("Please enter product name"),price:s.Rx().typeError("Price must be a number").required("Please enter product price"),description:s.Z_().min(25,"Description must be at least 25 characters").max(2e3,"Description should not be more than 2000 characters").required("Please enter product description"),category:s.Z_().required("Please select product category"),stock:s.Rx().min(1,"Please add atleast 1 product").positive("Stock must be a positive number").typeError("Stock must be a number").required("Please enter product stock"),images:s.nK().required("Please choose product image"),imagesPreview:s.nK()}),u=s.Ry({name:s.Z_().min(2,"Name must be at least 2 characters").max(25,"Name should not be more than 25 characters").required("Please enter name"),email:s.Z_().email("Invalid Email").required("Please enter email"),role:s.Z_().required("Please select role")})},9140:function(e,r,a){a.d(r,{Z:function(){return k}});var s=a(1413),t=a(5987),n=a(1694),o=a.n(n),i=a(2791),l=a(162),d=a(6543),c=a(7472),m=a(184),u=["bsPrefix","className","variant","as"],h=i.forwardRef((function(e,r){var a=e.bsPrefix,n=e.className,i=e.variant,d=e.as,c=void 0===d?"img":d,h=(0,t.Z)(e,u),b=(0,l.vE)(a,"card-img");return(0,m.jsx)(c,(0,s.Z)({ref:r,className:o()(i?"".concat(b,"-").concat(i):b,n)},h))}));h.displayName="CardImg";var b=h,p=a(6040),P=["bsPrefix","className","as"],f=i.forwardRef((function(e,r){var a=e.bsPrefix,n=e.className,d=e.as,c=void 0===d?"div":d,u=(0,t.Z)(e,P),h=(0,l.vE)(a,"card-header"),b=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,m.jsx)(p.Z.Provider,{value:b,children:(0,m.jsx)(c,(0,s.Z)((0,s.Z)({ref:r},u),{},{className:o()(n,h)}))})}));f.displayName="CardHeader";var y=f,Z=["bsPrefix","className","bg","text","border","body","children","as"],w=(0,c.Z)("h5"),x=(0,c.Z)("h6"),v=(0,d.Z)("card-body"),g=(0,d.Z)("card-title",{Component:w}),N=(0,d.Z)("card-subtitle",{Component:x}),q=(0,d.Z)("card-link",{Component:"a"}),j=(0,d.Z)("card-text",{Component:"p"}),_=(0,d.Z)("card-footer"),C=(0,d.Z)("card-img-overlay"),R=i.forwardRef((function(e,r){var a=e.bsPrefix,n=e.className,i=e.bg,d=e.text,c=e.border,u=e.body,h=void 0!==u&&u,b=e.children,p=e.as,P=void 0===p?"div":p,f=(0,t.Z)(e,Z),y=(0,l.vE)(a,"card");return(0,m.jsx)(P,(0,s.Z)((0,s.Z)({ref:r},f),{},{className:o()(n,y,i&&"bg-".concat(i),d&&"text-".concat(d),c&&"border-".concat(c)),children:h?(0,m.jsx)(v,{children:b}):b}))}));R.displayName="Card";var k=Object.assign(R,{Img:b,Title:g,Subtitle:N,Body:v,Link:q,Text:j,Header:y,Footer:_,ImgOverlay:C})}}]);
//# sourceMappingURL=666.a7a102d2.chunk.js.map