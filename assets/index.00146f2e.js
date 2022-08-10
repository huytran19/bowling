 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="143",ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V12=0,lj=1,z12=2,RL=1,U12=2,L_=3,W_=0,pr=1,ws=2,Q12=1,zo=0,Ss=1,pj=2,cj=3,fj=4,Y12=5,ks=100,Z12=101,X12=102,uj=103,mj=104,q12=200,J12=201,K12=202,$12=203,DL=204,TL=205,ts2=206,es2=207,ns2=208,is2=209,rs2=210,os2=0,ss2=1,_s2=2,Gu=3,ls2=4,ps2=5,cs2=6,fs2=7,Ju=0,us2=1,ms2=2,mo=0,as2=1,ds2=2,hs2=3,IL=4,gs2=5,BL=300,Ms=301,Rs=302,Nu=303,Hu=304,Yp=306,Vu=1e3,lr=1001,zu=1002,ci=1003,aj=1004,dj=1005,Qi=1006,As2=1007,Zp=1008,x1=1009,ys2=1010,bs2=1011,PL=1012,vs2=1013,b1=1014,v1=1015,O_=1016,ks2=1017,Cs2=1018,xs=1020,Ss2=1021,xs2=1022,Er=1023,ws2=1024,Ms2=1025,C1=1026,Ds=1027,Rs2=1028,Ds2=1029,Ts2=1030,Is2=1031,Bs2=1033,su=33776,_u=33777,lu=33778,pu=33779,hj=35840,gj=35841,Aj=35842,yj=35843,Ps2=36196,bj=37492,vj=37496,kj=37808,Cj=37809,Sj=37810,xj=37811,wj=37812,Mj=37813,Rj=37814,Dj=37815,Tj=37816,Ij=37817,Bj=37818,Pj=37819,Ej=37820,jj=37821,Lj=36492,w1=3e3,On=3001,Es2=3200,js2=3201,EL=0,Ls2=1,fo="srgb",k1="srgb-linear",cu=7680,Fs2=519,Fj=35044,Wj="300 es",Uu=1035;class I1{addEventListener(y,f){this._listeners===void 0&&(this._listeners={});const R=this._listeners;R[y]===void 0&&(R[y]=[]),R[y].indexOf(f)===-1&&R[y].push(f)}hasEventListener(y,f){if(this._listeners===void 0)return!1;const R=this._listeners;return R[y]!==void 0&&R[y].indexOf(f)!==-1}removeEventListener(y,f){if(this._listeners===void 0)return;const E=this._listeners[y];if(E!==void 0){const W=E.indexOf(f);W!==-1&&E.splice(W,1)}}dispatchEvent(y){if(this._listeners===void 0)return;const R=this._listeners[y.type];if(R!==void 0){y.target=this;const E=R.slice(0);for(let W=0,U=E.length;W<U;W++)E[W].call(this,y);y.target=null}}}const R0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,Oj=180/Math.PI;function G_(){const H=Math.random()*4294967295|0,y=Math.random()*4294967295|0,f=Math.random()*4294967295|0,R=Math.random()*4294967295|0;return(R0[H&255]+R0[H>>8&255]+R0[H>>16&255]+R0[H>>24&255]+"-"+R0[y&255]+R0[y>>8&255]+"-"+R0[y>>16&15|64]+R0[y>>24&255]+"-"+R0[f&63|128]+R0[f>>8&255]+"-"+R0[f>>16&255]+R0[f>>24&255]+R0[R&255]+R0[R>>8&255]+R0[R>>16&255]+R0[R>>24&255]).toLowerCase()}function fi(H,y,f){return Math.max(y,Math.min(f,H))}function Ws2(H,y){return(H%y+y)%y}function uu(H,y,f){return(1-f)*H+f*y}function Gj(H){return(H&H-1)===0&&H!==0}function Qu(H){return Math.pow(2,Math.floor(Math.log(H)/Math.LN2))}class we{constructor(y=0,f=0){we.prototype.isVector2=!0,this.x=y,this.y=f}get width(){return this.x}set width(y){this.x=y}get height(){return this.y}set height(y){this.y=y}set(y,f){return this.x=y,this.y=f,this}setScalar(y){return this.x=y,this.y=y,this}setX(y){return this.x=y,this}setY(y){return this.y=y,this}setComponent(y,f){switch(y){case 0:this.x=f;break;case 1:this.y=f;break;default:throw new Error("index is out of range: "+y)}return this}getComponent(y){switch(y){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+y)}}clone(){return new this.constructor(this.x,this.y)}copy(y){return this.x=y.x,this.y=y.y,this}add(y){return this.x+=y.x,this.y+=y.y,this}addScalar(y){return this.x+=y,this.y+=y,this}addVectors(y,f){return this.x=y.x+f.x,this.y=y.y+f.y,this}addScaledVector(y,f){return this.x+=y.x*f,this.y+=y.y*f,this}sub(y){return this.x-=y.x,this.y-=y.y,this}subScalar(y){return this.x-=y,this.y-=y,this}subVectors(y,f){return this.x=y.x-f.x,this.y=y.y-f.y,this}multiply(y){return this.x*=y.x,this.y*=y.y,this}multiplyScalar(y){return this.x*=y,this.y*=y,this}divide(y){return this.x/=y.x,this.y/=y.y,this}divideScalar(y){return this.multiplyScalar(1/y)}applyMatrix3(y){const f=this.x,R=this.y,E=y.elements;return this.x=E[0]*f+E[3]*R+E[6],this.y=E[1]*f+E[4]*R+E[7],this}min(y){return this.x=Math.min(this.x,y.x),this.y=Math.min(this.y,y.y),this}max(y){return this.x=Math.max(this.x,y.x),this.y=Math.max(this.y,y.y),this}clamp(y,f){return this.x=Math.max(y.x,Math.min(f.x,this.x)),this.y=Math.max(y.y,Math.min(f.y,this.y)),this}clampScalar(y,f){return this.x=Math.max(y,Math.min(f,this.x)),this.y=Math.max(y,Math.min(f,this.y)),this}clampLength(y,f){const R=this.length();return this.divideScalar(R||1).multiplyScalar(Math.max(y,Math.min(f,R)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(y){return this.x*y.x+this.y*y.y}cross(y){return this.x*y.y-this.y*y.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(y){return Math.sqrt(this.distanceToSquared(y))}distanceToSquared(y){const f=this.x-y.x,R=this.y-y.y;return f*f+R*R}manhattanDistanceTo(y){return Math.abs(this.x-y.x)+Math.abs(this.y-y.y)}setLength(y){return this.normalize().multiplyScalar(y)}lerp(y,f){return this.x+=(y.x-this.x)*f,this.y+=(y.y-this.y)*f,this}lerpVectors(y,f,R){return this.x=y.x+(f.x-y.x)*R,this.y=y.y+(f.y-y.y)*R,this}equals(y){return y.x===this.x&&y.y===this.y}fromArray(y,f=0){return this.x=y[f],this.y=y[f+1],this}toArray(y=[],f=0){return y[f]=this.x,y[f+1]=this.y,y}fromBufferAttribute(y,f){return this.x=y.getX(f),this.y=y.getY(f),this}rotateAround(y,f){const R=Math.cos(f),E=Math.sin(f),W=this.x-y.x,U=this.y-y.y;return this.x=W*R-U*E+y.x,this.y=W*E+U*R+y.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(){Zi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(y,f,R,E,W,U,N,q,X){const K=this.elements;return K[0]=y,K[1]=E,K[2]=N,K[3]=f,K[4]=W,K[5]=q,K[6]=R,K[7]=U,K[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(y){const f=this.elements,R=y.elements;return f[0]=R[0],f[1]=R[1],f[2]=R[2],f[3]=R[3],f[4]=R[4],f[5]=R[5],f[6]=R[6],f[7]=R[7],f[8]=R[8],this}extractBasis(y,f,R){return y.setFromMatrix3Column(this,0),f.setFromMatrix3Column(this,1),R.setFromMatrix3Column(this,2),this}setFromMatrix4(y){const f=y.elements;return this.set(f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]),this}multiply(y){return this.multiplyMatrices(this,y)}premultiply(y){return this.multiplyMatrices(y,this)}multiplyMatrices(y,f){const R=y.elements,E=f.elements,W=this.elements,U=R[0],N=R[3],q=R[6],X=R[1],K=R[4],$=R[7],e2=R[2],l2=R[5],a2=R[8],o2=E[0],t2=E[3],f2=E[6],v2=E[1],M2=E[4],S2=E[7],A2=E[2],I2=E[5],N2=E[8];return W[0]=U*o2+N*v2+q*A2,W[3]=U*t2+N*M2+q*I2,W[6]=U*f2+N*S2+q*N2,W[1]=X*o2+K*v2+$*A2,W[4]=X*t2+K*M2+$*I2,W[7]=X*f2+K*S2+$*N2,W[2]=e2*o2+l2*v2+a2*A2,W[5]=e2*t2+l2*M2+a2*I2,W[8]=e2*f2+l2*S2+a2*N2,this}multiplyScalar(y){const f=this.elements;return f[0]*=y,f[3]*=y,f[6]*=y,f[1]*=y,f[4]*=y,f[7]*=y,f[2]*=y,f[5]*=y,f[8]*=y,this}determinant(){const y=this.elements,f=y[0],R=y[1],E=y[2],W=y[3],U=y[4],N=y[5],q=y[6],X=y[7],K=y[8];return f*U*K-f*N*X-R*W*K+R*N*q+E*W*X-E*U*q}invert(){const y=this.elements,f=y[0],R=y[1],E=y[2],W=y[3],U=y[4],N=y[5],q=y[6],X=y[7],K=y[8],$=K*U-N*X,e2=N*q-K*W,l2=X*W-U*q,a2=f*$+R*e2+E*l2;if(a2===0)return this.set(0,0,0,0,0,0,0,0,0);const o2=1/a2;return y[0]=$*o2,y[1]=(E*X-K*R)*o2,y[2]=(N*R-E*U)*o2,y[3]=e2*o2,y[4]=(K*f-E*q)*o2,y[5]=(E*W-N*f)*o2,y[6]=l2*o2,y[7]=(R*q-X*f)*o2,y[8]=(U*f-R*W)*o2,this}transpose(){let y;const f=this.elements;return y=f[1],f[1]=f[3],f[3]=y,y=f[2],f[2]=f[6],f[6]=y,y=f[5],f[5]=f[7],f[7]=y,this}getNormalMatrix(y){return this.setFromMatrix4(y).invert().transpose()}transposeIntoArray(y){const f=this.elements;return y[0]=f[0],y[1]=f[3],y[2]=f[6],y[3]=f[1],y[4]=f[4],y[5]=f[7],y[6]=f[2],y[7]=f[5],y[8]=f[8],this}setUvTransform(y,f,R,E,W,U,N){const q=Math.cos(W),X=Math.sin(W);return this.set(R*q,R*X,-R*(q*U+X*N)+U+y,-E*X,E*q,-E*(-X*U+q*N)+N+f,0,0,1),this}scale(y,f){const R=this.elements;return R[0]*=y,R[3]*=y,R[6]*=y,R[1]*=f,R[4]*=f,R[7]*=f,this}rotate(y){const f=Math.cos(y),R=Math.sin(y),E=this.elements,W=E[0],U=E[3],N=E[6],q=E[1],X=E[4],K=E[7];return E[0]=f*W+R*q,E[3]=f*U+R*X,E[6]=f*N+R*K,E[1]=-R*W+f*q,E[4]=-R*U+f*X,E[7]=-R*N+f*K,this}translate(y,f){const R=this.elements;return R[0]+=y*R[2],R[3]+=y*R[5],R[6]+=y*R[8],R[1]+=f*R[2],R[4]+=f*R[5],R[7]+=f*R[8],this}equals(y){const f=this.elements,R=y.elements;for(let E=0;E<9;E++)if(f[E]!==R[E])return!1;return!0}fromArray(y,f=0){for(let R=0;R<9;R++)this.elements[R]=y[R+f];return this}toArray(y=[],f=0){const R=this.elements;return y[f]=R[0],y[f+1]=R[1],y[f+2]=R[2],y[f+3]=R[3],y[f+4]=R[4],y[f+5]=R[5],y[f+6]=R[6],y[f+7]=R[7],y[f+8]=R[8],y}clone(){return new this.constructor().fromArray(this.elements)}}function jL(H){for(let y=H.length-1;y>=0;--y)if(H[y]>65535)return!0;return!1}function Up(H){return document.createElementNS("http://www.w3.org/1999/xhtml",H)}function S1(H){return H<.04045?H*.0773993808:Math.pow(H*.9478672986+.0521327014,2.4)}function Hp(H){return H<.0031308?H*12.92:1.055*Math.pow(H,.41666)-.055}const mu={[fo]:{[k1]:S1},[k1]:{[fo]:Hp}},rr={legacyMode:!0,get workingColorSpace(){return k1},set workingColorSpace(H){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(H,y,f){if(this.legacyMode||y===f||!y||!f)return H;if(mu[y]&&mu[y][f]!==void 0){const R=mu[y][f];return H.r=R(H.r),H.g=R(H.g),H.b=R(H.b),H}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(H,y){return this.convert(H,this.workingColorSpace,y)},toWorkingColorSpace:function(H,y){return this.convert(H,y,this.workingColorSpace)}},LL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},r0={r:0,g:0,b:0},or={h:0,s:0,l:0},yp={h:0,s:0,l:0};function au(H,y,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?H+(y-H)*6*f:f<1/2?y:f<2/3?H+(y-H)*6*(2/3-f):H}function bp(H,y){return y.r=H.r,y.g=H.g,y.b=H.b,y}class an{constructor(y,f,R){return this.isColor=!0,this.r=1,this.g=1,this.b=1,f===void 0&&R===void 0?this.set(y):this.setRGB(y,f,R)}set(y){return y&&y.isColor?this.copy(y):typeof y=="number"?this.setHex(y):typeof y=="string"&&this.setStyle(y),this}setScalar(y){return this.r=y,this.g=y,this.b=y,this}setHex(y,f=fo){return y=Math.floor(y),this.r=(y>>16&255)/255,this.g=(y>>8&255)/255,this.b=(y&255)/255,rr.toWorkingColorSpace(this,f),this}setRGB(y,f,R,E=k1){return this.r=y,this.g=f,this.b=R,rr.toWorkingColorSpace(this,E),this}setHSL(y,f,R,E=k1){if(y=Ws2(y,1),f=fi(f,0,1),R=fi(R,0,1),f===0)this.r=this.g=this.b=R;else{const W=R<=.5?R*(1+f):R+f-R*f,U=2*R-W;this.r=au(U,W,y+1/3),this.g=au(U,W,y),this.b=au(U,W,y-1/3)}return rr.toWorkingColorSpace(this,E),this}setStyle(y,f=fo){function R(W){W!==void 0&&parseFloat(W)<1&&console.warn("THREE.Color: Alpha component of "+y+" will be ignored.")}let E;if(E=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(y)){let W;const U=E[1],N=E[2];switch(U){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(N))return this.r=Math.min(255,parseInt(W[1],10))/255,this.g=Math.min(255,parseInt(W[2],10))/255,this.b=Math.min(255,parseInt(W[3],10))/255,rr.toWorkingColorSpace(this,f),R(W[4]),this;if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(N))return this.r=Math.min(100,parseInt(W[1],10))/100,this.g=Math.min(100,parseInt(W[2],10))/100,this.b=Math.min(100,parseInt(W[3],10))/100,rr.toWorkingColorSpace(this,f),R(W[4]),this;break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(N)){const q=parseFloat(W[1])/360,X=parseInt(W[2],10)/100,K=parseInt(W[3],10)/100;return R(W[4]),this.setHSL(q,X,K,f)}break}}else if(E=/^\#([A-Fa-f\d]+)$/.exec(y)){const W=E[1],U=W.length;if(U===3)return this.r=parseInt(W.charAt(0)+W.charAt(0),16)/255,this.g=parseInt(W.charAt(1)+W.charAt(1),16)/255,this.b=parseInt(W.charAt(2)+W.charAt(2),16)/255,rr.toWorkingColorSpace(this,f),this;if(U===6)return this.r=parseInt(W.charAt(0)+W.charAt(1),16)/255,this.g=parseInt(W.charAt(2)+W.charAt(3),16)/255,this.b=parseInt(W.charAt(4)+W.charAt(5),16)/255,rr.toWorkingColorSpace(this,f),this}return y&&y.length>0?this.setColorName(y,f):this}setColorName(y,f=fo){const R=LL[y.toLowerCase()];return R!==void 0?this.setHex(R,f):console.warn("THREE.Color: Unknown color "+y),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(y){return this.r=y.r,this.g=y.g,this.b=y.b,this}copySRGBToLinear(y){return this.r=S1(y.r),this.g=S1(y.g),this.b=S1(y.b),this}copyLinearToSRGB(y){return this.r=Hp(y.r),this.g=Hp(y.g),this.b=Hp(y.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(y=fo){return rr.fromWorkingColorSpace(bp(this,r0),y),fi(r0.r*255,0,255)<<16^fi(r0.g*255,0,255)<<8^fi(r0.b*255,0,255)<<0}getHexString(y=fo){return("000000"+this.getHex(y).toString(16)).slice(-6)}getHSL(y,f=k1){rr.fromWorkingColorSpace(bp(this,r0),f);const R=r0.r,E=r0.g,W=r0.b,U=Math.max(R,E,W),N=Math.min(R,E,W);let q,X;const K=(N+U)/2;if(N===U)q=0,X=0;else{const $=U-N;switch(X=K<=.5?$/(U+N):$/(2-U-N),U){case R:q=(E-W)/$+(E<W?6:0);break;case E:q=(W-R)/$+2;break;case W:q=(R-E)/$+4;break}q/=6}return y.h=q,y.s=X,y.l=K,y}getRGB(y,f=k1){return rr.fromWorkingColorSpace(bp(this,r0),f),y.r=r0.r,y.g=r0.g,y.b=r0.b,y}getStyle(y=fo){return rr.fromWorkingColorSpace(bp(this,r0),y),y!==fo?`color(${y} ${r0.r} ${r0.g} ${r0.b})`:`rgb(${r0.r*255|0},${r0.g*255|0},${r0.b*255|0})`}offsetHSL(y,f,R){return this.getHSL(or),or.h+=y,or.s+=f,or.l+=R,this.setHSL(or.h,or.s,or.l),this}add(y){return this.r+=y.r,this.g+=y.g,this.b+=y.b,this}addColors(y,f){return this.r=y.r+f.r,this.g=y.g+f.g,this.b=y.b+f.b,this}addScalar(y){return this.r+=y,this.g+=y,this.b+=y,this}sub(y){return this.r=Math.max(0,this.r-y.r),this.g=Math.max(0,this.g-y.g),this.b=Math.max(0,this.b-y.b),this}multiply(y){return this.r*=y.r,this.g*=y.g,this.b*=y.b,this}multiplyScalar(y){return this.r*=y,this.g*=y,this.b*=y,this}lerp(y,f){return this.r+=(y.r-this.r)*f,this.g+=(y.g-this.g)*f,this.b+=(y.b-this.b)*f,this}lerpColors(y,f,R){return this.r=y.r+(f.r-y.r)*R,this.g=y.g+(f.g-y.g)*R,this.b=y.b+(f.b-y.b)*R,this}lerpHSL(y,f){this.getHSL(or),y.getHSL(yp);const R=uu(or.h,yp.h,f),E=uu(or.s,yp.s,f),W=uu(or.l,yp.l,f);return this.setHSL(R,E,W),this}equals(y){return y.r===this.r&&y.g===this.g&&y.b===this.b}fromArray(y,f=0){return this.r=y[f],this.g=y[f+1],this.b=y[f+2],this}toArray(y=[],f=0){return y[f]=this.r,y[f+1]=this.g,y[f+2]=this.b,y}fromBufferAttribute(y,f){return this.r=y.getX(f),this.g=y.getY(f),this.b=y.getZ(f),y.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}an.NAMES=LL;let ls;class FL{static getDataURL(y){if(/^data:/i.test(y.src)||typeof HTMLCanvasElement>"u")return y.src;let f;if(y instanceof HTMLCanvasElement)f=y;else{ls===void 0&&(ls=Up("canvas")),ls.width=y.width,ls.height=y.height;const R=ls.getContext("2d");y instanceof ImageData?R.putImageData(y,0,0):R.drawImage(y,0,0,y.width,y.height),f=ls}return f.width>2048||f.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",y),f.toDataURL("image/jpeg",.6)):f.toDataURL("image/png")}static sRGBToLinear(y){if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const f=Up("canvas");f.width=y.width,f.height=y.height;const R=f.getContext("2d");R.drawImage(y,0,0,y.width,y.height);const E=R.getImageData(0,0,y.width,y.height),W=E.data;for(let U=0;U<W.length;U++)W[U]=S1(W[U]/255)*255;return R.putImageData(E,0,0),f}else if(y.data){const f=y.data.slice(0);for(let R=0;R<f.length;R++)f instanceof Uint8Array||f instanceof Uint8ClampedArray?f[R]=Math.floor(S1(f[R]/255)*255):f[R]=S1(f[R]);return{data:f,width:y.width,height:y.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),y}}class WL{constructor(y=null){this.isSource=!0,this.uuid=G_(),this.data=y,this.version=0}set needsUpdate(y){y===!0&&this.version++}toJSON(y){const f=y===void 0||typeof y=="string";if(!f&&y.images[this.uuid]!==void 0)return y.images[this.uuid];const R={uuid:this.uuid,url:""},E=this.data;if(E!==null){let W;if(Array.isArray(E)){W=[];for(let U=0,N=E.length;U<N;U++)E[U].isDataTexture?W.push(du(E[U].image)):W.push(du(E[U]))}else W=du(E);R.url=W}return f||(y.images[this.uuid]=R),R}}function du(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap?FL.getDataURL(H):H.data?{data:Array.from(H.data),width:H.width,height:H.height,type:H.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Os2=0;class cr extends I1{constructor(y=cr.DEFAULT_IMAGE,f=cr.DEFAULT_MAPPING,R=lr,E=lr,W=Qi,U=Zp,N=Er,q=x1,X=1,K=w1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Os2++}),this.uuid=G_(),this.name="",this.source=new WL(y),this.mipmaps=[],this.mapping=f,this.wrapS=R,this.wrapT=E,this.magFilter=W,this.minFilter=U,this.anisotropy=X,this.format=N,this.internalFormat=null,this.type=q,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=K,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(y){this.source.data=y}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(y){return this.name=y.name,this.source=y.source,this.mipmaps=y.mipmaps.slice(0),this.mapping=y.mapping,this.wrapS=y.wrapS,this.wrapT=y.wrapT,this.magFilter=y.magFilter,this.minFilter=y.minFilter,this.anisotropy=y.anisotropy,this.format=y.format,this.internalFormat=y.internalFormat,this.type=y.type,this.offset.copy(y.offset),this.repeat.copy(y.repeat),this.center.copy(y.center),this.rotation=y.rotation,this.matrixAutoUpdate=y.matrixAutoUpdate,this.matrix.copy(y.matrix),this.generateMipmaps=y.generateMipmaps,this.premultiplyAlpha=y.premultiplyAlpha,this.flipY=y.flipY,this.unpackAlignment=y.unpackAlignment,this.encoding=y.encoding,this.userData=JSON.parse(JSON.stringify(y.userData)),this.needsUpdate=!0,this}toJSON(y){const f=y===void 0||typeof y=="string";if(!f&&y.textures[this.uuid]!==void 0)return y.textures[this.uuid];const R={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(y).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(R.userData=this.userData),f||(y.textures[this.uuid]=R),R}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(y){if(this.mapping!==BL)return y;if(y.applyMatrix3(this.matrix),y.x<0||y.x>1)switch(this.wrapS){case Vu:y.x=y.x-Math.floor(y.x);break;case lr:y.x=y.x<0?0:1;break;case zu:Math.abs(Math.floor(y.x)%2)===1?y.x=Math.ceil(y.x)-y.x:y.x=y.x-Math.floor(y.x);break}if(y.y<0||y.y>1)switch(this.wrapT){case Vu:y.y=y.y-Math.floor(y.y);break;case lr:y.y=y.y<0?0:1;break;case zu:Math.abs(Math.floor(y.y)%2)===1?y.y=Math.ceil(y.y)-y.y:y.y=y.y-Math.floor(y.y);break}return this.flipY&&(y.y=1-y.y),y}set needsUpdate(y){y===!0&&(this.version++,this.source.needsUpdate=!0)}}cr.DEFAULT_IMAGE=null;cr.DEFAULT_MAPPING=BL;class o0{constructor(y=0,f=0,R=0,E=1){o0.prototype.isVector4=!0,this.x=y,this.y=f,this.z=R,this.w=E}get width(){return this.z}set width(y){this.z=y}get height(){return this.w}set height(y){this.w=y}set(y,f,R,E){return this.x=y,this.y=f,this.z=R,this.w=E,this}setScalar(y){return this.x=y,this.y=y,this.z=y,this.w=y,this}setX(y){return this.x=y,this}setY(y){return this.y=y,this}setZ(y){return this.z=y,this}setW(y){return this.w=y,this}setComponent(y,f){switch(y){case 0:this.x=f;break;case 1:this.y=f;break;case 2:this.z=f;break;case 3:this.w=f;break;default:throw new Error("index is out of range: "+y)}return this}getComponent(y){switch(y){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+y)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(y){return this.x=y.x,this.y=y.y,this.z=y.z,this.w=y.w!==void 0?y.w:1,this}add(y){return this.x+=y.x,this.y+=y.y,this.z+=y.z,this.w+=y.w,this}addScalar(y){return this.x+=y,this.y+=y,this.z+=y,this.w+=y,this}addVectors(y,f){return this.x=y.x+f.x,this.y=y.y+f.y,this.z=y.z+f.z,this.w=y.w+f.w,this}addScaledVector(y,f){return this.x+=y.x*f,this.y+=y.y*f,this.z+=y.z*f,this.w+=y.w*f,this}sub(y){return this.x-=y.x,this.y-=y.y,this.z-=y.z,this.w-=y.w,this}subScalar(y){return this.x-=y,this.y-=y,this.z-=y,this.w-=y,this}subVectors(y,f){return this.x=y.x-f.x,this.y=y.y-f.y,this.z=y.z-f.z,this.w=y.w-f.w,this}multiply(y){return this.x*=y.x,this.y*=y.y,this.z*=y.z,this.w*=y.w,this}multiplyScalar(y){return this.x*=y,this.y*=y,this.z*=y,this.w*=y,this}applyMatrix4(y){const f=this.x,R=this.y,E=this.z,W=this.w,U=y.elements;return this.x=U[0]*f+U[4]*R+U[8]*E+U[12]*W,this.y=U[1]*f+U[5]*R+U[9]*E+U[13]*W,this.z=U[2]*f+U[6]*R+U[10]*E+U[14]*W,this.w=U[3]*f+U[7]*R+U[11]*E+U[15]*W,this}divideScalar(y){return this.multiplyScalar(1/y)}setAxisAngleFromQuaternion(y){this.w=2*Math.acos(y.w);const f=Math.sqrt(1-y.w*y.w);return f<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=y.x/f,this.y=y.y/f,this.z=y.z/f),this}setAxisAngleFromRotationMatrix(y){let f,R,E,W;const q=y.elements,X=q[0],K=q[4],$=q[8],e2=q[1],l2=q[5],a2=q[9],o2=q[2],t2=q[6],f2=q[10];if(Math.abs(K-e2)<.01&&Math.abs($-o2)<.01&&Math.abs(a2-t2)<.01){if(Math.abs(K+e2)<.1&&Math.abs($+o2)<.1&&Math.abs(a2+t2)<.1&&Math.abs(X+l2+f2-3)<.1)return this.set(1,0,0,0),this;f=Math.PI;const M2=(X+1)/2,S2=(l2+1)/2,A2=(f2+1)/2,I2=(K+e2)/4,N2=($+o2)/4,u2=(a2+t2)/4;return M2>S2&&M2>A2?M2<.01?(R=0,E=.707106781,W=.707106781):(R=Math.sqrt(M2),E=I2/R,W=N2/R):S2>A2?S2<.01?(R=.707106781,E=0,W=.707106781):(E=Math.sqrt(S2),R=I2/E,W=u2/E):A2<.01?(R=.707106781,E=.707106781,W=0):(W=Math.sqrt(A2),R=N2/W,E=u2/W),this.set(R,E,W,f),this}let v2=Math.sqrt((t2-a2)*(t2-a2)+($-o2)*($-o2)+(e2-K)*(e2-K));return Math.abs(v2)<.001&&(v2=1),this.x=(t2-a2)/v2,this.y=($-o2)/v2,this.z=(e2-K)/v2,this.w=Math.acos((X+l2+f2-1)/2),this}min(y){return this.x=Math.min(this.x,y.x),this.y=Math.min(this.y,y.y),this.z=Math.min(this.z,y.z),this.w=Math.min(this.w,y.w),this}max(y){return this.x=Math.max(this.x,y.x),this.y=Math.max(this.y,y.y),this.z=Math.max(this.z,y.z),this.w=Math.max(this.w,y.w),this}clamp(y,f){return this.x=Math.max(y.x,Math.min(f.x,this.x)),this.y=Math.max(y.y,Math.min(f.y,this.y)),this.z=Math.max(y.z,Math.min(f.z,this.z)),this.w=Math.max(y.w,Math.min(f.w,this.w)),this}clampScalar(y,f){return this.x=Math.max(y,Math.min(f,this.x)),this.y=Math.max(y,Math.min(f,this.y)),this.z=Math.max(y,Math.min(f,this.z)),this.w=Math.max(y,Math.min(f,this.w)),this}clampLength(y,f){const R=this.length();return this.divideScalar(R||1).multiplyScalar(Math.max(y,Math.min(f,R)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(y){return this.x*y.x+this.y*y.y+this.z*y.z+this.w*y.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(y){return this.normalize().multiplyScalar(y)}lerp(y,f){return this.x+=(y.x-this.x)*f,this.y+=(y.y-this.y)*f,this.z+=(y.z-this.z)*f,this.w+=(y.w-this.w)*f,this}lerpVectors(y,f,R){return this.x=y.x+(f.x-y.x)*R,this.y=y.y+(f.y-y.y)*R,this.z=y.z+(f.z-y.z)*R,this.w=y.w+(f.w-y.w)*R,this}equals(y){return y.x===this.x&&y.y===this.y&&y.z===this.z&&y.w===this.w}fromArray(y,f=0){return this.x=y[f],this.y=y[f+1],this.z=y[f+2],this.w=y[f+3],this}toArray(y=[],f=0){return y[f]=this.x,y[f+1]=this.y,y[f+2]=this.z,y[f+3]=this.w,y}fromBufferAttribute(y,f){return this.x=y.getX(f),this.y=y.getY(f),this.z=y.getZ(f),this.w=y.getW(f),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M1 extends I1{constructor(y,f,R={}){super(),this.isWebGLRenderTarget=!0,this.width=y,this.height=f,this.depth=1,this.scissor=new o0(0,0,y,f),this.scissorTest=!1,this.viewport=new o0(0,0,y,f);const E={width:y,height:f,depth:1};this.texture=new cr(E,R.mapping,R.wrapS,R.wrapT,R.magFilter,R.minFilter,R.format,R.type,R.anisotropy,R.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=R.generateMipmaps!==void 0?R.generateMipmaps:!1,this.texture.internalFormat=R.internalFormat!==void 0?R.internalFormat:null,this.texture.minFilter=R.minFilter!==void 0?R.minFilter:Qi,this.depthBuffer=R.depthBuffer!==void 0?R.depthBuffer:!0,this.stencilBuffer=R.stencilBuffer!==void 0?R.stencilBuffer:!1,this.depthTexture=R.depthTexture!==void 0?R.depthTexture:null,this.samples=R.samples!==void 0?R.samples:0}setSize(y,f,R=1){(this.width!==y||this.height!==f||this.depth!==R)&&(this.width=y,this.height=f,this.depth=R,this.texture.image.width=y,this.texture.image.height=f,this.texture.image.depth=R,this.dispose()),this.viewport.set(0,0,y,f),this.scissor.set(0,0,y,f)}clone(){return new this.constructor().copy(this)}copy(y){this.width=y.width,this.height=y.height,this.depth=y.depth,this.viewport.copy(y.viewport),this.texture=y.texture.clone(),this.texture.isRenderTargetTexture=!0;const f=Object.assign({},y.texture.image);return this.texture.source=new WL(f),this.depthBuffer=y.depthBuffer,this.stencilBuffer=y.stencilBuffer,y.depthTexture!==null&&(this.depthTexture=y.depthTexture.clone()),this.samples=y.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OL extends cr{constructor(y=null,f=1,R=1,E=1){super(null),this.isDataArrayTexture=!0,this.image={data:y,width:f,height:R,depth:E},this.magFilter=ci,this.minFilter=ci,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs2 extends cr{constructor(y=null,f=1,R=1,E=1){super(null),this.isData3DTexture=!0,this.image={data:y,width:f,height:R,depth:E},this.magFilter=ci,this.minFilter=ci,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class R1{constructor(y=0,f=0,R=0,E=1){this.isQuaternion=!0,this._x=y,this._y=f,this._z=R,this._w=E}static slerpFlat(y,f,R,E,W,U,N){let q=R[E+0],X=R[E+1],K=R[E+2],$=R[E+3];const e2=W[U+0],l2=W[U+1],a2=W[U+2],o2=W[U+3];if(N===0){y[f+0]=q,y[f+1]=X,y[f+2]=K,y[f+3]=$;return}if(N===1){y[f+0]=e2,y[f+1]=l2,y[f+2]=a2,y[f+3]=o2;return}if($!==o2||q!==e2||X!==l2||K!==a2){let t2=1-N;const f2=q*e2+X*l2+K*a2+$*o2,v2=f2>=0?1:-1,M2=1-f2*f2;if(M2>Number.EPSILON){const A2=Math.sqrt(M2),I2=Math.atan2(A2,f2*v2);t2=Math.sin(t2*I2)/A2,N=Math.sin(N*I2)/A2}const S2=N*v2;if(q=q*t2+e2*S2,X=X*t2+l2*S2,K=K*t2+a2*S2,$=$*t2+o2*S2,t2===1-N){const A2=1/Math.sqrt(q*q+X*X+K*K+$*$);q*=A2,X*=A2,K*=A2,$*=A2}}y[f]=q,y[f+1]=X,y[f+2]=K,y[f+3]=$}static multiplyQuaternionsFlat(y,f,R,E,W,U){const N=R[E],q=R[E+1],X=R[E+2],K=R[E+3],$=W[U],e2=W[U+1],l2=W[U+2],a2=W[U+3];return y[f]=N*a2+K*$+q*l2-X*e2,y[f+1]=q*a2+K*e2+X*$-N*l2,y[f+2]=X*a2+K*l2+N*e2-q*$,y[f+3]=K*a2-N*$-q*e2-X*l2,y}get x(){return this._x}set x(y){this._x=y,this._onChangeCallback()}get y(){return this._y}set y(y){this._y=y,this._onChangeCallback()}get z(){return this._z}set z(y){this._z=y,this._onChangeCallback()}get w(){return this._w}set w(y){this._w=y,this._onChangeCallback()}set(y,f,R,E){return this._x=y,this._y=f,this._z=R,this._w=E,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(y){return this._x=y.x,this._y=y.y,this._z=y.z,this._w=y.w,this._onChangeCallback(),this}setFromEuler(y,f){if(!(y&&y.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const R=y._x,E=y._y,W=y._z,U=y._order,N=Math.cos,q=Math.sin,X=N(R/2),K=N(E/2),$=N(W/2),e2=q(R/2),l2=q(E/2),a2=q(W/2);switch(U){case"XYZ":this._x=e2*K*$+X*l2*a2,this._y=X*l2*$-e2*K*a2,this._z=X*K*a2+e2*l2*$,this._w=X*K*$-e2*l2*a2;break;case"YXZ":this._x=e2*K*$+X*l2*a2,this._y=X*l2*$-e2*K*a2,this._z=X*K*a2-e2*l2*$,this._w=X*K*$+e2*l2*a2;break;case"ZXY":this._x=e2*K*$-X*l2*a2,this._y=X*l2*$+e2*K*a2,this._z=X*K*a2+e2*l2*$,this._w=X*K*$-e2*l2*a2;break;case"ZYX":this._x=e2*K*$-X*l2*a2,this._y=X*l2*$+e2*K*a2,this._z=X*K*a2-e2*l2*$,this._w=X*K*$+e2*l2*a2;break;case"YZX":this._x=e2*K*$+X*l2*a2,this._y=X*l2*$+e2*K*a2,this._z=X*K*a2-e2*l2*$,this._w=X*K*$-e2*l2*a2;break;case"XZY":this._x=e2*K*$-X*l2*a2,this._y=X*l2*$-e2*K*a2,this._z=X*K*a2+e2*l2*$,this._w=X*K*$+e2*l2*a2;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+U)}return f!==!1&&this._onChangeCallback(),this}setFromAxisAngle(y,f){const R=f/2,E=Math.sin(R);return this._x=y.x*E,this._y=y.y*E,this._z=y.z*E,this._w=Math.cos(R),this._onChangeCallback(),this}setFromRotationMatrix(y){const f=y.elements,R=f[0],E=f[4],W=f[8],U=f[1],N=f[5],q=f[9],X=f[2],K=f[6],$=f[10],e2=R+N+$;if(e2>0){const l2=.5/Math.sqrt(e2+1);this._w=.25/l2,this._x=(K-q)*l2,this._y=(W-X)*l2,this._z=(U-E)*l2}else if(R>N&&R>$){const l2=2*Math.sqrt(1+R-N-$);this._w=(K-q)/l2,this._x=.25*l2,this._y=(E+U)/l2,this._z=(W+X)/l2}else if(N>$){const l2=2*Math.sqrt(1+N-R-$);this._w=(W-X)/l2,this._x=(E+U)/l2,this._y=.25*l2,this._z=(q+K)/l2}else{const l2=2*Math.sqrt(1+$-R-N);this._w=(U-E)/l2,this._x=(W+X)/l2,this._y=(q+K)/l2,this._z=.25*l2}return this._onChangeCallback(),this}setFromUnitVectors(y,f){let R=y.dot(f)+1;return R<Number.EPSILON?(R=0,Math.abs(y.x)>Math.abs(y.z)?(this._x=-y.y,this._y=y.x,this._z=0,this._w=R):(this._x=0,this._y=-y.z,this._z=y.y,this._w=R)):(this._x=y.y*f.z-y.z*f.y,this._y=y.z*f.x-y.x*f.z,this._z=y.x*f.y-y.y*f.x,this._w=R),this.normalize()}angleTo(y){return 2*Math.acos(Math.abs(fi(this.dot(y),-1,1)))}rotateTowards(y,f){const R=this.angleTo(y);if(R===0)return this;const E=Math.min(1,f/R);return this.slerp(y,E),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(y){return this._x*y._x+this._y*y._y+this._z*y._z+this._w*y._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let y=this.length();return y===0?(this._x=0,this._y=0,this._z=0,this._w=1):(y=1/y,this._x=this._x*y,this._y=this._y*y,this._z=this._z*y,this._w=this._w*y),this._onChangeCallback(),this}multiply(y){return this.multiplyQuaternions(this,y)}premultiply(y){return this.multiplyQuaternions(y,this)}multiplyQuaternions(y,f){const R=y._x,E=y._y,W=y._z,U=y._w,N=f._x,q=f._y,X=f._z,K=f._w;return this._x=R*K+U*N+E*X-W*q,this._y=E*K+U*q+W*N-R*X,this._z=W*K+U*X+R*q-E*N,this._w=U*K-R*N-E*q-W*X,this._onChangeCallback(),this}slerp(y,f){if(f===0)return this;if(f===1)return this.copy(y);const R=this._x,E=this._y,W=this._z,U=this._w;let N=U*y._w+R*y._x+E*y._y+W*y._z;if(N<0?(this._w=-y._w,this._x=-y._x,this._y=-y._y,this._z=-y._z,N=-N):this.copy(y),N>=1)return this._w=U,this._x=R,this._y=E,this._z=W,this;const q=1-N*N;if(q<=Number.EPSILON){const l2=1-f;return this._w=l2*U+f*this._w,this._x=l2*R+f*this._x,this._y=l2*E+f*this._y,this._z=l2*W+f*this._z,this.normalize(),this._onChangeCallback(),this}const X=Math.sqrt(q),K=Math.atan2(X,N),$=Math.sin((1-f)*K)/X,e2=Math.sin(f*K)/X;return this._w=U*$+this._w*e2,this._x=R*$+this._x*e2,this._y=E*$+this._y*e2,this._z=W*$+this._z*e2,this._onChangeCallback(),this}slerpQuaternions(y,f,R){return this.copy(y).slerp(f,R)}random(){const y=Math.random(),f=Math.sqrt(1-y),R=Math.sqrt(y),E=2*Math.PI*Math.random(),W=2*Math.PI*Math.random();return this.set(f*Math.cos(E),R*Math.sin(W),R*Math.cos(W),f*Math.sin(E))}equals(y){return y._x===this._x&&y._y===this._y&&y._z===this._z&&y._w===this._w}fromArray(y,f=0){return this._x=y[f],this._y=y[f+1],this._z=y[f+2],this._w=y[f+3],this._onChangeCallback(),this}toArray(y=[],f=0){return y[f]=this._x,y[f+1]=this._y,y[f+2]=this._z,y[f+3]=this._w,y}fromBufferAttribute(y,f){return this._x=y.getX(f),this._y=y.getY(f),this._z=y.getZ(f),this._w=y.getW(f),this}_onChange(y){return this._onChangeCallback=y,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W2{constructor(y=0,f=0,R=0){W2.prototype.isVector3=!0,this.x=y,this.y=f,this.z=R}set(y,f,R){return R===void 0&&(R=this.z),this.x=y,this.y=f,this.z=R,this}setScalar(y){return this.x=y,this.y=y,this.z=y,this}setX(y){return this.x=y,this}setY(y){return this.y=y,this}setZ(y){return this.z=y,this}setComponent(y,f){switch(y){case 0:this.x=f;break;case 1:this.y=f;break;case 2:this.z=f;break;default:throw new Error("index is out of range: "+y)}return this}getComponent(y){switch(y){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+y)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(y){return this.x=y.x,this.y=y.y,this.z=y.z,this}add(y){return this.x+=y.x,this.y+=y.y,this.z+=y.z,this}addScalar(y){return this.x+=y,this.y+=y,this.z+=y,this}addVectors(y,f){return this.x=y.x+f.x,this.y=y.y+f.y,this.z=y.z+f.z,this}addScaledVector(y,f){return this.x+=y.x*f,this.y+=y.y*f,this.z+=y.z*f,this}sub(y){return this.x-=y.x,this.y-=y.y,this.z-=y.z,this}subScalar(y){return this.x-=y,this.y-=y,this.z-=y,this}subVectors(y,f){return this.x=y.x-f.x,this.y=y.y-f.y,this.z=y.z-f.z,this}multiply(y){return this.x*=y.x,this.y*=y.y,this.z*=y.z,this}multiplyScalar(y){return this.x*=y,this.y*=y,this.z*=y,this}multiplyVectors(y,f){return this.x=y.x*f.x,this.y=y.y*f.y,this.z=y.z*f.z,this}applyEuler(y){return this.applyQuaternion(Nj.setFromEuler(y))}applyAxisAngle(y,f){return this.applyQuaternion(Nj.setFromAxisAngle(y,f))}applyMatrix3(y){const f=this.x,R=this.y,E=this.z,W=y.elements;return this.x=W[0]*f+W[3]*R+W[6]*E,this.y=W[1]*f+W[4]*R+W[7]*E,this.z=W[2]*f+W[5]*R+W[8]*E,this}applyNormalMatrix(y){return this.applyMatrix3(y).normalize()}applyMatrix4(y){const f=this.x,R=this.y,E=this.z,W=y.elements,U=1/(W[3]*f+W[7]*R+W[11]*E+W[15]);return this.x=(W[0]*f+W[4]*R+W[8]*E+W[12])*U,this.y=(W[1]*f+W[5]*R+W[9]*E+W[13])*U,this.z=(W[2]*f+W[6]*R+W[10]*E+W[14])*U,this}applyQuaternion(y){const f=this.x,R=this.y,E=this.z,W=y.x,U=y.y,N=y.z,q=y.w,X=q*f+U*E-N*R,K=q*R+N*f-W*E,$=q*E+W*R-U*f,e2=-W*f-U*R-N*E;return this.x=X*q+e2*-W+K*-N-$*-U,this.y=K*q+e2*-U+$*-W-X*-N,this.z=$*q+e2*-N+X*-U-K*-W,this}project(y){return this.applyMatrix4(y.matrixWorldInverse).applyMatrix4(y.projectionMatrix)}unproject(y){return this.applyMatrix4(y.projectionMatrixInverse).applyMatrix4(y.matrixWorld)}transformDirection(y){const f=this.x,R=this.y,E=this.z,W=y.elements;return this.x=W[0]*f+W[4]*R+W[8]*E,this.y=W[1]*f+W[5]*R+W[9]*E,this.z=W[2]*f+W[6]*R+W[10]*E,this.normalize()}divide(y){return this.x/=y.x,this.y/=y.y,this.z/=y.z,this}divideScalar(y){return this.multiplyScalar(1/y)}min(y){return this.x=Math.min(this.x,y.x),this.y=Math.min(this.y,y.y),this.z=Math.min(this.z,y.z),this}max(y){return this.x=Math.max(this.x,y.x),this.y=Math.max(this.y,y.y),this.z=Math.max(this.z,y.z),this}clamp(y,f){return this.x=Math.max(y.x,Math.min(f.x,this.x)),this.y=Math.max(y.y,Math.min(f.y,this.y)),this.z=Math.max(y.z,Math.min(f.z,this.z)),this}clampScalar(y,f){return this.x=Math.max(y,Math.min(f,this.x)),this.y=Math.max(y,Math.min(f,this.y)),this.z=Math.max(y,Math.min(f,this.z)),this}clampLength(y,f){const R=this.length();return this.divideScalar(R||1).multiplyScalar(Math.max(y,Math.min(f,R)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(y){return this.x*y.x+this.y*y.y+this.z*y.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(y){return this.normalize().multiplyScalar(y)}lerp(y,f){return this.x+=(y.x-this.x)*f,this.y+=(y.y-this.y)*f,this.z+=(y.z-this.z)*f,this}lerpVectors(y,f,R){return this.x=y.x+(f.x-y.x)*R,this.y=y.y+(f.y-y.y)*R,this.z=y.z+(f.z-y.z)*R,this}cross(y){return this.crossVectors(this,y)}crossVectors(y,f){const R=y.x,E=y.y,W=y.z,U=f.x,N=f.y,q=f.z;return this.x=E*q-W*N,this.y=W*U-R*q,this.z=R*N-E*U,this}projectOnVector(y){const f=y.lengthSq();if(f===0)return this.set(0,0,0);const R=y.dot(this)/f;return this.copy(y).multiplyScalar(R)}projectOnPlane(y){return hu.copy(this).projectOnVector(y),this.sub(hu)}reflect(y){return this.sub(hu.copy(y).multiplyScalar(2*this.dot(y)))}angleTo(y){const f=Math.sqrt(this.lengthSq()*y.lengthSq());if(f===0)return Math.PI/2;const R=this.dot(y)/f;return Math.acos(fi(R,-1,1))}distanceTo(y){return Math.sqrt(this.distanceToSquared(y))}distanceToSquared(y){const f=this.x-y.x,R=this.y-y.y,E=this.z-y.z;return f*f+R*R+E*E}manhattanDistanceTo(y){return Math.abs(this.x-y.x)+Math.abs(this.y-y.y)+Math.abs(this.z-y.z)}setFromSpherical(y){return this.setFromSphericalCoords(y.radius,y.phi,y.theta)}setFromSphericalCoords(y,f,R){const E=Math.sin(f)*y;return this.x=E*Math.sin(R),this.y=Math.cos(f)*y,this.z=E*Math.cos(R),this}setFromCylindrical(y){return this.setFromCylindricalCoords(y.radius,y.theta,y.y)}setFromCylindricalCoords(y,f,R){return this.x=y*Math.sin(f),this.y=R,this.z=y*Math.cos(f),this}setFromMatrixPosition(y){const f=y.elements;return this.x=f[12],this.y=f[13],this.z=f[14],this}setFromMatrixScale(y){const f=this.setFromMatrixColumn(y,0).length(),R=this.setFromMatrixColumn(y,1).length(),E=this.setFromMatrixColumn(y,2).length();return this.x=f,this.y=R,this.z=E,this}setFromMatrixColumn(y,f){return this.fromArray(y.elements,f*4)}setFromMatrix3Column(y,f){return this.fromArray(y.elements,f*3)}setFromEuler(y){return this.x=y._x,this.y=y._y,this.z=y._z,this}equals(y){return y.x===this.x&&y.y===this.y&&y.z===this.z}fromArray(y,f=0){return this.x=y[f],this.y=y[f+1],this.z=y[f+2],this}toArray(y=[],f=0){return y[f]=this.x,y[f+1]=this.y,y[f+2]=this.z,y}fromBufferAttribute(y,f){return this.x=y.getX(f),this.y=y.getY(f),this.z=y.getZ(f),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const y=(Math.random()-.5)*2,f=Math.random()*Math.PI*2,R=Math.sqrt(1-y**2);return this.x=R*Math.cos(f),this.y=R*Math.sin(f),this.z=y,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hu=new W2,Nj=new R1;class N_{constructor(y=new W2(1/0,1/0,1/0),f=new W2(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=y,this.max=f}set(y,f){return this.min.copy(y),this.max.copy(f),this}setFromArray(y){let f=1/0,R=1/0,E=1/0,W=-1/0,U=-1/0,N=-1/0;for(let q=0,X=y.length;q<X;q+=3){const K=y[q],$=y[q+1],e2=y[q+2];K<f&&(f=K),$<R&&(R=$),e2<E&&(E=e2),K>W&&(W=K),$>U&&(U=$),e2>N&&(N=e2)}return this.min.set(f,R,E),this.max.set(W,U,N),this}setFromBufferAttribute(y){let f=1/0,R=1/0,E=1/0,W=-1/0,U=-1/0,N=-1/0;for(let q=0,X=y.count;q<X;q++){const K=y.getX(q),$=y.getY(q),e2=y.getZ(q);K<f&&(f=K),$<R&&(R=$),e2<E&&(E=e2),K>W&&(W=K),$>U&&(U=$),e2>N&&(N=e2)}return this.min.set(f,R,E),this.max.set(W,U,N),this}setFromPoints(y){this.makeEmpty();for(let f=0,R=y.length;f<R;f++)this.expandByPoint(y[f]);return this}setFromCenterAndSize(y,f){const R=a1.copy(f).multiplyScalar(.5);return this.min.copy(y).sub(R),this.max.copy(y).add(R),this}setFromObject(y,f=!1){return this.makeEmpty(),this.expandByObject(y,f)}clone(){return new this.constructor().copy(this)}copy(y){return this.min.copy(y.min),this.max.copy(y.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(y){return this.isEmpty()?y.set(0,0,0):y.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(y){return this.isEmpty()?y.set(0,0,0):y.subVectors(this.max,this.min)}expandByPoint(y){return this.min.min(y),this.max.max(y),this}expandByVector(y){return this.min.sub(y),this.max.add(y),this}expandByScalar(y){return this.min.addScalar(-y),this.max.addScalar(y),this}expandByObject(y,f=!1){y.updateWorldMatrix(!1,!1);const R=y.geometry;if(R!==void 0)if(f&&R.attributes!=null&&R.attributes.position!==void 0){const W=R.attributes.position;for(let U=0,N=W.count;U<N;U++)a1.fromBufferAttribute(W,U).applyMatrix4(y.matrixWorld),this.expandByPoint(a1)}else R.boundingBox===null&&R.computeBoundingBox(),gu.copy(R.boundingBox),gu.applyMatrix4(y.matrixWorld),this.union(gu);const E=y.children;for(let W=0,U=E.length;W<U;W++)this.expandByObject(E[W],f);return this}containsPoint(y){return!(y.x<this.min.x||y.x>this.max.x||y.y<this.min.y||y.y>this.max.y||y.z<this.min.z||y.z>this.max.z)}containsBox(y){return this.min.x<=y.min.x&&y.max.x<=this.max.x&&this.min.y<=y.min.y&&y.max.y<=this.max.y&&this.min.z<=y.min.z&&y.max.z<=this.max.z}getParameter(y,f){return f.set((y.x-this.min.x)/(this.max.x-this.min.x),(y.y-this.min.y)/(this.max.y-this.min.y),(y.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(y){return!(y.max.x<this.min.x||y.min.x>this.max.x||y.max.y<this.min.y||y.min.y>this.max.y||y.max.z<this.min.z||y.min.z>this.max.z)}intersectsSphere(y){return this.clampPoint(y.center,a1),a1.distanceToSquared(y.center)<=y.radius*y.radius}intersectsPlane(y){let f,R;return y.normal.x>0?(f=y.normal.x*this.min.x,R=y.normal.x*this.max.x):(f=y.normal.x*this.max.x,R=y.normal.x*this.min.x),y.normal.y>0?(f+=y.normal.y*this.min.y,R+=y.normal.y*this.max.y):(f+=y.normal.y*this.max.y,R+=y.normal.y*this.min.y),y.normal.z>0?(f+=y.normal.z*this.min.z,R+=y.normal.z*this.max.z):(f+=y.normal.z*this.max.z,R+=y.normal.z*this.min.z),f<=-y.constant&&R>=-y.constant}intersectsTriangle(y){if(this.isEmpty())return!1;this.getCenter(P_),vp.subVectors(this.max,P_),ps.subVectors(y.a,P_),cs.subVectors(y.b,P_),fs.subVectors(y.c,P_),Fo.subVectors(cs,ps),Wo.subVectors(fs,cs),d1.subVectors(ps,fs);let f=[0,-Fo.z,Fo.y,0,-Wo.z,Wo.y,0,-d1.z,d1.y,Fo.z,0,-Fo.x,Wo.z,0,-Wo.x,d1.z,0,-d1.x,-Fo.y,Fo.x,0,-Wo.y,Wo.x,0,-d1.y,d1.x,0];return!Au(f,ps,cs,fs,vp)||(f=[1,0,0,0,1,0,0,0,1],!Au(f,ps,cs,fs,vp))?!1:(kp.crossVectors(Fo,Wo),f=[kp.x,kp.y,kp.z],Au(f,ps,cs,fs,vp))}clampPoint(y,f){return f.copy(y).clamp(this.min,this.max)}distanceToPoint(y){return a1.copy(y).clamp(this.min,this.max).sub(y).length()}getBoundingSphere(y){return this.getCenter(y.center),y.radius=this.getSize(a1).length()*.5,y}intersect(y){return this.min.max(y.min),this.max.min(y.max),this.isEmpty()&&this.makeEmpty(),this}union(y){return this.min.min(y.min),this.max.max(y.max),this}applyMatrix4(y){return this.isEmpty()?this:(so[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(y),so[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(y),so[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(y),so[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(y),so[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(y),so[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(y),so[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(y),so[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(y),this.setFromPoints(so),this)}translate(y){return this.min.add(y),this.max.add(y),this}equals(y){return y.min.equals(this.min)&&y.max.equals(this.max)}}const so=[new W2,new W2,new W2,new W2,new W2,new W2,new W2,new W2],a1=new W2,gu=new N_,ps=new W2,cs=new W2,fs=new W2,Fo=new W2,Wo=new W2,d1=new W2,P_=new W2,vp=new W2,kp=new W2,h1=new W2;function Au(H,y,f,R,E){for(let W=0,U=H.length-3;W<=U;W+=3){h1.fromArray(H,W);const N=E.x*Math.abs(h1.x)+E.y*Math.abs(h1.y)+E.z*Math.abs(h1.z),q=y.dot(h1),X=f.dot(h1),K=R.dot(h1);if(Math.max(-Math.max(q,X,K),Math.min(q,X,K))>N)return!1}return!0}const Ns2=new N_,Hj=new W2,Cp=new W2,yu=new W2;class Ku{constructor(y=new W2,f=-1){this.center=y,this.radius=f}set(y,f){return this.center.copy(y),this.radius=f,this}setFromPoints(y,f){const R=this.center;f!==void 0?R.copy(f):Ns2.setFromPoints(y).getCenter(R);let E=0;for(let W=0,U=y.length;W<U;W++)E=Math.max(E,R.distanceToSquared(y[W]));return this.radius=Math.sqrt(E),this}copy(y){return this.center.copy(y.center),this.radius=y.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(y){return y.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(y){return y.distanceTo(this.center)-this.radius}intersectsSphere(y){const f=this.radius+y.radius;return y.center.distanceToSquared(this.center)<=f*f}intersectsBox(y){return y.intersectsSphere(this)}intersectsPlane(y){return Math.abs(y.distanceToPoint(this.center))<=this.radius}clampPoint(y,f){const R=this.center.distanceToSquared(y);return f.copy(y),R>this.radius*this.radius&&(f.sub(this.center).normalize(),f.multiplyScalar(this.radius).add(this.center)),f}getBoundingBox(y){return this.isEmpty()?(y.makeEmpty(),y):(y.set(this.center,this.center),y.expandByScalar(this.radius),y)}applyMatrix4(y){return this.center.applyMatrix4(y),this.radius=this.radius*y.getMaxScaleOnAxis(),this}translate(y){return this.center.add(y),this}expandByPoint(y){yu.subVectors(y,this.center);const f=yu.lengthSq();if(f>this.radius*this.radius){const R=Math.sqrt(f),E=(R-this.radius)*.5;this.center.add(yu.multiplyScalar(E/R)),this.radius+=E}return this}union(y){return this.center.equals(y.center)===!0?Cp.set(0,0,1).multiplyScalar(y.radius):Cp.subVectors(y.center,this.center).normalize().multiplyScalar(y.radius),this.expandByPoint(Hj.copy(y.center).add(Cp)),this.expandByPoint(Hj.copy(y.center).sub(Cp)),this}equals(y){return y.center.equals(this.center)&&y.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _o=new W2,bu=new W2,Sp=new W2,Oo=new W2,vu=new W2,xp=new W2,ku=new W2;class GL{constructor(y=new W2,f=new W2(0,0,-1)){this.origin=y,this.direction=f}set(y,f){return this.origin.copy(y),this.direction.copy(f),this}copy(y){return this.origin.copy(y.origin),this.direction.copy(y.direction),this}at(y,f){return f.copy(this.direction).multiplyScalar(y).add(this.origin)}lookAt(y){return this.direction.copy(y).sub(this.origin).normalize(),this}recast(y){return this.origin.copy(this.at(y,_o)),this}closestPointToPoint(y,f){f.subVectors(y,this.origin);const R=f.dot(this.direction);return R<0?f.copy(this.origin):f.copy(this.direction).multiplyScalar(R).add(this.origin)}distanceToPoint(y){return Math.sqrt(this.distanceSqToPoint(y))}distanceSqToPoint(y){const f=_o.subVectors(y,this.origin).dot(this.direction);return f<0?this.origin.distanceToSquared(y):(_o.copy(this.direction).multiplyScalar(f).add(this.origin),_o.distanceToSquared(y))}distanceSqToSegment(y,f,R,E){bu.copy(y).add(f).multiplyScalar(.5),Sp.copy(f).sub(y).normalize(),Oo.copy(this.origin).sub(bu);const W=y.distanceTo(f)*.5,U=-this.direction.dot(Sp),N=Oo.dot(this.direction),q=-Oo.dot(Sp),X=Oo.lengthSq(),K=Math.abs(1-U*U);let $,e2,l2,a2;if(K>0)if($=U*q-N,e2=U*N-q,a2=W*K,$>=0)if(e2>=-a2)if(e2<=a2){const o2=1/K;$*=o2,e2*=o2,l2=$*($+U*e2+2*N)+e2*(U*$+e2+2*q)+X}else e2=W,$=Math.max(0,-(U*e2+N)),l2=-$*$+e2*(e2+2*q)+X;else e2=-W,$=Math.max(0,-(U*e2+N)),l2=-$*$+e2*(e2+2*q)+X;else e2<=-a2?($=Math.max(0,-(-U*W+N)),e2=$>0?-W:Math.min(Math.max(-W,-q),W),l2=-$*$+e2*(e2+2*q)+X):e2<=a2?($=0,e2=Math.min(Math.max(-W,-q),W),l2=e2*(e2+2*q)+X):($=Math.max(0,-(U*W+N)),e2=$>0?W:Math.min(Math.max(-W,-q),W),l2=-$*$+e2*(e2+2*q)+X);else e2=U>0?-W:W,$=Math.max(0,-(U*e2+N)),l2=-$*$+e2*(e2+2*q)+X;return R&&R.copy(this.direction).multiplyScalar($).add(this.origin),E&&E.copy(Sp).multiplyScalar(e2).add(bu),l2}intersectSphere(y,f){_o.subVectors(y.center,this.origin);const R=_o.dot(this.direction),E=_o.dot(_o)-R*R,W=y.radius*y.radius;if(E>W)return null;const U=Math.sqrt(W-E),N=R-U,q=R+U;return N<0&&q<0?null:N<0?this.at(q,f):this.at(N,f)}intersectsSphere(y){return this.distanceSqToPoint(y.center)<=y.radius*y.radius}distanceToPlane(y){const f=y.normal.dot(this.direction);if(f===0)return y.distanceToPoint(this.origin)===0?0:null;const R=-(this.origin.dot(y.normal)+y.constant)/f;return R>=0?R:null}intersectPlane(y,f){const R=this.distanceToPlane(y);return R===null?null:this.at(R,f)}intersectsPlane(y){const f=y.distanceToPoint(this.origin);return f===0||y.normal.dot(this.direction)*f<0}intersectBox(y,f){let R,E,W,U,N,q;const X=1/this.direction.x,K=1/this.direction.y,$=1/this.direction.z,e2=this.origin;return X>=0?(R=(y.min.x-e2.x)*X,E=(y.max.x-e2.x)*X):(R=(y.max.x-e2.x)*X,E=(y.min.x-e2.x)*X),K>=0?(W=(y.min.y-e2.y)*K,U=(y.max.y-e2.y)*K):(W=(y.max.y-e2.y)*K,U=(y.min.y-e2.y)*K),R>U||W>E||((W>R||R!==R)&&(R=W),(U<E||E!==E)&&(E=U),$>=0?(N=(y.min.z-e2.z)*$,q=(y.max.z-e2.z)*$):(N=(y.max.z-e2.z)*$,q=(y.min.z-e2.z)*$),R>q||N>E)||((N>R||R!==R)&&(R=N),(q<E||E!==E)&&(E=q),E<0)?null:this.at(R>=0?R:E,f)}intersectsBox(y){return this.intersectBox(y,_o)!==null}intersectTriangle(y,f,R,E,W){vu.subVectors(f,y),xp.subVectors(R,y),ku.crossVectors(vu,xp);let U=this.direction.dot(ku),N;if(U>0){if(E)return null;N=1}else if(U<0)N=-1,U=-U;else return null;Oo.subVectors(this.origin,y);const q=N*this.direction.dot(xp.crossVectors(Oo,xp));if(q<0)return null;const X=N*this.direction.dot(vu.cross(Oo));if(X<0||q+X>U)return null;const K=-N*Oo.dot(ku);return K<0?null:this.at(K/U,W)}applyMatrix4(y){return this.origin.applyMatrix4(y),this.direction.transformDirection(y),this}equals(y){return y.origin.equals(this.origin)&&y.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class s0{constructor(){s0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(y,f,R,E,W,U,N,q,X,K,$,e2,l2,a2,o2,t2){const f2=this.elements;return f2[0]=y,f2[4]=f,f2[8]=R,f2[12]=E,f2[1]=W,f2[5]=U,f2[9]=N,f2[13]=q,f2[2]=X,f2[6]=K,f2[10]=$,f2[14]=e2,f2[3]=l2,f2[7]=a2,f2[11]=o2,f2[15]=t2,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s0().fromArray(this.elements)}copy(y){const f=this.elements,R=y.elements;return f[0]=R[0],f[1]=R[1],f[2]=R[2],f[3]=R[3],f[4]=R[4],f[5]=R[5],f[6]=R[6],f[7]=R[7],f[8]=R[8],f[9]=R[9],f[10]=R[10],f[11]=R[11],f[12]=R[12],f[13]=R[13],f[14]=R[14],f[15]=R[15],this}copyPosition(y){const f=this.elements,R=y.elements;return f[12]=R[12],f[13]=R[13],f[14]=R[14],this}setFromMatrix3(y){const f=y.elements;return this.set(f[0],f[3],f[6],0,f[1],f[4],f[7],0,f[2],f[5],f[8],0,0,0,0,1),this}extractBasis(y,f,R){return y.setFromMatrixColumn(this,0),f.setFromMatrixColumn(this,1),R.setFromMatrixColumn(this,2),this}makeBasis(y,f,R){return this.set(y.x,f.x,R.x,0,y.y,f.y,R.y,0,y.z,f.z,R.z,0,0,0,0,1),this}extractRotation(y){const f=this.elements,R=y.elements,E=1/us.setFromMatrixColumn(y,0).length(),W=1/us.setFromMatrixColumn(y,1).length(),U=1/us.setFromMatrixColumn(y,2).length();return f[0]=R[0]*E,f[1]=R[1]*E,f[2]=R[2]*E,f[3]=0,f[4]=R[4]*W,f[5]=R[5]*W,f[6]=R[6]*W,f[7]=0,f[8]=R[8]*U,f[9]=R[9]*U,f[10]=R[10]*U,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,this}makeRotationFromEuler(y){const f=this.elements,R=y.x,E=y.y,W=y.z,U=Math.cos(R),N=Math.sin(R),q=Math.cos(E),X=Math.sin(E),K=Math.cos(W),$=Math.sin(W);if(y.order==="XYZ"){const e2=U*K,l2=U*$,a2=N*K,o2=N*$;f[0]=q*K,f[4]=-q*$,f[8]=X,f[1]=l2+a2*X,f[5]=e2-o2*X,f[9]=-N*q,f[2]=o2-e2*X,f[6]=a2+l2*X,f[10]=U*q}else if(y.order==="YXZ"){const e2=q*K,l2=q*$,a2=X*K,o2=X*$;f[0]=e2+o2*N,f[4]=a2*N-l2,f[8]=U*X,f[1]=U*$,f[5]=U*K,f[9]=-N,f[2]=l2*N-a2,f[6]=o2+e2*N,f[10]=U*q}else if(y.order==="ZXY"){const e2=q*K,l2=q*$,a2=X*K,o2=X*$;f[0]=e2-o2*N,f[4]=-U*$,f[8]=a2+l2*N,f[1]=l2+a2*N,f[5]=U*K,f[9]=o2-e2*N,f[2]=-U*X,f[6]=N,f[10]=U*q}else if(y.order==="ZYX"){const e2=U*K,l2=U*$,a2=N*K,o2=N*$;f[0]=q*K,f[4]=a2*X-l2,f[8]=e2*X+o2,f[1]=q*$,f[5]=o2*X+e2,f[9]=l2*X-a2,f[2]=-X,f[6]=N*q,f[10]=U*q}else if(y.order==="YZX"){const e2=U*q,l2=U*X,a2=N*q,o2=N*X;f[0]=q*K,f[4]=o2-e2*$,f[8]=a2*$+l2,f[1]=$,f[5]=U*K,f[9]=-N*K,f[2]=-X*K,f[6]=l2*$+a2,f[10]=e2-o2*$}else if(y.order==="XZY"){const e2=U*q,l2=U*X,a2=N*q,o2=N*X;f[0]=q*K,f[4]=-$,f[8]=X*K,f[1]=e2*$+o2,f[5]=U*K,f[9]=l2*$-a2,f[2]=a2*$-l2,f[6]=N*K,f[10]=o2*$+e2}return f[3]=0,f[7]=0,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,this}makeRotationFromQuaternion(y){return this.compose(Hs2,y,Vs2)}lookAt(y,f,R){const E=this.elements;return yi.subVectors(y,f),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Go.crossVectors(R,yi),Go.lengthSq()===0&&(Math.abs(R.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Go.crossVectors(R,yi)),Go.normalize(),wp.crossVectors(yi,Go),E[0]=Go.x,E[4]=wp.x,E[8]=yi.x,E[1]=Go.y,E[5]=wp.y,E[9]=yi.y,E[2]=Go.z,E[6]=wp.z,E[10]=yi.z,this}multiply(y){return this.multiplyMatrices(this,y)}premultiply(y){return this.multiplyMatrices(y,this)}multiplyMatrices(y,f){const R=y.elements,E=f.elements,W=this.elements,U=R[0],N=R[4],q=R[8],X=R[12],K=R[1],$=R[5],e2=R[9],l2=R[13],a2=R[2],o2=R[6],t2=R[10],f2=R[14],v2=R[3],M2=R[7],S2=R[11],A2=R[15],I2=E[0],N2=E[4],u2=E[8],T2=E[12],Z2=E[1],z2=E[5],Ft=E[9],yt=E[13],G2=E[2],nt=E[6],X2=E[10],st=E[14],ot=E[3],Q2=E[7],J2=E[11],St=E[15];return W[0]=U*I2+N*Z2+q*G2+X*ot,W[4]=U*N2+N*z2+q*nt+X*Q2,W[8]=U*u2+N*Ft+q*X2+X*J2,W[12]=U*T2+N*yt+q*st+X*St,W[1]=K*I2+$*Z2+e2*G2+l2*ot,W[5]=K*N2+$*z2+e2*nt+l2*Q2,W[9]=K*u2+$*Ft+e2*X2+l2*J2,W[13]=K*T2+$*yt+e2*st+l2*St,W[2]=a2*I2+o2*Z2+t2*G2+f2*ot,W[6]=a2*N2+o2*z2+t2*nt+f2*Q2,W[10]=a2*u2+o2*Ft+t2*X2+f2*J2,W[14]=a2*T2+o2*yt+t2*st+f2*St,W[3]=v2*I2+M2*Z2+S2*G2+A2*ot,W[7]=v2*N2+M2*z2+S2*nt+A2*Q2,W[11]=v2*u2+M2*Ft+S2*X2+A2*J2,W[15]=v2*T2+M2*yt+S2*st+A2*St,this}multiplyScalar(y){const f=this.elements;return f[0]*=y,f[4]*=y,f[8]*=y,f[12]*=y,f[1]*=y,f[5]*=y,f[9]*=y,f[13]*=y,f[2]*=y,f[6]*=y,f[10]*=y,f[14]*=y,f[3]*=y,f[7]*=y,f[11]*=y,f[15]*=y,this}determinant(){const y=this.elements,f=y[0],R=y[4],E=y[8],W=y[12],U=y[1],N=y[5],q=y[9],X=y[13],K=y[2],$=y[6],e2=y[10],l2=y[14],a2=y[3],o2=y[7],t2=y[11],f2=y[15];return a2*(+W*q*$-E*X*$-W*N*e2+R*X*e2+E*N*l2-R*q*l2)+o2*(+f*q*l2-f*X*e2+W*U*e2-E*U*l2+E*X*K-W*q*K)+t2*(+f*X*$-f*N*l2-W*U*$+R*U*l2+W*N*K-R*X*K)+f2*(-E*N*K-f*q*$+f*N*e2+E*U*$-R*U*e2+R*q*K)}transpose(){const y=this.elements;let f;return f=y[1],y[1]=y[4],y[4]=f,f=y[2],y[2]=y[8],y[8]=f,f=y[6],y[6]=y[9],y[9]=f,f=y[3],y[3]=y[12],y[12]=f,f=y[7],y[7]=y[13],y[13]=f,f=y[11],y[11]=y[14],y[14]=f,this}setPosition(y,f,R){const E=this.elements;return y.isVector3?(E[12]=y.x,E[13]=y.y,E[14]=y.z):(E[12]=y,E[13]=f,E[14]=R),this}invert(){const y=this.elements,f=y[0],R=y[1],E=y[2],W=y[3],U=y[4],N=y[5],q=y[6],X=y[7],K=y[8],$=y[9],e2=y[10],l2=y[11],a2=y[12],o2=y[13],t2=y[14],f2=y[15],v2=$*t2*X-o2*e2*X+o2*q*l2-N*t2*l2-$*q*f2+N*e2*f2,M2=a2*e2*X-K*t2*X-a2*q*l2+U*t2*l2+K*q*f2-U*e2*f2,S2=K*o2*X-a2*$*X+a2*N*l2-U*o2*l2-K*N*f2+U*$*f2,A2=a2*$*q-K*o2*q-a2*N*e2+U*o2*e2+K*N*t2-U*$*t2,I2=f*v2+R*M2+E*S2+W*A2;if(I2===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N2=1/I2;return y[0]=v2*N2,y[1]=(o2*e2*W-$*t2*W-o2*E*l2+R*t2*l2+$*E*f2-R*e2*f2)*N2,y[2]=(N*t2*W-o2*q*W+o2*E*X-R*t2*X-N*E*f2+R*q*f2)*N2,y[3]=($*q*W-N*e2*W-$*E*X+R*e2*X+N*E*l2-R*q*l2)*N2,y[4]=M2*N2,y[5]=(K*t2*W-a2*e2*W+a2*E*l2-f*t2*l2-K*E*f2+f*e2*f2)*N2,y[6]=(a2*q*W-U*t2*W-a2*E*X+f*t2*X+U*E*f2-f*q*f2)*N2,y[7]=(U*e2*W-K*q*W+K*E*X-f*e2*X-U*E*l2+f*q*l2)*N2,y[8]=S2*N2,y[9]=(a2*$*W-K*o2*W-a2*R*l2+f*o2*l2+K*R*f2-f*$*f2)*N2,y[10]=(U*o2*W-a2*N*W+a2*R*X-f*o2*X-U*R*f2+f*N*f2)*N2,y[11]=(K*N*W-U*$*W-K*R*X+f*$*X+U*R*l2-f*N*l2)*N2,y[12]=A2*N2,y[13]=(K*o2*E-a2*$*E+a2*R*e2-f*o2*e2-K*R*t2+f*$*t2)*N2,y[14]=(a2*N*E-U*o2*E-a2*R*q+f*o2*q+U*R*t2-f*N*t2)*N2,y[15]=(U*$*E-K*N*E+K*R*q-f*$*q-U*R*e2+f*N*e2)*N2,this}scale(y){const f=this.elements,R=y.x,E=y.y,W=y.z;return f[0]*=R,f[4]*=E,f[8]*=W,f[1]*=R,f[5]*=E,f[9]*=W,f[2]*=R,f[6]*=E,f[10]*=W,f[3]*=R,f[7]*=E,f[11]*=W,this}getMaxScaleOnAxis(){const y=this.elements,f=y[0]*y[0]+y[1]*y[1]+y[2]*y[2],R=y[4]*y[4]+y[5]*y[5]+y[6]*y[6],E=y[8]*y[8]+y[9]*y[9]+y[10]*y[10];return Math.sqrt(Math.max(f,R,E))}makeTranslation(y,f,R){return this.set(1,0,0,y,0,1,0,f,0,0,1,R,0,0,0,1),this}makeRotationX(y){const f=Math.cos(y),R=Math.sin(y);return this.set(1,0,0,0,0,f,-R,0,0,R,f,0,0,0,0,1),this}makeRotationY(y){const f=Math.cos(y),R=Math.sin(y);return this.set(f,0,R,0,0,1,0,0,-R,0,f,0,0,0,0,1),this}makeRotationZ(y){const f=Math.cos(y),R=Math.sin(y);return this.set(f,-R,0,0,R,f,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(y,f){const R=Math.cos(f),E=Math.sin(f),W=1-R,U=y.x,N=y.y,q=y.z,X=W*U,K=W*N;return this.set(X*U+R,X*N-E*q,X*q+E*N,0,X*N+E*q,K*N+R,K*q-E*U,0,X*q-E*N,K*q+E*U,W*q*q+R,0,0,0,0,1),this}makeScale(y,f,R){return this.set(y,0,0,0,0,f,0,0,0,0,R,0,0,0,0,1),this}makeShear(y,f,R,E,W,U){return this.set(1,R,W,0,y,1,U,0,f,E,1,0,0,0,0,1),this}compose(y,f,R){const E=this.elements,W=f._x,U=f._y,N=f._z,q=f._w,X=W+W,K=U+U,$=N+N,e2=W*X,l2=W*K,a2=W*$,o2=U*K,t2=U*$,f2=N*$,v2=q*X,M2=q*K,S2=q*$,A2=R.x,I2=R.y,N2=R.z;return E[0]=(1-(o2+f2))*A2,E[1]=(l2+S2)*A2,E[2]=(a2-M2)*A2,E[3]=0,E[4]=(l2-S2)*I2,E[5]=(1-(e2+f2))*I2,E[6]=(t2+v2)*I2,E[7]=0,E[8]=(a2+M2)*N2,E[9]=(t2-v2)*N2,E[10]=(1-(e2+o2))*N2,E[11]=0,E[12]=y.x,E[13]=y.y,E[14]=y.z,E[15]=1,this}decompose(y,f,R){const E=this.elements;let W=us.set(E[0],E[1],E[2]).length();const U=us.set(E[4],E[5],E[6]).length(),N=us.set(E[8],E[9],E[10]).length();this.determinant()<0&&(W=-W),y.x=E[12],y.y=E[13],y.z=E[14],sr.copy(this);const X=1/W,K=1/U,$=1/N;return sr.elements[0]*=X,sr.elements[1]*=X,sr.elements[2]*=X,sr.elements[4]*=K,sr.elements[5]*=K,sr.elements[6]*=K,sr.elements[8]*=$,sr.elements[9]*=$,sr.elements[10]*=$,f.setFromRotationMatrix(sr),R.x=W,R.y=U,R.z=N,this}makePerspective(y,f,R,E,W,U){const N=this.elements,q=2*W/(f-y),X=2*W/(R-E),K=(f+y)/(f-y),$=(R+E)/(R-E),e2=-(U+W)/(U-W),l2=-2*U*W/(U-W);return N[0]=q,N[4]=0,N[8]=K,N[12]=0,N[1]=0,N[5]=X,N[9]=$,N[13]=0,N[2]=0,N[6]=0,N[10]=e2,N[14]=l2,N[3]=0,N[7]=0,N[11]=-1,N[15]=0,this}makeOrthographic(y,f,R,E,W,U){const N=this.elements,q=1/(f-y),X=1/(R-E),K=1/(U-W),$=(f+y)*q,e2=(R+E)*X,l2=(U+W)*K;return N[0]=2*q,N[4]=0,N[8]=0,N[12]=-$,N[1]=0,N[5]=2*X,N[9]=0,N[13]=-e2,N[2]=0,N[6]=0,N[10]=-2*K,N[14]=-l2,N[3]=0,N[7]=0,N[11]=0,N[15]=1,this}equals(y){const f=this.elements,R=y.elements;for(let E=0;E<16;E++)if(f[E]!==R[E])return!1;return!0}fromArray(y,f=0){for(let R=0;R<16;R++)this.elements[R]=y[R+f];return this}toArray(y=[],f=0){const R=this.elements;return y[f]=R[0],y[f+1]=R[1],y[f+2]=R[2],y[f+3]=R[3],y[f+4]=R[4],y[f+5]=R[5],y[f+6]=R[6],y[f+7]=R[7],y[f+8]=R[8],y[f+9]=R[9],y[f+10]=R[10],y[f+11]=R[11],y[f+12]=R[12],y[f+13]=R[13],y[f+14]=R[14],y[f+15]=R[15],y}}const us=new W2,sr=new s0,Hs2=new W2(0,0,0),Vs2=new W2(1,1,1),Go=new W2,wp=new W2,yi=new W2,Vj=new s0,zj=new R1;class H_{constructor(y=0,f=0,R=0,E=H_.DefaultOrder){this.isEuler=!0,this._x=y,this._y=f,this._z=R,this._order=E}get x(){return this._x}set x(y){this._x=y,this._onChangeCallback()}get y(){return this._y}set y(y){this._y=y,this._onChangeCallback()}get z(){return this._z}set z(y){this._z=y,this._onChangeCallback()}get order(){return this._order}set order(y){this._order=y,this._onChangeCallback()}set(y,f,R,E=this._order){return this._x=y,this._y=f,this._z=R,this._order=E,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(y){return this._x=y._x,this._y=y._y,this._z=y._z,this._order=y._order,this._onChangeCallback(),this}setFromRotationMatrix(y,f=this._order,R=!0){const E=y.elements,W=E[0],U=E[4],N=E[8],q=E[1],X=E[5],K=E[9],$=E[2],e2=E[6],l2=E[10];switch(f){case"XYZ":this._y=Math.asin(fi(N,-1,1)),Math.abs(N)<.9999999?(this._x=Math.atan2(-K,l2),this._z=Math.atan2(-U,W)):(this._x=Math.atan2(e2,X),this._z=0);break;case"YXZ":this._x=Math.asin(-fi(K,-1,1)),Math.abs(K)<.9999999?(this._y=Math.atan2(N,l2),this._z=Math.atan2(q,X)):(this._y=Math.atan2(-$,W),this._z=0);break;case"ZXY":this._x=Math.asin(fi(e2,-1,1)),Math.abs(e2)<.9999999?(this._y=Math.atan2(-$,l2),this._z=Math.atan2(-U,X)):(this._y=0,this._z=Math.atan2(q,W));break;case"ZYX":this._y=Math.asin(-fi($,-1,1)),Math.abs($)<.9999999?(this._x=Math.atan2(e2,l2),this._z=Math.atan2(q,W)):(this._x=0,this._z=Math.atan2(-U,X));break;case"YZX":this._z=Math.asin(fi(q,-1,1)),Math.abs(q)<.9999999?(this._x=Math.atan2(-K,X),this._y=Math.atan2(-$,W)):(this._x=0,this._y=Math.atan2(N,l2));break;case"XZY":this._z=Math.asin(-fi(U,-1,1)),Math.abs(U)<.9999999?(this._x=Math.atan2(e2,X),this._y=Math.atan2(N,W)):(this._x=Math.atan2(-K,l2),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+f)}return this._order=f,R===!0&&this._onChangeCallback(),this}setFromQuaternion(y,f,R){return Vj.makeRotationFromQuaternion(y),this.setFromRotationMatrix(Vj,f,R)}setFromVector3(y,f=this._order){return this.set(y.x,y.y,y.z,f)}reorder(y){return zj.setFromEuler(this),this.setFromQuaternion(zj,y)}equals(y){return y._x===this._x&&y._y===this._y&&y._z===this._z&&y._order===this._order}fromArray(y){return this._x=y[0],this._y=y[1],this._z=y[2],y[3]!==void 0&&(this._order=y[3]),this._onChangeCallback(),this}toArray(y=[],f=0){return y[f]=this._x,y[f+1]=this._y,y[f+2]=this._z,y[f+3]=this._order,y}_onChange(y){return this._onChangeCallback=y,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}H_.DefaultOrder="XYZ";H_.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $u{constructor(){this.mask=1}set(y){this.mask=(1<<y|0)>>>0}enable(y){this.mask|=1<<y|0}enableAll(){this.mask=-1}toggle(y){this.mask^=1<<y|0}disable(y){this.mask&=~(1<<y|0)}disableAll(){this.mask=0}test(y){return(this.mask&y.mask)!==0}isEnabled(y){return(this.mask&(1<<y|0))!==0}}let zs2=0;const Uj=new W2,ms=new R1,lo=new s0,Mp=new W2,E_=new W2,Us2=new W2,Qs2=new R1,Qj=new W2(1,0,0),Yj=new W2(0,1,0),Zj=new W2(0,0,1),Ys2={type:"added"},Xj={type:"removed"};class ui extends I1{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zs2++}),this.uuid=G_(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DefaultUp.clone();const y=new W2,f=new H_,R=new R1,E=new W2(1,1,1);function W(){R.setFromEuler(f,!1)}function U(){f.setFromQuaternion(R,void 0,!1)}f._onChange(W),R._onChange(U),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:y},rotation:{configurable:!0,enumerable:!0,value:f},quaternion:{configurable:!0,enumerable:!0,value:R},scale:{configurable:!0,enumerable:!0,value:E},modelViewMatrix:{value:new s0},normalMatrix:{value:new Zi}}),this.matrix=new s0,this.matrixWorld=new s0,this.matrixAutoUpdate=ui.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(y){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(y),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(y){return this.quaternion.premultiply(y),this}setRotationFromAxisAngle(y,f){this.quaternion.setFromAxisAngle(y,f)}setRotationFromEuler(y){this.quaternion.setFromEuler(y,!0)}setRotationFromMatrix(y){this.quaternion.setFromRotationMatrix(y)}setRotationFromQuaternion(y){this.quaternion.copy(y)}rotateOnAxis(y,f){return ms.setFromAxisAngle(y,f),this.quaternion.multiply(ms),this}rotateOnWorldAxis(y,f){return ms.setFromAxisAngle(y,f),this.quaternion.premultiply(ms),this}rotateX(y){return this.rotateOnAxis(Qj,y)}rotateY(y){return this.rotateOnAxis(Yj,y)}rotateZ(y){return this.rotateOnAxis(Zj,y)}translateOnAxis(y,f){return Uj.copy(y).applyQuaternion(this.quaternion),this.position.add(Uj.multiplyScalar(f)),this}translateX(y){return this.translateOnAxis(Qj,y)}translateY(y){return this.translateOnAxis(Yj,y)}translateZ(y){return this.translateOnAxis(Zj,y)}localToWorld(y){return y.applyMatrix4(this.matrixWorld)}worldToLocal(y){return y.applyMatrix4(lo.copy(this.matrixWorld).invert())}lookAt(y,f,R){y.isVector3?Mp.copy(y):Mp.set(y,f,R);const E=this.parent;this.updateWorldMatrix(!0,!1),E_.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lo.lookAt(E_,Mp,this.up):lo.lookAt(Mp,E_,this.up),this.quaternion.setFromRotationMatrix(lo),E&&(lo.extractRotation(E.matrixWorld),ms.setFromRotationMatrix(lo),this.quaternion.premultiply(ms.invert()))}add(y){if(arguments.length>1){for(let f=0;f<arguments.length;f++)this.add(arguments[f]);return this}return y===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",y),this):(y&&y.isObject3D?(y.parent!==null&&y.parent.remove(y),y.parent=this,this.children.push(y),y.dispatchEvent(Ys2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",y),this)}remove(y){if(arguments.length>1){for(let R=0;R<arguments.length;R++)this.remove(arguments[R]);return this}const f=this.children.indexOf(y);return f!==-1&&(y.parent=null,this.children.splice(f,1),y.dispatchEvent(Xj)),this}removeFromParent(){const y=this.parent;return y!==null&&y.remove(this),this}clear(){for(let y=0;y<this.children.length;y++){const f=this.children[y];f.parent=null,f.dispatchEvent(Xj)}return this.children.length=0,this}attach(y){return this.updateWorldMatrix(!0,!1),lo.copy(this.matrixWorld).invert(),y.parent!==null&&(y.parent.updateWorldMatrix(!0,!1),lo.multiply(y.parent.matrixWorld)),y.applyMatrix4(lo),this.add(y),y.updateWorldMatrix(!1,!0),this}getObjectById(y){return this.getObjectByProperty("id",y)}getObjectByName(y){return this.getObjectByProperty("name",y)}getObjectByProperty(y,f){if(this[y]===f)return this;for(let R=0,E=this.children.length;R<E;R++){const U=this.children[R].getObjectByProperty(y,f);if(U!==void 0)return U}}getWorldPosition(y){return this.updateWorldMatrix(!0,!1),y.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(y){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(E_,y,Us2),y}getWorldScale(y){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(E_,Qs2,y),y}getWorldDirection(y){this.updateWorldMatrix(!0,!1);const f=this.matrixWorld.elements;return y.set(f[8],f[9],f[10]).normalize()}raycast(){}traverse(y){y(this);const f=this.children;for(let R=0,E=f.length;R<E;R++)f[R].traverse(y)}traverseVisible(y){if(this.visible===!1)return;y(this);const f=this.children;for(let R=0,E=f.length;R<E;R++)f[R].traverseVisible(y)}traverseAncestors(y){const f=this.parent;f!==null&&(y(f),f.traverseAncestors(y))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(y){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||y)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,y=!0);const f=this.children;for(let R=0,E=f.length;R<E;R++)f[R].updateMatrixWorld(y)}updateWorldMatrix(y,f){const R=this.parent;if(y===!0&&R!==null&&R.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),f===!0){const E=this.children;for(let W=0,U=E.length;W<U;W++)E[W].updateWorldMatrix(!1,!0)}}toJSON(y){const f=y===void 0||typeof y=="string",R={};f&&(y={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},R.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const E={};E.uuid=this.uuid,E.type=this.type,this.name!==""&&(E.name=this.name),this.castShadow===!0&&(E.castShadow=!0),this.receiveShadow===!0&&(E.receiveShadow=!0),this.visible===!1&&(E.visible=!1),this.frustumCulled===!1&&(E.frustumCulled=!1),this.renderOrder!==0&&(E.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(E.userData=this.userData),E.layers=this.layers.mask,E.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(E.matrixAutoUpdate=!1),this.isInstancedMesh&&(E.type="InstancedMesh",E.count=this.count,E.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(E.instanceColor=this.instanceColor.toJSON()));function W(N,q){return N[q.uuid]===void 0&&(N[q.uuid]=q.toJSON(y)),q.uuid}if(this.isScene)this.background&&(this.background.isColor?E.background=this.background.toJSON():this.background.isTexture&&(E.background=this.background.toJSON(y).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(E.environment=this.environment.toJSON(y).uuid);else if(this.isMesh||this.isLine||this.isPoints){E.geometry=W(y.geometries,this.geometry);const N=this.geometry.parameters;if(N!==void 0&&N.shapes!==void 0){const q=N.shapes;if(Array.isArray(q))for(let X=0,K=q.length;X<K;X++){const $=q[X];W(y.shapes,$)}else W(y.shapes,q)}}if(this.isSkinnedMesh&&(E.bindMode=this.bindMode,E.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(W(y.skeletons,this.skeleton),E.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const N=[];for(let q=0,X=this.material.length;q<X;q++)N.push(W(y.materials,this.material[q]));E.material=N}else E.material=W(y.materials,this.material);if(this.children.length>0){E.children=[];for(let N=0;N<this.children.length;N++)E.children.push(this.children[N].toJSON(y).object)}if(this.animations.length>0){E.animations=[];for(let N=0;N<this.animations.length;N++){const q=this.animations[N];E.animations.push(W(y.animations,q))}}if(f){const N=U(y.geometries),q=U(y.materials),X=U(y.textures),K=U(y.images),$=U(y.shapes),e2=U(y.skeletons),l2=U(y.animations),a2=U(y.nodes);N.length>0&&(R.geometries=N),q.length>0&&(R.materials=q),X.length>0&&(R.textures=X),K.length>0&&(R.images=K),$.length>0&&(R.shapes=$),e2.length>0&&(R.skeletons=e2),l2.length>0&&(R.animations=l2),a2.length>0&&(R.nodes=a2)}return R.object=E,R;function U(N){const q=[];for(const X in N){const K=N[X];delete K.metadata,q.push(K)}return q}}clone(y){return new this.constructor().copy(this,y)}copy(y,f=!0){if(this.name=y.name,this.up.copy(y.up),this.position.copy(y.position),this.rotation.order=y.rotation.order,this.quaternion.copy(y.quaternion),this.scale.copy(y.scale),this.matrix.copy(y.matrix),this.matrixWorld.copy(y.matrixWorld),this.matrixAutoUpdate=y.matrixAutoUpdate,this.matrixWorldNeedsUpdate=y.matrixWorldNeedsUpdate,this.layers.mask=y.layers.mask,this.visible=y.visible,this.castShadow=y.castShadow,this.receiveShadow=y.receiveShadow,this.frustumCulled=y.frustumCulled,this.renderOrder=y.renderOrder,this.userData=JSON.parse(JSON.stringify(y.userData)),f===!0)for(let R=0;R<y.children.length;R++){const E=y.children[R];this.add(E.clone())}return this}}ui.DefaultUp=new W2(0,1,0);ui.DefaultMatrixAutoUpdate=!0;const _r=new W2,po=new W2,Cu=new W2,co=new W2,as=new W2,ds=new W2,qj=new W2,Su=new W2,xu=new W2,wu=new W2;class uo{constructor(y=new W2,f=new W2,R=new W2){this.a=y,this.b=f,this.c=R}static getNormal(y,f,R,E){E.subVectors(R,f),_r.subVectors(y,f),E.cross(_r);const W=E.lengthSq();return W>0?E.multiplyScalar(1/Math.sqrt(W)):E.set(0,0,0)}static getBarycoord(y,f,R,E,W){_r.subVectors(E,f),po.subVectors(R,f),Cu.subVectors(y,f);const U=_r.dot(_r),N=_r.dot(po),q=_r.dot(Cu),X=po.dot(po),K=po.dot(Cu),$=U*X-N*N;if($===0)return W.set(-2,-1,-1);const e2=1/$,l2=(X*q-N*K)*e2,a2=(U*K-N*q)*e2;return W.set(1-l2-a2,a2,l2)}static containsPoint(y,f,R,E){return this.getBarycoord(y,f,R,E,co),co.x>=0&&co.y>=0&&co.x+co.y<=1}static getUV(y,f,R,E,W,U,N,q){return this.getBarycoord(y,f,R,E,co),q.set(0,0),q.addScaledVector(W,co.x),q.addScaledVector(U,co.y),q.addScaledVector(N,co.z),q}static isFrontFacing(y,f,R,E){return _r.subVectors(R,f),po.subVectors(y,f),_r.cross(po).dot(E)<0}set(y,f,R){return this.a.copy(y),this.b.copy(f),this.c.copy(R),this}setFromPointsAndIndices(y,f,R,E){return this.a.copy(y[f]),this.b.copy(y[R]),this.c.copy(y[E]),this}setFromAttributeAndIndices(y,f,R,E){return this.a.fromBufferAttribute(y,f),this.b.fromBufferAttribute(y,R),this.c.fromBufferAttribute(y,E),this}clone(){return new this.constructor().copy(this)}copy(y){return this.a.copy(y.a),this.b.copy(y.b),this.c.copy(y.c),this}getArea(){return _r.subVectors(this.c,this.b),po.subVectors(this.a,this.b),_r.cross(po).length()*.5}getMidpoint(y){return y.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(y){return uo.getNormal(this.a,this.b,this.c,y)}getPlane(y){return y.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(y,f){return uo.getBarycoord(y,this.a,this.b,this.c,f)}getUV(y,f,R,E,W){return uo.getUV(y,this.a,this.b,this.c,f,R,E,W)}containsPoint(y){return uo.containsPoint(y,this.a,this.b,this.c)}isFrontFacing(y){return uo.isFrontFacing(this.a,this.b,this.c,y)}intersectsBox(y){return y.intersectsTriangle(this)}closestPointToPoint(y,f){const R=this.a,E=this.b,W=this.c;let U,N;as.subVectors(E,R),ds.subVectors(W,R),Su.subVectors(y,R);const q=as.dot(Su),X=ds.dot(Su);if(q<=0&&X<=0)return f.copy(R);xu.subVectors(y,E);const K=as.dot(xu),$=ds.dot(xu);if(K>=0&&$<=K)return f.copy(E);const e2=q*$-K*X;if(e2<=0&&q>=0&&K<=0)return U=q/(q-K),f.copy(R).addScaledVector(as,U);wu.subVectors(y,W);const l2=as.dot(wu),a2=ds.dot(wu);if(a2>=0&&l2<=a2)return f.copy(W);const o2=l2*X-q*a2;if(o2<=0&&X>=0&&a2<=0)return N=X/(X-a2),f.copy(R).addScaledVector(ds,N);const t2=K*a2-l2*$;if(t2<=0&&$-K>=0&&l2-a2>=0)return qj.subVectors(W,E),N=($-K)/($-K+(l2-a2)),f.copy(E).addScaledVector(qj,N);const f2=1/(t2+o2+e2);return U=o2*f2,N=e2*f2,f.copy(R).addScaledVector(as,U).addScaledVector(ds,N)}equals(y){return y.a.equals(this.a)&&y.b.equals(this.b)&&y.c.equals(this.c)}}let Zs2=0;class V_ extends I1{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zs2++}),this.uuid=G_(),this.name="",this.type="Material",this.blending=Ss,this.side=W_,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=DL,this.blendDst=TL,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fs2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cu,this.stencilZFail=cu,this.stencilZPass=cu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(y){this._alphaTest>0!=y>0&&this.version++,this._alphaTest=y}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(y){if(y!==void 0)for(const f in y){const R=y[f];if(R===void 0){console.warn("THREE.Material: '"+f+"' parameter is undefined.");continue}if(f==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=R===Q12;continue}const E=this[f];if(E===void 0){console.warn("THREE."+this.type+": '"+f+"' is not a property of this material.");continue}E&&E.isColor?E.set(R):E&&E.isVector3&&R&&R.isVector3?E.copy(R):this[f]=R}}toJSON(y){const f=y===void 0||typeof y=="string";f&&(y={textures:{},images:{}});const R={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};R.uuid=this.uuid,R.type=this.type,this.name!==""&&(R.name=this.name),this.color&&this.color.isColor&&(R.color=this.color.getHex()),this.roughness!==void 0&&(R.roughness=this.roughness),this.metalness!==void 0&&(R.metalness=this.metalness),this.sheen!==void 0&&(R.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(R.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(R.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(R.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(R.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(R.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(R.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(R.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(R.shininess=this.shininess),this.clearcoat!==void 0&&(R.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(R.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(R.clearcoatMap=this.clearcoatMap.toJSON(y).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(R.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(y).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(R.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(y).uuid,R.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(R.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(R.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(R.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(R.iridescenceMap=this.iridescenceMap.toJSON(y).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(R.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(y).uuid),this.map&&this.map.isTexture&&(R.map=this.map.toJSON(y).uuid),this.matcap&&this.matcap.isTexture&&(R.matcap=this.matcap.toJSON(y).uuid),this.alphaMap&&this.alphaMap.isTexture&&(R.alphaMap=this.alphaMap.toJSON(y).uuid),this.lightMap&&this.lightMap.isTexture&&(R.lightMap=this.lightMap.toJSON(y).uuid,R.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(R.aoMap=this.aoMap.toJSON(y).uuid,R.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(R.bumpMap=this.bumpMap.toJSON(y).uuid,R.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(R.normalMap=this.normalMap.toJSON(y).uuid,R.normalMapType=this.normalMapType,R.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(R.displacementMap=this.displacementMap.toJSON(y).uuid,R.displacementScale=this.displacementScale,R.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(R.roughnessMap=this.roughnessMap.toJSON(y).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(R.metalnessMap=this.metalnessMap.toJSON(y).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(R.emissiveMap=this.emissiveMap.toJSON(y).uuid),this.specularMap&&this.specularMap.isTexture&&(R.specularMap=this.specularMap.toJSON(y).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(R.specularIntensityMap=this.specularIntensityMap.toJSON(y).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(R.specularColorMap=this.specularColorMap.toJSON(y).uuid),this.envMap&&this.envMap.isTexture&&(R.envMap=this.envMap.toJSON(y).uuid,this.combine!==void 0&&(R.combine=this.combine)),this.envMapIntensity!==void 0&&(R.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(R.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(R.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(R.gradientMap=this.gradientMap.toJSON(y).uuid),this.transmission!==void 0&&(R.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(R.transmissionMap=this.transmissionMap.toJSON(y).uuid),this.thickness!==void 0&&(R.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(R.thicknessMap=this.thicknessMap.toJSON(y).uuid),this.attenuationDistance!==void 0&&(R.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(R.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(R.size=this.size),this.shadowSide!==null&&(R.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(R.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(R.blending=this.blending),this.side!==W_&&(R.side=this.side),this.vertexColors&&(R.vertexColors=!0),this.opacity<1&&(R.opacity=this.opacity),this.transparent===!0&&(R.transparent=this.transparent),R.depthFunc=this.depthFunc,R.depthTest=this.depthTest,R.depthWrite=this.depthWrite,R.colorWrite=this.colorWrite,R.stencilWrite=this.stencilWrite,R.stencilWriteMask=this.stencilWriteMask,R.stencilFunc=this.stencilFunc,R.stencilRef=this.stencilRef,R.stencilFuncMask=this.stencilFuncMask,R.stencilFail=this.stencilFail,R.stencilZFail=this.stencilZFail,R.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(R.rotation=this.rotation),this.polygonOffset===!0&&(R.polygonOffset=!0),this.polygonOffsetFactor!==0&&(R.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(R.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(R.linewidth=this.linewidth),this.dashSize!==void 0&&(R.dashSize=this.dashSize),this.gapSize!==void 0&&(R.gapSize=this.gapSize),this.scale!==void 0&&(R.scale=this.scale),this.dithering===!0&&(R.dithering=!0),this.alphaTest>0&&(R.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(R.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(R.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(R.wireframe=this.wireframe),this.wireframeLinewidth>1&&(R.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(R.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(R.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(R.flatShading=this.flatShading),this.visible===!1&&(R.visible=!1),this.toneMapped===!1&&(R.toneMapped=!1),this.fog===!1&&(R.fog=!1),JSON.stringify(this.userData)!=="{}"&&(R.userData=this.userData);function E(W){const U=[];for(const N in W){const q=W[N];delete q.metadata,U.push(q)}return U}if(f){const W=E(y.textures),U=E(y.images);W.length>0&&(R.textures=W),U.length>0&&(R.images=U)}return R}clone(){return new this.constructor().copy(this)}copy(y){this.name=y.name,this.blending=y.blending,this.side=y.side,this.vertexColors=y.vertexColors,this.opacity=y.opacity,this.transparent=y.transparent,this.blendSrc=y.blendSrc,this.blendDst=y.blendDst,this.blendEquation=y.blendEquation,this.blendSrcAlpha=y.blendSrcAlpha,this.blendDstAlpha=y.blendDstAlpha,this.blendEquationAlpha=y.blendEquationAlpha,this.depthFunc=y.depthFunc,this.depthTest=y.depthTest,this.depthWrite=y.depthWrite,this.stencilWriteMask=y.stencilWriteMask,this.stencilFunc=y.stencilFunc,this.stencilRef=y.stencilRef,this.stencilFuncMask=y.stencilFuncMask,this.stencilFail=y.stencilFail,this.stencilZFail=y.stencilZFail,this.stencilZPass=y.stencilZPass,this.stencilWrite=y.stencilWrite;const f=y.clippingPlanes;let R=null;if(f!==null){const E=f.length;R=new Array(E);for(let W=0;W!==E;++W)R[W]=f[W].clone()}return this.clippingPlanes=R,this.clipIntersection=y.clipIntersection,this.clipShadows=y.clipShadows,this.shadowSide=y.shadowSide,this.colorWrite=y.colorWrite,this.precision=y.precision,this.polygonOffset=y.polygonOffset,this.polygonOffsetFactor=y.polygonOffsetFactor,this.polygonOffsetUnits=y.polygonOffsetUnits,this.dithering=y.dithering,this.alphaTest=y.alphaTest,this.alphaToCoverage=y.alphaToCoverage,this.premultipliedAlpha=y.premultipliedAlpha,this.visible=y.visible,this.toneMapped=y.toneMapped,this.userData=JSON.parse(JSON.stringify(y.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(y){y===!0&&this.version++}}class NL extends V_{constructor(y){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new an(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(y)}copy(y){return super.copy(y),this.color.copy(y.color),this.map=y.map,this.lightMap=y.lightMap,this.lightMapIntensity=y.lightMapIntensity,this.aoMap=y.aoMap,this.aoMapIntensity=y.aoMapIntensity,this.specularMap=y.specularMap,this.alphaMap=y.alphaMap,this.envMap=y.envMap,this.combine=y.combine,this.reflectivity=y.reflectivity,this.refractionRatio=y.refractionRatio,this.wireframe=y.wireframe,this.wireframeLinewidth=y.wireframeLinewidth,this.wireframeLinecap=y.wireframeLinecap,this.wireframeLinejoin=y.wireframeLinejoin,this.fog=y.fog,this}}const Jn=new W2,Rp=new we;class jr{constructor(y,f,R){if(Array.isArray(y))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=y,this.itemSize=f,this.count=y!==void 0?y.length/f:0,this.normalized=R===!0,this.usage=Fj,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(y){y===!0&&this.version++}setUsage(y){return this.usage=y,this}copy(y){return this.name=y.name,this.array=new y.array.constructor(y.array),this.itemSize=y.itemSize,this.count=y.count,this.normalized=y.normalized,this.usage=y.usage,this}copyAt(y,f,R){y*=this.itemSize,R*=f.itemSize;for(let E=0,W=this.itemSize;E<W;E++)this.array[y+E]=f.array[R+E];return this}copyArray(y){return this.array.set(y),this}copyColorsArray(y){const f=this.array;let R=0;for(let E=0,W=y.length;E<W;E++){let U=y[E];U===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",E),U=new an),f[R++]=U.r,f[R++]=U.g,f[R++]=U.b}return this}copyVector2sArray(y){const f=this.array;let R=0;for(let E=0,W=y.length;E<W;E++){let U=y[E];U===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",E),U=new we),f[R++]=U.x,f[R++]=U.y}return this}copyVector3sArray(y){const f=this.array;let R=0;for(let E=0,W=y.length;E<W;E++){let U=y[E];U===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",E),U=new W2),f[R++]=U.x,f[R++]=U.y,f[R++]=U.z}return this}copyVector4sArray(y){const f=this.array;let R=0;for(let E=0,W=y.length;E<W;E++){let U=y[E];U===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",E),U=new o0),f[R++]=U.x,f[R++]=U.y,f[R++]=U.z,f[R++]=U.w}return this}applyMatrix3(y){if(this.itemSize===2)for(let f=0,R=this.count;f<R;f++)Rp.fromBufferAttribute(this,f),Rp.applyMatrix3(y),this.setXY(f,Rp.x,Rp.y);else if(this.itemSize===3)for(let f=0,R=this.count;f<R;f++)Jn.fromBufferAttribute(this,f),Jn.applyMatrix3(y),this.setXYZ(f,Jn.x,Jn.y,Jn.z);return this}applyMatrix4(y){for(let f=0,R=this.count;f<R;f++)Jn.fromBufferAttribute(this,f),Jn.applyMatrix4(y),this.setXYZ(f,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(y){for(let f=0,R=this.count;f<R;f++)Jn.fromBufferAttribute(this,f),Jn.applyNormalMatrix(y),this.setXYZ(f,Jn.x,Jn.y,Jn.z);return this}transformDirection(y){for(let f=0,R=this.count;f<R;f++)Jn.fromBufferAttribute(this,f),Jn.transformDirection(y),this.setXYZ(f,Jn.x,Jn.y,Jn.z);return this}set(y,f=0){return this.array.set(y,f),this}getX(y){return this.array[y*this.itemSize]}setX(y,f){return this.array[y*this.itemSize]=f,this}getY(y){return this.array[y*this.itemSize+1]}setY(y,f){return this.array[y*this.itemSize+1]=f,this}getZ(y){return this.array[y*this.itemSize+2]}setZ(y,f){return this.array[y*this.itemSize+2]=f,this}getW(y){return this.array[y*this.itemSize+3]}setW(y,f){return this.array[y*this.itemSize+3]=f,this}setXY(y,f,R){return y*=this.itemSize,this.array[y+0]=f,this.array[y+1]=R,this}setXYZ(y,f,R,E){return y*=this.itemSize,this.array[y+0]=f,this.array[y+1]=R,this.array[y+2]=E,this}setXYZW(y,f,R,E,W){return y*=this.itemSize,this.array[y+0]=f,this.array[y+1]=R,this.array[y+2]=E,this.array[y+3]=W,this}onUpload(y){return this.onUploadCallback=y,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const y={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(y.name=this.name),this.usage!==Fj&&(y.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(y.updateRange=this.updateRange),y}}class HL extends jr{constructor(y,f,R){super(new Uint16Array(y),f,R)}}class VL extends jr{constructor(y,f,R){super(new Uint32Array(y),f,R)}}class Lr extends jr{constructor(y,f,R){super(new Float32Array(y),f,R)}}let Xs2=0;const Ui=new s0,Mu=new ui,hs=new W2,bi=new N_,j_=new N_,f0=new W2;class Uo extends I1{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xs2++}),this.uuid=G_(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(y){return Array.isArray(y)?this.index=new(jL(y)?VL:HL)(y,1):this.index=y,this}getAttribute(y){return this.attributes[y]}setAttribute(y,f){return this.attributes[y]=f,this}deleteAttribute(y){return delete this.attributes[y],this}hasAttribute(y){return this.attributes[y]!==void 0}addGroup(y,f,R=0){this.groups.push({start:y,count:f,materialIndex:R})}clearGroups(){this.groups=[]}setDrawRange(y,f){this.drawRange.start=y,this.drawRange.count=f}applyMatrix4(y){const f=this.attributes.position;f!==void 0&&(f.applyMatrix4(y),f.needsUpdate=!0);const R=this.attributes.normal;if(R!==void 0){const W=new Zi().getNormalMatrix(y);R.applyNormalMatrix(W),R.needsUpdate=!0}const E=this.attributes.tangent;return E!==void 0&&(E.transformDirection(y),E.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(y){return Ui.makeRotationFromQuaternion(y),this.applyMatrix4(Ui),this}rotateX(y){return Ui.makeRotationX(y),this.applyMatrix4(Ui),this}rotateY(y){return Ui.makeRotationY(y),this.applyMatrix4(Ui),this}rotateZ(y){return Ui.makeRotationZ(y),this.applyMatrix4(Ui),this}translate(y,f,R){return Ui.makeTranslation(y,f,R),this.applyMatrix4(Ui),this}scale(y,f,R){return Ui.makeScale(y,f,R),this.applyMatrix4(Ui),this}lookAt(y){return Mu.lookAt(y),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(y){const f=[];for(let R=0,E=y.length;R<E;R++){const W=y[R];f.push(W.x,W.y,W.z||0)}return this.setAttribute("position",new Lr(f,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new N_);const y=this.attributes.position,f=this.morphAttributes.position;if(y&&y.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W2(-1/0,-1/0,-1/0),new W2(1/0,1/0,1/0));return}if(y!==void 0){if(this.boundingBox.setFromBufferAttribute(y),f)for(let R=0,E=f.length;R<E;R++){const W=f[R];bi.setFromBufferAttribute(W),this.morphTargetsRelative?(f0.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(f0),f0.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(f0)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const y=this.attributes.position,f=this.morphAttributes.position;if(y&&y.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W2,1/0);return}if(y){const R=this.boundingSphere.center;if(bi.setFromBufferAttribute(y),f)for(let W=0,U=f.length;W<U;W++){const N=f[W];j_.setFromBufferAttribute(N),this.morphTargetsRelative?(f0.addVectors(bi.min,j_.min),bi.expandByPoint(f0),f0.addVectors(bi.max,j_.max),bi.expandByPoint(f0)):(bi.expandByPoint(j_.min),bi.expandByPoint(j_.max))}bi.getCenter(R);let E=0;for(let W=0,U=y.count;W<U;W++)f0.fromBufferAttribute(y,W),E=Math.max(E,R.distanceToSquared(f0));if(f)for(let W=0,U=f.length;W<U;W++){const N=f[W],q=this.morphTargetsRelative;for(let X=0,K=N.count;X<K;X++)f0.fromBufferAttribute(N,X),q&&(hs.fromBufferAttribute(y,X),f0.add(hs)),E=Math.max(E,R.distanceToSquared(f0))}this.boundingSphere.radius=Math.sqrt(E),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const y=this.index,f=this.attributes;if(y===null||f.position===void 0||f.normal===void 0||f.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const R=y.array,E=f.position.array,W=f.normal.array,U=f.uv.array,N=E.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jr(new Float32Array(4*N),4));const q=this.getAttribute("tangent").array,X=[],K=[];for(let Z2=0;Z2<N;Z2++)X[Z2]=new W2,K[Z2]=new W2;const $=new W2,e2=new W2,l2=new W2,a2=new we,o2=new we,t2=new we,f2=new W2,v2=new W2;function M2(Z2,z2,Ft){$.fromArray(E,Z2*3),e2.fromArray(E,z2*3),l2.fromArray(E,Ft*3),a2.fromArray(U,Z2*2),o2.fromArray(U,z2*2),t2.fromArray(U,Ft*2),e2.sub($),l2.sub($),o2.sub(a2),t2.sub(a2);const yt=1/(o2.x*t2.y-t2.x*o2.y);!isFinite(yt)||(f2.copy(e2).multiplyScalar(t2.y).addScaledVector(l2,-o2.y).multiplyScalar(yt),v2.copy(l2).multiplyScalar(o2.x).addScaledVector(e2,-t2.x).multiplyScalar(yt),X[Z2].add(f2),X[z2].add(f2),X[Ft].add(f2),K[Z2].add(v2),K[z2].add(v2),K[Ft].add(v2))}let S2=this.groups;S2.length===0&&(S2=[{start:0,count:R.length}]);for(let Z2=0,z2=S2.length;Z2<z2;++Z2){const Ft=S2[Z2],yt=Ft.start,G2=Ft.count;for(let nt=yt,X2=yt+G2;nt<X2;nt+=3)M2(R[nt+0],R[nt+1],R[nt+2])}const A2=new W2,I2=new W2,N2=new W2,u2=new W2;function T2(Z2){N2.fromArray(W,Z2*3),u2.copy(N2);const z2=X[Z2];A2.copy(z2),A2.sub(N2.multiplyScalar(N2.dot(z2))).normalize(),I2.crossVectors(u2,z2);const yt=I2.dot(K[Z2])<0?-1:1;q[Z2*4]=A2.x,q[Z2*4+1]=A2.y,q[Z2*4+2]=A2.z,q[Z2*4+3]=yt}for(let Z2=0,z2=S2.length;Z2<z2;++Z2){const Ft=S2[Z2],yt=Ft.start,G2=Ft.count;for(let nt=yt,X2=yt+G2;nt<X2;nt+=3)T2(R[nt+0]),T2(R[nt+1]),T2(R[nt+2])}}computeVertexNormals(){const y=this.index,f=this.getAttribute("position");if(f!==void 0){let R=this.getAttribute("normal");if(R===void 0)R=new jr(new Float32Array(f.count*3),3),this.setAttribute("normal",R);else for(let e2=0,l2=R.count;e2<l2;e2++)R.setXYZ(e2,0,0,0);const E=new W2,W=new W2,U=new W2,N=new W2,q=new W2,X=new W2,K=new W2,$=new W2;if(y)for(let e2=0,l2=y.count;e2<l2;e2+=3){const a2=y.getX(e2+0),o2=y.getX(e2+1),t2=y.getX(e2+2);E.fromBufferAttribute(f,a2),W.fromBufferAttribute(f,o2),U.fromBufferAttribute(f,t2),K.subVectors(U,W),$.subVectors(E,W),K.cross($),N.fromBufferAttribute(R,a2),q.fromBufferAttribute(R,o2),X.fromBufferAttribute(R,t2),N.add(K),q.add(K),X.add(K),R.setXYZ(a2,N.x,N.y,N.z),R.setXYZ(o2,q.x,q.y,q.z),R.setXYZ(t2,X.x,X.y,X.z)}else for(let e2=0,l2=f.count;e2<l2;e2+=3)E.fromBufferAttribute(f,e2+0),W.fromBufferAttribute(f,e2+1),U.fromBufferAttribute(f,e2+2),K.subVectors(U,W),$.subVectors(E,W),K.cross($),R.setXYZ(e2+0,K.x,K.y,K.z),R.setXYZ(e2+1,K.x,K.y,K.z),R.setXYZ(e2+2,K.x,K.y,K.z);this.normalizeNormals(),R.needsUpdate=!0}}merge(y,f){if(!(y&&y.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",y);return}f===void 0&&(f=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const R=this.attributes;for(const E in R){if(y.attributes[E]===void 0)continue;const U=R[E].array,N=y.attributes[E],q=N.array,X=N.itemSize*f,K=Math.min(q.length,U.length-X);for(let $=0,e2=X;$<K;$++,e2++)U[e2]=q[$]}return this}normalizeNormals(){const y=this.attributes.normal;for(let f=0,R=y.count;f<R;f++)f0.fromBufferAttribute(y,f),f0.normalize(),y.setXYZ(f,f0.x,f0.y,f0.z)}toNonIndexed(){function y(N,q){const X=N.array,K=N.itemSize,$=N.normalized,e2=new X.constructor(q.length*K);let l2=0,a2=0;for(let o2=0,t2=q.length;o2<t2;o2++){N.isInterleavedBufferAttribute?l2=q[o2]*N.data.stride+N.offset:l2=q[o2]*K;for(let f2=0;f2<K;f2++)e2[a2++]=X[l2++]}return new jr(e2,K,$)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const f=new Uo,R=this.index.array,E=this.attributes;for(const N in E){const q=E[N],X=y(q,R);f.setAttribute(N,X)}const W=this.morphAttributes;for(const N in W){const q=[],X=W[N];for(let K=0,$=X.length;K<$;K++){const e2=X[K],l2=y(e2,R);q.push(l2)}f.morphAttributes[N]=q}f.morphTargetsRelative=this.morphTargetsRelative;const U=this.groups;for(let N=0,q=U.length;N<q;N++){const X=U[N];f.addGroup(X.start,X.count,X.materialIndex)}return f}toJSON(){const y={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(y.uuid=this.uuid,y.type=this.type,this.name!==""&&(y.name=this.name),Object.keys(this.userData).length>0&&(y.userData=this.userData),this.parameters!==void 0){const q=this.parameters;for(const X in q)q[X]!==void 0&&(y[X]=q[X]);return y}y.data={attributes:{}};const f=this.index;f!==null&&(y.data.index={type:f.array.constructor.name,array:Array.prototype.slice.call(f.array)});const R=this.attributes;for(const q in R){const X=R[q];y.data.attributes[q]=X.toJSON(y.data)}const E={};let W=!1;for(const q in this.morphAttributes){const X=this.morphAttributes[q],K=[];for(let $=0,e2=X.length;$<e2;$++){const l2=X[$];K.push(l2.toJSON(y.data))}K.length>0&&(E[q]=K,W=!0)}W&&(y.data.morphAttributes=E,y.data.morphTargetsRelative=this.morphTargetsRelative);const U=this.groups;U.length>0&&(y.data.groups=JSON.parse(JSON.stringify(U)));const N=this.boundingSphere;return N!==null&&(y.data.boundingSphere={center:N.center.toArray(),radius:N.radius}),y}clone(){return new this.constructor().copy(this)}copy(y){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const f={};this.name=y.name;const R=y.index;R!==null&&this.setIndex(R.clone(f));const E=y.attributes;for(const X in E){const K=E[X];this.setAttribute(X,K.clone(f))}const W=y.morphAttributes;for(const X in W){const K=[],$=W[X];for(let e2=0,l2=$.length;e2<l2;e2++)K.push($[e2].clone(f));this.morphAttributes[X]=K}this.morphTargetsRelative=y.morphTargetsRelative;const U=y.groups;for(let X=0,K=U.length;X<K;X++){const $=U[X];this.addGroup($.start,$.count,$.materialIndex)}const N=y.boundingBox;N!==null&&(this.boundingBox=N.clone());const q=y.boundingSphere;return q!==null&&(this.boundingSphere=q.clone()),this.drawRange.start=y.drawRange.start,this.drawRange.count=y.drawRange.count,this.userData=y.userData,y.parameters!==void 0&&(this.parameters=Object.assign({},y.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jj=new s0,gs=new GL,Ru=new Ku,No=new W2,Ho=new W2,Vo=new W2,Du=new W2,Tu=new W2,Iu=new W2,Dp=new W2,Tp=new W2,Ip=new W2,Bp=new we,Pp=new we,Ep=new we,Bu=new W2,jp=new W2;class Xi extends ui{constructor(y=new Uo,f=new NL){super(),this.isMesh=!0,this.type="Mesh",this.geometry=y,this.material=f,this.updateMorphTargets()}copy(y,f){return super.copy(y,f),y.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=y.morphTargetInfluences.slice()),y.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},y.morphTargetDictionary)),this.material=y.material,this.geometry=y.geometry,this}updateMorphTargets(){const f=this.geometry.morphAttributes,R=Object.keys(f);if(R.length>0){const E=f[R[0]];if(E!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,U=E.length;W<U;W++){const N=E[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[N]=W}}}}raycast(y,f){const R=this.geometry,E=this.material,W=this.matrixWorld;if(E===void 0||(R.boundingSphere===null&&R.computeBoundingSphere(),Ru.copy(R.boundingSphere),Ru.applyMatrix4(W),y.ray.intersectsSphere(Ru)===!1)||(Jj.copy(W).invert(),gs.copy(y.ray).applyMatrix4(Jj),R.boundingBox!==null&&gs.intersectsBox(R.boundingBox)===!1))return;let U;const N=R.index,q=R.attributes.position,X=R.morphAttributes.position,K=R.morphTargetsRelative,$=R.attributes.uv,e2=R.attributes.uv2,l2=R.groups,a2=R.drawRange;if(N!==null)if(Array.isArray(E))for(let o2=0,t2=l2.length;o2<t2;o2++){const f2=l2[o2],v2=E[f2.materialIndex],M2=Math.max(f2.start,a2.start),S2=Math.min(N.count,Math.min(f2.start+f2.count,a2.start+a2.count));for(let A2=M2,I2=S2;A2<I2;A2+=3){const N2=N.getX(A2),u2=N.getX(A2+1),T2=N.getX(A2+2);U=Lp(this,v2,y,gs,q,X,K,$,e2,N2,u2,T2),U&&(U.faceIndex=Math.floor(A2/3),U.face.materialIndex=f2.materialIndex,f.push(U))}}else{const o2=Math.max(0,a2.start),t2=Math.min(N.count,a2.start+a2.count);for(let f2=o2,v2=t2;f2<v2;f2+=3){const M2=N.getX(f2),S2=N.getX(f2+1),A2=N.getX(f2+2);U=Lp(this,E,y,gs,q,X,K,$,e2,M2,S2,A2),U&&(U.faceIndex=Math.floor(f2/3),f.push(U))}}else if(q!==void 0)if(Array.isArray(E))for(let o2=0,t2=l2.length;o2<t2;o2++){const f2=l2[o2],v2=E[f2.materialIndex],M2=Math.max(f2.start,a2.start),S2=Math.min(q.count,Math.min(f2.start+f2.count,a2.start+a2.count));for(let A2=M2,I2=S2;A2<I2;A2+=3){const N2=A2,u2=A2+1,T2=A2+2;U=Lp(this,v2,y,gs,q,X,K,$,e2,N2,u2,T2),U&&(U.faceIndex=Math.floor(A2/3),U.face.materialIndex=f2.materialIndex,f.push(U))}}else{const o2=Math.max(0,a2.start),t2=Math.min(q.count,a2.start+a2.count);for(let f2=o2,v2=t2;f2<v2;f2+=3){const M2=f2,S2=f2+1,A2=f2+2;U=Lp(this,E,y,gs,q,X,K,$,e2,M2,S2,A2),U&&(U.faceIndex=Math.floor(f2/3),f.push(U))}}}}function qs2(H,y,f,R,E,W,U,N){let q;if(y.side===pr?q=R.intersectTriangle(U,W,E,!0,N):q=R.intersectTriangle(E,W,U,y.side!==ws,N),q===null)return null;jp.copy(N),jp.applyMatrix4(H.matrixWorld);const X=f.ray.origin.distanceTo(jp);return X<f.near||X>f.far?null:{distance:X,point:jp.clone(),object:H}}function Lp(H,y,f,R,E,W,U,N,q,X,K,$){No.fromBufferAttribute(E,X),Ho.fromBufferAttribute(E,K),Vo.fromBufferAttribute(E,$);const e2=H.morphTargetInfluences;if(W&&e2){Dp.set(0,0,0),Tp.set(0,0,0),Ip.set(0,0,0);for(let a2=0,o2=W.length;a2<o2;a2++){const t2=e2[a2],f2=W[a2];t2!==0&&(Du.fromBufferAttribute(f2,X),Tu.fromBufferAttribute(f2,K),Iu.fromBufferAttribute(f2,$),U?(Dp.addScaledVector(Du,t2),Tp.addScaledVector(Tu,t2),Ip.addScaledVector(Iu,t2)):(Dp.addScaledVector(Du.sub(No),t2),Tp.addScaledVector(Tu.sub(Ho),t2),Ip.addScaledVector(Iu.sub(Vo),t2)))}No.add(Dp),Ho.add(Tp),Vo.add(Ip)}H.isSkinnedMesh&&(H.boneTransform(X,No),H.boneTransform(K,Ho),H.boneTransform($,Vo));const l2=qs2(H,y,f,R,No,Ho,Vo,Bu);if(l2){N&&(Bp.fromBufferAttribute(N,X),Pp.fromBufferAttribute(N,K),Ep.fromBufferAttribute(N,$),l2.uv=uo.getUV(Bu,No,Ho,Vo,Bp,Pp,Ep,new we)),q&&(Bp.fromBufferAttribute(q,X),Pp.fromBufferAttribute(q,K),Ep.fromBufferAttribute(q,$),l2.uv2=uo.getUV(Bu,No,Ho,Vo,Bp,Pp,Ep,new we));const a2={a:X,b:K,c:$,normal:new W2,materialIndex:0};uo.getNormal(No,Ho,Vo,a2.normal),l2.face=a2}return l2}class D1 extends Uo{constructor(y=1,f=1,R=1,E=1,W=1,U=1){super(),this.type="BoxGeometry",this.parameters={width:y,height:f,depth:R,widthSegments:E,heightSegments:W,depthSegments:U};const N=this;E=Math.floor(E),W=Math.floor(W),U=Math.floor(U);const q=[],X=[],K=[],$=[];let e2=0,l2=0;a2("z","y","x",-1,-1,R,f,y,U,W,0),a2("z","y","x",1,-1,R,f,-y,U,W,1),a2("x","z","y",1,1,y,R,f,E,U,2),a2("x","z","y",1,-1,y,R,-f,E,U,3),a2("x","y","z",1,-1,y,f,R,E,W,4),a2("x","y","z",-1,-1,y,f,-R,E,W,5),this.setIndex(q),this.setAttribute("position",new Lr(X,3)),this.setAttribute("normal",new Lr(K,3)),this.setAttribute("uv",new Lr($,2));function a2(o2,t2,f2,v2,M2,S2,A2,I2,N2,u2,T2){const Z2=S2/N2,z2=A2/u2,Ft=S2/2,yt=A2/2,G2=I2/2,nt=N2+1,X2=u2+1;let st=0,ot=0;const Q2=new W2;for(let J2=0;J2<X2;J2++){const St=J2*z2-yt;for(let kt=0;kt<nt;kt++){const bt=kt*Z2-Ft;Q2[o2]=bt*v2,Q2[t2]=St*M2,Q2[f2]=G2,X.push(Q2.x,Q2.y,Q2.z),Q2[o2]=0,Q2[t2]=0,Q2[f2]=I2>0?1:-1,K.push(Q2.x,Q2.y,Q2.z),$.push(kt/N2),$.push(1-J2/u2),st+=1}}for(let J2=0;J2<u2;J2++)for(let St=0;St<N2;St++){const kt=e2+St+nt*J2,bt=e2+St+nt*(J2+1),$t=e2+(St+1)+nt*(J2+1),he=e2+(St+1)+nt*J2;q.push(kt,bt,he),q.push(bt,$t,he),ot+=6}N.addGroup(l2,ot,T2),l2+=ot,e2+=st}}static fromJSON(y){return new D1(y.width,y.height,y.depth,y.widthSegments,y.heightSegments,y.depthSegments)}}function Ts(H){const y={};for(const f in H){y[f]={};for(const R in H[f]){const E=H[f][R];E&&(E.isColor||E.isMatrix3||E.isMatrix4||E.isVector2||E.isVector3||E.isVector4||E.isTexture||E.isQuaternion)?y[f][R]=E.clone():Array.isArray(E)?y[f][R]=E.slice():y[f][R]=E}}return y}function D0(H){const y={};for(let f=0;f<H.length;f++){const R=Ts(H[f]);for(const E in R)y[E]=R[E]}return y}function Js2(H){const y=[];for(let f=0;f<H.length;f++)y.push(H[f].clone());return y}const Ks2={clone:Ts,merge:D0};var $s2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class T1 extends V_{constructor(y){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$s2,this.fragmentShader=t_2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,y!==void 0&&(y.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(y))}copy(y){return super.copy(y),this.fragmentShader=y.fragmentShader,this.vertexShader=y.vertexShader,this.uniforms=Ts(y.uniforms),this.uniformsGroups=Js2(y.uniformsGroups),this.defines=Object.assign({},y.defines),this.wireframe=y.wireframe,this.wireframeLinewidth=y.wireframeLinewidth,this.fog=y.fog,this.lights=y.lights,this.clipping=y.clipping,this.extensions=Object.assign({},y.extensions),this.glslVersion=y.glslVersion,this}toJSON(y){const f=super.toJSON(y);f.glslVersion=this.glslVersion,f.uniforms={};for(const E in this.uniforms){const U=this.uniforms[E].value;U&&U.isTexture?f.uniforms[E]={type:"t",value:U.toJSON(y).uuid}:U&&U.isColor?f.uniforms[E]={type:"c",value:U.getHex()}:U&&U.isVector2?f.uniforms[E]={type:"v2",value:U.toArray()}:U&&U.isVector3?f.uniforms[E]={type:"v3",value:U.toArray()}:U&&U.isVector4?f.uniforms[E]={type:"v4",value:U.toArray()}:U&&U.isMatrix3?f.uniforms[E]={type:"m3",value:U.toArray()}:U&&U.isMatrix4?f.uniforms[E]={type:"m4",value:U.toArray()}:f.uniforms[E]={value:U}}Object.keys(this.defines).length>0&&(f.defines=this.defines),f.vertexShader=this.vertexShader,f.fragmentShader=this.fragmentShader;const R={};for(const E in this.extensions)this.extensions[E]===!0&&(R[E]=!0);return Object.keys(R).length>0&&(f.extensions=R),f}}class zL extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new s0,this.projectionMatrix=new s0,this.projectionMatrixInverse=new s0}copy(y,f){return super.copy(y,f),this.matrixWorldInverse.copy(y.matrixWorldInverse),this.projectionMatrix.copy(y.projectionMatrix),this.projectionMatrixInverse.copy(y.projectionMatrixInverse),this}getWorldDirection(y){this.updateWorldMatrix(!0,!1);const f=this.matrixWorld.elements;return y.set(-f[8],-f[9],-f[10]).normalize()}updateMatrixWorld(y){super.updateMatrixWorld(y),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(y,f){super.updateWorldMatrix(y,f),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yi extends zL{constructor(y=50,f=1,R=.1,E=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=y,this.zoom=1,this.near=R,this.far=E,this.focus=10,this.aspect=f,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(y,f){return super.copy(y,f),this.fov=y.fov,this.zoom=y.zoom,this.near=y.near,this.far=y.far,this.focus=y.focus,this.aspect=y.aspect,this.view=y.view===null?null:Object.assign({},y.view),this.filmGauge=y.filmGauge,this.filmOffset=y.filmOffset,this}setFocalLength(y){const f=.5*this.getFilmHeight()/y;this.fov=Oj*2*Math.atan(f),this.updateProjectionMatrix()}getFocalLength(){const y=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/y}getEffectiveFOV(){return Oj*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(y,f,R,E,W,U){this.aspect=y/f,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=y,this.view.fullHeight=f,this.view.offsetX=R,this.view.offsetY=E,this.view.width=W,this.view.height=U,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const y=this.near;let f=y*Math.tan(fu*.5*this.fov)/this.zoom,R=2*f,E=this.aspect*R,W=-.5*E;const U=this.view;if(this.view!==null&&this.view.enabled){const q=U.fullWidth,X=U.fullHeight;W+=U.offsetX*E/q,f-=U.offsetY*R/X,E*=U.width/q,R*=U.height/X}const N=this.filmOffset;N!==0&&(W+=y*N/this.getFilmWidth()),this.projectionMatrix.makePerspective(W,W+E,f,f-R,y,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(y){const f=super.toJSON(y);return f.object.fov=this.fov,f.object.zoom=this.zoom,f.object.near=this.near,f.object.far=this.far,f.object.focus=this.focus,f.object.aspect=this.aspect,this.view!==null&&(f.object.view=Object.assign({},this.view)),f.object.filmGauge=this.filmGauge,f.object.filmOffset=this.filmOffset,f}}const As=90,ys=1;class e_2 extends ui{constructor(y,f,R){if(super(),this.type="CubeCamera",R.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=R;const E=new Yi(As,ys,y,f);E.layers=this.layers,E.up.set(0,-1,0),E.lookAt(new W2(1,0,0)),this.add(E);const W=new Yi(As,ys,y,f);W.layers=this.layers,W.up.set(0,-1,0),W.lookAt(new W2(-1,0,0)),this.add(W);const U=new Yi(As,ys,y,f);U.layers=this.layers,U.up.set(0,0,1),U.lookAt(new W2(0,1,0)),this.add(U);const N=new Yi(As,ys,y,f);N.layers=this.layers,N.up.set(0,0,-1),N.lookAt(new W2(0,-1,0)),this.add(N);const q=new Yi(As,ys,y,f);q.layers=this.layers,q.up.set(0,-1,0),q.lookAt(new W2(0,0,1)),this.add(q);const X=new Yi(As,ys,y,f);X.layers=this.layers,X.up.set(0,-1,0),X.lookAt(new W2(0,0,-1)),this.add(X)}update(y,f){this.parent===null&&this.updateMatrixWorld();const R=this.renderTarget,[E,W,U,N,q,X]=this.children,K=y.getRenderTarget(),$=y.toneMapping,e2=y.xr.enabled;y.toneMapping=mo,y.xr.enabled=!1;const l2=R.texture.generateMipmaps;R.texture.generateMipmaps=!1,y.setRenderTarget(R,0),y.render(f,E),y.setRenderTarget(R,1),y.render(f,W),y.setRenderTarget(R,2),y.render(f,U),y.setRenderTarget(R,3),y.render(f,N),y.setRenderTarget(R,4),y.render(f,q),R.texture.generateMipmaps=l2,y.setRenderTarget(R,5),y.render(f,X),y.setRenderTarget(K),y.toneMapping=$,y.xr.enabled=e2,R.texture.needsPMREMUpdate=!0}}class UL extends cr{constructor(y,f,R,E,W,U,N,q,X,K){y=y!==void 0?y:[],f=f!==void 0?f:Ms,super(y,f,R,E,W,U,N,q,X,K),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(y){this.image=y}}class n_2 extends M1{constructor(y,f={}){super(y,y,f),this.isWebGLCubeRenderTarget=!0;const R={width:y,height:y,depth:1},E=[R,R,R,R,R,R];this.texture=new UL(E,f.mapping,f.wrapS,f.wrapT,f.magFilter,f.minFilter,f.format,f.type,f.anisotropy,f.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=f.generateMipmaps!==void 0?f.generateMipmaps:!1,this.texture.minFilter=f.minFilter!==void 0?f.minFilter:Qi}fromEquirectangularTexture(y,f){this.texture.type=f.type,this.texture.encoding=f.encoding,this.texture.generateMipmaps=f.generateMipmaps,this.texture.minFilter=f.minFilter,this.texture.magFilter=f.magFilter;const R={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},E=new D1(5,5,5),W=new T1({name:"CubemapFromEquirect",uniforms:Ts(R.uniforms),vertexShader:R.vertexShader,fragmentShader:R.fragmentShader,side:pr,blending:zo});W.uniforms.tEquirect.value=f;const U=new Xi(E,W),N=f.minFilter;return f.minFilter===Zp&&(f.minFilter=Qi),new e_2(1,10,this).update(y,U),f.minFilter=N,U.geometry.dispose(),U.material.dispose(),this}clear(y,f,R,E){const W=y.getRenderTarget();for(let U=0;U<6;U++)y.setRenderTarget(this,U),y.clear(f,R,E);y.setRenderTarget(W)}}const Pu=new W2,i_2=new W2,r_2=new Zi;class g1{constructor(y=new W2(1,0,0),f=0){this.isPlane=!0,this.normal=y,this.constant=f}set(y,f){return this.normal.copy(y),this.constant=f,this}setComponents(y,f,R,E){return this.normal.set(y,f,R),this.constant=E,this}setFromNormalAndCoplanarPoint(y,f){return this.normal.copy(y),this.constant=-f.dot(this.normal),this}setFromCoplanarPoints(y,f,R){const E=Pu.subVectors(R,f).cross(i_2.subVectors(y,f)).normalize();return this.setFromNormalAndCoplanarPoint(E,y),this}copy(y){return this.normal.copy(y.normal),this.constant=y.constant,this}normalize(){const y=1/this.normal.length();return this.normal.multiplyScalar(y),this.constant*=y,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(y){return this.normal.dot(y)+this.constant}distanceToSphere(y){return this.distanceToPoint(y.center)-y.radius}projectPoint(y,f){return f.copy(this.normal).multiplyScalar(-this.distanceToPoint(y)).add(y)}intersectLine(y,f){const R=y.delta(Pu),E=this.normal.dot(R);if(E===0)return this.distanceToPoint(y.start)===0?f.copy(y.start):null;const W=-(y.start.dot(this.normal)+this.constant)/E;return W<0||W>1?null:f.copy(R).multiplyScalar(W).add(y.start)}intersectsLine(y){const f=this.distanceToPoint(y.start),R=this.distanceToPoint(y.end);return f<0&&R>0||R<0&&f>0}intersectsBox(y){return y.intersectsPlane(this)}intersectsSphere(y){return y.intersectsPlane(this)}coplanarPoint(y){return y.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(y,f){const R=f||r_2.getNormalMatrix(y),E=this.coplanarPoint(Pu).applyMatrix4(y),W=this.normal.applyMatrix3(R).normalize();return this.constant=-E.dot(W),this}translate(y){return this.constant-=y.dot(this.normal),this}equals(y){return y.normal.equals(this.normal)&&y.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Ku,Fp=new W2;class t6{constructor(y=new g1,f=new g1,R=new g1,E=new g1,W=new g1,U=new g1){this.planes=[y,f,R,E,W,U]}set(y,f,R,E,W,U){const N=this.planes;return N[0].copy(y),N[1].copy(f),N[2].copy(R),N[3].copy(E),N[4].copy(W),N[5].copy(U),this}copy(y){const f=this.planes;for(let R=0;R<6;R++)f[R].copy(y.planes[R]);return this}setFromProjectionMatrix(y){const f=this.planes,R=y.elements,E=R[0],W=R[1],U=R[2],N=R[3],q=R[4],X=R[5],K=R[6],$=R[7],e2=R[8],l2=R[9],a2=R[10],o2=R[11],t2=R[12],f2=R[13],v2=R[14],M2=R[15];return f[0].setComponents(N-E,$-q,o2-e2,M2-t2).normalize(),f[1].setComponents(N+E,$+q,o2+e2,M2+t2).normalize(),f[2].setComponents(N+W,$+X,o2+l2,M2+f2).normalize(),f[3].setComponents(N-W,$-X,o2-l2,M2-f2).normalize(),f[4].setComponents(N-U,$-K,o2-a2,M2-v2).normalize(),f[5].setComponents(N+U,$+K,o2+a2,M2+v2).normalize(),this}intersectsObject(y){const f=y.geometry;return f.boundingSphere===null&&f.computeBoundingSphere(),bs.copy(f.boundingSphere).applyMatrix4(y.matrixWorld),this.intersectsSphere(bs)}intersectsSprite(y){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(y.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(y){const f=this.planes,R=y.center,E=-y.radius;for(let W=0;W<6;W++)if(f[W].distanceToPoint(R)<E)return!1;return!0}intersectsBox(y){const f=this.planes;for(let R=0;R<6;R++){const E=f[R];if(Fp.x=E.normal.x>0?y.max.x:y.min.x,Fp.y=E.normal.y>0?y.max.y:y.min.y,Fp.z=E.normal.z>0?y.max.z:y.min.z,E.distanceToPoint(Fp)<0)return!1}return!0}containsPoint(y){const f=this.planes;for(let R=0;R<6;R++)if(f[R].distanceToPoint(y)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function QL(){let H=null,y=!1,f=null,R=null;function E(W,U){f(W,U),R=H.requestAnimationFrame(E)}return{start:function(){y!==!0&&f!==null&&(R=H.requestAnimationFrame(E),y=!0)},stop:function(){H.cancelAnimationFrame(R),y=!1},setAnimationLoop:function(W){f=W},setContext:function(W){H=W}}}function o_2(H,y){const f=y.isWebGL2,R=new WeakMap;function E(X,K){const $=X.array,e2=X.usage,l2=H.createBuffer();H.bindBuffer(K,l2),H.bufferData(K,$,e2),X.onUploadCallback();let a2;if($ instanceof Float32Array)a2=5126;else if($ instanceof Uint16Array)if(X.isFloat16BufferAttribute)if(f)a2=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else a2=5123;else if($ instanceof Int16Array)a2=5122;else if($ instanceof Uint32Array)a2=5125;else if($ instanceof Int32Array)a2=5124;else if($ instanceof Int8Array)a2=5120;else if($ instanceof Uint8Array)a2=5121;else if($ instanceof Uint8ClampedArray)a2=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+$);return{buffer:l2,type:a2,bytesPerElement:$.BYTES_PER_ELEMENT,version:X.version}}function W(X,K,$){const e2=K.array,l2=K.updateRange;H.bindBuffer($,X),l2.count===-1?H.bufferSubData($,0,e2):(f?H.bufferSubData($,l2.offset*e2.BYTES_PER_ELEMENT,e2,l2.offset,l2.count):H.bufferSubData($,l2.offset*e2.BYTES_PER_ELEMENT,e2.subarray(l2.offset,l2.offset+l2.count)),l2.count=-1)}function U(X){return X.isInterleavedBufferAttribute&&(X=X.data),R.get(X)}function N(X){X.isInterleavedBufferAttribute&&(X=X.data);const K=R.get(X);K&&(H.deleteBuffer(K.buffer),R.delete(X))}function q(X,K){if(X.isGLBufferAttribute){const e2=R.get(X);(!e2||e2.version<X.version)&&R.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}X.isInterleavedBufferAttribute&&(X=X.data);const $=R.get(X);$===void 0?R.set(X,E(X,K)):$.version<X.version&&(W($.buffer,X,K),$.version=X.version)}return{get:U,remove:N,update:q}}class e6 extends Uo{constructor(y=1,f=1,R=1,E=1){super(),this.type="PlaneGeometry",this.parameters={width:y,height:f,widthSegments:R,heightSegments:E};const W=y/2,U=f/2,N=Math.floor(R),q=Math.floor(E),X=N+1,K=q+1,$=y/N,e2=f/q,l2=[],a2=[],o2=[],t2=[];for(let f2=0;f2<K;f2++){const v2=f2*e2-U;for(let M2=0;M2<X;M2++){const S2=M2*$-W;a2.push(S2,-v2,0),o2.push(0,0,1),t2.push(M2/N),t2.push(1-f2/q)}}for(let f2=0;f2<q;f2++)for(let v2=0;v2<N;v2++){const M2=v2+X*f2,S2=v2+X*(f2+1),A2=v2+1+X*(f2+1),I2=v2+1+X*f2;l2.push(M2,S2,I2),l2.push(S2,A2,I2)}this.setIndex(l2),this.setAttribute("position",new Lr(a2,3)),this.setAttribute("normal",new Lr(o2,3)),this.setAttribute("uv",new Lr(t2,2))}static fromJSON(y){return new e6(y.width,y.height,y.widthSegments,y.heightSegments)}}var s_2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,__2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p_2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c_2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f_2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_2="vec3 transformed = vec3( position );",m_2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_2=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,d_2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h_2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g_2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,A_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,S_2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x_2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,w_2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M_2=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,T_2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_2="gl_FragColor = linearToOutputTexel( gl_FragColor );",P_2=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L_2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O_2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G_2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H_2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V_2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,z_2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_2=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Y_2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z_2=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,X_2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,J_2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,$_2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,tl2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,el2=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nl2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,il2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rl2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ol2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sl2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_l2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ll2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pl2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cl2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fl2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ul2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ml2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,al2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dl2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hl2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gl2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Al2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,yl2=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bl2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vl2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kl2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cl2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Sl2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xl2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wl2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ml2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rl2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dl2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tl2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Il2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bl2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pl2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,El2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jl2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ll2=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fl2=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wl2=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ol2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gl2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nl2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hl2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vl2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zl2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ul2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ql2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yl2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zl2=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Xl2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ql2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jl2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kl2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$l2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,tp2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ep2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,np2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp2=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,op2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp2=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_p2=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lp2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pp2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fp2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mp2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp2=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hp2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp2=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap2=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bp2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kp2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cp2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pp2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zo,depthTest:!1,depthWrite:!1})}function iL(){return new T1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:n6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zo,depthTest:!1,depthWrite:!1})}function rL(){return new T1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:n6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zo,depthTest:!1,depthWrite:!1})}function n6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
`),R=[],E=Math.max(y-6,0),W=Math.min(y+6,f.length);for(let U=E;U<W;U++){const N=U+1;R.push(`${N===y?">":" "} ${N}: ${f[U]}`)}return R.join(`

`+E+`

precision `+H.precision+" int;";return H.precision==="highp"?y+=`
`)+`
