
//Pour le jeu de memoire:

//Génération d'un nombre aléatoire
function generateRandomNumber(n){
    var randomNumber = Math.floor(Math.random() * (10**n));
    while(randomNumber<10**(n-1)){
        randomNumber= Math.floor(Math.random() * (10**n));
   }
    return randomNumber
}

//compare un nombre n avec le nombre en input et renvoie un booleen
function compare(n){
    a=document.getElementById("myInput").value;
    a=a*1
    n=n*1
    if (a===n){
        return true
    }
    else{
        return false
    }

}
//t=temps
//i=nombre aleatoire
//i1 le numero du niveau actuel
var t=3;
var i ;
var i1=1;

//VARIABLE RELATIVES AUX PARAMETRES
//inp1 est l'input numero 1 des parametre 
//inp2 le numero 2
//but le bouton appliquer
var inp1
var inp2
var but


//game s'active quand le bouton niveau suivant est préssé
async function game(){
    //creation d'un nombre aleatoire adéquat au niveau actuel & mise a jour du numero de niveau
    let nb = document.getElementById("nombre")
    i = generateRandomNumber(i1+1)
    nb.textContent = i
    nb.style.userSelect = "none"

    //mise a jour du bouton save
    let saver = document.getElementById("saveBut")
    saver.disabled = true

    //mise a jour du nombre aléatoire
    let nb1 = document.getElementById("nombre1")
    i1+=1
    nb1.textContent = "Niveau:"+ i1
    nb1.style.fontWeight = "bold";

    //désactivation du boutton "niveau suivant" pendant le jeu et de l'input afin que le joueur ne puisse pas taper le nombre pendant l'affichage
    let  bout = document.getElementById("submit-button")
    bout.disabled = true
    let input = document.getElementById("myInput")
    input.disabled = true



    //pause de t sec
    await pause(t)

    // remplacement du nombre aléatoire par x*? pour cacher le nombre aprés le jeu  & réactivation de l'input
    let hideText = "?"
    for (let j =1; j<i1; j++){
        hideText+="?"

    }
    nb.textContent = hideText
    
    input.disabled = false
}

//CONFIGURATION DU BOUTON "ESSAYER"
//comparaison des deux valeurs si identique -> reactivation de sauvegarder et de niveau suivant
//clear de l'input
function game2(){
    if (compare(i)){
        let  bout = document.getElementById("submit-button")
        bout.disabled = false
        let saver = document.getElementById("saveBut")
        saver.disabled = false

    }
    let input = document.getElementById("myInput")
    input.value = '';

}

//pause creer une pause de t seconde
function pause(t) {
    return new Promise(resolve => setTimeout(resolve, 1000*t));
}

//INTERFACE DE PARAMETRE ET DE MODIFICATION DU JEU DE MEMOIRE
var interfaceParametre=null;
function depliant() {
    if(interfaceParametre===null){
        //console.log("interface affichée");
        //création de la div
        interfaceParametre= document.createElement("div");
        interfaceParametre.className="myDiv"
        
        //création de la premiere input
        inp1 = document.createElement("input");
        inp1.className= 'myInput'
        inp1.type="number"
        inp1.value="3"
        inp1.id="inp1"
        inp1.max=60
        inp1.min=1
        
        //création de la deuxième input
        inp2 = document.createElement("input");
        inp2.className="myInput"
        inp2.type="number"
        inp2.value="1"
        inp2.id="inp2"
        inp2.max=20
        inp2.min=1
        
        //création de la balise text correspondant a inp1
        var p1 = document.createElement("p");
        var contenu3 = document.createTextNode("Temps:");
        p1.appendChild(contenu3)
        p1.className= "myP"

        //création de la balise text correspondant a inp2
        var p2 = document.createElement("p");
        var contenu4 = document.createTextNode("Niveau de départ:");
        p2.appendChild(contenu4)
        p2.className= "myP"

        //réajustement de l'interface
        var p3 = document.createElement("br");
        


        //création du bouton appliquer
        but = document.createElement("button");
        var contenu5 = document.createTextNode("APPLIQUER");
        but.appendChild(contenu5)
        but.className= "trie"
        but.id="apply"
        but.setAttribute("onclick","appliquer()")

        //introduction de tout les élément dans la page
        interfaceParametre.appendChild(p3)
        interfaceParametre.appendChild(p1)
        interfaceParametre.appendChild(inp1)
        interfaceParametre.appendChild(p2)
        interfaceParametre.appendChild(inp2)
        interfaceParametre.appendChild(but)
        document.body.appendChild(interfaceParametre)
    }
    //fermeture dans la fenetre en cas d'ouverture au click précédent
    else{
        document.body.removeChild(interfaceParametre)
        interfaceParametre=null
    }
}
//FONCTION ASSOCIEE AU BOUTON APPLIQUER
function appliquer(){
    //console.log("paraptres appliqués")
    //changement des variable en fonction des valeurs contenues dans les inputs
    i1=document.getElementById("inp2");
    i1=i1.value
    t=document.getElementById("inp1");
    t=t.value
    t=t*1
    i1=i1-1
    console.log(i1,t)
}

