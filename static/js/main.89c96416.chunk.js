(this["webpackJsonpgame-story"]=this["webpackJsonpgame-story"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/down-arrow.c3fc7584.svg"},25:function(e,a,t){},39:function(e,a,t){e.exports=t.p+"static/media/upvote.17523c1a.svg"},40:function(e,a,t){e.exports=t.p+"static/media/reply.6016781c.svg"},41:function(e,a,t){e.exports=t(68)},46:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/undraw_profile_pic_ic5t.6a3966fb.svg"},61:function(e,a,t){e.exports=t.p+"static/media/symbol.e02c1a30.svg"},62:function(e,a,t){e.exports=t.p+"static/media/brands-and-logotypes.cdb413ff.svg"},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),c=t.n(r),s=(t(46),t(10)),o=t.n(s),m=t(17),i=t(4),u=(t(19),t(25),t(36)),d=t.n(u),p=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("li",{className:"footer-list"},l.a.createElement("ul",{className:"footer-head"},"Explore"),l.a.createElement("ul",{className:"footer-item"},"Horror"),l.a.createElement("ul",{className:"footer-item"},"Aliens"),l.a.createElement("ul",{className:"footer-item"},"Space"))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("li",{className:"footer-list"},l.a.createElement("ul",{className:"footer-head"},"Contact"),l.a.createElement("ul",{className:"footer-item"},"+91 8240625004"),l.a.createElement("ul",{className:"footer-item"},"@gamestory"),l.a.createElement("ul",{className:"footer-item"},"info@gamestory.com"))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("li",{className:"footer-list"},l.a.createElement("ul",{className:"footer-head"},"Donate"),l.a.createElement("ul",{className:"footer-item"},"UPI"),l.a.createElement("ul",{className:"footer-item"},"PayPal"),l.a.createElement("ul",{className:"footer-item"},l.a.createElement(d.a,{stripeKey:"",token:"",name:"Donate $10"},"Credit Card")))))))},E=t(22),g=t.n(E),b=Object(n.createContext)(),f=t(11),v=t(7),N=t.n(v),y=(t(50),function(){var e,a,t=Object(n.useContext)(b);return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"logo"},l.a.createElement(f.c,{className:"text-white",tag:f.b,to:"/game-story"},"gamestory.com")),l.a.createElement("div",{className:"userReg"},t.user?l.a.createElement("div",{className:"so-profile"},l.a.createElement("div",{className:"so"},l.a.createElement(f.c,{onClick:function(){t.setUser(null)},to:"/game-story"},"Sign Out")),l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pr-5"},l.a.createElement("div",{className:"col-sm pr-0"},l.a.createElement("div",null,l.a.createElement("img",{className:"profile-image",src:null===(e=t.user)||void 0===e?void 0:e.image,alt:"X"}))),l.a.createElement("div",{className:"col-sm pl-1 pr-1"},l.a.createElement("div",{className:"user-name"},l.a.createElement("p",null,(null===(a=t.user)||void 0===a?void 0:a.email)?t.user.email:""))),l.a.createElement("div",{className:"col-sm pl-0 down"},l.a.createElement("img",{className:"down-arrow",type:"button",src:g.a,alt:""}),l.a.createElement("div",{className:"row down-content"},l.a.createElement("div",{className:"dummy mt-0 mb-0"},l.a.createElement(f.c,{tag:f.b,to:"/game-story/dashboard",className:"down-item"},"Dashboard")),l.a.createElement("div",{className:"dummy mt-0 mb-0"},l.a.createElement("p",{className:"down-item"},"Profile")),l.a.createElement("div",{className:"dummy mt-0 mb-0 pd-0"},l.a.createElement("p",{className:"down-item"},"Donate")))))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"su"},l.a.createElement(f.c,{tag:f.b,to:"/game-story/signup"},"Sign Up")),l.a.createElement("div",{className:"si"},l.a.createElement(f.c,{tag:f.b,to:"/game-story/signin"},"Sign In")))))}),h=t(70),O=t(71),j=t(72),x=t(73),w=t(74),S=t(12),C=t(23),I={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!0},T=t(77),U=(t(61),t(62),function(){var e,a=Object(n.useContext)(b),t=Object(n.useContext)(b),r=(t.state,t.dispatch,Object(n.useState)("")),c=Object(i.a)(r,2),s=c[0],u=c[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),E=p[0],g=p[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),y=(v[0],v[1]),U=Object(n.useState)(null),k=Object(i.a)(U,2),D=k[0],A=k[1],P=Object(n.useState)(!1),G=Object(i.a)(P,2),_=(G[0],G[1],function(){var e=Object(m.a)(o.a.mark((function e(a){var t,n,l,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.target.files[0],n={contentType:t.type},e.next=5,Object(C.readAndCompressImage)(t,I);case 5:return l=e.sent,e.next=8,N.a.storage().ref();case 8:r=e.sent,(c=r.child("images/"+Object(T.a)()).put(l,n)).on(N.a.storage.TaskEvent.STATE_CHANGED,(function(e){y(!0);var a=e.bytesTransferred/e.totalBytes*100;switch(e.state){case N.a.storage.TaskState.PAUSED:y(!1),console.log("Uploading Paused");break;case N.a.storage.TaskState.RUNNING:console.log("Upload in progress..")}100===a&&alert("Success Uploading Image")}),(function(e){alert("Something went Wrong")}),(function(){c.snapshot.ref.getDownloadURL().then((function(e){A(e)})).catch((function(e){return console.log(e)}))})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(a){return e.apply(this,arguments)}}());return(null===(e=a.user)||void 0===e?void 0:e.uid)?l.a.createElement(S.a,{to:"/game-story"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signup-page-title"},l.a.createElement("p",null,"Sign Up")),l.a.createElement("div",{className:"image-container"},l.a.createElement("div",{className:"void"}),l.a.createElement("div",{className:"photo"},l.a.createElement("label",{className:"image-label",htmlFor:"userImage"},l.a.createElement("img",{src:D,alt:"",className:"profu"})),l.a.createElement("input",{className:"image-input",id:"userImage",name:"image",multiple:!1,onChange:function(e){return _(e)},accept:"image/*",type:"file"})),l.a.createElement("div",{className:"void"})),l.a.createElement("div",{className:"container-box"},l.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),N.a.auth().createUserWithEmailAndPassword(s,E).then((function(e){console.log(e),a.setUser({email:e.user.email,uid:e.user.uid,image:D})})).catch((function(e){alert(e),console.log(e)}))},className:"signup-form"},l.a.createElement(O.a,null,l.a.createElement(j.a,{className:"form-label",for:"userEmail"},"Email:"),l.a.createElement(x.a,{className:"form-input",id:"userEmail",type:"email",value:s,onChange:function(e){return u(e.target.value)},placeholder:"johndoe@mail.com"})),l.a.createElement(O.a,null,l.a.createElement(j.a,{className:"form-label",for:"password"},"Password:"),l.a.createElement(x.a,{className:"form-input",type:"text",id:"password",value:E,onChange:function(e){return g(e.target.value)},placeholder:"donotuse123"})),l.a.createElement("div",{className:"button-container"},l.a.createElement(w.a,{type:"submit",className:"button-box"},l.a.createElement("p",{className:"button-text"},"Sign Up"))))))}),k=function(){var e,a=Object(n.useContext)(b),t=Object(n.useState)(""),r=Object(i.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),u=m[0],d=m[1];return(null===(e=a.user)||void 0===e?void 0:e.uid)?l.a.createElement(S.a,{to:"/game-story"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signup-page-title"},l.a.createElement("p",null,"Sign In")),l.a.createElement("div",{className:"container-box"},l.a.createElement("div",{className:"empyt-space"}),l.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),N.a.auth().signInWithEmailAndPassword(c,u).then((function(e){console.log(e),a.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){alert(e),console.log(e)}))},className:"signup-form"},l.a.createElement(O.a,null,l.a.createElement(j.a,{className:"form-label",for:"userEmail"},"Email:"),l.a.createElement(x.a,{className:"form-input",id:"userEmail",type:"email",value:c,onChange:function(e){return s(e.target.value)},placeholder:"johndoe@mail.com"})),l.a.createElement(O.a,null,l.a.createElement(j.a,{className:"form-label",for:"password"},"Password:"),l.a.createElement(x.a,{className:"form-input",type:"text",value:u,onChange:function(e){return d(e.target.value)},id:"password",placeholder:"donotuse123"})),l.a.createElement("div",{className:"button-container"},l.a.createElement(w.a,{type:"submit",className:"button-box"},l.a.createElement("p",{className:"button-text"},"Sign In"))))))},D=Object(n.createContext)(),A=t(75),P=function(e){var a=e.game,t=e.gameKey,r=Object(n.useContext)(D).dispatch,c=Object(S.g)(),s=function(e){r({type:"SET_SINGLE_GAME",payload:e,key:t}),c.push("/game-story/gameInfo")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"game-card"},l.a.createElement("div",{className:"card-container"},l.a.createElement("img",{onClick:function(){return s(a)},className:"game-card-image",src:a.poster,alt:"X"}),l.a.createElement("div",{onClick:function(){return s(a)},className:"overlay"},l.a.createElement("p",{className:"game-card-text"},a.title)))))},G=function(){var e=Object(n.useContext)(D),a=e.state,t=(e.dispatch,a.games);return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,null,0===t.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ring"},"Loading")):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"latest-game"},l.a.createElement("p",{className:"latest-game-text"},"Games"),l.a.createElement("img",{className:"right-arrow",src:g.a,alt:"X"})),l.a.createElement("ul",{className:"horizontal-list"},Object.entries(t).map((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];return l.a.createElement("li",{key:t},l.a.createElement(P,{game:n,gameKey:t}))}))))))},_=function(){return l.a.createElement("div",{class:"text middle","data-text":"Error 404"},"Error 404")},R=t(39),F=t.n(R),L=t(40),K=t.n(L),M=function(){var e=Object(n.useContext)(D).state,a=e.game,t=e.gameKey,r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],u=c[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),E=p[0],g=(p[1],function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{N.a.database().ref("games/".concat(t,"/discussions/")).child("comments/").set({comment:s,upvote:E})}catch(a){console.log(a),alert(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"title-box"},l.a.createElement("p",{className:"title-text"},null===a||void 0===a?void 0:a.title)),l.a.createElement("div",{className:"t-i-box"},l.a.createElement("div",{className:"trailor"},l.a.createElement("iframe",{className:"trailor-frame",src:"https://www.youtube.com/embed/".concat(null===a||void 0===a?void 0:a.videoID,"?autoplay=1&controls=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&color=white&iv_load_policy=3&showinfo=0"),frameborder:"0",allow:"accelerometer;  encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),l.a.createElement("div",{className:"basic-info"},l.a.createElement("div",{className:"basic-form"},l.a.createElement("p",{className:"form-label"},"Available On : ",l.a.createElement("span",{className:"answer"},null===a||void 0===a?void 0:a.available)," "),l.a.createElement("p",{className:"form-label"},"Developer : ",l.a.createElement("span",{className:"answer"},null===a||void 0===a?void 0:a.developer)," "),l.a.createElement("p",{className:"form-label"},"Released : ",l.a.createElement("span",{className:"answer"},null===a||void 0===a?void 0:a.releasedate)," "),l.a.createElement("p",{className:"form-label"},"Genre : ",l.a.createElement("span",{className:"answer"},null===a||void 0===a?void 0:a.genre)," ")))),l.a.createElement("div",{className:"main-box"},l.a.createElement("p",{className:"form-label"},"Storyline:"),l.a.createElement("div",{className:"story-out"},l.a.createElement("p",{className:"story-text"},null===a||void 0===a?void 0:a.storyline))),l.a.createElement("div",{className:"dis-box"},l.a.createElement("div",{className:"dis-title"},l.a.createElement("p",null,"Discussions")),l.a.createElement("div",{className:"add-com-box"},l.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),g(),alert("Success")},className:"add-com-form"},l.a.createElement(O.a,null,l.a.createElement(j.a,{id:"comment",className:"hidden"}),l.a.createElement(x.a,{className:"story-input",value:s,onChange:function(e){return u(e.target.value)},type:"textarea",placeholder:"Add your thoughts..."})),l.a.createElement(w.a,{type:"submit",className:"sub-box"},l.a.createElement("p",{className:"button-text"},"Submit"))),l.a.createElement("div",{className:"Upvote"},l.a.createElement("btn",{className:"upvote-btn"},l.a.createElement("img",{className:"int-icon",src:F.a,alt:"Upvote"})),l.a.createElement("span",null,"56")),l.a.createElement("div",{className:"Reply"},l.a.createElement("img",{className:"int-icon",src:K.a,alt:"Reply"}),l.a.createElement("btn",{className:"reply-btn"},"Reply")))))},B=(t(63),t(65),t(69),t(76)),W=function(){var e=Object(n.useContext)(D),a=e.state,t=e.dispatch,r=a.gameToUpdate,c=(a.gameToUpdateKey,Object(S.g)()),s=Object(n.useState)(""),u=Object(i.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)(""),g=Object(i.a)(E,2),b=g[0],f=g[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),U=y[0],k=y[1],A=Object(n.useState)(""),P=Object(i.a)(A,2),G=P[0],_=P[1],R=Object(n.useState)(""),F=Object(i.a)(R,2),L=F[0],K=F[1],M=Object(n.useState)(""),W=Object(i.a)(M,2),X=W[0],z=W[1],H=Object(n.useState)(""),J=Object(i.a)(H,2),V=J[0],q=J[1],$=Object(n.useState)(""),Q=Object(i.a)($,2),Y=Q[0],Z=(Q[1],Object(n.useState)(!1)),ee=Object(i.a)(Z,2),ae=(ee[0],ee[1]),te=Object(n.useState)(null),ne=Object(i.a)(te,2),le=ne[0],re=ne[1],ce=Object(n.useState)(!1),se=Object(i.a)(ce,2),oe=(se[0],se[1]);Object(n.useEffect)((function(){r&&(p(r.title),f(r.available),k(r.releasedate),_(r.genre),K(r.developer),z(r.storyline),q(r.videoID),re(r.poster),oe(!0))}),[r]);var me=function(){var e=Object(m.a)(o.a.mark((function e(a){var t,n,l,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.target.files[0],n={contentType:t.type},e.next=5,Object(C.readAndCompressImage)(t,I);case 5:return l=e.sent,e.next=8,N.a.storage().ref();case 8:r=e.sent,(c=r.child("posters/"+Object(T.a)()).put(l,n)).on(N.a.storage.TaskEvent.STATE_CHANGED,(function(e){ae(!0);var a=e.bytesTransferred/e.totalBytes*100;switch(e.state){case N.a.storage.TaskState.PAUSED:ae(!1),console.log("Uploading Paused");break;case N.a.storage.TaskState.RUNNING:console.log("Upload in progress...")}100===a&&ae(!1)}),(function(e){console.log(e)}),(function(){c.snapshot.ref.getDownloadURL().then((function(e){re(e)})).catch((function(e){return console.error(e)}))})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(a){return e.apply(this,arguments)}}(),ie=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{N.a.database().ref("games/"+Object(T.a)()).set({title:d,release:U,available:b,genre:G,discussions:Y,storyline:X,poster:le,developer:L,videoID:V})}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"heading"},l.a.createElement("h1",{className:"heading-text"},"Add Game Information")),l.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),ie(),alert("Success"),t({type:"GAME_UPDATE",payload:null,key:null}),c.push("/game-story")},className:"title"},l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",sm:2,for:"title"},"Title:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{value:d,onChange:function(e){return p(e.target.value)},className:"form-input",type:"text",id:"title"}))),l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",sm:2,for:"poster"},"Poster:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{className:"form-input",type:"file",multiple:!1,onChange:function(e){return me(e)},accept:"image/*",id:"poster"}))),l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",for:"available",sm:2},"Available:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{className:"form-input",type:"select",value:b,onChange:function(e){return f(e.target.value)},id:"available"},l.a.createElement("option",{className:"options"},"PC"),l.a.createElement("option",null,"PC + PS + Xbox"),l.a.createElement("option",null,"PlayStation"),l.a.createElement("option",null,"Xbox"),l.a.createElement("option",null,"PS + Xbox"),l.a.createElement("option",null,"PS + PC"),l.a.createElement("option",null,"Nintendo"),l.a.createElement("option",null,"PC + PS + Xbox + Nintendo")))),l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",for:"dev",sm:2},"Developer:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{className:"form-input",value:L,onChange:function(e){return K(e.target.value)},type:"text",id:"dev"}))),l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",for:"relDate",sm:2},"Release:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{className:"form-input",value:U,onChange:function(e){return k(e.target.value)},type:"text",placeholder:"29th Feb 2056",id:"relDate"}))),l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",for:"genre",sm:2},"Genre:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{className:"form-input",value:G,onChange:function(e){return _(e.target.value)},type:"text",id:"genre"}))),l.a.createElement(O.a,{row:!0},l.a.createElement(j.a,{className:"form-label",for:"vidId",sm:2},"Video ID:"),l.a.createElement(B.a,{sm:10},l.a.createElement(x.a,{className:"form-input",value:V,onChange:function(e){return q(e.target.value)},type:"text",id:"vidId"}))),l.a.createElement(O.a,null,l.a.createElement(j.a,{className:"form-label",for:"storyline"},"Storyline:"),l.a.createElement(x.a,{type:"textarea",className:"story-input",value:X,onChange:function(e){return z(e.target.value)},placeholder:"Only copy-paste from Wikipedia, lol",id:"storyline"})),l.a.createElement(w.a,{type:"submit",className:"button-box"},l.a.createElement("p",{className:"button-text"},"Submit"))))},X=t(15),z=function(e,a){switch(a.type){case"SET_GAME":return null==a.payload?Object(X.a)(Object(X.a)({},e),{},{games:[]}):Object(X.a)(Object(X.a)({},e),{},{games:a.payload});case"SET_LOADING":return Object(X.a)(Object(X.a)({},e),{},{isLoading:a.payload});case"GAME_UPDATE":return Object(X.a)(Object(X.a)({},e),{},{gameToUpdate:a.payload,gameToUpdateKey:a.key});case"SET_SINGLE_GAME":return Object(X.a)(Object(X.a)({},e),{},{game:a.payload,gameKey:a.key});default:return e}},H={games:[],game:{},gameToUpdate:null,gameToUpdateKey:null,isLoading:!1};N.a.initializeApp({apiKey:"AIzaSyDFjRizP3pfwa-xIBIJNRiVm8TM9zq74G8",authDomain:"gamestory-76bdd.firebaseapp.com",databaseURL:"https://gamestory-76bdd.firebaseio.com",projectId:"gamestory-76bdd",storageBucket:"gamestory-76bdd.appspot.com",messagingSenderId:"584449717844",appId:"1:584449717844:web:2e6eaebd031a6683cc1fc1",measurementId:"G-3E15VBQ82C"});var J=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useReducer)(z,H),s=Object(i.a)(c,2),u=s[0],d=s[1],E=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:"SET_LOADING",payload:!0}),e.next=3,N.a.database().ref("/games");case 3:e.sent.on("value",(function(e){d({type:"SET_GAME",payload:e.val()}),d({type:"SET_LOADING",payload:!1})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),l.a.createElement(f.a,null,l.a.createElement(b.Provider,{value:{user:t,setUser:r}},l.a.createElement(D.Provider,{value:{state:u,dispatch:d}},l.a.createElement(y,null),l.a.createElement(A.a,null,l.a.createElement(S.d,null,l.a.createElement(S.b,{exact:!0,path:"/game-story",component:G}),l.a.createElement(S.b,{exact:!0,path:"/game-story/signup",component:U}),l.a.createElement(S.b,{exact:!0,path:"/game-story/signin",component:k}),l.a.createElement(S.b,{exact:!0,path:"/game-story/dashboard",component:W}),l.a.createElement(S.b,{exact:!0,path:"/game-story/gameInfo",component:M}),l.a.createElement(S.b,{exact:!0,path:"*",component:_}))),l.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.89c96416.chunk.js.map