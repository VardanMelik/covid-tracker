(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{52:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c(0),a=c.n(s),r=c(8),i=c.n(r),o=(c(52),c(28)),u=c.n(o),j=c(37),l=c(29),d=(c(54),c(98)),h=c(99),b=c(100),f=(c(55),c(92)),O=c(96),v=c(97);var x=function(e){var t=e.title,c=e.cases,s=e.total;return Object(n.jsx)("div",{className:"infoBox",children:Object(n.jsx)(f.a,{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(v.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases",children:c}),Object(n.jsxs)(v.a,{className:"infoBox__total",color:"textSecondary",children:[s," Total"]})]})})})};c(59);var p=function(){return Object(n.jsx)("div",{className:"map",children:"Map"})};c(60);var m=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;e.index;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:c})})]})}))})};c(61);var w=function(){return Object(n.jsx)("div",{className:"lineGraph"})},_=c(40),y=function(e){return Object(_.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))};var N=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)("worldwide"),i=Object(l.a)(r,2),o=i[0],v=i[1],_=Object(s.useState)({}),N=Object(l.a)(_,2),g=N[0],C=N[1],S=Object(s.useState)([]),k=Object(l.a)(S,2),B=k[0],E=k[1];Object(s.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){C(e)}))}),[]),Object(s.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=y(e);E(c),a(t)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var D=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,v(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),C(e)})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Covid-19 Tracker"}),Object(n.jsx)(d.a,{className:"app__dropdown",children:Object(n.jsxs)(h.a,{onChange:D,variant:"outlined",value:o,children:[Object(n.jsx)(b.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e,t){return Object(n.jsx)(b.a,{value:e.value,children:e.name},t)}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{title:"Coronavirus Cases",cases:g.todayCases,total:g.cases}),Object(n.jsx)(x,{title:"Recovered",cases:g.todayRecovered,total:g.recovered}),Object(n.jsx)(x,{title:"Deaths",cases:g.todayDeaths,total:g.deaths})]}),Object(n.jsx)(p,{})]}),Object(n.jsx)(f.a,{className:"app__right",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(m,{countries:B}),Object(n.jsx)("h3",{children:"Worldwide new cases"}),Object(n.jsx)(w,{})]})})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.1a40f7b6.chunk.js.map