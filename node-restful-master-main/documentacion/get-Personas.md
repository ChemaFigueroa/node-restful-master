Endpoint: GET /persona
=======================

Permite recuperar información sobre todas las personas.

## Ejemplo de Solicitud
GET /persona
## Respuesta Exitosa (Código 200 OK)
 ``` json 
    [
    {
        "Idpersona": 1,
        "Nombre": "Juan Pérez",
        "Edad": 30,
        "Correo": "juan.perez@email.com"
    },
    {
        "Idpersona": 2,
        "Nombre": "María González",
        "Edad": 28,
        "Correo": "maria.gonzalez@email.com"
    }
    // ... más personas
    ]

``` 

## Respuestas de Errores Posibles
- Código 404 Not Found:
 ``` json 
        {
        "errno": 404,
        "error": "not_found",
        "error_description": "Not found."
        }
 ``` 
## Código 500 Internal Server Error:
 ``` json 
    {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
    }
 ```  








