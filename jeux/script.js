let value = ['pierre', 'papier', 'ciseaux'];
let smiley = document.querySelector('#smiley');
let p1;
let p2;

let imgLeft = document.getElementById("img-left");
let btnP = document.getElementById("btnP");

function pierre() {
    imgLeft.src = "pierre.png";
    p1 = "pierre";
    play();
}
btnP.addEventListener("click", pierre);

let btnP2 = document.getElementById("btnP2");

function paper() {
    imgLeft.src = "papier.png";
    p1 = "papier";
    play();
}
btnP2.addEventListener("click", paper);

let btnCi = document.getElementById("btnCi");

function ciceaux() {
    imgLeft.src = "ciseaux.png";
    p1 = "ciseaux";
    play();


}

btnCi.addEventListener("click", ciceaux);

let p = document.getElementById("tag");

let imgRight = document.getElementById("img-right");

function play() {
    let rand = Math.floor(Math.random() * 3);

    p2 = value[rand];
    imgRight.src = p2 + ".png";

    if (p1 === "pierre") {

        if (p1 === p2) {
            p.innerHTML = " égalité";
            smiley.src = "smileyeg.png";
        } else if (p2 === "ciseaux") {
            p.innerHTML = "gagné";
            smiley.src = "smileyg.png";
        } else {
            p.innerHTML = "perdu";
            smiley.src = "smileyp.png";
        }
    }
    if (p1 === "ciseaux") {

        if (p1 === p2) {
            p.innerHTML = " égalité";
            smiley.src = "smileyeg.png";
        } else if (p2 === "papier") {
            p.innerHTML = "gagné";
            smiley.src = "smileyg.png";
        } else {
            p.innerHTML = "perdu";
            smiley.src = "smileyp.png";
        }
    }

    if (p1 === "papier") {

        if (p1 === p2) {
            p.innerHTML = " égalité";
            smiley.src = "smileyeg.png";
        } else if (p2 === "pierre") {
            p.innerHTML = "gagné";
            smiley.src = "smileyg.png";
        } else {
            p.innerHTML = "perdu";
            smiley.src = "smileyp.png";
        }
    }

}