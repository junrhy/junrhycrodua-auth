$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search);
    
    var access_type = null;
    var brand_id = null;
    var SIGNIN_ENDPOINT = 'https://api.junrhycrodua.com/api/login';

    if (searchParams.has('access')) {
        access_type = searchParams.get('access');
    }

    if (searchParams.has('brand')) {
        brand_id = searchParams.get('brand');
    }

    if (brand_id == null) {
        window.location.href = "404.html";
    }

    $("#signup-link").attr('href', 'https://signup.junrhycrodua.com/?brand=' + brand_id);

    $("#signin").click(function(){
        var has_error = false;

        if ($("#email").val() == '') {
            $("#email").css('border-bottom', '1px solid red');
            has_error = true;
        }

        if ($("#your_pass").val() == '') {
            $("#your_pass").css('border-bottom', '1px solid red');
            has_error = true;
        }

        if (has_error) { return false; }

        $.ajax({
            type: 'POST',   
            url: SIGNIN_ENDPOINT,
            headers: {
                'Accept': 'application/json'
            },
            dataType: "json",
            data:   
            {
                "email":$("#email").val(),
                "password":$("#your_pass").val(),
                "access_type":access_type,
                "brand_id":brand_id
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    });

    $("#email").on('blur', function(){
        if ($(this).val() == '') {
            $(this).css('border-bottom', '1px solid red');
        } else {
            $(this).css('border-bottom', '1px solid mediumseagreen');
        }
    });

    $("#your_pass").on('blur', function(){
        if ($(this).val() == '') {
            $(this).css('border-bottom', '1px solid red');
        } else {
            $(this).css('border-bottom', '1px solid mediumseagreen');
        }
    });
});