// portfolio
console.log("jjjjjjjjjj")
$(".gallery ul li a").click(function() {
    var itemID = $(this).attr("href");
    console.log(itemID);
    $(".gallery ul").addClass("item_open");
    $(itemID).addClass("item_open");
    return false;
});
$(".close").click(function() {
    $(".port, .gallery ul").removeClass("item_open");
    return false;
});

$(".gallery ul li a").click(function() {
    $("html, body").animate({
            scrollTop: parseInt($("#top").offset().top)
        },
        400
    );
});