$('.tab').on("click", function(){
 
    if ($(this).hasClass("tab1")) { 
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        $("#tabContent1").css("display", "block");
        $("#tabContent2").css("display", "none");
        console.log("tab 1 was clicked");
    }

    else if ($(this).hasClass("tab2")) {
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        $("#tabContent2").css("display", "block");
        $("#tabContent1").css("display", "none");
        console.log("tab 2 was clicked");

    }


});

