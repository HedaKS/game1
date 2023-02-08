// - Créer un objet joueur1 qui comporte 3 clés (pseudo, experience, niveau).Le joueur1 commence avec 0 en expérience et est au niveau 1.
let joueur1 = {
    pseudo : "tonton",
    experience: 0,
    niveau: 1,
}
// - Créer un objet monstre qui comporte 3 clés (nom, experienceDonnee). Ce premier monstre se nomme "loup" et donne 20 experience.
let loup = {
    nom:"loup des neiges",
    experienceDonnee: 20,
}



// - Créer une fonction qui simule un combat entre le joueur1 et un monstre. Cette fonction prend en entrée un joueur et un monstre. Et en sortie le joueur doit avoir acquéri le nombre d'expérience du monstre. 
function combat(j,m){
    j.experience += m.experienceDonnee;
    if(j.experience >= 100){
        j.experience -= 100;
        j.niveau ++; 
    }
    console.log("experience:",j.experience,"-niveau: ",j.niveau);
}

// Exemple : 
// Je lance ma fonction combat entre joueur1 et le monstre "loup".
// A la fin de ma fonction mon joueur doit avoir reçu 20 experience.
// combat(joueur1,loup); // 20 experience
// combat(joueur1,loup); // 40 experience
// combat(joueur1,loup); // 60 experience
// combat(joueur1,loup); // 80  experience
// combat(joueur1,loup); // 100 experience -> 0 experience et niveau supérieure
// combat(joueur1,loup); // 20 experience

// - Au bout de 100 experience, le niveau du joueur augmente et le total d'experience du joueur est remis à 0. Ajouter cette fonctionnalité à la fin de la fonction combat.


//Créer un nouveau monstre boss qui donne 60 points d'experience
// Faire plusieurs combats avec ce boss. 

let boss = {
    nom:"Le boss",
    experienceDonnee: 60,
}
// combat(joueur1, boss); // 60
// combat(joueur1, boss); // 120 - 100 = 20 experience ; niveau ++ ;
// Ne pas réinitialiser l'expérience à 0 lorsque l'on monte au niveau supérieure mais ne pas dépasser 100.

// Exemple : Le joueur affronte deux fois le boss. Il obtient alors 2 * 60 expériences.
// Son total d'experience est de 120. Il doit alors passer au niveau supérieure mais son compteur d'experience doit être à 20 (et non à 0)

//Ecrire une fonction scenario qui fait combattre le joueur avec 3 loup et 2 boss. A la fin faire afficher le niveau du joueur. 
function scenario(joueur){
    combat(joueur,loup);
    combat(joueur,loup);
    combat(joueur,loup);
    combat(joueur,boss);
    combat(joueur,boss);
    
}


function fightBtn(){
    //TODO : Faire combattre le joueur contre un adversaire aléatoire (soit le loup ou soit le boss)
    //TODO : Mettre a jour le code HTML pour experience et pour le niveau après chaque combat
    let adversaire = Math.random() < 0.5 ? loup : boss;
    document.getElementById("adversaire").innerHTML = adversaire.nom;
    combat(joueur1, adversaire);
    document.getElementById("niveauLabel").innerHTML = joueur1.niveau;
    document.getElementById("experienceProgress").value = joueur1.experience;
    document.getElementById("experienceValue").innerHTML = joueur1.experience;
}
    
document.getElementById("fightBtn").addEventListener("click", fightBtn);






