const prompt = require("prompt-sync")();

let questOne = {
    question: "Spacewar, un des premiers jeux vidéo, a été développé dans quel but? ",
    answer: ["1.Pour concurrencer Space Invader?", "2.Pour tester les startégies militaires du pentagone?", "3.Pour tester les limites du premier mini ordinateur de la société DEC?", "4.Pour la déconne? "],
    goodAnswer: 3
}
let questTwo = {
    question: "Pong à été crée par: ",
    answer: ["1.Bill Gates", "2.Matthew Gates", "3.Atari", "4.Nintendo"],
    goodAnswer: 3
}
let questThree = {
    question: "Le premier jeu développé par Ubisoft est: ",
    answer: ["1.Rayman", "2.Chessmaster", "3.Prince of Persia", "4.Zombi"],
    goodAnswer: 4
}
let questFour = {
    question: "le créateur de la série Final Fantasy est: ",
    answer: ["1.Hironobu Sakaguchi", "2.Shinji Mikami", "3.Yuka Sakakiki", "4.Tadaki Chichifumi"],
    goodAnswer: 1
}
let questFive = {
    question: "Avant d'être plombier, Mario était: ",
    answer: ["1.Charpentier", "2.Boulanger", "3.Manucure", "4.Chanteur"],
    goodAnswer: 1
}
let questionsTable = [questOne, questTwo, questThree, questFour, questFive]
let choice = ""
let points = 0
let next = ""
for (i = 0; i < questionsTable.length; i++) {
    console.log(questionsTable[i].question)
    questionsTable[i].answer.forEach((el)=>{
        console.log(el);
    })
    choice = parseInt(prompt("Entrez 1, 2, 3 ou 4 pour répondre "))
    while (choice <= 0 || choice > 4)
        choice = parseInt(prompt("Entrez 1, 2, 3 ou 4 pour répondre "))
    if (choice == questionsTable[i].goodAnswer) {
        points++
        console.log("Bonne réponse!!! " + "Vous avez : " + points + " points ")
    }
    else {
        console.log("Mauvaise réponse!!! " + "Vous avez : " + points + " points ")
    }
    console.log("=======================================");
    if (i < questionsTable.length) {

        next = prompt("Appuyez sur Entrer pour passer à la prochaine question ")
    }
    console.log("=======================================");
}


console.log("Le jeu est terminé merci d'avoir Joué!!! ");
