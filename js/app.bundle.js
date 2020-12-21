(()=>{var _a=Object.assign,Zl="123",Jl=0,ba=1,$l=2,wa=1,Ql=2,ji=3,qn=0,$e=1,Xn=2,Ma=1,qi=0,Xi=1,Sa=2,Ea=3,Ta=4,Kl=5,Yn=100,eh=101,th=102,Aa=103,La=104,nh=200,ih=201,rh=202,sh=203,Ca=204,Ra=205,oh=206,ah=207,ch=208,lh=209,hh=210,uh=0,fh=1,dh=2,zs=3,ph=4,mh=5,gh=6,vh=7,Tr=0,yh=1,xh=2,Yi=0,_h=1,bh=2,wh=3,Mh=4,Sh=5,Pa=300,Us=301,Gs=302,Ia=303,Da=304,Hs=306,ks=307,Vs=1e3,vt=1001,Ws=1002,ot=1003,Na=1004,Oa=1005,it=1006,Eh=1007,Ar=1008,js=1009,Th=1010,Ah=1011,Lr=1012,Lh=1013,Cr=1014,un=1015,Rr=1016,Ch=1017,Rh=1018,Ph=1019,Zi=1020,Ih=1021,Ln=1022,Lt=1023,Dh=1024,Nh=1025,Zn=1026,Ji=1027,Oh=1028,Bh=1029,Fh=1030,zh=1031,Uh=1032,Gh=1033,Ba=33776,Fa=33777,za=33778,Ua=33779,Ga=35840,Ha=35841,ka=35842,Va=35843,Hh=36196,Wa=37492,ja=37496,kh=37808,Vh=37809,Wh=37810,jh=37811,qh=37812,Xh=37813,Yh=37814,Zh=37815,Jh=37816,$h=37817,Qh=37818,Kh=37819,eu=37820,tu=37821,nu=36492,iu=37840,ru=37841,su=37842,ou=37843,au=37844,cu=37845,lu=37846,hu=37847,uu=37848,fu=37849,du=37850,pu=37851,mu=37852,gu=37853,vu=2200,yu=2201,xu=2202,Pr=2300,Ir=2301,qs=2302,Jn=2400,$n=2401,Dr=2402,Xs=2500,qa=2501,_u=0,Qn=3e3,Ys=3001,Nr=3007,Xa=3002,bu=3003,Ya=3004,Za=3005,Ja=3006,wu=3200,Mu=3201,Kn=0,Su=1,Zs=7680,Eu=519,Or=35044,$i=35048,$a="300 es";function Jt(){}Object.assign(Jt.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;let n=this._listeners,i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;let e=this._listeners,n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});var Qe=[];for(let t=0;t<256;t++)Qe[t]=(t<16?"0":"")+t.toString(16);var Br=1234567,ve={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Qe[t&255]+Qe[t>>8&255]+Qe[t>>16&255]+Qe[t>>24&255]+"-"+Qe[e&255]+Qe[e>>8&255]+"-"+Qe[e>>16&15|64]+Qe[e>>24&255]+"-"+Qe[n&63|128]+Qe[n>>8&255]+"-"+Qe[n>>16&255]+Qe[n>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255];return r.toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(Br=t%2147483647),Br=Br*16807%2147483647,(Br-1)/2147483646},degToRad:function(t){return t*ve.DEG2RAD},radToDeg:function(t){return t*ve.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*u,c*h,c*d,a*l);break;case"YZY":t.set(c*d,a*u,c*h,a*l);break;case"ZXZ":t.set(c*h,c*d,a*u,a*l);break;case"XZX":t.set(a*u,c*p,c*f,a*l);break;case"YXY":t.set(c*f,a*u,c*p,a*l);break;case"ZYZ":t.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},U=class{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){let e=Math.atan2(-this.y,-this.x)+Math.PI;return e}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}},at=class{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=r[0],y=r[3],g=r[6],m=r[1],E=r[4],T=r[7],S=r[2],_=r[5],A=r[8];return s[0]=o*v+a*m+c*S,s[3]=o*y+a*E+c*_,s[6]=o*g+a*T+c*A,s[1]=l*v+u*m+h*S,s[4]=l*y+u*E+h*_,s[7]=l*g+u*T+h*A,s[2]=d*v+f*m+p*S,s[5]=d*y+f*E+p*_,s[8]=d*g+f*T+p*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,p=n*h+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*c)*v,e[5]=(r*s-a*n)*v,e[6]=f*v,e[7]=(i*c-l*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1)}scale(e,n){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){let n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*u,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*u,this}translate(e,n){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}},ei,ti={getDataURL:function(t){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),ei.width=t.width,ei.height=t.height;let n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}},Tu=0;function ze(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=vt,i=vt,r=it,s=Ar,o=Lt,a=js,c=1,l=Qn){Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ve.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}ze.DEFAULT_IMAGE=void 0;ze.DEFAULT_MAPPING=Pa;ze.prototype=Object.assign(Object.create(Jt.prototype),{constructor:ze,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=ve.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Js(i[s].image)):r.push(Js(i[s]))}else r=Js(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==Pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case vt:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case vt:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(ze.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Js(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?ti.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ie=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],v=c[2],y=c[6],g=c[10];if(Math.abs(u-d)<o&&Math.abs(h-v)<o&&Math.abs(p-y)<o){if(Math.abs(u+d)<a&&Math.abs(h+v)<a&&Math.abs(p+y)<a&&Math.abs(l+f+g-3)<a)return this.set(1,0,0,0),this;n=Math.PI;let E=(l+1)/2,T=(f+1)/2,S=(g+1)/2,_=(u+d)/4,A=(h+v)/4,F=(p+y)/4;return E>T&&E>S?E<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=_/i,s=A/i):T>S?T<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=_/r,s=F/r):S<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=F/s),this.set(i,r,s,n),this}let m=Math.sqrt((y-p)*(y-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(y-p)/m,this.y=(h-v)/m,this.z=(d-u)/m,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};function Ct(t,e,n){this.width=t,this.height=e,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),n=n||{},this.texture=new ze(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:it,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Ct.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Ct,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Qa(t,e,n){Ct.call(this,t,e,n),this.samples=4}Qa.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Qa,isWebGLMultisampleRenderTarget:!0,copy:function(t){return Ct.prototype.copy.call(this,t),this.samples=t.samples,this}});var mt=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(h!==v||c!==d||l!==f||u!==p){let y=1-a,g=c*d+l*f+u*p+h*v,m=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){let S=Math.sqrt(E),_=Math.atan2(S,g*m);y=Math.sin(y*_)/S,a=Math.sin(a*_)/S}let T=a*m;if(c=c*y+d*T,l=l*y+f*T,u=u*y+p*T,h=h*y+v*T,y===1-a){let S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[n]=a*p+u*h+c*f-l*d,e[n+1]=c*p+u*d+l*h-a*f,e[n+2]=l*p+u*f+a*d-c*h,e[n+3]=u*p-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=1e-6,r=e.dot(n)+1;return r<i?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},w=class{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ka.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,u=c*i+a*n-s*r,h=c*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(ve.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},$s=new w,Ka=new mt,Mt=class{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new w(Infinity,Infinity,Infinity),this.max=n!==void 0?n:new w(-Infinity,-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],d=e[c+2];u<n&&(n=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<n&&(n=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox),Ks.applyMatrix4(e.matrixWorld),this.union(Ks));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new w),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Fr.subVectors(this.max,Ki),ni.subVectors(e.a,Ki),ii.subVectors(e.b,Ki),ri.subVectors(e.c,Ki),fn.subVectors(ii,ni),dn.subVectors(ri,ii),Cn.subVectors(ni,ri);let n=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-Cn.z,Cn.y,fn.z,0,-fn.x,dn.z,0,-dn.x,Cn.z,0,-Cn.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-Cn.y,Cn.x,0];return Qs(n,ni,ii,ri,Fr)?(n=[1,0,0,0,1,0,0,0,1],Qs(n,ni,ii,ri,Fr)?(zr.crossVectors(fn,dn),n=[zr.x,zr.y,zr.z],Qs(n,ni,ii,ri,Fr)):!1):!1}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new w),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){let n=Qi.copy(e).clamp(this.min,this.max);return n.sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function Qs(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Rn.fromArray(t,s);let a=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),c=e.dot(Rn),l=n.dot(Rn),u=i.dot(Rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var $t=[new w,new w,new w,new w,new w,new w,new w,new w],Qi=new w,Ks=new Mt,ni=new w,ii=new w,ri=new w,fn=new w,dn=new w,Cn=new w,Ki=new w,Fr=new w,zr=new w,Rn=new w,Au=new Mt,Rt=class{constructor(e,n){this.center=e!==void 0?e:new w,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Au.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new w),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Mt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}},Qt=new w,eo=new w,Ur=new w,pn=new w,to=new w,Gr=new w,no=new w,si=class{constructor(e,n){this.origin=e!==void 0?e:new w,this.direction=n!==void 0?n:new w(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new w),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new w),n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Qt.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qt.copy(this.direction).multiplyScalar(n).add(this.origin),Qt.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){eo.copy(e).add(n).multiplyScalar(.5),Ur.copy(n).sub(e).normalize(),pn.copy(this.origin).sub(eo);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Ur),a=pn.dot(this.direction),c=-pn.dot(Ur),l=pn.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=s*u,h>=0)if(d>=-p)if(d<=p){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ur).multiplyScalar(d).add(eo),f}intersectSphere(e,n){Qt.subVectors(e.center,this.origin);let i=Qt.dot(this.direction),r=Qt.dot(Qt)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);if(n===0)return!0;let i=e.normal.dot(this.direction);return i*n<0}intersectBox(e,n){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r?null:((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r?null:((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0?null:this.at(i>=0?i:r,n)))}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,n,i,r,s){to.subVectors(n,e),Gr.subVectors(i,e),no.crossVectors(to,Gr);let o=this.direction.dot(no),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,e);let c=a*this.direction.dot(Gr.crossVectors(pn,Gr));if(c<0)return null;let l=a*this.direction.dot(to.cross(pn));if(l<0)return null;if(c+l>o)return null;let u=-a*pn.dot(no);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}},ye=class{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,u,h,d,f,p,v,y){let g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/oi.setFromMatrixColumn(e,0).length(),s=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,v=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=f+p*l,n[5]=d-v*l,n[9]=-a*c,n[2]=v-d*l,n[6]=p+f*l,n[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,v=l*h;n[0]=d+v*a,n[4]=p*a-f,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=f*a-p,n[6]=v+d*a,n[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,v=l*h;n[0]=d-v*a,n[4]=-o*h,n[8]=p+f*a,n[1]=f+p*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,v=a*h;n[0]=c*u,n[4]=p*l-f,n[8]=d*l+v,n[1]=c*h,n[5]=v*l+d,n[9]=f*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,v=a*l;n[0]=c*u,n[4]=v-d*h,n[8]=p*h+f,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=f*h+p,n[10]=d-v*h}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,v=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+v,n[5]=o*u,n[9]=f*h-p,n[2]=p*h-f,n[6]=a*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Cu)}lookAt(e,n,i){let r=this.elements;return yt.subVectors(e,n),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),mn.crossVectors(i,yt),mn.lengthSq()===0&&(Math.abs(i.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),mn.crossVectors(i,yt)),mn.normalize(),Hr.crossVectors(yt,mn),r[0]=mn.x,r[4]=Hr.x,r[8]=yt.x,r[1]=mn.y,r[5]=Hr.y,r[9]=yt.y,r[2]=mn.z,r[6]=Hr.z,r[10]=yt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],y=i[10],g=i[14],m=i[3],E=i[7],T=i[11],S=i[15],_=r[0],A=r[4],F=r[8],X=r[12],te=r[1],C=r[5],B=r[9],D=r[13],O=r[2],R=r[6],P=r[10],G=r[14],k=r[3],K=r[7],re=r[11],ie=r[15];return s[0]=o*_+a*te+c*O+l*k,s[4]=o*A+a*C+c*R+l*K,s[8]=o*F+a*B+c*P+l*re,s[12]=o*X+a*D+c*G+l*ie,s[1]=u*_+h*te+d*O+f*k,s[5]=u*A+h*C+d*R+f*K,s[9]=u*F+h*B+d*P+f*re,s[13]=u*X+h*D+d*G+f*ie,s[2]=p*_+v*te+y*O+g*k,s[6]=p*A+v*C+y*R+g*K,s[10]=p*F+v*B+y*P+g*re,s[14]=p*X+v*D+y*G+g*ie,s[3]=m*_+E*te+T*O+S*k,s[7]=m*A+E*C+T*R+S*K,s[11]=m*F+E*B+T*P+S*re,s[15]=m*X+E*D+T*G+S*ie,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],y=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+n*c*f-n*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+y*(+n*l*h-n*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+g*(-r*a*u-n*c*h+n*a*d+r*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],y=e[14],g=e[15],m=h*y*l-v*d*l+v*c*f-a*y*f-h*c*g+a*d*g,E=p*d*l-u*y*l-p*c*f+o*y*f+u*c*g-o*d*g,T=u*v*l-p*h*l+p*a*f-o*v*f-u*a*g+o*h*g,S=p*h*c-u*v*c-p*a*d+o*v*d+u*a*y-o*h*y,_=n*m+i*E+r*T+s*S;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/_;return e[0]=m*A,e[1]=(v*d*s-h*y*s-v*r*f+i*y*f+h*r*g-i*d*g)*A,e[2]=(a*y*s-v*c*s+v*r*l-i*y*l-a*r*g+i*c*g)*A,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*A,e[4]=E*A,e[5]=(u*y*s-p*d*s+p*r*f-n*y*f-u*r*g+n*d*g)*A,e[6]=(p*c*s-o*y*s-p*r*l+n*y*l+o*r*g-n*c*g)*A,e[7]=(o*d*s-u*c*s+u*r*l-n*d*l-o*r*f+n*c*f)*A,e[8]=T*A,e[9]=(p*h*s-u*v*s-p*i*f+n*v*f+u*i*g-n*h*g)*A,e[10]=(o*v*s-p*a*s+p*i*l-n*v*l-o*i*g+n*a*g)*A,e[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*f-n*a*f)*A,e[12]=S*A,e[13]=(u*v*r-p*h*r+p*i*d-n*v*d-u*i*y+n*h*y)*A,e[14]=(p*a*r-o*v*r-p*i*c+n*v*c+o*i*y-n*a*y)*A,e[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*d+n*a*d)*A,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,p=s*h,v=o*u,y=o*h,g=a*h,m=c*l,E=c*u,T=c*h,S=i.x,_=i.y,A=i.z;return r[0]=(1-(v+g))*S,r[1]=(f+T)*S,r[2]=(p-E)*S,r[3]=0,r[4]=(f-T)*_,r[5]=(1-(d+g))*_,r[6]=(y+m)*_,r[7]=0,r[8]=(p+E)*A,r[9]=(y-m)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=oi.set(r[0],r[1],r[2]).length(),o=oi.set(r[4],r[5],r[6]).length(),a=oi.set(r[8],r[9],r[10]).length(),c=this.determinant();c<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pt.copy(this);let l=1/s,u=1/o,h=1/a;return Pt.elements[0]*=l,Pt.elements[1]*=l,Pt.elements[2]*=l,Pt.elements[4]*=u,Pt.elements[5]*=u,Pt.elements[6]*=u,Pt.elements[8]*=h,Pt.elements[9]*=h,Pt.elements[10]*=h,n.setFromRotationMatrix(Pt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(n-e),l=2*s/(i-r),u=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){let a=this.elements,c=1/(n-e),l=1/(i-r),u=1/(o-s),h=(n+e)*c,d=(i+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},oi=new w,Pt=new ye,Lu=new w(0,0,0),Cu=new w(1,1,1),mn=new w,Hr=new w,yt=new w,ai=class{constructor(e=0,n=0,i=0,r=ai.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){let r=ve.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],p=s[10];n=n||this._order;switch(n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ai.DefaultOrder="XYZ";ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var ec=new ye,tc=new mt,io=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},Ru=0,nc=new w,ci=new mt,Kt=new ye,kr=new w,er=new w,Pu=new w,Iu=new mt,ic=new w(1,0,0),rc=new w(0,1,0),sc=new w(0,0,1),Du={type:"added"},oc={type:"removed"};function ue(){Object.defineProperty(this,"id",{value:Ru++}),this.uuid=ve.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DefaultUp.clone();let t=new w,e=new ai,n=new mt,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new at}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=ue.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ue.DefaultUp=new w(0,1,0);ue.DefaultMatrixAutoUpdate=!0;ue.prototype=Object.assign(Object.create(Jt.prototype),{constructor:ue,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this},rotateOnWorldAxis:function(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this},rotateX:function(t){return this.rotateOnAxis(ic,t)},rotateY:function(t){return this.rotateOnAxis(rc,t)},rotateZ:function(t){return this.rotateOnAxis(sc,t)},translateOnAxis:function(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(ic,t)},translateY:function(t){return this.translateOnAxis(rc,t)},translateZ:function(t){return this.translateOnAxis(sc,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(Kt.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(er,kr,this.up):Kt.lookAt(kr,er,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(Kt),this.quaternion.premultiply(ci.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Du)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oc)),this},clear:function(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(oc)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kt),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n],s=r.getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new w),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new mt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Pu),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Iu,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new w),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let u=a[c];r(t.shapes,u)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){let o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),u=s(t.shapes),h=s(t.skeletons),d=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}});var ro=new w,Nu=new w,Ou=new at,Ft=class{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new w(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=ro.subVectors(i,n).cross(Nu.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new w),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new w);let i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?void 0:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Ou.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}},It=new w,en=new w,so=new w,tn=new w,li=new w,hi=new w,ac=new w,oo=new w,ao=new w,co=new w,Ke=class{constructor(e,n,i){this.a=e!==void 0?e:new w,this.b=n!==void 0?n:new w,this.c=i!==void 0?i:new w}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new w),r.subVectors(i,n),It.subVectors(e,n),r.cross(It);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){It.subVectors(r,n),en.subVectors(i,n),so.subVectors(e,n);let o=It.dot(It),a=It.dot(en),c=It.dot(so),l=en.dot(en),u=en.dot(so),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new w),h===0)return s.set(-2,-1,-1);let d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,tn),tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,tn),c.set(0,0),c.addScaledVector(s,tn.x),c.addScaledVector(o,tn.y),c.addScaledVector(a,tn.z),c}static isFrontFacing(e,n,i,r){return It.subVectors(i,n),en.subVectors(e,n),It.cross(en).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),en.subVectors(this.a,this.b),It.cross(en).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ke.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ft),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ke.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ke.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ke.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ke.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new w);let i=this.a,r=this.b,s=this.c,o,a;li.subVectors(r,i),hi.subVectors(s,i),oo.subVectors(e,i);let c=li.dot(oo),l=hi.dot(oo);if(c<=0&&l<=0)return n.copy(i);ao.subVectors(e,r);let u=li.dot(ao),h=hi.dot(ao);if(u>=0&&h<=u)return n.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(li,o);co.subVectors(e,s);let f=li.dot(co),p=hi.dot(co);if(p>=0&&f<=p)return n.copy(s);let v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(hi,a);let y=u*p-f*h;if(y<=0&&h-u>=0&&f-p>=0)return ac.subVectors(s,r),a=(h-u)/(h-u+(f-p)),n.copy(r).addScaledVector(ac,a);let g=1/(y+v+d);return o=v*g,a=d*g,n.copy(i).addScaledVector(li,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function lo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ho(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var se=class{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=ve.euclideanModulo(e,1),n=ve.clamp(n,0,1),i=ve.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=lo(s,r,e+1/3),this.g=lo(s,r,e),this.b=lo(s,r,e-1/3)}return this}setStyle(e){function n(r){if(r===void 0)return;parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[5]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[5]),this;break;case"hsl":case"hsla":if(r=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[5]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f0-9]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let n=cc[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){let i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let u=s-o;c=l<=.5?u/(s+o):u/(2-s-o);switch(s){case n:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-n)/u+2;break;case r:a=(n-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Dt),Dt.h+=e,Dt.s+=n,Dt.l+=i,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Dt),e.getHSL(Vr);let i=ve.lerp(Dt.h,Vr.h,n),r=ve.lerp(Dt.s,Vr.s,n),s=ve.lerp(Dt.l,Vr.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};se.NAMES=cc;se.prototype.r=1;se.prototype.g=1;se.prototype.b=1;var Wr=class{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new w,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new se,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}},Bu=0;function pe(){Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ve.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Xi,this.side=qn,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pe.prototype=Object.assign(Object.create(Jt.prototype),{constructor:pe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ma;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(pe.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function nn(t){pe.call(this),this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}nn.prototype=Object.create(pe.prototype);nn.prototype.constructor=nn;nn.prototype.isMeshBasicMaterial=!0;nn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var Ue=new w,jr=new U;function ge(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(ge.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(ge.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new se),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new U),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new w),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ie),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function fo(t,e,n){ge.call(this,new Int8Array(t),e,n)}fo.prototype=Object.create(ge.prototype);fo.prototype.constructor=fo;function po(t,e,n){ge.call(this,new Uint8Array(t),e,n)}po.prototype=Object.create(ge.prototype);po.prototype.constructor=po;function mo(t,e,n){ge.call(this,new Uint8ClampedArray(t),e,n)}mo.prototype=Object.create(ge.prototype);mo.prototype.constructor=mo;function go(t,e,n){ge.call(this,new Int16Array(t),e,n)}go.prototype=Object.create(ge.prototype);go.prototype.constructor=go;function tr(t,e,n){ge.call(this,new Uint16Array(t),e,n)}tr.prototype=Object.create(ge.prototype);tr.prototype.constructor=tr;function vo(t,e,n){ge.call(this,new Int32Array(t),e,n)}vo.prototype=Object.create(ge.prototype);vo.prototype.constructor=vo;function nr(t,e,n){ge.call(this,new Uint32Array(t),e,n)}nr.prototype=Object.create(ge.prototype);nr.prototype.constructor=nr;function qr(t,e,n){ge.call(this,new Uint16Array(t),e,n)}qr.prototype=Object.create(ge.prototype);qr.prototype.constructor=qr;qr.prototype.isFloat16BufferAttribute=!0;function Pe(t,e,n){ge.call(this,new Float32Array(t),e,n)}Pe.prototype=Object.create(ge.prototype);Pe.prototype.constructor=Pe;function yo(t,e,n){ge.call(this,new Float64Array(t),e,n)}yo.prototype=Object.create(ge.prototype);yo.prototype.constructor=yo;var lc=class{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){let n=[],i,r,s,o=e.faces;for(r=0;r<o.length;r++){let a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){let n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length,l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}let u=e.morphNormals,h=u.length,d;if(h>0){d=[];for(let g=0;g<h;g++)d[g]={name:u[g].name,data:[]};this.morphTargets.normal=d}let f=e.skinIndices,p=e.skinWeights,v=f.length===i.length,y=p.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){let m=n[g];this.vertices.push(i[m.a],i[m.b],i[m.c]);let E=m.vertexNormals;if(E.length===3)this.normals.push(E[0],E[1],E[2]);else{let S=m.normal;this.normals.push(S,S,S)}let T=m.vertexColors;if(T.length===3)this.colors.push(T[0],T[1],T[2]);else{let S=m.color;this.colors.push(S,S,S)}if(s===!0){let S=r[0][g];S!==void 0?this.uvs.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new U,new U,new U))}if(o===!0){let S=r[1][g];S!==void 0?this.uvs2.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new U,new U,new U))}for(let S=0;S<c;S++){let _=a[S].vertices;l[S].data.push(_[m.a],_[m.b],_[m.c])}for(let S=0;S<h;S++){let _=u[S].vertexNormals[g];d[S].data.push(_.a,_.b,_.c)}v&&this.skinIndices.push(f[m.a],f[m.b],f[m.c]),y&&this.skinWeights.push(p[m.a],p[m.b],p[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}};function hc(t){if(t.length===0)return-Infinity;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}var Fu={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xr(t,e){return new Fu[t](e)}var zu=1,zt=new ye,xo=new ue,ui=new w,xt=new Mt,ir=new Mt,Je=new w;function De(){Object.defineProperty(this,"id",{value:zu+=2}),this.uuid=ve.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}De.prototype=Object.assign(Object.create(Jt.prototype),{constructor:De,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(hc(t)>65535?nr:tr)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return zt.makeRotationX(t),this.applyMatrix4(zt),this},rotateY:function(t){return zt.makeRotationY(t),this.applyMatrix4(zt),this},rotateZ:function(t){return zt.makeRotationZ(t),this.applyMatrix4(zt),this},translate:function(t,e,n){return zt.makeTranslation(t,e,n),this.applyMatrix4(zt),this},scale:function(t,e,n){return zt.makeScale(t,e,n),this.applyMatrix4(zt),this},lookAt:function(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this},setFromObject:function(t){let e=t.geometry;if(t.isPoints||t.isLine){let n=new Pe(e.vertices.length*3,3),i=new Pe(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){let r=new Pe(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&(e&&e.isGeometry&&this.fromGeometry(e));return this},setFromPoints:function(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){let n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){let n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){let n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){let n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){let n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new lc().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){let e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new ge(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){let n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new ge(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){let n=new Float32Array(t.colors.length*3);this.setAttribute("color",new ge(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){let n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new ge(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){let n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new ge(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(let n in t.morphTargets){let i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){let a=r[s],c=new Pe(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){let n=new Pe(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){let n=new Pe(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Mt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-Infinity,-Infinity,-Infinity),new w(Infinity,Infinity,Infinity));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,xt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,xt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(xt.min),this.boundingBox.expandByPoint(xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Rt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,Infinity);return}if(t){let n=this.boundingSphere.center;if(xt.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(xt.min,ir.min),xt.expandByPoint(Je),Je.addVectors(xt.max,ir.max),xt.expandByPoint(Je)):(xt.expandByPoint(ir.min),xt.expandByPoint(ir.max))}xt.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Je.fromBufferAttribute(o,c),a&&(ui.fromBufferAttribute(t,c),Je.add(ui)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new w,r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,u=new w;if(t)for(let h=0,d=t.count;h<d;h+=3){let f=t.getX(h+0),p=t.getX(h+1),v=t.getX(h+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),o.add(l),a.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(t.attributes[i]===void 0)continue;let r=n[i],s=r.array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)},toNonIndexed:function(){function t(o,a){let c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l),d=0,f=0;for(let p=0,v=a.length;p<v;p++){d=a[p]*l;for(let y=0;y<l;y++)h[f++]=c[d++]}return new ge(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let e=new De,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){let h=c[l],d=t(h,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=d.toJSON(t.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new De().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=t.morphAttributes;for(let c in r){let l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,l=s.length;c<l;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var uc=new ye,Pn=new si,_o=new Rt,gn=new w,vn=new w,yn=new w,bo=new w,wo=new w,Mo=new w,Yr=new w,Zr=new w,Jr=new w,fi=new U,di=new U,pi=new U,rr=new w,$r=new w;function We(t,e){ue.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new De,this.material=e!==void 0?e:new nn,this.updateMorphTargets()}We.prototype=Object.assign(Object.create(ue.prototype),{constructor:We,isMesh:!0,copy:function(t){return ue.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),t.ray.intersectsSphere(_o)===!1)return;if(uc.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(uc),n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)return;let s;if(n.isBufferGeometry){let o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,v=d.length;p<v;p++){let y=d[p],g=i[y.materialIndex],m=Math.max(y.start,f.start),E=Math.min(y.start+y.count,f.start+f.count);for(let T=m,S=E;T<S;T+=3){let _=o.getX(T),A=o.getX(T+1),F=o.getX(T+2);s=Qr(this,g,t,Pn,a,c,l,u,h,_,A,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let y=p,g=v;y<g;y+=3){let m=o.getX(y),E=o.getX(y+1),T=o.getX(y+2);s=Qr(this,i,t,Pn,a,c,l,u,h,m,E,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,v=d.length;p<v;p++){let y=d[p],g=i[y.materialIndex],m=Math.max(y.start,f.start),E=Math.min(y.start+y.count,f.start+f.count);for(let T=m,S=E;T<S;T+=3){let _=T,A=T+1,F=T+2;s=Qr(this,g,t,Pn,a,c,l,u,h,_,A,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let y=p,g=v;y<g;y+=3){let m=y,E=y+1,T=y+2;s=Qr(this,i,t,Pn,a,c,l,u,h,m,E,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}else if(n.isGeometry){let o=Array.isArray(i),a=n.vertices,c=n.faces,l,u=n.faceVertexUvs[0];u.length>0&&(l=u);for(let h=0,d=c.length;h<d;h++){let f=c[h],p=o?i[f.materialIndex]:i;if(p===void 0)continue;let v=a[f.a],y=a[f.b],g=a[f.c];if(s=fc(this,p,t,Pn,v,y,g,rr),s){if(l&&l[h]){let m=l[h];fi.copy(m[0]),di.copy(m[1]),pi.copy(m[2]),s.uv=Ke.getUV(rr,v,y,g,fi,di,pi,new U)}s.face=f,s.faceIndex=h,e.push(s)}}}}});function fc(t,e,n,i,r,s,o,a){let c;if(e.side===$e?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Xn,a),c===null)return null;$r.copy(a),$r.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo($r);return l<n.near||l>n.far?null:{distance:l,point:$r.clone(),object:t}}function Qr(t,e,n,i,r,s,o,a,c,l,u,h){gn.fromBufferAttribute(r,l),vn.fromBufferAttribute(r,u),yn.fromBufferAttribute(r,h);let d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){Yr.set(0,0,0),Zr.set(0,0,0),Jr.set(0,0,0);for(let p=0,v=s.length;p<v;p++){let y=d[p],g=s[p];if(y===0)continue;bo.fromBufferAttribute(g,l),wo.fromBufferAttribute(g,u),Mo.fromBufferAttribute(g,h),o?(Yr.addScaledVector(bo,y),Zr.addScaledVector(wo,y),Jr.addScaledVector(Mo,y)):(Yr.addScaledVector(bo.sub(gn),y),Zr.addScaledVector(wo.sub(vn),y),Jr.addScaledVector(Mo.sub(yn),y))}gn.add(Yr),vn.add(Zr),yn.add(Jr)}t.isSkinnedMesh&&(t.boneTransform(l,gn),t.boneTransform(u,vn),t.boneTransform(h,yn));let f=fc(t,e,n,i,gn,vn,yn,rr);if(f){a&&(fi.fromBufferAttribute(a,l),di.fromBufferAttribute(a,u),pi.fromBufferAttribute(a,h),f.uv=Ke.getUV(rr,gn,vn,yn,fi,di,pi,new U)),c&&(fi.fromBufferAttribute(c,l),di.fromBufferAttribute(c,u),pi.fromBufferAttribute(c,h),f.uv2=Ke.getUV(rr,gn,vn,yn,fi,di,pi,new U));let p=new Wr(l,u,h);Ke.getNormal(gn,vn,yn,p.normal),f.face=p}return f}var So=class extends De{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function p(v,y,g,m,E,T,S,_,A,F,X){let te=T/A,C=S/F,B=T/2,D=S/2,O=_/2,R=A+1,P=F+1,G=0,k=0,K=new w;for(let re=0;re<P;re++){let ie=re*C-D;for(let xe=0;xe<R;xe++){let we=xe*te-B;K[v]=we*m,K[y]=ie*E,K[g]=O,l.push(K.x,K.y,K.z),K[v]=0,K[y]=0,K[g]=_>0?1:-1,u.push(K.x,K.y,K.z),h.push(xe/A),h.push(1-re/F),G+=1}}for(let re=0;re<F;re++)for(let ie=0;ie<A;ie++){let xe=d+ie+R*re,we=d+ie+R*(re+1),Ve=d+(ie+1)+R*(re+1),H=d+(ie+1)+R*re;c.push(xe,we,H),c.push(we,Ve,H),k+=6}a.addGroup(f,k,X),f+=k,d+=G}}};function mi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rt(t){let e={};for(let n=0;n<t.length;n++){let i=mi(t[n]);for(let r in i)e[r]=i[r]}return e}var Kr={clone:mi,merge:rt},Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function et(t){pe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Uu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}et.prototype=Object.create(pe.prototype);et.prototype.constructor=et;et.prototype.isShaderMaterial=!0;et.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};et.prototype.toJSON=function(t){let e=pe.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i],s=r.value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function xn(){ue.call(this),this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}xn.prototype=Object.assign(Object.create(ue.prototype),{constructor:xn,isCamera:!0,copy:function(t,e){return ue.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new w),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ue.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){ue.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Ye(t=50,e=1,n=.1,i=2e3){xn.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ye.prototype=Object.assign(Object.create(xn.prototype),{constructor:Ye,isPerspectiveCamera:!0,copy:function(t,e){return xn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){let e=.5*this.getFilmHeight()/t;this.fov=ve.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let t=Math.tan(ve.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return ve.RAD2DEG*2*Math.atan(Math.tan(ve.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=this.near,e=t*Math.tan(ve.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ue.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var gi=90,vi=1;function yi(t,e,n){if(ue.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new Ye(gi,vi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);let r=new Ye(gi,vi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);let s=new Ye(gi,vi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new w(0,1,0)),this.add(s);let o=new Ye(gi,vi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);let a=new Ye(gi,vi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new w(0,0,1)),this.add(a);let c=new Ye(gi,vi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();let h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(u,i),l.setRenderTarget(n,1),l.render(u,r),l.setRenderTarget(n,2),l.render(u,s),l.setRenderTarget(n,3),l.render(u,o),l.setRenderTarget(n,4),l.render(u,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(u,c),l.setRenderTarget(d),l.xr.enabled=h}}yi.prototype=Object.create(ue.prototype);yi.prototype.constructor=yi;function _n(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Us,o=o!==void 0?o:Ln,ze.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}_n.prototype=Object.create(ze.prototype);_n.prototype.constructor=_n;_n.prototype.isCubeTexture=!0;Object.defineProperty(_n.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function In(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),Ct.call(this,t,t,e),e=e||{},this.texture=new _n(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}In.prototype=Object.create(Ct.prototype);In.prototype.constructor=In;In.prototype.isWebGLCubeRenderTarget=!0;In.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=Lt,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},i=new So(5,5,5),r=new et({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:qi});r.uniforms.tEquirect.value=e;let s=new We(i,r),o=e.minFilter;e.minFilter===Ar&&(e.minFilter=it);let a=new yi(1,10,this);return a.update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};In.prototype.clear=function(t,e,n,i){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)};function xi(t,e,n,i,r,s,o,a,c,l,u,h){ze.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:ot,this.minFilter=l!==void 0?l:ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}xi.prototype=Object.create(ze.prototype);xi.prototype.constructor=xi;xi.prototype.isDataTexture=!0;var _i=new Rt,es=new w,sr=class{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new Ft,n!==void 0?n:new Ft,i!==void 0?i:new Ft,r!==void 0?r:new Ft,s!==void 0?s:new Ft,o!==void 0?o:new Ft]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],p=i[10],v=i[11],y=i[12],g=i[13],m=i[14],E=i[15];return n[0].setComponents(a-r,h-c,v-d,E-y).normalize(),n[1].setComponents(a+r,h+c,v+d,E+y).normalize(),n[2].setComponents(a+s,h+l,v+f,E+g).normalize(),n[3].setComponents(a-s,h-l,v-f,E-g).normalize(),n[4].setComponents(a-o,h-u,v-p,E-m).normalize(),n[5].setComponents(a+o,h+u,v+p,E+m).normalize(),this}intersectsObject(e){let n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),_i.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++){let o=n[s].distanceToPoint(i);if(o<r)return!1}return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}};function dc(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.requestAnimationFrame(r),e=!0},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hu(t,e){let n=e.isWebGL2,i=new WeakMap;function r(l,u){let h=l.array,d=l.usage,f=t.createBuffer();t.bindBuffer(u,f),t.bufferData(u,h,d),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let d=u.array,f=u.updateRange;t.bindBuffer(h,l),f.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):t.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var ts=class extends De{constructor(e=1,n=1,i=1,r=1){super();this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=n/c,f=[],p=[],v=[],y=[];for(let g=0;g<u;g++){let m=g*d-o;for(let E=0;E<l;E++){let T=E*h-s;p.push(T,-m,0),v.push(0,0,1),y.push(E/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){let E=m+l*g,T=m+l*(g+1),S=m+1+l*(g+1),_=m+1+l*g;f.push(E,T,_),f.push(T,S,_)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(y,2))}},ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu="vec3 transformed = vec3( position );",Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Ju=`#ifdef USE_BUMPMAP
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
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,nf=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,af=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
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
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,mf=`#ifdef USE_ENVMAP
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
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`vec3 diffuse = vec3( 1.0 );
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
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Lf=`uniform bool receiveShadow;
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Cf=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
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
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
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
		float roughness = material.specularRoughness;
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
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
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
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
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
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,Qf=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Kf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,td=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
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
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ud=`#ifdef USE_SHADOWMAP
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
#endif`,fd=`#ifdef USE_SHADOWMAP
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
#endif`,dd=`#ifdef USE_SHADOWMAP
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
#endif`,pd=`float getShadowMask() {
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
}`,md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
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
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wd=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Sd=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Ed=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Td=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ad=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ld=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Rd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Id=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`#include <envmap_common_pars_fragment>
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
}`,Fd=`#include <common>
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
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
}`,Ud=`#define DISTANCE
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
}`,Gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kd=`uniform vec3 diffuse;
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vd=`uniform float scale;
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
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
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
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#include <common>
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
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
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
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define LAMBERT
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
}`,Yd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
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
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jd=`#define TOON
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Qd=`#define PHONG
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
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
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,ep=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
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
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
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
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,op=`uniform vec3 color;
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
}`,ap=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lp=`uniform float rotation;
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
}`,Ae={alphamap_fragment:ku,alphamap_pars_fragment:Vu,alphatest_fragment:Wu,aomap_fragment:ju,aomap_pars_fragment:qu,begin_vertex:Xu,beginnormal_vertex:Yu,bsdfs:Zu,bumpmap_pars_fragment:Ju,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:rf,color_vertex:sf,common:of,cube_uv_reflection_fragment:af,defaultnormal_vertex:cf,displacementmap_pars_vertex:lf,displacementmap_vertex:hf,emissivemap_fragment:uf,emissivemap_pars_fragment:ff,encodings_fragment:df,encodings_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:gf,envmap_pars_fragment:vf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:Cf,envmap_vertex:xf,fog_vertex:_f,fog_pars_vertex:bf,fog_fragment:wf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_fragment:Ef,lightmap_pars_fragment:Tf,lights_lambert_vertex:Af,lights_pars_begin:Lf,lights_toon_fragment:Rf,lights_toon_pars_fragment:Pf,lights_phong_fragment:If,lights_phong_pars_fragment:Df,lights_physical_fragment:Nf,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:Ff,lights_fragment_end:zf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Gf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:kf,map_fragment:Vf,map_pars_fragment:Wf,map_particle_fragment:jf,map_particle_pars_fragment:qf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:Yf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Jf,morphtarget_vertex:$f,normal_fragment_begin:Qf,normal_fragment_maps:Kf,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:id,packing:rd,premultiplied_alpha_fragment:sd,project_vertex:od,dithering_fragment:ad,dithering_pars_fragment:cd,roughnessmap_fragment:ld,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:fd,shadowmap_vertex:dd,shadowmask_pars_fragment:pd,skinbase_vertex:md,skinning_pars_vertex:gd,skinning_vertex:vd,skinnormal_vertex:yd,specularmap_fragment:xd,specularmap_pars_fragment:_d,tonemapping_fragment:bd,tonemapping_pars_fragment:wd,transmissionmap_fragment:Md,transmissionmap_pars_fragment:Sd,uv_pars_fragment:Ed,uv_pars_vertex:Td,uv_vertex:Ad,uv2_pars_fragment:Ld,uv2_pars_vertex:Cd,uv2_vertex:Rd,worldpos_vertex:Pd,background_frag:Id,background_vert:Dd,cube_frag:Nd,cube_vert:Od,depth_frag:Bd,depth_vert:Fd,distanceRGBA_frag:zd,distanceRGBA_vert:Ud,equirect_frag:Gd,equirect_vert:Hd,linedashed_frag:kd,linedashed_vert:Vd,meshbasic_frag:Wd,meshbasic_vert:jd,meshlambert_frag:qd,meshlambert_vert:Xd,meshmatcap_frag:Yd,meshmatcap_vert:Zd,meshtoon_frag:Jd,meshtoon_vert:$d,meshphong_frag:Qd,meshphong_vert:Kd,meshphysical_frag:ep,meshphysical_vert:tp,normal_frag:np,normal_vert:ip,points_frag:rp,points_vert:sp,shadow_frag:op,shadow_vert:ap,sprite_frag:cp,sprite_vert:lp},Y={common:{diffuse:{value:new se(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new at}},sprite:{diffuse:{value:new se(15658734)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new at}}},ct={basic:{uniforms:rt([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:rt([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.fog,Y.lights,{emissive:{value:new se(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:rt([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:rt([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:rt([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new se(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:rt([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:rt([Y.points,Y.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:rt([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:rt([Y.common,Y.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:rt([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.normal_vert,fragmentShader:Ae.normal_frag},sprite:{uniforms:rt([Y.sprite,Y.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:rt([Y.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:rt([Y.common,Y.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:rt([Y.lights,Y.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};ct.physical={uniforms:rt([ct.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new U(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new se(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function hp(t,e,n,i,r){let s=new se(0),o=0,a,c,l=null,u=0,h=null;function d(p,v,y,g){let m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));let E=t.xr,T=E.getSession&&E.getSession();T&&T.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===Hs)?(c===void 0&&(c=new We(new So(1,1,1),new et({name:"BackgroundCubeMaterial",uniforms:mi(ct.cube.uniforms),vertexShader:ct.cube.vertexShader,fragmentShader:ct.cube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,_,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||u!==m.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,u=m.version,h=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new We(new ts(2,2),new et({name:"BackgroundMaterial",uniforms:mi(ct.background.uniforms),vertexShader:ct.background.vertexShader,fragmentShader:ct.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||u!==m.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,u=m.version,h=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,v){n.buffers.color.setClear(p.r,p.g,p.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(p,v=1){s.set(p),o=v,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:d}}function up(t,e,n,i){let r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null),l=c;function u(D,O,R,P,G){let k=!1;if(o){let K=p(P,R,O);l!==K&&(l=K,d(l.object)),k=y(P,G),k&&g(P,G)}else{let K=O.wireframe===!0;(l.geometry!==P.id||l.program!==R.id||l.wireframe!==K)&&(l.geometry=P.id,l.program=R.id,l.wireframe=K,k=!0)}D.isInstancedMesh===!0&&(k=!0),G!==null&&n.update(G,34963),k&&(A(D,O,R,P),G!==null&&t.bindBuffer(34963,n.get(G).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function f(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,O,R){let P=R.wireframe===!0,G=a[D.id];G===void 0&&(G={},a[D.id]=G);let k=G[O.id];k===void 0&&(k={},G[O.id]=k);let K=k[P];return K===void 0&&(K=v(h()),k[P]=K),K}function v(D){let O=[],R=[],P=[];for(let G=0;G<r;G++)O[G]=0,R[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:R,attributeDivisors:P,object:D,attributes:{},index:null}}function y(D,O){let R=l.attributes,P=D.attributes,G=0;for(let k in P){let K=R[k],re=P[k];if(K===void 0)return!0;if(K.attribute!==re)return!0;if(K.data!==re.data)return!0;G++}return l.attributesNum!==G?!0:l.index!==O}function g(D,O){let R={},P=D.attributes,G=0;for(let k in P){let K=P[k],re={};re.attribute=K,K.data&&(re.data=K.data),R[k]=re,G++}l.attributes=R,l.attributesNum=G,l.index=O}function m(){let D=l.newAttributes;for(let O=0,R=D.length;O<R;O++)D[O]=0}function E(D){T(D,0)}function T(D,O){let R=l.newAttributes,P=l.enabledAttributes,G=l.attributeDivisors;if(R[D]=1,P[D]===0&&(t.enableVertexAttribArray(D),P[D]=1),G[D]!==O){let k=i.isWebGL2?t:e.get("ANGLE_instanced_arrays");k[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),G[D]=O}}function S(){let D=l.newAttributes,O=l.enabledAttributes;for(let R=0,P=O.length;R<P;R++)O[R]!==D[R]&&(t.disableVertexAttribArray(R),O[R]=0)}function _(D,O,R,P,G,k){i.isWebGL2===!0&&(R===5124||R===5125)?t.vertexAttribIPointer(D,O,R,G,k):t.vertexAttribPointer(D,O,R,P,G,k)}function A(D,O,R,P){if(i.isWebGL2===!1&&(D.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let G=P.attributes,k=R.getAttributes(),K=O.defaultAttributeValues;for(let re in k){let ie=k[re];if(ie>=0){let xe=G[re];if(xe!==void 0){let we=xe.normalized,Ve=xe.itemSize,H=n.get(xe);if(H===void 0)continue;let nt=H.buffer,de=H.type,Re=H.bytesPerElement;if(xe.isInterleavedBufferAttribute){let Me=xe.data,Ne=Me.stride,Te=xe.offset;Me&&Me.isInstancedInterleavedBuffer?(T(ie,Me.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=Me.meshPerAttribute*Me.count)):E(ie),t.bindBuffer(34962,nt),_(ie,Ve,de,we,Ne*Re,Te*Re)}else xe.isInstancedBufferAttribute?(T(ie,xe.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)):E(ie),t.bindBuffer(34962,nt),_(ie,Ve,de,we,0,0)}else if(re==="instanceMatrix"){let we=n.get(D.instanceMatrix);if(we===void 0)continue;let Ve=we.buffer,H=we.type;T(ie+0,1),T(ie+1,1),T(ie+2,1),T(ie+3,1),t.bindBuffer(34962,Ve),t.vertexAttribPointer(ie+0,4,H,!1,64,0),t.vertexAttribPointer(ie+1,4,H,!1,64,16),t.vertexAttribPointer(ie+2,4,H,!1,64,32),t.vertexAttribPointer(ie+3,4,H,!1,64,48)}else if(re==="instanceColor"){let we=n.get(D.instanceColor);if(we===void 0)continue;let Ve=we.buffer,H=we.type;T(ie,1),t.bindBuffer(34962,Ve),t.vertexAttribPointer(ie,3,H,!1,12,0)}else if(K!==void 0){let we=K[re];if(we!==void 0)switch(we.length){case 2:t.vertexAttrib2fv(ie,we);break;case 3:t.vertexAttrib3fv(ie,we);break;case 4:t.vertexAttrib4fv(ie,we);break;default:t.vertexAttrib1fv(ie,we)}}}}S()}function F(){C();for(let D in a){let O=a[D];for(let R in O){let P=O[R];for(let G in P)f(P[G].object),delete P[G];delete O[R]}delete a[D]}}function X(D){if(a[D.id]===void 0)return;let O=a[D.id];for(let R in O){let P=O[R];for(let G in P)f(P[G].object),delete P[G];delete O[R]}delete a[D.id]}function te(D){for(let O in a){let R=a[O];if(R[D.id]===void 0)continue;let P=R[D.id];for(let G in P)f(P[G].object),delete P[G];delete R[D.id]}}function C(){if(B(),l===c)return;l=c,d(l.object)}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:C,resetDefaultState:B,dispose:F,releaseStatesOfGeometry:X,releaseStatesOfProgram:te,initAttributes:m,enableAttribute:E,disableUnusedAttributes:S}}function fp(t,e,n,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,u){t.drawArrays(s,l,u),n.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=t,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),n.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function dp(t,e,n){let i;function r(){if(i!==void 0)return i;let _=e.get("EXT_texture_filter_anisotropic");return _!==null?i=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(_){if(_==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&(t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0)?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext,a=n.precision!==void 0?n.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=n.logarithmicDepthBuffer===!0,u=t.getParameter(34930),h=t.getParameter(35660),d=t.getParameter(3379),f=t.getParameter(34076),p=t.getParameter(34921),v=t.getParameter(36347),y=t.getParameter(36348),g=t.getParameter(36349),m=h>0,E=o||!!e.get("OES_texture_float"),T=m&&E,S=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:S}}function pp(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Ft,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){let p=h.length!==0||d||i!==0||r;return r=d,n=u(h,f,0),i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){let p=h.clippingPlanes,v=h.clipIntersection,y=h.clipShadows,g=t.get(h);if(!r||p===null||p.length===0||s&&!y)s?u(null):l();else{let m=s?0:i,E=m*4,T=g.clippingState||null;c.value=T,T=u(p,d,E,f);for(let S=0;S!==E;++S)T[S]=n[S];g.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let v=h!==null?h.length:0,y=null;if(v!==0){if(y=c.value,p!==!0||y===null){let g=f+v*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<g)&&(y=new Float32Array(g));for(let E=0,T=f;E!==v;++E,T+=4)o.copy(h[E]).applyMatrix4(m,a),o.normal.toArray(y,T),y[T+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function mp(t){let e=new WeakMap;function n(o,a){return a===Ia?o.mapping=Us:a===Da&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ia||a===Da)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=t.getRenderList(),u=t.getRenderTarget(),h=t.getRenderState(),d=new In(c.height/2);return d.fromEquirectangularTexture(t,o),e.set(o,d),t.setRenderTarget(u),t.setRenderList(l),t.setRenderState(h),o.addEventListener("dispose",r),n(d.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function gp(t){let e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function vp(t,e,n,i){let r=new WeakMap,s=new WeakMap;function o(h){let d=h.target,f=r.get(d);f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);d.removeEventListener("dispose",o),r.delete(d);let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let f=r.get(d);return f||(d.addEventListener("dispose",o),d.isBufferGeometry?f=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new De().setFromObject(h)),f=d._bufferGeometry),r.set(d,f),n.memory.geometries++,f)}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],34962);let f=h.morphAttributes;for(let p in f){let v=f[p];for(let y=0,g=v.length;y<g;y++)e.update(v[y],34962)}}function l(h){let d=[],f=h.index,p=h.attributes.position,v=0;if(f!==null){let m=f.array;v=f.version;for(let E=0,T=m.length;E<T;E+=3){let S=m[E+0],_=m[E+1],A=m[E+2];d.push(S,_,_,A,A,S)}}else{let m=p.array;v=p.version;for(let E=0,T=m.length/3-1;E<T;E+=3){let S=E+0,_=E+1,A=E+2;d.push(S,_,_,A,A,S)}}let y=new(hc(d)>65535?nr:tr)(d,1);y.version=v;let g=s.get(h);g&&e.remove(g),s.set(h,y)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&(d.version<f.version&&l(h))}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function yp(t,e,n,i){let r=i.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){t.drawElements(s,f,a,d*c),n.update(f,s,1)}function h(d,f,p){if(p===0)return;let v,y;if(r)v=t,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](s,f,a,d*c,p),n.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function xp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){n.calls++;switch(o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _p(t,e){return t[0]-e[0]}function bp(t,e){return Math.abs(e[1])-Math.abs(t[1])}function wp(t){let e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,u=l===void 0?0:l.length,h=e[o.id];if(h===void 0){h=[];for(let y=0;y<u;y++)h[y]=[y,0];e[o.id]=h}for(let y=0;y<u;y++){let g=h[y];g[0]=y,g[1]=l[y]}h.sort(bp);for(let y=0;y<8;y++)y<u&&h[y][1]?(i[y][0]=h[y][0],i[y][1]=h[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(_p);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let g=i[y],m=g[0],E=g[1];m!==Number.MAX_SAFE_INTEGER&&E?(d&&o.getAttribute("morphTarget"+y)!==d[m]&&o.setAttribute("morphTarget"+y,d[m]),f&&o.getAttribute("morphNormal"+y)!==f[m]&&o.setAttribute("morphNormal"+y,f[m]),n[y]=E,p+=E):(d&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),f&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),n[y]=0)}let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function Mp(t,e,n,i){let r=new WeakMap;function s(a){let c=i.render.frame,l=a.geometry,u=e.get(a,l);return r.get(u)!==c&&(l.isGeometry&&u.updateFromObject(a),e.update(u),r.set(u,c)),a.isInstancedMesh&&(n.update(a.instanceMatrix,34962),a.instanceColor!==null&&n.update(a.instanceColor,34962)),u}function o(){r=new WeakMap}return{update:s,dispose:o}}function or(t=null,e=1,n=1,i=1){ze.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}or.prototype=Object.create(ze.prototype);or.prototype.constructor=or;or.prototype.isDataTexture2DArray=!0;function ar(t=null,e=1,n=1,i=1){ze.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ar.prototype=Object.create(ze.prototype);ar.prototype.constructor=ar;ar.prototype.isDataTexture3D=!0;var pc=new ze,Sp=new or,Ep=new ar,mc=new _n,gc=[],vc=[],yc=new Float32Array(16),xc=new Float32Array(9),_c=new Float32Array(4);function bi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function _t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=vc[e];n===void 0&&(n=new Int32Array(e),vc[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Tp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Ap(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),_t(n,e)}}function Lp(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),_t(n,e)}}function Cp(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),_t(n,e)}}function Rp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),_t(n,e)}else{if(St(n,i))return;_c.set(i),t.uniformMatrix2fv(this.addr,!1,_c),_t(n,i)}}function Pp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),_t(n,e)}else{if(St(n,i))return;xc.set(i),t.uniformMatrix3fv(this.addr,!1,xc),_t(n,i)}}function Ip(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),_t(n,e)}else{if(St(n,i))return;yc.set(i),t.uniformMatrix4fv(this.addr,!1,yc),_t(n,i)}}function Dp(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||pc,r)}function Np(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sp,r)}function Op(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ep,r)}function Bp(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||mc,r)}function Fp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function zp(t,e){let n=this.cache;if(St(n,e))return;t.uniform2iv(this.addr,e),_t(n,e)}function Up(t,e){let n=this.cache;if(St(n,e))return;t.uniform3iv(this.addr,e),_t(n,e)}function Gp(t,e){let n=this.cache;if(St(n,e))return;t.uniform4iv(this.addr,e),_t(n,e)}function Hp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function kp(t){switch(t){case 5126:return Tp;case 35664:return Ap;case 35665:return Lp;case 35666:return Cp;case 35674:return Rp;case 35675:return Pp;case 35676:return Ip;case 5124:case 35670:return Fp;case 35667:case 35671:return zp;case 35668:case 35672:return Up;case 35669:case 35673:return Gp;case 5125:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return Np}}function Vp(t,e){t.uniform1fv(this.addr,e)}function Wp(t,e){t.uniform1iv(this.addr,e)}function jp(t,e){t.uniform2iv(this.addr,e)}function qp(t,e){t.uniform3iv(this.addr,e)}function Xp(t,e){t.uniform4iv(this.addr,e)}function Yp(t,e){let n=bi(e,this.size,2);t.uniform2fv(this.addr,n)}function Zp(t,e){let n=bi(e,this.size,3);t.uniform3fv(this.addr,n)}function Jp(t,e){let n=bi(e,this.size,4);t.uniform4fv(this.addr,n)}function $p(t,e){let n=bi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Qp(t,e){let n=bi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Kp(t,e){let n=bi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function em(t,e,n){let i=e.length,r=bc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||pc,r[s])}function tm(t,e,n){let i=e.length,r=bc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||mc,r[s])}function nm(t){switch(t){case 5126:return Vp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Qp;case 35676:return Kp;case 5124:case 35670:return Wp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35680:case 36300:case 36308:case 36293:return tm}}function im(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=kp(e.type)}function wc(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=nm(e.type)}wc.prototype.updateCache=function(t){let e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),_t(e,t)};function Mc(t){this.id=t,this.seq=[],this.map={}}Mc.prototype.setValue=function(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(t,e[o.id],n)}};var Eo=/([\w\d_]+)(\])?(\[|\.)?/g;function Sc(t,e){t.seq.push(e),t.map[e.id]=e}function rm(t,e,n){let i=t.name,r=i.length;for(Eo.lastIndex=0;;){let s=Eo.exec(i),o=Eo.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Sc(n,l===void 0?new im(a,t,e):new wc(a,t,e));break}else{let u=n.map,h=u[a];h===void 0&&(h=new Mc(a),Sc(n,h)),n=h}}}function bn(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);rm(r,s,this)}}bn.prototype.setValue=function(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)};bn.prototype.setOptional=function(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)};bn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};bn.seqWithValue=function(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n};function Ec(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var sm=0;function om(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Tc(t){switch(t){case Qn:return["Linear","( value )"];case Ys:return["sRGB","( value )"];case Xa:return["RGBE","( value )"];case Ya:return["RGBM","( value, 7.0 )"];case Za:return["RGBM","( value, 16.0 )"];case Ja:return["RGBD","( value, 256.0 )"];case Nr:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case bu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ac(t,e,n){let i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+om(s)}function cr(t,e){let n=Tc(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function am(t,e){let n=Tc(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function cm(t,e){let n;switch(e){case _h:n="Linear";break;case bh:n="Reinhard";break;case wh:n="OptimizedCineon";break;case Mh:n="ACESFilmic";break;case Sh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lm(t){let e=[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return e.filter(lr).join(`
`)}function hm(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function um(t,e){let n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name;n[o]=t.getAttribLocation(e,o)}return n}function lr(t){return t!==""}function Lc(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(t){return t.replace(fm,dm)}function dm(t,e){let n=Ae[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return To(n)}var pm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(t){return t.replace(mm,Rc).replace(pm,gm)}function gm(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Rc(t,e,n,i)}function Rc(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ic(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vm(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function ym(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Gs:e="ENVMAP_TYPE_CUBE";break;case Hs:case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gs:case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Tr:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case xh:e="ENVMAP_BLENDING_ADD";break}return e}function bm(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,c=vm(n),l=ym(n),u=xm(n),h=_m(n),d=t.gammaFactor>0?t.gammaFactor:1,f=n.isWebGL2?"":lm(n),p=hm(s),v=r.createProgram(),y,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=[p].filter(lr).join(`
`),y.length>0&&(y+=`
`),g=[f,p].filter(lr).join(`
`),g.length>0&&(g+=`
`)):(y=[Ic(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),g=[f,Ic(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ae.tonemapping_pars_fragment:"",n.toneMapping!==Yi?cm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Ae.encodings_pars_fragment,n.map?cr("mapTexelToLinear",n.mapEncoding):"",n.matcap?cr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?cr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?cr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?cr("lightMapTexelToLinear",n.lightMapEncoding):"",am("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lr).join(`
`)),o=To(o),o=Lc(o,n),o=Cc(o,n),a=To(a),a=Lc(a,n),a=Cc(a,n),o=Pc(o),a=Pc(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===$a?"":"out highp vec4 pc_fragColor;",n.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=m+y+o,T=m+g+a,S=Ec(r,35633,E),_=Ec(r,35632,T);if(r.attachShader(v,S),r.attachShader(v,_),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){let X=r.getProgramInfoLog(v).trim(),te=r.getShaderInfoLog(S).trim(),C=r.getShaderInfoLog(_).trim(),B=!0,D=!0;if(r.getProgramParameter(v,35714)===!1){B=!1;let O=Ac(r,S,"vertex"),R=Ac(r,_,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",X,O,R)}else X!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",X):(te===""||C==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:X,vertexShader:{log:te,prefix:y},fragmentShader:{log:C,prefix:g}})}r.deleteShader(S),r.deleteShader(_);let A;this.getUniforms=function(){return A===void 0&&(A=new bn(r,v)),A};let F;return this.getAttributes=function(){return F===void 0&&(F=um(r,v)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=_,this}function wm(t,e,n,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(_){let A=_.skeleton,F=A.bones;if(l)return 1024;{let X=u,te=Math.floor((X-20)/4),C=Math.min(te,F.length);return C<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+C+"."),0):C}}function y(_){let A;return _?_.isTexture?A=_.encoding:_.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=_.texture.encoding):A=Qn,A}function g(_,A,F,X,te){let C=X.fog,B=_.isMeshStandardMaterial?X.environment:null,D=e.get(_.envMap||B),O=f[_.type],R=te.isSkinnedMesh?v(te):0;_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let P,G;if(O){let re=ct[O];P=re.vertexShader,G=re.fragmentShader}else P=_.vertexShader,G=_.fragmentShader;let k=t.getRenderTarget(),K={isWebGL2:a,shaderID:O,shaderName:_.type,vertexShader:P,fragmentShader:G,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:h,outputEncoding:k!==null?y(k.texture):t.outputEncoding,map:!!_.map,mapEncoding:y(_.map),matcap:!!_.matcap,matcapEncoding:y(_.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:y(D),envMapCubeUV:!!D&&(D.mapping===Hs||D.mapping===ks),lightMap:!!_.lightMap,lightMapEncoding:y(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:y(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Su,tangentSpaceNormalMap:_.normalMapType===Kn,clearcoatMap:!!_.clearcoatMap,clearcoatRoughnessMap:!!_.clearcoatRoughnessMap,clearcoatNormalMap:!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,alphaMap:!!_.alphaMap,gradientMap:!!_.gradientMap,sheen:!!_.sheen,transmissionMap:!!_.transmissionMap,combine:_.combine,vertexTangents:_.normalMap&&_.vertexTangents,vertexColors:_.vertexColors,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.transmissionMap)&&!!_.displacementMap,fog:!!C,useFog:_.fog,fogExp2:C&&C.isFogExp2,flatShading:_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:_.skinning&&R>0,maxBones:R,useVertexTexture:l,morphTargets:_.morphTargets,morphNormals:_.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:_.toneMapped?t.toneMapping:Yi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,alphaTest:_.alphaTest,doubleSided:_.side===Xn,flipSided:_.side===$e,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()};return K}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.fragmentShader),A.push(_.vertexShader)),_.defines!==void 0)for(let F in _.defines)A.push(F),A.push(_.defines[F]);if(_.isRawShaderMaterial===!1){for(let F=0;F<p.length;F++)A.push(_[p[F]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(_.customProgramCacheKey),A.join()}function E(_){let A=f[_.type],F;if(A){let X=ct[A];F=Kr.clone(X.uniforms)}else F=_.uniforms;return F}function T(_,A){let F;for(let X=0,te=o.length;X<te;X++){let C=o[X];if(C.cacheKey===A){F=C,++F.usedTimes;break}}return F===void 0&&(F=new bm(t,A,_,r),o.push(F)),F}function S(_){if(--_.usedTimes===0){let A=o.indexOf(_);o[A]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:T,releaseProgram:S,programs:o}}function Mm(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Em(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dc(t){let e=[],n=0,i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,f,p,v,y,g){let m=e[n],E=t.get(p);return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,program:E.program||s,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},e[n]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.program=E.program||s,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=y,m.group=g),n++,m}function c(d,f,p,v,y,g){let m=a(d,f,p,v,y,g);(p.transparent===!0?r:i).push(m)}function l(d,f,p,v,y,g){let m=a(d,f,p,v,y,g);(p.transparent===!0?r:i).unshift(m)}function u(d,f){i.length>1&&i.sort(d||Sm),r.length>1&&r.sort(f||Em)}function h(){for(let d=n,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function Tm(t){let e=new WeakMap;function n(r,s){let o=e.get(r),a;return o===void 0?(a=new Dc(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Dc(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function Am(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new w,color:new se};break;case"SpotLight":n={position:new w,direction:new w,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new w,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new w,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new w,halfWidth:new w,halfHeight:new w};break}return t[e.id]=n,n}}}function Lm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Cm=0;function Rm(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function Pm(t,e){let n=new Am,i=Lm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)r.probe.push(new w);let s=new w,o=new ye,a=new ye;function c(l,u,h){let d=0,f=0,p=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let v=0,y=0,g=0,m=0,E=0,T=0,S=0,_=0,A=h.matrixWorldInverse;l.sort(Rm);for(let X=0,te=l.length;X<te;X++){let C=l[X],B=C.color,D=C.intensity,O=C.distance,R=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=B.r*D,f+=B.g*D,p+=B.b*D;else if(C.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(C.sh.coefficients[P],D);else if(C.isDirectionalLight){let P=n.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(A),C.castShadow){let G=C.shadow,k=i.get(C);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,r.directionalShadow[v]=k,r.directionalShadowMap[v]=R,r.directionalShadowMatrix[v]=C.shadow.matrix,T++}r.directional[v]=P,v++}else if(C.isSpotLight){let P=n.get(C);if(P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(A),P.color.copy(B).multiplyScalar(D),P.distance=O,P.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(A),P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,C.castShadow){let G=C.shadow,k=i.get(C);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,r.spotShadow[g]=k,r.spotShadowMap[g]=R,r.spotShadowMatrix[g]=C.shadow.matrix,_++}r.spot[g]=P,g++}else if(C.isRectAreaLight){let P=n.get(C);P.color.copy(B).multiplyScalar(D),P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(A),a.identity(),o.copy(C.matrixWorld),o.premultiply(A),a.extractRotation(o),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),r.rectArea[m]=P,m++}else if(C.isPointLight){let P=n.get(C);if(P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(A),P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){let G=C.shadow,k=i.get(C);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,r.pointShadow[y]=k,r.pointShadowMap[y]=R,r.pointShadowMatrix[y]=C.shadow.matrix,S++}r.point[y]=P,y++}else if(C.isHemisphereLight){let P=n.get(C);P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(A),P.direction.normalize(),P.skyColor.copy(C.color).multiplyScalar(D),P.groundColor.copy(C.groundColor).multiplyScalar(D),r.hemi[E]=P,E++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=p;let F=r.hash;(F.directionalLength!==v||F.pointLength!==y||F.spotLength!==g||F.rectAreaLength!==m||F.hemiLength!==E||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==_)&&(r.directional.length=v,r.spot.length=g,r.rectArea.length=m,r.point.length=y,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=_,F.directionalLength=v,F.pointLength=y,F.spotLength=g,F.rectAreaLength=m,F.hemiLength=E,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=_,r.version=Cm++)}return{setup:c,state:r}}function Nc(t,e){let n=new Pm(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(u){n.setup(i,r,u)}let l={lightsArray:i,shadowsArray:r,lights:n};return{init:s,state:l,setupLights:c,pushLight:o,pushShadow:a}}function Im(t,e){let n=new WeakMap;function i(s,o){let a;return n.has(s)===!1?(a=new Nc(t,e),n.set(s,new WeakMap),n.get(s).set(o,a)):n.get(s).has(o)===!1?(a=new Nc(t,e),n.get(s).set(o,a)):a=n.get(s).get(o),a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Dn(t){pe.call(this),this.type="MeshDepthMaterial",this.depthPacking=wu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Dn.prototype=Object.create(pe.prototype);Dn.prototype.constructor=Dn;Dn.prototype.isMeshDepthMaterial=!0;Dn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Nn(t){pe.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Nn.prototype=Object.create(pe.prototype);Nn.prototype.constructor=Nn;Nn.prototype.isMeshDistanceMaterial=!0;Nn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Oc(t,e,n){let i=new sr,r=new U,s=new U,o=new Ie,a=[],c=[],l={},u={0:$e,1:qn,2:Xn},h=new et({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Nm,fragmentShader:Dm}),d=h.clone();d.defines.HORIZONAL_PASS=1;let f=new De;f.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new We(f,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa,this.render=function(S,_,A){if(v.enabled===!1)return;if(v.autoUpdate===!1&&v.needsUpdate===!1)return;if(S.length===0)return;let F=t.getRenderTarget(),X=t.getActiveCubeFace(),te=t.getActiveMipmapLevel(),C=t.state;C.setBlending(qi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let B=0,D=S.length;B<D;B++){let O=S[B],R=O.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);let P=R.getFrameExtents();if(r.multiply(P),s.copy(R.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/P.x),r.x=s.x*P.x,R.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/P.y),r.y=s.y*P.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===ji){let k={minFilter:it,magFilter:it,format:Lt};R.map=new Ct(r.x,r.y,k),R.map.texture.name=O.name+".shadowMap",R.mapPass=new Ct(r.x,r.y,k),R.camera.updateProjectionMatrix()}if(R.map===null){let k={minFilter:ot,magFilter:ot,format:Lt};R.map=new Ct(r.x,r.y,k),R.map.texture.name=O.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();let G=R.getViewportCount();for(let k=0;k<G;k++){let K=R.getViewport(k);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),C.viewport(o),R.updateMatrices(O,k),i=R.getFrustum(),T(_,A,R.camera,O,this.type)}!R.isPointLightShadow&&this.type===ji&&y(R,A),R.needsUpdate=!1}v.needsUpdate=!1,t.setRenderTarget(F,X,te)};function y(S,_){let A=e.update(p);h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(_,null,A,h,p,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(_,null,A,d,p,null)}function g(S,_,A){let F=S<<0|_<<1|A<<2,X=a[F];return X===void 0&&(X=new Dn({depthPacking:Mu,morphTargets:S,skinning:_}),a[F]=X),X}function m(S,_,A){let F=S<<0|_<<1|A<<2,X=c[F];return X===void 0&&(X=new Nn({morphTargets:S,skinning:_}),c[F]=X),X}function E(S,_,A,F,X,te,C){let B=null,D=g,O=S.customDepthMaterial;if(F.isPointLight===!0&&(D=m,O=S.customDistanceMaterial),O===void 0){let R=!1;A.morphTargets===!0&&(R=_.morphAttributes&&_.morphAttributes.position&&_.morphAttributes.position.length>0);let P=!1;S.isSkinnedMesh===!0&&(A.skinning===!0?P=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",S));let G=S.isInstancedMesh===!0;B=D(R,P,G)}else B=O;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){let R=B.uuid,P=A.uuid,G=l[R];G===void 0&&(G={},l[R]=G);let k=G[P];k===void 0&&(k=B.clone(),G[P]=k),B=k}return B.visible=A.visible,B.wireframe=A.wireframe,C===ji?B.side=A.shadowSide!==null?A.shadowSide:A.side:B.side=A.shadowSide!==null?A.shadowSide:u[A.side],B.clipShadows=A.clipShadows,B.clippingPlanes=A.clippingPlanes,B.clipIntersection=A.clipIntersection,B.wireframeLinewidth=A.wireframeLinewidth,B.linewidth=A.linewidth,F.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(F.matrixWorld),B.nearDistance=X,B.farDistance=te),B}function T(S,_,A,F,X){if(S.visible===!1)return;let te=S.layers.test(_.layers);if(te&&(S.isMesh||S.isLine||S.isPoints)&&((S.castShadow||S.receiveShadow&&X===ji)&&(!S.frustumCulled||i.intersectsObject(S)))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let B=e.update(S),D=S.material;if(Array.isArray(D)){let O=B.groups;for(let R=0,P=O.length;R<P;R++){let G=O[R],k=D[G.materialIndex];if(k&&k.visible){let K=E(S,B,k,F,A.near,A.far,X);t.renderBufferDirect(A,null,B,K,S,G)}}}else if(D.visible){let O=E(S,B,D,F,A.near,A.far,X);t.renderBufferDirect(A,null,B,O,S,null)}}let C=S.children;for(let B=0,D=C.length;B<D;B++)T(C[B],_,A,F,X)}}function Om(t,e,n){let i=n.isWebGL2;function r(){let L=!1,q=new Ie,ee=null,ce=new Ie(0,0,0,0);return{setMask:function(J){ee!==J&&!L&&(t.colorMask(J,J,J,J),ee=J)},setLocked:function(J){L=J},setClear:function(J,oe,fe,_e,ae){ae===!0&&(J*=_e,oe*=_e,fe*=_e),q.set(J,oe,fe,_e),ce.equals(q)===!1&&(t.clearColor(J,oe,fe,_e),ce.copy(q))},reset:function(){L=!1,ee=null,ce.set(-1,0,0,0)}}}function s(){let L=!1,q=null,ee=null,ce=null;return{setTest:function(J){J?re(2929):ie(2929)},setMask:function(J){q!==J&&!L&&(t.depthMask(J),q=J)},setFunc:function(J){if(ee!==J){if(J)switch(J){case uh:t.depthFunc(512);break;case fh:t.depthFunc(519);break;case dh:t.depthFunc(513);break;case zs:t.depthFunc(515);break;case ph:t.depthFunc(514);break;case mh:t.depthFunc(518);break;case gh:t.depthFunc(516);break;case vh:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);ee=J}},setLocked:function(J){L=J},setClear:function(J){ce!==J&&(t.clearDepth(J),ce=J)},reset:function(){L=!1,q=null,ee=null,ce=null}}}function o(){let L=!1,q=null,ee=null,ce=null,J=null,oe=null,fe=null,_e=null,ae=null;return{setTest:function(me){L||(me?re(2960):ie(2960))},setMask:function(me){q!==me&&!L&&(t.stencilMask(me),q=me)},setFunc:function(me,He,dt){(ee!==me||ce!==He||J!==dt)&&(t.stencilFunc(me,He,dt),ee=me,ce=He,J=dt)},setOp:function(me,He,dt){(oe!==me||fe!==He||_e!==dt)&&(t.stencilOp(me,He,dt),oe=me,fe=He,_e=dt)},setLocked:function(me){L=me},setClear:function(me){ae!==me&&(t.clearStencil(me),ae=me)},reset:function(){L=!1,q=null,ee=null,ce=null,J=null,oe=null,fe=null,_e=null,ae=null}}}let a=new r,c=new s,l=new o,u={},h=null,d=null,f=null,p=null,v=null,y=null,g=null,m=null,E=null,T=!1,S=null,_=null,A=null,F=null,X=null,te=t.getParameter(35661),C=!1,B=0,D=t.getParameter(7938);D.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL\ ([0-9])/.exec(D)[1]),C=B>=1):D.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(D)[1]),C=B>=2);let O=null,R={},P=new Ie,G=new Ie;function k(L,q,ee){let ce=new Uint8Array(4),J=t.createTexture();t.bindTexture(L,J),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let oe=0;oe<ee;oe++)t.texImage2D(q+oe,0,6408,1,1,0,6408,5121,ce);return J}let K={};K[3553]=k(3553,3553,1),K[34067]=k(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),re(2929),c.setFunc(zs),de(!1),Re(ba),re(2884),H(qi);function re(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function ie(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function xe(L){return h!==L?(t.useProgram(L),h=L,!0):!1}let we={[Yn]:32774,[eh]:32778,[th]:32779};if(i)we[Aa]=32775,we[La]=32776;else{let L=e.get("EXT_blend_minmax");L!==null&&(we[Aa]=L.MIN_EXT,we[La]=L.MAX_EXT)}let Ve={[nh]:0,[ih]:1,[rh]:768,[Ca]:770,[hh]:776,[ch]:774,[oh]:772,[sh]:769,[Ra]:771,[lh]:775,[ah]:773};function H(L,q,ee,ce,J,oe,fe,_e){if(L===qi){d&&(ie(3042),d=!1);return}if(d||(re(3042),d=!0),L!==Kl){if(L!==f||_e!==T){if((p!==Yn||g!==Yn)&&(t.blendEquation(32774),p=Yn,g=Yn),_e)switch(L){case Xi:t.blendFuncSeparate(1,771,1,771);break;case Sa:t.blendFunc(1,1);break;case Ea:t.blendFuncSeparate(0,0,769,771);break;case Ta:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xi:t.blendFuncSeparate(770,771,1,771);break;case Sa:t.blendFunc(770,1);break;case Ea:t.blendFunc(0,769);break;case Ta:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,m=null,E=null,f=L,T=_e}return}J=J||q,oe=oe||ee,fe=fe||ce,(q!==p||J!==g)&&(t.blendEquationSeparate(we[q],we[J]),p=q,g=J),(ee!==v||ce!==y||oe!==m||fe!==E)&&(t.blendFuncSeparate(Ve[ee],Ve[ce],Ve[oe],Ve[fe]),v=ee,y=ce,m=oe,E=fe),f=L,T=null}function nt(L,q){L.side===Xn?ie(2884):re(2884);let ee=L.side===$e;q&&(ee=!ee),de(ee),L.blending===Xi&&L.transparent===!1?H(qi):H(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let ce=L.stencilWrite;l.setTest(ce),ce&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits)}function de(L){S!==L&&(L?t.frontFace(2304):t.frontFace(2305),S=L)}function Re(L){L!==Jl?(re(2884),L!==_&&(L===ba?t.cullFace(1029):L===$l?t.cullFace(1028):t.cullFace(1032))):ie(2884),_=L}function Me(L){L!==A&&(C&&t.lineWidth(L),A=L)}function Ne(L,q,ee){L?(re(32823),(F!==q||X!==ee)&&(t.polygonOffset(q,ee),F=q,X=ee)):ie(32823)}function Te(L){L?re(3089):ie(3089)}function W(L){L===void 0&&(L=33984+te-1),O!==L&&(t.activeTexture(L),O=L)}function Z(L,q){O===null&&W();let ee=R[O];ee===void 0&&(ee={type:void 0,texture:void 0},R[O]=ee),(ee.type!==L||ee.texture!==q)&&(t.bindTexture(L,q||K[L]),ee.type=L,ee.texture=q)}function $(){let L=R[O];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function x(L){P.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),P.copy(L))}function j(L){G.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),G.copy(L))}function V(){u={},O=null,R={},h=null,d=null,f=null,p=null,v=null,y=null,g=null,m=null,E=null,T=!1,S=null,_=null,A=null,F=null,X=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:re,disable:ie,useProgram:xe,setBlending:H,setMaterial:nt,setFlipSided:de,setCullFace:Re,setLineWidth:Me,setPolygonOffset:Ne,setScissorTest:Te,activeTexture:W,bindTexture:Z,unbindTexture:$,compressedTexImage2D:he,texImage2D:ne,texImage3D:M,scissor:x,viewport:j,reset:V}}function Bm(t,e,n,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap,f,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function v(M,x){return p?new OffscreenCanvas(M,x):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(M,x,j,V){let L=1;if((M.width>V||M.height>V)&&(L=V/Math.max(M.width,M.height)),L<1||x===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let q=x?ve.floorPowerOfTwo:Math.floor,ee=q(L*M.width),ce=q(L*M.height);f===void 0&&(f=v(ee,ce));let J=j?v(ee,ce):f;J.width=ee,J.height=ce;let oe=J.getContext("2d");return oe.drawImage(M,0,0,ee,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ee+"x"+ce+")."),J}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function g(M){return ve.isPowerOfTwo(M.width)&&ve.isPowerOfTwo(M.height)}function m(M){return a?!1:M.wrapS!==vt||M.wrapT!==vt||M.minFilter!==ot&&M.minFilter!==it}function E(M,x){return M.generateMipmaps&&x&&M.minFilter!==ot&&M.minFilter!==it}function T(M,x,j,V){t.generateMipmap(M);let L=i.get(x);L.__maxMipLevel=Math.log(Math.max(j,V))*Math.LOG2E}function S(M,x,j){if(a===!1)return x;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=x;return x===6403&&(j===5126&&(V=33326),j===5131&&(V=33325),j===5121&&(V=33321)),x===6407&&(j===5126&&(V=34837),j===5131&&(V=34843),j===5121&&(V=32849)),x===6408&&(j===5126&&(V=34836),j===5131&&(V=34842),j===5121&&(V=32856)),(V===33325||V===33326||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function _(M){return M===ot||M===Na||M===Oa?9728:9729}function A(M){let x=M.target;x.removeEventListener("dispose",A),X(x),x.isVideoTexture&&d.delete(x),o.memory.textures--}function F(M){let x=M.target;x.removeEventListener("dispose",F),te(x),o.memory.textures--}function X(M){let x=i.get(M);if(x.__webglInit===void 0)return;t.deleteTexture(x.__webglTexture),i.remove(M)}function te(M){let x=i.get(M),j=i.get(M.texture);if(!M)return;if(j.__webglTexture!==void 0&&t.deleteTexture(j.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++)t.deleteFramebuffer(x.__webglFramebuffer[V]),x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[V]);else t.deleteFramebuffer(x.__webglFramebuffer),x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer&&t.deleteRenderbuffer(x.__webglColorRenderbuffer),x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}let C=0;function B(){C=0}function D(){let M=C;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),C+=1,M}function O(M,x){let j=i.get(M);if(M.isVideoTexture&&W(M),M.version>0&&j.__version!==M.version){let V=M.image;if(V===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(j,M,x);return}}n.activeTexture(33984+x),n.bindTexture(3553,j.__webglTexture)}function R(M,x){let j=i.get(M);if(M.version>0&&j.__version!==M.version){xe(j,M,x);return}n.activeTexture(33984+x),n.bindTexture(35866,j.__webglTexture)}function P(M,x){let j=i.get(M);if(M.version>0&&j.__version!==M.version){xe(j,M,x);return}n.activeTexture(33984+x),n.bindTexture(32879,j.__webglTexture)}function G(M,x){let j=i.get(M);if(M.version>0&&j.__version!==M.version){we(j,M,x);return}n.activeTexture(33984+x),n.bindTexture(34067,j.__webglTexture)}let k={[Vs]:10497,[vt]:33071,[Ws]:33648},K={[ot]:9728,[Na]:9984,[Oa]:9986,[it]:9729,[Eh]:9985,[Ar]:9987};function re(M,x,j){j?(t.texParameteri(M,10242,k[x.wrapS]),t.texParameteri(M,10243,k[x.wrapT]),(M===32879||M===35866)&&t.texParameteri(M,32882,k[x.wrapR]),t.texParameteri(M,10240,K[x.magFilter]),t.texParameteri(M,10241,K[x.minFilter])):(t.texParameteri(M,10242,33071),t.texParameteri(M,10243,33071),(M===32879||M===35866)&&t.texParameteri(M,32882,33071),(x.wrapS!==vt||x.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,10240,_(x.magFilter)),t.texParameteri(M,10241,_(x.minFilter)),x.minFilter!==ot&&x.minFilter!==it&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let V=e.get("EXT_texture_filter_anisotropic");if(V){if(x.type===un&&e.get("OES_texture_float_linear")===null)return;if(x.type===Rr&&(a||e.get("OES_texture_half_float_linear"))===null)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(M,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ie(M,x){M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",A),M.__webglTexture=t.createTexture(),o.memory.textures++)}function xe(M,x,j){let V=3553;x.isDataTexture2DArray&&(V=35866),x.isDataTexture3D&&(V=32879),ie(M,x),n.activeTexture(33984+j),n.bindTexture(V,M.__webglTexture),t.pixelStorei(37440,x.flipY),t.pixelStorei(37441,x.premultiplyAlpha),t.pixelStorei(3317,x.unpackAlignment);let L=m(x)&&g(x.image)===!1,q=y(x.image,L,!1,u),ee=g(q)||a,ce=s.convert(x.format),J=s.convert(x.type),oe=S(x.internalFormat,ce,J);re(V,x,ee);let fe,_e=x.mipmaps;if(x.isDepthTexture)oe=6402,a?x.type===un?oe=36012:x.type===Cr?oe=33190:x.type===Zi?oe=35056:oe=33189:x.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Zn&&oe===6402&&(x.type!==Lr&&x.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Lr,J=s.convert(x.type))),x.format===Ji&&oe===6402&&(oe=34041,x.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Zi,J=s.convert(x.type))),n.texImage2D(3553,0,oe,q.width,q.height,0,ce,J,null);else if(x.isDataTexture)if(_e.length>0&&ee){for(let ae=0,me=_e.length;ae<me;ae++)fe=_e[ae],n.texImage2D(3553,ae,oe,fe.width,fe.height,0,ce,J,fe.data);x.generateMipmaps=!1,M.__maxMipLevel=_e.length-1}else n.texImage2D(3553,0,oe,q.width,q.height,0,ce,J,q.data),M.__maxMipLevel=0;else if(x.isCompressedTexture){for(let ae=0,me=_e.length;ae<me;ae++)fe=_e[ae],x.format!==Lt&&x.format!==Ln?ce!==null?n.compressedTexImage2D(3553,ae,oe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,ae,oe,fe.width,fe.height,0,ce,J,fe.data);M.__maxMipLevel=_e.length-1}else if(x.isDataTexture2DArray)n.texImage3D(35866,0,oe,q.width,q.height,q.depth,0,ce,J,q.data),M.__maxMipLevel=0;else if(x.isDataTexture3D)n.texImage3D(32879,0,oe,q.width,q.height,q.depth,0,ce,J,q.data),M.__maxMipLevel=0;else if(_e.length>0&&ee){for(let ae=0,me=_e.length;ae<me;ae++)fe=_e[ae],n.texImage2D(3553,ae,oe,ce,J,fe);x.generateMipmaps=!1,M.__maxMipLevel=_e.length-1}else n.texImage2D(3553,0,oe,ce,J,q),M.__maxMipLevel=0;E(x,ee)&&T(V,x,q.width,q.height),M.__version=x.version,x.onUpdate&&x.onUpdate(x)}function we(M,x,j){if(x.image.length!==6)return;ie(M,x),n.activeTexture(33984+j),n.bindTexture(34067,M.__webglTexture),t.pixelStorei(37440,x.flipY);let V=x&&(x.isCompressedTexture||x.image[0].isCompressedTexture),L=x.image[0]&&x.image[0].isDataTexture,q=[];for(let ae=0;ae<6;ae++)!V&&!L?q[ae]=y(x.image[ae],!1,!0,l):q[ae]=L?x.image[ae].image:x.image[ae];let ee=q[0],ce=g(ee)||a,J=s.convert(x.format),oe=s.convert(x.type),fe=S(x.internalFormat,J,oe);re(34067,x,ce);let _e;if(V){for(let ae=0;ae<6;ae++){_e=q[ae].mipmaps;for(let me=0;me<_e.length;me++){let He=_e[me];x.format!==Lt&&x.format!==Ln?J!==null?n.compressedTexImage2D(34069+ae,me,fe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ae,me,fe,He.width,He.height,0,J,oe,He.data)}}M.__maxMipLevel=_e.length-1}else{_e=x.mipmaps;for(let ae=0;ae<6;ae++)if(L){n.texImage2D(34069+ae,0,fe,q[ae].width,q[ae].height,0,J,oe,q[ae].data);for(let me=0;me<_e.length;me++){let He=_e[me],dt=He.image[ae].image;n.texImage2D(34069+ae,me+1,fe,dt.width,dt.height,0,J,oe,dt.data)}}else{n.texImage2D(34069+ae,0,fe,J,oe,q[ae]);for(let me=0;me<_e.length;me++){let He=_e[me];n.texImage2D(34069+ae,me+1,fe,J,oe,He.image[ae])}}M.__maxMipLevel=_e.length}E(x,ce)&&T(34067,x,ee.width,ee.height),M.__version=x.version,x.onUpdate&&x.onUpdate(x)}function Ve(M,x,j,V){let L=s.convert(x.texture.format),q=s.convert(x.texture.type),ee=S(x.texture.internalFormat,L,q);n.texImage2D(V,0,ee,x.width,x.height,0,L,q,null),t.bindFramebuffer(36160,M),t.framebufferTexture2D(36160,j,V,i.get(x.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function H(M,x,j){if(t.bindRenderbuffer(36161,M),x.depthBuffer&&!x.stencilBuffer){let V=33189;if(j){let L=x.depthTexture;L&&L.isDepthTexture&&(L.type===un?V=36012:L.type===Cr&&(V=33190));let q=Te(x);t.renderbufferStorageMultisample(36161,q,V,x.width,x.height)}else t.renderbufferStorage(36161,V,x.width,x.height);t.framebufferRenderbuffer(36160,36096,36161,M)}else if(x.depthBuffer&&x.stencilBuffer){if(j){let V=Te(x);t.renderbufferStorageMultisample(36161,V,35056,x.width,x.height)}else t.renderbufferStorage(36161,34041,x.width,x.height);t.framebufferRenderbuffer(36160,33306,36161,M)}else{let V=s.convert(x.texture.format),L=s.convert(x.texture.type),q=S(x.texture.internalFormat,V,L);if(j){let ee=Te(x);t.renderbufferStorageMultisample(36161,ee,q,x.width,x.height)}else t.renderbufferStorage(36161,q,x.width,x.height)}t.bindRenderbuffer(36161,null)}function nt(M,x){let j=x&&x.isWebGLCubeRenderTarget;if(j)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);let V=i.get(x.depthTexture).__webglTexture;if(x.depthTexture.format===Zn)t.framebufferTexture2D(36160,36096,3553,V,0);else if(x.depthTexture.format===Ji)t.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function de(M){let x=i.get(M),j=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");nt(x.__webglFramebuffer,M)}else if(j){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=t.createRenderbuffer(),H(x.__webglDepthbuffer[V],M,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),H(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function Re(M){let x=i.get(M),j=i.get(M.texture);M.addEventListener("dispose",F),j.__webglTexture=t.createTexture(),o.memory.textures++;let V=M.isWebGLCubeRenderTarget===!0,L=M.isWebGLMultisampleRenderTarget===!0,q=g(M)||a;if(a&&M.texture.format===Ln&&(M.texture.type===un||M.texture.type===Rr)&&(M.texture.format=Lt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),V){x.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)x.__webglFramebuffer[ee]=t.createFramebuffer()}else if(x.__webglFramebuffer=t.createFramebuffer(),L)if(a){x.__webglMultisampledFramebuffer=t.createFramebuffer(),x.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,x.__webglColorRenderbuffer);let ee=s.convert(M.texture.format),ce=s.convert(M.texture.type),J=S(M.texture.internalFormat,ee,ce),oe=Te(M);t.renderbufferStorageMultisample(36161,oe,J,M.width,M.height),t.bindFramebuffer(36160,x.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,x.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),M.depthBuffer&&(x.__webglDepthRenderbuffer=t.createRenderbuffer(),H(x.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(V){n.bindTexture(34067,j.__webglTexture),re(34067,M.texture,q);for(let ee=0;ee<6;ee++)Ve(x.__webglFramebuffer[ee],M,36064,34069+ee);E(M.texture,q)&&T(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,j.__webglTexture),re(3553,M.texture,q),Ve(x.__webglFramebuffer,M,36064,3553),E(M.texture,q)&&T(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&de(M)}function Me(M){let x=M.texture,j=g(M)||a;if(E(x,j)){let V=M.isWebGLCubeRenderTarget?34067:3553,L=i.get(x).__webglTexture;n.bindTexture(V,L),T(V,x,M.width,M.height),n.bindTexture(V,null)}}function Ne(M){if(M.isWebGLMultisampleRenderTarget)if(a){let x=i.get(M);t.bindFramebuffer(36008,x.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,x.__webglFramebuffer);let j=M.width,V=M.height,L=16384;M.depthBuffer&&(L|=256),M.stencilBuffer&&(L|=1024),t.blitFramebuffer(0,0,j,V,0,0,j,V,L,9728),t.bindFramebuffer(36160,x.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Te(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(h,M.samples):0}function W(M){let x=o.render.frame;d.get(M)!==x&&(d.set(M,x),M.update())}let Z=!1,$=!1;function he(M,x){M&&M.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),M=M.texture),O(M,x)}function ne(M,x){M&&M.isWebGLCubeRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),$=!0),M=M.texture),G(M,x)}this.allocateTextureUnit=D,this.resetTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=R,this.setTexture3D=P,this.setTextureCube=G,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ne,this.safeSetTexture2D=he,this.safeSetTextureCube=ne}function Fm(t,e,n){let i=n.isWebGL2;function r(s){let o;if(s===js)return 5121;if(s===Ch)return 32819;if(s===Rh)return 32820;if(s===Ph)return 33635;if(s===Th)return 5120;if(s===Ah)return 5122;if(s===Lr)return 5123;if(s===Lh)return 5124;if(s===Cr)return 5125;if(s===un)return 5126;if(s===Rr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ih)return 6406;if(s===Ln)return 6407;if(s===Lt)return 6408;if(s===Dh)return 6409;if(s===Nh)return 6410;if(s===Zn)return 6402;if(s===Ji)return 34041;if(s===Oh)return 6403;if(s===Bh)return 36244;if(s===Fh)return 33319;if(s===zh)return 33320;if(s===Uh)return 36248;if(s===Gh)return 36249;if(s===Ba||s===Fa||s===za||s===Ua)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ua)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ga||s===Ha||s===ka||s===Va)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ga)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Wa||s===ja)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Wa)return o.COMPRESSED_RGB8_ETC2;if(s===ja)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===kh||s===Vh||s===Wh||s===jh||s===qh||s===Xh||s===Yh||s===Zh||s===Jh||s===$h||s===Qh||s===Kh||s===eu||s===tu||s===iu||s===ru||s===su||s===ou||s===au||s===cu||s===lu||s===hu||s===uu||s===fu||s===du||s===pu||s===mu||s===gu)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===nu)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Zi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ao(t=[]){Ye.call(this),this.cameras=t}Ao.prototype=Object.assign(Object.create(Ye.prototype),{constructor:Ao,isArrayCamera:!0});function wi(){ue.call(this),this.type="Group"}wi.prototype=Object.assign(Object.create(ue.prototype),{constructor:wi,isGroup:!0});function hr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(hr.prototype,{constructor:hr,getHandSpace:function(){if(this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){let e=new wi;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){let u=e.getJointPose(t.hand[l],n),h=c.joints[l];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;let d=c.joints[window.XRHand.INDEX_PHALANX_TIP],f=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=d.position.distanceTo(f.position),v=.02,y=.005;c.inputState.pinching&&p>v+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=v-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Bc(t,e){let n=this,i=null,r=1,s=null,o="local-floor",a=null,c=[],l=new Map,u=new Ye;u.layers.enable(1),u.viewport=new Ie;let h=new Ye;h.layers.enable(2),h.viewport=new Ie;let d=[u,h],f=new Ao;f.layers.enable(1),f.layers.enable(2);let p=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let B=c[C];return B===void 0&&(B=new hr,c[C]=B),B.getTargetRaySpace()},this.getControllerGrip=function(C){let B=c[C];return B===void 0&&(B=new hr,c[C]=B),B.getGripSpace()},this.getHand=function(C){let B=c[C];return B===void 0&&(B=new hr,c[C]=B),B.getHandSpace()};function y(C){let B=l.get(C.inputSource);B&&B.dispatchEvent({type:C.type,data:C.inputSource})}function g(){l.forEach(function(C,B){C.disconnect(B)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(C){s=C,te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(C){if(i=C,i!==null){i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",g);let B=e.getContextAttributes();B.xrCompatible!==!0&&e.makeXRCompatible();let D={antialias:B.antialias,alpha:B.alpha,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r},O=new XRWebGLLayer(i,e,D);i.updateRenderState({baseLayer:O}),i.requestReferenceSpace(o).then(m),i.addEventListener("inputsourceschange",E)}};function E(C){let B=i.inputSources;for(let D=0;D<c.length;D++)l.set(B[D],c[D]);for(let D=0;D<C.removed.length;D++){let O=C.removed[D],R=l.get(O);R&&(R.dispatchEvent({type:"disconnected",data:O}),l.delete(O))}for(let D=0;D<C.added.length;D++){let O=C.added[D],R=l.get(O);R&&R.dispatchEvent({type:"connected",data:O})}}let T=new w,S=new w;function _(C,B,D){T.setFromMatrixPosition(B.matrixWorld),S.setFromMatrixPosition(D.matrixWorld);let O=T.distanceTo(S),R=B.projectionMatrix.elements,P=D.projectionMatrix.elements,G=R[14]/(R[10]-1),k=R[14]/(R[10]+1),K=(R[9]+1)/R[5],re=(R[9]-1)/R[5],ie=(R[8]-1)/R[0],xe=(P[8]+1)/P[0],we=G*ie,Ve=G*xe,H=O/(-ie+xe),nt=H*-ie;B.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(nt),C.translateZ(H),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();let de=G+H,Re=k+H,Me=we-nt,Ne=Ve+(O-nt),Te=K*k/Re*de,W=re*k/Re*de;C.projectionMatrix.makePerspective(Me,Ne,Te,W,de,Re)}function A(C,B){B===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(B.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.getCamera=function(C){f.near=h.near=u.near=C.near,f.far=h.far=u.far=C.far,(p!==f.near||v!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,v=f.far);let B=C.parent,D=f.cameras;A(f,B);for(let R=0;R<D.length;R++)A(D[R],B);C.matrixWorld.copy(f.matrixWorld);let O=C.children;for(let R=0,P=O.length;R<P;R++)O[R].updateMatrixWorld(!0);return D.length===2?_(f,u,h):f.projectionMatrix.copy(u.projectionMatrix),f};let F=null;function X(C,B){if(a=B.getViewerPose(s),a!==null){let O=a.views,R=i.renderState.baseLayer;t.setFramebuffer(R.framebuffer);let P=!1;O.length!==f.cameras.length&&(f.cameras.length=0,P=!0);for(let G=0;G<O.length;G++){let k=O[G],K=R.getViewport(k),re=d[G];re.matrix.fromArray(k.transform.matrix),re.projectionMatrix.fromArray(k.projectionMatrix),re.viewport.set(K.x,K.y,K.width,K.height),G===0&&f.matrix.copy(re.matrix),P===!0&&f.cameras.push(re)}}let D=i.inputSources;for(let O=0;O<c.length;O++){let R=c[O],P=D[O];R.update(P,B,s)}F&&F(C,B)}let te=new dc;te.setAnimationLoop(X),this.setAnimationLoop=function(C){F=C},this.dispose=function(){}}Object.assign(Bc.prototype,Jt.prototype);function zm(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,E,T){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),u(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),f(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),v(g,m)):m.isMeshNormalMaterial?(i(g,m),y(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,E,T):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);let E=t.get(m).envMap;if(E){g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture&&E._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;let _=t.get(E).__maxMipLevel;_!==void 0&&(g.maxMipLevel.value=_)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(T=m.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uv2Transform.value.copy(S.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,E,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=T*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias);let E=t.get(m).envMap;E&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===$e&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function v(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function y(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Um(){let t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function Mi(t){t=t||{};let e=t.canvas!==void 0?t.canvas:Um(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1,h=null,d=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Qn,this.physicallyCorrectLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let f=this,p=!1,v=null,y=0,g=0,m=null,E=null,T=-1,S=null,_=null,A=new Ie,F=new Ie,X=null,te=e.width,C=e.height,B=1,D=null,O=null,R=new Ie(0,0,te,C),P=new Ie(0,0,te,C),G=!1,k=new sr,K=!1,re=!1,ie=new ye,xe=new w,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return m===null?B:1}let H=n;function nt(b,N){for(let I=0;I<b.length;I++){let z=b[I],Q=e.getContext(z,N);if(Q!==null)return Q}return null}try{let b={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",dt,!1),H===null){let N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),H=nt(N,b),H===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,Re,Me,Ne,Te,W,Z,$,he,ne,M,x,j,V,L,q,ee,ce,J,oe,fe;function _e(){de=new gp(H),Re=new dp(H,de,t),Re.isWebGL2===!1&&(de.get("WEBGL_depth_texture"),de.get("OES_texture_float"),de.get("OES_texture_half_float"),de.get("OES_texture_half_float_linear"),de.get("OES_standard_derivatives"),de.get("OES_element_index_uint"),de.get("OES_vertex_array_object"),de.get("ANGLE_instanced_arrays")),de.get("OES_texture_float_linear"),oe=new Fm(H,de,Re),Me=new Om(H,de,Re),Me.scissor(F.copy(P).multiplyScalar(B).floor()),Me.viewport(A.copy(R).multiplyScalar(B).floor()),Ne=new xp(H),Te=new Mm,W=new Bm(H,de,Me,Te,Re,oe,Ne),Z=new mp(f),$=new Hu(H,Re),fe=new up(H,de,$,Re),he=new vp(H,$,Ne,fe),ne=new Mp(H,he,$,Ne),ee=new wp(H),L=new pp(Te),M=new wm(f,Z,de,Re,fe,L),x=new zm(Te),j=new Tm(Te),V=new Im(de,Re),q=new hp(f,Z,Me,ne,a),ce=new fp(H,de,Ne,Re),J=new yp(H,de,Ne,Re),Ne.programs=M.programs,f.capabilities=Re,f.extensions=de,f.properties=Te,f.renderLists=j,f.state=Me,f.info=Ne}_e();let ae=new Bc(f,H);this.xr=ae;let me=new Oc(f,ne,Re.maxTextureSize);this.shadowMap=me,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){if(b===void 0)return;B=b,this.setSize(te,C,!1)},this.getSize=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),b=new U),b.set(te,C)},this.setSize=function(b,N,I){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,C=N,e.width=Math.floor(b*B),e.height=Math.floor(N*B),I!==!1&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),b=new U),b.set(te*B,C*B).floor()},this.setDrawingBufferSize=function(b,N,I){te=b,C=N,B=I,e.width=Math.floor(b*I),e.height=Math.floor(N*I),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),b=new Ie),b.copy(A)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,N,I,z){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,N,I,z),Me.viewport(A.copy(R).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(P)},this.setScissor=function(b,N,I,z){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,N,I,z),Me.scissor(F.copy(P).multiplyScalar(B).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(b){Me.setScissorTest(G=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(){return q.getClearColor()},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(b,N,I){let z=0;(b===void 0||b)&&(z|=16384),(N===void 0||N)&&(z|=256),(I===void 0||I)&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",dt,!1),j.dispose(),V.dispose(),Te.dispose(),Z.dispose(),ne.dispose(),fe.dispose(),ae.dispose(),ki.stop()};function He(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,_e()}function pa(b){let N=b.target;N.removeEventListener("dispose",pa),Wl(N)}function Wl(b){ma(b),Te.remove(b)}function ma(b){let N=Te.get(b).program;N!==void 0&&M.releaseProgram(N)}function jl(b,N){b.render(function(I){f.renderBufferImmediate(I,N)})}this.renderBufferImmediate=function(b,N){fe.initAttributes();let I=Te.get(b);b.hasPositions&&!I.position&&(I.position=H.createBuffer()),b.hasNormals&&!I.normal&&(I.normal=H.createBuffer()),b.hasUvs&&!I.uv&&(I.uv=H.createBuffer()),b.hasColors&&!I.color&&(I.color=H.createBuffer());let z=N.getAttributes();b.hasPositions&&(H.bindBuffer(34962,I.position),H.bufferData(34962,b.positionArray,35048),fe.enableAttribute(z.position),H.vertexAttribPointer(z.position,3,5126,!1,0,0)),b.hasNormals&&(H.bindBuffer(34962,I.normal),H.bufferData(34962,b.normalArray,35048),fe.enableAttribute(z.normal),H.vertexAttribPointer(z.normal,3,5126,!1,0,0)),b.hasUvs&&(H.bindBuffer(34962,I.uv),H.bufferData(34962,b.uvArray,35048),fe.enableAttribute(z.uv),H.vertexAttribPointer(z.uv,2,5126,!1,0,0)),b.hasColors&&(H.bindBuffer(34962,I.color),H.bufferData(34962,b.colorArray,35048),fe.enableAttribute(z.color),H.vertexAttribPointer(z.color,3,5126,!1,0,0)),fe.disableUnusedAttributes(),H.drawArrays(4,0,b.count),b.count=0},this.renderBufferDirect=function(b,N,I,z,Q,Le){N===null&&(N=we);let Se=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=xa(b,N,z,Q);Me.setMaterial(z,Se);let Ee=I.index,Xe=I.attributes.position;if(Ee===null){if(Xe===void 0||Xe.count===0)return}else if(Ee.count===0)return;let qe=1;z.wireframe===!0&&(Ee=he.getWireframeAttribute(I),qe=2),(z.morphTargets||z.morphNormals)&&ee.update(Q,I,z,Ce),fe.setup(Q,z,Ce,I,Ee);let be,Be=ce;Ee!==null&&(be=$.get(Ee),Be=J,Be.setIndex(be));let Zt=Ee!==null?Ee.count:Xe.count,Fe=I.drawRange.start*qe,An=I.drawRange.count*qe,Ze=Le!==null?Le.start*qe:0,Fs=Le!==null?Le.count*qe:Infinity,pt=Math.max(Fe,Ze),Vi=Math.min(Zt,Fe+An,Ze+Fs)-1,jn=Math.max(0,Vi-pt+1);if(jn===0)return;if(Q.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*Ve()),Be.setMode(1)):Be.setMode(4);else if(Q.isLine){let Wi=z.linewidth;Wi===void 0&&(Wi=1),Me.setLineWidth(Wi*Ve()),Q.isLineSegments?Be.setMode(1):Q.isLineLoop?Be.setMode(2):Be.setMode(3)}else Q.isPoints?Be.setMode(0):Q.isSprite&&Be.setMode(4);if(Q.isInstancedMesh)Be.renderInstances(pt,jn,Q.count);else if(I.isInstancedBufferGeometry){let Wi=Math.min(I.instanceCount,I._maxInstanceCount);Be.renderInstances(pt,jn,Wi)}else Be.render(pt,jn)},this.compile=function(b,N){d=V.get(b,N),d.init(),b.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(N);let I=new WeakMap;b.traverse(function(z){let Q=z.material;if(Q)if(Array.isArray(Q))for(let Le=0;Le<Q.length;Le++){let Se=Q[Le];I.has(Se)===!1&&(Yt(Se,b,z),I.set(Se))}else I.has(Q)===!1&&(Yt(Q,b,z),I.set(Q))})};let Bs=null;function ql(b){if(ae.isPresenting)return;Bs&&Bs(b)}let ki=new dc;ki.setAnimationLoop(ql),typeof window!="undefined"&&ki.setContext(window),this.setAnimationLoop=function(b){Bs=b,ae.setAnimationLoop(b),b===null?ki.stop():ki.start()},this.render=function(b,N){let I,z;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),I=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),z=arguments[3]),N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;fe.resetDefaultState(),T=-1,S=null,b.autoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N=ae.getCamera(N)),b.isScene===!0&&b.onBeforeRender(f,b,N,I||m),d=V.get(b,N),d.init(),ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),k.setFromProjectionMatrix(ie),re=this.localClippingEnabled,K=L.init(this.clippingPlanes,re,N),h=j.get(b,N),h.init(),ga(b,N,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(D,O),K===!0&&L.beginShadows();let Q=d.state.shadowsArray;me.render(Q,b,N),d.setupLights(N),K===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),I!==void 0&&this.setRenderTarget(I),q.render(h,b,N,z);let Le=h.opaque,Se=h.transparent;Le.length>0&&va(Le,b,N),Se.length>0&&va(Se,b,N),b.isScene===!0&&b.onAfterRender(f,b,N),m!==null&&(W.updateRenderTargetMipmap(m),W.updateMultisampleRenderTarget(m)),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1),h=null,d=null};function ga(b,N,I,z){if(b.visible===!1)return;let Q=b.layers.test(N.layers);if(Q){if(b.isGroup)I=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){z&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);let Se=ne.update(b),Ce=b.material;Ce.visible&&h.push(b,Se,Ce,I,xe.z,null)}}else if(b.isImmediateRenderObject)z&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie),h.push(b,null,b.material,I,xe.z,null);else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&(b.skeleton.frame!==Ne.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ne.render.frame)),!b.frustumCulled||k.intersectsObject(b))){z&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);let Se=ne.update(b),Ce=b.material;if(Array.isArray(Ce)){let Ee=Se.groups;for(let Xe=0,qe=Ee.length;Xe<qe;Xe++){let be=Ee[Xe],Be=Ce[be.materialIndex];Be&&Be.visible&&h.push(b,Se,Be,I,xe.z,be)}}else Ce.visible&&h.push(b,Se,Ce,I,xe.z,null)}}let Le=b.children;for(let Se=0,Ce=Le.length;Se<Ce;Se++)ga(Le[Se],N,I,z)}function va(b,N,I){let z=N.isScene===!0?N.overrideMaterial:null;for(let Q=0,Le=b.length;Q<Le;Q++){let Se=b[Q],Ce=Se.object,Ee=Se.geometry,Xe=z===null?Se.material:z,qe=Se.group;if(I.isArrayCamera){_=I;let be=I.cameras;for(let Be=0,Zt=be.length;Be<Zt;Be++){let Fe=be[Be];Ce.layers.test(Fe.layers)&&(Me.viewport(A.copy(Fe.viewport)),d.setupLights(Fe),ya(Ce,N,Fe,Ee,Xe,qe))}}else _=null,ya(Ce,N,I,Ee,Xe,qe)}}function ya(b,N,I,z,Q,Le){if(b.onBeforeRender(f,N,I,z,Q,Le),d=V.get(N,_||I),b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),b.isImmediateRenderObject){let Se=xa(I,N,Q,b);Me.setMaterial(Q),fe.reset(),jl(b,Se)}else f.renderBufferDirect(I,N,z,Q,b,Le);b.onAfterRender(f,N,I,z,Q,Le),d=V.get(N,_||I)}function Yt(b,N,I){N.isScene!==!0&&(N=we);let z=Te.get(b),Q=d.state.lights,Le=d.state.shadowsArray,Se=Q.state.version,Ce=M.getParameters(b,Q.state,Le,N,I),Ee=M.getProgramCacheKey(Ce),Xe=z.program,qe=!0;if(Xe===void 0)b.addEventListener("dispose",pa);else if(Xe.cacheKey!==Ee)ma(b);else if(z.lightsStateVersion!==Se)qe=!1;else if(Ce.shaderID!==void 0){let Fe=b.isMeshStandardMaterial?N.environment:null;z.envMap=Z.get(b.envMap||Fe);return}else qe=!1;qe&&(Ce.uniforms=M.getUniforms(b),b.onBeforeCompile(Ce,f),Xe=M.acquireProgram(Ce,Ee),z.program=Xe,z.uniforms=Ce.uniforms,z.outputEncoding=Ce.outputEncoding);let be=z.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(z.numClippingPlanes=L.numPlanes,z.numIntersection=L.numIntersection,be.clippingPlanes=L.uniform),z.environment=b.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=Z.get(b.envMap||z.environment),z.needsLights=Yl(b),z.lightsStateVersion=Se,z.needsLights&&(be.ambientLightColor.value=Q.state.ambient,be.lightProbe.value=Q.state.probe,be.directionalLights.value=Q.state.directional,be.directionalLightShadows.value=Q.state.directionalShadow,be.spotLights.value=Q.state.spot,be.spotLightShadows.value=Q.state.spotShadow,be.rectAreaLights.value=Q.state.rectArea,be.ltc_1.value=Q.state.rectAreaLTC1,be.ltc_2.value=Q.state.rectAreaLTC2,be.pointLights.value=Q.state.point,be.pointLightShadows.value=Q.state.pointShadow,be.hemisphereLights.value=Q.state.hemi,be.directionalShadowMap.value=Q.state.directionalShadowMap,be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,be.spotShadowMap.value=Q.state.spotShadowMap,be.spotShadowMatrix.value=Q.state.spotShadowMatrix,be.pointShadowMap.value=Q.state.pointShadowMap,be.pointShadowMatrix.value=Q.state.pointShadowMatrix);let Be=z.program.getUniforms(),Zt=bn.seqWithValue(Be.seq,be);z.uniformsList=Zt}function xa(b,N,I,z){N.isScene!==!0&&(N=we),W.resetTextureUnits();let Q=N.fog,Le=I.isMeshStandardMaterial?N.environment:null,Se=m===null?f.outputEncoding:m.texture.encoding,Ce=Z.get(I.envMap||Le),Ee=Te.get(I),Xe=d.state.lights;if(K===!0&&(re===!0||b!==S)){let Ze=b===S&&I.id===T;L.setState(I,b,Ze)}I.version===Ee.__version?(I.fog&&Ee.fog!==Q||(Ee.environment!==Le||(Ee.needsLights&&Ee.lightsStateVersion!==Xe.state.version||(Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==L.numPlanes||Ee.numIntersection!==L.numIntersection)||(Ee.outputEncoding!==Se||Ee.envMap!==Ce)))))&&Yt(I,N,z):(Yt(I,N,z),Ee.__version=I.version);let qe=!1,be=!1,Be=!1,Zt=Ee.program,Fe=Zt.getUniforms(),An=Ee.uniforms;if(Me.useProgram(Zt.program)&&(qe=!0,be=!0,Be=!0),I.id!==T&&(T=I.id,be=!0),qe||S!==b){if(Fe.setValue(H,"projectionMatrix",b.projectionMatrix),Re.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,be=!0,Be=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let Ze=Fe.map.cameraPosition;Ze!==void 0&&Ze.setValue(H,xe.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||I.skinning)&&Fe.setValue(H,"viewMatrix",b.matrixWorldInverse)}if(I.skinning){Fe.setOptional(H,z,"bindMatrix"),Fe.setOptional(H,z,"bindMatrixInverse");let Ze=z.skeleton;if(Ze){let Fs=Ze.bones;if(Re.floatVertexTextures){if(Ze.boneTexture===null){let pt=Math.sqrt(Fs.length*4);pt=ve.ceilPowerOfTwo(pt),pt=Math.max(pt,4);let Vi=new Float32Array(pt*pt*4);Vi.set(Ze.boneMatrices);let jn=new xi(Vi,pt,pt,Lt,un);Ze.boneMatrices=Vi,Ze.boneTexture=jn,Ze.boneTextureSize=pt}Fe.setValue(H,"boneTexture",Ze.boneTexture,W),Fe.setValue(H,"boneTextureSize",Ze.boneTextureSize)}else Fe.setOptional(H,Ze,"boneMatrices")}}return(be||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Fe.setValue(H,"receiveShadow",z.receiveShadow)),be&&(Fe.setValue(H,"toneMappingExposure",f.toneMappingExposure),Ee.needsLights&&Xl(An,Be),Q&&I.fog&&x.refreshFogUniforms(An,Q),x.refreshMaterialUniforms(An,I,B,C),bn.upload(H,Ee.uniformsList,An,W)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(bn.upload(H,Ee.uniformsList,An,W),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Fe.setValue(H,"center",z.center),Fe.setValue(H,"modelViewMatrix",z.modelViewMatrix),Fe.setValue(H,"normalMatrix",z.normalMatrix),Fe.setValue(H,"modelMatrix",z.matrixWorld),Zt}function Xl(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Yl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.setFramebuffer=function(b){v!==b&&m===null&&H.bindFramebuffer(36160,b),v=b},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return g},this.getRenderList=function(){return h},this.setRenderList=function(b){h=b},this.getRenderState=function(){return d},this.setRenderState=function(b){d=b},this.getRenderTarget=function(){return m},this.setRenderTarget=function(b,N=0,I=0){m=b,y=N,g=I,b&&Te.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b);let z=v,Q=!1;if(b){let Le=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(z=Le[N],Q=!0):b.isWebGLMultisampleRenderTarget?z=Te.get(b).__webglMultisampledFramebuffer:z=Le,A.copy(b.viewport),F.copy(b.scissor),X=b.scissorTest}else A.copy(R).multiplyScalar(B).floor(),F.copy(P).multiplyScalar(B).floor(),X=G;if(E!==z&&(H.bindFramebuffer(36160,z),E=z),Me.viewport(A),Me.scissor(F),Me.setScissorTest(X),Q){let Le=Te.get(b.texture);H.framebufferTexture2D(36160,36064,34069+N,Le.__webglTexture,I)}},this.readRenderTargetPixels=function(b,N,I,z,Q,Le,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){let Ee=!1;Ce!==E&&(H.bindFramebuffer(36160,Ce),Ee=!0);try{let Xe=b.texture,qe=Xe.format,be=Xe.type;if(qe!==Lt&&oe.convert(qe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be!==js&&oe.convert(be)!==H.getParameter(35738)&&!(be===un&&(Re.isWebGL2||de.get("OES_texture_float")||de.get("WEBGL_color_buffer_float")))&&!(be===Rr&&(Re.isWebGL2?de.get("EXT_color_buffer_float"):de.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?N>=0&&N<=b.width-z&&I>=0&&I<=b.height-Q&&H.readPixels(N,I,z,Q,oe.convert(qe),oe.convert(be),Le):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Ee&&H.bindFramebuffer(36160,E)}}},this.copyFramebufferToTexture=function(b,N,I=0){let z=Math.pow(2,-I),Q=Math.floor(N.image.width*z),Le=Math.floor(N.image.height*z),Se=oe.convert(N.format);W.setTexture2D(N,0),H.copyTexImage2D(3553,I,Se,b.x,b.y,Q,Le,0),Me.unbindTexture()},this.copyTextureToTexture=function(b,N,I,z=0){let Q=N.image.width,Le=N.image.height,Se=oe.convert(I.format),Ce=oe.convert(I.type);W.setTexture2D(I,0),H.pixelStorei(37440,I.flipY),H.pixelStorei(37441,I.premultiplyAlpha),H.pixelStorei(3317,I.unpackAlignment),N.isDataTexture?H.texSubImage2D(3553,z,b.x,b.y,Q,Le,Se,Ce,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(3553,z,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):H.texSubImage2D(3553,z,b.x,b.y,Se,Ce,N.image),z===0&&I.generateMipmaps&&H.generateMipmap(3553),Me.unbindTexture()},this.initTexture=function(b){W.setTexture2D(b,0),Me.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Fc(t){Mi.call(this,t)}Fc.prototype=Object.assign(Object.create(Mi.prototype),{constructor:Fc,isWebGL1Renderer:!0});var ns=class extends ue{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}};function Et(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ve.generateUUID()}Object.defineProperty(Et.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Et.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ve.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new Et(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ve.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var On=new w;function lt(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(lt.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(lt.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)On.x=this.getX(e),On.y=this.getY(e),On.z=this.getZ(e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lt(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Bn(t){pe.call(this),this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Bn.prototype=Object.create(pe.prototype);Bn.prototype.constructor=Bn;Bn.prototype.isSpriteMaterial=!0;Bn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var Si,ur=new w,Ei=new w,Ti=new w,Ai=new U,fr=new U,zc=new ye,is=new w,dr=new w,rs=new w,Uc=new U,Lo=new U,Gc=new U;function Hc(t){if(ue.call(this),this.type="Sprite",Si===void 0){Si=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Et(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new lt(n,3,0,!1)),Si.setAttribute("uv",new lt(n,2,3,!1))}this.geometry=Si,this.material=t!==void 0?t:new Bn,this.center=new U(.5,.5)}Hc.prototype=Object.assign(Object.create(ue.prototype),{constructor:Hc,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),zc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ti.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;ss(is.set(-.5,-.5,0),Ti,s,Ei,i,r),ss(dr.set(.5,-.5,0),Ti,s,Ei,i,r),ss(rs.set(.5,.5,0),Ti,s,Ei,i,r),Uc.set(0,0),Lo.set(1,0),Gc.set(1,1);let o=t.ray.intersectTriangle(is,dr,rs,!1,ur);if(o===null&&(ss(dr.set(-.5,.5,0),Ti,s,Ei,i,r),Lo.set(0,1),o=t.ray.intersectTriangle(is,rs,dr,!1,ur),o===null))return;let a=t.ray.origin.distanceTo(ur);if(a<t.near||a>t.far)return;e.push({distance:a,point:ur.clone(),uv:Ke.getUV(ur,is,dr,rs,Uc,Lo,Gc,new U),face:null,object:this})},copy:function(t){return ue.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function ss(t,e,n,i,r,s){Ai.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(fr.x=s*Ai.x-r*Ai.y,fr.y=r*Ai.x+s*Ai.y):fr.copy(Ai),t.copy(e),t.x+=fr.x,t.y+=fr.y,t.applyMatrix4(zc)}var os=new w,kc=new w;function Co(){ue.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Co.prototype=Object.assign(Object.create(ue.prototype),{constructor:Co,isLOD:!0,copy:function(t){ue.prototype.copy.call(this,t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);let n=this.levels,i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){let n=this.levels;if(n.length>0){os.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(os);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){let e=this.levels;if(e.length>1){os.setFromMatrixPosition(t.matrixWorld),kc.setFromMatrixPosition(this.matrixWorld);let n=os.distanceTo(kc)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){let e=ue.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});function Ro(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),We.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}Ro.prototype=Object.assign(Object.create(We.prototype),{constructor:Ro,isSkinnedMesh:!0,copy:function(t){return We.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let t=new Ie,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);let r=1/t.manhattanLength();r!==Infinity?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){We.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let t=new w,e=new Ie,n=new Ie,i=new w,r=new ye;return function(s,o){let a=this.skeleton,c=this.geometry;e.fromBufferAttribute(c.attributes.skinIndex,s),n.fromBufferAttribute(c.attributes.skinWeight,s),t.fromBufferAttribute(c.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let l=0;l<4;l++){let u=n.getComponent(l);if(u!==0){let h=e.getComponent(l);r.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),o.addScaledVector(i.copy(t).applyMatrix4(r),u)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});function Po(){ue.call(this),this.type="Bone"}Po.prototype=Object.assign(Object.create(ue.prototype),{constructor:Po,isBone:!0});var Vc=new ye,Gm=new ye;function Io(t=[],e=[]){this.uuid=ve.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(Io.prototype,{init:function(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ye)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ye;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let o=t[r]?t[r].matrixWorld:Gm;Vc.multiplyMatrices(o,e[r]),Vc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new Io(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Po),this.bones.push(s),this.boneInverses.push(new ye().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){let t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}});var Wc=new ye,jc=new ye,as=[],pr=new We;function qc(t,e,n){We.call(this,t,e),this.instanceMatrix=new ge(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}qc.prototype=Object.assign(Object.create(We.prototype),{constructor:qc,isInstancedMesh:!0,copy:function(t){return We.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){let n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material===void 0)return;for(let r=0;r<i;r++){this.getMatrixAt(r,Wc),jc.multiplyMatrices(n,Wc),pr.matrixWorld=jc,pr.raycast(t,as);for(let s=0,o=as.length;s<o;s++){let a=as[s];a.instanceId=r,a.object=this,e.push(a)}as.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new ge(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){}});function ht(t){pe.call(this),this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}ht.prototype=Object.create(pe.prototype);ht.prototype.constructor=ht;ht.prototype.isLineBasicMaterial=!0;ht.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var Xc=new w,Yc=new w,Zc=new ye,cs=new si,ls=new Rt;function wn(t,e,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),ue.call(this),this.type="Line",this.geometry=t!==void 0?t:new De,this.material=e!==void 0?e:new ht,this.updateMorphTargets()}wn.prototype=Object.assign(Object.create(ue.prototype),{constructor:wn,isLine:!0,copy:function(t){return ue.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Xc.fromBufferAttribute(e,i-1),Yc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xc.distanceTo(Yc);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;Zc.copy(i).invert(),cs.copy(t.ray).applyMatrix4(Zc);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new w,c=new w,l=new w,u=new w,h=this.isLineSegments?2:1;if(n.isBufferGeometry){let d=n.index,f=n.attributes,p=f.position;if(d!==null){let v=d.array;for(let y=0,g=v.length-1;y<g;y+=h){let m=v[y],E=v[y+1];a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,E);let T=cs.distanceSqToSegment(a,c,u,l);if(T>o)continue;u.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(u);if(S<t.near||S>t.far)continue;e.push({distance:S,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let v=0,y=p.count-1;v<y;v+=h){a.fromBufferAttribute(p,v),c.fromBufferAttribute(p,v+1);let g=cs.distanceSqToSegment(a,c,u,l);if(g>o)continue;u.applyMatrix4(this.matrixWorld);let m=t.ray.origin.distanceTo(u);if(m<t.near||m>t.far)continue;e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){let d=n.vertices,f=d.length;for(let p=0;p<f-1;p+=h){let v=cs.distanceSqToSegment(d[p],d[p+1],u,l);if(v>o)continue;u.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(u);if(y<t.near||y>t.far)continue;e.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var hs=new w,us=new w;function Li(t,e){wn.call(this,t,e),this.type="LineSegments"}Li.prototype=Object.assign(Object.create(wn.prototype),{constructor:Li,isLineSegments:!0,computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)hs.fromBufferAttribute(e,i),us.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hs.distanceTo(us);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){let e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)hs.copy(e[i]),us.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hs.distanceTo(us)}return this}});function Jc(t,e){wn.call(this,t,e),this.type="LineLoop"}Jc.prototype=Object.assign(Object.create(wn.prototype),{constructor:Jc,isLineLoop:!0});function Fn(t){pe.call(this),this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}Fn.prototype=Object.create(pe.prototype);Fn.prototype.constructor=Fn;Fn.prototype.isPointsMaterial=!0;Fn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var $c=new ye,Do=new si,fs=new Rt,ds=new w;function Qc(t,e){ue.call(this),this.type="Points",this.geometry=t!==void 0?t:new De,this.material=e!==void 0?e:new Fn,this.updateMorphTargets()}Qc.prototype=Object.assign(Object.create(ue.prototype),{constructor:Qc,isPoints:!0,copy:function(t){return ue.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=r,t.ray.intersectsSphere(fs)===!1)return;$c.copy(i).invert(),Do.copy(t.ray).applyMatrix4($c);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){let a=n.index,c=n.attributes,l=c.position;if(a!==null){let u=a.array;for(let h=0,d=u.length;h<d;h++){let f=u[h];ds.fromBufferAttribute(l,f),No(ds,f,o,i,t,e,this)}}else for(let u=0,h=l.count;u<h;u++)ds.fromBufferAttribute(l,u),No(ds,u,o,i,t,e,this)}else{let a=n.vertices;for(let c=0,l=a.length;c<l;c++)No(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function No(t,e,n,i,r,s,o){let a=Do.distanceSqToPoint(t);if(a<n){let c=new w;Do.closestPointToPoint(t,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Kc(t,e,n,i,r,s,o,a,c){ze.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:Ln,this.minFilter=s!==void 0?s:it,this.magFilter=r!==void 0?r:it,this.generateMipmaps=!1;let l=this;function u(){l.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}Kc.prototype=Object.assign(Object.create(ze.prototype),{constructor:Kc,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){let t=this.image,e="requestVideoFrameCallback"in t;e===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function mr(t,e,n,i,r,s,o,a,c,l,u,h){ze.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}mr.prototype=Object.create(ze.prototype);mr.prototype.constructor=mr;mr.prototype.isCompressedTexture=!0;function ps(t,e,n,i,r,s,o,a,c){ze.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}ps.prototype=Object.create(ze.prototype);ps.prototype.constructor=ps;ps.prototype.isCanvasTexture=!0;function ms(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:Zn,l!==Zn&&l!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Zn&&(n=Lr),n===void 0&&l===Ji&&(n=Zi),ze.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:ot,this.minFilter=a!==void 0?a:ot,this.flipY=!1,this.generateMipmaps=!1}ms.prototype=Object.create(ze.prototype);ms.prototype.constructor=ms;ms.prototype.isDepthTexture=!0;var Hm=0,Ut=new ye,Oo=new ue,gs=new w;function Nt(){Object.defineProperty(this,"id",{value:Hm+=2}),this.uuid=ve.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Nt.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Nt,isGeometry:!0,applyMatrix4:function(t){let e=new at().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++){let r=this.vertices[n];r.applyMatrix4(t)}for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Ut.makeRotationX(t),this.applyMatrix4(Ut),this},rotateY:function(t){return Ut.makeRotationY(t),this.applyMatrix4(Ut),this},rotateZ:function(t){return Ut.makeRotationZ(t),this.applyMatrix4(Ut),this},translate:function(t,e,n){return Ut.makeTranslation(t,e,n),this.applyMatrix4(Ut),this},scale:function(t,e,n){return Ut.makeScale(t,e,n),this.applyMatrix4(Ut),this},lookAt:function(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this},fromBufferGeometry:function(t){let e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new w().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new se().fromBufferAttribute(o,h));function l(h,d,f,p){let v=o===void 0?[]:[e.colors[h].clone(),e.colors[d].clone(),e.colors[f].clone()],y=s===void 0?[]:[new w().fromBufferAttribute(s,h),new w().fromBufferAttribute(s,d),new w().fromBufferAttribute(s,f)],g=new Wr(h,d,f,y,v,p);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new U().fromBufferAttribute(a,h),new U().fromBufferAttribute(a,d),new U().fromBufferAttribute(a,f)]),c!==void 0&&e.faceVertexUvs[1].push([new U().fromBufferAttribute(c,h),new U().fromBufferAttribute(c,d),new U().fromBufferAttribute(c,f)])}let u=t.groups;if(u.length>0)for(let h=0;h<u.length;h++){let d=u[h],f=d.start,p=d.count;for(let v=f,y=f+p;v<y;v+=3)n!==void 0?l(n.getX(v),n.getX(v+1),n.getX(v+2),d.materialIndex):l(v,v+1,v+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this},normalize:function(){this.computeBoundingSphere();let t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new ye;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){let t=new w,e=new w;for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t=!0){let e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new w;if(t){let n=new w,i=new w;for(let r=0,s=this.faces.length;r<s;r++){let o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){let r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){let n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){let i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}let t=new Nt;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];let r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){let c=new w,l={a:new w,b:new w,c:new w};r.push(c),s.push(l)}}let i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){let o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){let i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Mt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Rt),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n=0){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i,r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,u=t.colors;e!==void 0&&(i=new at().getNormalMatrix(e));for(let h=0,d=o.length;h<d;h++){let f=o[h],p=f.clone();e!==void 0&&p.applyMatrix4(e),s.push(p)}for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone());for(let h=0,d=c.length;h<d;h++){let f=c[h],p,v,y=f.vertexNormals,g=f.vertexColors,m=new Wr(f.a+r,f.b+r,f.c+r);m.normal.copy(f.normal),i!==void 0&&m.normal.applyMatrix3(i).normalize();for(let E=0,T=y.length;E<T;E++)p=y[E].clone(),i!==void 0&&p.applyMatrix3(i).normalize(),m.vertexNormals.push(p);m.color.copy(f.color);for(let E=0,T=g.length;E<T;E++)v=g[E],m.vertexColors.push(v.clone());m.materialIndex=f.materialIndex+n,a.push(m)}for(let h=0,d=t.faceVertexUvs.length;h<d;h++){let f=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,v=f.length;p<v;p++){let y=f[p],g=[];for(let m=0,E=y.length;m<E;m++)g.push(y[m].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(t=4){let e={},n=[],i=[],r=Math.pow(10,t);for(let a=0,c=this.vertices.length;a<c;a++){let l=this.vertices[a],u=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[u]===void 0?(e[u]=a,n.push(this.vertices[a]),i[a]=n.length-1):i[a]=i[e[u]]}let s=[];for(let a=0,c=this.faces.length;a<c;a++){let l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];let u=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(u[h]===u[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){let c=s[a];this.faces.splice(c,1);for(let l=0,u=this.faceVertexUvs.length;l<u;l++)this.faceVertexUvs[l].splice(c,1)}let o=this.vertices.length-n.length;return this.vertices=n,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){let i=t[e];this.vertices.push(new w(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){let t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);let i=this.faceVertexUvs[0],r=this.faceVertexUvs[1],s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){let c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){let t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){let f=this.parameters;for(let p in f)f[p]!==void 0&&(t[p]=f[p]);return t}let e=[];for(let f=0;f<this.vertices.length;f++){let p=this.vertices[f];e.push(p.x,p.y,p.z)}let n=[],i=[],r={},s=[],o={},a=[],c={};for(let f=0;f<this.faces.length;f++){let p=this.faces[f],v=!0,y=!1,g=this.faceVertexUvs[0][f]!==void 0,m=p.normal.length()>0,E=p.vertexNormals.length>0,T=p.color.r!==1||p.color.g!==1||p.color.b!==1,S=p.vertexColors.length>0,_=0;if(_=l(_,0,0),_=l(_,1,v),_=l(_,2,y),_=l(_,3,g),_=l(_,4,m),_=l(_,5,E),_=l(_,6,T),_=l(_,7,S),n.push(_),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){let A=this.faceVertexUvs[0][f];n.push(d(A[0]),d(A[1]),d(A[2]))}if(m&&n.push(u(p.normal)),E){let A=p.vertexNormals;n.push(u(A[0]),u(A[1]),u(A[2]))}if(T&&n.push(h(p.color)),S){let A=p.vertexColors;n.push(h(A[0]),h(A[1]),h(A[2]))}}function l(f,p,v){return v?f|1<<p:f&~(1<<p)}function u(f){let p=f.x.toString()+f.y.toString()+f.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(f.x,f.y,f.z)),r[p]}function h(f){let p=f.r.toString()+f.g.toString()+f.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(f.getHex())),o[p]}function d(f){let p=f.x.toString()+f.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(f.x,f.y)),c[p]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new Nt().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;let e=t.vertices;for(let h=0,d=e.length;h<d;h++)this.vertices.push(e[h].clone());let n=t.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());let i=t.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=t.faceVertexUvs.length;h<d;h++){let f=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,v=f.length;p<v;p++){let y=f[p],g=[];for(let m=0,E=y.length;m<E;m++){let T=y[m];g.push(T.clone())}this.faceVertexUvs[h].push(g)}}let r=t.morphTargets;for(let h=0,d=r.length;h<d;h++){let f={};if(f.name=r[h].name,r[h].vertices!==void 0){f.vertices=[];for(let p=0,v=r[h].vertices.length;p<v;p++)f.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){f.normals=[];for(let p=0,v=r[h].normals.length;p<v;p++)f.normals.push(r[h].normals[p].clone())}this.morphTargets.push(f)}let s=t.morphNormals;for(let h=0,d=s.length;h<d;h++){let f={};if(s[h].vertexNormals!==void 0){f.vertexNormals=[];for(let p=0,v=s[h].vertexNormals.length;p<v;p++){let y=s[h].vertexNormals[p],g={};g.a=y.a.clone(),g.b=y.b.clone(),g.c=y.c.clone(),f.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){f.faceNormals=[];for(let p=0,v=s[h].faceNormals.length;p<v;p++)f.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(f)}let o=t.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());let a=t.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());let c=t.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Wg=new w,jg=new w,qg=new w,Xg=new Ke,Vm={triangulate:function(t,e,n){n=n||2;let i=e&&e.length,r=i?e[0]*n:t.length,s=el(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=km(t,e,s,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let p=n;p<r;p+=n)h=t[p],d=t[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return gr(s,o,n,a,c,f),o}};function el(t,e,n,i,r){let s,o;if(r===Wm(t,e,n,i)>0)for(s=e;s<n;s+=i)o=tl(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=tl(s,t[s],t[s+1],o);return o&&vs(o,o.next)&&(vr(o),o=o.next),o}function Mn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(vs(n,n.next)||je(n.prev,n,n.next)===0)){if(vr(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function gr(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Zm(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?qm(t,i,r,s):jm(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),vr(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=Xm(Mn(t),e,n),gr(t,e,n,i,r,s,2)):o===2&&Ym(t,e,n,i,r,s):gr(Mn(t),e,n,i,r,s,1);break}}}function jm(t){let e=t.prev,n=t,i=t.next;if(je(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(Ci(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&je(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function qm(t,e,n,i){let r=t.prev,s=t,o=t.next;if(je(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Bo(a,c,e,n,i),d=Bo(l,u,e,n,i),f=t.prevZ,p=t.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==t.prev&&f!==t.next&&Ci(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&je(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,p!==t.prev&&p!==t.next&&Ci(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==t.prev&&f!==t.next&&Ci(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&je(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==t.prev&&p!==t.next&&Ci(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Xm(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!vs(r,s)&&nl(r,i,i.next,s)&&yr(r,s)&&yr(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),vr(i),vr(i.next),i=t=s),i=i.next}while(i!==t);return Mn(i)}function Ym(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jm(o,a)){let c=il(o,a);o=Mn(o,o.next),c=Mn(c,c.next),gr(o,e,n,i,r,s),gr(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function km(t,e,n,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=el(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Km(l));for(r.sort($m),s=0;s<r.length;s++)Qm(r[s],n),n=Mn(n,n.next);return n}function $m(t,e){return t.x-e.x}function Qm(t,e){if(e=eg(t,e),e){let n=il(e,t);Mn(e,e.next),Mn(n,n.next)}}function eg(t,e){let n=e,i=t.x,r=t.y,s=-Infinity,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,u=Infinity,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&Ci(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),yr(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&tg(o,n)))&&(o=n,u=h)),n=n.next;while(n!==a);return o}function tg(t,e){return je(t.prev,t,e.prev)<0&&je(e.next,t,t.next)<0}function Zm(t,e,n,i){let r=t;do r.z===null&&(r.z=Bo(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,ng(r)}function ng(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&!(a++,i=i.nextZ,!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function Bo(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Km(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ci(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function Jm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!ig(t,e)&&(yr(t,e)&&yr(e,t)&&rg(t,e)&&(je(t.prev,t,e.prev)||je(t,e.prev,e))||vs(t,e)&&je(t.prev,t,t.next)>0&&je(e.prev,e,e.next)>0)}function je(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function vs(t,e){return t.x===e.x&&t.y===e.y}function nl(t,e,n,i){let r=xs(je(t,e,n)),s=xs(je(t,e,i)),o=xs(je(n,i,t)),a=xs(je(n,i,e));return r!==s&&o!==a||(r===0&&ys(t,n,e)||(s===0&&ys(t,i,e)||o===0&&ys(n,t,i)))?!0:!!(a===0&&ys(n,e,i))}function ys(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function xs(t){return t>0?1:t<0?-1:0}function ig(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&nl(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function yr(t,e){return je(t.prev,t,t.next)<0?je(t,e,t.next)>=0&&je(t,t.prev,e)>=0:je(t,e,t.prev)<0||je(t,t.next,e)<0}function rg(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!==n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function il(t,e){let n=new Fo(t.i,t.x,t.y),i=new Fo(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function tl(t,e,n,i){let r=new Fo(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function vr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Fo(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wm(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Sn={area:function(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return Sn.area(t)<0},triangulateShape:function(t,e){let n=[],i=[],r=[];rl(t),sl(n,t);let s=t.length;e.forEach(rl);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,sl(n,e[a]);let o=Vm.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function rl(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function sl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var zo=class extends De{constructor(e,n){super();this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Pe(r,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals();function o(a){let c=[],l=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:f-2,v=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3,g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:sg;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let E,T=!1,S,_,A,F;g&&(E=g.getSpacedPoints(u),T=!0,d=!1,S=g.computeFrenetFrames(u,!1),_=new w,A=new w,F=new w),d||(y=0,f=0,p=0,v=0);let X=a.extractPoints(l),te=X.shape,C=X.holes,B=!Sn.isClockWise(te);if(B){te=te.reverse();for(let W=0,Z=C.length;W<Z;W++){let $=C[W];Sn.isClockWise($)&&(C[W]=$.reverse())}}let D=Sn.triangulateShape(te,C),O=te;for(let W=0,Z=C.length;W<Z;W++){let $=C[W];te=te.concat($)}function R(W,Z,$){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar($).add(W)}let P=te.length,G=D.length;function k(W,Z,$){let he,ne,M,x=W.x-Z.x,j=W.y-Z.y,V=$.x-W.x,L=$.y-W.y,q=x*x+j*j,ee=x*L-j*V;if(Math.abs(ee)>Number.EPSILON){let ce=Math.sqrt(q),J=Math.sqrt(V*V+L*L),oe=Z.x-j/ce,fe=Z.y+x/ce,_e=$.x-L/J,ae=$.y+V/J,me=((_e-oe)*L-(ae-fe)*V)/(x*L-j*V);he=oe+x*me-W.x,ne=fe+j*me-W.y;let He=he*he+ne*ne;if(He<=2)return new U(he,ne);M=Math.sqrt(He/2)}else{let ce=!1;x>Number.EPSILON?V>Number.EPSILON&&(ce=!0):x<-Number.EPSILON?V<-Number.EPSILON&&(ce=!0):Math.sign(j)===Math.sign(L)&&(ce=!0),ce?(he=-j,ne=x,M=Math.sqrt(q)):(he=x,ne=j,M=Math.sqrt(q/2))}return new U(he/M,ne/M)}let K=[];for(let W=0,Z=O.length,$=Z-1,he=W+1;W<Z;W++,$++,he++)$===Z&&($=0),he===Z&&(he=0),K[W]=k(O[W],O[$],O[he]);let re=[],ie,xe=K.concat();for(let W=0,Z=C.length;W<Z;W++){let $=C[W];ie=[];for(let he=0,ne=$.length,M=ne-1,x=he+1;he<ne;he++,M++,x++)M===ne&&(M=0),x===ne&&(x=0),ie[he]=k($[he],$[M],$[x]);re.push(ie),xe=xe.concat(ie)}for(let W=0;W<y;W++){let Z=W/y,$=f*Math.cos(Z*Math.PI/2),he=p*Math.sin(Z*Math.PI/2)+v;for(let ne=0,M=O.length;ne<M;ne++){let x=R(O[ne],K[ne],he);de(x.x,x.y,-$)}for(let ne=0,M=C.length;ne<M;ne++){let x=C[ne];ie=re[ne];for(let j=0,V=x.length;j<V;j++){let L=R(x[j],ie[j],he);de(L.x,L.y,-$)}}}let we=p+v;for(let W=0;W<P;W++){let Z=d?R(te[W],xe[W],we):te[W];T?(A.copy(S.normals[0]).multiplyScalar(Z.x),_.copy(S.binormals[0]).multiplyScalar(Z.y),F.copy(E[0]).add(A).add(_),de(F.x,F.y,F.z)):de(Z.x,Z.y,0)}for(let W=1;W<=u;W++)for(let Z=0;Z<P;Z++){let $=d?R(te[Z],xe[Z],we):te[Z];T?(A.copy(S.normals[W]).multiplyScalar($.x),_.copy(S.binormals[W]).multiplyScalar($.y),F.copy(E[W]).add(A).add(_),de(F.x,F.y,F.z)):de($.x,$.y,h/u*W)}for(let W=y-1;W>=0;W--){let Z=W/y,$=f*Math.cos(Z*Math.PI/2),he=p*Math.sin(Z*Math.PI/2)+v;for(let ne=0,M=O.length;ne<M;ne++){let x=R(O[ne],K[ne],he);de(x.x,x.y,h+$)}for(let ne=0,M=C.length;ne<M;ne++){let x=C[ne];ie=re[ne];for(let j=0,V=x.length;j<V;j++){let L=R(x[j],ie[j],he);T?de(L.x,L.y+E[u-1].y,E[u-1].x+$):de(L.x,L.y,h+$)}}}Ve(),H();function Ve(){let W=r.length/3;if(d){let Z=0,$=P*Z;for(let he=0;he<G;he++){let ne=D[he];Re(ne[2]+$,ne[1]+$,ne[0]+$)}Z=u+y*2,$=P*Z;for(let he=0;he<G;he++){let ne=D[he];Re(ne[0]+$,ne[1]+$,ne[2]+$)}}else{for(let Z=0;Z<G;Z++){let $=D[Z];Re($[2],$[1],$[0])}for(let Z=0;Z<G;Z++){let $=D[Z];Re($[0]+P*u,$[1]+P*u,$[2]+P*u)}}i.addGroup(W,r.length/3-W,0)}function H(){let W=r.length/3,Z=0;nt(O,Z),Z+=O.length;for(let $=0,he=C.length;$<he;$++){let ne=C[$];nt(ne,Z),Z+=ne.length}i.addGroup(W,r.length/3-W,1)}function nt(W,Z){let $=W.length;for(;--$>=0;){let he=$,ne=$-1;ne<0&&(ne=W.length-1);for(let M=0,x=u+y*2;M<x;M++){let j=P*M,V=P*(M+1),L=Z+he+j,q=Z+ne+j,ee=Z+ne+V,ce=Z+he+V;Me(L,q,ee,ce)}}}function de(W,Z,$){c.push(W),c.push(Z),c.push($)}function Re(W,Z,$){Ne(W),Ne(Z),Ne($);let he=r.length/3,ne=m.generateTopUV(i,r,he-3,he-2,he-1);Te(ne[0]),Te(ne[1]),Te(ne[2])}function Me(W,Z,$,he){Ne(W),Ne(Z),Ne(he),Ne(Z),Ne($),Ne(he);let ne=r.length/3,M=m.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);Te(M[0]),Te(M[1]),Te(M[3]),Te(M[1]),Te(M[2]),Te(M[3])}function Ne(W){r.push(c[W*3+0]),r.push(c[W*3+1]),r.push(c[W*3+2])}function Te(W){s.push(W.x),s.push(W.y)}}}toJSON(){let e=De.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return og(n,i,e)}},sg={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new U(s,o),new U(a,c),new U(l,u)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],v=e[s*3],y=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<.01?[new U(o,1-c),new U(l,1-h),new U(d,1-p),new U(v,1-g)]:[new U(a,1-c),new U(u,1-h),new U(f,1-p),new U(y,1-g)]}};function og(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var ol=class extends Nt{constructor(e,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new zo(e,n)),this.mergeVertices()}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return ag(n,i,e)}};function ag(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function _s(t,e,n){De.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};let i=[],r=[],s=[],o=[],a=1e-5,c=new w,l=new w,u=new w,h=new w,d=new w;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=e+1;for(let p=0;p<=n;p++){let v=p/n;for(let y=0;y<=e;y++){let g=y/e;t(g,v,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,v,u),h.subVectors(l,u)):(t(g+a,v,u),h.subVectors(u,l)),v-a>=0?(t(g,v-a,u),d.subVectors(l,u)):(t(g,v+a,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,v)}}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=p*f+v,g=p*f+v+1,m=(p+1)*f+v+1,E=(p+1)*f+v;i.push(y,g,E),i.push(g,m,E)}this.setIndex(i),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(o,2))}_s.prototype=Object.create(De.prototype);_s.prototype.constructor=_s;function Uo(t,e,n){Nt.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new _s(t,e,n)),this.mergeVertices()}Uo.prototype=Object.create(Nt.prototype);Uo.prototype.constructor=Uo;var al=class extends De{constructor(e,n=12){super();this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(o,2));function l(u){let h=r.length/3,d=u.extractPoints(n),f=d.shape,p=d.holes;Sn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=p.length;y<g;y++){let m=p[y];Sn.isClockWise(m)===!0&&(p[y]=m.reverse())}let v=Sn.triangulateShape(f,p);for(let y=0,g=p.length;y<g;y++){let m=p[y];f=f.concat(m)}for(let y=0,g=f.length;y<g;y++){let m=f[y];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let y=0,g=v.length;y<g;y++){let m=v[y],E=m[0]+h,T=m[1]+h,S=m[2]+h;i.push(E,T,S),c+=3}}}toJSON(){let e=De.prototype.toJSON.call(this),n=this.parameters.shapes;return cg(n,e)}};function cg(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var cl=class extends Nt{constructor(e,n){super();this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new al(e,n)),this.mergeVertices()}toJSON(){let e=Nt.prototype.toJSON.call(this),n=this.parameters.shapes;return lg(n,e)}};function lg(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Go=class extends De{constructor(e){super();this.type="WireframeGeometry";let n=[],i=[0,0],r={},s=["a","b","c"];if(e&&e.isGeometry){let o=e.faces;for(let a=0,c=o.length;a<c;a++){let l=o[a];for(let u=0;u<3;u++){let h=l[s[u]],d=l[s[(u+1)%3]];i[0]=Math.min(h,d),i[1]=Math.max(h,d);let f=i[0]+","+i[1];r[f]===void 0&&(r[f]={index1:i[0],index2:i[1]})}}for(let a in r){let c=r[a],l=e.vertices[c.index1];n.push(l.x,l.y,l.z),l=e.vertices[c.index2],n.push(l.x,l.y,l.z)}}else if(e&&e.isBufferGeometry){let o=new w;if(e.index!==null){let a=e.attributes.position,c=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:c.count,materialIndex:0}]);for(let u=0,h=l.length;u<h;++u){let d=l[u],f=d.start,p=d.count;for(let v=f,y=f+p;v<y;v+=3)for(let g=0;g<3;g++){let m=c.getX(v+g),E=c.getX(v+(g+1)%3);i[0]=Math.min(m,E),i[1]=Math.max(m,E);let T=i[0]+","+i[1];r[T]===void 0&&(r[T]={index1:i[0],index2:i[1]})}}for(let u in r){let h=r[u];o.fromBufferAttribute(a,h.index1),n.push(o.x,o.y,o.z),o.fromBufferAttribute(a,h.index2),n.push(o.x,o.y,o.z)}}else{let a=e.attributes.position;for(let c=0,l=a.count/3;c<l;c++)for(let u=0;u<3;u++){let h=3*c+u;o.fromBufferAttribute(a,h),n.push(o.x,o.y,o.z);let d=3*c+(u+1)%3;o.fromBufferAttribute(a,d),n.push(o.x,o.y,o.z)}}}this.setAttribute("position",new Pe(n,3))}};function Ri(t){pe.call(this),this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(t)}Ri.prototype=Object.create(pe.prototype);Ri.prototype.constructor=Ri;Ri.prototype.isShadowMaterial=!0;Ri.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this};function zn(t){et.call(this,t),this.type="RawShaderMaterial"}zn.prototype=Object.create(et.prototype);zn.prototype.constructor=zn;zn.prototype.isRawShaderMaterial=!0;function rn(t){pe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}rn.prototype=Object.create(pe.prototype);rn.prototype.constructor=rn;rn.prototype.isMeshStandardMaterial=!0;rn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Un(t){rn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new U(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=ve.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}Un.prototype=Object.create(rn.prototype);Un.prototype.constructor=Un;Un.prototype.isMeshPhysicalMaterial=!0;Un.prototype.copy=function(t){return rn.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new se).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Gn(t){pe.call(this),this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Gn.prototype=Object.create(pe.prototype);Gn.prototype.constructor=Gn;Gn.prototype.isMeshPhongMaterial=!0;Gn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Pi(t){pe.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Pi.prototype=Object.create(pe.prototype);Pi.prototype.constructor=Pi;Pi.prototype.isMeshToonMaterial=!0;Pi.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Ii(t){pe.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Ii.prototype=Object.create(pe.prototype);Ii.prototype.constructor=Ii;Ii.prototype.isMeshNormalMaterial=!0;Ii.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Di(t){pe.call(this),this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Di.prototype=Object.create(pe.prototype);Di.prototype.constructor=Di;Di.prototype.isMeshLambertMaterial=!0;Di.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Ni(t){pe.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Ni.prototype=Object.create(pe.prototype);Ni.prototype.constructor=Ni;Ni.prototype.isMeshMatcapMaterial=!0;Ni.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Oi(t){ht.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}Oi.prototype=Object.create(ht.prototype);Oi.prototype.constructor=Oi;Oi.prototype.isLineDashedMaterial=!0;Oi.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var hg=Object.freeze({__proto__:null,ShadowMaterial:Ri,SpriteMaterial:Bn,RawShaderMaterial:zn,ShaderMaterial:et,PointsMaterial:Fn,MeshPhysicalMaterial:Un,MeshStandardMaterial:rn,MeshPhongMaterial:Gn,MeshToonMaterial:Pi,MeshNormalMaterial:Ii,MeshLambertMaterial:Di,MeshDepthMaterial:Dn,MeshDistanceMaterial:Nn,MeshBasicMaterial:nn,MeshMatcapMaterial:Ni,LineDashedMaterial:Oi,LineBasicMaterial:ht,Material:pe}),ke={arraySlice:function(t,e,n){return ke.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}let n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){let a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o===void 0)return;if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){let s=t.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){let p=l.times[f]*r;if(p<n||p>=i)continue;h.push(l.times[f]);for(let v=0;v<u;++v)d.push(l.values[f*u+v])}if(h.length===0)continue;l.times=ke.convertArray(h,l.times.constructor),l.values=ke.convertArray(d,l.values.constructor),o.push(l)}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);let r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=a.times.length-1,v;if(s<=a.times[0]){let g=u,m=h-u;v=ke.arraySlice(a.values,g,m)}else if(s>=a.times[p]){let g=p*h+u,m=g+h-u;v=ke.arraySlice(a.values,g,m)}else{let g=a.createInterpolant(),m=u,E=h-u;g.evaluate(s),v=ke.arraySlice(g.resultBuffer,m,E)}if(c==="quaternion"){let g=new mt().fromArray(v).normalize().conjugate();g.toArray(v)}let y=l.times.length;for(let g=0;g<y;++g){let m=g*f+d;if(c==="quaternion")mt.multiplyQuaternionsFlat(l.values,m,v,0,l.values,m);else{let E=f-d*2;for(let T=0;T<E;++T)l.values[m+T]-=v[T]}}}return t.blendMode=qa,t}};function Tt(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(Tt.prototype,{evaluate:function(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){let o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Tt.prototype,{beforeStart_:Tt.prototype.copySampleValue_,afterEnd_:Tt.prototype.copySampleValue_});function Ho(t,e,n,i){Tt.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Ho.prototype=Object.assign(Object.create(Tt.prototype),{constructor:Ho,DefaultSettings_:{endingStart:Jn,endingEnd:Jn},intervalChanged_:function(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case $n:r=t,o=2*e-n;break;case Dr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case $n:s=t,a=2*n-e;break;case Dr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}let c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(n-e)/(i-e),p=f*f,v=p*f,y=-h*v+2*h*p-h*f,g=(1+h)*v+(-1.5-2*h)*p+(-.5+h)*f+1,m=(-1-d)*v+(1.5+d)*p+.5*f,E=d*v-d*p;for(let T=0;T!==o;++T)r[T]=y*s[l+T]+g*s[c+T]+m*s[a+T]+E*s[u+T];return r}});function bs(t,e,n,i){Tt.call(this,t,e,n,i)}bs.prototype=Object.assign(Object.create(Tt.prototype),{constructor:bs,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function ko(t,e,n,i){Tt.call(this,t,e,n,i)}ko.prototype=Object.assign(Object.create(Tt.prototype),{constructor:ko,interpolate_:function(t){return this.copySampleValue_(t-1)}});function st(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ke.convertArray(e,this.TimeBufferType),this.values=ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(st,{toJSON:function(t){let e=t.constructor,n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:ke.convertArray(t.times,Array),values:ke.convertArray(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(st.prototype,{constructor:st,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Ir,InterpolantFactoryMethodDiscrete:function(t){return new ko(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new bs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Ho(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case qs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return qs}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=ke.arraySlice(n,r,s),this.values=ke.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&ke.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){let t=ke.arraySlice(this.times),e=ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===qs,r=t.length-1,s=1;for(let o=1;o<r;++o){let a=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{let u=o*n,h=u-n,d=u+n;for(let f=0;f!==n;++f){let p=e[u+f];if(p!==e[h+f]||p!==e[d+f]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];let u=o*n,h=s*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=ke.arraySlice(t,0,s),this.values=ke.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){let t=ke.arraySlice(this.times,0),e=ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function Vo(t,e,n){st.call(this,t,e,n)}Vo.prototype=Object.assign(Object.create(st.prototype),{constructor:Vo,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Pr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Wo(t,e,n,i){st.call(this,t,e,n,i)}Wo.prototype=Object.assign(Object.create(st.prototype),{constructor:Wo,ValueTypeName:"color"});function xr(t,e,n,i){st.call(this,t,e,n,i)}xr.prototype=Object.assign(Object.create(st.prototype),{constructor:xr,ValueTypeName:"number"});function jo(t,e,n,i){Tt.call(this,t,e,n,i)}jo.prototype=Object.assign(Object.create(Tt.prototype),{constructor:jo,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let l=c+o;c!==l;c+=4)mt.slerpFlat(r,0,s,c-o,s,c,a);return r}});function ws(t,e,n,i){st.call(this,t,e,n,i)}ws.prototype=Object.assign(Object.create(st.prototype),{constructor:ws,ValueTypeName:"quaternion",DefaultInterpolation:Ir,InterpolantFactoryMethodLinear:function(t){return new jo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function qo(t,e,n,i){st.call(this,t,e,n,i)}qo.prototype=Object.assign(Object.create(st.prototype),{constructor:qo,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Pr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function _r(t,e,n,i){st.call(this,t,e,n,i)}_r.prototype=Object.assign(Object.create(st.prototype),{constructor:_r,ValueTypeName:"vector"});function Ot(t,e,n,i){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.blendMode=i!==void 0?i:Xs,this.uuid=ve.generateUUID(),this.duration<0&&this.resetDuration()}function ug(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return Wo;case"quaternion":return ws;case"bool":case"boolean":return Vo;case"string":return qo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function fg(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ug(t.type);if(t.times===void 0){let n=[],i=[];ke.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Ot,{parse:function(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(fg(n[s]).scale(i));let r=new Ot(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(st.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){let r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let l=ke.getKeyframeOrder(a);a=ke.sortedArray(a,1,l),c=ke.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new xr(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Ot(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.name.match(r);if(l&&l.length>1){let u=l[1],h=i[u];h||(i[u]=h=[]),h.push(c)}}let s=[];for(let o in i)s.push(Ot.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,h,d,f,p){if(d.length!==0){let v=[],y=[];ke.flattenJSON(d,v,y,f),v.length!==0&&p.push(new u(h,v,y))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode,a=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let h=c[u].keys;if(!h||h.length===0)continue;if(h[0].morphTargets){let d={},f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let p=0;p<h[f].morphTargets.length;p++)d[h[f].morphTargets[p]]=-1;for(let p in d){let v=[],y=[];for(let g=0;g!==h[f].morphTargets.length;++g){let m=h[f];v.push(m.time),y.push(m.morphTarget===p?1:0)}i.push(new xr(".morphTargetInfluence["+p+"]",v,y))}a=d.length*(s||1)}else{let d=".bones["+e[u].name+"]";n(_r,d+".position",h,"pos",i),n(ws,d+".quaternion",h,"rot",i),n(_r,d+".scale",h,"scl",i)}}if(i.length===0)return null;let l=new Ot(r,a,i,o);return l}});Object.assign(Ot.prototype,{resetDuration:function(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Ot(this.name,this.duration,t,this.blendMode)},toJSON:function(){return Ot.toJSON(this)}});var Bi={enabled:!1,files:{},add:function(t,e){if(this.enabled===!1)return;this.files[t]=e},get:function(t){return this.enabled===!1?void 0:this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function dg(t,e,n){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&(i.onStart!==void 0&&i.onStart(l,s,o)),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}var pg=new dg;function Oe(t){this.manager=t!==void 0?t:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Oe.prototype,{load:function(){},loadAsync:function(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var Bt={};function sn(t){Oe.call(this,t)}sn.prototype=Object.assign(Object.create(Oe.prototype),{constructor:sn,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Bi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Bt[t]!==void 0){Bt[t].push({onLoad:e,onProgress:n,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o),c;if(a){let l=a[1],u=!!a[2],h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let p=new Uint8Array(h.length);for(let y=0;y<h.length;y++)p[y]=h.charCodeAt(y);f==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":let v=new DOMParser;d=v.parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(t)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Bt[t]=[],Bt[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){let u=this.response,h=Bt[t];if(delete Bt[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Bi.add(t,u);for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(t)}else{for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){let u=Bt[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let u=Bt[t];delete Bt[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){let u=Bt[t];delete Bt[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function ll(t){Oe.call(this,t)}ll.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ll,load:function(t,e,n,i){let r=this,s=new sn(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=[];for(let n=0;n<t.length;n++){let i=Ot.parse(t[n]);e.push(i)}return e}});function hl(t){Oe.call(this,t)}hl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:hl,load:function(t,e,n,i){let r=this,s=[],o=new mr;o.image=s;let a=new sn(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(t[u],function(h){let d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=it),o.format=d.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,h=t.length;u<h;++u)l(u);else a.load(t,function(u){let h=r.parse(u,!0);if(h.isCubemap){let d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=it),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function Ms(t){Oe.call(this,t)}Ms.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Ms,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Bi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),Bi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&(this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin)),r.manager.itemStart(t),o.src=t,o}});function Xo(t){Oe.call(this,t)}Xo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Xo,load:function(t,e,n,i){let r=new _n,s=new Ms(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function ul(t){Oe.call(this,t)}ul.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ul,load:function(t,e,n,i){let r=this,s=new xi,o=new sn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){let c=r.parse(a);if(!c)return;c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:vt,s.wrapT=c.wrapT!==void 0?c.wrapT:vt,s.magFilter=c.magFilter!==void 0?c.magFilter:it,s.minFilter=c.minFilter!==void 0?c.minFilter:it,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Ar),c.mipmapCount===1&&(s.minFilter=it),s.needsUpdate=!0,e&&e(s,c)},n,i),s}});function Yo(t){Oe.call(this,t)}Yo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Yo,load:function(t,e,n,i){let r=new ze,s=new Ms(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;let a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?Ln:Lt,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function le(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(le.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){let t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){let n=this.getLengths(),i=0,r=n.length,s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);let l=n[i],u=n[i+1],h=u-l,d=(s-l)/h,f=(i+d)/(r-1);return f},getTangent:function(t,e){let n=1e-4,i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new U:new w);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){let n=new w,i=[],r=[],s=[],o=new w,a=new ye;for(let d=0;d<=t;d++){let f=d/t;i[d]=this.getTangentAt(f,new w),i[d].normalize()}r[0]=new w,s[0]=new w;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ve.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ve.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let f=1;f<=t;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){let t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function At(t,e,n,i,r,s,o,a){le.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}At.prototype=Object.create(le.prototype);At.prototype.constructor=At;At.prototype.isEllipseCurve=!0;At.prototype.getPoint=function(t,e){let n=e||new U,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*u+this.aX,c=h*u+d*l+this.aY}return n.set(a,c)};At.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};At.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};At.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function br(t,e,n,i,r,s){At.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}br.prototype=Object.create(At.prototype);br.prototype.constructor=br;br.prototype.isArcCurve=!0;function Zo(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Ss=new w,Jo=new Zo,$o=new Zo,Qo=new Zo;function ut(t=[],e=!1,n="centripetal",i=.5){le.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}ut.prototype=Object.create(le.prototype);ut.prototype.constructor=ut;ut.prototype.isCatmullRomCurve3=!0;ut.prototype.getPoint=function(t,e=new w){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Ss.subVectors(i[0],i[1]).add(i[0]),c=Ss);let u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(l),d);p<1e-4&&(p=1),f<1e-4&&(f=p),v<1e-4&&(v=p),Jo.initNonuniformCatmullRom(c.x,u.x,h.x,l.x,f,p,v),$o.initNonuniformCatmullRom(c.y,u.y,h.y,l.y,f,p,v),Qo.initNonuniformCatmullRom(c.z,u.z,h.z,l.z,f,p,v)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,u.x,h.x,l.x,this.tension),$o.initCatmullRom(c.y,u.y,h.y,l.y,this.tension),Qo.initCatmullRom(c.z,u.z,h.z,l.z,this.tension));return n.set(Jo.calc(a),$o.calc(a),Qo.calc(a)),n};ut.prototype.copy=function(t){le.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};ut.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};ut.prototype.fromJSON=function(t){le.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function fl(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function mg(t,e){let n=1-t;return n*n*e}function gg(t,e){return 2*(1-t)*t*e}function vg(t,e){return t*t*e}function wr(t,e,n,i){return mg(t,e)+gg(t,n)+vg(t,i)}function yg(t,e){let n=1-t;return n*n*n*e}function xg(t,e){let n=1-t;return 3*n*n*t*e}function _g(t,e){return 3*(1-t)*t*t*e}function bg(t,e){return t*t*t*e}function Mr(t,e,n,i,r){return yg(t,e)+xg(t,n)+_g(t,i)+bg(t,r)}function Gt(t=new U,e=new U,n=new U,i=new U){le.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Gt.prototype=Object.create(le.prototype);Gt.prototype.constructor=Gt;Gt.prototype.isCubicBezierCurve=!0;Gt.prototype.getPoint=function(t,e=new U){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Mr(t,i.x,r.x,s.x,o.x),Mr(t,i.y,r.y,s.y,o.y)),n};Gt.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Gt.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Gt.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function on(t=new w,e=new w,n=new w,i=new w){le.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}on.prototype=Object.create(le.prototype);on.prototype.constructor=on;on.prototype.isCubicBezierCurve3=!0;on.prototype.getPoint=function(t,e=new w){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Mr(t,i.x,r.x,s.x,o.x),Mr(t,i.y,r.y,s.y,o.y),Mr(t,i.z,r.z,s.z,o.z)),n};on.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};on.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};on.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function bt(t=new U,e=new U){le.call(this),this.type="LineCurve",this.v1=t,this.v2=e}bt.prototype=Object.create(le.prototype);bt.prototype.constructor=bt;bt.prototype.isLineCurve=!0;bt.prototype.getPoint=function(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};bt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};bt.prototype.getTangent=function(t,e){let n=e||new U;return n.copy(this.v2).sub(this.v1).normalize(),n};bt.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};bt.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};bt.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ht(t=new w,e=new w){le.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Ht.prototype=Object.create(le.prototype);Ht.prototype.constructor=Ht;Ht.prototype.isLineCurve3=!0;Ht.prototype.getPoint=function(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Ht.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Ht.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Ht.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Ht.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function kt(t=new U,e=new U,n=new U){le.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}kt.prototype=Object.create(le.prototype);kt.prototype.constructor=kt;kt.prototype.isQuadraticBezierCurve=!0;kt.prototype.getPoint=function(t,e=new U){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(wr(t,i.x,r.x,s.x),wr(t,i.y,r.y,s.y)),n};kt.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};kt.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};kt.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function an(t=new w,e=new w,n=new w){le.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}an.prototype=Object.create(le.prototype);an.prototype.constructor=an;an.prototype.isQuadraticBezierCurve3=!0;an.prototype.getPoint=function(t,e=new w){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(wr(t,i.x,r.x,s.x),wr(t,i.y,r.y,s.y),wr(t,i.z,r.z,s.z)),n};an.prototype.copy=function(t){return le.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};an.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};an.prototype.fromJSON=function(t){return le.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Vt(t=[]){le.call(this),this.type="SplineCurve",this.points=t}Vt.prototype=Object.create(le.prototype);Vt.prototype.constructor=Vt;Vt.prototype.isSplineCurve=!0;Vt.prototype.getPoint=function(t,e=new U){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(fl(o,a.x,c.x,l.x,u.x),fl(o,a.y,c.y,l.y,u.y)),n};Vt.prototype.copy=function(t){le.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this};Vt.prototype.toJSON=function(){let t=le.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t};Vt.prototype.fromJSON=function(t){le.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this};var wg=Object.freeze({__proto__:null,ArcCurve:br,CatmullRomCurve3:ut,CubicBezierCurve:Gt,CubicBezierCurve3:on,EllipseCurve:At,LineCurve:bt,LineCurve3:Ht,QuadraticBezierCurve:kt,QuadraticBezierCurve3:an,SplineCurve:Vt});function En(){le.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}En.prototype=Object.assign(Object.create(le.prototype),{constructor:En,add:function(t){this.curves.push(t)},closePath:function(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new bt(e,t))},getPoint:function(t){let e=t*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=e){let r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){let t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){let l=a[c];if(n&&n.equals(l))continue;e.push(l),n=l}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){le.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){let t=le.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){le.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new wg[i.type]().fromJSON(i))}return this}});function Wt(t){En.call(this),this.type="Path",this.currentPoint=new U,t&&this.setFromPoints(t)}Wt.prototype=Object.assign(Object.create(En.prototype),{constructor:Wt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){let n=new bt(this.currentPoint.clone(),new U(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){let r=new kt(this.currentPoint.clone(),new U(t,e),new U(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){let o=new Gt(this.currentPoint.clone(),new U(t,e),new U(n,i),new U(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){let e=[this.currentPoint.clone()].concat(t),n=new Vt(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){let c=new At(t,e,n,i,r,s,o,a);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return En.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){let t=En.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return En.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function Fi(t){Wt.call(this,t),this.uuid=ve.generateUUID(),this.type="Shape",this.holes=[]}Fi.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Fi,getPointsHoles:function(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Wt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){let t=Wt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Wt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Wt().fromJSON(i))}return this}});function Ge(t,e=1){ue.call(this),this.type="Light",this.color=new se(t),this.intensity=e}Ge.prototype=Object.assign(Object.create(ue.prototype),{constructor:Ge,isLight:!0,copy:function(t){return ue.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){let e=ue.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Es(t,e,n){Ge.call(this,t,n),this.type="HemisphereLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.groundColor=new se(e)}Es.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Es,isHemisphereLight:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function cn(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new U(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}Object.assign(cn.prototype,{_projScreenMatrix:new ye,_lightPositionWorld:new w,_lookTarget:new w,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){let e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function Ko(){cn.call(this,new Ye(50,1,.5,500)),this.focus=1}Ko.prototype=Object.assign(Object.create(cn.prototype),{constructor:Ko,isSpotLightShadow:!0,updateMatrices:function(t){let e=this.camera,n=ve.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),cn.prototype.updateMatrices.call(this,t)}});function dl(t,e,n,i,r,s){Ge.call(this,t,e),this.type="SpotLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.target=new ue,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new Ko}dl.prototype=Object.assign(Object.create(Ge.prototype),{constructor:dl,isSpotLight:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ea(){cn.call(this,new Ye(90,1,.5,500)),this._frameExtents=new U(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}ea.prototype=Object.assign(Object.create(cn.prototype),{constructor:ea,isPointLightShadow:!0,updateMatrices:function(t,e=0){let n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function pl(t,e,n,i){Ge.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new ea}pl.prototype=Object.assign(Object.create(Ge.prototype),{constructor:pl,isPointLight:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function ta(t,e,n,i,r,s){xn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=e!==void 0?e:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}ta.prototype=Object.assign(Object.create(xn.prototype),{constructor:ta,isOrthographicCamera:!0,copy:function(t,e){return xn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ue.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function na(){cn.call(this,new ta(-5,5,5,-5,.5,500))}na.prototype=Object.assign(Object.create(cn.prototype),{constructor:na,isDirectionalLightShadow:!0,updateMatrices:function(t){cn.prototype.updateMatrices.call(this,t)}});function Ts(t,e){Ge.call(this,t,e),this.type="DirectionalLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.target=new ue,this.shadow=new na}Ts.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Ts,isDirectionalLight:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function As(t,e){Ge.call(this,t,e),this.type="AmbientLight"}As.prototype=Object.assign(Object.create(Ge.prototype),{constructor:As,isAmbientLight:!0});function ml(t,e,n,i){Ge.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}ml.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ml,isRectAreaLight:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){let e=Ge.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});var gl=class{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){let i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}};function jt(t,e){Ge.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new gl}jt.prototype=Object.assign(Object.create(Ge.prototype),{constructor:jt,isLightProbe:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){let e=Ge.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function vl(t){Oe.call(this,t),this.textures={}}vl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:vl,load:function(t,e,n,i){let r=this,s=new sn(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=new hg[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new se().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let s=t.uniforms[r];i.uniforms[r]={};switch(s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new se().setHex(s.value);break;case"v2":i.uniforms[r].value=new U().fromArray(s.value);break;case"v3":i.uniforms[r].value=new w().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ie().fromArray(s.value);break;case"m3":i.uniforms[r].value=new at().fromArray(s.value);break;case"m4":i.uniforms[r].value=new ye().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new U().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new U().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});var Mg={decodeText:function(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}},extractUrlBase:function(t){let e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function Hn(){De.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Hn.prototype=Object.assign(Object.create(De.prototype),{constructor:Hn,isInstancedBufferGeometry:!0,copy:function(t){return De.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t=De.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function ia(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),ge.call(this,t,e,n),this.meshPerAttribute=i||1}ia.prototype=Object.assign(Object.create(ge.prototype),{constructor:ia,isInstancedBufferAttribute:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){let t=ge.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function yl(t){Oe.call(this,t)}yl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:yl,load:function(t,e,n,i){let r=this,s=new sn(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e={},n={};function i(d,f){if(e[f]!==void 0)return e[f];let p=d.interleavedBuffers,v=p[f],y=r(d,v.buffer),g=Xr(v.type,y),m=new Et(g,v.stride);return m.uuid=v.uuid,e[f]=m,m}function r(d,f){if(n[f]!==void 0)return n[f];let p=d.arrayBuffers,v=p[f],y=new Uint32Array(v).buffer;return n[f]=y,y}let s=t.isInstancedBufferGeometry?new Hn:new De,o=t.data.index;if(o!==void 0){let d=Xr(o.type,o.array);s.setIndex(new ge(d,1))}let a=t.data.attributes;for(let d in a){let f=a[d],p;if(f.isInterleavedBufferAttribute){let v=i(t.data,f.data);p=new lt(v,f.itemSize,f.offset,f.normalized)}else{let v=Xr(f.type,f.array),y=f.isInstancedBufferAttribute?ia:ge;p=new y(v,f.itemSize,f.normalized)}f.name!==void 0&&(p.name=f.name),s.setAttribute(d,p)}let c=t.data.morphAttributes;if(c)for(let d in c){let f=c[d],p=[];for(let v=0,y=f.length;v<y;v++){let g=f[v],m;if(g.isInterleavedBufferAttribute){let E=i(t.data,g.data);m=new lt(E,g.itemSize,g.offset,g.normalized)}else{let E=Xr(g.type,g.array);m=new ge(E,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[d]=p}let l=t.data.morphTargetsRelative;l&&(s.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let d=0,f=u.length;d!==f;++d){let p=u[d];s.addGroup(p.start,p.count,p.materialIndex)}let h=t.data.boundingSphere;if(h!==void 0){let d=new w;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new Rt(d,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});function xl(t){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Oe.call(this,t),this.options={premultiplyAlpha:"none"}}xl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:xl,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Bi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){Bi.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function _l(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}Object.assign(_l.prototype,{moveTo:function(t,e){return this.currentPath=new Wt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){let m=[];for(let E=0,T=g.length;E<T;E++){let S=g[E],_=new Fi;_.curves=S.curves,m.push(_)}return m}function i(g,m){let E=m.length,T=!1;for(let S=E-1,_=0;_<E;S=_++){let A=m[S],F=m[_],X=F.x-A.x,te=F.y-A.y;if(Math.abs(te)>Number.EPSILON){if(te<0&&(A=m[_],X=-X,F=m[S],te=-te),g.y<A.y||g.y>F.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{let C=te*(g.x-A.x)-X*(g.y-A.y);if(C===0)return!0;if(C<0)continue;T=!T}}else{if(g.y!==A.y)continue;if(F.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=F.x)return!0}}return T}let r=Sn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c,l=[];if(s.length===1)return a=s[0],c=new Fi,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=t?!u:u;let h=[],d=[],f=[],p=0,v;d[p]=void 0,f[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new Fi,p:v},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:v[0]});if(!d[0])return n(s);if(d.length>1){let g=!1,m=[];for(let E=0,T=d.length;E<T;E++)h[E]=[];for(let E=0,T=d.length;E<T;E++){let S=f[E];for(let _=0;_<S.length;_++){let A=S[_],F=!0;for(let X=0;X<d.length;X++)i(A.p,d[X].p)&&(E!==X&&m.push({froms:E,tos:X,hole:_}),F?(F=!1,h[X].push(A)):g=!0);F&&h[E].push(A)}}m.length>0&&(g||(f=h))}let y;for(let g=0,m=d.length;g<m;g++){c=d[g].s,l.push(c),y=f[g];for(let E=0,T=y.length;E<T;E++)c.holes.push(y[E].h)}return l}});function bl(t){this.type="Font",this.data=t}Object.assign(bl.prototype,{isFont:!0,generateShapes:function(t,e=100){let n=[],i=Sg(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function Sg(t,e,n){let i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let u=i[l];if(u===`
`)a=0,c-=s;else{let h=Eg(u,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Eg(t,e,n,i,r){let s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}let o=new _l,a,c,l,u,h,d,f,p;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,g=v.length;y<g;){let m=v[y++];switch(m){case"m":a=v[y++]*e+n,c=v[y++]*e+i,o.moveTo(a,c);break;case"l":a=v[y++]*e+n,c=v[y++]*e+i,o.lineTo(a,c);break;case"q":l=v[y++]*e+n,u=v[y++]*e+i,h=v[y++]*e+n,d=v[y++]*e+i,o.quadraticCurveTo(h,d,l,u);break;case"b":l=v[y++]*e+n,u=v[y++]*e+i,h=v[y++]*e+n,d=v[y++]*e+i,f=v[y++]*e+n,p=v[y++]*e+i,o.bezierCurveTo(h,d,f,p,l,u);break}}}return{offsetX:s.ha*e,path:o}}function wl(t){Oe.call(this,t)}wl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:wl,load:function(t,e,n,i){let r=this,s=new sn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}let c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new bl(t)}});var Ls,Tg={getContext:function(){return Ls===void 0&&(Ls=new(window.AudioContext||window.webkitAudioContext)),Ls},setContext:function(t){Ls=t}};function ra(t){Oe.call(this,t)}ra.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ra,load:function(t,e,n,i){let r=this,s=new sn(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{let a=o.slice(0),c=Tg.getContext();c.decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function Ml(t,e,n){jt.call(this,void 0,n);let i=new se().set(t),r=new se().set(e),s=new w(i.r,i.g,i.b),o=new w(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Ml.prototype=Object.assign(Object.create(jt.prototype),{constructor:Ml,isHemisphereLightProbe:!0,copy:function(t){return jt.prototype.copy.call(this,t),this},toJSON:function(t){let e=jt.prototype.toJSON.call(this,t);return e}});function Sl(t,e){jt.call(this,void 0,e);let n=new se().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Sl.prototype=Object.assign(Object.create(jt.prototype),{constructor:Sl,isAmbientLightProbe:!0,copy:function(t){return jt.prototype.copy.call(this,t),this},toJSON:function(t){let e=jt.prototype.toJSON.call(this,t);return e}});var El=new ye,Tl=new ye;function Ag(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ye,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ye,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Ag.prototype,{update:function(t){let e=this._cache,n=e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep;if(n){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;let i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(ve.DEG2RAD*e.fov*.5)/e.zoom,a,c;Tl.elements[12]=-r,El.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Tl),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(El)}});var Al=class extends ue{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.source.detune===void 0?void 0:(this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this)}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Ll=class{constructor(e,n=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}};function Cl(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Cl.prototype,{accumulate:function(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;let o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){mt.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){let s=this._workIndex*r;mt.multiplyQuaternionsFlat(t,s,t,e,t,n),mt.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){let s=1-i;for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){let o=e+s;t[o]=t[o]+t[n+s]*i}}});var sa="\\[\\]\\.:\\/",Lg=new RegExp("["+sa+"]","g"),oa="[^"+sa+"]",Cg="[^"+sa.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",oa),Pg=/(WCOD+)?/.source.replace("WCOD",Cg),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oa),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oa),Ng=new RegExp("^"+Rg+Pg+Ig+Dg+"$"),Og=["material","materials","bones"];function Rl(t,e,n){let i=n||ft.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Rl.prototype,{getValue:function(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function ft(t,e,n){this.path=e,this.parsedPath=n||ft.parseTrackName(e),this.node=ft.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(ft,{Composite:Rl,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new ft.Composite(t,e,n):new ft(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Lg,"")},parseTrackName:function(t){let e=Ng.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(ft.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=ft.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(ft.prototype,{_getValue_unbound:ft.prototype.getValue,_setValue_unbound:ft.prototype.setValue});function Bg(){this.uuid=ve.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(Bg.prototype,{isAnimationObjectGroup:!0,add:function(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length,o,a=t.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){let h=arguments[l],d=h.uuid,f=e[d];if(f===void 0){f=a++,e[d]=f,t.push(h);for(let p=0,v=s;p!==v;++p)r[p].push(new ft(h,n[p],i[p]))}else if(f<c){o=t[f];let p=--c,v=t[p];e[v.uuid]=f,t[f]=v,e[d]=p,t[p]=h;for(let y=0,g=s;y!==g;++y){let m=r[y],E=m[p],T=m[f];m[f]=E,T===void 0&&(T=new ft(h,n[y],i[y])),m[p]=T}}else t[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){let a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){let u=r++,h=t[u];e[h.uuid]=l,t[l]=h,e[c]=u,t[u]=a;for(let d=0,f=i;d!==f;++d){let p=n[d],v=p[u],y=p[l];p[l]=v,p[u]=y}}}this.nCachedObjects_=r},uncache:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0)if(delete e[l],u<r){let h=--r,d=t[h],f=--s,p=t[f];e[d.uuid]=u,t[u]=d,e[p.uuid]=h,t[h]=p,t.pop();for(let v=0,y=i;v!==y;++v){let g=n[v],m=g[h],E=g[f];g[u]=m,g[h]=E,g.pop()}}else{let h=--s,d=t[h];h>0&&(e[d.uuid]=u),t[u]=d,t.pop();for(let f=0,p=i;f!==p;++f){let v=n[f];v[u]=v[h],v.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(u);for(let h=l,d=a.length;h!==d;++h){let f=a[h];u[h]=new ft(f,t,e)}return u},unsubscribe_:function(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});var Pl=class{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;let s=n.tracks,o=s.length,a=new Array(o),c={endingStart:Jn,endingEnd:Jn};for(let l=0;l!==o;++l){let u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);let o=this._updateTime(n),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case qa:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Xs:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(e){let n=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===xu;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===vu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){let a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){let r=this._interpolantSettings;i?(r.endingStart=$n,r.endingEnd=$n):(e?r.endingStart=this.zeroSlopeAtStart?$n:Jn:r.endingStart=Dr,n?r.endingEnd=this.zeroSlopeAtEnd?$n:Jn:r.endingEnd=Dr)}_scheduleFading(e,n,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}};function Il(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Il.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Il,_bindAction:function(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){let h=i[u],d=h.name,f=l[d];if(f!==void 0)s[u]=f;else{if(f=s[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,d));continue}let p=e&&e._propertyBindings[u].binding.parsedPath;f=new Cl(ft.create(n,d,p),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,d),s[u]=f}o[u].resultBuffer=f.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new bs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Ot.findByName(i,t):t,o=s!==null?s.uuid:t,a=this._actionsByClip[o],c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Xs),a!==void 0){let u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;let l=new Pl(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ot.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c){let l=e[c];l._update(i,t,r,s)}let o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){let c=s[o];this._deactivateAction(c);let l=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,e[l]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){let e=t.uuid,n=this._actionsByClip;for(let s in n){let o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let s in r){let o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});var Cs=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Cs(this.value.clone===void 0?this.value:this.value.clone())}};function kn(t,e,n){Et.call(this,t,e),this.meshPerAttribute=n||1}kn.prototype=Object.assign(Object.create(Et.prototype),{constructor:kn,isInstancedInterleavedBuffer:!0,copy:function(t){return Et.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){let e=Et.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){let e=Et.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Dl(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Dl.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Dl.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function Nl(t,e,n,i){this.ray=new si(t,e),this.near=n||0,this.far=i||Infinity,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ol(t,e){return t.distance-e.distance}function aa(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)aa(r[s],e,n,!0)}}Object.assign(Nl.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e,n){let i=n||[];return aa(t,this,i,e),i.sort(Ol),i},intersectObjects:function(t,e,n){let i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)aa(t[r],this,i,e);return i.sort(Ol),i}});var Bl=new U,Fl=class{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new U(Infinity,Infinity),this.max=n!==void 0?n:new U(-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Bl.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new U),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new U),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new U),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new U),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){let n=Bl.copy(e).clamp(this.min,this.max);return n.sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zl=new w,Rs=new w,Ps=class{constructor(e,n){this.start=e!==void 0?e:new w,this.end=n!==void 0?n:new w}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new w),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new w),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new w),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){zl.subVectors(e,this.start),Rs.subVectors(this.end,this.start);let i=Rs.dot(Rs),r=Rs.dot(zl),s=r/i;return n&&(s=ve.clamp(s,0,1)),s}closestPointToPoint(e,n,i){let r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new w),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}};function Is(t){ue.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Is.prototype=Object.create(ue.prototype);Is.prototype.constructor=Is;Is.prototype.isImmediateRenderObject=!0;var Tn=new w,Ds=new ye,ca=new ye,Ul=class extends Li{constructor(e){let n=Gl(e),i=new De,r=[],s=[],o=new se(0,0,1),a=new se(0,1,0);for(let l=0;l<n.length;l++){let u=n[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Pe(r,3)),i.setAttribute("color",new Pe(s,3));let c=new ht({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let n=this.bones,i=this.geometry,r=i.getAttribute("position");ca.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){let a=n[s];a.parent&&a.parent.isBone&&(Ds.multiplyMatrices(ca,a.matrixWorld),Tn.setFromMatrixPosition(Ds),r.setXYZ(o,Tn.x,Tn.y,Tn.z),Ds.multiplyMatrices(ca,a.parent.matrixWorld),Tn.setFromMatrixPosition(Ds),r.setXYZ(o+1,Tn.x,Tn.y,Tn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Gl(t){let e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Gl(t.children[n]));return e}var Hl=class extends Li{constructor(e=10,n=10,i=4473924,r=8947848){i=new se(i),r=new se(r);let s=n/2,o=e/n,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=n;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);let v=d===s?i:r;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}let u=new De;u.setAttribute("position",new Pe(c,3)),u.setAttribute("color",new Pe(l,3));let h=new ht({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}},Fg=new Float32Array(1),Yg=new Int32Array(Fg.buffer),zg=4,kl=8,Zg=Math.pow(2,kl),Ug=[.125,.215,.35,.446,.526,.582],Jg=kl-zg+1+Ug.length,$g={[Qn]:0,[Ys]:1,[Xa]:2,[Ya]:3,[Za]:4,[Ja]:5,[Nr]:6},Vn=(1+Math.sqrt(5))/2,zi=1/Vn,Qg=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Vn,zi),new w(0,Vn,-zi),new w(zi,0,Vn),new w(-zi,0,Vn),new w(Vn,zi,0),new w(-Vn,zi,0)];le.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(le.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(En.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let e=new Nt;for(let n=0,i=t.length;n<i;n++){let r=t[n];e.vertices.push(new w(r.x,r.y,r.z||0))}return e}});Object.assign(Wt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function Gg(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ut.call(this,t),this.type="catmullrom",this.closed=!0}Gg.prototype=Object.create(ut.prototype);function Hg(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ut.call(this,t),this.type="catmullrom"}Hg.prototype=Object.create(ut.prototype);function Vl(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ut.call(this,t),this.type="catmullrom"}Vl.prototype=Object.create(ut.prototype);Object.assign(Vl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Hl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Ul.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Oe.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Mg.extractUrlBase(t)}});Oe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(Fl.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Mt.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Rt.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});sr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};Ps.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(ve,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),ve.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),ve.ceilPowerOfTwo(t)}});Object.assign(at.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Object.assign(ye.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Ft.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Object.assign(mt.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(si.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(Ke.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(Ke,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Ke.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Ke.getNormal(t,e,n,i)}});Object.assign(Fi.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ol(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new cl(this,t)}});Object.assign(U.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(w.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ie.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Nt.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.assign(ue.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ue.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(We.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(We.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),_u},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Co.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Io.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Ro.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(le.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});Ye.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Ge.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(ge.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===$i},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage($i)}}});Object.assign(ge.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?$i:Or),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(De.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new ge(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(De.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Hn.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(Nl.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(Et.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===$i},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(Et.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?$i:Or),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(zo.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(ns.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Cs.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(pe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Ma}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(Gn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Un.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}});Object.defineProperties(et.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(Mi.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Mi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?Ys:Qn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Oc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ct.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties(Al.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this,n=new ra;return n.load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Ll.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};yi.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};yi.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};ti.crossOrigin=void 0;ti.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Yo;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};ti.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new Xo;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};ti.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ti.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));var gt=class{};gt.ANIMATION_DURATION=400,gt.DAMPING_DURATION=2e3,gt.MOUSE_BUTTON={LEFT:0,MIDDLE:1,RIGHT:2};var tt=class{static clamp(e,n,i){return e<=n?n:e>=i?i:e}static getRandomBetween(e,n){return Math.random()*(n-e)+e}},wt;(function(t){t[t.EASE_OUT=0]="EASE_OUT",t[t.EASE_IN_OUT=1]="EASE_IN_OUT"})(wt||(wt={}));var qt=class{constructor(e,n,i=0,r=gt.ANIMATION_DURATION,s=!0){this._timeStampAtSetEnd=0;this._min=-Infinity;this._max=Infinity;this._hasChanged=!1;this._prevDeltaValue=0;this._prevTimeStamp=1;this._prevDeltaTime=1;this._easing=0;this._timeoutId=-1;this._originalStart=e,this._start=e,this._originalEnd=n,this._end=n,this._value=this._start,this._originalAnimationDuration=this._animationDuration=r,this._easing=i,this._triggerRender=s}static removeFromActiveOnes(e){qt._activeInstances=qt._activeInstances.filter(n=>n!==e)}static addToActiveOnes(e){qt._activeInstances.includes(e)||qt._activeInstances.push(e)}static updateActiveOnes(e){let n=!1;for(let i of qt._activeInstances)n=n||i._triggerRender,i.update(e);return n}smoothStep(e){if(e<this._animationDuration){let n=e/this._animationDuration;return tt.clamp(n**2*(3-2*n)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=tt.clamp(this._end,this._min,this._max),this._end}exponentialOut(e){if(e<this._animationDuration){let n=e/this._animationDuration;return tt.clamp((1-2**(-10*n))*(1024/1023)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=tt.clamp(this._end,this._min,this._max),this._end}getNextValue(e){return this._easing===1?this.smoothStep(e):this.exponentialOut(e)}increaseEndBy(e,n=!1){this.setEnd(this._end+e,n)}decreaseEndBy(e,n=!1){this.setEnd(this._end-e,n)}setEnd(e,n=!1,i=this._originalAnimationDuration){this._animationDuration=i;let r=n?tt.clamp(e,this._min,this._max):e;qt.addToActiveOnes(this),this._start=this._value,this._end=r,this._timeStampAtSetEnd=Wn.timeStamp,n||(clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this._end=tt.clamp(this._end,this._min,this._max)},this._animationDuration))}reset(e,n,i=this._originalAnimationDuration){this._animationDuration=i,qt.addToActiveOnes(this),this._start=e!=null?e:this._originalStart,this._end=n!=null?n:this._originalEnd,this._timeStampAtSetEnd=Wn.timeStamp}update(e){this._prevDeltaTime=e-this._prevTimeStamp;let n=e-this._timeStampAtSetEnd,i=this._value;this._value=this.getNextValue(n),this._prevDeltaValue=this._value-i,this._prevTimeStamp=e,this._value===i?(this._start=this._end,this._hasChanged=!1,qt.removeFromActiveOnes(this)):this._hasChanged=!0}get animationDuration(){return this._animationDuration}get originalAnimationDuration(){return this._originalAnimationDuration}get start(){return this._start}get value(){return this._value}get end(){return this._end}get hasChangedSinceLastTick(){return this._hasChanged}get prevDeltaValue(){return this._prevDeltaValue}get prevDeltaTime(){return this._prevDeltaTime}get derivateAt0(){return this._easing===0?6.938247437862991:0}},Ui=qt;Ui._activeInstances=[];var Gi=class extends Ui{constructor(e,n,i,r,s=wt.EASE_OUT,o=gt.ANIMATION_DURATION,a=!0){super(e,n,s,o,a);this._originalMin=this._min=i,this._originalMax=this._max=r}get min(){return this._min}get max(){return this._max}get originalMin(){return this._originalMin}get originalMax(){return this._originalMax}setMin(e){this._min=e;let n=tt.clamp(this._start,this._min,this._max),i=tt.clamp(this._end,this._min,this._max);super.reset(n,i)}setMax(e){this._max=e;let n=tt.clamp(this._start,this._min,this._max),i=tt.clamp(this._end,this._min,this._max);super.reset(n,i)}reset(e,n,i,r,s=!1){this._min=i!=null?i:this._min,this._max=r!=null?r:this._max;let o=e!=null?e:this._originalStart,a=s?tt.clamp(o,this._min,this._max):o,c=n!=null?n:this._originalEnd,l=s?tt.clamp(c,this._min,this._max):c;super.reset(a,l)}isPlaying(){return this.value!==this.end}},ln=class{static lengthOfSquared(e){let n=0;for(let i of e)n+=i*i;return n}static lengthOf(e){return Math.sqrt(ln.lengthOfSquared(e))}static normalize(e){let n=ln.lengthOf(e);for(let i=0;i<e.length;++i)e[i]/=n;return e}static getWorldPositionFromUV(e,n){let i=[Math.cos(e)*Math.sin(n),Math.cos(n),Math.sin(e)*Math.sin(n)];return ln.normalize(i)}},la=class{constructor(e,n){this._isPointerDown=!1;this._mouseMoved=!0;this._triggerClickThreshold={deltaCursor:3,deltaTime:1e3};this._pointer={downTimeStamp:null,startX:null,startY:null,prevX:null,prevY:null,prevDeltaX:0,prevDeltaY:0,prevTimeStamp:0,prevDeltaTime:1,triggerClickOnPointerUp:!1};this._u=new Gi(0,0,-Infinity,Infinity,wt.EASE_OUT,gt.DAMPING_DURATION);this._v=new Gi(Math.PI/2,Math.PI/2,Math.PI/2-.5,Math.PI/2+.5,wt.EASE_OUT,gt.DAMPING_DURATION);this._pinch={startValue:{touchDistance:null,distanceValue:null},currentValue:{touchDistance:null,distanceValue:null}};this._cameraNormalizedPosition=ln.normalize([-1,.3,0]);this._timeoutID=null;this._dampOnPointerUp=!1;this._enabled=!1;this._autoRotate=!0;this.SENSITIVITY=.5;this._prevSpeed=[];this.onWheel=e=>{e.preventDefault();let n=1.1,i=this._sceneManager.distance,r=Math.sign(-e.deltaY)>0?i.end/n:i.end*n;i.setEnd(r,!0)};this.onMouseDown=e=>{e.button===gt.MOUSE_BUTTON.LEFT&&this.onPointerDown(e.clientX,e.clientY)};this.onTouchStart=e=>{e.preventDefault(),e.touches.length===1?this.onPointerDown(e.touches[0].clientX,e.touches[0].clientY):e.touches.length===2?(this._isPointerDown=!1,this._pinch.startValue.touchDistance=this.getTouchDistance(e),this._pinch.startValue.distanceValue=this._sceneManager.distance.value):this.onPointerUp(e)};this.onMouseMove=e=>{this.onPointerMove(e.clientX,e.clientY)};this.onTouchMove=e=>{e.touches.length===1?this.onPointerMove(e.touches[0].clientX,e.touches[0].clientY):e.touches.length===2&&this._pinch.startValue.touchDistance?(this._pinch.currentValue.touchDistance=this.getTouchDistance(e),this._pinch.currentValue.distanceValue=this._pinch.startValue.touchDistance/this._pinch.currentValue.touchDistance*this._pinch.startValue.distanceValue,this._sceneManager.distance.setEnd(this._pinch.currentValue.distanceValue)):this.onPointerUp(e)};this.onPointerUp=e=>{if(this._isPointerDown){let n=performance.now();this._domElement.classList.remove("rotating");let i=this._prevSpeed,r=ln.lengthOfSquared(i);if(this._dampOnPointerUp&&!isNaN(r)&&0<r&&r<Infinity){this._dampOnPointerUp=!1;let s=this._u.derivateAt0,o=this._u.originalAnimationDuration,a=[o*i[0]/s,o*i[1]/s];this._u.setEnd(this._u.value+a[0]),this._v.setEnd(this._v.value+a[1])}this._triggerClickThreshold.deltaTime<n-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.triggerClickOnPointerUp}this._isPointerDown=!1,this._pointer.triggerClickOnPointerUp=!1,this._pointer.downTimeStamp=null,this._pointer.startX=null,this._pointer.startY=null,this._pointer.prevX=null,this._pointer.prevY=null,this._pointer.prevTimeStamp=0,this._pointer.prevDeltaX=0,this._pointer.prevDeltaY=0,this._pointer.prevDeltaTime=1,this._pinch.startValue.touchDistance=this._pinch.startValue.distanceValue=this._pinch.currentValue.touchDistance=this._pinch.currentValue.distanceValue=null};this.cancelDamping=()=>{this._dampOnPointerUp=!1};this._domElement=e,this._sceneManager=n}getTouchDistance(e){let n={x:e.touches[0].clientX,y:e.touches[0].clientY},i={x:e.touches[1].clientX,y:e.touches[1].clientY},r={x:i.x-n.x,y:i.y-n.y},s=Math.sqrt(r.x*r.x+r.y*r.y);return s}onPointerDown(e,n){this.stopRotating(),this._isPointerDown=!0,this._mouseMoved=!1,this._pointer.startX=this._pointer.prevX=e,this._pointer.startY=this._pointer.prevY=n,this._pointer.downTimeStamp=performance.now(),this._pointer.prevTimeStamp=this._pointer.downTimeStamp,this._pointer.triggerClickOnPointerUp=!0,this._domElement.classList.add("rotating"),this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}onPointerMove(e,n){if(this._isPointerDown&&(this._mouseMoved=e!==this._pointer.prevX||n!==this._pointer.prevY,this._mouseMoved)){if(this._domElement.classList.add("rotating"),this._pointer.prevX!=null&&this._pointer.prevY!=null){let r=this._sceneManager.distance.value,s=this._pointer.prevX-e,o=n-this._pointer.prevY,a=s*this.SENSITIVITY/window.innerHeight*r,c=o*this.SENSITIVITY/window.innerHeight*r,l=this._pointer.startX-e,u=this._pointer.startY-n;(this._triggerClickThreshold.deltaCursor<Math.abs(l)||this._triggerClickThreshold.deltaCursor<Math.abs(u))&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaX=this._pointer.prevX-e,this._pointer.prevDeltaY=n-this._pointer.prevY,this._u.reset(this._u.end-a,this._u.end-a),this._v.reset(this._v.end-c,this._v.end-c)}this._pointer.prevX=e,this._pointer.prevY=n;let i=performance.now();this._triggerClickThreshold.deltaTime<i-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaTime=i-this._pointer.prevTimeStamp,this._pointer.prevTimeStamp=i,this._dampOnPointerUp=!0,clearTimeout(this._timeoutID),this._timeoutID=setTimeout(this.cancelDamping,100)}}setUVFromSphereSufracePoint(e){let n=Math.PI-Math.atan2(e[2],e[0]);this._u.reset(n,n);let i=Math.PI/2-Math.asin(e[1]);this._v.reset(i,i)}activate(){this._enabled||(this._enabled=!0,this.setUVFromSphereSufracePoint(this._cameraNormalizedPosition),this._domElement.addEventListener("mousedown",this.onMouseDown),this._domElement.addEventListener("touchstart",this.onTouchStart),this._domElement.addEventListener("wheel",this.onWheel),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("mouseup",this.onPointerUp),window.addEventListener("touchend",this.onPointerUp),window.addEventListener("touchcancel",this.onPointerUp))}deactivate(){this._enabled&&(this._enabled=!1,this._isPointerDown=!1,this._domElement.classList.remove("rotating"),this._domElement.removeEventListener("mousedown",this.onMouseDown),this._domElement.removeEventListener("touchstart",this.onTouchStart),this._domElement.removeEventListener("wheel",this.onWheel),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchend",this.onPointerUp),window.removeEventListener("touchcancel",this.onPointerUp))}stopRotating(){this._autoRotate=!1,this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}update(){if(this._enabled)return this._autoRotate&&this._u.reset(this._u.end+5e-4,this._u.end+5e-4),(this._u.hasChangedSinceLastTick||this._v.hasChangedSinceLastTick)&&(this._prevSpeed[0]=this._u.prevDeltaValue/this._u.prevDeltaTime,this._prevSpeed[1]=this._v.prevDeltaValue/this._v.prevDeltaTime,this._cameraNormalizedPosition=ln.getWorldPositionFromUV(this._u.value,this._v.value),this._sceneManager.needsRender=!0),this._cameraNormalizedPosition}},ha=class{constructor(e){e=e||{};let n=e.geometry||new ts(2,2),i=new zn({vertexShader:`#define GLSLIFY 1
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
  gl_Position = vec4(position, 1.0);
  vUv = vec2(position.x, position.y) * 0.5 + 0.5;
}`,fragmentShader:`precision mediump float;
#define GLSLIFY 1
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289_1604150559(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1604150559(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1604150559(vec4 x)
{
  return mod289_1604150559(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1604150559(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade_1604150559(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise_1604150559(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289_1604150559(Pi0);
  Pi1 = mod289_1604150559(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute_1604150559(permute_1604150559(ix) + iy);
  vec4 ixy0 = permute_1604150559(ixy + iz0);
  vec4 ixy1 = permute_1604150559(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt_1604150559(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt_1604150559(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade_1604150559(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289_1117569599(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1117569599(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1117569599(vec4 x) {
     return mod289_1117569599(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1117569599(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise_1117569599(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D_1117569599 = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g_1117569599 = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g_1117569599;
  vec3 i1 = min( g_1117569599.xyz, l.zxy );
  vec3 i2 = max( g_1117569599.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D_1117569599.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289_1117569599(i);
  vec4 p = permute_1117569599( permute_1117569599( permute_1117569599(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D_1117569599.wyz - D_1117569599.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1_1117569599 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0_1117569599 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1_1117569599.xy,h.z);
  vec3 p3 = vec3(a1_1117569599.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt_1117569599(vec4(dot(p0_1117569599,p0_1117569599), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0_1117569599 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0_1117569599,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame, float multiplier) {
    vec2 mult = texCoord * resolution;
    float offset = snoise_1117569599(vec3(mult / multiplier, frame));
    float n1 = pnoise_1604150559(vec3(mult, offset), vec3(1.0/texCoord * resolution, 1.0));
    return n1 / 2.0 + 0.5;
}

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame) {
    return grain_2281831123(texCoord, resolution, frame, 2.5);
}

float grain_2281831123(vec2 texCoord, vec2 resolution) {
    return grain_2281831123(texCoord, resolution, 0.0);
}

vec3 blendSoftLight_1540259130(vec3 base, vec3 blend) {
    return mix(
        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), 
        2.0 * base * blend + base * base * (1.0 - 2.0 * blend), 
        step(base, vec3(0.5))
    );
}

// Using conditionals
// vec3 blendSoftLight(vec3 base, vec3 blend) {
//     return vec3(
//         ((blend.r < 0.5) ? (2.0 * base.r * blend.r + base.r * base.r * (1.0 - 2.0 * blend.r)) : (sqrt(base.r) * (2.0 * blend.r - 1.0) + 2.0 * base.r * (1.0 - blend.r))),
//         ((blend.g < 0.5) ? (2.0 * base.g * blend.g + base.g * base.g * (1.0 - 2.0 * blend.g)) : (sqrt(base.g) * (2.0 * blend.g - 1.0) + 2.0 * base.g * (1.0 - blend.g))),
//         ((blend.b < 0.5) ? (2.0 * base.b * blend.b + base.b * base.b * (1.0 - 2.0 * blend.b)) : (sqrt(base.b) * (2.0 * blend.b - 1.0) + 2.0 * base.b * (1.0 - blend.b)))
//     );
// }

uniform vec3 color1;
uniform vec3 color2;
uniform float aspect;
uniform vec2 offset;
uniform vec2 scale;
uniform float noiseAlpha;
uniform bool aspectCorrection;
uniform float grainScale;
uniform float grainTime;
uniform vec2 smooth;

varying vec2 vUv;

void main() {
  vec2 q = vec2(vUv - 0.5);
  if (aspectCorrection) {
    q.x *= aspect;
  }
  q /= scale;
  q -= offset;
  float dst = length(q);
  dst = smoothstep(smooth.x, smooth.y, dst);
  vec3 color = mix(color1, color2, dst);
  
  if (noiseAlpha > 0.0 && grainScale > 0.0) {
    float gSize = 1.0 / grainScale;
    float g = grain_2281831123(vUv, vec2(gSize * aspect, gSize), grainTime);
    vec3 noiseColor = blendSoftLight_1540259130(color, vec3(g));
    gl_FragColor.rgb = mix(color, noiseColor, noiseAlpha);
  } else {
    gl_FragColor.rgb = color;
  }
  gl_FragColor.a = 1.0;
}`,side:qn,uniforms:{aspectCorrection:{value:!1},aspect:{value:1},grainScale:{value:.005},grainTime:{value:0},noiseAlpha:{value:.25},offset:{value:new U(0,0)},scale:{value:new U(1,1)},smooth:{value:new U(0,1)},color1:{value:new se("#fff")},color2:{value:new se("#283844")}},depthTest:!1}),r=new We(n,i);r.frustumCulled=!1,r.style=s,e&&r.style(e),this._mesh=r;function s(a){if(a=a||{},Array.isArray(a.colors)){let h=a.colors.map(function(d){return typeof d=="string"||typeof d=="number"?new se(d):d});i.uniforms.color1.value.copy(h[0]),i.uniforms.color2.value.copy(h[1])}if(typeof a.aspect=="number"&&(i.uniforms.aspect.value=a.aspect),typeof a.grainScale=="number"&&(i.uniforms.grainScale.value=a.grainScale),typeof a.grainTime=="number"&&(i.uniforms.grainTime.value=a.grainTime),a.smooth){var c=o(a.smooth,U);i.uniforms.smooth.value.copy(c)}if(a.offset){var l=o(a.offset,U);i.uniforms.offset.value.copy(l)}if(typeof a.noiseAlpha=="number"&&(i.uniforms.noiseAlpha.value=a.noiseAlpha),typeof a.scale!="undefined"){var u=a.scale;typeof u=="number"&&(u=[u,u]),u=o(u,U),i.uniforms.scale.value.copy(u)}typeof a.aspectCorrection!="undefined"&&(i.uniforms.aspectCorrection.value=Boolean(a.aspectCorrection))}let o=(a,c)=>Array.isArray(a)?new c().fromArray(a):a}get mesh(){return this._mesh}},ua=class{constructor(e,n,i,r){this._width=.5;this._container=e,this._data=n,this._offsetX=-n.length/2,this._offsetY=i,this._offsetZ=r,this.init()}addLine(e,n){let i=[];for(let c=0;c<e.length;++c)i.push(c+this._offsetX),i.push(e[c]+this._offsetY),i.push(-this._width/2+this._offsetZ);for(let c=e.length-1;c>=0;--c)i.push(c+this._offsetX),i.push(e[c]+this._offsetY),i.push(this._width/2+this._offsetZ);let r=new ge(new Float32Array(i),3),s=new De;s.setAttribute("position",r);let o=new ht({color:n}),a=new wn(s,o);this._container.add(a)}addLineSegments(e,n){let i=[];for(let c=0;c<e.length-1;++c)i.push(c+this._offsetX),i.push(e[c]+this._offsetY),i.push(-this._width/2+this._offsetZ),i.push(c+this._offsetX),i.push(e[c]+this._offsetY),i.push(this._width/2+this._offsetZ);let r=new ge(new Float32Array(i),3),s=new De;s.setAttribute("position",r);let o=new ht({color:n}),a=new Li(s,o);this._container.add(a)}addMesh(e,n){let i=[],r=[];for(let l=0;l<e.length;++l)if(i.push(l+this._offsetX),i.push(e[l]+this._offsetY),i.push(-this._width/2+this._offsetZ),i.push(l+this._offsetX),i.push(e[l]+this._offsetY),i.push(this._width/2+this._offsetZ),l<e.length-1){let u=2*l;r.push(u+0,u+1,u+2,u+1,u+3,u+2)}let s=new ge(new Float32Array(i),3),o=new De;o.setAttribute("position",s),o.setIndex(r);let a=new nn({color:n,side:Xn}),c=new We(o,a);this._container.add(c)}init(){let e=new se(Math.random()*16777215),n={h:0,s:0,l:0};e.getHSL(n);let i=e.clone().setHSL(n.h,n.s,n.l*.5);this.addLine(this._data,i),this.addLineSegments(this._data,i),this.addMesh(this._data,e)}},fa=class{constructor(e){this._min=0;this._max=4;this._sceneManager=e,this.init()}createRandomData(e){let n=[];for(let i=0;i<e;++i)n.push(tt.getRandomBetween(this._min,this._max));return n}init(){let e=5;for(let n=0;n<e;++n){let i=this.createRandomData(10),r=new ua(this._sceneManager.scene,i,-this._max/2,-(e/2)+n)}}},hn=function(){Hn.call(this),this.type="LineSegmentsGeometry";var t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Pe(t,3)),this.setAttribute("uv",new Pe(e,2))};hn.prototype=Object.assign(Object.create(Hn.prototype),{constructor:hn,isLineSegmentsGeometry:!0,applyMatrix4:function(t){var e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},setPositions:function(t){var e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));var n=new kn(e,6,1);return this.setAttribute("instanceStart",new lt(n,3,0)),this.setAttribute("instanceEnd",new lt(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this},setColors:function(t){var e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));var n=new kn(e,6,1);return this.setAttribute("instanceColorStart",new lt(n,3,0)),this.setAttribute("instanceColorEnd",new lt(n,3,3)),this},fromWireframeGeometry:function(t){return this.setPositions(t.attributes.position.array),this},fromEdgesGeometry:function(t){return this.setPositions(t.attributes.position.array),this},fromMesh:function(t){return this.fromWireframeGeometry(new Go(t.geometry)),this},fromLineSegments:function(t){var e=t.geometry;return e.isGeometry?this.setPositions(e.vertices):e.isBufferGeometry&&this.setPositions(e.attributes.position.array),this},computeBoundingBox:function(){var t=new Mt;return function(){this.boundingBox===null&&(this.boundingBox=new Mt);var n=this.attributes.instanceStart,i=this.attributes.instanceEnd;n!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(n),t.setFromBufferAttribute(i),this.boundingBox.union(t))}}(),computeBoundingSphere:function(){var t=new w;return function(){this.boundingSphere===null&&(this.boundingSphere=new Rt),this.boundingBox===null&&this.computeBoundingBox();var n=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(n!==void 0&&i!==void 0){var r=this.boundingSphere.center;this.boundingBox.getCenter(r);for(var s=0,o=0,a=n.count;o<a;o++)t.fromBufferAttribute(n,o),s=Math.max(s,r.distanceToSquared(t)),t.fromBufferAttribute(i,o),s=Math.max(s,r.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}}(),toJSON:function(){},applyMatrix:function(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}});Y.line={linewidth:{value:1},resolution:{value:new U(1,1)},dashScale:{value:1},dashSize:{value:1},dashOffset:{value:0},gapSize:{value:1},opacity:{value:1}};ct.line={uniforms:Kr.merge([Y.common,Y.fog,Y.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float dashOffset;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Xt=function(t){et.call(this,{type:"LineMaterial",uniforms:Kr.clone(ct.line.uniforms),vertexShader:ct.line.vertexShader,fragmentShader:ct.line.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}}}),this.setValues(t)};Xt.prototype=Object.create(et.prototype);Xt.prototype.constructor=Xt;Xt.prototype.isLineMaterial=!0;var Sr=function(t,e){t===void 0&&(t=new hn),e===void 0&&(e=new Xt({color:Math.random()*16777215})),We.call(this,t,e),this.type="LineSegments2"};Sr.prototype=Object.assign(Object.create(We.prototype),{constructor:Sr,isLineSegments2:!0,computeLineDistances:function(){var t=new w,e=new w;return function(){for(var i=this.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=new Float32Array(2*r.data.count),a=0,c=0,l=r.data.count;a<l;a++,c+=2)t.fromBufferAttribute(r,a),e.fromBufferAttribute(s,a),o[c]=c===0?0:o[c-1],o[c+1]=o[c]+t.distanceTo(e);var u=new kn(o,2,1);return i.setAttribute("instanceDistanceStart",new lt(u,1,0)),i.setAttribute("instanceDistanceEnd",new lt(u,1,1)),this}}(),raycast:function(){var t=new Ie,e=new Ie,n=new Ie,i=new w,r=new ye,s=new Ps,o=new w;return function(c,l){c.camera===null&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');var u=c.params.Line2!==void 0&&c.params.Line2.threshold||0,h=c.ray,d=c.camera,f=d.projectionMatrix,p=this.geometry,v=this.material,y=v.resolution,g=v.linewidth+u,m=p.attributes.instanceStart,E=p.attributes.instanceEnd;h.at(1,n),n.w=1,n.applyMatrix4(d.matrixWorldInverse),n.applyMatrix4(f),n.multiplyScalar(1/n.w),n.x*=y.x/2,n.y*=y.y/2,n.z=0,i.copy(n);var T=this.matrixWorld;r.multiplyMatrices(d.matrixWorldInverse,T);for(var S=0,_=m.count;S<_;S++){t.fromBufferAttribute(m,S),e.fromBufferAttribute(E,S),t.w=1,e.w=1,t.applyMatrix4(r),e.applyMatrix4(r),t.applyMatrix4(f),e.applyMatrix4(f),t.multiplyScalar(1/t.w),e.multiplyScalar(1/e.w);var A=t.z<-1&&e.z<-1,F=t.z>1&&e.z>1;if(A||F)continue;t.x*=y.x/2,t.y*=y.y/2,e.x*=y.x/2,e.y*=y.y/2,s.start.copy(t),s.start.z=0,s.end.copy(e),s.end.z=0;var X=s.closestPointToPointParameter(i,!0);s.at(X,o);var te=ve.lerp(t.z,e.z,X),C=te>=-1&&te<=1,B=i.distanceTo(o)<g*.5;if(C&&B){s.start.fromBufferAttribute(m,S),s.end.fromBufferAttribute(E,S),s.start.applyMatrix4(T),s.end.applyMatrix4(T);var D=new w,O=new w;h.distanceSqToSegment(s.start,s.end,O,D),l.push({point:O,pointOnLine:D,distance:h.origin.distanceTo(O),object:this,face:null,faceIndex:S,uv:null,uv2:null})}}}}()});var Ns=function(){hn.call(this),this.type="LineGeometry"};Ns.prototype=Object.assign(Object.create(hn.prototype),{constructor:Ns,isLineGeometry:!0,setPositions:function(t){for(var e=t.length-3,n=new Float32Array(2*e),i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return hn.prototype.setPositions.call(this,n),this},setColors:function(t){for(var e=t.length-3,n=new Float32Array(2*e),i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return hn.prototype.setColors.call(this,n),this},fromLine:function(t){var e=t.geometry;return e.isGeometry?this.setPositions(e.vertices):e.isBufferGeometry&&this.setPositions(e.attributes.position.array),this},copy:function(){return this}});var Os=function(t,e){t===void 0&&(t=new Ns),e===void 0&&(e=new Xt({color:Math.random()*16777215})),Sr.call(this,t,e),this.type="Line2"};Os.prototype=Object.assign(Object.create(Sr.prototype),{constructor:Os,isLine2:!0});var Er=class{constructor(){this._resolution=new U;this._distance=new Gi(10,10,1,100,wt.EASE_OUT,gt.ANIMATION_DURATION);this._normalizedCameraPosition=[0,0,1];this.needsRender=!0;this.onWindowResize=()=>{this._canvas.width=0,this._canvas.height=0;let e=window.innerWidth,n=window.innerHeight;this._resolution.set(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio),this._scene.traverse(i=>{i instanceof Os&&(i.material instanceof Xt&&i.material.resolution.copy(this._resolution))}),this._renderer.setSize(e,n),this._camera.aspect=e/n,this._camera.updateProjectionMatrix(),this.needsRender=!0};this.onContextLost=e=>{e.preventDefault(),alert("Unfortunately WebGL has crashed. Please reload the page to continue!")};this.update=e=>{Er._timeStamp=performance.now(),this.needsRender=Ui.updateActiveOnes(Er._timeStamp)||this.needsRender,this.needsRender&&(this._normalizedCameraPosition=this._controls.update(),this._camera.position.set(this._normalizedCameraPosition[0]*this._distance.value,this._normalizedCameraPosition[1]*this._distance.value,this._normalizedCameraPosition[2]*this._distance.value),this._camera.lookAt(0,0,0),this._renderer.render(this._scene,this._camera),this.needsRender=!1)};this.animate=e=>{this.update(e),this._renderer.setAnimationLoop(this.update)};this._canvas=document.getElementById("myCanvas"),this._scene=new ns,this._camera=new Ye(60,window.innerWidth/window.innerHeight,.05,70),this.initBackground(),this.initLights(),this.initControls(),this.initRenderer(),this.initMeshes(),this.onWindowResize(),this.animate(0)}initBackground(){let e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;this._scene.add(new ha({aspect:this._camera.aspect,grainScale:e?0:.001,colors:["#ffffff","#353535"]}).mesh)}initLights(){let e=new As(16777215,.1),n=new Ts(16777215,.1);n.position.set(.5,0,.866);let i=new Es(16777147,526368,.8);this._scene.add(e,n,i)}initControls(){this._controls=new la(this._canvas,this),this._controls.activate()}initMeshes(){this._chartLoader=new fa(this)}initRenderer(){let e={alpha:!1,antialias:!0},n=this._canvas.getContext("webgl2",e)||this._canvas.getContext("experimental-webgl2",e);this._renderer=new Mi(_a({canvas:this._canvas,context:n},e)),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setClearColor(15530239),this._renderer.outputEncoding=Nr,this._resolution.set(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio),this._canvas.addEventListener("webglcontextlost",this.onContextLost),window.addEventListener("resize",this.onWindowResize)}get scene(){return this._scene}static get timeStamp(){return Er._timeStamp}get distance(){return this._distance}get resolution(){return this._resolution}},Wn=Er;Wn._timeStamp=0;var da=class{constructor(){}},Hi=class{static getInstance(){return Hi.instance||new Hi}constructor(){Hi.instance=this,this._model=new da,this._sceneManager=new Wn}get scene(){return this._sceneManager}get model(){return this._model}},ey=Hi.getInstance();})();
