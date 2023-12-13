Endpoint: PATCH /persona/{id}
=============================
Permite reemplazar un dato de una persona.

## Ejemplo de Solicitud
 ``` json
    PATCH /persona/6

    Content-Type: application/json
    {
        "Nombre": "Nuevo nombre"
    }
 ``` 
## Respuesta Exitosa (Código 200 OK)
 ``` json
    {
        "status": 201,
        "message": "Successfull partial update'"
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
- Código 404 Not Found:
 ``` json
        {
            "errno": 404,
            "error": "Not Found"
        }
 ``` 



