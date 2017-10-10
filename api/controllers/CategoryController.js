/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * `CategoryController.findall()`
     */
    findall: function (req, res) {
        return Category.find().then(function (categories) {
            return res.json(categories);
        }).catch(function (err) {
            console.error("Error on find all", err);
        });
    },
    /**
     * `CategoryController.find()`
     */
    find: function (req, res) {
        var pId = req.params.id;
        return Category.find({id : pId}).then(function (category) {
            return res.json(category);
        }).catch(function (err) {
            console.log("Error on find all", err);
        });
    },
    /**
     * `CategoryController.findCategoriesName()`
     */
    findCategoriesName: function (req, res) {
        Category.find( { select: ['id','name'] }).then(function(categories){
            return res.json(categories);
        }).catch(function(err){
            console.log(err);
        });
    },
    /**
     * `CategoryController.findParentCategories()`
     */
    findParentCategories: function(req , res){
        Category.find( {parent:''}).then(function(categories){
            return res.json(categories);
        }).catch(function(err){
            console.log(err);
        });
    },
    /**
     * `CategoryController.findChildCategories()`
     */
    findChildCategories: function(req , res){
        var parentId = req.param("id");
        Category.find({ id : parentId }).then(function(categories){
                return res.json(categories);
            }).catch(function(err){
                console.log(err);
            });
        
    },
    /**
     * `CategoryController.create()`
     */
    create: function (req, res) {
        var category = {
            name: req.param("name"),
            description: req.param("description"),
            imageUrl: req.param("imageUrl")
        };
        return Category.create(category).then(function (cat) {
                return res.json(cat);
            }).catch(function (err) {
                console.log(err);
            });
    },
    /**
     * `CategoryController.update()`
     */
    update: function (req, res) {
        var pId = req.params.id;
        var category = {
            name: req.param("name"),
            description: req.param("description"),
            imageUrl: req.param("image")
        };
        return Category.update({id: pId}, category).then(function (category) {
                return res.json(category);
            }).catch(function (err) {
                console.log("Deleted unsuccessfully");
            });

     },
    /**
     * `CategoryController.delete()`
     */
    delete: function (req, res) {
        var pId = req.params.id;
        return Category.destroy({ id: pId }).then(function (category) {
            return res.json(category);
        }).catch(function (err) {
            console.log("Deleted unsuccessfully");
        });

    }
};

