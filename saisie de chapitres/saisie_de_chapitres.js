/*
   --------------------------------------------------------------------------------------------------------
3. Créer une page web permettant de saisir des chapitres. Un bouton permet d'ajouter des chapitres.
   Un bouton permet d'ajouter des chapitres, un autre de les supprimer. Lors de la prise de focus d'un
   chapitre, celui-ci est agrandi. La touche "-" permet de supprimer tous les chapitres après confirmation.
   La touche "+" permet d'ajouter 10 chapitres. Ces touches ne font rien lors de l'édition d'un chapitre !
   --------------------------------------------------------------------------------------------------------


document.getElementById("btnAjoutChapitre").addEventListener("click", addOneChapter);
document.addEventListener("keypress", deleteAllChapter);
document.addEventListener("keypress", createTenChapters);

function createTenChapters(e){
    if ((e.charCode == 43) && if(pressTouche==false) && (confirm("Êtes vous sur(e) de vouloir ajouter 10 chapitres?"))){
        for(var i = 1; i <= 10; i++){
            addOneChapter();
        }
    }
    
}

function deleteAllChapter(e){
    if ((e.charCode == 45) && if(pressTouche==false) && (confirm("Êtes vous sur(e) de vouloir supprimer tous les chapitres?"))){
        document.getElementById("listeChapitres").innerHTML = "";

    }
}

function dezoomTextarea(e){
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
    e.target.style.position = "initial";
}


var chapNumber = 0;
function addOneChapter(e) {
    chapNumber += 1;
    var newDiv = document.createElement("div");
    newDiv.id = "chapter" + chapNumber;
    var newArea = document.createElement("textarea");
    newArea.className = "chapterSizing";
    newDiv.appendChild(newArea);
    var newButton = document.createElement("button");
    newButton.innerHTML = "Supprimer";
    newButton.setAttribute("numChapitre", chapNumber);

    newButton.addEventListener("click", delOneChapter);

    newDiv.appendChild(newButton);
    document.getElementById("listeChapitres").appendChild(newDiv);
}

function delOneChapter(e) {
    var numChapitre = e.target.getAttribute("numChapitre")
    var divASupprimer = document.getElementById("chapter" + numChapitre);
    divASupprimer.parentNode.removeChild(divASupprimer);
    alert("Suppression");
}

var pressTouche = false;


   --------------------------------------------------------------------------------------------------------
4. Créer une page web pour une mini-concours. Le concours demande à l'utilisateur de répondre à 3 questions.
   Pour chaque question, on a le choix dans un select de l'année 1900 à 2019. Lorsqu'on valide le formulaire,
   on met en rouge les select qui ont une année fausse.
   --------------------------------------------------------------------------------------------------------
*/

function select {
    document.getElementById
}
   
var listeSelect = ["reponse1","reponse2","reponse3"];
for(var j = 0; j < listeSelect.length; j++){
for (var i = 1900; i <= 2019; i++){
    var option = documennt.createElement("option");
    option.innerHTML = i;
    option.value = i;
    document.getElementById(listeSelect[j]).appendChild(option)
    }



fuction checkForm(e){
    var labelFirstYear = document.getElementById("reponse1");
    var labelSpaceInv = document.getElementById("reponse2");
    var labelPacMan = document.getElementById("reponse3");
    var trueColor = "initial";
    var falseColor = "red";
    var falseAnswer = true;
    var goodResponse1 = 1947;
    if (labelFirstYear.value !=1947){
        labelFirstYear.style.backgroundColor = falseColor;
    } else {
        labelFirstYear.style.backgroundColor = trueColor
    }
    if (labelSpaceInv.value !=1978){
        labelSpaceInv.style.backgroundColor = falseColor;
    } else {
        labelSpaceInv.style.backgroundColor = trueColor
    }
    if (labelPacMan.value !=1980){
        labelPacMan.style.backgroundColor = falseColor;
    } else {
        labelPacMan.style.backgroundColor = trueColor
    }
    if(!(falseAnswer)){
        e.preventDefault()
    } else {
        alert("wow tu est très fort")
    }
}
     event.preventDefault()

document.getElementById("envoyer").submit();