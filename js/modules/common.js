$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');
    var obj = {
        init: function () {
            this.toTop();
        },
       

        toTop: function () {
            $(".scroll-top").click(function () {
                $('html,body').animate({
                    scrollTop: 0,
                }, 1000);
                return false;
            });

            $(window).scroll(function () {
                var st = $('html,body').scrollTop();
               
                if (st > 10) {
                    $('.btn-fix').addClass('--show');
                } else {
                    $('.btn-fix').removeClass('--show');

                }
            });
        },

    }

    obj.init();
});