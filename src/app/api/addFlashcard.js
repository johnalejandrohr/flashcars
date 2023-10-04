export default function handler(req, res) {
    if (req.method === 'POST') {
      const { question, response } = req.body;
  
      // Lee los flashcards existentes desde el archivo JSON
      const filePath = path.join(process.cwd(), 'data', 'flashcards.json');
      const flashcards = JSON.parse(fs.readFileSync(filePath));
  
      // Agrega el nuevo flashcard al array existente
      flashcards.push({ question, response });
  
      // Escribe el array actualizado de flashcards de vuelta al archivo JSON
      fs.writeFileSync(filePath, JSON.stringify(flashcards, null, 2));
  
      res.status(200).json({ message: 'Flashcard agregado correctamente.' });
    } else {
      res.status(405).json({ message: 'Método no permitido.' });
    }
  }