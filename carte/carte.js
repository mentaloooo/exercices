function AffichageCarte(){

	for(var i=0; i < 10; i++){
		var ligne = document.createElement("div");
		document.getElementById("carte").appendChild(ligne);
		for(var j=0; j < 10; j++){
			var carreau = document.createElement("div");
			carreau.setAttribute("y", i + 1);
			carreau.setAttribute("x", j + 1);
			carreau.addEventListener("mouseover", divPosition);
			ligne.appendChild(carreau);
		}
		document.getElementById("carte").appendChild(ligne);
	}
}

function divPosition(e){
	document.getElementById("legende").innerHTML = "X: " + e.target.getAttribute("x") + " " + "Y: " + e.target.getAttribute("y");
}
AffichageCarte();