(this["webpackJsonpletter-clicker"]=this["webpackJsonpletter-clicker"]||[]).push([[0],{95:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=n(39),s=n(132),l=n(149),d=n(138),h=n(60),u=n.n(h),j=n(62),b=n.n(j),f=n(4),p=Object(s.a)({root:{display:"flex",justifyContent:"space-between",alignItems:"center",height:30,padding:4,background:"lightgrey"},button:{height:"100%"}}),x=[{name:"Letters",icon:u.a},{name:"Settings",icon:b.a}];function O(t){var e=p();return Object(f.jsx)("div",{className:e.root,children:x.map((function(n,r){return Object(f.jsx)(l.a,{title:n.name,children:Object(f.jsxs)("span",{children:[" ",Object(f.jsx)(d.a,{size:"small",className:e.button,disabled:t.section==r,onClick:function(){return t.setSection(r)},children:Object(f.jsx)(n.icon,{})})]})},r)}))})}var g=n(70),v=n(139),m=n(64),y=n.n(m);function k(t){if(t>=1e6){var e=t.toLocaleString("fullwide",{useGrouping:!1}),n=3*Math.floor((e.length-1)/3),r=String(t/Math.pow(10,n)).slice(0,5);return"".concat(r,"e").concat(n)}return t.toLocaleString()}var w="ABCDEFGHIJKLMNOPQRSTUVWXYZ",C=[];function S(t){if(C[t])return C[t];var e=w.length,n="",r=0;do{r>0&&(t-=Math.pow(e,r));var a=Math.floor(t/Math.pow(e,r))%e;n=w[a]+n}while(Math.pow(e,++r)<=t);return C[t]=n,n}var N=n(34),B={cost:10,updateTime:1e3,increaseAmount:1},M={l:[0],buyMode:0},A=localStorage.hasOwnProperty("savedLCdata")?Object(N.a)(Object(N.a)({},M),JSON.parse(localStorage.savedLCdata)):M,I=0,W=1,T=!1;function E(){var t=Math.min(1,(Date.now()-I)/W),e=document.getElementById("clockhand"),n=document.getElementById("flash");if(e&&n){e.setAttribute("transform","rotate(".concat(360*t," 50 50)"));var r=5+55*t;n.setAttribute("rx",r),n.setAttribute("ry",r),n.style.opacity=.5-.5*t}requestAnimationFrame(E)}var J,L=!1;function D(){for(var t in A.l)t>0&&(A.l[t-1]+=A.l[t]);A.l[A.l.length-1]>0&&A.l.push(0),J(),localStorage.savedLCdata=JSON.stringify(A),function(){I=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,W=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,T||(E(),T=!0)}(Date.now(),B.updateTime),setTimeout(D,B.updateTime)}var P=Object(s.a)({root:{display:"flex",flexDirection:"column",height:"100%"},letters:{overflowY:"scroll",height:"100%"},letter:{display:"flex",alignItems:"center",justifyContent:"space-between","& h5":{width:"15%"},"& button":{width:"20%",textTransform:"none"}},bottomBar:{height:40,background:"#fcdcdc",display:"flex",justifyContent:"space-between",alignItems:"center"},clock:{height:"100%"}}),q=[1,10,100,"max"];var R=n(146),U=n(145),G=n(25),z=n.n(G),F=n(46),Y=n(65),H=n(66),K=n(38),X=n(68),Q=n(67),V=n(5),Z=n(148),$=n(144),_=n(142),tt=n(143),et=n(141),nt=function(t){Object(X.a)(n,t);var e=Object(Q.a)(n);function n(t){var r;return Object(Y.a)(this,n),(r=e.call(this,t)).state={open:!1},r.handleOpen=r.handleOpen.bind(Object(K.a)(r)),r.handleClose=r.handleClose.bind(Object(K.a)(r)),r}return Object(H.a)(n,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this.props.classes;return Object(f.jsx)("div",{children:Object(f.jsxs)(Z.a,{open:this.state.open,onClose:this.handleClose,disablePortal:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",disableBackdropClick:this.props.required,disableEscapeKeyDown:this.props.required,children:[Object(f.jsx)(et.a,{id:"alert-dialog-title",children:this.props.title}),Object(f.jsxs)(_.a,{dividers:!0,children:[Object(f.jsx)(tt.a,{className:t.text,id:"alert-dialog-description",children:this.props.description}),this.props.children]}),Object(f.jsxs)($.a,{children:[this.props.required?null:Object(f.jsx)(v.a,{onClick:this.handleClose,color:"secondary",children:"Close"}),this.props.buttonText?Object(f.jsx)(v.a,{onClick:this.props.buttonAction,color:"primary",children:this.props.buttonText}):null]})]})})}}]),n}(a.a.Component),rt=Object(V.a)((function(t){return{text:{margin:0}}}))(nt);function at(){return it.apply(this,arguments)}function it(){return(it=Object(F.a)(z.a.mark((function t(){var e,n,r=arguments;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:null,t.abrupt("return",new Promise(function(){var t=Object(F.a)(z.a.mark((function t(r){var a,i,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Object.assign({title:"Dialog title",required:!1},e),i="dialog".concat(e.layer?e.layer:0),null==(c=document.getElementById(i))&&((c=document.createElement("div")).id=i,document.getElementById("dialog").appendChild(c)),o.a.render(Object(f.jsx)(rt,Object(N.a)(Object(N.a)({},e),{},{ref:function(t){return a=t},children:n})),c),a?(a.handleOpen(),r(a)):setTimeout(Object(F.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,at(e,n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),100);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var ot=at,ct=Object(s.a)({root:{}});var st=Object(s.a)({root:{display:"flex",flexDirection:"column",height:"100%"},topBar:{flex:"0 1 auto"},section:{flex:"1 1 auto",overflowY:"auto"}}),lt=[function(t){var e=P(),n=a.a.useState(A.l),r=Object(c.a)(n,2),i=r[0],o=r[1],s=a.a.useState(A.buyMode),l=Object(c.a)(s,2),h=l[0],u=l[1],j=function(){o(JSON.parse(JSON.stringify(A.l)))};a.a.useEffect((function(){return J=j,void(L||(L=!0,D()))}),[]);var b=function(t){return Math.ceil(B.cost*Math.pow(Math.pow(A.l.length-1,B.increaseAmount),A.l.length-t-1))};return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)("div",{className:e.letters,children:i.map((function(t,n){var r=("string"==typeof q[h]?1:q[h])*b(n);return n==i.length-1&&(r=b(n)),Object(f.jsxs)("div",{className:e.letter,children:[Object(f.jsx)(g.a,{variant:"h5",children:S(n)}),Object(f.jsx)(g.a,{children:k(t)}),Object(f.jsx)(v.a,{variant:"contained",onClick:function(){return function(t){if(0==t)A.l[t]++;else{var e=q[h];if(t+1==A.l.length){if(A.l[t]>0)return;e=1}if("string"==typeof e)A.l[t]+=Math.floor(A.l[t-1]/b(t)),A.l[t-1]=A.l[t-1]%b(t);else{var n=b(t)*e;A.l[t-1]>=n&&(A.l[t-1]-=n,A.l[t]+=e)}}j()}(n)},disabled:0!=n&&A.l[n-1]<r,children:0==n?"Free":"".concat(k(r)).concat(S(n-1))})]},n)}))}),Object(f.jsxs)("div",{className:e.bottomBar,children:[Object(f.jsx)("span",{children:Object(f.jsx)("span",{children:"hi3"})}),Object(f.jsx)("svg",{className:e.clock,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsxs)("g",{children:[Object(f.jsx)("ellipse",{strokeWidth:"10",ry:"45",rx:"45",cy:"50",cx:"50",stroke:"#000",fill:"#ffffff"}),Object(f.jsx)("ellipse",{id:"flash",ry:"5",rx:"5",cy:"50",cx:"50",strokeWidth:"0",stroke:"#000",fill:"#000000"}),Object(f.jsx)("rect",{strokeWidth:"10",height:"1",width:"1",y:"13",x:"49.5",stroke:"#000",fill:"#fff"}),Object(f.jsx)("rect",{transform:"rotate(30, 70.5, 14.5)",strokeWidth:"3",height:"5",width:"1",y:"12",x:"70",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{transform:"rotate(60, 85.5, 29.5)",strokeWidth:"3",height:"5",width:"1",y:"27",x:"85",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{strokeWidth:"10",height:"1",width:"1",y:"50",x:"87",stroke:"#000",fill:"#fff"}),Object(f.jsx)("rect",{transform:"rotate(120, 85.5, 70.5)",strokeWidth:"3",height:"5",width:"1",y:"68",x:"85",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{transform:"rotate(150, 70.5, 85.5)",strokeWidth:"3",height:"5",width:"1",y:"83",x:"70",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{strokeWidth:"10",height:"1",width:"1",y:"87",x:"49.5",stroke:"#000",fill:"#fff"}),Object(f.jsx)("rect",{transform:"rotate(-150, 29.5, 85.5)",strokeWidth:"3",height:"5",width:"1",y:"83",x:"30",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{transform:"rotate(-120, 15.5, 70.5)",strokeWidth:"3",height:"5",width:"1",y:"68",x:"15",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{strokeWidth:"10",height:"1",width:"1",y:"50",x:"13",stroke:"#000",fill:"#fff"}),Object(f.jsx)("rect",{transform:"rotate(-60, 15.5, 29.5)",strokeWidth:"3",height:"5",width:"1",y:"27",x:"15",stroke:"#000",fill:"#426373"}),Object(f.jsx)("rect",{transform:"rotate(-30, 30.5, 14.5)",strokeWidth:"3",height:"5",width:"1",y:"12",x:"30",stroke:"#000",fill:"#426373"}),Object(f.jsx)("ellipse",{ry:"5",rx:"5",cy:"50",cx:"50",fill:"#000000"}),Object(f.jsx)("rect",{id:"clockhand",height:"30",width:"5",y:"20",x:"47.5",fill:"#000000"})]})}),Object(f.jsxs)("span",{children:[Object(f.jsx)(d.a,{size:"small",onClick:function(){for(var t=0;t<A.l.length-2;t++)A.l[t+1]+=Math.floor(A.l[t]/b(t+1)),A.l[t]=A.l[t]%b(t+1);j()},style:{marginRight:5},children:Object(f.jsx)(y.a,{})}),Object(f.jsxs)(v.a,{variant:"contained",size:"small",style:{textTransform:"none"},onClick:function(){var t=h+1;q.hasOwnProperty(t)||(t=0),u(t),A.buyMode=t},disableElevation:!0,children:["B",q[h]]})]})]})]})},function(){var t=ct();return Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsx)(v.a,{variant:"contained",onClick:function(){return ot({title:"Backing up data:",description:'Copy this backup code and save it somewhere, or click "save" to download it as a .txt file',buttonText:"Save",buttonAction:function(){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(btoa(JSON.stringify(A)))),t.setAttribute("download","LCsave".concat((new Date).toISOString(),".txt")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},Object(f.jsx)("textarea",{children:btoa(JSON.stringify(A))}))},children:"Back up data"}),Object(f.jsx)(v.a,{variant:"contained",onClick:function(){var t="";ot({title:"Importing backup:",description:'Paste a backup code here and click "Import" to replace your current save with the one in the backup.',buttonText:"Import",buttonAction:function(){localStorage.savedLCdata=JSON.stringify(atob(t)),window.location.reload()}},Object(f.jsx)(R.a,{label:"Backup code",variant:"outlined",value:t,onChange:function(e){return t=e.target.value}}))},children:"Import backup"}),Object(f.jsx)(v.a,{variant:"contained",onClick:function(){return ot({title:"Really delete all data?",description:"Unless you've backed up your data, you won't be able to come back to your current progress. Are you sure?",buttonText:"Delete",buttonAction:function(){delete localStorage.savedLCdata,window.location.reload()}})},children:"Reset all data"}),Object(f.jsx)(U.a,{}),Object(f.jsx)(v.a,{variant:"contained",href:"https://github.com/OceanUwU/letter-clicker",children:"GitHub"}),Object(f.jsx)(v.a,{variant:"contained",href:"https://www.guilded.gg/i/XENaA7op",children:"Guilded"})]})}];function dt(){var t,e=st(),n=a.a.useState(0),r=Object(c.a)(n,2),i=r[0],o=r[1];return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)("span",{className:e.topBar,children:Object(f.jsx)(O,{section:i,setSection:o})}),Object(f.jsx)("div",{className:e.section,children:(t=lt[i],Object(f.jsx)(t,{}))})]})}n(95),n(96);o.a.render(Object(f.jsx)(dt,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.4a52b2e9.chunk.js.map