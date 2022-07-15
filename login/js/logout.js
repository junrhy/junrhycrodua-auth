$(document).ready(function () {
    let logoutElement = $("#logout");
    let bearerToken = logoutElement.data('token');
    let LOGOUT_ENDPOINT = 'https://api.junrhycrodua.com/api/logout';

    $(logoutElement).click(function(){
        $.ajax({
            type: 'POST',   
            url: LOGOUT_ENDPOINT,
            headers: {
                'Authorization': bearerToken,
                'Accept': 'application/json'
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    });
});