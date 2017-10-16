app.service('ProductService', function ($http, PRODUCT_END_POINT) {
    
    var findAll= function() {
        return $http.get(PRODUCT_END_POINT).then(function(res){
            return res.data;
        });
    }

    var find = function(item){
        return $http.get(PRODUCT_END_POINT+"/"+item.id).then(function(res){
            return res.data;
        }); 
    }

    var saveItem = function(item){
        return  $http.post(PRODUCT_END_POINT,item).then(function (res) {
                return res.data;
        });
    }

    var  updateItem = function(id, item ){
        return  $http.put(PRODUCT_END_POINT + '/' + id, item).then(function (res) {
            return res.data;
        });      
    }

    var deleteItem = function(item) {
        return $http.delete(PRODUCT_END_POINT + '/'+ item.id).then(function (res) {
            return res.data;
        });
    }

    return {
        findAll:  findAll,
        find: find,
        saveItem: saveItem,
        updateItem:  updateItem,
        deleteItem: deleteItem
    }
});
   
