const express= require('express');
const mysql= require('mysql2');
const cors= require('cors');

const bodyParser = require('body-parser'); 
const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 

// Conexión a la base de datos 
const conexion = mysql.createConnection (
	{ 	
        host: 'localhost',
        port: 3306, //usando phpmyadmin con xampp
		user: 'root',	
		password: 'contrasena', 
		database: 'bd_recetas' 
	}
);

conexion.connect (
	(err) => { 
		if (err) {
			console.error('Error de conexión:', err); 
			return; 
		} 
		console.log('Conectado a la base de datos MySQL'); 
	}
);

/*ej:

//obtener
app.get
(
	'/api/empleados', (req, res) => 
	{ 
		conexion.query
		('SELECT * FROM empleado', (err, resultados) => 
			{ 
				if (err) return res.status(500).send(err); 				res.json(resultados); 
			}
		); 
	}
);

//agregar
app.post
(
	'/api/empleados', (req, res) => 
	{ 
		const { nome, sueldo } = req.body; 
		const sql = 'INSERT INTO empleado ( nome, sueldo) VALUES (?, ?)'; 			conexion.query
		(
			sql, [ nome, sueldo], (err) => 
			{ 
				if (err) return res.status(500).send(err); 						res.json
				(
					{ mensaje: "Empleado agregado correctamente" }
				); 
				//res.send('Empleado agregado correctamente'); 
			}
		); 
	}
);

 */

//creacion de urls para la api
//private apiUrl = 'http://localhost:3000/api/recetas'; // la API de recetas
//obtener las recetas - get
app.get('/api/recetas', (req, res) => {
    conexion.query(
        'SELECT * FROM receta', (err, resultado) =>{
            if (err) {
                return res.status(500).send(err);
            }
            res.json(resultado);
        }
    );
});


//obtener una receta por id (auto) - get

app.get('/api/recetas/:id', (req, res) => {
    const{id}= req.params;
    conexion.query(
        'SELECT * FROM receta WHERE id = ?', [id], (err, resultado) =>{
            if (err) {
                return res.status(500).send(err);               
            }
            res.json(resultado[0]);
        }
    )
})

//crear una receta - post

app.post('/api/recetas', (req, res) => {
    const{nombre, ingredientes, preparacion, categoria, imagen_url}= req.body;
    conexion.query(
        'INSERT INTO receta (nombre, ingredientes, preparacion, categoria, imagen_url) VALUES (?, ?, ?, ?, ?)',
        [nombre, ingredientes, preparacion, categoria, imagen_url], (err) => {
            if (err) {
                return res.status(500).send(err);               
            }
            res.json({mensaje: "Receta agregada correctamente"});
        }
    );

});

//actualizar receta x Id- post
app.put('/api/recetas/:id', (req, res) => {
    const{id}= req.params;
    const{nombre, ingredientes, preparacion, categoria, imagen_url}= req.body;
    conexion.query(
        'UPDATE receta SET nombre= ?, ingredientes = ?, preparacion = ?, categoria = ?, imagen_url = ? WHERE id = ?',
        [nombre, ingredientes, preparacion, categoria, imagen_url, id], (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({mensaje: "Receta actualizada con éxito."});
        }
    )
})

//eliminar receta - post
app.delete('/api/recetas/:id', (req, res) => {
    const{id}= req.params;
    conexion.query(
        'DELETE FROM receta WHERE id = ?', [id], (err) => {
            if (err) {
                return res.status(500).send(err);              
            }
            res.json({mensaje: "Receta eliminada con éxito."});
        }
    );
});

//
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});



