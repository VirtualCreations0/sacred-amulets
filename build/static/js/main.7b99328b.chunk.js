(this["webpackJsonprobot-mafia-club"]=this["webpackJsonprobot-mafia-club"]||[]).push([[0],{180:function(e,t,n){},274:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return W}));var r=n(5),s=n(13),o=n(1),c=n.n(o),i=n(99),a=n(172),l=n(169),u=n(3),d=(n(54),n(98)),b=n(2),f=n(292),p=n(46),g=(n(180),n(131)),j=n(541),m=n(542),h=n(290),x=n(179),y=n(173),O=n(132),w=n.n(O),S=(n(126),n(482),n(276)),v=n(6),k=n(4),P=k.struct,A=(k.u32,k.ns64,k.nu64),C=(k.nu64be,k.u8),T="https://sacred-amulets.herokuapp.com",W=function(){Object(a.b)().connection;var t=Object(l.b)(),n=t.publicKey,o=t.sendTransaction,O=Object(b.useState)(5e3),k=Object(s.a)(O,2),W=(k[0],k[1],Object(b.useState)([])),B=Object(s.a)(W,2),K=(B[0],B[1]),N=Object(b.useState)([]),E=Object(s.a)(N,2),F=E[0],R=E[1],U=Object(b.useState)(!1),L=Object(s.a)(U,2),I=(L[0],L[1]),M=Object(b.useState)(""),q=Object(s.a)(M,2),D=q[0],H=q[1],z=Object(b.useState)(!1),G=Object(s.a)(z,2),Q=(G[0],G[1]),Y=Object(b.useState)(),Z=Object(s.a)(Y,2),V=Z[0],J=Z[1],X=Object(b.useState)(!1),$=Object(s.a)(X,2),_=$[0],ee=$[1],te=Object(b.useState)(!1),ne=Object(s.a)(te,2),re=ne[0],se=ne[1];Object(b.useEffect)((function(){n&&(p.b.success("Connected",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),oe(),se(!0))}),[n]),console.log(n,"publicKey");var oe=function(){var e=Object(r.a)(c.a.mark((function e(){var t,s,o,i,a,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H("Fetching NFTs...."),t=Object(g.createConnectionConfig)(u.clusterApiUrl("devnet")),s=n,o=Object(g.isValidSolanaAddress)(s),console.log("result",o),e.next=7,Object(g.getParsedNftAccountsByOwner)({publicAddress:n,connection:t,serialization:!0});case 7:return i=e.sent,console.log(i,"nfts"),K(i),a="2YjQta5fdwFushuo6KLsjcYABqoyt22UYe4btRWPUhWW",console.log(i.filter((function(e){return e.data.creators[0].address===a})),"specific CM nft's"),l=i.filter((function(e){return e.data.creators[0].address===a})),d=[],e.next=16,Promise.all(l.map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.data.uri);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,d.push({name:t.data.name,mint:t.mint,src:r.image});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 16:setTimeout((function(){console.log(d,"imageResult"),R(d),I(!0),H("")}),5e3);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(c.a.mark((function e(t,n,r,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.post("".concat(T,"/stake"),{wallet:t,nftAddress:n,url:r,name:s},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((function(e){console.log("Response: ",e),le(t),ge()})).catch((function(e){console.log("Error:",e),ge()}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),ie=function(){var t=Object(r.a)(c.a.mark((function t(n,r,s,o,a){var l,b,f,g,j,m,h,x,y,O,w,S,v,k,T,W,B,K,N,E,F,R,U,L,I,M,q,D;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(je(),Q(!0),console.log("Check"),console.log(n,"nft"),console.log(r,"publicKey"),console.log(s,"sendTransaction"),console.log(a,"name of nft"),console.log(a.split("#"),"after trim"),l=a.split("#"),b=parseInt(l[1]),console.log(b,"value"),b>6&&(b=6),console.log(b,"value2"),r){t.next=15;break}throw new i.f;case 15:return f=new u.PublicKey("4hWcRRDdVEFmCLsum7ByxckX1LqgNF1AsU1MLaac9qxN"),g=new u.PublicKey(n),j=new u.PublicKey("SysvarRent111111111111111111111111111111111"),m=new u.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),h=new u.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),x=new u.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),new u.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),y=new u.PublicKey("2YjQta5fdwFushuo6KLsjcYABqoyt22UYe4btRWPUhWW"),O=new u.Connection(u.clusterApiUrl("devnet"),"confirmed"),new u.PublicKey("EdiXRce7Fsu4WDAMkTdntUQodf3qqEnwDUbvVW6FQAEM"),t.next=27,u.PublicKey.findProgramAddress([e.from("metadata"),x.toBuffer(),g.toBuffer()],x);case 27:return w=(w=t.sent)[0],S=(new TextEncoder).encode("vault"),t.next=32,u.PublicKey.findProgramAddress([S],f);case 32:return v=(v=t.sent)[0],t.next=36,u.PublicKey.findProgramAddress([g.toBuffer()],f);case 36:return k=t.sent,T=k[0],t.next=40,u.PublicKey.findProgramAddress([r.toBuffer(),m.toBuffer(),g.toBuffer()],h);case 40:return W=t.sent[0],t.next=43,u.PublicKey.findProgramAddress([v.toBuffer(),m.toBuffer(),g.toBuffer()],h);case 43:return B=t.sent[0],t.next=46,d.Metadata.getPDA(new u.PublicKey(g));case 46:return K=t.sent,t.next=49,d.Metadata.load(O,K);case 49:return N=t.sent,console.log("tokenMetadata",N),t.next=53,u.PublicKey.findProgramAddress([e.from("whitelist"),y.toBuffer()],f);case 53:return E=(E=t.sent)[0],F=[{pubkey:r,isSigner:!0,isWritable:!0},{pubkey:g,isSigner:!1,isWritable:!1},{pubkey:w,isSigner:!1,isWritable:!1},{pubkey:v,isSigner:!1,isWritable:!1},{pubkey:W,isSigner:!1,isWritable:!0},{pubkey:B,isSigner:!1,isWritable:!0},{pubkey:m,isSigner:!1,isWritable:!1},{pubkey:u.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:j,isSigner:!1,isWritable:!1},{pubkey:h,isSigner:!1,isWritable:!1},{pubkey:T,isSigner:!1,isWritable:!0},{pubkey:E,isSigner:!1,isWritable:!0}],R=new u.Transaction({feePayer:r}),U=b.toString(),L=P([C("instruction"),A("biscuit")]),I=e.alloc(1024),M=L.encode({instruction:1,biscuit:U},I),I=I.slice(0,M),R.add(new u.TransactionInstruction({keys:F,programId:f,data:I})),t.prev=63,t.next=66,s(R,O);case 66:return q=t.sent,t.next=69,O.confirmTransaction(q,"processed");case 69:(D=t.sent).value.err?(Q(!1),console.log("STAKING",D.value.err),p.b.error("Error! ".concat(D.value.err),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),ge()):(ce(r.toString(),n,o,a),console.log("transaction confirmed STAKING",q),Q(!1),oe(),p.b.success("Success! Staked Successfully.",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),ge()),t.next=79;break;case 73:t.prev=73,t.t0=t.catch(63),console.log("error STAKING:",t.t0),Q(!1),p.b.error("Error! ".concat(t.t0),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),ge();case 79:case"end":return t.stop()}}),t,null,[[63,73]])})));return function(e,n,r,s,o){return t.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.delete("".concat(T,"/unstake/").concat(n),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((function(e){console.log("Response: ",e),oe(),le(t)})).catch((function(e){console.log("Error:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("".concat(T,"/stakeData/").concat(t.toString()),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((function(e){J(e.data),console.log(" getStakeData Response: ",e.data),Q(!1)})).catch((function(e){console.log("Error:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){n&&(console.log("Check"),le(n.toString()),ee(!0))}),[n]);var ue=function(){var t=Object(r.a)(c.a.mark((function t(n,r,s){var o,a,l,b,f,g,j,m,h,x,y,O,w,S,v,k,T,W,B,K,N,E,F,R,U,L,I;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q(!0),je(),console.log("Check"),r){t.next=5;break}throw new i.f;case 5:return o=new u.PublicKey("4hWcRRDdVEFmCLsum7ByxckX1LqgNF1AsU1MLaac9qxN"),a=new u.PublicKey(n),l=new u.PublicKey("SysvarRent111111111111111111111111111111111"),b=new u.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),f=new u.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),g=new u.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),new u.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),j=new u.PublicKey("2YjQta5fdwFushuo6KLsjcYABqoyt22UYe4btRWPUhWW"),m=new u.Connection(u.clusterApiUrl("devnet"),"confirmed"),h=new u.PublicKey("EdiXRce7Fsu4WDAMkTdntUQodf3qqEnwDUbvVW6FQAEM"),t.next=17,u.PublicKey.findProgramAddress([e.from("metadata"),g.toBuffer(),a.toBuffer()],g);case 17:return x=(x=t.sent)[0],y=(new TextEncoder).encode("vault"),t.next=22,u.PublicKey.findProgramAddress([y],o);case 22:return O=(O=t.sent)[0],t.next=26,u.PublicKey.findProgramAddress([a.toBuffer()],o);case 26:return w=t.sent,S=w[0],t.next=30,u.PublicKey.findProgramAddress([r.toBuffer(),b.toBuffer(),a.toBuffer()],f);case 30:return v=t.sent[0],t.next=33,u.PublicKey.findProgramAddress([O.toBuffer(),b.toBuffer(),h.toBuffer()],f);case 33:return k=t.sent[0],t.next=36,u.PublicKey.findProgramAddress([O.toBuffer(),b.toBuffer(),a.toBuffer()],f);case 36:return T=t.sent[0],t.next=39,u.PublicKey.findProgramAddress([r.toBuffer(),b.toBuffer(),h.toBuffer()],f);case 39:return W=t.sent[0],t.next=42,d.Metadata.getPDA(new u.PublicKey(a));case 42:return B=t.sent,t.next=45,d.Metadata.load(m,B);case 45:return t.sent,t.next=48,u.PublicKey.findProgramAddress([e.from("whitelist"),j.toBuffer()],o);case 48:return K=(K=t.sent)[0],N=[{pubkey:r,isSigner:!0,isWritable:!0},{pubkey:u.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:b,isSigner:!1,isWritable:!1},{pubkey:l,isSigner:!1,isWritable:!1},{pubkey:f,isSigner:!1,isWritable:!1},{pubkey:S,isSigner:!1,isWritable:!0},{pubkey:O,isSigner:!1,isWritable:!1},{pubkey:W,isSigner:!1,isWritable:!0},{pubkey:k,isSigner:!1,isWritable:!0},{pubkey:v,isSigner:!1,isWritable:!0},{pubkey:T,isSigner:!1,isWritable:!0},{pubkey:x,isSigner:!1,isWritable:!1},{pubkey:K,isSigner:!1,isWritable:!0},{pubkey:h,isSigner:!1,isWritable:!1}],E=new u.Transaction({feePayer:r}),F=P([C("instruction"),A("nft")]),R=e.alloc(1024),U=F.encode({instruction:2,nftPubkey:a},R),R=R.slice(0,U),E.add(new u.TransactionInstruction({keys:N,programId:o,data:R})),t.prev=57,t.next=60,s(E,m);case 60:return L=t.sent,t.next=63,m.confirmTransaction(L,"processed");case 63:(I=t.sent).value.err?(Q(!1),console.log("STAKING",I.value.err),p.b.error("Error! ".concat(I.value.err),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),ge()):(ae(r.toString(),n),Q(!1),console.log("transaction confirmed STAKING",L),p.b.success("Success! Untaked Successfully.",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),ge()),t.next=73;break;case 67:t.prev=67,t.t0=t.catch(57),Q(!1),console.log("error STAKING:",t.t0),p.b.error("Error! ".concat(t.t0),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),ge();case 73:case"end":return t.stop()}}),t,null,[[57,67]])})));return function(e,n,r){return t.apply(this,arguments)}}(),de=Object(b.useState)(!1),be=Object(s.a)(de,2),fe=be[0],pe=be[1],ge=function(){pe(!1)},je=function(){console.log("handle show called"),pe(!0)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{show:fe,handleClose:ge,string:"from 1"}),Object(v.jsx)("div",{style:{justifyContent:"center",display:"flex"}}),Object(v.jsx)(j.a,{className:"flex-container mt-5 ",style:{display:"flex"},children:Object(v.jsxs)(m.a,{children:[n&&(null===V||void 0===V?void 0:V.length)>0&&Object(v.jsx)("h4",{className:"lower-content",children:"Scared Amulets on Staked"}),n&&(null===V||void 0===V?void 0:V.length)>0&&(null===F||void 0===F?void 0:F.length)>0?null===V||void 0===V?void 0:V.map((function(e,t){return Object(v.jsxs)(h.a,{xs:12,sm:12,md:4,lg:4,xl:4,style:{paddingRight:"30px",marginBottom:"25px"},children:[_&&Object(v.jsx)("div",{style:{alignItems:"center",display:"flex",justifyContent:"left"},children:Object(v.jsx)(x.a,{animation:"border",variant:"light"})}),Object(v.jsx)(y.a,{style:{height:"auto",width:"200px"},src:e.url,onLoad:function(){return console.log("image is loaded"),void ee(!1)}}),Object(v.jsx)("p",{className:"mt-3 lower-content",style:{color:"white"},children:e.name},t),Object(v.jsx)(f.a,{onClick:Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(e.nftAddress,n,o);case 2:case"end":return t.stop()}}),t)}))),disabled:!n||!e.nftAddress,variant:"danger",style:{width:"200px",borderRadius:"5px",marginBottom:"5px"},children:"UNSTAKE"})]})})):null,n&&F.length>0?Object(v.jsx)("h4",{className:"lower-content mb-3",style:{marginTop:"60px"},children:"Scared Amulets in Wallet"}):Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(v.Fragment,{children:F.length>0?Object(v.jsx)("h4",{className:"lower-content",style:{marginTop:"60px"},children:"Checking Scared Amulets in Wallet"}):Object(v.jsx)("h4",{className:"lower-content",style:{marginTop:"60px"},children:"No Scared Amulets in Wallet"})}):Object(v.jsx)("h4",{className:"lower-content",style:{marginTop:"60px"},children:"Connect Wallet"})}),n&&F.length>0?F.map((function(e,t){return Object(v.jsxs)(h.a,{xs:12,sm:12,md:4,lg:4,xl:4,style:{paddingRight:"30px",marginBottom:"25px"},children:[re&&Object(v.jsx)("div",{style:{alignItems:"center",display:"flex",justifyContent:"left"},children:Object(v.jsx)(x.a,{animation:"border",variant:"light"})}),Object(v.jsx)(y.a,{style:{height:"auto",width:"200px"},src:e.src,onLoad:function(){return console.log("image is loaded"),void se(!1)}}),Object(v.jsx)("p",{className:"mt-3 lower-content",style:{color:"white"},children:e.name},t),Object(v.jsx)(f.a,{onClick:Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(e.mint,n,o,e.src,e.name);case 2:case"end":return t.stop()}}),t)}))),disabled:!n||!e.mint,variant:"danger",style:{width:"200px",borderRadius:"5px",marginBottom:"5px"},children:"STAKE"}),Object(v.jsx)("br",{})]})})):Object(v.jsxs)("p",{className:"mt-3 lower-content",style:{color:"white"},children:[" ",D]})]})})]})}}).call(this,n(10).Buffer)},276:function(e,t,n){"use strict";n(2);var r=n(291),s=n(179),o=n(6);t.a=function(e){return console.log(e,"props"),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.a,{show:e.show,onHide:function(){e.handleClose()},dialogClassName:"modal-90w ","aria-labelledby":"example-custom-modal-styling-title",centered:!0,children:Object(o.jsx)(r.a.Body,{style:{backgroundColor:"black",display:"flex"},children:Object(o.jsxs)("div",{style:{alignItems:"center",display:"flex",justifyContent:"left"},children:[Object(o.jsx)(s.a,{animation:"border",variant:"light"}),Object(o.jsx)("span",{className:"text-light",children:"Proccessing Transaction..."})]})})})})}},299:function(e,t,n){},301:function(e,t){},304:function(e,t){},313:function(e,t){},321:function(e,t){},322:function(e,t){},341:function(e,t){},377:function(e,t){},391:function(e,t){},393:function(e,t){},403:function(e,t){},405:function(e,t){},436:function(e,t){},438:function(e,t){},445:function(e,t){},446:function(e,t){},463:function(e,t){},482:function(e,t,n){"use strict";n(13),n(2),n(126),n(6)},486:function(e,t,n){},488:function(e,t){},490:function(e,t){},499:function(e,t){},501:function(e,t){},510:function(e,t){},511:function(e,t){},540:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),o=n(41),c=n.n(o),i=(n(299),n.p,n(180),n(554)),a=n(555),l=n(282),u=n(557),d=n(558),b=n(559),f=n(560),p=n(561),g=n(552),j=n(553),m=n(133),h=n(3),x=n(274),y=n(46),O=(n(541),n(556),n.p,n(486),n(6));n(487);var w=function(){var e=l.b.Devnet,t=Object(r.useMemo)((function(){return Object(h.clusterApiUrl)(e)}),[e]),n=Object(r.useMemo)((function(){return[Object(u.a)(),Object(d.a)(),Object(b.a)(),Object(f.a)({options:{clientId:"Get a client ID @ https://developer.tor.us"}}),Object(p.a)(),Object(g.a)({network:e}),Object(j.a)({network:e})]}),[e]);return console.log(n,"wallets"),Object(O.jsx)(i.a,{endpoint:t,children:Object(O.jsx)(a.a,{wallets:n,autoConnect:!0,children:Object(O.jsxs)(m.b,{children:[Object(O.jsxs)("div",{style:{width:"50%",display:"flex",margin:"auto",justifyContent:"center",marginBottom:"20px"},children:[Object(O.jsx)(m.c,{style:{fontSize:15,lineHeight:"15px",backgroundColor:"red"}}),Object(O.jsx)(m.a,{onClick:function(){y.b.warning("Disconnected",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},style:{fontSize:15,lineHeight:"15px",backgroundColor:"red",marginLeft:"5px"}})]}),Object(O.jsx)(x.a,{})]})})})};n(538),n.p;var S=function(){return Object(O.jsxs)("div",{className:"mt-5 mb-5",children:[Object(O.jsx)(y.a,{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,theme:"dark",pauseOnHover:!0}),Object(O.jsx)("div",{className:"mt-5",style:{textAlign:"center",marginTop:"40px"},children:Object(O.jsx)("h2",{className:"first-heading ",style:{color:"white",fontSize:"50px"},children:"Welcome to the Scared Amulets Tcg Staking!"})}),Object(O.jsx)("div",{style:{width:"50%",margin:"auto"},children:Object(O.jsxs)("ul",{style:{textAlign:"left",marginTop:"10px"},children:[Object(O.jsx)("li",{style:{color:"white",fontSize:"18px"},children:"30 SA Coins a day for Common NFTS"}),Object(O.jsx)("li",{style:{color:"white",fontSize:"18px"},children:"40 SA Coins for Uncommon NFTS a day"}),Object(O.jsx)("li",{style:{color:"white",fontSize:"18px"},children:"50 SA Coins for Rare NFTS a day"}),Object(O.jsx)("li",{style:{color:"white",fontSize:"18px"},children:"60 SA Coins for Epic NFTS a day"}),Object(O.jsx)("li",{style:{color:"white",fontSize:"18px"},children:"80 SA Coins for Legendary NFTS a day"}),Object(O.jsx)("li",{style:{color:"white",fontSize:"18px"},children:"100 SA Coins for Mythic NFTS a day"})]})}),Object(O.jsx)(w,{})]})};n(539);c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[540,1,2]]]);
//# sourceMappingURL=main.7b99328b.chunk.js.map