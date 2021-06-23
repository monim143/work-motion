/**
 * @Script js for (Template/Project Name)
 *
 * @project     - people flow
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 27-01-2021
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // when it home page
    // navigation mode change
    // $(function () {
    //     if ($('#banner').length) {
    //         $('#navigation .navbar-main .nav-link').css('color', '#ffff');
    //         $('#navigation .navbar-brand > img').css({
    //             'filter': 'grayscale(100%) brightness(600%)'
    //         });
    //     }
    // });

    // button effect
    // execute : on hover
    $(function () {
        document.querySelectorAll('.button-effect').forEach(function (button) {
            button.innerHTML = '<div><span>' + button.textContent.split(' ').join('</span> <span>') + '</span></div>'
        });
    });

});




/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // svg animation 
    // when trigged specific section
    $(function () {
        let iterationCount = true;
        $(window).on('scroll', function () {
            if ($('#newsletterIllustration').length) {
                let IllustrationOffsetTop = $('#newsletterIllustration').offset().top
                let IllustrationHeight = $('#newsletterIllustration').outerHeight();
                let scrollTop = $(this).scrollTop();
                if (scrollTop >= (IllustrationOffsetTop - IllustrationHeight)) {
                    let anime = document.getElementById('animateMotion-1');
                    if (iterationCount) {
                        anime.beginElement();
                        setTimeout(function () {
                            document.getElementById('sofa').classList.add('currentColor');
                        }, 1000)
                        iterationCount = false
                    }
                }
            }

            // add sticky 
            // for navigation
            if ($('#navigation').length) {
                if ($(this).scrollTop() > $('#navigation').outerHeight()) {
                    $('#navigation').addClass('sticky-menu animated fadeInDown')
                } else {
                    $('#navigation').removeClass('sticky-menu animated fadeInDown')
                }
            }
        });
    });


    // fixedsticky
    $(function () {
        if ($('.fixedsticky').length) {
            $('.fixedsticky').fixedsticky();
        }
    });

    // parallax with jarallax
    $(function () {
        if ($('.jarallax').length) {
            jarallax(document.querySelectorAll('.jarallax'));
        }
    });

    // pedia-navigator
    // scroll to specific section
    // $(function () {
    //     if ($('#navigator').length) {
    //         $('#navigator').on('click', 'a', function () {
    //             $('#navigator li > a').removeClass('active');
    //             $(this).addClass('active');
    //         });
    //     }
    // });


    // js-video-modal
    // youtube and vimeo
    $(function () {
        if ($('.js-video-modal').length) {
            $(".js-video-modal").modalVideo({
                channel: 'youtube',
                youtube: {
                    autoplay: 1,
                    cc_load_policy: 1,
                    color: null,
                    controls: 1,
                    disablekb: 0,
                    enablejsapi: 0,
                    end: null,
                    fs: 1,
                    h1: null,
                    iv_load_policy: 1,
                    list: null,
                    listType: null,
                    loop: 0,
                    modestbranding: null,
                    origin: null,
                    playlist: null,
                    playsinline: null,
                    rel: 0,
                    showinfo: 1,
                    start: 0,
                    wmode: 'transparent',
                    theme: 'dark'
                },
                ratio: '16:9',
                vimeo: {
                    api: false,
                    autopause: true,
                    autoplay: true,
                    byline: true,
                    callback: null,
                    color: null,
                    height: null,
                    loop: false,
                    maxheight: null,
                    maxwidth: null,
                    muted: false,
                    player_id: null,
                    portrait: true,
                    title: true,
                    width: null,
                    xhtml: false
                },
            });
        }
    });


    // select2 init
    // select-utc
    $(function () {
        if ($('.faq-list').length) {
            $('.faq-list').on('click', '.faq-title', function (e) {
                e.preventDefault();
                $(this).closest('.faq-list-item').toggleClass('open').find('.faq-desc').slideToggle();
                $(this).find('.ni').toggleClass('ni-plus ni-minus');
            });
        }
    });


    // select2 init
    $(function () {
        if ($('.select-utc').length) {
            $('.select-utc').select2({
                containerCssClass: "select2Init-utc-container",
                dropdownCssClass: "select2Init-utc-dropdown",
            })
        }
        if ($('#select-job-location').length) {
            $('#select-job-location').select2({
                containerCssClass: "select2Init-utc-container",
                dropdownCssClass: "select2Init-utc-dropdown",
            })
        }
    });


    // calender init
    // step perform
    $(function () {
        if ($('.calender').length) {
            $('.calender').pignoseCalender({
                select: function (date, obj) {
                    $('#book-consultation .step-app .step-footer').removeClass('d-none').addClass('d-flex align-items-center justify-content-between');
                    $('#book-consultation .step-app .step-footer button[data-step-action="next"]').trigger('click').addClass('d-none');
                }
            });
        }

        if ($('.calender-by-modal').length) {
            $('.calender-by-modal').pignoseCalender({
                select: function (date, obj) {
                    $('#modal-configure .step-app .step-footer').removeClass('d-none').addClass('d-flex align-items-center justify-content-between');
                    $('#modal-configure .step-app .step-footer button[data-step-action="next"]').trigger('click').addClass('d-none');
                }
            });
        }

        if ($('.step-app').length) {
            $('.step-app').steps({
                onFinish: function () { alert('complete'); }
            });

            $('.step-app').on('click', '.step-btn', function () {
                if ($(this).closest('.step-app').find('.step-steps li').first().hasClass('active')) {
                    $(this).closest('.step-app').find('.step-footer button[data-step-action="next"]').addClass('d-none')
                }
            });
            $('.step-app').on('click', '.edit-schedule', function () {
                $(this).closest('.step-app').find('.step-footer button[data-step-action="prev"]').trigger('click')
            });
        }

        if ($('.meeting-time').length) {
            $('.meeting-time').on('click', 'label', function (e) {
                e.preventDefault();
                $(this).closest('.step-app').find('.step-footer button[data-step-action="next"]').removeClass('d-none').trigger('click');
            });
        }
    });


    
    // testimonial-carousel init
    // article carousel
    $(function () {
        if ($('#testimonial-carousel').length) {
            $("#testimonial-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: true,
                autoplayHoverPause: true,
                navText: ['<img src="assets/img/arrow-left.svg" alt="icon" class="img-fluid" />', '<img src="assets/img/arrow-right.svg" alt="icon" class="img-fluid" />'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('#article-carousel').length) {
            $("#article-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: true,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-arrow-left"></span>', '<span class="ni ni-arrow-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });

    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });


});
