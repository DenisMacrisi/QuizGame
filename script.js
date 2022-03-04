
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // arata intrebare
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // arata variante
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Intrebarea " + currentQuestionNumber + " din " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Scor</h1>";
    gameOverHTML += "<h2 id='score'> Scorul tau este: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
   
    
};

    // intrebari si raspunsuri
    var questions = [

    new Question("Cate laturi are un Hexagon ?", ["4", "6","8", "12"], "6"),

    new Question("Intre ce ani a avut loc Primul Razboi Mondial ?", ["1914-1918", "1912-1914","1916-1920", "1918-1922"], "1914-1918"),
    
    new Question("Cate strofe are poezia Luceafarul scrisa de Mihai Eminescu ?", ["98", "100","101", "96"], "98"),

    new Question("Cate vertebre are gatul unei girafe", ["14", "21","28", "7"], "7"),
    
    new Question("Care dintre urmatorii scriitori a ocupat functia de Ministru al Culturii ?", ["Marin Sorescu", "Gellu Naum","Vasile Voiculescu", "George Topirceanu"], "Marin Sorescu"),
    
    new Question("Ce echipa de fotbal a castigat Cupa Mondiala in 2006 ?", ["Franta", "Italia","Spania", "Germania"], "Italia"),
    
    new Question("Care este cel mai lung fluviu din Europa ?", ["Volga", "Nil","Dunarea", "Ron"], "Volga"),

    new Question("In ce tara s-a nascut Adolf Hitler ?", ["Austria", "Germania","Polonia", "Anglia"], "Austria"),

    new Question("Care este capitala Turciei ?", ["Antalya", "Istanbul","Bodrum", "Ankara"], "Ankara"),

    new Question("Care este cel mai lung os din corpul uman ?", ["Tibia", "Femurul","Sternul", "Scarita"], "Femurul"),



];




var quiz = new Quiz(questions);


populate();

