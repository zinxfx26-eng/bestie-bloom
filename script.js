const garden=document.getElementById("garden");

for(let i=0;i<70;i++){

const star=document.createElement("div");

star.className="spark";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(5+Math.random()*8)+"s";

garden.appendChild(star);

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

for(let i=0;i<25;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=(x+40)+"px";

petal.style.top=(y-140)+"px";

petal.style.setProperty("--x",(Math.random()*200-100)+"px");

petal.style.setProperty("--y",(Math.random()*200-100)+"px");

garden.appendChild(petal);

setTimeout(()=>petal.remove(),1000);

}

const photo=document.createElement("div");

photo.className="photo";

photo.style.left=(x-45)+"px";

photo.style.top=(y-190)+"px";

photo.innerHTML=`<img src="assets/bestie.jpg">`;

garden.appendChild(photo);

const leaf1=document.createElement("div");

leaf1.className="leaf";

leaf1.style.left=(x-22)+"px";

leaf1.style.top=(y-85)+"px";

leaf1.style.transform="rotate(-35deg)";

const leaf2=document.createElement("div");

leaf2.className="leaf";

leaf2.style.left=(x+4)+"px";

leaf2.style.top=(y-45)+"px";

leaf2.style.transform="rotate(140deg)";

garden.append(leaf1,leaf2);

},700);

});
