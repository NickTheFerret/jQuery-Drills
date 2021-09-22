$(document).ready(function () {
    const btnSubmit = $("#btnSubmit");
    const field = $("input[type='text']")
    const ul = $("<ul></ul>");
    $("body").append(ul)



    btnSubmit.click(function (e) {
        e.preventDefault();
        // alert(formText.val());

        // const newh2 = $("<h2></h2>");

        // newh2.text(field.val());
        // newh2.hover(function () {
        //     newh2.css("background-color", getRandomColor())
        // })

        // $("#newDiv").append(newh2);

        const newli = $("<li></li>");
 
        newli.text(field.val());
        newli.click(function () {
            newli.css("background-color", getRandomColor())
        });

        $("ul").append(newli);

newli.dblclick(function() {
    newli.remove();
})


    })

    btnSubmit.attr("disabled", true);

    field.keyup(function (e) {
        if (field.val() == "") {
            btnSubmit.attr("disabled", true);
        } else {
            btnSubmit.attr("disabled", false);
        }

    });
    $("body").append("<div id='newDiv'></div>")

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

});










