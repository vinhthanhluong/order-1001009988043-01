// ANCHOR LINK
// function anchorLink(el) {
//     var p = $(el).offset();
//     var offsetPC = 0;
//     var offsetSP = 0;
//     if ($(window).width() > 750) {
//         $('html,body').animate({ scrollTop: p.top - offsetPC }, 400);
//     } else {
//         $('html,body').animate({ scrollTop: p.top - offsetSP }, 400);
//     }
// }
// $(window).bind('load', function() {
//     "use strict";
//     // ANCHOR FROM OTHER PAGE
//     var hash = location.hash;
//     if (hash && $(hash).length > 0) {
//         anchorLink(hash);
//     }

//     // ANCHOR IN PAGE
//     $('a[href^="#"]').click(function() {
//         var getID = $(this).attr('href');
//         if ($(getID).length) {
//             anchorLink(getID);
//             // CLOSE SP NAV
//             if ($('body').hasClass('open-nav')) {
//                 $('#menu-toggle').trigger('click');
//             }
//             return false;
//         }
//     });
// });
// =========== END - ANCHOR LINK ============

// BACK TO TOP
// $(document).ready(function() {
//     "use strict";
//     $(".scroll-top").click(function () {
//         $('html,body').animate({
//             scrollTop: 0,
//         }, 1000);
//         return false;
//     });

//     let lastScrollTop = 0;
//     $(window).scroll(function () {
//         var st = $('html,body').scrollTop();
//         if (st < 10) {
//             $('.scroll-top').removeClass('--active');
//             return;
//         }
//         if (st > lastScrollTop) {
//             $('.scroll-top').removeClass('--active');
//         } else {
//             $('.scroll-top').addClass('--active');
//         }
//         lastScrollTop = st <= 0 ? 0 : st;
//     });
// });
// =========== END - BACK TO TOP ============


// SCROLL HEADER

// $(window).scroll(function () { 
//     var st  = $(window).scrollTop();
//     var heightHeader = $('#header').outerHeight();

//     if (st > 10) {
//         $('#header').addClass('--fix');
//         // $('#main').css('margin-top' , heightHeader);
//     }else{
//         $('#header').removeClass('--fix');
//         // $('#main').css('margin-top' , '0px');
//     }
// });

// =========== END - SCROLL HEADER ============


// SCROLL TO MAIL FORM
// $(window).bind('load', function() {
//     "use strict";
//     if ($('#fmail_section').length > 0) {
//         var x = location.search;
//         if (x.search('mode') >= 0) {
//             var _mailFormPos = $('#fmail_section').offset().top;
//             _mailFormPos = parseInt(_mailFormPos);
//             if ($(window).width() > 750) {
//                 $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
//             } else {
//                 $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
//             }
//         }
//     }
// });
// =========== END - SCROLL TO MAIL FORM ============