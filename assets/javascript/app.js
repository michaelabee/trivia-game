$(document).ready(function() {

var correctCounter = 0;
var incorrectCounter = 0;
var unansweredQuestions = 0;


var questions = {
    one: "What is a group of kittens called?",
    two: "Why do cats frequently stare with their mouths open?",
    three: "Catnip is to cats as ________ is to humans.",
};

var answers = {
    one: ["a kindle", "a kit", "a cat-Group", "a nook"],
    two: ["to show they are angry (cats are often angry)", "Because they have an extra organ that allows them to taste scent in the air", 
        "to seem more intimidating to potential predators", "Because it helps attract a mate"],
    three: ["alcohol","herbal tea","lsd", "caffeine"],
}

var key = {
    one: [0],
    two: [1],
    three: [2],

}

// var questionOne = {
//     question:"What is a group of kittens called?", 
//     answers: ["a kindle", "a kit", "a cat-Group", "a nook"]
//     // correct answer: kindle
// };

// var questionTwo = {
//     question: "Why do cats frequently stare with their mouths open?",
//     answers:["to show they are angry (cats are often angry)", "Because they have an extra organ that allows them to taste scent in the air", 
//     "to seem more intimidating to potential predators", "Because it helps attract a mate"]
//     // correct answer: extra organ
// };

// var questionThree = {
//     question: "Catnip is to cats as ________ is to humans.",
//     answers: ["alcohol","herbal tea","lsd", "caffeine"]
//     //correct answer lsd
// };

});
