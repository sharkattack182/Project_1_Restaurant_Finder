$('button').on("click", function() {
    var buttonResult = $(this).val()
    window.location.href = "./results.html?cuisine=" + buttonResult;
});

