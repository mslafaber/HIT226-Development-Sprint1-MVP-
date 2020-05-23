$(document).ready(function () {
    $("#pasta, #salads, #drinks, #sides, #payment").css("display", "none");
    $("#pizza_button").click(function () {
        $("#pizza").show();
        $("#pasta, #salads, #drinks, #sides, #payment").hide();
        $("#pasta_button, #salads_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#61120E"});
        $("#pizza_button").css({"background-color":"#CA2521"});
    });
    $("#pasta_button").click(function () {
        $("#pasta").show();
        $("#pizza, #salads, #drinks, #sides, #payment").hide();
        $("#pizza_button, #salads_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#61120E"});
        $("#pasta_button").css({"background-color":"#CA2521"});
    });
    $("#salads_button").click(function () {
        $("#salads").show();
        $("#pizza, #pasta, #drinks, #sides, #payment").hide();
        $("#pasta_button, #pizza_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#61120E"});
        $("#salads_button").css({"background-color":"#CA2521"});
    });
    $("#drinks_button").click(function () {
        $("#drinks").show();
        $("#pizza, #salads, #pasta, #sides, #payment").hide();
        $("#pasta_button, #salads_button, #pizza_button, #sides_button").css({"border": "none", "background-color":"#61120E"});
        $("#drinks_button").css({"background-color":"#CA2521"});
    });
    $("#sides_button").click(function () {
        $("#sides").show();
        $("#pizza, #salads, #drinks, #pasta, #payment").hide();
        $("#pasta_button, #salads_button, #drinks_button, #pizza_button").css({"border": "none", "background-color":"#61120E"});
        $("#sides_button").css({"background-color":"#CA2521"});
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
                $("#pasta_button, #salads_button, #drinks_button, #sides_button").css({"border": "none", "background-color":"#61120E"});
                $("#pizza_button").css({"background-color":"#CA2521"});
            });
            $("#pasta, #salads, #drinks, #sides").hide();
        });
    });
    $("#payment_next_button").click(function() {
        $(".payment_time").hide();
        $(".confirmation_time").show();
        $("#payment").slideUp(175, function () {
            $("#confirmation").slideDown(175);
        });
    });
    $("#confirmation_back_button").click(function() {
        $(".payment_time").show();
        $(".confirmation_time").hide();
        $("#confirmation").slideUp(175, function () {
            $("#payment").slideDown(175);
        });
    });
    $("#credit_card").click(function () {
        $("#credit_card_form").slideDown(175, function () {
            $(".cc_elements").attr('required', true);
        });
        $("#pay_in_store_form").slideUp(175, function () {
            $(".pis_elements").attr('required', false);
        });
    });
    $("#pay_in_store").click(function () {
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
});
