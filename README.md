# RS Help Center

O intuito desse site é auxiliar na busca e ajuda para pessoas que estão passando pelo desastre no Rio Grande do Sul.

O projeto RS Help Center é voltado totalmente para ajuda social sem fins lucrativos

O RS Help Center ou RHC foi criado por Kevin Uehara porém é um projeto Open Source para que as pessoas possam contribuir cada vez mais com o projeto.

Empatia e soliedariedade pelas vítimas do desastre ❤️

## Requisitoss

Para rodar o projeto localmente você precisa estar com a versão (recomendado) do Node mais recente. Utilizar o NPM ou Yarn para instalar os pacotes.

## Iniciando a aplicação

Primeiro, rode no modo de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser de preferência.

## Environments

O Projeto necessita de algumas variáveis de ambiente para utilizar alguns recursos como Mapa e banco de dados. Para isso crie um arquivo `.env` ou `.env.local` com base no `.env.example`.

| Environment                      | Description                   |
| -------------------------------- | ----------------------------- |
| DATABASE_URL                     | URL do Banco de dados MongoDB |
| NEXT_PUBLIC_AWS_S3_REGION        | Região do Bucket S3 da AWS    |
| NEXT_PUBLIC_AWS_S3_REGION        | Região do Bucket S3 da AWS    |
| NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID | Access Key do IAM da AWS      |
| NEXT_PUBLIC_AWS_S3_SECRET_KEY    | Secret Key do IAM da AWS      |
| NEXT_PUBLIC_AWS_S3_BUCKET_NAME   | Nome do Bucket na AWS         |
| NEXT_PUBLIC_MAP_TILER_KEY        | Secret Key do Map Tiler       |
| NEXT_PUBLIC_OPENWEATHER_KEY      | Secret Key do Open Weather    |
