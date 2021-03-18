$(".toggle").click(function(){ 
    $(this).find(".toggleContainer").toggleClass("active");
$(this).siblings(".janisa").find(".toggleContainer").removeClass("active");

} );


$(".searchButton").click(function(){ 

    $(".searchButton").toggleClass("active");
    
    if ($(".searchButton").hasClass("active")) { 

        $(".searchBar").css("height","100vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");

    }  


    else {
        $(".searchBar").css("height","0vh");
        $("#searchForm").css("opacity","0");
        $(".searchIcon").removeClass("fa-times").addClass("fa-search");

    }
}
);

function fade() {
    $(".preloader").fadeOut("fast");  
}

setTimeout(fade,1000);

