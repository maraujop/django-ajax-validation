// Cleans errors of a uniform form
function uniform_clean_errors(form) {
    var field_divs = $(form).find(".ctrlHolder").filter(".error");
    field_divs.removeClass("error");
    field_divs.find(".errorField").remove();

    $(form).find("#errorMsg").hide('slow');
}

// Adds errors to the form based on data.errors
function uniform_callback(data, form) {
    uniform_clean_errors(form);

    // $.each() cannot be used here, because if we have a field called length it fails
    for (key in data.errors) {
        // General non_field_errors
        if (key == "__all__") {
            $(form).prepend("<div id='errorMsg'><h3>Errors</h3><ol></ol></div>");

            $.each(val, function(key, error) {
                $("#errorMsg ol").append("<li>" + error + "</li>");
            });
        };

        var field_div = $(form).find(".ctrlHolder").filter("#div_id_" + key);
        field_div.addClass("error");
        field_div.prepend('<p id="error_1_' + key + '" class="errorField">' + data.errors[key] + '</p>');
    }
}
