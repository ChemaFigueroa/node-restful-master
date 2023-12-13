Endpoint: PUT /producto/{id}
============================
Permite reemplazar un producto.


## Ejemplo de Solicitud

    PUT /producto/6

    Content-Type: application/json
    {
        "Nombre": "Nuevo nombre de producto",
        "Precio": 99.99,
        "Descripcion": "Nueva descripción"
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
