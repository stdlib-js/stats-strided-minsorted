"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var d=v(function(C,q){
var c=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-assert-is-negative-zero/dist');function Z(e,r,a,n){var i,t,u,s;return i=r.data,t=r.accessors[0],e<=0?NaN:e===1||a===0?t(i,0):(u=t(i,n),s=t(i,n+(e-1)*a),c(u)||c(s)?NaN:u===s?f(u)||f(s)?-0:u:u<s?u:s)}q.exports=Z
});var o=v(function(D,y){
var m=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),k=d();function O(e,r,a,n){var i,t,u;return e<=0?NaN:(u=j(r),u.accessorProtocol?k(e,u,a,n):e===1||a===0?r[0]:(i=r[n],t=r[n+(e-1)*a],m(i)||m(t)?NaN:i===t?p(i)||p(t)?-0:i:i<t?i:t))}y.exports=O
});var g=v(function(E,N){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=o();function h(e,r,a){return R(e,r,a,P(e,a))}N.exports=h
});var b=v(function(F,x){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),z=o();w(l,"ndarray",z);x.exports=l
});var A=b();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
