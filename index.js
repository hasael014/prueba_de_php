// import { createClient } from "@libsql/client"

// const client = createClient({
//       url : "libsql://the-3-hasael014.turso.io",
//       authToken : "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxMjU2MjgsImlkIjoiNDYzMTY5ODktY2QxMy0xMWVlLTlhYzAtZjJhZTA4MzhmMjg1In0.VaLES-K-dompBYr3qyUP00Iu1gezWdhyicOH_wUtgBgLgyihvZ2XficCciSB1vZWpF7B-Nsk50ICQiDseXQqDA"
// })

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Asegúrate de que tu archivo HTML esté en el mismo directorio que tu archivo de servidor Node.js
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/test1', (req, res) => {
  res.sendFile(path.join(__dirname+'/test.html'))
})

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
