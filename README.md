# Shopify CEP Importer App

Este app permite que lojistas subam uma planilha com CEPs e salve essas informações nos Metafields da loja.

## Funcionalidades

- Upload de planilha (.csv ou .xlsx)
- Extração dos CEPs
- Gravação no metafield custom.ceps
- Frontend com Polaris

## Como rodar

1. `npm install`
2. Configure o `.env` com suas chaves do Shopify e defina `HOST` para a URL do projeto na Railway, por exemplo `https://your-app.railway.app`.
3. Rode local com `npm run dev`

