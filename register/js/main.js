$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search);
    
    var access_type = null;
    var brand_id = null;
    var SIGNUP_ENDPOINT = 'https://api.junrhycrodua.com/api/register';

    if (searchParams.has('access')) {
        access_type = searchParams.get('access');
    }

    if (searchParams.has('brand')) {
        brand_id = searchParams.get('brand');
    }

    if (brand_id == null) {
        window.location.href = "404.html";
    }

    $("#sign-in-link").attr('href', 'https://sign-in.junrhycrodua.com/?brand=' + brand_id);

    $("#signup").click(function(){
        var has_error = false;

        if ($("#name").val() == '') {
            $("#name").css('border-bottom', '1px solid red');
            has_error = true;
        }

        if ($("#email").val() == '') {
            $("#email").css('border-bottom', '1px solid red');
            has_error = true;
        }

        if ($("#pass").val() == '') {
            $("#pass").css('border-bottom', '1px solid red');
            has_error = true;
        }

        if ($("#re_pass").val() == '') {
            $("#re_pass").css('border-bottom', '1px solid red');
            has_error = true;
        }

        if ($("#agree-term").is(":checked") == false) {
            $("input[type=checkbox]:not(old) + label > span").css('border', '1px solid red');
            has_error = true;
        }

        if (has_error) { return false; }

        $.ajax({
            type: 'POST',   
            url: SIGNUP_ENDPOINT,
            headers: {
                'Accept': 'application/json'
            },
            dataType: "json",
            data:   
            {
                "name":$("#name").val(),
                "email":$("#email").val(),
                "password":$("#pass").val(),
                "password_confirmation":$("#re_pass").val(),
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

    $("#name").on('blur', function(){
        if ($(this).val() == '') {
            $(this).css('border-bottom', '1px solid red');
        } else {
            $(this).css('border-bottom', '1px solid mediumseagreen');
        }
    });

    $("#email").on('blur', function(){
        if ($(this).val() == '') {
            $(this).css('border-bottom', '1px solid red');
        } else {
            $(this).css('border-bottom', '1px solid mediumseagreen');
        }
    });

    $("#pass").on('blur', function(){
        if ($(this).val() == '') {
            $(this).css('border-bottom', '1px solid red');
        } else {
            $(this).css('border-bottom', '1px solid mediumseagreen');
        }
    });

    $("#re_pass").on('blur', function(){
        if ($(this).val() == '') {
            $(this).css('border-bottom', '1px solid red');
        } else {
            $(this).css('border-bottom', '1px solid mediumseagreen');
        }
    });
});