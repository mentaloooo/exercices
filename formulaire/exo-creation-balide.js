

//Simuler un événement
//On va simuler un clic sur un élément de la page


//var evt = document.createEvent("MouseEvents");
//evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, false, false, false, false, 0, null);
//document.getElementById("bt1").dispatchEvent(evt);


//------------------------------------------------

// 1. Ecrire un script qui vérifie un formulaire et affiche un message si les champs ne sont pas remplis (au moins 3 champs)

//------------------------------------------------


function checkFormulaire(e){
    
//Récupérer la valeur des champs

//Si un des champs est vide, alors on bloque l'envoi du formulaire
var champNom = document.getElementsByName("pseudo")[0].nodeValue;
var champAge = document.getElementsByName("age")[0].nodeValue;
var champMail = document.getElementsByName("email")[0].nodeValue;

if((champNom == "") || (champAge == "") || (champMail == "")){
    alert("Remplir tous les champs tous les")
}


}
document.getElementById("monForm").addEventListener("submit", checkFormulaire);


//2. Dans un formulaire, un champs propose le choix entre 3 codes postaux (24000, 24100, 24130). Lorsqu'on choisis un code postal,
//   un autre champs est chargé avec la liste des villes correspondantes. Les codes postaux et les villes associées sont stockées 
//   dans un tableau js.

//24000: Périgueux
//24100: Bergerac, Saint-Laurent-des-Vignes, Creysse, Lembras
//24130: Monfaucon, Laveyssière, Ginestet, Saint-Georges-Blancaneix, Prigonrieux, Fraisse, La Force, Lunas, Le Fleix, Saint-Pierre-d'Eyraud, Bosset



var tabCodePostaux = [];
tabCodePostaux["24000"] = ["Périgueux"];
tabCodePostaux["24100"] = ["Bergerac", "Saint-Laurent-des-Vignes", "Creysse", "Lembras"];
tabCodePostaux["24130"] = ["Monfaucon", "Laveyssière", "Ginestet", "Saint-Georges-Blancaneix", "Prigonrieux", "Fraisse", "La Force", "Lunas", "Le Fleix", "Saint-Pierre-d'Eyraud", "Bosset"];

function chargerVilles(e){
    //Récupérer le code postal choisi
    var monSelectCP = document.getElementsByName("codepostal")[0];
    var codepostal = monSelectCP.options[monSelectCP.selectedIndex].value;

    document.getElementsByName("villes")[0].innerHTML = ""; //Supprime les options précédentes ajoutées
    if (codepostal == ""){return;}

    //Parcourir le tableau correspondant au code postal pour créer des options et les intégrer au 2ème select
    for(var i = 0; i < tabCodePostaux[codepostal].length; i++){ //Parcours des villes en fonction du code postal
        var optionVille = document.createElement("option"); //Crée une option
        //Défini l'attribut "value" de l'option avec une ville
        optionVille.setAttribute("value", tabCodePostaux[codepostal][i]);
        //Défini le contenu de l'option avec une ville
        optionVille.innerHTML = tabCodePostaux[codepostal][i];      
        //J'insère l'option ville
        document.getElementsByName("villes")[0].appendChild(optionVille);
    }
}

document.getElementsByName("codepostal")[0].addEventListener("change", chargerVilles);


//----------------------------------------------------------------------------------------------------------------------------------------------------
//  3. Créer une page web permettant de saisir des chapitres. Un bouton permet d'ajouter des chapitres, un autre de les supprimer. Lors de la prise de
//  focus d'un chapitre, celui-ci est agrandi. La touche "-" permet de supprimer tous les chapitres après confirmation. La touche "+" permet d'ajouter 
//  10 chapitres. Ces touches ne font rien lors de l'édition d'un chapitre !
//----------------------------------------------------------------------------------------------------------------------------------------------------