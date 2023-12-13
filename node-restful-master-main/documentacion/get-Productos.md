Endpoint: GET /producto
=======================

Permite recuperar información sobre todos los productos.

## Ejemplo de Solicitud
GET /producto

## Respuesta Exitosa (Código 200 OK)
    [
    {
        "Idproducto": 1,
        "Nombre": "Borcas",
        "Precio": 599.99,
        "Descripcion": "Brocas para fierro "
    },
    {
        "Idproducto": 2,
        "Nombre": "focos",
        "Precio": 999.99,
        "Descripcion": "focos de luz led"
    }
    // ... más productos
    ]
## Respuestas de Errores Posibles
--Código 404 Not Found:

    {
    "errno": 404,
    "error": "not_found",
    "error_description": "Not found."
    }

## Código 500 Internal Server Error:
    {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
    }






