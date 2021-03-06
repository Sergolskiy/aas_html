$(document).ready(function () {
    $('.bidding__count-minus').click(function () {
        var input = $(this).next('.bidding__count-input');
        var val = input.val().replace(",", "");
        var flagNewBidding = false;
        if (val == 1) {
            return;
        }
        if ($(this).closest('.new-bidding').length > 0) {
            val = val - 1000;
            if (val == 3000) {
                return;
            }
        } else {
            val = val - 1;
            flagNewBidding = true;
        }

        input.val(new Intl.NumberFormat('en-EN').format(val));
        bindingCalculate(flagNewBidding);
    });


    $('.bidding__count-plus').click(function () {
        var input = $(this).prev('.bidding__count-input');
        var val = input.val().replace(",", "");
        var flagNewBidding = false;


        if ($(this).closest('.new-bidding').length > 0) {

            if (parseInt(val) == 100000) {
                return;
            }
            val = parseInt(val) + 1000;
        } else {


            if (parseInt(val) == 10) {
                return;
            }

            flagNewBidding = true;

            val = parseInt(val) + 1;
        }

        input.val(new Intl.NumberFormat('en-EN').format(val));
        bindingCalculate(flagNewBidding);


    });

    $('.a-contact__phone-country').click(function () {
        $(this).find('.a-contact__phone-list').toggleClass('open');
    });

    $('.a-contact__phone-item').click(function () {
        var html = $(this).html();
        $('.a-contact__phone-current').html(html);
    });

    $('.a-contact__input-checkbox-wrap input').change(function () {
        if ($(this).prop('checked') !== true) {
            $('.a-contact__physical-address').addClass('a-contact__physical-address--open').slideDown();
        } else {
            $('.a-contact__physical-address').removeClass('a-contact__physical-address--open').slideUp();
        }
    });



    $('.bidding__count-input').on('keypress', function (e) {
        if(e.keyCode == 13) {
           $(this).focusout();
        }

        if ($(this).val() == 0) {
            $(this).val('');
        }
        if (isNumberKey(e) == false) {

            e.preventDefault();
        }
    });

    $('.bidding__count-input').focusout(function (e) {
        var count = 1;
        var contMax = 10;
        var checkField = $(this).closest('.new-bidding').length > 0;
        if (checkField) {
            count = 4000;
            contMax = 100000;

            $(this).val(new Intl.NumberFormat('en-EN')
                .format(Math.round(parseInt($(this).val().replace(",", "")) / 1000) * 1000));
        }

        if (parseInt($(this).val().replace(",", "")) < count) {
            $(this).val((new Intl.NumberFormat('en-EN').format(count)));
        }

        if (parseInt($(this).val().replace(",", "")) > contMax) {
            console.log($(this).val());
            $(this).val((new Intl.NumberFormat('en-EN').format(contMax)));
        }

        checkField == true ?  bindingCalculate(false) :  bindingCalculate(true);

    });

    $('.bidding__count-input').focusout();

    function bindingCalculate(flagNewBidding) {
        var limit = $('.new-bidding input');
        var valLimit = $('.new-bidding input').val().replace(",", "");
        var amountOfVehicles = $('.amount-vehicles input');
        var totalLimit = $('.total-limit');
        var totalAmount = $('.total-amount');
        var securityDeposit = $('.security-deposit');
        var payNow = $('.pay-now b');
        var availableBidding = parseInt($('.available-bidding').attr('data-avbid'));
        var freeBidding = parseInt($('.bidding-fee').attr('data-bid'));
        var availableBiddingCount = 0;
        var securityDepositCount = 0;


        // 1 Amount of vehicles
        if(flagNewBidding == false){
            // if bidding limit change
            if(valLimit / 4000 > 10){
                amountOfVehicles.val(10);
            } else {
                amountOfVehicles.val(new Intl.NumberFormat('en-EN').format(Math.floor( valLimit / 4000)));
            }
        } else {
            limit.val(new Intl.NumberFormat('en-EN').format(parseInt(amountOfVehicles.val()) * 4000));
        }

        // 2 Total bidding limit
        availableBiddingCount = parseInt(valLimit) + availableBidding;
        totalLimit.html(new Intl.NumberFormat('en-EN').format(availableBiddingCount));

        // 3 Total amount of vehicles
        totalAmount.html(new Intl.NumberFormat('en-EN').format(Math.floor( availableBiddingCount / 4000)));

        // 4 Security deposit, USD
        securityDepositCount = parseInt(valLimit) / 10;
        securityDeposit.html(new Intl.NumberFormat('en-EN').format(securityDepositCount));

        // 5 You pay now
        payNow.html(new Intl.NumberFormat('en-EN').format(securityDepositCount + freeBidding));

    }

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

        return true;
    }

    // $('.new-bidding input').on('change paste keyup', function () {
    //     bindingCalculate();
    // });

    if ($('#phone').length > 0) {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            separateDialCode: true
        });
    }

    Dropzone.autoDiscover = false;

