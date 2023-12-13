Endpoint: PATCH /persona/{id}
=============================
Permite reemplazar un dato de una persona.

## Ejemplo de Solicitud
    PATCH /persona/6

    Content-Type: application/json
    {
        "Nombre": "Nuevo nombre"
    }
## Respuesta Exitosa (Código 200 OK)
    {
        "status": 201,
        "message": "Successfull partial update'"
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



