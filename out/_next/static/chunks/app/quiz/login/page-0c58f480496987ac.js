(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{8957:function(e,t,n){Promise.resolve().then(n.bind(n,894)),Promise.resolve().then(n.t.bind(n,3636,23))},894:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthForm:function(){return l}});var r=n(7437),o=n(2265),i=n(4033),s=n(7410);let l=()=>{let{push:e}=(0,i.useRouter)(),t=(0,o.useCallback)(()=>{e("/quiz/1")},[]);return(0,r.jsx)(s.U,{onSubmit:t})}},4741:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7437),o=n(2265),i=n(9047),s=n.n(i);let l=o.memo(e=>{let{children:t,ariaLabel:n,view:i="primary",isBold:l=!1,isDisabled:u=!1,className:a,onPress:_}=e,c=(0,o.useMemo)(()=>[s().button,s()["button--view-".concat(i)],...l?[s().isBold]:[],...u?[s().isDisabled]:[],a].join(" "),[a,i,l,u]);return(0,r.jsx)("button",{"aria-label":n,className:c,disabled:u,onClick:_,children:t})})},8632:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(7437),o=n(2265),i=n(4569),s=n.n(i);let l=o.memo(e=>{let{value:t,setValue:n,placeholder:i,error:l,type:u,label:a,className:_}=e,c=(0,o.useMemo)(()=>[s().input,l&&s().error].join(" "),[]);return(0,r.jsxs)("div",{className:_,children:[a&&(0,r.jsx)("label",{className:s().label,children:a}),(0,r.jsx)("input",{className:c,value:t,onChange:e=>{var t;let{nativeEvent:r}=e;n(null===(t=r.target)||void 0===t?void 0:t.value)},placeholder:i,type:u})]})})},7410:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(7437),o=n(2265),i=n(4373),s=n.n(i),l=n(8632),u=n(4741);let a=o.memo(e=>{let{isLoading:t,onSubmit:n}=e,[i,a]=(0,o.useState)(""),[_,c]=(0,o.useState)(""),d=(0,o.useMemo)(()=>i.length&&_.length,[i,_]),f=(0,o.useCallback)(()=>{n({login:i,password:_})},[i,_]);return(0,r.jsxs)("div",{className:s().root,children:[(0,r.jsx)("h1",{className:s().title,children:"Авторизация"}),(0,r.jsx)(l.I,{className:s().field,label:"Логин",placeholder:"Логин",value:i,setValue:a}),(0,r.jsx)(l.I,{className:s().field,label:"Пароль",placeholder:"Пароль",type:"password",value:_,setValue:c}),(0,r.jsx)(u.z,{className:s().button,ariaLabel:"Отправить",isDisabled:!d||t,onPress:f,children:"Войти"})]})})},3636:function(e){e.exports={main:"page_main__qkY3R"}},9047:function(e){e.exports={button:"Button_button__wliYd","button--view-primary":"Button_button--view-primary__cWRgD","button--view-secondary":"Button_button--view-secondary__m_8WR",isBold:"Button_isBold__taXiK",isDisabled:"Button_isDisabled__Li_lC"}},4569:function(e){e.exports={input:"Input_input__dwy5x",label:"Input_label__5xQux","is-error":"Input_is-error___5fOS"}},4373:function(e){e.exports={root:"LoginForm_root__YA038",title:"LoginForm_title__wT16M",field:"LoginForm_field__nCtip",button:"LoginForm_button__i7cd3"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,_=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(_=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:_,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(8165)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=8957)}),_N_E=e.O()}]);