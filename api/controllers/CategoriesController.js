/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var pager = require('sails-pager');
module.exports = {
    list:function(req, res){
        var perPage = req.query.per_page;
        var currentPage = req.query.page;
        var conditions = {active: true};

        Categories.find({
            skip: perPage,
            limit: perPage,
            sort: 'createdAt DESC'
        }).exec(function(err, categories){
            pager.paginate(categories, conditions, currentPage, perPage, null, 'createdAt DESC').then(function(records){
                return records;
            }).catch(function(err) {
                return err;
            });
        });
    }
	
};

