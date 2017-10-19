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
        var p = req.param("page");
        var l = req.param("limit");
        return Category.find().paginate({page: p , limit: l}).then(function (categories) {
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
        var p = req.param("page");
        var l = req.param("limit");
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
        var p = req.param("page");
        var l = req.param("limit");
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
        var imageUrl = req.file('imageUrl');
        imageUrl.upload({ dirname: '../../assets/images'},function onUploadComplete (err, files) {				
            // Files will be uploaded to /assets/images/
            // Access the files via localhost:1337/images/yourfilename
                if (err) return res.serverError(err);								
                //	IF ERROR Return and send 500 error with error
                console.log(files);
                res.json({status:200,file:files});
                //This will print the details including new file name upload path etc
        });
        var category = {
            name: req.param("name"),
            description: req.param("description"),
            imageUrl: imageUrl
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
    },
    /**
     * count
     */
    count: function (req, res) {
        return Category.find().then(function (categories) {
            return res.json(categories);
        }).catch(function (err) {
            console.error("Error on find all", err);
        });
    }
};

