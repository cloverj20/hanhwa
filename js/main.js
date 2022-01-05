$(function (){
  mainInit();
})

function mainInit(){
  menu();
  searchbar();
  headerbar();
  visual();
  business();
  news();
  echo();
  story();

}

function menu(){
  $('.nav .gnb').on('mouseover',function(){
    $('#header').stop().animate({ height: 400 } , 100 );
    
  })
  $('.nav .gnb').on('mouseout',function(){
    $('#header').stop().animate({ height: 100 } , 100 );
  })
}

function searchbar(){
  $('#header .inner .sub-menu i').on('click',function(){
    $('#header .inner .search .search').removeClass('hide');
    $('#header .inner .search').addClass("on");
    $('#header').css("background-color","#fff");
  })
  $('#header .inner .search i').eq(1).on('click',function(){
    $('#header .inner .search').removeClass("on");
    $('#header').css("background-color","rgba(0, 0, 0, 0.4)");
  })
}

function headerbar(){
  $('.nav .gnb').on('mouseover',function(){
    $('#header .inner').addClass("on");
    $('#header .inner h1 img').attr('src','./images/logo_black.png');
    $('#header').css("background-color","#fff");
  })
  $('.nav .gnb').on('mouseout',function(){
    $('#header .inner').removeClass("on");
    $('#header .inner h1 img').attr('src','./images/logo_white.png');
    $('#header').css("background-color","rgba(0, 0, 0, 0.4)");
  })
}

function visual(){
  var $num = $('.mainVisual .timer .num .current');
  var $total = $('.mainVisual .timer .num .total');
  var $visualli = $('.mainVisual .main-banner li');
  var $ul = $('.mainVisual .main-banner li');
  var $bar = $('.mainVisual .timer .mask .bar');
  var timer = 0, interval = 6000;
  var size = $ul.length;
  var current = 0, old=0;
  $total.text(size);
  $num.text(current+1);
  $bar.stop().css({left:'-250px'}).animate({left:0},interval);
  timer= setInterval( make, interval);

  function make(){
    current++;
    if(current>size-1){
      current=0;
    }
    banner();
    $num.text(current+1);
    $bar.stop().css({left:'-250px'}).animate({left:0},interval);
    barmove();
  }
  function banner(){
    $visualli.eq(current).css({opacity:0,}).animate({opacity:1,},400);
    $visualli.eq(old).css({opacity:1}).animate({opacity:0},400);
    old=current;
  }
  function barmove(){

  }
}

function business(){
  $('.info li').on('click',function(){
    
    var current = $(this).index();
    $('.info li').removeClass('on');
    $('.info li').eq(current).addClass('on');
    $('.detail').removeClass('on');
    $('.detail').eq(current).addClass('on');
    
    
  })
}

function news(){
  var $prev = $('.news .inner p .prev');
  var $next = $('.news .inner p .next');
  var $ul = $('.news .newsbox');
  var $listli= $('.news .list li');
  var first = '',last = '',current=0,old=0;
  last = $('.news .newsbox li').last();
  $ul.prepend(last);
  $ul.css({marginLeft:'-=700'});
  $prev.on('click', function(){
    current--;
    if(current <0){
      current = $listli.length-1;
    }
    $ul.animate({ marginLeft:'+=700'}, 400 , function(){
        last = $('.news .newsbox li').last();
        $ul.prepend( last );
        $ul.css({ marginLeft:'-=700'})
    })
    $listli.eq(current).addClass("on");
    $listli.eq(old).removeClass("on");
    old=current;
  })
  $next.on('click', function(){
    current++;
    if(current > $listli.length-1){
      current = 0;
    }
    $ul.animate({ marginLeft:'-=700'}, 400 , function(){
        first = $('.news .newsbox li').first();
        $ul.append( first );
        $ul.css({ marginLeft:'+=700'})
    })
    $listli.eq(current).addClass("on");
    $listli.eq(old).removeClass("on");
    old=current;
  })
}

function echo(){
  var bgcolor='';
  $('.echoglobal .inner ul li').on('click',function(){
    var current=$(this).index()
    bgcolor=$(this).css("background-color");
    $('.echoglobal .inner ul .circle').removeClass("on");
    $('.echoglobal .inner ul .circle').eq(current).addClass("on");
    $('.echoglobal .inner ul .circle strong').css("color",bgcolor);
  })
}

function story(){
  var $num = $('.story .button .num .current');
  var $total = $('.story .button .num .total');
  var $ul = $('.story .inner article .box ul li');
  var $prev = $('.story .inner article .box .button .prev');
  var $next = $('.story .inner article .box .button .next');
  var size = $ul.length;
  var current = 0;
  $total.text(size);
  $num.text(current+1);

  $prev.on('click',function(){
    current--;
    if(current<0){
      current = size-1;
    }
    $num.text(current+1);
    $ul.removeClass("on");
    $ul.eq(current).addClass("on").css({opacity:0}).animate({opacity:1},200);
    console.log("1231234");
  })
  $next.on('click',function(){
    current++;
    if(current>size-1){
      current = 0;
    }
    $num.text(current+1);
    $ul.removeClass("on");
    $ul.eq(current).addClass("on").css({opacity:0}).animate({opacity:1},200);
  })
}