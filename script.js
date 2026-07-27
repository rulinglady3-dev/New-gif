const envelope =
document.getElementById("envelope-container");


const letter =
document.getElementById("letter-container");

let questionIndex = 0;


const questions = [

    "Yu, will you be my .......? ",

    "Are you sure?",

    "Really? I prepared this for you ",

    "One more chance...",

    "Will you stay with me? 💖"

];


const noBtn =
document.querySelector(".no-btn");


const yesBtn =
document.querySelector(".yes-btn");


const catImg =
document.getElementById("letter-cat");


const buttons =
document.getElementById("letter-buttons");


const message =
document.getElementById("message");


const finalText =
document.getElementById("final-text");



let yesScale = 1;



// =======================
// ZARF AÇILIŞ
// =======================


envelope.addEventListener("click",()=>{


    envelope.style.animation =
    "fadeOut .8s forwards";


    setTimeout(()=>{


        envelope.style.display="none";


        letter.style.display="flex";


        setTimeout(()=>{


            document
            .querySelector(".letter-window")
            .classList.add("open");


        },100);



    },700);



});






// =======================
// NO KAÇMA
// =======================


function moveNo(){


    // buton ölçüsü

    const btnWidth = noBtn.getBoundingClientRect().width;
    const btnHeight = noBtn.getBoundingClientRect().height;



    // güvenli alan

    const padding = 40;



    const maxX =
    window.innerWidth - btnWidth - padding;


    const maxY =
    window.innerHeight - btnHeight - padding;



    // yeni konum

    const x =
    Math.random() * maxX + padding/2;


    const y =
    Math.random() * maxY + padding/2;



    noBtn.style.position="fixed";

    noBtn.style.left =
    x + "px";


    noBtn.style.top =
    y + "px";


    noBtn.style.zIndex="9999";



    // YES büyümesi

    yesScale +=0.15;


    if(yesScale < 2.5){

        yesBtn.style.transform =
        `scale(${yesScale})`;

    }



}


// PC

noBtn.addEventListener(
"mouseenter",
moveNo
);



// Telefon

noBtn.addEventListener(
"pointerdown",
(e)=>{


    e.preventDefault();


    moveNo();


});






// =======================
// YES
// =======================


yesBtn.addEventListener(
"click",
()=>{


    catImg.src =
    "cat_dance.gif";



    message.textContent =
    "I knew you would say YES ❤️";



    buttons.style.display =
    "none";



    finalText.style.display =
    "block";



    finalText.innerHTML =
    `
    Thank you for making me smile ❤️
    <br><br>
    ✨ You are special ✨
    `;



    createHearts();


});







// =======================
// KALP EFEKTİ
// =======================


function createHearts(){


    for(let i=0;i<30;i++){


        let heart =
        document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.top =
        "100vh";


        heart.style.fontSize =
        (15+Math.random()*25)+"px";


        heart.style.animation =
        "heartFly 3s linear";



        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },3000);



    }


}