// Dropzone class:
    if ($('#mydropzone').length > 0) {
        var myDropzone = new Dropzone("div#mydropzone", {
            url: "https://www.mocky.io/v2/5e038ec731000029c26b2c54",
            addRemoveLinks: true,
            acceptedFiles: 'image/jpeg,image/jpg,image/png,application/pdf',
            // previewTemplate: $('#tpl').html(),
            addedfile: function (file, b, c) {
                console.log(file);
                if (!(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'application/pdf')) {
                    return;
                }

                var htmlFile =
                    '<div data-id="' + file.upload.uuid + '" class="a-document__file">\n' + '' +
                    '<div class="a-document__close-file"></div> ' +
                    '<div class="a-document__img">\n' +
                    '<img  src="./img/account/file.png"/>' +
                    '<div class="a-document__progress-bar">' +
                    '<div class="a-document__progress-line"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                $('.a-document__no-img').hide();
                $('.a-document__img-wrap').append(htmlFile);

                if ($('.a-document__img-wrap').width() > $('.a-document__img-scrolling').width()) {
                    $('.a-document__center').addClass('scroll');
                    $('.a-document__img-scrolling').addClass('cus-scroll');
                    $(".cus-scroll").mCustomScrollbar({
                        axis: "x",
                        advanced: {autoExpandHorizontalScroll: true}
                    });
                }
            },
            processing: function () {

            },
            uploadprogress: function (file, progress, c) {
                $('.a-document__file[data-id="' + file.upload.uuid + '"] .a-document__progress-line').css('width', progress + '%');
                if(progress == 100){
                    $('.a-document__file[data-id="' + file.upload.uuid + '"] .a-document__progress-bar').hide();
                }
            },
            success: function (file, b, c) {
                console.log(file.upload.uuid);
                $('.a-document__file[data-id="' + file.upload.uuid + '"] img').attr('src', file.dataURL);

            },
            complete: function (file) {

            }

            // previewTemplate: document.getElementById('template-preview').innerHTML,
            // dictDefaultMessage: "Choose or drop  file from your computer"
        });
    }


    $(document).on('click', '.a-document__close-file', function () {
        $(this).closest('.a-document__file').remove();
        if ($('.a-document__img-wrap').width() < $('.a-document__img-scrolling').width()) {
            $('.a-document__center').removeClass('scroll');
        }
        if ($('.a-document__file').length == 0) {
            $('.a-document__no-img').show();
        }
    });

    $(window).resize(function () {
        if ($('.a-document__invoice-wrap').width() > $('.a-document__invoice-scrolling').width()) {
            $('.a-document__bottom').addClass('scroll');
            $('.a-document__invoice-scrolling').addClass('cus-scroll');
            $(".cus-scroll").mCustomScrollbar({
                axis: "x",
                advanced: {autoExpandHorizontalScroll: true}
            });
        } else {
            $('.a-document__bottom').removeClass('scroll cus-scroll');
        }

        if ($(document).width() < 1050) {

            $('.account__head-inner').scrollLeft(0);
            $('.account__head-inner').scrollLeft(-1 * ($('.account__head-inner').offset().left - $('.account__head-link--active').offset().left));
        }
    });
    $(window).on("load", function () {
        $(window).resize();
    });

    // fix mozilla
    setTimeout(function () {
        $(window).resize();
    });

// If you use jQuery, you can use the jQuery plugin Dropzone ships with:
// 	$("div#myDrop").dropzone({ url: "/file/post" });

});
