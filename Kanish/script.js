$(document).ready(function () {
    $("#pizza_button").click(function () { 
        $("#pizza").toggle();
        $("#pasta, #sides, #drinks, #meals").css("display", "none");
        $("#pasta_button, #sides_button, #drinks_button, #meals_button").css("border", "none");
        $("#pizza_button").css({"border": "black solid", "background-color":"red"});


    });
    $("#pasta_button").click(function () { 
        $("#pasta").toggle();
        $("#pizza, #sides, #drinks, #meals").css("display", "none");
        $("#pizza_button, #sides_button, #drinks_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#pasta_button").css({"border": "black solid", "background-color":"red"});
    });
    $("#sides_button").click(function () { 
        $("#sides").toggle();
        $("#pizza, #pasta, #drinks, #meals").css("display", "none");
        $("#pasta_button, #pizza_button, #drinks_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#sides_button").css({"border": "black solid", "background-color":"red"});
    });
    $("#drinks_button").click(function () { 
        $("#drinks").toggle();
        $("#pizza, #sides, #pasta, #meals").css("display", "none");
        $("#pasta_button, #sides_button, #pizza_button, #meals_button").css({"border": "none", "background-color":"#bf0603"});
        $("#drinks_button").css({"border": "black solid", "background-color":"red"});
    });
    $("#meals_button").click(function () { 
        $("#meals").toggle();
        $("#pizza, #sides, #drinks, #pasta").css("display", "none");
        $("#pasta_button, #sides_button, #drinks_button, #pizza_button").css({"border": "none", "background-color":"#bf0603"});
        $("#meals_button").css({"border": "black solid", "background-color":"red"});
    });
});