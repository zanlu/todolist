module.exports = (function(){

    var getAll = function(req,res){
        res.send("all of my t o d o s ");
    };

    var getOne = function(req,res){
        res.send("here is todo # "+ req.params.id);
    };


    var create = function(req,res){
        res.json( req.body);
    };

    var update = function(req,res){
        res.json([req.params.id, req.body]);
    };

    var deleteOne = function(req,res){
        res.json(req.body.id);
    }

    return{
        getAll : getAll,
        getOne: getOne,
        create : create,
        update : update,
        deleteOne : deleteOne

    }
})();