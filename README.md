# Auth API — Teste Front-end

Aqui você terá uma API REST simples, com duas rotas principais, uma para autenticação, contendo um endpoint de registro, e outra para usuários. A rota de usuários permite listar todos os usuários criados, consultar individualmente, editar e deletar, funcionando como um CRUD básico. 

Não há integração com banco de dados, os usuários são armazenados apenas em um vetor interno **(private users: User[] = [];).**


## Objetivo
Quero que você desenvolva um frontend para uma tela de registro. O estilo/design ficam a seu critério, porém o frontend deve estar integrado com a API já existente.


## Tecnologias

- **Framwork:** VueJS, React, Angular ou se tiver coragem JQuery.
- **Estilização:** [Tailwind](http://tailwindcss.com/docs/), [Bootstrap](https://getbootstrap.com/)



## Como rodar a API

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)


### Instalação

Clona o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/auth-api.git
cd auth-api
npm install
```

### Coloca para rodar com:
```bash
npm run start:dev
```

### Então você terá:
```bash
http://localhost:3000
http://localhost:3000/api #swagger

```

## Critério de Avaliação

| Critério           | Descrição                                                                                   | Peso (%) |
|-------------------|-----------------------------------------------------------------------------------------------|---------|
| Criatividade      | Considera a ideia proposta para o cenário de registro e originalidade na solução apresentada. | 40%     |
| Design            | Avalia a aparência da tela de registro, usabilidade, disposição dos elementos e estética.     | 25%     |
| Utilização da API | Verifica como a API foi integrada, incluindo métodos de requisição e tratamento de respostas. | 20%     |
| Organização       | Observa a estrutura do projeto, clareza de código e boa separação entre componentes.         | 15%     |




