$(document).ready(function()
{
    $("#authors ul li").click(function()
    {
        $("#authors ul li ul").slideUp();
        $("#authors ul li.selected").removeClass("selected");
        $(this).addClass("selected");

        var currentDisplay = $(this).find("ul").css("display");
        if( currentDisplay === "none")
        {
            $(this).find("ul").slideDown();
        }

    });
});