Guia para la creación  del POST
================================

```
-Model
-Controller
-App
```

Necesitaremos esos tres archivos para realizar un Post,
Dentro de nuestro arhcivo `controller` en este caso para categorias tendremos que crear lo siguiente:

` static async agregar(req, res){
       
        try {

            let data = await CategoriasModel.agregar(req.body)
        
            data = await CategoriasModel.consultarPorId(data[0]);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
                           res.status(404).send({code: 404, message:error.sqlMessage});
 
        }
        
       
    }  ` 

Una vez teniendo eso nos, vamos a nuestro archivo `Model` tomando  en cuenta que estamos trabajando en el archivo categorias, debemos de  tener lo siguiente:

    `static async agregar(categoria) {
        let db = await connectMysql();

        let query = db('categoria').insert(categoria)
        return await query;
        
    }`

Por ultimo dentro de nuestro app.js tendremos que poner las rutas de los archivos el cual deberia de quedar de la siguiente forma:

    `app.post('/categoria', CategoriaController.agregar);`

 