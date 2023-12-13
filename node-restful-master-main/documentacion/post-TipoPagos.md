Endpoint: POST /tipopago
========================
Permite agregar un nuevo tipo de pago.

## Ejemplo de Solicitud

    POST /tipopago

    Content-Type: application/json
    {
        "Nombre": "Nombre del nuevo tipo de pago",
        "Descripcion": "Descripción del nuevo tipo de pago"
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
