const envelope =
document.getElementById("envelope-container");


const letter =
document.getElementById("letter-container");

let questionIndex = 0;

let typingTimer;

let questionDelay;


const questions = [

    "YUUU, will you be my(Think about whatever you want)?",

    "LOVE ME,HUG ME,KİSS MEEE",

    "YUUUU,aRe YoU sUrEeeeee",

    "One more chance pleasee",

    "Will you stay with meee?"

];

function typeText(element, text){


    clearInterval(typingTimer);


    element.style.opacity="0";


    setTimeout(()=>{


        element.textContent="";


        let i = 0;


        element.style.opacity="1";



        typingTimer = setInterval(()=>{


            element.textContent += text[i];


            i++;



            if(i >= text.length){


                clearInterval(typingTimer);


            }


        },60);



    },300);


}

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


    const letterBox =
    document.querySelector(".letter-window");


    const box =
    letterBox.getBoundingClientRect();


    const btn =
    noBtn.getBoundingClientRect();



    const maxX =
    box.width - btn.width - 40;


    const maxY =
    box.height - btn.height - 40;



    const x =
    Math.random() * maxX + 20;


    const y =
    Math.random() * maxY + 20;



    noBtn.style.position="absolute";


    noBtn.style.left =
    x + "px";


    noBtn.style.top =
    y + "px";

    const animations = [

    "rotate(15deg)",

    "rotate(-15deg)",

    "scale(0.8)",

    "translateY(-20px)",

    "rotate(360deg)"

];


const randomAnimation =
animations[
Math.floor(
Math.random() * animations.length
)
];


noBtn.style.transform =
randomAnimation;



    // soru değiştirme

    questionIndex++;


    if(questionIndex < questions.length){

    typeText(
        message,
        questions[questionIndex]
    );

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
()=>{

    moveNo();

});



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
    Now is the time to huggggg
    <br><br>
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
