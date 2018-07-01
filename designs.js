// Select color input
// Select size input
$(function () {
    // Sets grid and color to default
    var theGrid = $("#pixel_canvas");
    var newColor = "#000";

    // Call makeGrid and disallow default submit behavior
    $("#sizePicker").submit(function (e) {
        e.preventDefault();
        makeGrid();
    });

    // Select new color
    $("#colorPicker").change(function () {
        newColor = $(this).val();
    });

// Grid setup upon movement of mouse 
    theGrid.on("mousemove", "td", function (e) {
        if (e.buttons == 1) {
            $(this).css("background-color", newColor); //Draw the td that the user hovers
        }
    });

    theGrid.on("click", "td", function (e) {
        $(this).css("background-color", newColor); //Draw the td that the user clicks
    });

    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
        //  Your code goes here!
        //Set the grid dimensions;
        var gridHeight = $("#input_height").val();
        var gridWidth = $("#input_width").val();
        theGrid.empty();  //reset grid

       // Table grid row creation
        for (x = 0; x <= gridHeight - 1; x++) {
            theGrid.append("<tr>"); //Start Row
            
            for (y = 0; y <= gridWidth - 1; y++) {
                $("tr:eq(" + x + ")").append("<td></td>");
            }
            theGrid.append("</tr>"); //End Row
        }
    }

      $('#pixel_canvas').on('mousedown', 'td', function (e) {
        var key = e.keyCode || e.which;

        switch (key) {
            case 1:
                $('#pixel_canvas').on('mouseleave', 'td', function () {
                    $(this).css('background-color', color.val());
                });
                $('#pixel_canvas').on('mouseup', 'td', function () {
                    $('#pixel_canvas').off('mouseleave');
                    $(this).css('background-color', color.val());
                });
                break;

            case 3:
                $('#pixel_canvas').on('mouseleave', 'td', function () {
                    $(this).css('background-color', "transparent");
                });
                $('#pixel_canvas').on('mouseup', 'td', function () {
                    $('#pixel_canvas').off('mouseleave');
                    $(this).css('background-color', "transparent");
                });
                break;
        }
    });

    //button for hiding the grid
    $('#end').click('#pixel_canvas', function () {
        $('td').toggleClass('finish');
    });

});