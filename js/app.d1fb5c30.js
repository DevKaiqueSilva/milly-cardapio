(function(e){function a(a){for(var n,i,l=a[0],c=a[1],s=a[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(a);while(m.length)m.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(n=!1)}n&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},o={app:0},r=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/milly-cardapio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var s=0;s<l.length;s++)a(l[s]);var u=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"1b05":function(e,a,t){},"2c36":function(e,a,t){e.exports=t.p+"img/menu.a90b8abe.png"},"4af6":function(e,a,t){e.exports=t.p+"img/mandala.a643277e.png"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-app",{staticClass:"overflow-hidden",staticStyle:{"background-color":"#363435"}},[n("v-app-bar",{staticClass:"px-0",attrs:{app:"",color:"milly","inverted-scroll":"","scroll-threshold":200,dark:"",height:"50"}},[n("v-layout",[n("v-flex",{attrs:{xs2:""}}),n("v-flex",{attrs:{xs8:""}},[n("v-img",{staticClass:"mx-auto",staticStyle:{width:"120px",height:"50px"},attrs:{src:t("8d70"),contain:""}})],1),n("v-flex",{staticStyle:{"text-align":"end"},attrs:{xs2:""}},[n("v-btn",{attrs:{icon:"",color:"#363435"},on:{click:e.scrollTop}},[n("v-icon",[e._v("mdi-arrow-up")])],1)],1)],1)],1),n("v-main",[n("Main")],1)],1)},r=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-flex",{attrs:{xs12:""}},[t("OverlayInit",{attrs:{visible:e.showOverlay},on:{onClose:function(a){e.showOverlay=!1}}}),t("Cabecalho"),t("div",{staticClass:"borderMandala"}),t("Cardapio")],1)},l=[],c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-card",{staticClass:"pa-2 mandalaBg elevation-0",staticStyle:{"border-radius":"0px !important"},attrs:{color:"milly",tile:""}},[n("v-container",[n("v-img",{staticClass:"nameImg",attrs:{src:t("8d70"),contain:""}}),n("v-img",{staticClass:"menuImg",attrs:{src:t("2c36"),contain:""}})],1)],1)},s=[],u=(t("93b3"),t("2877")),d=t("6544"),m=t.n(d),p=t("b0af"),f=t("a523"),v=t("adda"),b={},g=Object(u["a"])(b,c,s,!1,null,"76e56340",null),h=g.exports;m()(g,{VCard:p["a"],VContainer:f["a"],VImg:v["a"]});var C=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-dialog",{attrs:{fullscreen:"",transition:"fade-transition"},model:{value:e.visible,callback:function(a){e.visible=a},expression:"visible"}},[n("v-card",{staticStyle:{display:"flex"},attrs:{color:"rgba(80,80,80,0.8)"}},[n("v-card",{attrs:{color:"milly",id:"card"}},[n("v-img",{staticClass:"mandala top",attrs:{src:t("4af6"),contain:""}}),n("v-img",{staticClass:"imgName",attrs:{src:t("8d70"),contain:""}}),n("v-img",{staticClass:"mandala down",attrs:{src:t("4af6"),contain:""}})],1)],1)],1)},x=[],y={props:{visible:{type:Boolean,required:!0}},created:function(){var e=this;setTimeout((function(){e.$emit("onClose")}),4e3)}},O=y,S=(t("98d8"),t("169a")),_=Object(u["a"])(O,C,x,!1,null,"af18666c",null),A=_.exports;m()(_,{VCard:p["a"],VDialog:S["a"],VImg:v["a"]});var B=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-flex",{staticClass:"px-4",attrs:{xs12:""}},[e._l(e.cardapio,(function(a,t){return n("v-flex",{key:"c"+t,staticClass:"text-center white--text mb-2",attrs:{xs12:""}},[n("div",{staticClass:"titleM"},[e._v("== "+e._s(a.title)+" ==")]),e._l(a.sector,(function(a,t){return n("v-flex",{key:"sub"+t,staticClass:"my-1",attrs:{xs12:""}},[a.title?n("div",{staticClass:"subtitleM"},[e._v("◦ ◦ "+e._s(a.title)+" ◦ ◦")]):e._e(),e._l(a.opc,(function(a,t){return n("v-flex",{key:"opc"+t,staticClass:"my-1",attrs:{xs12:""}},[n("div",{staticClass:"optionM"},[e._v(e._s(a.name))]),a.obs?n("div",{staticClass:"suboptionM"},[e._v("( "+e._s(a.obs)+" )")]):e._e()])}))],2)}))],2)})),n("v-img",{staticClass:"mandalaFinal",attrs:{src:t("4af6"),contain:""}})],2)},j=[],w=[{title:"ENTRADA I",sector:[{title:"ASSADOS",opc:[{name:"Esfiha de Carne"},{name:"Enroladinho de presunto e queijo"},{name:"Trouxinha de calabresa"},{name:"Mini Fogaça De Palmito"}]},{title:"FRITOS",opc:[{name:"Coxinha"},{name:"Pérolas de queijo"},{name:"Espetinho de frango"},{name:"Canellote de presunto e queijo"}]}]},{title:"ENTRADA II",sector:[{title:"MINI PRATO",opc:[{name:"Rondelli Presunto e Queijo ao molho Sugo"}]}]},{title:"BEBIDAS",sector:[{title:"ALCOÓLICAS",opc:[{name:"Cerveja Brahma Long Neck"}]},{title:"NÃO ALCOÓLICAS",opc:[{name:"Coca-Cola"},{name:"Coca-Cola Zero"},{name:"Guaraná Antártica"},{name:"Suco de Laranja"},{name:"Suco de Abacaxi com Hortelã"},{name:"Água Mineral"}]}]},{title:"DRINKS OPEN BAR",sector:[{title:"ALCOÓLICAS",opc:[{name:"Capiroska",obs:"Vodka, Fruta e Açúcar"},{name:"Mojito",obs:"Run, Soda, Hortelã e Açúcar"},{name:"Caipi Gourmet",obs:"Vodka, Frutas, Especiarias e Açúcar"},{name:"Batida",obs:"Vodka, Fruta, Leite Condensado e Cobertura"}]},{title:"NÃO ALCOÓLICAS",opc:[{name:"Mojito Teen",obs:"Limão, Soda, Hortelã e Açúcar"},{name:"Caipi Teen",obs:"Soda, Fruta e Açucar"},{name:"Mix Beach",obs:"Suco de Laranja, Fruta, Leite Cond. e Cobertura"}]}]},{title:"DOCES",sector:[{title:null,opc:[{name:"Bombom de Uva"},{name:"Bombom de Morango"},{name:"Brigadeiro de Ninho c/ Nutella"},{name:"Brigadeiro de Avelã"},{name:"Brigadeiro de Paçoca"},{name:"Brigadeiro de Doce de Leite"},{name:"Brigadeiro de Três Leites"},{name:"Brigadeiro de Limão Siciliano"},{name:"Brigadeiro de Cacau Crocante"},{name:"Brigadeiro Tradicional"},{name:"Bicho de Pé"},{name:"Beijinho"}]}]},{title:"BOLO",sector:[{title:null,opc:[{name:"Bolo de chocolate com trufado e ninho, com uma bola de sorvete de creme"}]}]},{title:"MESA TEEN",sector:[{title:null,opc:[{name:"Batata Frita"},{name:"Mini Hambúrguer"},{name:"Mini Dog"},{name:"Pipoca"},{name:"Mini Pizza"}]}]}],M={data:function(){return{cardapio:[]}},created:function(){this.cardapio=w}},I=M,V=(t("dabb"),t("0e8f")),L=Object(u["a"])(I,B,j,!1,null,"67cfd6c4",null),T=L.exports;m()(L,{VFlex:V["a"],VImg:v["a"]});var E={components:{Cabecalho:h,OverlayInit:A,Cardapio:T},data:function(){return{showOverlay:!0}}},P=E,k=(t("825f"),Object(u["a"])(P,i,l,!1,null,"3052379c",null)),F=k.exports;m()(k,{VFlex:V["a"]});var N={components:{Main:F},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},created:function(){window.scrollTo(0,0)}},D=N,R=t("7496"),$=t("40dc"),q=t("8336"),H=t("132d"),z=t("a722"),G=t("f6c4"),J=Object(u["a"])(D,o,r,!1,null,null,null),K=J.exports;m()(J,{VApp:R["a"],VAppBar:$["a"],VBtn:q["a"],VFlex:V["a"],VIcon:H["a"],VImg:v["a"],VLayout:z["a"],VMain:G["a"]});var Q=t("f309");n["a"].use(Q["a"]);var U=new Q["a"]({theme:{themes:{light:{milly:"#88ccd5"}}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:U,render:function(e){return e(K)}}).$mount("#app")},"65f2":function(e,a,t){},"69f7":function(e,a,t){},"825f":function(e,a,t){"use strict";t("65f2")},"8d70":function(e,a,t){e.exports=t.p+"img/camilly.6abe6190.png"},"93b3":function(e,a,t){"use strict";t("f2f6")},"98d8":function(e,a,t){"use strict";t("69f7")},dabb:function(e,a,t){"use strict";t("1b05")},f2f6:function(e,a,t){}});
//# sourceMappingURL=app.d1fb5c30.js.map