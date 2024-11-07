function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("CEP inválido. Por favor, insira um CEP com 8 dígitos.");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos de endereço com os dados da API
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        })
        .catch(error => {
            console.error("Erro ao buscar o endereço:", error);
            alert("Erro ao buscar o endereço. Tente novamente mais tarde.");
        });
}
