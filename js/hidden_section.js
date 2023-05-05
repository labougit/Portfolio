$(document).ready(function() {
  // cible les liens de la navbar
  var portfolioLink = $('a[href="#portfolio"]');
  var portfolioLink2 = $('a[href="#portfolio2"]');
  
  // cible les sections
  var portfolioSection = $('#portfolio');
  var portfolioSection2 = $('#portfolio2');
  
  // masque toutes les sections au début
  portfolioSection.addClass('hidden');
  portfolioSection2.addClass('hidden');

  // cible les skills
  var skills1 = $('#skills_SE');
  var skills2 = $('#skills_DP');
  //masque one skill
  skills2.addClass('hidden');



  // ajoute un écouteur d'événement au clic sur le lien Portfolio
  portfolioLink.click(function(event) {
    //event.preventDefault();

    if (!portfolioSection.hasClass('disabled')) {
      $( ".transition" ).addClass( "anim-trans" );
setTimeout(function() {
      $( ".transition" ).removeClass( "anim-trans" );
    }, 2000);


    $('html, body').css('overflow', 'hidden'); // désactive le scroll pendant l'animation
    $('html, body').animate({
      scrollTop: 0
    }, 1000, function() {
      $('html, body').css('overflow', 'auto'); // réactive le scroll à la fin de l'animation
    });

    setTimeout(function() {
      portfolioSection.toggleClass('hidden');
      portfolioSection2.addClass('hidden');
      portfolioSection.addClass('disabled');
      portfolioSection2.removeClass('disabled');

      skills1.toggleClass('hidden');
      skills2.addClass('hidden');
      skills1.addClass('disabled');
      skills2.removeClass('disabled');

      $('header').css('background-image', 'url(/Portfolio/img/portfolio/f3.jpg)');
    }, 1000); // délai de 2 secondes
    }

    else{
      $('html, body').css('overflow', 'hidden'); // désactive le scroll pendant l'animation
      $('html, body').animate({
        scrollTop: portfolioSection.offset().top
    }, 1000, function() {
      $('html, body').css('overflow', 'auto'); // réactive le scroll à la fin de l'animation
    });
    }

  });

  // ajoute un écouteur d'événement au clic sur le lien Portfolio 2
  portfolioLink2.click(function(event) {
    //event.preventDefault();
    if (!portfolioSection2.hasClass('disabled')) {
      $( ".transition" ).addClass( "anim-trans" );
setTimeout(function() {
      $( ".transition" ).removeClass( "anim-trans" );
    }, 2000);

    $('html, body').css('overflow', 'hidden'); // désactive le scroll pendant l'animation
    $('html, body').animate({
      scrollTop: 0
  }, 1000, function() {
    $('html, body').css('overflow', 'auto'); // réactive le scroll à la fin de l'animation
  });
  
      setTimeout(function() {

      portfolioSection2.toggleClass('hidden');
      portfolioSection.addClass('hidden');
      portfolioSection2.addClass('disabled');
      portfolioSection.removeClass('disabled');

      skills2.toggleClass('hidden');
      skills1.addClass('hidden');
      skills2.addClass('disabled');
      skills1.removeClass('disabled');

      $('header').css('background-image', 'url(/Portfolio/img/portfolio/f2.jpg)');
    }, 1000);
  }

    else{
      $('html, body').css('overflow', 'hidden'); // désactive le scroll pendant l'animation
      $('html, body').animate({
        scrollTop: portfolioSection2.offset().top
    }, 1000, function() {
      $('html, body').css('overflow', 'auto'); // réactive le scroll à la fin de l'animation
    });
    }

  });

  


});



