import fs from 'fs/promises';
import path from 'path';



export async function GET(req: Request, re: Response) {
    return new Response( JSON.stringify({nombre:'jjfjfjf'}) )
}
export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const {question, response, state} = body;

        // Lee el archivo datacience.json
        const filePath = path.join(process.cwd(), 'src', 'data', 'datacience.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const dataArray = JSON.parse(data);

        // Agrega el nuevo objeto al arreglo existente
        dataArray.push({ question, response, state, id: dataArray.length + 1 });

        // Escribe el contenido actualizado en el archivo
        await fs.writeFile(filePath, JSON.stringify(dataArray, null, 2));

        // Devuelve una respuesta de éxito
        return new Response( JSON.stringify({success: true, message:'Datos guardados correctamente'}) )
    } catch (error) {
        console.error(error);
        return new Response( JSON.stringify({success: true, message:'Error al guardar los datos.'}) )
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
