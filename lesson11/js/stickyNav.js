var $nav = $('nav'),
        $navHeight = $nav.height(),
        $title = $('.title');

var navScroll = {

    init:function(){
        $(window).on('scroll',function(){
            navScroll.navDrop();
        })
    },

    navDrop:function(){
        var $scrollTop = $(window).scrollTop();

        if($scrollTop > 205){
            $nav.addClass('scrolled');
            $title.css('padding-top');
        }
        else if($scrollTop < 153) {
            $nav.removeClass('scrolled');
            $title.css('padding-top','0');
        }

    }
}

$(document).ready(function(){
    navScroll.init();
})
