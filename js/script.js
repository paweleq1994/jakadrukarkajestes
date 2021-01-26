const questions = [
    {
        "question": "Jak często budzisz w nocy swojego właściciela?",
        "answer1": "Wcale",
        "answer1Total": "1",
        "answer2": "1-3 razy",
        "answer2Total": "2",
        "answer3": "Minimum 4 razy. My atencjuszki tak mamy",
        "answer3Total": "3"
    },

    {
        "question": "Twój pańcio/pańcia potrzebuje coś na szybko wydrukować. Co robisz?",
        "answer1": "Drukuje od razu. Czas mojego właściciela jest bardzo ważny",
        "answer1Total": "1",
        "answer2": "Trochę pomarudzę, ale w koncu wydrukuję",
        "answer2Total": "2",
        "answer3": "CZARNO-BIAŁY WYDRUK? HAHAHA! DAWAJ C Y A N ! ! ! ",
        "answer3Total": "3"
    },

    {
        "question": "Klient kupił model wyższą drukarkę niż ty. Jak reagujesz?",
        "answer1": "Życzę mojej młodszej siostrze jak najlepiej",
        "answer1Total": "1",
        "answer2": "Czuję lekkie szczypanie w okolicy portu USB, ale mówi się trudno",
        "answer2Total": "2",
        "answer3": "Tusz mnie zalewa z zazdrości",
        "answer3Total": "3"
    },

    {
        "question": "Jakie zdanie opisuje ciebie najlepiej?",
        "answer1": "Wszystkie drukarki, niezależnie od koloru, są stworzone do tego samego - drukowania",
        "answer1Total": "1",
        "answer2": "Drukarki laserowe są lepsze na długie dystanse, a atramentowe na krótkie, z powodu uwarunkowań genetycznych",
        "answer2Total": "2",
        "answer3": 'Nie ma czegoś takiego jak "my drukarki". Ba, mało tego, beze mnie inne drukarki nie mogłby nawet powiedzieć o sobie "ja"',
        "answer3Total": "3"
    },

    {
        "question": "Co najlepiej opisuje twoją relację z tuszem/tonerem?",
        "answer1": "Grzecznie wykonuje automatyczne czyszczenie głowicy przed 19 i ucinam sobie wielogodzinną drzemkę",
        "answer1Total": "1",
        "answer2": "Nie umiem spędzić weekendu bez szklaneczki czarnego tuszu.",
        "answer2Total": "2",
        "answer3": "Co sobotę ledwo dyszę mając zatkane dysze od tonerowego proszku",
        "answer3Total": "3"
    },

    {
        "question": "Jan Gutenberg to:",
        "answer1": "Najwspanialszy człowiek na świecie!",
        "answer1Total": "1",
        "answer2": "Fajnie, że wynalazł druk ale mogliby ludzie troche mniej drukować",
        "answer2Total": "2",
        "answer3": "Przez niego musze pracować zamiast leżeć na plaży i moczyć kartridż w przepysznym Tusz On The Beach...",
        "answer3Total": "3"
    },

    {
        "question": "Wybierz swój ulubiony kolor",
        "answer1": "Czarny",
        "answer1Total": "1",
        "answer2": "Magenta i żółty",
        "answer2Total": "2",
        "answer3": "Cyan",
        "answer3Total": "3"
    }];


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question
function generateQuestions(index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements
    questionEl.innerHTML = `${index + 1}. ${question.question}`;
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`;
    option2.innerHTML = `${question.answer2}`;
    option3.innerHTML = `${question.answer3}`;
}


function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('Wybierz odpowiedź');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);
    selectedAnswersData.push();
    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;
    //If quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Sprawdź wynik';
    }
    //If the quiz is finished then we hide the questions container and show the results
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.style.display = "flex";
        let src;
        let nazwaDrukarki;
        let opis;
        let fajerwerki = "";
        let emoji_src = [];
        if(totalScore >= 19){
            //najgorzej
            src = "https://rankingdrukarek.pl/web/images/urzadzenia/hp-deskjet-2630-all-in-one-10222064862.jpg";
            nazwaDrukarki = "HP DeskJet 2630 All-in-One";
            opis = "Skandal, hańba i ujma. Jesteś bardzo złą drukarką. Przynosisz wstyd swoim siostrom i braciom. Ciągle z tobą jakiś problem. Czy to drogie tusze, czy to zbiorniki, czy łączenie z WiFi, wiecznie problem z poborem papieru... O ścianę i do śmieci";
            document.body.classList.add("shake");
            emoji_src[0] = "images/wrr.png";
            emoji_src[1] = "images/lodzia.png";
            emoji_src[2] = "images/smuteczek.png";
            emoji_src[3] = "images/wrr.png";
            emoji_src[4] = "images/wrr.png";
            emoji_src[5] = "images/smuteczek.png";
            emoji_src[6] = "images/wrr.png";
            emoji_src[7] = "images/wrr.png";

        } else if(totalScore < 19 && totalScore >= 16){
            src = "https://rankingdrukarek.pl/web/images/urzadzenia/hp-laserjet-pro-m402-dne-20211060542.jpg";
            nazwaDrukarki = "HP LaserJet Pro M402 DNE";
            opis = "Uuuu koleżanko, ty to chyba lubisz jak cie nie lubią. Poza wydajnym zbiornikiem, który i tak jest bardzo drogi to ty nie masz nic. Niewiele funkcjonalności jak na cenę blisko 2 tysiące polskich złotych!";
            document.body.classList.add("shake");
            emoji_src[0] = "images/wrr.png";
            emoji_src[1] = "images/lodzia.png";
            emoji_src[2] = "images/smuteczek.png";
            emoji_src[3] = "images/wrr.png";
            emoji_src[4] = "images/smuteczek.png";
            emoji_src[5] = "images/smuteczek.png";
            emoji_src[6] = "images/lodzia.png";
            emoji_src[7] = "images/smuteczek.png";

        } else if(totalScore < 16 && totalScore >= 13){
            src = "https://rankingdrukarek.pl/web/images/urzadzenia/brother-dcp-1610-w-20421044352.jpg";
            nazwaDrukarki = "Brother DCP-1610";
            opis = "Fajnie, ale mogłoby być lepiej. Niby lubisz swojego właściciela ale nie do końca. Niby Wi-Fi masz, niby tanie zbiorniki ale ogólnie to nic w tobie wiecej ciekawego nie ma. Wiadomo - dla jednego tylko przystępna, dla drugiego aż przystępna";
            fajerwerki = '<div class="pyro" style="display: contents"> <div class="before"></div> <div class="after"></div> </div>';
            emoji_src[0] = "images/okejka.png";
            emoji_src[1] = "images/lodzia.png";
            emoji_src[2] = "images/okejka.png";
            emoji_src[3] = "images/heheszki.png";
            emoji_src[4] = "images/lodzia.png";
            emoji_src[5] = "images/okejka.png";
            emoji_src[6] = "images/heheszki.png";
            emoji_src[7] = "images/okejka.png";

        } else if(totalScore < 13 && totalScore >= 10){
            src = "https://rankingdrukarek.pl/web/images/urzadzenia/brother-dcp-t510-w-10422067332.jpg";
            nazwaDrukarki = "Brother DCP-T510 W";
            opis = "Jesteś prawie tak cudowna jak HP Ink Tank Wireless 419 All-in-One, ale wygodnie ci tutaj, na drugim miejscu podium. Może nie jesteś najtańsza w zakupie, ale samo drukowanie na tobie jest bardzo ekonomiczne, no i nie lubisz chodzić do serwisu. Super!";
            fajerwerki = '<div class="pyro" style="display: contents"> <div class="before"></div> <div class="after"></div> </div>';
            emoji_src[0] = "images/buziak.png";
            emoji_src[1] = "images/heheszki.png";
            emoji_src[2] = "images/okejka.png";
            emoji_src[3] = "images/serduszko.png";
            emoji_src[4] = "images/buziak.png";
            emoji_src[5] = "images/heheszki.png";
            emoji_src[6] = "images/okejka.png";
            emoji_src[7] = "images/serduszko.png";

        } else {
            //najlepiej
            src = "https://rankingdrukarek.pl/web/images/urzadzenia/hp-ink-tank-wireless-419-all-in-one-z6z97a-10222068452.jpg";
            nazwaDrukarki = "HP Ink Tank Wireless 419 All-in-One";
            opis = "Jesteś super drukarką, marzenie każdego klienta. Każdy chce cie mieć na półce. Ideał do naśladowania. I jeszcze te tanie atramentowe drukowanie, bo nie jesteś na kartridże, a na buteleczki!. Brawo, tak trzymać!";
            fajerwerki = '<div class="pyro" style="display: contents"> <div class="before"></div> <div class="after"></div> </div>';
            emoji_src[0] = "images/buziak.png";
            emoji_src[1] = "images/serduszko.png";
            emoji_src[2] = "images/buziak.png";
            emoji_src[3] = "images/serduszko.png";
            emoji_src[4] = "images/serduszko.png";
            emoji_src[5] = "images/heheszki.png";
            emoji_src[6] = "images/gwiazda.png";
            emoji_src[7] = "images/gwiazda.png";
        }

        result.innerHTML =
            `<div class="summary">
                    <h1 class="final-score">Jesteś jak ${nazwaDrukarki}</h1>
                    <div style="margin: auto; max-width: 100%">
                        <img src="${src}" alt="${nazwaDrukarki}" style="width: 100%">
                    </div>
                    <h3>${opis}</h3>
                </div>
                <button class="restart">Powtórz Quiz</button>
                ${fajerwerki}
                <div id="parent">
                    <img src="${emoji_src[0]}"/> <img src="${emoji_src[1]}"/> <img src="${emoji_src[2]}"/> <img src="${emoji_src[3]}"/>
                    <img src="${emoji_src[4]}"/> <img src="${emoji_src[5]}"/> <img src="${emoji_src[6]}"/> <img src="${emoji_src[7]}"/>
                    <img src="${emoji_src[0]}"/> <img src="${emoji_src[1]}"/> <img src="${emoji_src[2]}"/> <img src="${emoji_src[3]}"/>
                    <img src="${emoji_src[4]}"/> <img src="${emoji_src[5]}"/> <img src="${emoji_src[6]}"/> <img src="${emoji_src[7]}"/>
                </div>

             `;
        emojis();
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if (e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        location.reload();
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);
