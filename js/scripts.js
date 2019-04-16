

// MULTIPLE VIDEOS
// const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));

$(document).ready(function(){

    const player = new Plyr('.player');
    $(".owl-carousel").owlCarousel({
        items: 1
    });

  });