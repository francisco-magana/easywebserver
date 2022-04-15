document
	.getElementById('submit-button')
	.addEventListener('click', function (e) {
        e.preventDefault();
        let usuario = document.getElementById('usuario-field').value;
        let password = document.getElementById('password-field').value;
        let usuarioToSend = {
            usuario,
            password
        };
        console.log(usuarioToSend);
        window.location.href = 'http://localhost:3000/someone';
    });
