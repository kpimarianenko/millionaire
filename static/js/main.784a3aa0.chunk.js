(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),c=r.n(a),s=r(19),i=r.n(s),o=(r(26),r(27),r(12)),l=r(2),u=r(7),h=r(10);r(28);function j(e){var t=e.children,r=e.Border,a=Object(h.a)(e,["children","Border"]);return Object(n.jsx)("div",Object(u.a)(Object(u.a)({},a),{},{children:Object(n.jsxs)("div",{className:"border-item",children:[Object(n.jsx)(r,{className:"border"}),Object(n.jsx)("div",{className:"border-item__text",children:t})]})}))}function d(e){var t=e.title,r=e.caption,a=e.btnText,c=Object(h.a)(e,["title","caption","btnText"]);return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"wrapper menu__wrapper",children:[Object(n.jsx)("div",{className:"menu__wrapper_image-wrapper",children:Object(n.jsx)("img",{src:"hand.png",alt:"hand",className:"menu__wrapper__image"})}),Object(n.jsxs)("div",{className:"menu__wrapper-inner",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"menu__wrapper__caption",children:r}),Object(n.jsx)("h1",{className:"menu__wrapper__title",children:t})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",Object(u.a)(Object(u.a)({},c),{},{className:"button",children:Object(n.jsx)(o.b,{to:"/game",children:a})}))})]})]})})}r(34);var b=function(){return Object(n.jsx)("div",{className:"start main menu",children:Object(n.jsx)(d,{title:"Who wants to be a millionaire?",btnText:"Start"})})},p=r(11);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=a.createElement("path",{stroke:"current",d:"M404 36L421 36"}),v=a.createElement("path",{stroke:"current",d:"M0 36L17 36"}),w=a.createElement("path",{fill:"current",stroke:"current",d:"M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z"});function x(e,t){var r=e.title,n=e.titleId,c=O(e,["title","titleId"]);return a.createElement("svg",m({width:421,height:72,viewBox:"0 0 421 72",fill:"none",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,f,v,w)}var g=a.forwardRef(x),y=(r.p,r(4));function _(e){var t=e.isAnswered,r=e.setIsAnswered,c=e.increaseLevel,s=e.redirectToFinal,i=e.answer,o=e.letter,l=(e.highlightCorrectAnswers,e.price),d=e.isCorrect,b=Object(h.a)(e,["isAnswered","setIsAnswered","increaseLevel","redirectToFinal","answer","letter","highlightCorrectAnswers","price","isCorrect"]),m=Object(a.useState)(""),O=Object(p.a)(m,2),f=O[0],v=O[1],w=function(){var e;d?(v("border-button-correct"),e=c):(v("border-button-wrong"),e=s),setTimeout((function(){r(!1),e(l)}),y.beforeNextLevelDelay)};return Object(n.jsx)(j,Object(u.a)(Object(u.a)({},b),{},{onClick:function(){t||(r(!0),v("border-button-selected"),setTimeout(w,y.afterAnswerDelay))},Border:g,className:"border-button ".concat(f),children:Object(n.jsx)(A,{letter:o,text:i})}))}function A(e){var t=e.letter,r=e.text;return Object(n.jsxs)("div",{className:"answer__caption",children:[Object(n.jsx)("span",{className:"answer__caption__letter",children:t}),Object(n.jsx)("span",{className:"answer__caption__text",children:r})]})}var q=function(e){for(var t=e.answers,r=e.correctAnswer,c=e.price,s=e.increaseLevel,i=e.redirectToFinal,o=Object(a.useState)(!1),l=Object(p.a)(o,2),u=l[0],h=l[1],j=function(){},d=[],b=0;b<y.maxAnswerQuantity&&b<t.length;b+=1){var m=String.fromCharCode(b+65),O=Object(n.jsx)(_,{price:c,increaseLevel:s,redirectToFinal:i,highlightCorrectAnswers:j,isAnswered:u,setIsAnswered:h,letter:m,answer:t[b],isCorrect:r===b},b);d.push(O)}return Object(n.jsx)("div",{className:"question-panel__answers",children:d})};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var L=a.createElement("path",{stroke:"current",d:"M69 20H0"}),S=a.createElement("path",{stroke:"current",d:"M376 20H307"}),k=a.createElement("path",{fill:"current",stroke:"current",d:"M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"});function T(e,t){var r=e.title,n=e.titleId,c=C(e,["title","titleId"]);return a.createElement("svg",N({width:376,height:40,viewBox:"0 0 376 40",fill:"none",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,L,S,k)}var E=a.forwardRef(T);r.p,r(35);function I(e){var t=e.level,r=e.item,a=e.increaseLevel,c=e.redirectToFinal;return Object(n.jsxs)("div",{className:"wrapper question-panel",children:[Object(n.jsx)(F,{question:r.question}),Object(n.jsx)(q,{price:t>0?y.questions[t-1].price:0,redirectToFinal:c,increaseLevel:a,answers:r.answers,correctAnswer:r.correctAnswer})]})}function F(e){var t=e.question,r=Object(h.a)(e,["question"]);return Object(n.jsx)("h3",Object(u.a)(Object(u.a)({className:"question-panel__header"},r),{},{children:t}))}function B(e){for(var t=e.level,r=e.maxLevel,a=[],c=0;c<r;c+=1){var s="";c<t?s="level-panel__money-unactive":c===t&&(s="level-panel__money-current"),a.push(Object(n.jsx)(M,{money:y.questions[c].price,className:s},c))}return a.reverse(),Object(n.jsx)("div",{className:"level-panel",children:a})}function M(e){var t=e.money,r=e.className,a=Object(h.a)(e,["money","className"]);return Object(n.jsx)(j,Object(u.a)(Object(u.a)({Border:E,className:"level-panel__money ".concat(r)},a),{},{children:"$".concat(t)}))}var P=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(y.questions[r]),i=Object(p.a)(s,2),o=i[0],u=i[1],h=Object(a.useState)(-1),j=Object(p.a)(h,2),d=j[0],b=j[1],m=function(e){b(e)};return Object(a.useEffect)((function(){r>=0&&r<y.questions.length&&u(y.questions[r])}),[r]),d<0?Object(n.jsxs)("div",{className:"main game",children:[Object(n.jsx)(I,{level:r,item:o,increaseLevel:function(){r>=0&&r<y.questions.length-1?c(r+1):r===y.questions.length-1&&m(y.questions[y.questions.length-1].price)},redirectToFinal:m}),Object(n.jsx)(B,{level:r,maxLevel:y.questions.length})]}):Object(n.jsx)(l.a,{to:{pathname:"/end",state:{earnedMoney:d}}})};var W=function(e){var t=e.location.state.earnedMoney,r="$".concat(t," earned");return Object(n.jsx)("div",{className:"main menu",children:Object(n.jsx)(d,{title:r,caption:"Total score:",btnText:"Try again"})})};var H=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:b}),Object(n.jsx)(l.b,{exact:!0,path:"/game",component:P}),Object(n.jsx)(l.b,{exact:!0,path:"/end",component:W})]})})},D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,37)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),D()},4:function(e){e.exports=JSON.parse('{"maxAnswerQuantity":4,"multipleAnswers":false,"afterAnswerDelay":100,"beforeNextLevelDelay":100,"questions":[{"question":"How many countries are part of Scandinavia?","answers":["2","3","4","5"],"correctAnswer":1,"price":500},{"question":"Which animal has the largest eyes?","answers":["Elephant","Giraffe","Owl","Ostrich"],"correctAnswer":3,"price":1000},{"question":"Which human lung holds more air?","answers":["Left","Right","Same","Individually"],"correctAnswer":1,"price":2000},{"question":"Which of the Canary Islands is the largest?","answers":["Tenerife","Lobos","Alegranza","Lanzarote"],"correctAnswer":0,"price":4000},{"question":"Who wrote the Sistine Madonna?","answers":["Raphael Santi","Michelangelo","Leonardo da Vinci","Sandro Botticelli"],"correctAnswer":0,"price":8000},{"question":"How long is the equator?","answers":["17,240km","40,075km","30,075km","38,890km"],"correctAnswer":1,"price":16000},{"question":"What animal was the first parachutist?","answers":["Chicken","Pig","Dog","Cat"],"correctAnswer":3,"price":32000},{"question":"What kind of animals are used to guard grain storage facilities in the UK?","answers":["Cocks","Pigs","Cats","Dogs"],"correctAnswer":2,"price":64000},{"question":"In which country do the tarantella dance?","answers":["Spain","Argentina","France","Italy"],"correctAnswer":3,"price":125000},{"question":"Which creature has the largest brain in relation to the body?","answers":["Ant","Blue whale","Beaver","Elephant"],"correctAnswer":0,"price":250000},{"question":"What number means Roman XC?","answers":["190","70","90","900"],"correctAnswer":2,"price":500000},{"question":"Which of the American states has the largest area?","answers":["Texas","Alaska","Florida","California"],"correctAnswer":1,"price":1000000}]}')}},[[36,1,2]]]);
//# sourceMappingURL=main.784a3aa0.chunk.js.map