/**
 * PartnerController
 *
 * @description :: Server-side logic for managing Partners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    findall:function(req,res){
        var p = req.param("page");
        var l = req.param("limit");
        return Partner.find().paginate({page: p , limit: l}).then(function(partners){
                return res.json(partners);
        }).catch(function(err){
                console.log("Error :", err);
        });
    },

    find:function(req,res){
        var pId = req.param('id');
        return Partner.find({id:pId}).then(function(partner){
            res.json(partner);
        }).catch(function(err){
            console.log('Error :', err);
        })
    },

    create:function(req, res){
        var partner = {
            name:req.param("name"),
            description:req.param("description"),
            image:req.param("image")
        };
        return Partner.create(partner).then(function(partner){
                return res.json(partner);
        }).catch(function(err){
            console.log('Error :', err);
        }); 
    },

    update:function(req,res){
        var pId = req.params.id;
        var partner = {
            name:req.param("name"),
            description:req.param("description"),
            image:req.param("image")
        };
        return Partner.update(pId,partner).then(function(p){
                return res.json(p);
        }).catch(function(err){
            console.log('Error :', err);
        }); 
    },

    delete:function(req,res){
        var pId = req.params.id;
        return Partner.destroy(pId).then(function(parnter){
            return res.json(parnter);
        }).catch(function(err){
            console.log('Error :', err);
        });
    }
};

