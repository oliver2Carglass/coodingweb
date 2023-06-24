//JEU DE REFLEX

//intialisation du score a -1
var score = -1;
//fonction recursive associer au bouton commencer puis a chaque cible
function spawn(){
    //incémentation du score & suppression du bouton cliqué
    score+=1
    scoring=document.getElementById("scoring")
    scoring.textContent="SCORE : "+score
    scoring.style.fontWeight= "bold"
    scoring.style.textDecoration = "underline";
    des=document.getElementById("clickMe")
    des.remove()

    //création de la nouvelle cible
    span = document.createElement("img");
    //span.src = "image/zemmour.png"
    serius = span.style.backgroundColor = "red"    
    r1 = Math.floor(Math.random() * (10))
    r2 = Math.floor(Math.random() * (10))
    r1+=1
    r2+=1
    //console.log(r1,r2)
    randomOne=document.querySelector("#Jeu tr:nth-child("+r1+") td:nth-child("+r2+")")
    
    span.style.width="80px"
    span.style.height="80px"
    span.setAttribute("clickable", "")
    span.setAttribute("onclick","spawn()")
    span.id= "clickMe"
    span.style.userSelect = "none"
    span.setAttribute("draggable","false")
    randomOne.appendChild(span);
}


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



//reset du score fonction appelée dans l'html retour a -1 car le premier click genere un point
function resetScoring(){
    score=-1
}


var inp1
var inp2
var but

var interfaceParametre=null;
function depliant() {
    if(interfaceParametre===null){
        //console.log("interface affichée");
        //création de la div
        interfaceParametre= document.createElement("div");
        interfaceParametre.className="myDiv"
        
        
        
        var select = document.createElement("select");
        

        var option1 = document.createElement("option");
        option1.value = "30";
        option1.text = "30";
        option1.selected=true
        option1.style.fontWeight = "bold"
        select.appendChild(option1);

        var option2 = document.createElement("option");
        option2.style.fontWeight = "bold"
        option2.value = "45";
        option2.text = "45";
        select.appendChild(option2);

        var option3 = document.createElement("option");
        option3.style.fontWeight = "bold"
        option3.value = "60";
        option3.text = "60";
        select.appendChild(option3);
        select.id="selection"

        

        //création de la premiere input
        
       
        
        
        

        //création de la balise text correspondant a inp1
        var p1 = document.createElement("p");
        var contenu3 = document.createTextNode("TIME:");
        p1.appendChild(contenu3)
        p1.className= "myP"


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
        interfaceParametre.appendChild(select);

        interfaceParametre.appendChild(but)
        document.body.appendChild(interfaceParametre)
    }
    //fermeture dans la fenetre en cas d'ouverture au click précédent
    else{
        document.body.removeChild(interfaceParametre)
        interfaceParametre=null
    }
}

