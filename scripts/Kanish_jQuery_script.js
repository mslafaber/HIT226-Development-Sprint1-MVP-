$(document).ready(function () {
    var cc_number, cc_email, cc_cvv, cc_phone, cc_name, cc_expDate = true;
    var pis_email, pis_phone, pis_name = true;
    var booking_guests = true;

    $("#pasta, #salads, #drinks, #sides, #payment").css("display", "none");
    $("#pizza_button").click(function () {
        $("#pizza").show();
        $("#pasta, #salads, #drinks, #sides, #payment").hide();
        $("#pasta_button, #salads_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#CA2521"});
        $("#pizza_button").css({"background-color":"red"});
    });
    $("#pasta_button").click(function () {
        $("#pasta").show();
        $("#pizza, #salads, #drinks, #sides, #payment").hide();
        $("#pizza_button, #salads_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#CA2521"});
        $("#pasta_button").css({"background-color":"red"});
    });
    $("#salads_button").click(function () {
        $("#salads").show();
        $("#pizza, #pasta, #drinks, #sides, #payment").hide();
        $("#pasta_button, #pizza_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#CA2521"});
        $("#salads_button").css({"background-color":"red"});
    });
    $("#drinks_button").click(function () {
        $("#drinks").show();
        $("#pizza, #salads, #pasta, #sides, #payment").hide();
        $("#pasta_button, #salads_button, #pizza_button, #sides_button").css({"border": "none", "background-color":"#CA2521"});
        $("#drinks_button").css({"background-color":"red"});
    });
    $("#sides_button").click(function () {
        $("#sides").show();
        $("#pizza, #salads, #drinks, #pasta, #payment").hide();
        $("#pasta_button, #salads_button, #drinks_button, #pizza_button").css({"border": "none", "background-color":"#CA2521"});
        $("#sides_button").css({"background-color":"red"});
    });
    $("#order_next_button").click(function() {
        $(".order_time").hide();
        $(".payment_time").show();
        $(".order_container").slideUp(600, function () {
            $("#payment").slideDown(175);
        });
    });
    $("#payment_back_button").click(function() {
        $(".order_time").show();
        $(".payment_time").hide();
        $("#payment").slideUp(175, function(){
            $(".order_container").slideDown(175, function(){
                $("#cart_contents").hide();
                $("#pizza").slideDown();
                $("#pasta_button, #salads_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#CA2521"});
                $("#pizza_button").css({"background-color":"red"});
            });
            $("#pasta, #salads, #drinks, #sides").hide();
        });
    });
    $("#payment_next_button").click(function() {
        if (cc_number == false && cc_email == false && cc_cvv == false && cc_phone == false && pis_email == false && pis_name == false && pis_phone == false) {
            $(".payment_time").hide();
            $(".confirmation_time").show();
            $("#payment").slideUp(175, function () {
                $("#confirmation").slideDown(175);
            });   
        }
    });
    $("#confirmation_back_button").click(function() {
        $(".payment_time").show();
        $(".confirmation_time").hide();
        $("#confirmation").slideUp(175, function () {
            $("#payment").slideDown(175);
        });
    });
    $("#credit_card").click(function () {
        cc_number= true;
        cc_email = true;
        cc_cvv = true;
        cc_phone = true;
        cc_name = true;
        cc_expDate = true,

        pis_email= false;
        pis_phone= false;
        pis_name = false;
        $(".pis_elements").css({"border-bottom":"grey solid"});
        $("#credit_card_form").slideDown(175, function () {
            $(".cc_elements").attr('required', true);
        });
        $("#pay_in_store_form").slideUp(175, function () {
            $(".pis_elements").attr('required', false);
        });
    });
    $("#pay_in_store").click(function () {
        $(".cc_elements").css({"border-bottom":"grey solid"});
        cc_number= false;
        cc_email = false;
        cc_cvv = false;
        cc_phone = false;
        cc_name = false;
        cc_expDate = false,

        pis_email= true;
        pis_phone= true;
        pis_name = true;
        $("#pay_in_store_form").slideDown(175, function () {
            $(".pis_elements").attr('required', true);
        });
        $("#credit_card_form").slideUp(175, function () {
            $(".cc_elements").attr('required', false);
        });
    });
    $("#view_cart").click(function () {
        $("#cart_contents").slideToggle();
    });
    //jquery for the main site navigation
    $(".navigation-toggle").click(function() {
      $(".navigation-toggle").toggleClass("active")
      $("nav.sitenavigation").toggleClass("active")
    })
    //end
    $("#bookingButton").click(function () {
    if ($("#cc_name").css("border-bottom") == "2.4px solid rgb(0, 128, 0)"
        && $("#cc_phone").css("border-bottom") == "2.4px solid rgb(0, 128, 0)"
        && $("#cc_email").css("border-bottom") == "2.4px solid rgb(0, 128, 0)"
        && $("#guests_reservation").css("border-bottom") == "2.4px solid rgb(0, 128, 0)") {
        $(".booking_done").show();
        $(".booking_form").hide();
    }   
    });
    $("#cc_name").focusout(ccNameValidation);
    $("#pis_name").focusout(pisNameValidation);
    $("#cc_email").focusout(ccEmailValidation);
    $("#pis_email").focusout(pisEmailValidation);
    $("#cc_phone").focusout(ccPhoneValidation);
    $("#pis_phone").focusout(pisPhoneValidation);
    $("#card_number").focusout(cardNumberValidation);
    $("#cvv").focusout(cvvValidation);
    $("#guests_reservation").focusout(guestsValidation);
    $("#exp_date").focusout(cc_expDateValidation);
    $("#exp_date").datepicker(
        {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'MM yy',
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            },
        });

    function ccEmailValidation(){ 
        var emailRegEx = /^([\w\.-]+)@([a-z0-9 -]+)\.([a-z]{2,8})(\.[a-z]{1,8})?$/;
        var email = $("#cc_email").val();

        if (emailRegEx.test(email) == false || email == "") {
            $("#cc_email").css({"border-bottom":"red solid"});
            cc_email = true
        }
        else{
            $("#cc_email").css({"border-bottom":"green solid"});
            cc_email = false
        }
    }
    function pisEmailValidation(){ 
        var emailRegEx = /^([\w\.-]+)@([a-z0-9 -]+)\.([a-z]{2,8})(\.[a-z]{1,8})?$/;
        var email = $("#pis_email").val();

        if (emailRegEx.test(email) == false || email == "") {
            $("#pis_email").css({"border-bottom":"red solid"});
            pis_email = true;
        }
        else{
            $("#pis_email").css({"border-bottom":"green solid"});
            pis_email = false;
        }
    }
    function ccPhoneValidation(){
        var phoneRegEx = /^0[3-4]\d{8}$/;
        var phone = $("#cc_phone").val();
        if (phoneRegEx.test(phone) == false || phone == "") {
            $("#cc_phone").css({"border-bottom":"red solid"});
            cc_phone = true;
        }
        else{
            $("#cc_phone").css({"border-bottom":"green solid"});
            cc_phone = false;
        }
    }
    function pisPhoneValidation(){
        var phoneRegEx = /^0[3-4]\d{8}$/;
        var phone = $("#pis_phone").val();
        if (phoneRegEx.test(phone) == false || phone == "") {
            $("#pis_phone").css({"border-bottom":"red solid"});
            pis_phone = true;
        }
        else{
            $("#pis_phone").css({"border-bottom":"green solid"});
            pis_phone = false;
        }
    }
    function cardNumberValidation(){
        var cardRegEx = /^\d{4}$/;
        var cardNumber = $("#card_number").val();

        if (cardRegEx.test(cardNumber) == false || cardNumber == "") {
            $("#card_number").css({"border-bottom":"red solid"});
            cc_number = true;
        }
        else{
            $("#card_number").css({"border-bottom":"green solid"});
            cc_number = false;
        }
    }
    function cvvValidation(){
        var cvvRegEx = /^\d{3}$/;
        var cvv = $("#cvv").val();

        if (cvvRegEx.test(cvv) == false || cvv == "") {
            $("#cvv").css({"border-bottom":"red solid"});
            cc_cvv = true;
        }
        else{
            $("#cvv").css({"border-bottom":"green solid"});
            cc_cvv = false;
        }
    }
    function ccNameValidation(){
        var name = $("#cc_name").val();

        if (name == "") {
            $("#cc_name").css({"border-bottom":"red solid"});
            cc_name = true;
        }
        else{
            $("#cc_name").css({"border-bottom":"green solid"});
            cc_name = false;
        }
    }
    function pisNameValidation(){
        var name = $("#pis_name").val();

        if (name == "") {
            $("#pis_name").css({"border-bottom":"red solid"});
            pis_name = true;
        }
        else{
            $("#pis_name").css({"border-bottom":"green solid"});
            pis_name = false;
        }
    }
    function cc_expDateValidation(){
        var expDate = $("#exp_date").val();

        if (expDate == "") {
            $("#exp_date").css({"border-bottom":"red solid"});
            cc_expDate = true;
        }
        else{
            $("#exp_date").css({"border-bottom":"green solid"});
            cc_expDate = false;
        }
    }
    function guestsValidation() {
        guestRegEx = /^[1-9]$/;
        value = $("#guests_reservation").val();
        if (guestRegEx.test(value) == false || value =="") {
            $("#guests_reservation").css({"border-bottom":"red solid"});
            booking_guests = true;
        }
        else{
            $("#guests_reservation").css({"border-bottom":"green solid"});
            booking_guests = false;
        }
    }
});
