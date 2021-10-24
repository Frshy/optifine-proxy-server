const express = require('express');
const app = express();
const fs = require('fs');
const mysql = require('mysql-await');
const axios = require('axios');

app.get(`/capes/:param`, async function (req, res) {
    let username = req.params.param.replace('.png', '');

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'capes'
    });

    let result = await con.awaitQuery(`SELECT Cape FROM users WHERE Username = ?`, [username]);

    con.end();

    let cape_buf;
    if (result[0]) {
        cape_name = result[0].Cape;
        cape_buf = fs.readFileSync(`capes/${cape_name}.png`);
    } else {
        const response = await axios.get(`http://s.optifine.net/capes/${username}.png`, { responseType: 'arraybuffer' })
        cape_buf = Buffer.from(response.data, "utf-8")
    }

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': cape_buf.length
    });
    res.end(cape_buf);
});

app.listen(80);
