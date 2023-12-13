Endpoint: GET /tipopago
=======================

Permite recuperar información sobre todos los tipos de pago.

## Ejemplo de Solicitud
GET /tipopago

## Respuesta Exitosa (Código 200 OK)

 ``` json 
    [
    {
        "Idtipopago": 1,
        "Nombre": "Tarjeta de crédito",
        "Descripcion": "Pago con tarjeta de crédito"
    },
    {
        "Idtipopago": 2,
        "Nombre": "Transferencia bancaria",
        "Descripcion": "Pago mediante transferencia bancaria"
    }
    // ... más tipos de pago
    ]
 ``` 

## Respuestas de Errores Posibles

- Código 404 Not Found:
 ``` json 
        {
        "errno": 404,
        "error": "not_found",
        "error_description": "Not found."
        }
 ``` 
## Código 500 Internal Server Error:
 ``` json 
        {
        "errno": 500,
        "error": "internal_error",
        "error_description": "Ocurrió un problema para  procesar la solicitud"
        }

 ``` 


