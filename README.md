# Shopify CEP Importer App

Este app permite que lojistas subam uma planilha com CEPs e salve essas informações nos Metafields da loja.

## Funcionalidades

- Upload de planilha (.csv ou .xlsx)
- Extração dos CEPs
- Gravação no metafield custom.ceps
- Frontend com Polaris

## Como rodar

1. Execute `npm install` na raiz do projeto. Isso instalará as dependências do servidor e do frontend.
2. Configure o arquivo `.env` com suas chaves do Shopify (`SHOPIFY_API_KEY` e `SHOPIFY_API_SECRET`), defina `HOST` para a URL do projeto (ex.: `https://your-app.railway.app`) e copie o valor de `SHOPIFY_API_KEY` para `NEXT_PUBLIC_SHOPIFY_API_KEY`.
3. Inicie o ambiente de desenvolvimento com `npm run dev`. Esse comando executa o servidor Express integrado ao Next.js.

