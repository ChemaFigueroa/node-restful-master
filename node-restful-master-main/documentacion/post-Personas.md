Endpoint: POST /persona
=======================
Permite agregar una nueva persona.

## Ejemplo de Solicitud
    POST /persona

    Content-Type: application/json
    {
        "Nombre": "Nombre de la nueva persona",
        "Edad": 25,
        "Correo": "correo@nuevapersona.com"
    }
## Respuesta Exitosa (Código 200 OK)
        {
            "status": 201,
            "message": "Created"
        }
## Respuestas de Errores Posibles
- Código 400 Bad Request:
  
        {
            "errno": 400,
            "error": "Bad Request"
        }
