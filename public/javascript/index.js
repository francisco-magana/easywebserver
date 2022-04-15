document
	.getElementById('submit-button')
	.addEventListener('click', function (e) {
		e.preventDefault();
		let email = document.getElementById('usuario-field').value;
		let password = document.getElementById('password-field').value;
		let usuarioToSend = {
			email,
			password,
		};

		$.ajax({
			url: `https://easywebserver.herokuapp.com/create`,
			type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
			data:  JSON.stringify(usuarioToSend),
            xhrFields: {
                withCredentials: false
            },  
            headers: {
        
            }, 
			success: function (data) {
				console.log(data);
			},
			error: function (error) {
				console.log(error);
			},
		});

        console.log('after ajas');

	});
