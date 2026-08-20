const garden=document.getElementById("garden");

for(let i=0;i<60;i++){
const s=document.createElement("div");
s.className="spark";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
s.style.animationDuration=(4+Math.random()*6)+"s";
garden.appendChild(s);
}

document.body.addEventListener("click",(e)=>{

const x=e.clientX;
const y=e.clientY;

const stem=document.createElement("div");
stem.className="stem";
stem.style.left=x+"px";
stem.style.bottom=(window.innerHeight-y)+"px";
garden.appendChild(stem);

setTimeout(()=>{

for(let i=0;i<20;i++){
const p=document.createElement("div");
p.className="petal";
p.style.left=(x+40)+"px";
p.style.top=(y-140)+"px";
p.style.setProperty("--x",(Math.random()*180-90)+"px");
p.style.setProperty("--y",(Math.random()*180-90)+"px");
garden.appendChild(p);
setTimeout(()=>p.remove(),1000);
}

const photo=document.createElement("div");
photo.className="photo";
photo.style.left=(x-42)+"px";
photo.style.top=(y-185)+"px";
photo.innerHTML='<img src="assets/bestie.png">';
garden.appendChild(photo);

const l1=document.createElement("div");
l1.className="leaf";
l1.style.left=(x-22)+"px";
l1.style.top=(y-80)+"px";
l1.style.transform="rotate(-30deg)";

const l2=document.createElement("div");
l2.className="leaf";
l2.style.left=(x+5)+"px";
l2.style.top=(y-40)+"px";
l2.style.transform="rotate(140deg)";

garden.append(l1,l2);

},700);

});
