# RecetasApp (Version Inicial)

Aplicacion web para gestionar recetas de cocina: crear, listar, ver detalle, editar y eliminar.

## Tecnologias

- Angular 20 (frontend)
- Node.js + Express (backend)
- MySQL (base de datos)

## Estructura basica

- `src/`: aplicacion Angular
- `index.js`: API REST y conexion a MySQL

## Requisitos

- Node.js y npm
- MySQL en `localhost:3306`
- Base de datos `bd_recetas` con tabla `receta`

SQL sugerido:

```sql
CREATE DATABASE IF NOT EXISTS bd_recetas;
USE bd_recetas;

CREATE TABLE IF NOT EXISTS receta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  ingredientes LONGTEXT NOT NULL,
  preparacion LONGTEXT NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  imagen_url VARCHAR(500)
);
```

## Ejecucion

1. Iniciar backend (terminal 1):

```bash
node index.js
```

2. Iniciar frontend (terminal 2):

```bash
npm start
```

Frontend: `http://localhost:4200`  
API: `http://localhost:3000/api/recetas`

## Endpoints disponibles

- `GET /api/recetas`
- `GET /api/recetas/:id`
- `POST /api/recetas`
- `PUT /api/recetas/:id`
- `DELETE /api/recetas/:id`

## Nota

Si MySQL tiene contrasena, actualizar `password` en `index.js`.
