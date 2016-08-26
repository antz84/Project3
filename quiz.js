// logos for correct and incorrect answers

var yay = 'images/yay.gif';
var nay = 'images/nay.png';

// quiz questions

var questions = [
  {q:'Bugatti limited the top speed of the Chiron to?', a:'460kmh', b:'500kmh', c:'499kmh', d:'Mach 1', img:'images/bug.jpg'},
  {q:'Terminal velocity of a skydiver in freefall is approximately?', a:'220kmh', b:'300kmh', c:'150kmh', d:'400kmh', img:'images/sky.jpg'},
  {q:'When did Tim Berners-Lee invent the Web?', a:'1989', b:'1991', c:'1992', d:'1995', img:'images/www.gif'},
  {q:'Why did Al Gore invent the internet?', a:'He Didn\'t', b:'Bragging Rights', c:'Asif', d:'Because Reasons', img:'images/alg.jpg'},
  {q:'AJAX is an essential component of:', a:'All of the above', b:'Gmail', c:'Google Maps', d:'A Clean Shower', img:'images/ajx.jpg'},
  {q:'The \'Long Tail\' is a concept in:', a:'Business', b:'Economics', c:'Interwebs', d:'All of the above', img:'images/lng.gif'},
  {q:'When did the iPhone kick off the smartphone revolution?', a:'2007', b:'2005', c:'2008', d:'2006', img:'images/iph.jpg'},
  {q:'WiFi was invented in 1992 by who?', a:'CSIRO', b:'NASA', c:'Nikola Tesla', d:'CERN', img:'images/wifi.png'},
  {q:'The first successful \'ARPANET\' message was transmitted in?', a:'1969', b:'1972', c:'1965', d:'1977', img:'images/arpa.jpg'},
  {q:'The Ferrari symbol is called what in Italiano?', a:'Cavallino Rampante', b:'Prancing Horse', c:'Bambini', d:'Toro',img: 'images/16m.jpg'},
  {q:'Tesla cars are powered by this motor, invented by Nikola Tesla.', a:'AC Electric', b:'V8', c:'Hybrid', d:'Hydrogen', img:'images/90d.jpg'},
  {q:'The Rimac ConceptOne electric hypercar originates from?', a:'Croatia', b:'Bulgaria', c:'Italy', d:'Germany', img:'images/rm1.jpg'},
  {q:'Lamborghini is a owned by which parent company?', a:'Volkswagen', b:'Mercedes-Benz', c:'Daimler-Chrisler', d:'BMW', img:'images/lambo.jpg'},
  {q:'BMW\'s motorcycle division is known as?', a:'Motorrad', b:'//M', c:'Mini', d:'Sheer Driving Pleasure', img:'images/hp4.jpg'},
  {q:'Lotus sports cars are designed and manufactured where?', a:'England', b:'Italy', c:'Switzerland', d:'Norway', img:'images/lotus.jpg'},
  {q:'Audi\'s four wheel drive technology is called?', a:'Quattro', b:'Symmetric All Wheel Drive', c:'AudiPlus+', d:'4X4', img:'images/audi.jpg'},
  {q:'The Koenigsegg One:1 accelerates from 0-300kmh in?', a:'11.92 seconds', b:'11.21 seconds', c:'2 seconds', d:'Crazy Fast', img:'images/one1.jpg'},
  {q:'Which McLaren did 386kmh in 1998?', a:'F1', b:'650S', c:'P1', d:'Veyron', img:'images/mcf1.jpg'},
  {q:'The LaFerrari is powered by a:', a:'V12 & Electric motor', b:'6.5L V12', c:'Twin Turbo V12', d:'Unicorn', img:'images/laf.jpeg'},
  {q:'The Kawasaki H2R\'s power output is?', a:'243kW', b:'200bhp', c:'Adequate', d:'Lacking', img:'images/h2r.jpg'},
  {q:'Grumpy Cat is', a:'Here for the lulz', b:'Adorable', c:'Unimpressed', d:'A Unicorn', img:'images/cat.jpg'},
  {q:'Frank Sinatra is..', a:'Dead', b:'An Actor', c:'An Alternative to Rails', d:'A Wiseguy', img:'images/sinatra.jpg'},
  {q:'Ruby on Rails is?', a:'All This & More', b:'An MVC Framework', c:'Full Stack', d:'RESTful', img:'images/ruby-rails.jpg'},
  {q:'Brendan Eich invented JavaScript.', a:'True', b:'False', c:'Node', d:'React', img:'images/brendan-eich.jpg'}
];

// declare variables

var numberOfQuestions = questions.length;
var score = 0;
var questionIndex = 0;
var rightAnswers = [];
var shuffledQuestions;

function makeShorterQuiz(questions, howManyToShortenBy) {
  // should take a array of questions, and should return a shortened version.
  var shortened = questions.slice(0, howManyToShortenBy);
  return shuffle(shortened);
}

function makeQuestion(question) {
  $('#questions').empty();
  var $q = $('<h3>').text(question.q);
  var $img = $('<img>').attr('src', question.img);
  $('#questions').append($q);
  $('#questions').append($img);
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function gameOverScreen() {
  $('#questions').addClass('hidden');
  $('#options').addClass('hidden');
  $('#score').removeClass('hidden');
  $('#review').removeClass('hidden');

  var $score = $('<h3>').text('You Scored: ' + score);
  $('#score').append($score);
}

function makeOptions(question) {
  // $('#select').addClass('hidden');
  $('#options').empty();
  var $optionA = $('<button>').text(question.a).addClass('optionA');
  $('#options').append($optionA);
  var $optionB = $('<button>').text(question.b).addClass('optionB');
  $('#options').append($optionB);
  var $optionC = $('<button>').text(question.c).addClass('optionC');
  $('#options').append($optionC);
  var $optionD = $('<button>').text(question.d).addClass('optionD');
  $('#options').append($optionD);

  var parent = $("#options");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }

  $('.optionA').click(function() {
    console.log('correct!');
    score++;
    showXorO('correct');
    rightAnswers.push(questionIndex);
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex++;
    console.log(score);
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
  });

  $('.optionB').click(function() {
    console.log('incorrect!');
    showXorO('incorrect');
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex ++;
    console.log(score);
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);

  });

  $('.optionC').click(function() {
    console.log('incorrect!');
    showXorO('incorrect');
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex ++;
    console.log(score);
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
  });

  $('.optionD').click(function() {
    console.log('incorrect!');
    showXorO('incorrect');
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex ++;
    console.log(score);
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
  });
}

function showXorO(answer) {
  $('#temp').show();
  $('#temp').empty();
  var $y = $('<img class="feedback">').attr('src', yay);
  var $n = $('<img class="feedback">').attr('src', nay);
  if (answer === 'correct') {
    $('#temp').append($y);
  } else {
    $('#temp').append($n);
  }
  setTimeout(function() {
    $('#temp').hide();
  }, 500);
}

// once they choose one, then run the makeShorterQuiz function. Store the result in the shuffledQuestions variable.

shuffledQuestions = makeShorterQuiz(questions, 24);

makeQuestion(shuffledQuestions[questionIndex]);
makeOptions(shuffledQuestions[questionIndex]);

// things to do

// show the player a box with set number of question lengths
// at start ability to select number of questions
// show results at end correct
// button to reset game at the end
// maybe animations w css transition
// question difficulty levels?
// styling
