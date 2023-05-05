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
    
    // ajoute un écouteur d'événement au clic sur le lien Portfolio
    portfolioLink.click(function(event) {
      //event.preventDefault();
      if (!portfolioSection.hasClass('disabled')) {
        portfolioSection.toggleClass('hidden');
        portfolioSection2.addClass('hidden');
        portfolioSection.addClass('disabled');
        portfolioSection2.removeClass('disabled');
        var targetOffset = portfolioSection.offset().top;
        $('header').css('background-image', 'url(/Portfolio/img/portfolio/f3.jpg)');
        window.scrollTo(0, 0);

      }
    });
  
    // ajoute un écouteur d'événement au clic sur le lien Portfolio 2
    portfolioLink2.click(function(event) {
      //event.preventDefault();
      if (!portfolioSection2.hasClass('disabled')) {
        portfolioSection2.toggleClass('hidden');
        portfolioSection.addClass('hidden');
        portfolioSection2.addClass('disabled');
        portfolioSection.removeClass('disabled');
        $('header').css('background-image', 'url(/Portfolio/img/portfolio/f2.jpg)');
        $('html, body').animate({
          scrollTop: portfolioSection2.offset().top
      }, 1000);
      }
    });

  });