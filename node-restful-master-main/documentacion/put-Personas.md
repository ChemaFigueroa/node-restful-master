Endpoint: PUT /persona/{id}
===========================
Permite reemplazar una persona.

## Ejemplo de Solicitud

    PUT /persona/6

    Content-Type: application/json
    {
        "Nombre": "Nuevo nombre",
        "Edad": 25,
        "Correo": "nuevo@email.com"
    }
## Respuesta Exitosa (Código 200 OK)

    {
        "status": 201,
        "message": "Updated successfully"
    }
## Respuestas de Errores Posibles

- Código 400 Bad Request:
  
        {
            "errno": 400,
            "error": "Bad Request"
        }
- Código 404 Not Found:

        {
            "errno": 404,
            "error": "Not Found"
        }

