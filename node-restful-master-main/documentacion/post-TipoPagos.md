Endpoint: POST /tipopago
========================
Permite agregar un nuevo tipo de pago.

## Ejemplo de Solicitud
 ```http
    POST /tipopago

    Content-Type: application/json
    {
        "Nombre": "Nombre del nuevo tipo de pago",
        "Descripcion": "Descripción del nuevo tipo de pago"
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