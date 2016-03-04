var fetchBooks = function () {
    var parameters = {
        url:"data/books.json",
        dataType: "json",
        success:function(result){
            for(var i = 0; i < result.authors.length; i++)
            {
                var author = result.authors[i];
                var listItem = $(document.createElement("li"))
                    .text(author.firstName + " " + author.lastName);

                $("#authors ul").append(listItem);
            }
        },
        error:function(error)
        {
            console.error(error);
        }
    };

    $.ajax(parameters);
};

var bindAuthors = function () {
    $("#authors ul li").click(function () {
        $("#authors ul li ul").slideUp();
        $("#authors ul li.selected").removeClass("selected");
        $(this).addClass("selected");

        var currentDisplay = $(this).find("ul").css("display");
        if (currentDisplay === "none") {
            $(this).find("ul").slideDown();
        }

    });
};

$(document).ready(function () {
    bindAuthors();
    fetchBooks();
});