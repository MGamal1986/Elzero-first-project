$(function(){
    console.log('jqiery is successfully iserted');

    $('aside').css({
        height: $('section.all').outerHeight()
    });
    $('#bottom').css({
        height : ($('header').innerHeight() - $('#top').innerHeight())
    });


    // hover on links in menu bar
    $('aside.navbar a.link').hover(function(){
        $(this).children('div.content').animate({
            width: '300px'
        },300);
        $(this).css({
            backgroundColor: '#fff',
            color : 'brown'
        })
    },function(){
        $(this).children('div.content').animate({
            width: 0
        },100);
        $(this).css({
            backgroundColor: 'transparent',
            color : '#000'
        })
    });

    // on hover change color of google div
    $('section.all .bottom div.google > span').hover(function(){
        $(this).css({
            color: $(this).data('hover')
        })
    },function(){
        $(this).css({
            color:'#fff'
        })
    });

   // chnage background-color on click image thumb
   $('section.all .bottom .fire > div.camera .overlay').on('click',function(){
    //    console.log($(this).data('img'))
        $('section.all .bottom .fire > div.volcano').css({
            "background-image" : "url("+ $(this).data('img') +")"
        })
   })
   // 
   
});