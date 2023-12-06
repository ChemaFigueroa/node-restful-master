Guia para la creacion de un Patch
=================================
Primeramente lo que tenemos que tener son tres archvios
```
-Model
-Controller
-App
```
Necesitaremos esos tres archivos para realizar un patch,
Dentro de nuestro arhcivo `controller` en este caso para categorias tendremos que crear lo siguiente:

    `static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await CategoriasModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }`

Una vez teniendo eso nos vamos, a nuestro archivo `Model` tomando  en cuenta que estamos trabajando en el archivo categorias debemos de tener lo siguiente:

    `static async actualizar(Idcategoria, campos) {
        let db = await connectMysql();
        return await db('categoria').where('Idcategoria', Idcategoria).update(campos);
    }`

Por ultimo dentro de nuestro app.js tendremos que poner las rutas de los archivos el cual deberia de quedar de la siguiente forma:


     `app.patch('/categoria/:id([0-9]+)', CategoriaController.itemPatch); `
