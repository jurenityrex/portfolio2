//event pada saat link di klik
//jquery tolong saya carikan element $('.page-scroll')
$('.page-scroll').on('click', function(e) { //pd saat on di klik jln kan perintah fungsi berikut ini


    //ambil isi href
    var tujuan = $(this).attr('href');

    //tangkap elemn ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html, body').animate({ // untuk scroll agar di klik pas batas nya bisa pakai html saja
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
    e.preventDefault();

});

//parallax
//about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});



$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'

    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'

    });
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.2 + '%)'

    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio.thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio.thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
});