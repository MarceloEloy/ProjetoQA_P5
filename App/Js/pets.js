    function cadastrarPet() {

    const nomePet = document.getElementById("nomePet").value;
    const tipoPet = document.getElementById("tipoPet").value;

    const mensagem = document.getElementById("petMensagem");

    if(nomePet === "") {

        mensagem.className = "mensagem erro";
        mensagem.innerText = "Nome do pet é obrigatório";

    } else {

        mensagem.className = "mensagem sucesso";
        mensagem.innerText = "Pet cadastrado com sucesso";
    }
}