// document.body.style.backgroundColor = 'red';

function enviar() {
    event.preventDefault(); //Impedir o form de ser enviado

    let input_nome = document.getElementById('nome');
    let input_desc = document.getElementById('descrição');

    let erro_nome = document.getElementById('erro_nome');
    let erro_descricao = document.getElementById('erro_descricao');

    if (input_nome.value == ''){
        //input_nome.style.border = '1px solid red'
        input_nome.classList.add('is-invalid');
        erro_nome.style.display = 'block';
        
    } else{
        // input_nome.style.border = '1px solid green'
        input_nome.classList.add('is-valid');
        erro_nome.style.display = 'none';
    }

    if (input_desc.value == ''){
        //input_desc.style.border = '1px solid red';
        input_desc.classList.add('is-invalid');
        erro_descricao.style.display = 'block';
    } else{
        //input_desc.style.border = '1px solid green';
        input_desc.classList.add('is-valid');
        erro_descricao.style.display = 'none';
    }

}




