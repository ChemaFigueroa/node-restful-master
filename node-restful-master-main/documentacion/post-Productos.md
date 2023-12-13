Endpoint: POST /producto
=======================
Permite agregar un nuevo producto.

## Ejemplo de Solicitud
 ``` json
    POST /producto

    Content-Type: application/json
    {
        "Nombre": "Nombre del nuevo producto",
        "Precio": 99.99,
        "Descripcion": "Descripción del nuevo producto"
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