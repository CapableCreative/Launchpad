$('document').ready(function(){
    let bodyFaded = $('body');
    setTimeout(function(){
        $(bodyFaded).css('opacity','1.0');
    },500)
    let serviceIcon = '.service-icon';
    setTimeout(function(){
        $('.service-icon.animated-icon').removeClass('animated-icon')
    }, 2000)  
})

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var animatedRight = $('.animate-me.animated-slide-right');
    var animatedLeft = $('.animate-me.animated-slide-left');

    for (let ar = 0; ar < $(animatedRight).length; ar++){
        var animatedPosition = $((animatedRight[ar])).offset().top
        //console.log(scroll,animatedPosition)
        animatedPosition / 3 < scroll ?  $(animatedRight[ar]).removeClass('animated-slide-right').removeClass('animated-slide-left')  : "";
    }

    for (let ar = 0; ar < $(animatedRight).length; ar++){
        var animatedPosition = $((animatedLeft[ar])).offset().top
        animatedPosition / 3 < scroll ?  $(animatedLeft[ar]).removeClass('animated-slide-right').removeClass('animated-slide-left')  : "";
    }
});

$('#scheduleMeetingFirst').on('click', () => {
    $('#scheduleModal').modal('hide');
})

 // Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().slideUp();
  });