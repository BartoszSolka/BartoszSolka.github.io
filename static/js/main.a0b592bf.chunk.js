(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{182:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return p}));var c=n(1),r=n.n(c),a=n(4),i=n(33),s=n(71),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),d=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),u=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var i,s,o,d,l,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>3&&void 0!==u[3]?u[3]:"recent",s=u.length>4&&void 0!==u[4]&&u[4],o=!1,d={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(r.a.mark((function e(u,j){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),j({timeout:!0}))}),n);try{l=c.onSignature(t,(function(e,t){o=!0,d={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),j(d)):(console.log("Resolved via websocket",e),u(d))}),i)}catch(b){o=!0,console.error("WS error in setup",t,b)}case 2:if(o||!s){e.next=8;break}return Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getSignatureStatuses([t]);case 3:n=e.sent,d=n&&n.value[0],o||(d?d.err?(console.log("REST error for",t,d),o=!0,j(d.err)):d.confirmations?(console.log("REST confirmation for",t,d),o=!0,u(d)):console.log("REST no confirmations for",t,d):console.log("REST null result for",t,d)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return d=e.sent,c._signatureSubscriptions[l]&&c.removeSignatureListener(l),o=!0,console.log("Returning status",d),e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),j=function(t,n,c,r){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:d,data:e.from([])})},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,s,d,l,u,j,b,m,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(c,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,a);case 3:return s=e.sent,d=new i.a(s,o,a),l={id:n,connection:c,program:d},e.next=8,d.account.candyMachine.fetch(n);case 8:return u=e.sent,j=u.data.itemsAvailable.toNumber(),b=u.itemsRedeemed.toNumber(),m=j-b,f=u.data.goLiveDate.toNumber(),f=new Date(1e3*f),e.abrupt("return",{candyMachine:l,itemsAvailable:j,itemsRedeemed:b,itemsRemaining:m,goLiveDate:f});case 15:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],d);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c,a){var o,d,u,b,p,x,O;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,h(c,o.publicKey);case 3:return d=e.sent,u=t.connection,b=t.program,e.next=7,f(o.publicKey);case 7:return p=e.sent,e.next=10,m(o.publicKey);case 10:return x=e.sent,e.next=13,u.getMinimumBalanceForRentExemption(s.a.span);case 13:return O=e.sent,e.next=16,b.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:c,wallet:a,mint:o.publicKey,metadata:p,masterEdition:x,mintAuthority:c,updateAuthority:c,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:c,newAccountPubkey:o.publicKey,space:s.a.span,lamports:O,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,c,c),j(d,c,c,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,d,c,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,c,r){return e.apply(this,arguments)}}(),x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},378:function(e,t,n){},379:function(e,t,n){},380:function(e,t){},382:function(e,t){},389:function(e,t){},404:function(e,t){},405:function(e,t){},431:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){},434:function(e,t){},435:function(e,t){},442:function(e,t){},443:function(e,t){},503:function(e,t){},505:function(e,t){},519:function(e,t){},523:function(e,t){},525:function(e,t){},535:function(e,t){},537:function(e,t){},568:function(e,t){},570:function(e,t){},577:function(e,t){},578:function(e,t){},603:function(e,t){},605:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s=n(2),o=n.n(s),d=n(29),l=n.n(d),u=(n(378),n(379),n(11)),j=n(1),b=n.n(j),m=n(4),f=n(13),h=n(138),p=n(139),x=n(632),O=n(637),v=n(644),w=n(177),g=(n(431),n(432),n(433),n.p+"static/media/dude1.3bde72a6.png"),y=n.p+"static/media/dude2.e5f33e4d.png",N=n.p+"static/media/white-twitter-logo.c3b97b2d.png",k=n(344),S=n(643),R=n(182),I=n(57),P=n(37),T=n(7),K=Object(p.a)(w.a)(c||(c=Object(h.a)([""]))),D=p.a.span(r||(r=Object(h.a)([""]))),M=p.a.div(a||(a=Object(h.a)([""]))),B=Object(p.a)(x.a)(i||(i=Object(h.a)([""]))),L=function(e){e.days;var t=e.hours,n=e.minutes,c=e.seconds;e.completed;return Object(T.jsxs)(D,{children:[t," hours, ",n," minutes, ",c," seconds"]})},A=function(e){var t=Object(s.useState)(),n=Object(f.a)(t,2),c=(n[0],n[1]),r=Object(s.useState)(!1),a=Object(f.a)(r,2),i=a[0],o=a[1],d=Object(s.useState)(!1),l=Object(f.a)(d,2),j=l[0],h=l[1],p=Object(s.useState)(!1),x=Object(f.a)(p,2),w=x[0],D=x[1],A=Object(s.useState)({open:!1,message:"",severity:void 0}),z=Object(f.a)(A,2),E=z[0],W=z[1],C=Object(s.useState)(new Date(1e3*e.startDate)),U=Object(f.a)(C,2),_=U[0],Y=U[1],F=Object(I.c)(),q=Object(s.useState)(),G=Object(f.a)(q,2),J=G[0],H=G[1],V=function(){var t=Object(m.a)(b.a.mark((function t(){var n,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,D(!0),!F||!(null===J||void 0===J?void 0:J.program)){t.next=10;break}return t.next=5,Object(R.c)(J,e.config,F.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(R.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?W({open:!0,message:"Mint failed! Please try again!",severity:"error"}):W({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",h(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),W({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!F){t.next=23;break}return t.next=21,e.connection.getBalance(F.publicKey);case 21:i=t.sent,c(i/P.LAMPORTS_PER_SOL);case 23:return D(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(m.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!F){t.next=5;break}return t.next=3,e.connection.getBalance(F.publicKey);case 3:n=t.sent,c(n/P.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[F,e.connection]),Object(s.useEffect)((function(){Object(m.a)(b.a.mark((function t(){var n,c,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(F){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(R.b)(F,e.candyMachineId,e.connection);case 4:n=t.sent,c=n.candyMachine,r=n.goLiveDate,a=n.itemsRemaining,h(0===a),Y(r),H(c);case 11:case"end":return t.stop()}}),t)})))()}),[F,e.candyMachineId,e.connection]),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"top-content",id:"top-content",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"welcome row",children:[Object(T.jsx)("div",{className:"col-md-6 portfolio-box",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{id:"main",src:g})})}),Object(T.jsxs)("div",{className:"col-md-6",children:[Object(T.jsx)("h1",{className:"wow fadeInLeftBig",children:"We are Random Dudez"}),Object(T.jsx)("div",{className:"description wow fadeInLeftBig",children:Object(T.jsxs)("p",{children:["7777 for the random dudez under the sky"," ",Object(T.jsx)("br",{}),"7777 for the crypto miners in their halls of GPU's.",Object(T.jsx)("br",{}),"7777 for the newbies doomed to die.",Object(T.jsx)("br",{}),"In the Land of NFT where the future lies.",Object(T.jsx)("br",{}),"7777 to find them, 7777 to collect them, 7777 to have them all.",Object(T.jsx)("br",{}),"In the Land of NFT where the future lies.",Object(T.jsx)("br",{})]})}),Object(T.jsx)(M,{children:F?Object(T.jsx)(B,{disabled:j||w||!i,onClick:V,variant:"contained",children:j?"SOLD OUT":i?w?Object(T.jsx)(O.a,{}):"MINT":Object(T.jsx)(k.a,{date:_,onMount:function(e){return e.completed&&o(!0)},onComplete:function(){return o(!0)},renderer:L})}):Object(T.jsx)(K,{children:"Connect Wallet"})}),Object(T.jsx)(v.a,{open:E.open,autoHideDuration:6e3,onClose:function(){return W(Object(u.a)(Object(u.a)({},E),{},{open:!1}))},children:Object(T.jsx)(S.a,{onClose:function(){return W(Object(u.a)(Object(u.a)({},E),{},{open:!1}))},severity:E.severity,children:E.message})})]})]})})}),Object(T.jsx)("div",{className:"collection-container section-container",id:"roadmap",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"col portfolio section-description wow fadeIn",children:[Object(T.jsx)("h2",{children:"Roadmap"}),Object(T.jsx)("br",{}),Object(T.jsxs)("h4",{children:["We set some amazing goals for the community.",Object(T.jsx)("br",{}),"We want to have an impact on both Metaverse and the real world.",Object(T.jsx)("br",{}),"Once the RandomDudez community gets big, there are some exciting things bound to happen."]})]})}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsx)("h2",{children:"10%"})}),Object(T.jsx)("div",{className:"col-md-9",children:Object(T.jsxs)("p",{className:"roadmap-text",children:[Object(T.jsx)("b",{children:"RandomDudez community discord server."})," A place to meet other Random Dudez, share Your crypto stories and create new ones."]})})]}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsx)("h2",{children:"25%"})}),Object(T.jsx)("div",{className:"col-md-9",children:Object(T.jsxs)("p",{className:"roadmap-text",children:[Object(T.jsx)("b",{children:"RandomDudez merch store."})," Buy limited edition t-shirts, mugs, bucket hats."]})})]}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsx)("h2",{children:"50%"})}),Object(T.jsx)("div",{className:"col-md-9",children:Object(T.jsxs)("p",{className:"roadmap-text",children:["The milestone! Random Dudez will start changing the real world. We will create a ",Object(T.jsx)("b",{children:"series of murals"})," around some of the capitals of the world ",Object(T.jsx)("b",{children:"(ex. Paris, Tokyo, New York, Warsaw, Moscow, Bras\xedlia)"}),". Imagine Your Random Dude looking at You from the wall near Your office. Every 10% ",Object(T.jsx)("b",{children:"(50%, 60%, 70%, 80%, 90%)"})," will mean one more mural around the world."]})})]}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsx)("h2",{children:"100%"})}),Object(T.jsx)("div",{className:"col-md-9",children:Object(T.jsxs)("p",{className:"roadmap-text",children:[Object(T.jsx)("b",{children:"RandomDudez Foot Truck Tour!"})," We will depart on an 8-month journey around the globe (USA, Europe, Asia) with Random Dudez branded food truck."]})})]})]})}),Object(T.jsx)("div",{className:"collection-container section-container",id:"collection",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"col portfolio section-description wow fadeIn",children:[Object(T.jsx)("h2",{children:"Collection"}),Object(T.jsxs)("p",{children:[" ","From crypto to crypto, 7777 unique, special Random dudez to collect"]})]})}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{src:g})})}),Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{src:y})})}),Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{src:g})})})]}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{src:g})})}),Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{src:y})})}),Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("div",{className:"collection-preview",children:Object(T.jsx)("img",{src:g})})})]})]})}),Object(T.jsx)("div",{className:"portfolio-container section-container",id:"team",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"col portfolio section-description wow fadeIn",children:[Object(T.jsx)("h2",{children:"Team"}),Object(T.jsx)("p",{children:"Dudez behind the Random!"}),Object(T.jsx)("a",{href:"https://twitter.com/RandomDudez_nft",target:"_blank",rel:"noreferrer",children:Object(T.jsx)("div",{className:"brightness",children:Object(T.jsx)("img",{className:"twitter-logo",src:N})})})]})}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("h3",{children:Object(T.jsxs)("a",{href:"https://twitter.com/RandomDudez_nft",target:"_blank",rel:"noreferrer",children:["@SE7EN",Object(T.jsx)("div",{className:"collection-preview team",children:Object(T.jsx)("img",{src:g})}),"Co-founder"]})})}),Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInDown",children:Object(T.jsx)("h3",{children:Object(T.jsxs)("a",{href:"https://twitter.com/Sartosz",target:"_blank",rel:"noreferrer",children:["@Sartosz",Object(T.jsx)("div",{className:"collection-preview team",children:Object(T.jsx)("img",{src:g})}),"Co-founder"]})})}),Object(T.jsx)("div",{className:"col-md-4 portfolio-box wow fadeInUp",children:Object(T.jsx)("h3",{children:Object(T.jsxs)("a",{href:"https://www.instagram.com/jimzee.art/",target:"_blank",rel:"noreferrer",children:["@jimzee",Object(T.jsx)("div",{className:"collection-preview team",children:Object(T.jsx)("img",{src:g})}),"Artist"]})})})]})]})})]})},z=n(641),E=n(638),W=n(640),C=function(e){return Object(T.jsxs)("main",{children:[Object(T.jsx)(z.a,{className:"navbar-transparent",sticky:"top",variant:"dark",children:Object(T.jsxs)(E.a,{children:[Object(T.jsx)(z.a.Brand,{href:"#top-content",children:"RandomDudez"}),Object(T.jsx)(z.a.Collapse,{id:"basic-navbar-nav",children:Object(T.jsxs)(W.a,{className:"ml-auto",children:[Object(T.jsx)(W.a.Link,{href:"#roadmap",children:"Roadmap"}),Object(T.jsx)(W.a.Link,{href:"#collection",children:"Collection"}),Object(T.jsx)(W.a.Link,{href:"#team",children:"Team"})]})})]})}),Object(T.jsx)(A,{candyMachineId:e.candyMachineId,config:e.config,connection:e.connection,startDate:e.startDate,treasury:e.treasury,txTimeout:e.txTimeout})]})},U=n(33),_=n(122),Y=n(365),F=n(639),q=(n(604),new U.d.PublicKey("DFoLgm4boTwguAEmbjTR2cGqjNmmG7qrg9MM7RZfN2kK")),G=new U.d.PublicKey("3nZaKxptsb38gKJrzqHrA734akn6mySvmYw28K8NA6XJ"),J=new U.d.PublicKey("BKHJcRYofGxmjdokVnqvPWsNypz4u4KJJbBmYUQu7XGW"),H="devnet",V=new U.d.Connection("https://explorer-api.devnet.solana.com"),Z=parseInt("1632096000",10),X=Object(Y.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Q=function(){var e=Object(s.useMemo)((function(){return Object(P.clusterApiUrl)(H)}),[]),t=Object(s.useMemo)((function(){return[Object(_.a)(),Object(_.b)(),Object(_.c)(),Object(_.e)({network:H}),Object(_.d)({network:H})]}),[]);return Object(T.jsx)(F.a,{theme:X,children:Object(T.jsx)(I.a,{endpoint:e,children:Object(T.jsx)(I.b,{wallets:t,autoConnect:!0,children:Object(T.jsx)(w.b,{children:Object(T.jsx)(C,{candyMachineId:J,config:G,connection:V,startDate:Z,treasury:q,txTimeout:3e4})})})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,645)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};l.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(Q,{})}),document.getElementById("root")),$()}},[[605,1,2]]]);
//# sourceMappingURL=main.a0b592bf.chunk.js.map