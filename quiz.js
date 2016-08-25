// declare game variables

// quiz questions

// var q1 = {q:'Q1: What colour is most associated with Ferrari?', a:'Red', b:'Red & Yellow', c:'Orange', d:'Black'};
// var q2 = {q:'Q2: What motors do all \'Tesla\' cars use?', a:'Electric', b:'V8', c:'Hybrid', d:'Hydrogen'};
// var q3 = {q:'Q3: The Rimac ConceptOne is made in?', a:'Croatia', b:'Bulgaria', c:'Italy', d:'Germany'};
// var q4 = {q:'Q4: Lamborghini is a owned by which parent company?', a:'Volkswagen', b:'Mercedes-Benz', c:'Lamborghini Spa', d:'BMW'};
// var q5 = {q:'Q5: BMW Motorrad is a sub-brand that specialises in:', a:'Motorcycles', b:'Performance Cars', c:'Mini Coopers', d:'Driving Pleasure'};
// var q6 = {q:'Q6: Lotus is manufactured in the:', a:'UK', b:'Italy', c:'Switzerland', d:'Norway'};
// var q7 = {q:'Q7: Audi\'s famous four wheel drive technology is called:', a:'Quattro', b:'Symmetric All Wheel Drive', c:'', d:'4X4'};
// var q8 = {q:'Q8: The Koenigsegg One:1 accelerates from 0-300kmh in:', a:'11.92 seconds', b:'11.21 seconds', c:'9.86 seconds', d:'16.34 seconds'};
// var q9 = {q:'Q9: McLaren once had the worlds fastest car. It was called the:', a:'F1', b:'650S', c:'P1', d:'Veyron'};
// var q10 = {q:'The LaFerrari is powered by a:', a:'V12 & Electric motor', b:'6.5L V12', c:'V12 twin turbo', d:'V8 twin turbo'};

var questions = [
  {q:'What colour is most associated with Ferrari?', a:'Red', b:'Red & Yellow', c:'Orange', d:'Black',img: 'http://www.allcarbrandslist.com/wp-content/uploads/2015/01/ferrari-logo-vector.jpg'},
  {q:'What motors do all \'Tesla\' cars use?', a:'Electric', b:'V8', c:'Hybrid', d:'Hydrogen'},
  {q:'The Rimac ConceptOne is made in?', a:'Croatia', b:'Bulgaria', c:'Italy', d:'Germany'},
  {q:'Lamborghini is a owned by which parent company?', a:'Volkswagen', b:'Mercedes-Benz', c:'Lamborghini Spa', d:'BMW'},
  {q:'BMW Motorrad is a sub-brand that specialises in:', a:'Motorcycles', b:'Performance Cars', c:'Mini Coopers', d:'Driving Pleasure'},
  {q:'Lotus is manufactured in the:', a:'UK', b:'Italy', c:'Switzerland', d:'Norway'},
  {q:'Audi\'s famous four wheel drive technology is called:', a:'Quattro', b:'Symmetric All Wheel Drive', c:'gygy', d:'4X4'},
  {q:'The Koenigsegg One:1 accelerates from 0-300kmh in:', a:'11.92 seconds', b:'11.21 seconds', c:'9.86 seconds', d:'16.34 seconds'},
  {q:'McLaren once had the worlds fastest car. It was called the:', a:'F1', b:'650S', c:'P1', d:'Veyron'},
  {q:'The LaFerrari is powered by a:', a:'V12 & Electric motor', b:'6.5L V12', c:'V12 twin turbo', d:'V8 twin turbo'}
];

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
  var $optionA = $('<div>').text(question.a).addClass('optionA');
  $('#answers').append($optionA);
  var $optionB = $('<div>').text(question.b).addClass('optionB');
  $('#answers').append($optionB);
  var $optionC = $('<div>').text(question.c).addClass('optionC');
  $('#answers').append($optionC);
  var $optionD = $('<div>').text(question.d).addClass('optionD');
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


// show the player a box with set number of question lengths
// once they choose one, then run the makeShorterQuiz function. Store the result in the shuffledQuestions variable.

shuffledQuestions = makeShorterQuiz(questions, 8);


makeQuestion(shuffledQuestions[questionIndex]);
makeOptions(shuffledQuestions[questionIndex]);





// var $question = $('<h3>').text(q1.q);
// $('#questions').append($question);
//
//
// makeOptions(q1);















//
// $('#filter-btn').on('click', function() {
//   console.log('quiz length selected');
//   $('#internet').hide();
//   $('<p>').html('Paragraph').append('TEST APPEND');
//
//   var p = $('<p>');
//
//   p.text('Q1: 1 + 1 = ');
//   $('#game').append(p);
//
//   var a = $('<button>');
//   $('#game').append(a);
//   a.text('2');
//
//   $(a).on('click', function() {
//     score = score + 1;
//     console.log('2 clicked');
//     console.log('Score: ' + score);
//   });
//
//   var b = $('<button>');
//   $('#game').append(b);
//   b.text('3');
//
//   $(b).on('click', function() {
//     score = score - 1;
//     console.log('3 clicked');
//     console.log('Score: ' + score);
//   });
// });
//
// $('#three').on('click', function() {
//   console.log('three clicked');
//   $('#six').hide();
//   $('#nine').hide();
//   length = 3;
// });
//
// $('#cars').click(function() {
//   var category1 = $('<p>');
//   category1.text('cars');
//   $('#app').append(category1);
// });


// question images

var i1 = 'http://www.allcarbrandslist.com/wp-content/uploads/2015/01/ferrari-logo-vector.jpg';
var i2 = 'http://s3.caradvice.com.au/thumb/1000/562/wp-content/uploads/2016/04/2016-tesla-model-s-p90d-13.jpg';
var i3 = 'http://gtspirit.com/wp-content/gallery/rimac-concept-one-croatia-photoshoot/rimac-concept-one-14.jpg';
var i4 = 'http://cdn.pinthiscars.com/images/lamborghini-logo-wallpaper-3d-wallpaper-5.jpg';
var i5 = 'http://www.compassexpeditions.com/wp-content/plugins/vslider/timthumb.php?src=%2Fwp-content%2Fuploads%2F2014%2F04%2FBMW-Logo.png&w=650&h=300&zc=1&q=80';
var i6 = 'http://www.walldevil.com/wallpapers/a87/lotus-car-wallpaper-wallpapers-lotusracing3-racing.jpg';
var i7 = 'http://www.zeroto60times.com/logos/audi-cars-logo-emblem.jpg';
var i8 = 'http://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/news/carousel/2015/06/Large%20Image_52.jpg?itok=E_TY5N8j';
var i9 = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/McLaren_F1_LM.jpg';
var i10 = 'http://s1.cdn.autoevolution.com/images/gallery/FERRARI-LaFerrari-4797_35.jpeg';

// answer review logos

var correct = 'http://www.cooksongold.com/images/tick.gif';
var incorrect = 'http://www.hearscreen.com/wp-content/uploads/2015/12/wrong.png';
//
// console.log(q1.q);
// if(q1.a) {
//   console.log('correct');
// }



// put rest of images
// show results at end correct
// reset game
// make at start ability to select number of questions
// maybe animations w css transition
// make more questions
// difficulty
