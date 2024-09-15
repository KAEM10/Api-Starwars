const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const URL_API = "https://swapi.dev/api/people/";

app.get('/', async (req, res) => {
    const searchQuery = req.query.search || '';
    try {
        const response = await axios.get(`${URL_API}?search=${searchQuery}`);
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(URL_API + req.params.id + '/');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener datos de la API');
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor en http://127.0.0.1:${PORT}`);
});
