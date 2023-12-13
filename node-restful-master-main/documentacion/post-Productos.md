Endpoint: POST /producto
=======================
Permite agregar un nuevo producto.

## Ejemplo de Solicitud
    POST /producto

    Content-Type: application/json
    {
        "Nombre": "Nombre del nuevo producto",
        "Precio": 99.99,
        "Descripcion": "Descripción del nuevo producto"
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
