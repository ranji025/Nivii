/* ============================================
   NIVII BEAUTY CORNER
============================================ */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const header = document.querySelector("header");
    const hero = document.querySelector(".hero");

    if (loader) {
        const tl = gsap.timeline();
        tl.from("#loader h2", {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(loader, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                loader.style.display = "none";
            }
        });
    }

    if (header) {
        gsap.from("header", { y: -80, opacity: 0, duration: 0.8 });
    }

    if (hero) {
        gsap.from(".hero .left", { x: -80, opacity: 0, duration: 0.9 });
        gsap.from(".hero .right", { x: 80, opacity: 0, duration: 0.9 });
    }
});

/* ============================================
   AOS
============================================ */

AOS.init({

    duration:1000,

    once:false,

    easing:"ease-in-out"

});

/* ============================================
   SMOOTH SCROLL
============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

/* ============================================
   SCROLL PROGRESS BAR
============================================ */

const progress=document.createElement("div");

progress.className="progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=

document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const value=

(scroll/height)*100;

progress.style.width=value+"%";

});

/* ============================================
   NAVBAR BACKGROUND
============================================ */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(255,255,255,.92)";

header.style.boxShadow="0 12px 30px rgba(0,0,0,.15)";

}else{

header.style.background="rgba(255,255,255,.55)";

header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}

});

/* ============================================
   BUTTON HOVER
============================================ */

document.querySelectorAll(".btn,.btn2")

.forEach(button=>{

button.addEventListener("mouseenter",()=>{

gsap.to(button,{

scale:1.05,

duration:.3

});

});

button.addEventListener("mouseleave",()=>{

gsap.to(button,{

scale:1,

duration:.3

});

});

});

/* ============================================
   SERVICE CARD ANIMATION
============================================ */

document.querySelectorAll(".card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card,{

rotationY:8,

rotationX:-8,

scale:1.05,

duration:.5

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationY:0,

rotationX:0,

scale:1,

duration:.5

});

});

});

/* ============================================
   HERO TEXT ANIMATION
============================================ */

gsap.from(".hero h3",{

opacity:0,

y:40,

duration:1,

delay:1

});

gsap.from(".hero h1",{

opacity:0,

y:50,

duration:1.2,

delay:1.3

});

gsap.from(".hero p",{

opacity:0,

y:60,

duration:1.2,

delay:1.6

});

gsap.from(".buttons",{

opacity:0,

y:50,

duration:1,

delay:2

});

/* ============================================
   SECTION REVEAL
============================================ */

gsap.utils.toArray("section").forEach(section=>{

gsap.from(section,{

opacity:0,

y:80,

duration:1,

scrollTrigger:{

trigger:section,

start:"top 80%"

}

});

});
gsap.registerPlugin(ScrollTrigger);
/* ==========================================
   PART 3B-1
   Premium Cursor, Sparkles, Hearts, Flowers
========================================== */

/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor = document.createElement("div");
cursor.className = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.08,
        ease: "power2.out"
    });

});

/* ===========================
   SPARKLES
=========================== */

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.animationDuration =
        1 + Math.random() * 2 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

setInterval(createSparkle, 180);

/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.opacity =
        .3 + Math.random() * .5;

    heart.style.animationDuration =
        6 + Math.random() * 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 900);

/* ===========================
   FLOWER PETALS
=========================== */

const flowers = [

"🌸",

"🌺",

"🌷",

"💮"

];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
        Math.random() * window.innerWidth + "px";

    flower.style.top = "-50px";

    flower.style.fontSize =
        20 + Math.random() * 25 + "px";

    flower.style.opacity =
        .5 + Math.random() * .5;

    flower.style.animationDuration =
        6 + Math.random() * 5 + "s";

    flower.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 12000);

}

setInterval(createFlower, 500);

/* ===========================
   CURSOR SCALE
=========================== */

document.querySelectorAll("a,button,.btn,.btn2,.card")

.forEach(item => {

    item.addEventListener("mouseenter", () => {

        gsap.to(cursor, {

            scale: 2,

            background: "#E75480",

            duration: .2

        });

    });

    item.addEventListener("mouseleave", () => {

        gsap.to(cursor, {

            scale: 1,

            background: "#ffffff",

            duration: .2

        });

    });

});

/* ==========================================
   PART 3B-2
   Mouse Trail, Background Particles,
   Parallax & Premium Effects
========================================== */

/* ===========================
   MOUSE TRAIL
=========================== */

const trailContainer = document.createElement("div");
trailContainer.style.position = "fixed";
trailContainer.style.inset = "0";
trailContainer.style.pointerEvents = "none";
trailContainer.style.zIndex = "9998";
document.body.appendChild(trailContainer);

document.addEventListener("mousemove", (e) => {

    const dot = document.createElement("span");

    dot.style.position = "absolute";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.borderRadius = "50%";
    dot.style.background = "#E75480";
    dot.style.opacity = ".8";
    dot.style.boxShadow = "0 0 12px hotpink";

    trailContainer.appendChild(dot);

    gsap.to(dot, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => dot.remove()
    });

});

/* ===========================
   FLOATING BLOBS
=========================== */

document.querySelectorAll(".blur-circle").forEach((blob, index) => {

    gsap.to(blob, {
        x: index % 2 === 0 ? 80 : -80,
        y: index % 2 === 0 ? -50 : 50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});

/* ===========================
   HERO PARALLAX
=========================== */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    gsap.to(".hero .left", {
        x: -x,
        y: -y,
        duration: 0.8
    });

    gsap.to(".hero .right", {
        x: x,
        y: y,
        duration: 0.8
    });

});

hero.addEventListener("mouseleave", () => {

    gsap.to(".hero .left", {
        x: 0,
        y: 0,
        duration: 1
    });

    gsap.to(".hero .right", {
        x: 0,
        y: 0,
        duration: 1
    });

});

/* ===========================
   NAVBAR LINK HOVER
=========================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        gsap.to(link, {
            y: -3,
            duration: 0.2
        });

    });

    link.addEventListener("mouseleave", () => {

        gsap.to(link, {
            y: 0,
            duration: 0.2
        });

    });

});

/* ===========================
   HERO BUTTON PULSE
=========================== */

gsap.to(".btn", {

    scale: 1.04,
    duration: 1,
    repeat: -1,
    yoyo: true

});

/* ===========================
   SERVICE CARDS FLOAT
=========================== */

document.querySelectorAll(".card").forEach((card, i) => {

    gsap.to(card, {

        y: i % 2 === 0 ? -8 : 8,

        duration: 2 + (i * .2),

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});

/* ===========================
   SIMPLE PARTICLE CANVAS
=========================== */

const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

for (let i = 0; i < 80; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - .5) * .4,
        dy: (Math.random() - .5) * .4

    });

}

function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(231,84,128,.35)";
        ctx.fill();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();

/* ===========================
   SCROLL REVEAL
=========================== */

gsap.utils.toArray(".card, #about, #gallery, #contact").forEach(item => {

    gsap.from(item, {

        opacity: 0,
        y: 60,

        scrollTrigger: {

            trigger: item,
            start: "top 85%"

        }

    });

});

/* ===========================
   MOBILE MENU PLACEHOLDER
=========================== */

const menuBtn = document.querySelector(".menu-toggle");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        document.querySelector("nav").classList.toggle("active");

    });

}