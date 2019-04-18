

// MULTIPLE VIDEOS
// const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));

$(document).ready(function(){

    const player = new Plyr('.player');
    $(".owl-carousel").owlCarousel({
        items: 1
    });

    let subMenu = document.querySelector('.js-sub-menu');
    let subMenuDrop = document.querySelector('.top-info__logged_sub');
    subMenu.addEventListener('click', function(e){
        e.preventDefault();
        subMenuDrop.classList.toggle('active');
    })


});

