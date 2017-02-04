$(document).ready(function() {
	$("#btn_login").click(function() {
		$.post("user/login", {
			username : $("#username").val(),
			password : $("#password").val()
		}, function(data) {
			data = JSON.parse(data);
			$.cookie('username', 'admin'); 
			if (data.code == 0) {
				window.location.href = "./page/main.html?username=admin";
			} else {
				alert("登录失败:" + data.describe);
			}

		});
	});
});
