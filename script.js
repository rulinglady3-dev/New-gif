const envelope =
document.getElementById("envelope-container");


const letter =
document.getElementById("letter-container");

let questionIndex = 0;

let typingTimer;

let questionDelay;


const questions = [

    "YUUU, Do you love me ? ❤️",

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

const finalQuestion =
document.getElementById("final-question");

const finalYesButtons =
document.querySelectorAll(".final-yes");


const finalGif =
document.getElementById("final-gif");


const finalLinkText =
document.getElementById("final-link-text");


const finalLink =
document.getElementById("final-link");


const letterCat =
document.getElementById("letter-cat");


const finalCat =
document.getElementById("final-cat");


const finalMessage =
document.getElementById("final-message");


const finalButtons =
document.getElementById("final-buttons");


const linkMessage =
document.getElementById("link-message");

let yesScale = 1;


// =======================
// ZARF AÇILIŞ
// =======================

let envelopeOpened = false;

function openEnvelope(){

    if(envelopeOpened) return;

    envelopeOpened = true;

    envelope.style.animation =
    "fadeOut .8s forwards";

    setTimeout(()=>{

        envelope.style.display = "none";

        letter.style.display = "flex";

        setTimeout(()=>{

            document
            .querySelector(".letter-window")
            .classList.add("open");

        },100);

    },700);

}


// Bilgisayar + telefon + iPad

envelope.addEventListener(
    "click",
    openEnvelope
);

envelope.addEventListener(
    "pointerup",
    openEnvelope
);

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
    Math.max(10, box.width - btn.width - 20);



    const maxY =
    Math.max(10, box.height - btn.height - 20);



    const x =
    Math.random()*maxX;



    const y =
    Math.random()*maxY;



    noBtn.style.position="absolute";
    noBtn.style.touchAction="none";


    noBtn.style.left =
    x+"px";


    noBtn.style.top =
    y+"px";



    const animations=[

        "rotate(15deg)",
        "rotate(-15deg)",
        "scale(.8)",
        "rotate(360deg)"

    ];



    noBtn.style.transform =
    animations[
        Math.floor(Math.random()*animations.length)
    ];



    questionIndex++;


    if(questionIndex < questions.length){

        typeText(
            message,
            questions[questionIndex]
        );

    }



    yesScale +=0.15;



    if(yesScale < 2.5){

        yesBtn.style.transform=
        `scale(${yesScale})`;

    }


}

// PC

noBtn.addEventListener(
"mouseenter",
()=>{

    moveNo();

});


noBtn.addEventListener(
"pointerdown",
(e)=>{

    e.preventDefault();

    moveNo();

});

// =======================
// YES
// =======================


yesBtn.addEventListener("pointerdown",(e)=>{

e.preventDefault();


    catImg.src="cat_dance.gif";


    message.textContent =
    "I knew you would say YES ❤️";


    buttons.style.display="none";


    finalText.style.display="block";



    setTimeout(()=>{


        // eski sayfayı temizle

        letterCat.style.display="none";

        catImg.remove();

message.remove();

buttons.remove();

finalText.remove();


// yeni sayfa

finalQuestion.style.display="flex";


        finalCat.style.display="none";


        finalMessage.textContent =
        "Would you like to spend a little more time with me? ❤️";


    },3000);

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

finalYesButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        // eski soru ve butonları temizle

        finalMessage.style.display="none";

        finalButtons.style.display="none";


        // gif ve link ekranı

        finalGif.style.display="block";

        finalLinkText.style.display="block";

        finalLink.style.display="block";


    });


});
// =====================================
// RESPONSIVE SCREEN UPDATE
// PC + iPAD + PHONE
// =====================================


function resizeLetter(){


    const windowBox =
    document.querySelector(".letter-window");


    if(!windowBox) return;



    const w = window.innerWidth;
    const h = window.innerHeight;



    // küçük ekranlar

    if(w < 600){


        windowBox.style.width =
        "92vw";


        windowBox.style.height =
        "85dvh";


    }


    // iPad

    else if(w <= 1024){


        windowBox.style.width =
        "380px";


        windowBox.style.height =
        "520px";


    }


    // PC

    else{


        windowBox.style.width =
        "380px";


        windowBox.style.height =
        "520px";


    }



}




window.addEventListener(
"resize",
resizeLetter
);



window.addEventListener(
"orientationchange",
()=>{


    setTimeout(()=>{


        resizeLetter();


    },300);


});



resizeLetter();
