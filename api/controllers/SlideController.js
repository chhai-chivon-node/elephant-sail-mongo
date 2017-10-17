/**
 * SlideController
 *
 * @description :: Server-side logic for managing slides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    findall:function(req, res){
        var p = req.param("page");
        var l = req.param("limit");
        return Slide.find().paginate({page: p , limit: l}).then(function(slides){
            return res.json(slides);
        }).catch(function(err){
            console.log(err);
        });
    },

    find:function(req,res){
        var sId = req.params.id;
        return Slide.find({id: sId}).then(function(slide){
            return res.json(slide);
        }).catch(function(err){
            console.log(err);
        });
    },

    create:function(req, res){
        var slide = {
            title:req.param("title"),
            description:req.param("description"),
            image:req.param("image")
        };
        return Slide.create(slide).then(function(s){
            return res.json(s);
        }).catch(function(err){
            console.log(err);
        });
    },

    update:function(req, res){
        var sId = req.params.id;
        var slide = {
            title:req.param("title"),
            description:req.param("description"),
            image:req.param("image")
        };
        return Slide.update({id:sId}, slide).then(function(s){
            return res.json(s);
        }).catch(function(err){
            console.log(err);
        });
    },

    delete:function(req,res){
        var sId = req.params.id;
        return Slide.destroy(sId).then(function(slide){
            return res.json(slide);
        }).catch(function(err){
            console.log(err);
        });
    }
};
