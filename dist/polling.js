!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.pollingjs=e():t.pollingjs=e()}(this,(function(){return t={848:t=>{t.exports=async function t(e,o,i={intitialTimeout:3e3,incrementTimeout:1e3}){const{intitialTimeout:n,incrementTimeout:r}=i;let s=n;return new Promise(((c,u)=>setTimeout((async()=>{try{const u=await e();o(u)?c(u):(s=n+r,console.log("Wait",s),c(t(e,o,{...i,intitialTimeout:s,incrementTimeout:r})))}catch(t){u(t)}}),s)))}}},e={},function o(i){if(e[i])return e[i].exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}(848);var t,e}));