// Importa o PrismaClient do módulo "@prisma/client".
import { PrismaClient as Prisma } from "@prisma/client";

// Cria uma instância do PrismaClient e atribui a variável local PrismaClient.
const PrismaClient = new Prisma();

// Exporta a variável PrismaClient para que ela possa ser usada em outros módulos.
export { PrismaClient };

//Basicamente, esse arquivo PrismaClient age como um ponto de entrada para o 
//PrismaClient em seu aplicativo, permitindo que você o importe facilmente em 
//outros lugares e o utilize para acessar seu banco de dados de maneira organizada e consistente.