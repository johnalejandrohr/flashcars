import { PrismaClient } from '@prisma/client/edge';

// El objeto PrismaClient está adjunto al objeto `global` en desarrollo para evitar
// agotar el límite de conexiones a la base de datos.
//
// Obtén más información:
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;