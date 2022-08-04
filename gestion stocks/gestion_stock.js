////Gestion de stock
var ListeProduit = [];

function Produit(ref, nom, prix, qte) {
    this.ref = ref;
    this.nom = nom;
    this.prix = prix;
    this.qte = qte;
    this.decrire = function() {
        return "Ref: " + this.ref + "\n Nom: " + this.nom + "\n Prix: " + this.prix + "€ \n Qté: " + this.qte;
    }
}

function affichageProduit(ref) {
    affichageListe = "";
    for (var i = 0; i < ListeProduit.length; i++) {
        affichageListe += (i + 1) + ":" + ListeProduit[i].nom + " " + ListeProduit[i].prix + "€\n";
    }
    return affichageListe;
}

function rechercheProduitRef(ref) {
    for (var i = 0; i < listeProduit.length; i++) {
        if (listeProduit[i].ref == ref) {
            return listeProduit[i].decrire();
        }
    }
    return "";
}

function rechercheProduitNom(nom) {
    for (var i = 0; i < listeProduit.length; i++) {
        if (listeProduit[i].nom == nom) {
            return listeProduit[i].decrire();
        }
    }
    return "";
}
var listeProduit = [];

var choixUser = 0;
while (choixUser != 8) {
    var menu = "1: Ajouter un produit \n";
    menu += "2: Recherche un produit par ref\n";
    menu += "3: Recherche un produit par nom\n";
    menu += "4: Recherche un produit par intervalle de prix\n";
    menu += "5: Modifier un produit\n";
    menu += "6: Supprimer un produit\n";
    menu += "7: Afficher un produit\n";
    menu += "8: Quitter le Menu";
    choixUser = Number(prompt(menu));
    switch (choixUser) {
        case 1: //Ajouter un produit

            var new_ref = "";
            while ((new_ref == "") || ((listeProduit.length > 0) && (rechercheProduitRef(new_ref) != ""))) {
                new_ref = prompt("Entrer la référence du produit.");
            }
            var new_nom = prompt("Entrez le nom du produit");
            var new_prix = -1;
            while ((new_prix < 0) || (isNaN(new_prix))) {
                new_prix = Number(prompt("Entrez un prix pour ce produit"));
            }
            var newquantite = -1
            while ((newquantite < 0) || (isNaN(newquantite))) {
                newquantite = Number(prompt("Entrez la quantité de ce produit à stocker"));
            }
            var new_produit = new Produit(new_ref, new_nom, new_prix, newquantite)
            listeProduit.push(new_produit);
            console.log(listeProduit)

            break;
        case 2:
            var saisieRef = prompt("Saisir la référence du produit");
            var affichageProduitRef = rechercheProduitRef(saisieRef);

            if (affichageProduitRef == "") {
                alert("Aucun produit trouvé");
            } else {
                alert(rechercheProduitRef(saisieRef));
            }
            break;

        case 3:
            var saisieNom = prompt("Saisir le Nom du produit");
            alert(rechercheProduitRef(saisieNom));

            break;
        case 4:
            var SasieIntervalle1 = Number("Saisir le prix min");
            var SaisieIntervalle2 = Number("Saisir le prix max");


            break;
        case 5:
            var refArechercher = prompt("Entrez la référence du produit à modifier");
            var indiceProduit = rechercheProduitIndice(refArechercher);
            if (indiceProduit != -1) {
                liste_produits(indiceProduit).ref = prompt("Entrez la nouvelle référence du produit");
                liste_produits(indiceProduit).nom = prompt("Entrez le nouveau nom du produit");
            } else {
                alert("Ce produit n'existe pas.");
            }
            break;
        case 6:
            var refARechercher = prompt("Entrez la référence du produit à supprimer");
            var indiceProduit = rechercheProduitIndiceRef(refARechercher);
            if (indiceProduit != -1) {
                liste_produits.splice(indiceProduit, 1);
                alert("Le produit a été supprimé")
            } else {
                alert("Ce produit n'existe pas.")
            }

            break;
        case 7:
            var produitsDeLaListe = "";
            for (var i = 0; i < listePorduits.length; i++) {
                produitsDeLaListe += "Nom du produit : " + listeProduits[i].nom + ", Référence du produit : " + listeProduits[i].ref + "\n";
            }
            if (listeProduits.length == 0) {
                alert("Aucun produit disponible !")
            } else {
                alert(produitsDeLaListe);
            }
            break;
        case 8:
            break;
        default:
            alert("Erreur de saisie");
    }
}


