# FRONTEND-AV
📘 Projeto desenvolvido com React.js, incluindo operações matemáticas básicas e manipulação de estados. 🚀

Breve descrição do projeto, explicando seu propósito e funcionalidades principais.

## 🚀 Tecnologias Utilizadas

- React.js ⚛️
- JavaScript 🟡
- CSS 🎨

## 📂 Estrutura do Projeto

/meu-projeto │── /src │ ├── /components │ │ ├── Adicao.jsx │ │ ├── Subtracao.jsx │ │ ├── Multiplicacao.jsx │ │ ├── Divisao.jsx │ │ ├── PrecisoEstudar.jsx │ ├── App.jsx │ ├── index.js │── /public │── package.json │── README.md

![image](https://github.com/user-attachments/assets/9330513a-23b3-4230-a2cd-0811c598be01)

#Operações matemáticas básicas:

- Adição:
  ![image](https://github.com/user-attachments/assets/fd7655b9-4241-416e-aa7c-667ff29ced7d)
  
- Subtração:
  ![image](https://github.com/user-attachments/assets/004c260e-c4a1-48a0-87e6-4b0b7520eabf)
  
- Divisão:
  ![image](https://github.com/user-attachments/assets/2ef79a79-f7cd-4652-a5e0-d92ea45826e2)

- Multiplicação:
  ![image](https://github.com/user-attachments/assets/3067b9ef-98e5-4b8b-a60a-ec90310efef5)

#Manipulação de estados:

![image](https://github.com/user-attachments/assets/c2260775-328c-4df6-b3e3-0508c4091b98)

#/App.jsx

- Imports:
  ![image](https://github.com/user-attachments/assets/d1e45ba7-0c49-41b1-821f-c61616086b17)

Estrutura do /App.jsx

![image](https://github.com/user-attachments/assets/7abd122e-dc1d-4ffd-9a8b-c7308d3fecb3)

#PORTS:
![image](https://github.com/user-attachments/assets/1242bb4b-b6e6-4334-b95f-e4483c1c2115)

#NAVEGADOR:

![image](https://github.com/user-attachments/assets/2a874638-6b68-44d3-9200-8148ff6bff38)

#OPERANDO COM HOOK:

- CONTADOR:
  ![image](https://github.com/user-attachments/assets/bb4391c3-da25-4145-9938-a74cca02a696)

/HookContador.jsx
![image](https://github.com/user-attachments/assets/c6cf33d2-74ae-406a-8dd2-f45d3287d2cd)


- Sorteando Mega Sena:
  ![image](https://github.com/user-attachments/assets/4d48ffff-bc3f-4dc4-a825-036b2a6a73ce)

- Sorteando Quina:
  ![image](https://github.com/user-attachments/assets/5a370b84-9f41-4d34-9030-a7449cf8f36a)

/HookMegaSena.jsx - /HookQuina.jsx
![image](https://github.com/user-attachments/assets/96bdc62a-1920-4c07-af9d-1fcf0739ba34)


# RENDERIZANDO:

- Renderizando Banck ou Front:
  ![image](https://github.com/user-attachments/assets/b2201f80-3536-44bd-908f-f095d035916d)

- Renderizando com funções:
  ![image](https://github.com/user-attachments/assets/0cd2c5c5-7059-495f-8fce-d9ec78a7a0cd)

/RenderizaBackOuFront.jsx - /RenderizandoComFuncoes.jsx
![image](https://github.com/user-attachments/assets/0ca45e39-56a4-49de-8b63-a93f009eae4c)

# TRABALHANDO COM IMAGENS:

![image](https://github.com/user-attachments/assets/58469594-9d76-4db2-8f84-dac8effe27df)

/TrabalhandoComImagens.jsx
![image](https://github.com/user-attachments/assets/11c607b6-7ec8-42a5-8e8a-1ebd7cfb6923)

# USANDO OPERAR TERNÁRIO:

![image](https://github.com/user-attachments/assets/ef88a9f2-84d5-41a8-94ed-5ac3a3fa7981)

![image](https://github.com/user-attachments/assets/d2252c80-6f5c-44f2-9a42-fc303315a5e1)

/EstaComSono.jsx - EstouConseguindoAprenderReact.jsx
![image](https://github.com/user-attachments/assets/073ec391-76a2-4f87-b1ba-9b0ed8879b64)


# REAPROVEITAMENTO DE COMPONENTES:

![image](https://github.com/user-attachments/assets/1cb3a296-3c7d-45b4-b092-c8031da21d06)

/Aluno.jsx - /App.jsx
![image](https://github.com/user-attachments/assets/bcd068f4-45d6-4e42-919e-f7a092111668)

#EXERCÍCIO DA AULA 05:

Este repositório contém o exercício solicitado na quinta aula de React:
- Crie uma página que retorne a lista de alunos que a sua API fake está retornando.
- Retorne esses dados organizados em uma tabela.
  
Solução
- Para solucionar este exercício, primeiro inseri dados de alunos no arquivo db.json, que serve para definir um "banco de dados" fake na aplicação, que será então lido ao rodar o servidor com o comando 'npm run server'

- Nesse processo criamos uma o arquivo db.json para simular o BD, apois isso inserimos no arquivo ListaDeAlunos.jsx que é responsável por buscar os dados da API e renderizá-los:
![Captura de tela 2025-05-02 170110](https://github.com/user-attachments/assets/30e4d856-b226-40e7-ad1d-a63e50869dc0)

- Abaixo mostra o resultado do arquivo db.json e do arquivo ListaDeAlunos.jsx:
![image](https://github.com/user-attachments/assets/0cec2ea3-d05d-4359-bbf3-8f7cd23561fb)

- Conclui que esses componente é carregado no componete Pai, App,jsx:
![image](https://github.com/user-attachments/assets/ec6e19f0-7397-402b-b7cd-5656ffade62d)


