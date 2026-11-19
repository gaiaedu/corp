$(function() {
    $('.slick-main1').slick({
        dots: false, // スライダー下部に表示される、ドット状のページネーションです
        infinite: true, // 無限ループ
        speed: 2800, // 切り替わりのスピード 8000
        autoplaySpeed: 5000, //自動再生時の移動までの時間 3000
        slidesToShow: 1, //通常 1024px以上の領域では3画像表示
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase:'linear',
        rtl: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        swipe: true,
        responsive: [{
            breakpoint: 1024,settings: { //601px～1024pxでは3画像表示
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
            {
                breakpoint: 933,settings: { //481px～933pxでは2画像表示
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,settings: {//480px以下では1画像表示
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });


    $('.slick-main3').slick({
        dots: true, // スライダー下部に表示される、ドット状のページネーションです
        infinite: true, // 無限ループ
        speed: 800, // 切り替わりのスピード 8000
        autoplaySpeed: 2500, //自動再生時の移動までの時間 3000
        slidesToShow: 3, //通常 1024px以上の領域では3画像表示
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        cssEase:'linear',
        rtl: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        swipe: true,
        responsive: [{
            breakpoint: 1024,settings: { //601px～1024pxでは3画像表示
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
            {
                breakpoint: 933,settings: { //481px～933pxでは2画像表示
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,settings: {//480px以下では1画像表示
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});