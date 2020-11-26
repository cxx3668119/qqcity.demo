$('.btn').click(function (e) {
  e.preventDefault();
  if ($('.firstul').is(':hidden')) {
    $('.firstul').slideDown();
  } else {
    $('.firstul').slideUp();
  }
});

$('.btn1').click(function (e) {
  e.preventDefault();
  if ($('.scroll1').is(':hidden')) {
    $('.scroll1').show();
    // $('.navbtn2').siblings().hide();
    $('.two').hide();
    $('.san').hide();
    $('.four').hide();
    $('.five').hide();
  } else {
    $('.scroll1').slideUp();
  }
});

$('.btn2').click(function (e) {
  e.preventDefault();
  if ($('.two').is(':hidden')) {
    $('.two').show();
    // $('.navbtn2').siblings().hide();
    $('.scroll1').hide();
    $('.san').hide();
    $('.four').hide();
    $('.five').hide();
  } else {
    $('.two').slideUp();
  }
});

$('.btn3').click(function (e) {
  e.preventDefault();
  if ($('.san').is(':hidden')) {
    $('.san').show();
    $('.scroll1').hide();
    $('.two').hide();
    $('.four').hide();
    $('.five').hide();
  } else {
    $('.san').slideUp();
  }
});

$('.btn4').click(function (e) {
  e.preventDefault();
  if ($('.four').is(':hidden')) {
    $('.four').show();
    $('.scroll1').hide();
    $('.two').hide();
    $('.san').hide();
    $('.five').hide();
  } else {
    $('.four').slideUp();
  }
});

$('.btn5').click(function (e) {
  e.preventDefault();
  if ($('.five').is(':hidden')) {
    $('.five').show();
    // $('.btn5').parent().siblings().contents().css('display', 'none');
    $('.scroll1').hide();
    $('.two').hide();
    $('.san').hide();
    $('.four').hide();
  } else {
    $('.five').slideUp();
  }
});