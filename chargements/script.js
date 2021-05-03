var pourcent = document.querySelector('.pourcentage');
var progresse = document.querySelector('.progresse');
var text = document.querySelector('.text');
var cont = 4;
var pourct = 16;
var loading = setInterval(animate, 50);

function animate() {
    if (cont == 100 && pourct == 400) {
        pourcent.classList.add('text-blink');
        text.style.display = "block";
        clearInterval(loading);
    } else {
        pourct = pourct + 4;
        cont = cont + 1;
        progresse.style.width = pourct + 'px';
        pourcent.textContent = cont + ' % ';
    }
}