"use strict";(self.webpackChunkpet_contactbook=self.webpackChunkpet_contactbook||[]).push([[316],{7316:function(e,n,r){r.r(n),r.d(n,{default:function(){return K}});var t,a=r(1614),i=r(2791),o=r(5705),l=r(5282),u=(r(7427),r(8317)),d=r(4554),c=r(6151),s=r(168),m=r(6088),h=m.Z.div(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n"]))),x=r(8505),b=r(9434),f=r(8098);var p,v=r(184),j=l.object().shape({name:l.string().required(),number:l.string().phone().required()});function g(){var e=(0,b.I0)(),n=(0,b.v9)(f.Af),r=(0,o.TA)({initialValues:{name:"",number:""},validationSchema:j,onSubmit:function(r,t){var a={name:r.name,number:r.number};!function(e,n){var r=e.toLowerCase();return!!n.filter((function(e){return e.name.toLowerCase()===r})).length}(r.name,n)?!function(e,n){return!!n.filter((function(n){return n.number===e})).length}(r.number,n)?(e((0,x.Og)(a)),t.resetForm()):window.alert("Number "+r.number+" is already in contacts"):window.alert(r.name+" is already in contacts")}});return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(u.Z,{margin:"dense",fullWidth:!0,id:"name",name:"name",label:"Name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),(0,v.jsx)(d.Z,{width:10}),(0,v.jsx)(u.Z,{margin:"dense",fullWidth:!0,id:"number",name:"number",label:"Number",value:r.values.number,onChange:r.handleChange,error:r.touched.number&&Boolean(r.errors.number),helperText:r.touched.number&&r.errors.number})]}),(0,v.jsx)(c.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Add contact"})]})})}var Z,C=m.Z.ul(p||(p=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n"]))),y=r(1413),w=r(9439),k=r(4852),S=r(3400),W=r(653),A=r(3044),T=r(6259),I=r(8789).ZP.a(Z||(Z=(0,s.Z)(["\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  align-items: center;\n"]))),B=r(7247),N=r(754);function O(e){var n,r=0;for(n=0;n<e.length;n+=1)r=e.charCodeAt(n)+((r<<5)-r);var t="#";for(n=0;n<3;n+=1){t+="00".concat((r>>8*n&255).toString(16)).slice(-2)}return t}function q(e){function n(e){return e.trim().split(/\s+/).length}return 1===+n(e)?{sx:{bgcolor:O(e)},children:"".concat(null===e||void 0===e?void 0:e.split(" ")[0][0])}:+n(e)>1?{sx:{bgcolor:O(e)},children:"".concat(null===e||void 0===e?void 0:e.split(" ")[0][0]).concat(null===e||void 0===e?void 0:e.split(" ")[1][0])}:void 0}var P=r(9331),D=r(1103),F=r(3168),L=r(4267),V=r(7924);function _(e){var n=e.open,r=e.setOpen,t=e.id,a=(0,b.I0)();return(0,v.jsx)(P.Z,{open:n,onClose:function(){return r(!1)},children:(0,v.jsxs)(D.Z,{variant:"outlined",role:"alertdialog","aria-labelledby":"alert-dialog-modal-title","aria-describedby":"alert-dialog-modal-description",children:[(0,v.jsx)(F.ZP,{id:"alert-dialog-modal-title",component:"h2",startDecorator:(0,v.jsx)(L.Z,{}),children:"Confirmation"}),(0,v.jsx)(V.Z,{}),(0,v.jsx)(F.ZP,{id:"alert-dialog-modal-description",textColor:"text.tertiary",children:"Are you sure you want to delete a contact?"}),(0,v.jsxs)(d.Z,{sx:{display:"flex",gap:1,justifyContent:"flex-end",pt:2},children:[(0,v.jsx)(c.Z,{variant:"outlined",color:"secondary",onClick:function(){return r(!1)},children:"Cancel"}),(0,v.jsx)(c.Z,{variant:"contained",color:"error",onClick:function(){a((0,x.e4)(t)),r(!1)},children:"Delete"})]})]})})}var E=r(9818),J=r(5931),M=i.forwardRef((function(e,n){return(0,v.jsx)(J.Z,(0,y.Z)({direction:"up",ref:n},e))})),R=l.object().shape({name:l.string().required(),number:l.string().phone().required()});function z(e){var n=e.open,r=e.setOpen,t=e.id,a=e.name,i=e.number,l=(0,b.I0)(),d=(0,o.TA)({initialValues:{name:a,number:i},validationSchema:R,onSubmit:function(e,n){var r={name:e.name,number:e.number};l((0,x.Mg)({contactId:t,contact:r})),n.resetForm()}});return(0,v.jsx)(E.Z,{fullWidth:!0,maxWidth:"lg",open:n,onClose:function(){return r(!1)},TransitionComponent:M,children:(0,v.jsxs)("form",{onSubmit:d.handleSubmit,children:[(0,v.jsx)(u.Z,{margin:"dense",fullWidth:!0,id:"name",name:"name",label:"Name",value:d.values.name,onChange:d.handleChange,error:d.touched.name&&Boolean(d.errors.name),helperText:d.touched.name&&d.errors.name}),(0,v.jsx)(u.Z,{margin:"dense",fullWidth:!0,id:"number",name:"number",label:"Number",value:d.values.number,onChange:d.handleChange,error:d.touched.number&&Boolean(d.errors.number),helperText:d.touched.number&&d.errors.number}),(0,v.jsx)(c.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",onClick:function(){return r(!1)},children:"Save changes"})]})})}function G(e){var n=e.contact,r=n.id,t=n.name,a=n.number,o=(0,i.useState)(!1),l=(0,w.Z)(o,2),u=l[0],c=l[1],s=(0,i.useState)(!1),m=(0,w.Z)(s,2),h=m[0],x=m[1];return(0,v.jsxs)(k.ZP,{secondaryAction:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S.Z,{edge:"end","aria-label":"delete",onClick:function(){return x(!0)},children:(0,v.jsx)(N.Z,{})}),(0,v.jsx)(d.Z,{display:"inline-block",width:15}),(0,v.jsx)(S.Z,{edge:"end","aria-label":"update",onClick:function(){return c(!0)},children:(0,v.jsx)(B.Z,{})})]}),children:[(0,v.jsxs)(I,{href:"tel:".concat(a),children:[(0,v.jsx)(W.Z,{children:(0,v.jsx)(A.Z,(0,y.Z)({},q(t)))}),(0,v.jsx)(T.Z,{primary:t,secondary:a})]}),(0,v.jsx)(_,{open:u,setOpen:c,id:r}),(0,v.jsx)(z,{open:h,setOpen:x,id:r,name:t,number:a})]})}function H(){var e=(0,b.I0)();(0,i.useEffect)((function(){e((0,x.BJ)())}),[e]);var n=(0,b.v9)(f.DI);return(0,v.jsx)(C,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,v.jsx)(G,{contact:e},e.id)}))})}function K(){return(0,v.jsxs)(a.Z,{maxWidth:"lg",sx:{overflow:"hidden"},children:[(0,v.jsx)(g,{}),(0,v.jsx)(H,{})]})}}}]);
//# sourceMappingURL=316.974fece1.chunk.js.map