const appBtn=$('.app-btn');

appBtn.on({click:function(){
    $('.bar').toggleClass('add-btn');
    $('.mobile-nav').slideToggle(500)
}})
//news
const newsBannerWrap=$('.news-wraps')
const newsBanner=$('.news-wraps .news-wrap');
let current=0; 
let newsInterval;


newsSlide()
function newsSlide(){
    
    newsInterval=setInterval(function(){
        let prev=newsBanner.eq(current); 
    newsMove(prev, 0, '-100%')
    current++;
    if(current==newsBanner.size())current=0;
    let next=newsBanner.eq(current);
    newsMove(next, '100%', 0)
    },2000)
    

}
function newsMove(tg, start, end){
    tg.css('top',start).stop().animate({top:end},500)
}

newsBannerWrap.hover(function(){
    clearInterval(newsInterval)
},function(){
    newsSlide()
})


//버튼

let buttonRadius=$('.btn li');
let line=$('.template-line-wrap .title li')

buttonRadius.click(function(){
    buttonRadius.removeClass('on')
    $(this).addClass('on')
    let lines=$(this).index();
   // console.log(lines)
   line.removeClass('on');
   line.eq(lines).addClass('on')

})



// 슬라이드 베너
const slideBanner= $('#banner .banner-area .area');
const sliedeList=$('#banner .banner-area .area li' );
const prevBtn=$('.banner-left-btn')
const nextBtn=$('.banner-right-btn')
let slideWidth=sliedeList.width();
// console.log(slideWidth)
let setIntervalId;
bannerSlide()
function bannerSlide(){
    setIntervalId=setInterval(()=>{
        slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
            $('#banner .banner-area .area li:first' ).insertAfter('#banner .banner-area .area li:last')
            slideBanner.css({left:0})
        })
    }, 2000)

}
$('.banner-left-btn, .banner-right-btn, .banner-area  ').on('mouseover focus', function(){
    clearInterval( setIntervalId)
})
$('.banner-left-btn, .banner-right-btn, .banner-area  ').on('mouseout leave', function(){
    bannerSlide()
})
function rightBtn(){
    slideBanner.stop().animate({left:-(slideWidth+15)}, function(){
        $('#banner .banner-area .area li:first' ).insertAfter('#banner .banner-area .area li:last')
        slideBanner.css({left:0})
    })
    
      
    
    

}
function leftBtn(){
    $('#banner .banner-area .area li:last' ).insertBefore('#banner .banner-area .area li:first')
    slideBanner.css({left:0-(slideWidth+15)}).stop().animate({left:0},500)
   
    
}
nextBtn.click(function(){
    rightBtn()
})

prevBtn.click(function(){
    leftBtn()
})

// bx 
$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
  
  });

// const slideBanner =$('#banner .banner-area .area');      //변수선언 \slideBanner\과  대입 \$()를 슬라이드 베너에 넣음\
// const slideList =$('#banner .banner-area .area li');     //변수선언
// const preBtn =$('banner-left-btn');                      //변수선언
// const nextBtn =$('banner-righgt-btn');                   //변수선언
// let slideWidth=slideList.width();                        //변수선언
// console.log(slideWidth);                                 //슬라이드 가로값

// let setIntervalId;                                       //"setIntervalId"변수 선언 반복을 위해 사용 일정 시간동안 같은 행동 반복하는 것

// bannerSlide()                                            //bannerSlide 함수 실행문
// function bannerSlide(){                                                             // bannerSlide 함수 작성
//     setIntervalId= setInterval(function(){                                          //setInterval id로 넣어줌
//         slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){                //슬라이드 배너 애니메이트 left기준 {-슬라이드 (가로값+15px)} 값만큼 이동시키기 500(0.5초 이미지 슬라이드 변경시간 )
//             $('#banner .banner-area .area li:first' ).insertAfter('#banner .banner-area .area li:last')  //$()-선택자 선택 li:first를 insertAfter(선택자 뒤에 삽입) li:last에 넣기
//             slideBanner.css({left:0})                                                                    //슬라이드 배너를 css기준 left:0 위치에 놓기 (left 위치를 css상에서 지정 했을 경우만 사용 가능) 
//             })
//     },2000)                                                                                              //setInterval 2000(2초) 2초동안 setIntervalId에 대입한 함수의 내용을 반복 /시간설정/
    

// }
// $('.banner-left-btn, .banner-right-btn, .banner-area  ').on('mouseover focus', function(){               //$()선택자 안에 있는 태그를 'on'(여러 요소에 적용되게 묶어줌) 'mouseover'(마우스를 올리면) 함수 실행
//     clearInterval( setIntervalId)                                                                        //"clearInterval"(setInterval()에 의해 실행된 반복 작업을 종료) 를 사용해 위에 사용 했던 setIntervalId를 제어
// })                                                                                  //setIntervalId로 반복적으로 실행됬던 애니메이션이 clearInterval 로 정지됨 "mouseover"시

// $('.banner-left-btn, .banner-right-btn, .banner-area  ').on('mouseleave focus', function(){              //mouseover시 clearInterval를 이용해 정지해준 애니메이션을 mouseleave시 
//     bannerSlide()                                                                                        //-setInterval-이 포함되어있는 bannerSlide()함수를 불러내어  마우스 리브시 다시 애니메이션이 작동하게 만들어 주었음
// })
