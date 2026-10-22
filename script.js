const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("done"),850));

const liquid=document.getElementById("liquid");
const swatches=document.querySelectorAll(".swatch");
swatches.forEach(button=>button.addEventListener("click",()=>{
  const color=button.dataset.color;
  liquid.style.background=`linear-gradient(120deg, color-mix(in srgb, ${color}, white 35%), ${color} 65%, color-mix(in srgb, ${color}, black 25%))`;
  swatches.forEach(s=>s.classList.toggle("active",s===button));
}));

// Scroll progress subtly scales the hero bottle as the user moves down.
const bottleWrap=document.getElementById("bottleWrap");
const stage=document.getElementById("stage");
window.addEventListener("scroll",()=>{
  const rect=stage.getBoundingClientRect();
  const progress=Math.max(0,Math.min(1,(window.innerHeight-rect.top)/(window.innerHeight+rect.height)));
  bottleWrap.style.setProperty("--scroll-scale",1+progress*.12);
  bottleWrap.style.transform=`translate(-50%,-50%) translateY(${Math.max(0,100-progress*100)}px) scale(${1+progress*.12})`;
},{passive:true});

let bag=0;
const bagCount=document.getElementById("bagCount");
const toast=document.getElementById("toast");
document.querySelectorAll(".quick-add").forEach(button=>button.addEventListener("click",()=>{
  bag++;bagCount.textContent=bag;
  const product=button.closest(".product-card").dataset.name;
  toast.textContent=`${product} added to your bag`;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2200);
}));
document.getElementById("bagBtn").addEventListener("click",()=>{
  toast.textContent=bag?`Your bag has ${bag} item${bag===1?"":"s"}. Checkout is a demo.`:"Your bag is empty.";
  toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2400);
});