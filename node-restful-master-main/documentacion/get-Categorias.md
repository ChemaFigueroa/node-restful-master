Endpoint: GET /categoria
=========================
Permite recuperar información sobre todas las categorías.

## Ejemplo de Solicitud

GET /categoria

## Respuesta Exitosa (Código 200 OK)

    [
        {
            "Idcategoria": 1,
            "Nombre": "Ferrreteria",
            "Descripcion": "Brocas"
        },
        {
            "Idcategoria": 2,
            "Nombre": "Fontaneria",
            "Descripcion": "Llaves"
        }
        // ... más categorías
    ]
    
## Respuestas de Errores Posibles

-Código 404 Not Found:

    {
    "errno": 404,
    "error": "not_found",
    "error_description": "Not found."
    }
-Código 500 Internal Server Error:

    {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
    }

