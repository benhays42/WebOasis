(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216b25"],{c420:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[a("v-card",[a("v-card-title",[a("h1",[t._v("Word Counter")])]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-textarea",{attrs:{placeholder:"Paste your text here"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-textarea",{attrs:{placeholder:"Result"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.count()}}},[t._v("Count")])],1),a("actions",{attrs:{result:t.result}})],1)],1)],1)],1)},n=[],s=a("a250"),l=a.n(s),o={data:function(){return{text:"",result:""}},methods:{count:function(){this.result=l.a.countWords(this.text)}}},u=o,c=a("2877"),i=a("6544"),x=a.n(i),d=a("8336"),v=a("b0af"),f=a("99d9"),p=a("12b2"),b=a("a523"),h=a("0e8f"),m=a("a722"),w=a("a844"),V=Object(c["a"])(u,r,n,!1,null,null,null);e["default"]=V.exports;x()(V,{VBtn:d["a"],VCard:v["a"],VCardText:f["b"],VCardTitle:p["a"],VContainer:b["a"],VFlex:h["a"],VLayout:m["a"],VTextarea:w["a"]})}}]);
//# sourceMappingURL=chunk-2d216b25.8c78d4c4.js.map