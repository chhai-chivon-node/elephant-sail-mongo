/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    listCategoriesName: function (req, res) {
        Category.find( { select: ['id','name'] },function(err, categories){
            res.json(categories);
        });
    },
    
    listParentCategories: function(req , res){
        Category.find( { where: {'parent':''} },function(err, categories){
            res.json(categories);
        });
    },
    
    getChildCategories: function(req , res){
        var parentId = req.param("id");
        Category.find({ id : parentId }).then(function(res){
                if(res && res.length > 0){
                    return {
                        data:res,
                        message:'data found',
                        status:'200'
                    }
                }else{
                    return {
                        message:'data not found',
                        status:'204'
                    }
                }
        });
        
    }
};

