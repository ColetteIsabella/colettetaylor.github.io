
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
  $('.myhead').click(function() {
    $("#dropdown").css({'display':'none'});
    menuVisible = false;
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
