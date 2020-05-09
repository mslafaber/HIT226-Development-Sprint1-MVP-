$(document).ready(function () {   
    $("#pasta, #sides, #drinks, #meals, #payment").css("display", "none");
    $("#pizza_button").click(function () { 
        $("#pizza").show();
        $("#pasta, #sides, #drinks, #meals, #payment").hide();
        $("#pasta_button, #sides_button, #drinks_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#pizza_button").css({"background-color":"red"});

    });
    $("#pasta_button").click(function () { 
        $("#pasta").show();
        $("#pizza, #sides, #drinks, #meals, #payment").hide();
        $("#pizza_button, #sides_button, #drinks_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#pasta_button").css({"background-color":"red"});
    });
    $("#sides_button").click(function () { 
        $("#sides").show();
        $("#pizza, #pasta, #drinks, #meals, #payment").hide();
        $("#pasta_button, #pizza_button, #drinks_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#sides_button").css({"background-color":"red"});
    });
    $("#drinks_button").click(function () { 
        $("#drinks").show();
        $("#pizza, #sides, #pasta, #meals, #payment").hide();
        $("#pasta_button, #sides_button, #pizza_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#drinks_button").css({"background-color":"red"});
    });
    $("#meals_button").click(function () { 
        $("#meals").show();
        $("#pizza, #sides, #drinks, #pasta, #payment").hide();
        $("#pasta_button, #sides_button, #drinks_button, #pizza_button").css({"border": "none", "background-color":"#bf0603"});
        $("#meals_button").css({"background-color":"red"});
    });
    $("#order_next_button").click(function() {
        $(".order_time").hide();
        $(".payment_time").show(); 
        $(".order_container").slideUp(300, function () {
            $("#payment").slideDown(300);
        });
    });
    $("#payment_back_button").click(function() { 
        $(".order_time").show();
        $(".payment_time").hide(); 
        $("#payment").slideUp(300, function(){
            $(".order_container").slideDown(300, function(){
                $("#pizza").slideDown();
                $("#pasta_button, #sides_button, #drinks_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
                $("#pizza_button").css({"background-color":"red"});
            });
            $("#pasta, #sides, #drinks, #meals").hide();
        });
    });
    $("#payment_next_button").click(function() {
        $(".payment_time").hide();
        $(".confirmation_time").show(); 
        $("#payment").slideUp(300, function () {
            $("#confirmation").slideDown(300);
        });
    });
    $("#confirmation_back_button").click(function() {
        $(".payment_time").show();
        $(".confirmation_time").hide(); 
        $("#confirmation").slideUp(300, function () {
            $("#payment").slideDown(300);
        });
    });
    $("#credit_card").click(function () { 
        $("#credit_card_form").slideDown(300, function () {
            $(".cc_elements").attr('required', true);
        });
        $("#pay_in_store_form").slideUp(300, function () {
            $(".pis_elements").attr('required', false);
        });
    });
    $("#pay_in_store").click(function () {
        $("#pay_in_store_form").slideDown(300, function () {
            $(".pis_elements").attr('required', true);
        });
        $("#credit_card_form").slideUp(300, function () {
            $(".cc_elements").attr('required', false);
        });
    });
});