// Preocurar o botão
document.querySelector("#add-time")
// Clicar no botão
.addEventListener("click", cloneField)//Um evento criado para a executação de uma ação

function cloneField() {//Executando a ação
    // Selecionar o campo e Duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//Node se refereas tags HTML
    //Pegar e Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')//Pego todos os inputs e salvo wem fields
    fields.forEach(function(field){//Para cada fields
        field.value = ""
    })
    // Onde na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)//Para adicionar na tela
}
