import fs from 'fs/promises';
import path from 'path';

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function GET(req: Request, re: Response) {
    const alldata = await prisma.flashcard.findMany({
        orderBy: [
            {
                id: 'desc'
            }
        ]
    });
    return new Response( JSON.stringify(alldata) )
}
export async function POST(req: Request, res: Response) {
    try {
        // Intenta obtener el cuerpo de la solicitud y extraer la pregunta, respuesta y estado del flashcard
        const body = await req.json();
        const { question, response, state } = body;

        const data = await prisma.flashcard.create({
            data: {
                question,
                response,
            },
        })

        // Devuelve una respuesta de éxito
        return new Response(
          JSON.stringify({ success: true, message: 'Datos guardados correctamente' })
        );
      } catch (error) {
        // En caso de error, imprime el error y devuelve una respuesta de error
        console.error(error);
        return new Response(
          JSON.stringify({ success: false, message: 'Error al guardar los datos.' })
        );
      }
}

export async function DELETE(req: Request, res: Response) {
    try {
        // Lee el archivo datacience.json
        const filePath = path.join(process.cwd(), 'src', 'data', 'datacience.json');

        // Escribe el contenido actualizado en el archivo
        await fs.writeFile(filePath, JSON.stringify([], null, 2));

        // Devuelve una respuesta de éxito
        return new Response( JSON.stringify({success: true, message:'Datos borrados correctamente'}) )
    } catch (error) {
        console.error(error);
        return new Response( JSON.stringify({success: true, message:'Error al guardar los datos.'}) )
    }
}

// export async function POST(req: Request, re: Response) {
//     const body = await req.json()
//     const {url, urlOption} = body;

//     let urlShort;
//     if(urlOption === "") {
//         urlShort = Math.random().toString(36).substring(2, 9);
//     } else {
//         urlShort = urlOption;
//     }
//     try {
//         const data = await prisma.link.create({
//             data: {url, shortUrl:urlShort}
//         })
//     } catch (error) {
//         console.log(error);
//         return new Response( JSON.stringify({success: false, message:'Ha ocurrido un error inesperado'}) )
//     }

//     return new Response( JSON.stringify({success: true, message:'Registro Guardado con exito', url, urlShort}) )
// }

// export async function DELETE(req: Request, re: Response) {
//     const body = await req.json()
//     const {id} = body;

//     const deleteUser = await prisma.link.delete({
//         where: {
//           id,
//         },
//       })
//     return new Response( JSON.stringify({success: true, message:'Registro eliminado'}) )
// }
