$(document).ready(function () {
    $('.bidding__count-minus').click(function () {
        var input = $(this).next('.bidding__count-input');
        var val = input.val().replace(",", "");
        if (val == 1) {
            return;
        }
        if ($(this).closest('.new-bidding').length > 0) {
            bindingCalculate();
            val = val - 1000;
            if (val == 3000) {
                return;
            }
        } else {
            val = val - 1;
        }

        input.val(new Intl.NumberFormat('en-EN').format(val));


    });
    $('.bidding__count-plus').click(function () {
        var input = $(this).prev('.bidding__count-input');
        var val = input.val().replace(",", "");

        if ($(this).closest('.new-bidding').length > 0) {
            bindingCalculate();
            val = parseInt(val) + 1000;
        } else {
            val = parseInt(val) + 1;
        }


        input.val(new Intl.NumberFormat('en-EN').format(val));

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
        if ($(this).val() == 0) {
            $(this).val('');
        }
        if (isNumberKey(e) == false) {

            e.preventDefault();
        }
    });
    $('.bidding__count-input').on('keyup', function (e) {
        var count = 1;
        if ($(this).closest('.new-bidding').length > 0) {
            count = 4000;
        }
        if ($(this).val() < count) {
            $(this).val(count);
        }
    });

    function bindingCalculate() {
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
        amountOfVehicles.val(valLimit / 4000);

        // 2 Total bidding limit
        availableBiddingCount = parseInt(valLimit) + availableBidding;
        totalLimit.html(new Intl.NumberFormat('en-EN').format(availableBiddingCount));

        // 3 Total amount of vehicles
        totalAmount.html(new Intl.NumberFormat('en-EN').format(availableBiddingCount / 4000));

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

    $('.new-bidding input').on('change paste keyup', function () {
        bindingCalculate();
    });

    if ($('#phone').length > 0) {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            separateDialCode: true
        });
    }

    Dropzone.autoDiscover = false;

// Dropzone class:
    var myDropzone = new Dropzone("div#mydropzone", {
        url: "http://www.mocky.io/v2/5e038ec731000029c26b2c54",
        addRemoveLinks: true,
        previewTemplate: $('#tpl').html(),
        uploadprogress: function (file, progress, bytesSent) {
            if (file.previewElement) {
                var progressElement = file.previewElement.querySelector("[data-dz-uploadprogress]");
                progressElement.style.width = progress + "%";
                progressElement.querySelector(".progress-text").textContent = progress + "%";
            }
        },
        processing: function () {
            // alert(324)
        },
        uploadprogress: function (a, b, c) {
            console.log(b);
        },
        success: function (a, b, c) {
            // console.log(a.dataURL);
            var htmlImg =
                '<div class="a-document__img">\n' +
                    '<img src="'+a.dataURL+'"/>' +
                '</div>';
            // console.log(b);
            // console.log(c);
            console.log(htmlImg);
        },
        complete: function (file) {
            console.log(232423);
            // console.log(file);
            var htmlRemove =
                '<div class="a-document__remove" onclick="deleteFile()">\n' +
                'sdfsdfdfsd'+
                '</div>';

            function deleteFile(){
                myDropzone.removeFile(file);
            }

            $('.a-document__img-wrap').append(htmlRemove);
        }

        // previewTemplate: document.getElementById('template-preview').innerHTML,
        // dictDefaultMessage: "Choose or drop  file from your computer"
    });

// If you use jQuery, you can use the jQuery plugin Dropzone ships with:
// 	$("div#myDrop").dropzone({ url: "/file/post" });

});
