- npx create-react-app .

* gerar .editorconfig => botao direito do mouse na área das pastas dos arquivos
  e gerar o arquivo;

- atualiza informações no arquivos;
- criei o arquivo .prettierrc.js
- criei o arquivo .eslintrc.js

* Instala o arquivo eslint

- npm i -D prettier eslint-config-prettier eslint-plugin-prettier
- "npx eslint src/\*\*/\*.js --fix" (Esse comando o eslint faz uma varredura e
  corrige os arquivos) ta errado. quando salva troca o \* por \_. Lembrar de
  descartar as '\'.
- npm i prop-types

* Importante: se você usar a extensão do VS Code para o "Prettier", aponte o
  caminho do ".prettierrc.js" do projeto nas configurações da extensão. Pra
  isso, basta adicionar isso no settings.json do VS Code: {
  "prettier.configPath": "./.prettierrc.js" } \*Crie um arquivo chamado de
  .babelrc.json na raiz do projeto com os seguintes dados:

{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
