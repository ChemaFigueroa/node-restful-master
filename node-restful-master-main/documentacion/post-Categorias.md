Endpoint: POST /categoria
=========================
Permite agregar una nueva categoría.

## Ejemplo de Solicitud
 ```http
    POST /categoria

    Content-Type: application/json
    {
        "Nombre": "Nombre de la nueva categoría",
        "Descripcion": "Descripción de la nueva         categoría"
    }
``` 
## Respuesta Exitosa (Código 200 OK)
 ``` json
    {
        "status": 201,
        "message": "Created"
    }
``` 
## Respuestas de Errores Posibles
- Código 400 Bad Request:
 ``` json 
        {
            "errno": 400,
            "error": "Bad Request"
        }
 ``` 