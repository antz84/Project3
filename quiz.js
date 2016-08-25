// answer review logos

var correct = 'http://www.cooksongold.com/images/tick.gif';
var incorrect = 'http://www.hearscreen.com/wp-content/uploads/2015/12/wrong.png';

// quiz questions

var questions = [
  {q:'The Bugatti Chiron\'s top speed is electronically limited to?', a:'460kmh', b:'500kmh', c:'499kmh', d:'Mach 1', img:'http://images.car.bauercdn.com/pagefiles/27368/bugatti_01.jpg'},
  {q:'Terminal velocity of a skydiver in freefall is approximately?', a:'220kmh', b:'300kmh', c:'150kmh', d:'400kmh', img:'http://www.brunswickheads.org.au/media/images/content/detail/Stephan_Kleinlein20130824-C63C9517-2-text2024.jpg'},
  {q:'Tim Berners Lee invented the World Wide Web in which year?', a:'1989', b:'1991', c:'1992', d:'1995', img:'http://www.nktphotonics.com/wp-content/uploads/2015/06/www.gif'},
  {q:'Al Gore invented the internet because?', a:'He Could', b:'MVP', c:'LOL', d:'Reasons', img:'http://www.thedailyrash.com/wp-content/uploads/2014/05/gore1.jpg'},
  {q:'AJAX is an essential component of:', a:'All of the above', b:'Gmail', c:'Google Maps', d:'Combatting Bathroom Scum', img:'https://images-na.ssl-images-amazon.com/images/I/5125JeKzqaL.jpg'},
  {q:'The \'Long Tail\' is a concept in:', a:'Business', b:'Economics', c:'Interwebs', d:'All of the above', img:'https://qph.ec.quoracdn.net/main-qimg-3b21f991d3f0446ce30b9b33496e87ab?convert_to_webp=true'},
  {q:'The iPhone ushered in the smartphone revolution in which year?', a:'2007', b:'2005', c:'2008', d:'2006', img:'https://si.wsj.net/public/resources/images/BN-NF598_ptech0_H_20160323105214.jpg'},
  {q:'WiFi was invented in 1992 by who?', a:'CSIRO', b:'NASA', c:'Nikola Tesla', d:'Matt Damon', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wi-Fi_Logo.svg/2000px-Wi-Fi_Logo.svg.png'},
  {q:'\'ARPANET\', The forerunner to the internet sucessfully transmitted a message in which year?', a:'1969', b:'1972', c:'1965', d:'1977', img:'http://www.tychosnose.com/wp-content/uploads/2014/08/IBM360-624x422.jpg'},
  {q:'Which colour is generally associated with Ferrari?', a:'Red', b:'Red & Yellow', c:'Orange', d:'Black',img: 'http://www.allcarbrandslist.com/wp-content/uploads/2015/01/ferrari-logo-vector.jpg'},
  {q:'Nikola Tesla invented which type of motor that today powers all Tesla\'s?', a:'Electric', b:'V8', c:'Hybrid', d:'Hydrogen', img:'http://s3.caradvice.com.au/thumb/1000/562/wp-content/uploads/2016/04/2016-tesla-model-s-p90d-13.jpg'},
  {q:'The Rimac ConceptOne electric hypercar is from which European country?', a:'Croatia', b:'Bulgaria', c:'Italy', d:'Germany', img:'http://gtspirit.com/wp-content/gallery/rimac-concept-one-croatia-photoshoot/rimac-concept-one-14.jpg'},
  {q:'Lamborghini is a owned by which parent company?', a:'Volkswagen', b:'Mercedes-Benz', c:'Daimler-Chrisler', d:'BMW', img:'http://cdn.pinthiscars.com/images/lamborghini-logo-wallpaper-3d-wallpaper-5.jpg'},
  {q:'BMW\'s motorcycle division is known as?', a:'Motorrad', b:'//M', c:'Mini', d:'Sheer Driving Pleasure', img:'http://www.compassexpeditions.com/wp-content/plugins/vslider/timthumb.php?src=%2Fwp-content%2Fuploads%2F2014%2F04%2FBMW-Logo.png&w=650&h=300&zc=1&q=80'},
  {q:'Lotus sports cars are designed and manufactured where?', a:'England', b:'Italy', c:'Switzerland', d:'Norway', img:'http://www.walldevil.com/wallpapers/a87/lotus-car-wallpaper-wallpapers-lotusracing3-racing.jpg'},
  {q:'Audi\'s four wheel drive technology is called?', a:'Quattro', b:'Symmetric All Wheel Drive', c:'gygy', d:'4X4', img:'http://www.zeroto60times.com/logos/audi-cars-logo-emblem.jpg'},
  {q:'How fast does the Koenigsegg One:1 accelerates from 0-300kmh?', a:'11.92 seconds', b:'11.21 seconds', c:'9.86 seconds', d:'16.34 seconds', img:'http://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/news/carousel/2015/06/Large%20Image_52.jpg?itok=E_TY5N8j'},
  {q:'McLaren once had the worlds fastest car. It was called the:', a:'F1', b:'650S', c:'P1', d:'Veyron', img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/McLaren_F1_LM.jpg'},
  {q:'The LaFerrari is powered by a:', a:'V12 & Electric motor', b:'6.5L V12', c:'V12 twin turbo', d:'V8 twin turbo', img:'http://s1.cdn.autoevolution.com/images/gallery/FERRARI-LaFerrari-4797_35.jpeg'},
  {q:'The Kawasaki H2R\'s power output is?', a:'Epic', b:'Not Bad', c:'Adequate', d:'Lacking', img:'http://s1.cdn.autoevolution.com/images/news/gallery/kawasaki-ninja-h2-pics-and-video-show-a-game-changer-photo-galleryvideo_20.jpg'},
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
  $('#answers').addClass('hidden');
  $('#score').removeClass('hidden');
  $('#review').removeClass('hidden');

  var $score = $('<h3>').text('your score is:' + score);
  $('#score').append($score);
}

function makeOptions(question) {
  $('#answers').empty();
  var $optionA = $('<button>').text(question.a).addClass('optionA');
  $('#answers').append($optionA);
  var $optionB = $('<button>').text(question.b).addClass('optionB');
  $('#answers').append($optionB);
  var $optionC = $('<button>').text(question.c).addClass('optionC');
  $('#answers').append($optionC);
  var $optionD = $('<button>').text(question.d).addClass('optionD');
  $('#answers').append($optionD);

  var parent = $("#answers");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }

  $('.optionA').click(function() {
    console.log('correct!');
    score++;
    rightAnswers.push(questionIndex);
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex++;
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
    console.log(score);
  });

  $('.optionB').click(function() {
    console.log('incorrect!');
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex ++;
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
    console.log(score);

  });

  $('.optionC').click(function() {
    console.log('incorrect!');
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex ++;
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
    console.log(score);
  });

  $('.optionD').click(function() {
    console.log('incorrect!');
    if (questionIndex === numberOfQuestions - 1) {
      console.log('quiz over');
      gameOverScreen();
      return;
    }
    questionIndex ++;
    makeQuestion(shuffledQuestions[questionIndex]);
    makeOptions(shuffledQuestions[questionIndex]);
    console.log(score);
  });
}

// once they choose one, then run the makeShorterQuiz function. Store the result in the shuffledQuestions variable.

shuffledQuestions = makeShorterQuiz(questions, 8);

makeQuestion(shuffledQuestions[questionIndex]);
makeOptions(shuffledQuestions[questionIndex]);

var $question = $('<h3>').text(q1.q);
$('#questions').append($question);

// things to do

// show the player a box with set number of question lengths
// at start ability to select number of questions
// show results at end correct
// button to reset game at the end
// maybe animations w css transition
// question difficulty levels?
// styling
