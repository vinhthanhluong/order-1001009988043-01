$(document).ready(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    // MENU TOGGLE SP
    $('#menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('open-nav');
    });
    // $(document).on('mousedown touchstart', function (e) {
    //     if ($(e.target).closest("#gnavi, #menu-toggle").length === 0) {
    //         if ($('body').hasClass('open-nav')) {
    //             $('#menu-toggle').trigger('click');
    //         }
    //     }
    // });
    // =========== END - MENU TOGGLE SP ============



    // CHANGE TAB
    $('[data-tab]').click(function () {
        var _group = $(this).data('tab-group');
        var _index = $(this).data('tab');
        $('[data-tab][data-tab-group="' + _group + '"].active').removeClass('active');
        $(this).addClass('active');

        $('[data-tab-content][data-tab-group="' + _group + '"].active').removeClass('active');
        $('[data-tab-content="' + _index + '"][data-tab-group="' + _group + '"]').addClass('active');
    });
    // =========== END - CHANGE TAB ============



    // ACCORDION
    $(".accordion-button").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        var _accordionID = $(this).attr('id');
        var accordion_content = $('[data-accordion-for="' + accordionID + '"]');
        accordion_content.stop().slideToggle(200);
    });
    // =========== END - ACCORDION ============



    // SUB NAV SP SLIDE TOGGLE
    $('#gnavi .list-nav span.nav-link').click(function () {
        var _screenWidth = $(window).width();
        if (_screenWidth <= 750) {
            $(this).toggleClass('open');
            $(this).next().stop().slideToggle(200);
        }
    });
    // =========== END - SUB NAV SP SLIDE TOGGLE ============



});

// AOS 
AOS.init({
    startEvent: 'DOMContentLoaded',
    offset: 0,
    duration: 600,
    delay: '200',
    easing: 'ease-in-sine',
    once: true,
    mirror: true,
    disable: function () {
        return $(window).width() <= 768;
    },
});
// =========== END - AOS ============