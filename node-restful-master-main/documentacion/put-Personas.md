Endpoint: PUT /persona/{id}
===========================
Permite reemplazar una persona.

## Ejemplo de Solicitud
 ```http
    PUT /persona/6

    Content-Type: application/json
    {
        "Nombre": "Nuevo nombre",
        "Edad": 25,
        "Correo": "nuevo@email.com"
    }
 ``` 
## Respuesta Exitosa (Código 200 OK)
 ``` json
    {
        "status": 201,
        "message": "Updated successfully"
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
