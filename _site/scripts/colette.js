
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
  $('#dropdown').click(function() {
    $("#dropdown").css({'display':'none'});
    menuVisible = false;
  });
});


$(function(){
  $(".mousehead").click(function(){
    $("#mbdropdown").css({"display":"block"});
  });
  $("body").click(function(){
    $("#mbdropdown").css({"display":"none"});
  })
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
