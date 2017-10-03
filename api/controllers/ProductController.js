/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * `ProductController.findall()`
     */
    findall: function (req, res) {
        console.log("Inside findall..............");
        var page = req.param("page");
        var limit = req.param("limit");
        return Product.find().then(function (products) {
            console.log("fin all product = " , res.json(products));
            return res.json(products);
        }).catch(function (err) {
            console.error("Error on find all", err);
        });
    },
    /**
     * `ProductController.find()`
     */
    find: function (req, res) {
        var pId = req.params.id;
        console.log("Inside find.............." , pId);

        return Product.find({id : pId}).then(function (product) {
            console.log("fin all product = " ,  res.json(product));
            return res.json(product);
        }).catch(function (err) {
            console.error("Error on find all", err);
        });
    },
    /**
     * `ProductController.create()`
     */
    create: function (req, res) {
        var product = {
            name: req.param("name"),
            description: req.param("description"),
            imageUrl: req.param("imageUrl")
        };
        return Product.create(product).then(function (pro) {
                     console.log("Product create: " ,  res.json(pro));
                     return res.json(pro);
                }).catch(function (err) {
                        console.error(err);
                });
    },
    /**
     * `ProductController.update()`
     */
    update: function (req, res) {
        var pId = req.params.id;
        console.log("Inside update..............", pId);
        var product = {
            name: req.param("name"),
            description: req.param("description"),
            imageUrl: req.param("imageUrl")
        };
        return Product.update({id: pId}, product).then(function (product) {
                    console.log("Deleted successfully!!!  = " ,  res.json(product));
                    return res.json(product);
                }).catch(function (err) {
                    console.log("Deleted unsuccessfully");
                });

     },
    /**
     * `ProductController.delete()`
     */
    delete: function (req, res) {
        var pId = req.params.id;
        console.log("Inside delete..............");

        return Product.destroy({ id: pId }).then(function (product) {
            console.log("Deleted successfully!!!  = " , res.json(product));
            return res.json(product);
        }).catch(function (err) {
            console.log("Deleted unsuccessfully");
        });

    }
};

