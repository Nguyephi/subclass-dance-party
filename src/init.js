$(document).ready(function() {
  window.dancers = [];
  window.horses = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    console.log(dancerMakerFunctionName);
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      0.5 + Math.random() * 1000
    );
    $('body').append(dancer.$node);

    if (dancerMakerFunctionName === 'makeHorseDancer') {
      window.horses.push(dancer);
    } else {
      window.dancers.push(dancer);
    }
    if (window.numHorse === 5) {
      var bugle = new Audio('src/sound/first-call.wav');
      bugle.volume = 0.1;
      bugle.play();
      horseRace();
    }
  });
});


var randomList = function(n) {
  var temp = [];
  for (var i = 0; i < n; i++) {
    temp.push(i);
  }
  var r = [];
  do {
    index = Math.floor(Math.random() * temp.length);
    r.push((temp.splice(index, 1))[0]);
  } while (temp.length);
  return r;
};

var horseRace = function() {

  $('body').toggleClass('race');

  window.height = $('body').height();
  window.width = $('body').width();

  var temp = randomList(dancers.length);

  for (var i = 0; i < dancers.length; i++) {
    var r = temp[i];
    dancers[r].$node.css({'top': 20 + i * (height - 40) / dancers.length + 'px', 'left': (width-100) + 'px'});
  }

  for (var i = 0; i < window.numHorse; i++) {
    $('.horse').eq(i).text(i + 1);
    $('.horse').eq(i).css({'top': (10 + i * 130) + 'px', 'left': '10px'});
  }
  $(".topbar").css({'top': '1300px', 'transform': 'rotate(180deg)' });

  setTimeout(function(){
    readySetGo();
  }, 2000);

};

var readySetGo = function() {

  $('body').append('<div class="title1">READY</div>');

  setTimeout(function() {
    $('.title1').text('SET');
    setTimeout(function(){
      $('.title1').text('GO!');
      setTimeout(function(){
        $('.title1').hide();
        moveHorses();
      },700);
    },1500);
  }, 1500);

};

var getRandom = function() {
  return Math.random() * 120 - 9;
};

var getRandom2 = function() {
  return Math.floor(Math.random() * 32 - 16);
};

var moveHorses = function() {

  for (var i = 0; i < window.numHorse; i++) {
    var left = parseInt($('.horse').eq(i).css("left"));
    if(left > width - 250) {
      $('.title1').text('Horse #' + (i + 1) + ' wins!').show();
      setTimeout(function(){
        $('.title1').hide();
        for (var i = 0; i < dancers.length; i++) {
          dancers[i].$node.css({'top':  dancers[i].top + 'px', 'left': dancers[i].left + 'px'});
        }
        $(".topbar").css({'top': '0px', 'transform': 'rotate(0deg)'});

        $('.horse').css({'left': '-200px','transform': 'rotate(359deg)'});
        delete window.horses;
        window.horses= new Array();
        window.numHorse = 0;
        setTimeout(function(){
          $('body').toggleClass('race');
          $('.horse').remove();
        },2000);
      },2000);

      return;
    }
    var temp = getRandom();
    $('.horse').eq(i).css({'top': (10 + i * 130) + 'px', 'left': left + temp + 'px', 'transform': 'rotate(' + getRandom2() + 'deg)' });
  }

  setTimeout(function(){
    moveHorses();
  },500);
};
