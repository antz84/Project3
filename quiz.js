$('#supercars').on('click', function() {
  console.log('supercars clicked');
  $('#internet').hide();
  $('#geography').hide();
  $('#history').hide();
  $('#random').hide();

  // $('.topics').show();
  // $('<div>', {class: 'new'}).append('append');
  $('<div>').html('<div class="x">x</div>');
});

$('.difficulty').on('click', function() {
  console.log('difficulty clicked');
  $('.difficulty').hide();

});

$('.length').on('click', function() {
  console.log('length clicked');
  $('.length').hide();
});
