$('p').on("click",function() {
    $(this).slideToggle('slow');
});
/* using 'this' ensures that only the element which the user clicked on reacts
and not all the same elements if only one of them is clicked */

/******************************************************************************** buttons */
$('button').on("mouseenter", function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
});
$('button').on("mouseleave", function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
});


/******************************************************************************** boxes */
/* below could be used to turn all same boxes red

$( window ).on("load", function () {
    $(".box").on("click", function() {
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    });
});

or see below for alternative.
*/

$( window ).on("load", function () {
    $(".box").on("click", function() {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var classNames = $(this).attr ("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css ("background-color") == "rgb(255, 0, 0)") {
            // if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // else turn all elements with a box class black
            // and then change the colour of all elements
            // with the same class name as the clicked 
            // element to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});