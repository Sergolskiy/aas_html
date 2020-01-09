$(document).ready(function () {
    
    // Ellipsis
    
    $('.elipsis-text').ellipsis({
        lines: 1,
        responsive: true
    });
    
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 100,
        maxWidth: 300,
        side: 'bottom',
        trigger: 'click'
    });

    var clientWidth = document.documentElement.clientWidth;
    var desk = 1193;

    var minDate = new Date(2019, 0, 1, 0, 0, 0, 0);
    var maxDate = new Date();
    var dateR1 = new Date(2019, 6, 1, 0, 0, 0, 0);
    var dateR2 = new Date();

    // var from = $("#from").datepicker({
    //         dateFormat: 'dd/mm/yy',
    //         minDate: minDate,
    //         maxDate: dateR2
    //     })
    //     .on("change", function () {
    //         to.datepicker("option", "minDate", this.value);
    //         $("#date-range").slider("values", [dateFormat(this.value).getTime() / 1000, dateFormat($('#to').val()).getTime() / 1000]);
    //     }),
    //     to = $("#to").datepicker({
    //         dateFormat: 'dd/mm/yy',
    //         minDate: dateR1,
    //         maxDate: maxDate
    //     })
    //         .on("change", function () {
    //             from.datepicker("option", "maxDate", this.value);
    //             $("#date-range").slider("values", [dateFormat($('#from').val()).getTime() / 1000, dateFormat(this.value).getTime() / 1000]);
    //         });
    // $("#from").datepicker().datepicker("setDate", dateR1);
    // $("#to").datepicker().datepicker('setDate', dateR2);

    // function dateFormat(value) {
    //     var dateString = value;
    //     var dateParts = dateString.split("/");
    //     var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    //     return dateObject;
    // }

    // $("#date-range").slider({
    //     range: true,
    //     min: minDate.getTime() / 1000,
    //     max: maxDate.getTime() / 1000,
    //     step: 86400,
    //     values: [dateR1.getTime() / 1000, dateR2.getTime() / 1000],
    //     slide: function (event, ui) {
    //         from.datepicker("option", "maxDate", ui.values[1] *1000);
    //         to.datepicker("option", "minDate", ui.values[0] *1000);
    //         $("#from").datepicker("setDate", new Date(ui.values[0] *1000));
    //         $("#to").datepicker("setDate", new Date(ui.values[1] *1000));
    //     }
    // });

    // $("#slider-range").slider({
    //     range: true,
    //     min: 0,
    //     max: 1000000,
    //     values: [125000, 799999],
    //     slide: function (event, ui) {
    //         $("#fromValue").val(numberWithCommas(ui.values[0]));
    //         $("#toValue").val(numberWithCommas(ui.values[1]));
    //     }
    // });
    // $("#fromValue").val(numberWithCommas(125000));
    // $("#toValue").val(numberWithCommas(799999));
    //
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    // sidebar drop-down

    $('.sidebar-title, .drop-down-mobile').on('click', function () {
        if (clientWidth < desk) {
            if ($(this).hasClass('drop-down-mobile')) {
                if ($(this).hasClass('show')) {
                    $(this).removeClass('show');
                } else {
                    $(this).addClass('show');
                }
                $(this).nextAll('.sidebar-item').slideToggle('medium', function () {
                    if ($(this).is(':visible'))
                        $(this).css('display', 'block');
                });
            }
        } else {
            if ($(this).hasClass('show')) {
                $(this).removeClass('show');
            } else {
                $(this).addClass('show');
            }
            $(this).next('.sidebar-body').slideToggle('medium', function () {
                if ($(this).is(':visible'))
                    $(this).css('display', 'flex');
            });
        }
    });
    $(window).resize(function () {
        clientWidth = document.documentElement.clientWidth;
    });
    // burger
    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-opener').toggleClass('show');
    });

    // niceSelect
    $('.select-nice').niceSelect();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('.not-clik').click(function (e) {
        e.preventDefault();
    });

    $('#scroll').click(function (e) {
        var body = $("html, body");
        body.stop().animate({
            scrollTop: 0
        }, 500, 'swing', function () {});
    });


    $('#myDropdown').ddslick({
        width: 300,
        selectText: "Select your preferred social network",
        imagePosition: "right",
        onSelected: function (selectedData) {
            //callback function: do something with selectedData;
        }
    });

    $('.car-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.car-slider',
        centerMode: false,
        focusOnSelect: true,
        arrows: false
    });

    $('.car-slider').slickLightbox({
        itemSelector: '.hd-link',
        navigateByKeyboard: true
    });

    $('.bottom-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    function checkWidth() {
        if ($(window).width() < 1000) {
            $('.bottom-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            });
        } else {
            $('.bottom-slider').slick('unslick');
        }
    };

    $(function () {
        checkWidth();
        $(window).on('resize', function () {
            checkWidth();
        });
    });

    var ctx = document.getElementById('myChart');
    if (typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'bar',

            data: {
                labels: ['6/2 - 6/8', '6/9 - 6/15', '6/16 - 6/22', '6/23 - 6/29'],
                datasets: [{
                    fill: false,
                    label: 'Bar Dataset',
                    backgroundColor: 'rgba(103, 99, 254, 0.5)',
                    data: [155, 170, 165, 180],
                    barThickness: 'flex',
                    responsive: true,
                }, {
                    fill: false,
                    label: 'Line Dataset',
                    data: [155, 170, 165, 180],
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    type: 'line',
                    lineTension: 0,
                    borderColor: '#0038FF',
                    pointRadius: 7,
                    pointBackgroundColor: '#fff',
                    responsive: true,
                }],

            },

            options: {
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#4D4D4D',
                        defaultFontSize: 16
                    }
                },
                scales: {
                    xAxes: [{
                        barPercentage: 1,
                        barThickness: 'flex',
                        borderRadius: '2px 2px 0 0',
                        gridLines: {
                            offsetGridLines: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            max: 190,
                            min: 140
                        }
                    }]
                }
            }
        });
    }

    // Show Info

    $('.show-info').on('click', function () {
        $('.show-box').slideToggle(300);
        $('.show-info__icon-arrow').toggleClass('rotate-icon');
        $('.change-text').toggleClass('hide-text');
        $('.change-text-less').toggleClass('show-text');

    });

    // Counter

    $('.btn-minus').click(function () {
        var $input = $(this).parent().find('.btn-counter__input');
        var count = parseInt($input.val().slice(1)) - parseInt($input.attr('step'));
        count = count < parseInt($input.attr('min')) ? parseInt($input.attr('min')) : count;
        $input.val('$' + count);
        $input.change();
        return false;
    });

    $('.btn-plus').click(function () {
        var $input = $(this).parent().find('.btn-counter__input');
        $input.val('$' + (parseInt($input.val().slice(1)) + parseInt($input.attr('step'))));
        $input.change();
        return false;
    });

    // Timer
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 29, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // document.getElementById("time-wrap").innerHTML = days + "d " + hours + "h " +
        //     minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("time-wrap").innerHTML = "EXPIRED";
        }
    }, 1000);


    // State
    $('.buy-now').on('click', function (e) {
        e.preventDefault();
        $('#state-0').hide();
        $('#state-2').fadeIn(200);
    });

    $('.bid-btn').on('click', function (e) {
        e.preventDefault();
        $('#state-0').hide();
        $('#state-1').fadeIn(200);
    });

    $('.sub_final').on('click', function (e) {
        e.preventDefault();
        $('#state-1, #state-2').hide();
        $('#state-0').show();
    });

    $('.final-btn').on('click', function (e) {
        e.preventDefault();
        $('#state-1, #state-2').hide();
        $('#state-3').show();
    });

    $('.choose-place__button-back').on('click', function (e) {
        e.preventDefault();
        $('#state-1, #state-2, #state-3').hide();
        $('#state-0').show();
    });


});