//CREATION DU MENU DE CREATION A GAUCHE
var menuNavigation= null
function menu(){
    if(menuNavigation===null){
        menuNavigation= document.createElement("div");
        menuNavigation.className="myDiv2"

//création des boutons pour acceder a chaques pages
        but1 = document.createElement("button");
        var contenu5 = document.createTextNode("SE CONNECTER");
        but1.appendChild(contenu5)
        but1.className= "menuBut"
        but1.setAttribute("onclick","loadSeConnecter()")

        but2 = document.createElement("button");
        var contenu5 = document.createTextNode("A PROPOS");
        but2.appendChild(contenu5)
        but2.className= "menuBut"
        but2.setAttribute("onclick","loadApropos()")

        but3 = document.createElement("button");
        var contenu6 = document.createTextNode("JEU DE REFLEX");
        but3.appendChild(contenu6)
        but3.className= "menuBut"
        but3.setAttribute("onclick","loadJeuDeReflex()")


        but4 = document.createElement("button");
        var contenu5 = document.createTextNode("JEU DE MEMOIRE");
        but4.appendChild(contenu5)
        but4.className= "menuBut"
        but4.setAttribute("onclick","loadJeuDeMemoire()")

        but5 = document.createElement("button");
        var contenu6 = document.createTextNode("TABLEAU DES SCORES MEMO");
        but5.appendChild(contenu6)
        but5.className= "menuBut"
        but5.setAttribute("onclick","loadTableau()")

        but6 = document.createElement("button");
        var contenu7 = document.createTextNode("HELP");
        but6.appendChild(contenu7)
        but6.className= "menuBut"
        but6.setAttribute("onclick","loadHelp()")

        but7= document.createElement("button")
        var contenu8 = document.createTextNode("LEADERBOARD")
        but7.appendChild(contenu8)
        but7.className= "menuBut"
        but7.setAttribute("onclick","loadLeaderboard()")

        //insertion des bouton dans la div menuNavigation
        menuNavigation.appendChild(but4)
        menuNavigation.appendChild(but5)
        menuNavigation.appendChild(but3)
        menuNavigation.appendChild(but7)
        menuNavigation.appendChild(but1)
        menuNavigation.appendChild(but6)
        menuNavigation.appendChild(but2)
        document.body.appendChild(menuNavigation)
    }
    //permet de refemer en cliquant sur le même bouton si le menu est deja ouvert
    else{
        document.body.removeChild(menuNavigation)
        menuNavigation=null
        
    }

}


//FONCTIONS ASSOCIEES AUX BOUTONS DU MENU DE NAVIGATION
function loadApropos(){
    if(window.location.pathname === "/aPropos.html"){
        alert("vous êtes déjà sur l'onglet a propos")
    }
    else{
        window.location.href = "aPropos.html";
    }
}
function loadSeConnecter(){
    if(window.location.pathname === "/seConnecter.html"){
        alert("Vous êtes sur la page de connexion !")
    }
    else{
        window.location.href = "seConnecter.html";
    }
}

function loadJeuDeMemoire(){
    if(window.location.pathname === "/memoire.html"){
        alert("Vous êtes sur la page jeu de memoire !")
    }
    else{
        window.location.href = "memoire.html";
    }
}
function loadJeuDeReflex(){
    if(window.location.pathname === "/reflex.html"){
        alert("Vous êtes sur la page jeu de reflex!")
    }
    else{
        window.location.href = "reflex.html";
    }
}
function loadHelp(){
    if(window.location.pathname === "/help.html"){
        alert("Vous êtes sur la page jeu d'aide!")
    }
    else{
        window.location.href = "help.html";
    }
}
function loadTableau(){
    if(window.location.pathname === "/tableauMemo.html"){
        alert("Vous êtes sur la page jeu de reflex!")
    }
    else{
        window.location.href = "tableauMemo.html";
    }
}
function loadLeaderboard(){
    if(window.location.pathname === "/leaderboard.html"){
        alert("Vous êtes sur la page jeu de reflex!")
    }
    else{
        window.location.href = "leaderboard.html";
    }
}






function init() {
    
    if (!localStorage.getItem('tableauMemo')) {
                 
      
    let scores = [
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
      "000000000000000000000000000000",
    ];
  
    localStorage.setItem('tableauMemo', JSON.stringify(scores));
    console.log(scores);
  }
}
  












// Récupérer le tableau des scores depuis le stockage local
let scores = JSON.parse(localStorage.getItem('tableauMemo'));
//save a compléter
function save(){
    indexColonne=t-1
    indexLigne=i1-1
    
  
  
  // Vérifier si les index sont valides
  if (indexLigne >= 0 && indexLigne < scores.length && indexColonne >= 0 && indexColonne < scores[0].length) {
    // Convertir la chaîne en tableau de caractères
    let ligne = scores[indexLigne].split('');

    // Modifier la valeur à l'index de colonne spécifié
    ligne[indexColonne] = '1';

    // Convertir le tableau de caractères en chaîne
    scores[indexLigne] = ligne.join('');

    // Enregistrer le tableau des scores modifié dans le stockage local
    localStorage.setItem('tableauMemo', JSON.stringify(scores));
    console.log(scores)
    
  }
}
scores = JSON.parse(localStorage.getItem('tableauMemo'));
console.log(scores)

function reinit(){
    localStorage.removeItem('tableauMemo');

   

}


//code documenté jusqu'ici||
