Guia para la creación  del PUT
==============================
Primeramente lo que tenemos que tener son tres archvios
```
-Model
-Controller
-App
```
Necesitaremos esos tres archivos para realizar un Put,
Dentro de nuestro arhcivo `controller` en este caso para categorias tendremos que crear lo siguiente:

` static async editar(req, res){
       
        try {

            let data = await CategoriasModel.editar(req.params.id,req.body)
            
            data = await CategoriasModel.consultarPorId(req.params.id);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
            res.status(404).send({code: 404, message:error.sqlMessage});
 
        }        
       
    }` 

Una vez teniendo eso nos, vamos a nuestro archivo `Model` tomando  en cuenta que estamos trabajando en el archivo categorias, debemos de  tener lo siguiente:

    `  static async editar(id,categoria) {
            let db = await connectMysql();
            let query = db('categoria')
            .where({ Idcategoria: id })
            .update(categoria)
            return await query;
            
        }`


ahora lo que tenemos que tener es la ruta de la constante del arhcivo en el cual estamos trabajando una vez poniendo esto 
en nuestro app.js ya no se tine que volver a poner a menos que se otra ruta:

    `const CategoriaController = require('./controllers/CategoriaController');`

Por ultimo dentro de nuestro app.js tendremos que poner las rutas de los archivos el cual deberia de quedar de la siguiente forma:

    `app.post('/categoria', CategoriaController.agregar);`
