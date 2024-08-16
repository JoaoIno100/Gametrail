$('#formulario-cadastro').on('submit', CriarUsuario);

function CriarUsuario(evento) {
    evento.preventDefault();
    console.log("Dentro da função")
    
    if ($('#senha').val() != $('#confirmarSenha').val()) {
        Swal.fire("Ops....", "As senhas não coincidem!", "error")
        return;
    }
    
    $.ajax({
        url: "/usuarios",
        method: "POST",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
            senha: $('#senha').val()
        }
    }).done(function() {
        Swal.fire("sucesso!", "Usuário cadastrado com sucesso!", "success")
            .then(function (){
                $.ajax({
                    url: "/login",
                    method: "POST",
                    data: {
                        email: $('#email').val(),
                        senha: $('#senha').val()
                    }
                }).done(function (){
                    window.location = "/home";
                })
            })

    }).fail(function(erro) {
        Swal.fire("Ops...", "Erro ao cadastrar o usuário!", "error");
    });
}