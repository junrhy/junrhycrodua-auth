$(document).ready(function () {
    let bearerToken = $("#auth").data('token');
    let AUTH_USER_ENDPOINT = 'http://localhost:80/api/user';

    $.ajax({
        type: 'GET',	
        url: AUTH_USER_ENDPOINT,
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