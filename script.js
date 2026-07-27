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


    const maxX =
    window.innerWidth - noBtn.offsetWidth - 30;


    const maxY =
    window.innerHeight - noBtn.offsetHeight - 30;



const x =
Math.max(
    20,
    Math.min(
        Math.random() * maxX,
        window.innerWidth - noBtn.offsetWidth - 20
    )
);


const y =
Math.max(
    20,
    Math.min(
        Math.random() * maxY,
        window.innerHeight - noBtn.offsetHeight - 20
    )
);


   noBtn.style.position="fixed";
    
    noBtn.style.zIndex="999";

    noBtn.style.left =
    x+"px";

    noBtn.style.top =
    y+"px";

    // SORU DEĞİŞTİRME

questionIndex++;


if(questionIndex < questions.length){


    message.style.opacity="0";


    setTimeout(()=>{


        message.textContent =
        questions[questionIndex];


        message.style.opacity="1";


    },300);


}


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
