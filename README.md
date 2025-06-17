# Shopify CEP Importer App

Este app permite que lojistas subam uma planilha com CEPs e salve essas informações nos Metafields da loja.

## Funcionalidades

- Upload de planilha (.csv ou .xlsx)
- Extração dos CEPs
- Gravação no metafield custom.ceps
- Frontend simples

## Como rodar

1. Instale as dependências na raiz do projeto:
   ```bash
   npm install
   ```
2. Ajuste o arquivo `.env` com suas chaves do Shopify e defina `HOST` para a URL do app (por exemplo `https://your-app.railway.app`).
3. Inicie o servidor localmente com:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no navegador para ver a interface de upload.
