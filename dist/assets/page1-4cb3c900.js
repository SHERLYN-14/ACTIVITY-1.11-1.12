import{S as p,T as b,M as f,a as d,C as g,P as v,W as x,b as M}from"./three.module-206db482.js";/* empty css              */import{O as E}from"./OrbitControls-b2284f51.js";import{F,T as k}from"./TextGeometry-fc0e7d0b.js";import{G as z}from"./lil-gui.esm-1e0f7d72.js";new z;const o=document.querySelector("canvas.webgl"),S=new F,i=new p,y=new b,L=y.load("textures/matcaps/5.png"),e={width:window.innerWidth,height:window.innerHeight};S.load("/fonts/helvetiker_regular.typeface.json",r=>{const a=new f({matcap:L}),c=new k("Claud Gerona",{font:r,size:.5,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});c.center();const h=new d(c,a);i.add(h);const u=new g(.4,.8,64,1,!0);for(let l=0;l<100;l++){const n=new d(u,a);n.position.x=(Math.random()-.5)*10,n.position.y=(Math.random()-.5)*10,n.position.z=(Math.random()-.5)*10,n.rotation.x=Math.random()*Math.PI,n.rotation.y=Math.random()*Math.PI,i.add(n)}});const t=new v(75,e.width/e.height,.1,100);t.position.x=1;t.position.y=1;t.position.z=2;i.add(t);const m=new E(t,o);m.enableDamping=!0;window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,s.setSize(e.width,e.height),t.updateProjectionMatrix()});window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitFullscreenElement():o.requestFullscreen?o.requestFullscreen():o.webkitFullscreenElement&&o.webkitFullscreenElement()});const s=new x({canvas:o});s.setSize(e.width,e.height);s.render(i,t);const T=new M,w=()=>{T.getElapsedTime(),m.update(),s.render(i,t),window.requestAnimationFrame(w)};w();
//# sourceMappingURL=page1-4cb3c900.js.map