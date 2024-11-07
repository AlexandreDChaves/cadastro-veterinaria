Sistema de Cadastro para Clínica Veterinária


Este sistema foi criado para uma clínica veterinária que necessita de um sistema de cadastro para clientes e animais. Ele possui uma página inicial com links para os formulários de cadastro de clientes e animais, além de uma interface responsiva que se adapta a dispositivos móveis.


Funcionalidades do Sistema

Página Inicial:

 Exibe a logo da clínica, links para o cadastro de clientes e de animais, e uma galeria de imagens.

Formulário de Cadastro de Clientes:

Coleta informações do cliente, incluindo Nome, Email, Telefone e Endereço.
Utiliza a API ViaCEP para preencher automaticamente o endereço do cliente com base no CEP informado.

Formulário de Cadastro de Animais:

Coleta informações detalhadas sobre o animal, incluindo Nome, Tipo, Raça, Idade, Sexo, Porte, Peso, Cor, Data de Nascimento, Histórico Médico, Vacinas, Status de Castração, Última Visita ao Veterinário, Alergias, Comportamento, e Foto.


Tecnologias Utilizadas

Frontend

HTML: Estrutura de marcação do sistema, incluindo formulários para cadastro de clientes e animais.

CSS: Estilização e design responsivo para dispositivos móveis, permitindo que o sistema se adapte a diferentes tamanhos de tela.

JavaScript: Utilizado para fazer requisições à API ViaCEP e preencher automaticamente o endereço do cliente no formulário de cadastro.

Backend

API ViaCEP: API gratuita que fornece informações de endereço com base no CEP informado pelo usuário. Essa API é integrada ao sistema para otimizar o preenchimento do formulário de clientes.

Futuras Melhorias

Integração de um backend completo (ex.: Node.js, Django ou PHP) com um banco de dados para operações CRUD.