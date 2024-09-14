const express = require('express');
const fs = require('fs'); //per file system
const path = require('path');
const csv = require('csv-parser');
const cors = require('cors'); //per domini diversi
const app = express(); 

app.use(cors());  // Permette tutte le richieste CORS
app.use(express.json()); // Permette json per richieste

let cachedData = [];
let csvPath = '';

// Funzione per leggere il CSV
const readCsv = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath) // Creo flusso di lettura
            .pipe(csv())
            .on('data', (data) => results.push(data)) // Aggiungo riga di csv ad array results
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
};

// Endpoint per impostare il percorso del CSV
app.post('/set-csv-path', (req, res) => {
    const { path: userPath } = req.body; // path fornito nel corpo della richiesta

    if (!userPath) {
        return res.status(400).json({ error: "Path is required" });
    }

    const fullPath = path.resolve(__dirname, userPath); //risolvo percorso assoluto su cartella del progetto

    fs.access(fullPath, fs.constants.F_OK, (err) => { //verifico esistena file e se ho accesso
        if (err) {
            console.error('File access error:', err);
            return res.status(400).json({ error: "File not found" });
        }

        csvPath = fullPath;

        readCsv(csvPath)
            .then(data => {
                cachedData = data;
                res.json({ message: `Monitoring CSV at ${csvPath}` });
            })
            .catch(error => {
                console.error('Error reading CSV:', error);
                res.status(500).json({ error: 'Error reading CSV' });
        });

        fs.watchFile(csvPath, async (curr, prev) => { //monitoro csv per modifiche
            console.log('CSV file changed.');
            try {
                cachedData = await readCsv(csvPath); //se cambia, rileggo e aggiorno dati
            } catch (error) {
                console.error('Error reading CSV:', error);
            }
        });
    });
});


// Endpoint per ottenere i dati del CSV
app.get('/data', (req, res) => {
    if (!csvPath) return res.status(400).json({ error: 'CSV path not set.' });
    res.json(cachedData); //restituisco dati del csv
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
