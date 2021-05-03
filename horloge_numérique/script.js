var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function() {
    // je declare des variable pour être utiliser après:
    var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle:
    today = new Date();

    // Récupérer l'anneé:
    annee = today.getFullYear();

    // Récupérer le mois :
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "août", "septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()];

    jourNUmero = today.getDate();

    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; //getday donne donne index 6,donc samedi


    //afficher les heures ,minutes et secondes toujours avec deux chiffres:

    deuxChiffres = function(element) {
        if (element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures:
    heures = deuxChiffres(today.getHours());

    // Récupérer les minutes
    minutes = deuxChiffres(today.getMinutes());

    // Récupérer les secondes

    secondes = deuxChiffres(today.getSeconds());

    // affichage dans nos DIV du HTML:
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    // Lancer la fonction affichage heures toutes les 1000ms,soit toute les secondes:

    setTimeout(affichageHeure, 1000);

}

// Lancer la fonction une fois au début
affichageHeure();