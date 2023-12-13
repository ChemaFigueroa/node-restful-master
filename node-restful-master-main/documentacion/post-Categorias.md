Endpoint: POST /categoria
=========================
Permite agregar una nueva categoría.

## Ejemplo de Solicitud
    POST /categoria

    Content-Type: application/json
    {
        "Nombre": "Nombre de la nueva categoría",
        "Descripcion": "Descripción de la nueva categoría"
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
