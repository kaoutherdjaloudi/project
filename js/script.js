function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function () {
    
    var boutonVoirPlus = document.getElementById('voirPlus');
    var boutonVoirMoins = document.getElementById('voirMoins');

    boutonVoirPlus.addEventListener('click', function () {
        afficherPlus(); 
    });

    boutonVoirMoins.addEventListener('click', function () {
        cacherMoins(); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    var boutonVoirPlus = document.getElementById('voirPlus');
    var boutonVoirMoins = document.getElementById('voirMoins');

    boutonVoirPlus.addEventListener('click', function () {
        afficherPlus(); 
    });

    boutonVoirMoins.addEventListener('click', function () {
        cacherMoins(); 
    });
});

function afficherPlus() {
    
    var produitsAAfficher = document.querySelectorAll('.new-arrivals .col-4.hidden');

    produitsAAfficher.forEach(function (produit) {
        produit.classList.remove('hidden');
        produit.classList.add('added'); 
    });

    var boutonVoirPlus = document.getElementById('voirPlus');
    boutonVoirPlus.style.display = (produitsAAfficher.length === 0) ? 'none' : 'block';

    var boutonVoirMoins = document.getElementById('voirMoins');
    boutonVoirMoins.style.display = (document.querySelectorAll('.new-arrivals .col-4.added').length > 0) ? 'block' : 'none';
}

function cacherMoins() {
    
    var produitsAjoutes = document.querySelectorAll('.new-arrivals .col-4.added');

    produitsAjoutes.forEach(function (produit) {
        produit.classList.add('hidden');
        produit.classList.remove('added'); 
    });

    var boutonVoirMoins = document.getElementById('voirMoins');
    boutonVoirMoins.style.display = 'none';

    var boutonVoirPlus = document.getElementById('voirPlus');
    boutonVoirPlus.style.display = 'block';
}

function afficherFormulaire() {
    var formulaire = document.getElementById('avisForm');
    formulaire.style.display = 'block';
}

function ajouterAuPanier(nomProduit, prixProduit) {
    let nombreArticlesPanier = parseInt(document.getElementById('nombre-articles-panier').innerText);
    nombreArticlesPanier += 1;
    mettreAJourNombreArticles(nombreArticlesPanier);
    let montantTotalPanier = parseInt(localStorage.getItem('montantTotalPanier')) || 0;
    montantTotalPanier += prixProduit;
    localStorage.setItem('montantTotalPanier', montantTotalPanier);
    alert(`L'article "${nomProduit}" a été ajouté à votre panier.`);
    transmettreDonneesPanier();
}

function mettreAJourNombreArticles(nombre) {
    document.getElementById('nombre-articles-panier').innerText = nombre;
}

window.onload = function() {
    let nombreArticlesPanier = localStorage.getItem('nombreArticlesPanier') || 0;
    mettreAJourNombreArticles(nombreArticlesPanier);
};

function afficherPanierDansPage() {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    let panierContainer = document.getElementById('panier-container');
    if (panier.length === 0) {
        panierContainer.innerHTML = '<p>Le panier est vide.</p>';
        return;
    }
    let prixTotal = 0;
    let contenuHTML = '<ul>';
    panier.forEach(article => {
        contenuHTML += `<li>${article.nom} - ${article.prix} DA</li>`;
        prixTotal += article.prix;
    });
    contenuHTML += `</ul><p>Prix total : ${prixTotal} DA</p>`;
    panierContainer.innerHTML = contenuHTML;
    document.getElementById('panier-section').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('panier-icon').addEventListener('click', function(event) {
    event.preventDefault();
    afficherPanierDansPage();
});

function redirigerVersPanier() {
    window.location.href = "panier.html";
}

document.getElementById('panier-icon').addEventListener('click', function(event) {
    event.preventDefault();
    redirigerVersPanier();
});
