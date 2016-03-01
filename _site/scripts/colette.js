
$(function() {
  var menuVisible = false;
  $('.myhead').hover(function() {
    if (menuVisible) {
      $('#dropdown').css({'display':'block'});
      menuVisible = false;
      return;
    }
    $('#dropdown').css({'display':'block'});
    menuVisible = true;
  });
  $('.click').click(function() {
    $("#dropdown").css({'display':'none'});
    menuVisible = false;
  });
});

$(function(){
  //var bee = $(this).attr("href");
    $(".content1").click(function(){
      $(".overlay1").css({"display": "block"});
      //return bee;
    });
    $(".overlay1").click(function(){
      $(".overlay1").css({"display":"none"})
    });
});
$(function(){
    $(".content2").click(function(){
      $(".overlay2").css({"display": "block"});
    });
    $(".overlay2").click(function(){
      $(".overlay2").css({"display":"none"})
    });
});
$(function(){
    $(".content3").click(function(){
      $(".overlay3").css({"display": "block"});
    });
    $(".overlay3").click(function(){
      $(".overlay3").css({"display":"none"})
    });
});
$(function(){
    $(".content4").click(function(){
      $(".overlay4").css({"display": "block"});
    });
    $(".overlay4").click(function(){
      $(".overlay4").css({"display":"none"})
    });
});
$(function(){
    $(".content5").click(function(){
      $(".overlay5").css({"display": "block"});
    });
    $(".overlay5").click(function(){
      $(".overlay5").css({"display":"none"})
    });
});
$(function(){
    $(".content6").click(function(){
      $(".overlay6").css({"display": "block"});
    });
    $(".overlay6").click(function(){
      $(".overlay6").css({"display":"none"})
    });
});
$(function(){
    $(".content7").click(function(){
      $(".overlay7").css({"display": "block"});
    });
    $(".overlay7").click(function(){
      $(".overlay7").css({"display":"none"})
    });
});
$(function(){
    $(".content8").click(function(){
      $(".overlay8").css({"display": "block"});
    });
    $(".overlay8").click(function(){
      $(".overlay8").css({"display":"none"})
    });
});
$(function(){
    $(".content9").click(function(){
      $(".overlay9").css({"display": "block"});
    });
    $(".overlay9").click(function(){
      $(".overlay9").css({"display":"none"})
    });
  });
$(function(){
    $(".content10").click(function(){
      $(".overlay10").css({"display": "block"});
    });
    $(".overlay10").click(function(){
      $(".overlay10").css({"display":"none"})
    });
});
$(function(){
    $(".content11").click(function(){
      $(".overlay11").css({"display": "block"});
    });
    $(".overlay11").click(function(){
      $(".overlay11").css({"display":"none"})
    });
});
$(function(){
    $(".content12").click(function(){
      $(".overlay12").css({"display": "block"});
    });
    $(".overlay12").click(function(){
      $(".overlay12").css({"display":"none"})
    });
});
$(function(){
    $(".content13").click(function(){
      $(".overlay13").css({"display": "block"});
    });
    $(".overlay13").click(function(){
      $(".overlay13").css({"display":"none"})
    });
});
$(function(){
    $(".content14").click(function(){
      $(".overlay14").css({"display": "block"});
    });
    $(".overlay14").click(function(){
      $(".overlay14").css({"display":"none"})
    });
});
$(function(){
    $(".content15").click(function(){
      $(".overlay15").css({"display": "block"});
    });
    $(".overlay15").click(function(){
      $(".overlay15").css({"display":"none"})
    });
});
$(function(){
    $(".content16").click(function(){
      $(".overlay16").css({"display": "block"});
    });
    $(".overlay16").click(function(){
      $(".overlay16").css({"display":"none"})
    });
});


//$(".gallery").click(function() {
  //var position = $(this).slideUp();
  //$(".zoom").slideUp(position).show();
//});

$(function(){
  $(".promo").click(function(){
    $(".mailchimp").css({"display":"block"});

  });
});
