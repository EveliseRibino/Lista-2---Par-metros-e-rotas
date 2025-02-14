# Parâmetros e Rotas - Projeto Express

Este projeto foi desenvolvido para cumprir os requisitos de criação de rotas com parâmetros GET e POST.

## Funcionalidades

1. **Rotas de navegação**: Página 1 e Página 2 possuem links para alternar entre si.
2. **Texto invertido**: Rota que recebe um texto via parâmetro GET e retorna o texto invertido.
3. **Validação de usuário e senha**: Rota POST que valida se a senha é duas vezes o nome do usuário.

## Pré-requisitos

- Node.js instalado
- Git instalado

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/EveliseRibino/Parametros-e-Rotas.git
   cd Parametros-e-Rotas

Instale as dependências: npm install

Inicie o servidor: npm start

Acesse as rotas no navegador ou Postman:

Navegar entre páginas:
Página 1: http://localhost:3000/pagina1
Página 2: http://localhost:3000/pagina2
Texto invertido: http://localhost:3000/inverter?texto=seuTextoAqui
Validação de usuário e senha (utilizando Postman com método POST):
URL: http://localhost:3000/validar
Corpo da requisição (JSON):
{
  "usuario": "root",
  "senha": "rootroot"
}

Estrutura do Projeto
app.js: Configuração principal da aplicação.
routes/customRoutes.js: Rotas customizadas criadas para os requisitos.
views/index.ejs: Página inicial.
views/pagina1.ejs e views/pagina2.ejs: Páginas 1 e 2 para navegação.
public/stylesheets/style.css: Arquivo de estilo para layout da aplicação.