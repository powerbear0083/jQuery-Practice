function slideSwitch1() {
    var $active = $('#sliderShow .active');
    var $next = $active.next();

    $next.addClass('active');
    $active.removeClass('active');

}
function slideSwitch2() {
    var $active = $('#sliderShow .active');
    var $next = $active.next();

	//第一張圖片利用zindex屬性跑到下一張
    $active.addClass('last-active');
    //第二張圖片透明度初始直為0，加class name跑到第一張，並改變透明度
    //一秒後，第二圖移除class name ,第三張圖出現
    $next.css({
        opacity: 0.0
    }).addClass('active')
        .animate({
            opacity: 1.0
        }, 1000, function() {
            $active.removeClass('active last-active');
        });
}
function slideSwitch3() {
    var $active = $('#sliderShow .active');
    var $next = $active.next();

    console.log($('#sliderShow img:last'));
    if($active.length == 0){
        $active = $('#sliderShow img:last');
    }
    var $next = $active.next().length ? $active.next() : $('#sliderShow img:first');
    $active.addClass('last-active');

    $next.css({
        opacity: 0.0
    })
        .addClass('active')
        .animate({
            opacity: 1.0
        }, 1000, function() {
            $active.removeClass('active last-active');
        });
}
setInterval(slideSwitch3, 1000);