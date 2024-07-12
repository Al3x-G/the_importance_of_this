$('p').on("click",function() {
    $(this).slideToggle('slow');
});
/* using 'this' ensures that only the element which the user clicked on reacts
and not all the same elements if only one of them is clicked */

$('button').on("mouseenter", function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
});
$('button').on("mouseleave", function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
});