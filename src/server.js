const express = require("express");
const server = express();
// pegar o banco de dados

const db = require("./database/db.js")

//configurar pasta public

server.use(express.static("public"))

// habilitar o req body // 
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



// Configurar caminhos da minha aplicação

// Página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    console.log(req.body)

    // inserir dados na tabela // 
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    )  VALUES (?,?,?,?,?,?,?);
`
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsetData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro.")
        }
        console.log("Cadastrado com sucesso.")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsetData)
})

server.get("/search-results", (req, res) => {
    // consultar um dado na tabela //
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            console.log(err)
        }

        // mostrar a página html com os dados do banco de dados//
        const total = rows.length;

        console.log(rows)
        return res.render("search-results.html", { places: rows, total: total })
    })

})

server.get("/Point-map", (req, res) => {
    return res.render("Point-map.html")
})

server.get("/table-hours", (req, res) => {
    return res.render("table-hours.html")
})

server.get("/tela", (req, res) => {
    return res.render("tela.html")
})

// Ligar o servidor
server.listen(3000);