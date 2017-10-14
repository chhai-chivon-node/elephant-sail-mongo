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
    findall: function (req, res,next) {
        var p = req.param("page");
        if(p == null){
            p = 1;
        }
        var l = req.param("limit");
        if(l== null){
            l = 10;
        }
        return Product.find({ skip: p,
            limit: l}).exec(function(err, products) {
            if(err) throw err;
            next(products);
            return {
                    "data":products,
                    "page":p,
                    "limit":l
                }
          });
    },
    /**
     * `ProductController.find()`
     */
    find: function (req, res) {
        var pId = req.params.id;
        return Product.find({id : pId}).then(function (product) {
            return res.json(product);
        }).catch(function (err) {
            console.log("Error on find all", err);
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
                     return res.json(pro);
                }).catch(function (err) {
                        console.log(err);
                });
    },
    /**
     * `ProductController.update()`
     */
    update: function (req, res) {
        var pId = req.params.id;
        var product = {
            name: req.param("name"),
            description: req.param("description"),
            imageUrl: req.param("imageUrl")
        };
        return Product.update({id: pId}, product).then(function (product) {
                    return res.json(product);
                }).catch(function (err) {
                    console.log(err);
                });

     },
    /**
     * `ProductController.delete()`
     */
    delete: function (req, res) {
        var pId = req.params.id;
        return Product.destroy({ id: pId }).then(function (product) {
            return res.json(product);
        }).catch(function (err) {
            console.log(err);
        });

    }
};

