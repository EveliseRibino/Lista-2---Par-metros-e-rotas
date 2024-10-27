var express = require('express');
var router = express.Router();

/* GET Página 1 */
router.get('/pagina1', (req, res) => {
    res.send('<h1>Página 1</h1><a href="/pagina2">Ir para Página 2</a>');
});

/* GET Página 2 */
router.get('/pagina2', (req, res) => {
    res.send('<h1>Página 2</h1><a href="/pagina1">Ir para Página 1</a>');
});

/* GET Inverter Texto */
router.get('/inverter', (req, res) => {
    const { texto } = req.query;
    if (texto) {
        const textoInvertido = texto.split('').reverse().join('');
        res.send(`Texto invertido: ${textoInvertido}`);
    } else {
        res.send('Por favor, forneça um texto como parâmetro GET (ex: /inverter?texto=exemplo)');
    }
});

/* POST Validar Usuário */
router.post('/validar', (req, res) => {
    const { usuario, senha } = req.body;
    if (usuario && senha === usuario + usuario) {
        res.send('Usuário possui permissão de acesso.');
    } else {
        res.send('Usuário não possui permissão de acesso.');
    }
});

module.exports = router;
