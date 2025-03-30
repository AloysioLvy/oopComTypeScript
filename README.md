Conta Bancária - Projeto de Estudo de Orientação a Objetos em TypeScript
Este projeto tem como objetivo estudar os conceitos de Orientação a Objetos (OO) utilizando TypeScript. A classe principal do projeto, ContaBancaria, simula operações bancárias como depósito, saque e consulta de saldo. Além disso, foi implementado um conjunto de testes automatizados para validar as funcionalidades da classe.

Funcionalidades
A classe ContaBancaria oferece as seguintes funcionalidades:

Consultar Saldo: Permite verificar o saldo atual da conta.

Depositar: Permite realizar um depósito na conta.

Sacar: Permite realizar um saque, verificando se o saldo é suficiente.

Atualizar Dados: Permite atualizar os dados da conta, como o número da conta e a agência.

Requisitos
Para executar o projeto, você precisará das seguintes ferramentas:

Node.js (recomenda-se a versão LTS mais recente)

npm (gerenciador de pacotes do Node.js)

TypeScript

Jest (para testes automatizados)

Instalação
Clone este repositório:

bash
Copy
Edit
git clone https://github.com/usuario/conta-bancaria.git
cd conta-bancaria
Instale as dependências:

bash
Copy
Edit
npm install
Compile o TypeScript (se necessário):

bash
Copy
Edit
npx tsc
Execute os testes automatizados:

bash
Copy
Edit
npx jest
Estrutura do Projeto
O projeto está estruturado da seguinte forma:

bash
Copy
Edit
├── src
│   ├── ContaBancaria.ts       # Definição da classe ContaBancaria
│   └── ContaBancaria.test.ts  # Testes automatizados utilizando Jest
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração do TypeScript
└── README.md                 # Este arquivo
Como Funciona a Classe ContaBancaria
A classe ContaBancaria simula um banco com os seguintes dados privados:

Nome do titular (_name)

Número da conta (_numero)

Agência (_agencia)

Saldo (_saldo)

Métodos Principais
consultar(): Retorna o saldo da conta.

depositar(deposito: number): Realiza um depósito na conta, adicionando o valor informado ao saldo.

sacar(valor: number): Realiza um saque, desde que o valor solicitado seja menor ou igual ao saldo disponível.

Validações
A classe realiza algumas validações de formato para os dados da conta:

O número da conta deve seguir o formato xxxxx-x.

A agência deve seguir o formato xxxx-x.

O saldo deve ser um valor positivo.

Testes Automatizados
Os testes automatizados foram implementados utilizando Jest. Eles validam as principais funcionalidades da classe, como:

Inicialização da conta com os valores corretos.

Depósitos e saques.

Atualização dos dados da conta, como o número e a agência.

Contribuição
Se você quiser contribuir para este projeto, basta realizar um fork, fazer as alterações desejadas e enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License.

