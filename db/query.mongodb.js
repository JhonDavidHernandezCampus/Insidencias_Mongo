/**
 * *trainer SCHEMA
 */
use("db_campus_incidencias");
db.createCollection("trainer", {
    capped: true,
    size: 5000,
    max: 15,
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            additionalProperties: false,
            required: ['id_tra', 'nombre_tra', 'email_personal', 'email_corporativo', 'telefono_movil', 'telefono_residencia', 'telefono_empresa', 'telefono_movil_empresarial'],
            properties:{
                id_tra: {
                    bsonType: "int",
                    description: 'La id es obligatoria y debe ser numérica'
                },
                nombre_tra: {
                    bsonType: 'string',
                    description: 'El nombre_usuario es obligatorio',
                },
                email_personal: {
                    bsonType: 'string',
                    description: 'El email es obligatorio',
                },
                email_corporativo: {
                    bsonType: 'string',
                    description: 'El email corporativo es obligatorio'
                },
                telefono_movil: {
                    bsonType: 'int',
                    description: 'El telefono movil es obligatorio y debe ser numerico'
                },
                telefono_residencia: {
                    bsonType: 'int',
                    description: 'El telefono residencia es obligatorio y debe ser numerico'
                },
                telefono_empresa: {
                    bsonType: 'int',
                    description: 'El telefono empresa es obligatorio y debe ser numerico'
                },
                telefono_movil_empresarial: {
                    bsonType: 'int',
                    description: 'El telefono movil empresarial debe ser numerico'
                }
            }
        }
    }
});

/**
 * *Inserta data
 */

use("db_campus_incidencias");
db.trainer.insertOne({

    id_tra: 1,
    nombre_tra: "Vermen",
    email_personal: "vermen14@gmail.com",
    email_corporativo: "vermentrainer@campuslands.com",
    telefono_movil: 3123,
    telefono_residencia: 60712,
    telefono_empresa: 60754,
    telefono_movil_empresarial: 31234


})

/**
 * *incidencias SCHEMA
 */
use("db_campus_incidencias");
db.createCollection("incidencias", {
    capped: true,
    size: 5000,
    max: 15,
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            additionalProperties: false,
            required: ['id_inci', 'id_trainer', 'categoria', 'nivel', 'bloque', 'area', 'descripcion', 'fecha'],
            properties: {
                id_inci: {
                    bsonType: "int",
                    description: 'La id es obligatoria y debe ser numérica'
                },
                id_trainer: {
                    bsonType: 'int',
                    description: 'El id de trainer es obligatorio y debe ser numerico',
                },
                categoria: {
                    bsonType: 'string',
                    description: 'El categoria deben ser caracteres',
                },
                nivel: {
                    bsonType: 'string',
                    description: 'El nivel deben ser caracteres'
                },
                bloque: {
                    bsonType: 'int',
                    description: 'El bloque es obligatorio'
                },
                area: {
                    bsonType: 'string',
                    description: 'El area deben ser caracteres'
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'la descripcion deben caracteres'
                },
                fecha: {
                    bsonType: 'string',
                    description: 'El fecha es obligatoria'
                }
            }
        }
    }
});

/**
 * *inserta data
 */

use("db_campus_incidencias");
db.incidencias.insertOne({
    id_inci: 1,
    id_trainer: 1,
    categoria: "leve",
    nivel: "avanzado",
    bloque: 12,
    area: "apolo",
    descripcion: "la diadema esta rota",
    fecha: "2023-08-15"
})

/**
 * *inventario SCHEMA
 */

use("db_campus_incidencias");
db.createCollection("inventario", {
    capped: true,
    size: 5000,
    max: 15,
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            additionalProperties: false,
            required: ['id_inventario', 'bloque', 'computadores', 'teclados', 'mouse'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                id_inventario: {
                    bsonType: "int",
                    description: 'La id es obligatoria y debe ser numérica'
                },
                bloque: {
                    bsonType: 'int',
                    description: 'El bloque es obligatorio',
                },
                computadores: {
                    bsonType: 'int',
                    description: 'la cantidad de computadores debe ser numerica',
                },
                teclados: {
                    bsonType: 'int',
                    description: 'la cantidad de teclados debe ser numerica'
                },
                mouse: {
                    bsonType: 'int',
                    description: 'la cantidad de mouse debe ser numerica'
                }
            }
        }
    }
});

/**
 * *inserta data
 */


use("db_campus_incidencias");
db.inventario.insertOne({
    id_inventario: 1,
    bloque: 12,
    computadores: 30,
    teclados: 30,
    mouse: 30,
});

/**
 * *usuario SCHEMA
 */
use("db_campus_incidencias");
db.createCollection("usuario",{
    validator:{
        $jsonSchema:{
            title:"colecion de ususairos",
            bsonType:"object",
            required:["cc","nombre","rol","permisos"],
            properties:{
                cc:{
                    bsonType:"int",
                },
                nombre:{
                    bsonType:"string",
                },
                rol:{
                    bsonType:"string",
                    enum:["trainer","lider"]
                },
                permisos:{
                    bsonType:"array",
                    items:{
                        bsonType:"string",
                        enum:["get","post","put","delete",]
                    }
                }
            }
        }
    }
});
use("db_campus_incidencias");
db.usuario.createIndex(
    {cc:1},
    {unique:true}
);

use("db_campus_incidencias");
db.usuario.insertOne({
    cc: 12345,
    nombre: "Juan",
    rol: "lider",
    permisos: ["get", "post"]
}); 

use("db_campus_incidencias");
db.usuario.insertMany([
    {
        cc: 3578,
        nombre: "Miguel",
        rol: "trainer",
        permisos: ["get"]
    },
    {
        cc: 3578,
        nombre: "Miguel",
        rol: "trainer",
        permisos: ["get"]
    }
]);