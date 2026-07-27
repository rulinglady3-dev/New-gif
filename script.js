const envelope =
document.getElementById("envelope-container");


const letter =
document.getElementById("letter-container");


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



// Zarf açılması

envelope.addEventListener("click",()=>{


    envelope.style.display="none";

    letter.style.display="flex";


    setTimeout(()=>{

        document
        .querySelector(".letter-window")
        .classList.add("open");

    },50);


});





// No kaçması

function moveNo(){


    let x =
    Math.random() *
    (window.innerWidth - 120);


    let y =
    Math.random() *
    (window.innerHeight - 120);



    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";



    // Yes büyümesi

    yesScale +=0.2;



    if(yesScale <= 2.5){

        yesBtn.style.transform =
        `scale(${yesScale})`;

    }


}





// Bilgisayar

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





// Yes

yesBtn.addEventListener("click",()=>{


    catImg.src="cat_dance.gif";


    message.textContent =
    "I knew you would say YES ❤️";



    buttons.style.display="none";


    finalText.style.display="block";


});
