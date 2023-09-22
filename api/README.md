# API Palmeiras

Esta é uma API de Gerenciamento de Jogadores construída usando Prisma ORM. Ela fornece operações CRUD (Criar, Ler, Atualizar e Deletar) para gerenciar jogadores em um sistema.

## Requisitos

Antes de começar a usar esta API, você deve ter o seguinte instalado em seu ambiente de desenvolvimento:

- Node.js
- Prisma CLI
- instalar as dependências: npm install -g typescript, npm install 

Criar um arquivo.env que contenha:
DATABASE_URL="file:./dev.db"

Execute as migrações do Prisma para criar o esquema do banco de dados:

- npx prisma migrate dev

Para rodar:

- npm run dev  

