(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{1769:function(e,s,o){Promise.resolve().then(o.bind(o,3300))},3300:function(e,s,o){"use strict";o.r(s),o.d(s,{default:function(){return i}});var a=o(7437),n=o(1812),t=o(3321),r=o(7085),c=o(486);function i(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h,{}),(0,a.jsxs)(t.r,{title:"Добавить промо-код",children:[(0,a.jsx)(c.k,{}),(0,a.jsx)(n.er,{})]})]})}},1812:function(e,s,o){"use strict";let a;o.d(s,{er:function(){return N},LZ:function(){return A},KE:function(){return B},Tf:function(){return I}});var n=o(7437),t=o(2265),r=o(8632),c=o(3459),i=o(2066),l=o.n(i);let u=()=>{let e=(0,t.useRef)();{let s=document.documentElement,{body:o}=document;return{blockScroll:()=>{if(!o||!o.style||e.current)return;let a=window.innerWidth-s.clientWidth,n=parseInt(window.getComputedStyle(o).getPropertyValue("padding-right"))||0;s.style.position="relative",s.style.overflow="hidden",o.style.position="relative",o.style.overflow="hidden",o.style.paddingRight="".concat(n+a,"px"),e.current=!0},allowScroll:()=>{o&&o.style&&e.current&&(s.style.position="",s.style.overflow="",o.style.position="",o.style.overflow="",o.style.paddingRight="",e.current=!1)}}}},_=t.memo(e=>{let{isVisible:s,onClose:o,children:r,wrapperClassname:i}=e,[_,d]=(0,t.useState)(!1),[m,p]=(0,t.useState)(!1),{blockScroll:v,allowScroll:f}=u();return(0,t.useEffect)(()=>(s?(p(!0),v(),a=setTimeout(()=>{d(!0)},100)):(d(!1),f(),a=setTimeout(()=>{p(!1)},300)),()=>{clearTimeout(a)}),[s]),(0,n.jsx)(n.Fragment,{children:m&&(0,n.jsx)("div",{className:"".concat(l().modal," ").concat(_?l()["is-active"]:""),children:(0,n.jsxs)("div",{className:"".concat(l().wrapper," ").concat(i," ").concat(_?l()["is-active-wrapper"]:""),children:[(0,n.jsx)("button",{className:l().button,onClick:o,children:(0,n.jsx)(c.A,{className:l().icon,name:"close"})}),(0,n.jsx)("div",{className:l().children,children:r})]})})})});var d=o(130),m=o(4741),p=o(2194),v=o.n(p),f=o(7217),h=o.n(f);let w=t.memo(e=>{let{text:s,icon:o,className:a,view:r="success"}=e,i=(0,t.useMemo)(()=>[h().response,h()["response--view-".concat(r)],a].join(" "),[r,a]);return(0,n.jsxs)("div",{className:i,children:[(0,n.jsx)(c.A,{className:h().icon,name:o}),(0,n.jsx)("p",{className:h().text,children:s})]})}),x={ok:{view:"success",icon:"success",text:"Вы успешно зарегистрировались на игру. Ссылка на участие придет вам на указанный email"},error:{view:"critical",icon:"error",text:"Промокод не действителен"},activated:{view:"warning",icon:"success",text:"Промокод уже был активирован"}},B=t.memo(e=>{let[s,o]=(0,t.useState)({promo:"",email:"",login:"",password:""}),[a,c]=(0,t.useState)(!0),[i,l]=(0,t.useState)(!1),[u,p]=(0,t.useState)("ok"),f=(0,t.useMemo)(()=>(console.log(Object.values(s).every(e=>e.length)&&a),Object.values(s).every(e=>e.length)&&a),[s,a]),h=(0,t.useCallback)((e,s)=>{o(o=>({...o,[s]:e}))},[]);return(0,n.jsxs)(_,{...e,wrapperClassname:v().wrapper,children:[(0,n.jsxs)("div",{className:"".concat(v().inner," ").concat(!i&&v()["is-active"]),children:[(0,n.jsx)("h3",{className:v().title,children:"Промокод"}),(0,n.jsx)(r.I,{className:v().field,value:s.promo,label:"Промокод",placeholder:"Введите промокод",setValue:e=>h(e,"promo")}),(0,n.jsx)(r.I,{className:v().field,value:s.email,label:"E-mail",setValue:e=>h(e,"email"),placeholder:"E-mail"}),(0,n.jsx)(r.I,{className:v().field,value:s.login,label:"Логин",setValue:e=>h(e,"login"),placeholder:"Логин"}),(0,n.jsx)(r.I,{className:v().field,value:s.password,label:"Пароль",setValue:e=>h(e,"password"),placeholder:"Пароль",type:"password"}),(0,n.jsx)(d.Z,{className:v().recaptcha,sitekey:"6LfXWbAnAAAAAGBSPyxysXM843cf7tZuH_O6oKPz",onChange:()=>c(!0)}),(0,n.jsx)(m.z,{className:v().button,ariaLabel:"Отправить",isDisabled:!f,isBold:!0,onPress:()=>{p("ok"),l(!0)},children:"Отправить"})]}),(0,n.jsx)(w,{className:"".concat(v().response," ").concat(i&&v()["is-active"]),...x[u]})]})});var j=o(5031),b=o(4033),y=o(2874),M=o.n(y);let N=()=>{let{push:e}=(0,b.useRouter)(),{onCreate:s,isLoading:o}=j.M.activeModel.useCreatePromo(),a=(0,t.useCallback)(async()=>{await s(),e("/admin/promo")},[s,e]);return(0,n.jsx)(m.z,{className:M().root,ariaLabel:"Создать",isBold:!0,isDisabled:o,onPress:a,children:"Создать"})};var P=o(6914),g=o.n(P);let I=()=>{let{push:e}=(0,b.useRouter)(),{onUpdate:s,isLoading:o}=j.M.activeModel.useUpdatePromo(),a=(0,t.useCallback)(async()=>{await s(),e("/admin/promo")},[s]);return(0,n.jsx)(m.z,{className:g().root,onPress:a,isDisabled:o,ariaLabel:"Сохранить",children:"Сохранить"})};var k=o(9929),C=o.n(k);let A=()=>{let{push:e}=(0,b.useRouter)(),{isLoading:s,onDelete:o}=j.M.activeModel.useDeletePromo(),a=(0,t.useCallback)(async()=>{await o(),e("/admin/promo")},[o,e]);return(0,n.jsx)(m.z,{className:C().root,ariaLabel:"Удалить",isDisabled:s,onPress:a,children:"Удалить"})}},3459:function(e,s,o){"use strict";o.d(s,{A:function(){return c}});var a=o(7437),n=o(2265),t=o(5630),r=o.n(t);let c=n.memo(e=>{let{name:s,className:o}=e,t=(0,n.useMemo)(()=>[r().iconBase,r()["iconBase--".concat(s)],o].join(" "),[s,o]);return(0,a.jsx)("i",{className:t})})},7085:function(e,s,o){"use strict";o.d(s,{h:function(){return a.Header}});var a=o(8865)},486:function(e,s,o){"use strict";o.d(s,{k:function(){return a.PromoForm}}),o(5846);var a=o(781)},2874:function(e){e.exports={root:"CreatePromoButton_root__U0mRN"}},9929:function(e){e.exports={root:"DeletePromoButton_root__lr1hk"}},2194:function(e){e.exports={wrapper:"PromoModal_wrapper__WjWEc",inner:"PromoModal_inner__5AKKt",response:"PromoModal_response__XBf_j","is-active":"PromoModal_is-active__FXSJc",title:"PromoModal_title__Z90il",field:"PromoModal_field___XL0H",recaptcha:"PromoModal_recaptcha___WA09",button:"PromoModal_button__FlaV_"}},6914:function(e){e.exports={root:"UpdatePromoButton_root__OPmoS"}},5630:function(e){e.exports={iconBase:"IconBase_iconBase__yVV0x","iconBase--people":"IconBase_iconBase--people__MwkHU","iconBase--time":"IconBase_iconBase--time__BQ7Wi","iconBase--currency":"IconBase_iconBase--currency___h1lj","iconBase--date":"IconBase_iconBase--date__NsHk0","iconBase--error":"IconBase_iconBase--error__2eW_2","iconBase--success":"IconBase_iconBase--success__wQV3Z","iconBase--menu":"IconBase_iconBase--menu__s4CGP","iconBase--telegram":"IconBase_iconBase--telegram__nJjjp","iconBase--arrow":"IconBase_iconBase--arrow__tHAQk","iconBase--close":"IconBase_iconBase--close__DIJpT"}},2066:function(e){e.exports={modal:"Modal_modal__AF7If","is-active":"Modal_is-active__ZnYZ9",wrapper:"Modal_wrapper__jsB5H","is-active-wrapper":"Modal_is-active-wrapper__1WhYJ",button:"Modal_button__rp8ns",icon:"Modal_icon__oyMIn",children:"Modal_children__f547n"}},7217:function(e){e.exports={response:"Response_response__YT62H","response--view-success":"Response_response--view-success__auV5y","response--view-warning":"Response_response--view-warning__NxjIl","response--view-critical":"Response_response--view-critical__D8IbN",icon:"Response_icon__QCfj4",text:"Response_text__oXgMF"}}},function(e){e.O(0,[231,396,130,244,971,596,744],function(){return e(e.s=1769)}),_N_E=e.O()}]);