function input_style(input, style_1, style_2, applyStyle) {
    if (applyStyle) {
        input.style.border = style_1;
    } else {
        input.style.border = style_2;
    }
}


function validacao() {
    let nome = document.getElementById("i_nome");
    let idade = document.getElementById("i_idade");
    let responsavel = document.getElementById("i_responsavel");
    let cpf = document.getElementById("i_cpf");
    let email = document.getElementById("i_email");  
    let telefone = document.getElementById("i_tel");

    let sty_1 = "2px solid red";  // estilo em vermelho
    let sty_2 = "1px solid gray"; // estilo normal

    input_style(nome, sty_1, sty_2, !nome.checkValidity());
    input_style(idade, sty_1, sty_2, !idade.checkValidity());
    input_style(responsavel, sty_1, sty_2, !responsavel.checkValidity());
    input_style(cpf, sty_1, sty_2, !cpf.checkValidity());
    input_style(email, sty_1, sty_2, !email.checkValidity());
    input_style(telefone, sty_1, sty_2, !telefone.checkValidity());

    // Verifica se todos os campos são válidos antes de exibir o alerta
    if (nome.checkValidity() &&
        idade.checkValidity() &&
        responsavel.checkValidity() &&
        cpf.checkValidity() &&
        email.checkValidity() &&
        telefone.checkValidity()) {
        alert("Formulário enviado com sucesso!");
    }
}






