// main.js
(function() {
    $("[id=responsecontainer]").each( function() {
        // Does this keg contain the justTapped id?
        var justTapped = $(this).find("#justTapped");
        if( justTapped.length == 1 ) {
            console.log( $(this).addClass("green") );
            justTapped.hide();
        }
    });
})();