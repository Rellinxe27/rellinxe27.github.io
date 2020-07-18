var $header = $('header'),
        $headerHeight = $header.height(),
        $title = $('.title');

var headerScroll = {

    init:function(){
        $(window).on('scroll',function(){
            headerScroll.headerDrop();
        })
    },

    headerDrop:function(){
        var $scrollTop = $(window).scrollTop();

        if($scrollTop > 205){
            $header.addClass('scrolled');
            $title.css('padding-top');
        }
        else if($scrollTop < 153) {
            $header.removeClass('scrolled');
            $title.css('padding-top','0');
        }

    }
}

$(document).ready(function(){
    headerScroll.init();
})
