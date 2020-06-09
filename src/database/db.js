// importação do banco de dados // 
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados //
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db

// utilizar o objeto de banco de dados, para nossas operações // 
 db.serialize(() => {
/*      // criar uma tabela //
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             image TEXT,
             name TEXT, 
             address TEXT, 
             address2 TEXT, 
             state TEXT,
             city TEXT, 
             items TEXT
        );
    `) 

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
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do sul",
    "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsetData(err){
        if(err){
            return console.log(err);
        }
        
        console.log("Cadastrado com sucesso.")
        console.log(this)
    }

    db.run(query, values, afterInsetData) 

     // consultar um dado na tabela 
      db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            console.log(err)
        }
        
        console.log("Aqui estão seus registros:")
        console.log(rows)
    })  

    // deletar um dado na tabela //  

      db.run(`DELETE FROM places WHERE id = ?`, [21], function(err) {
        if(err){
            console.log(err)
        }
    
        console.log("Tudo certo! Regristro deletado.")
    })  */

 })

