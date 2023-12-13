Endpoint: POST /persona
=======================
Permite agregar una nueva persona.

## Ejemplo de Solicitud
 ``` json
    POST /persona

    Content-Type: application/json
    {
        "Nombre": "Nombre de la nueva persona",
        "Edad": 25,
        "Correo": "correo@nuevapersona.com"
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