app.service('UserService', function ($http, USER_END_POINT) {
    
    var findAll= function() {
        return $http.get(USER_END_POINT).then(function(res){
            return res.data;
        });
    }

    var find = function(item){
        return $http.get(USER_END_POINT+"/"+item.id).then(function(res){
            return res.data;
        }); 
    }

    var saveItem = function(item){
        return  $http.post(USER_END_POINT,item).then(function (res) {
                return res.data;
        });
    }

    var  updateItem = function(id, item ){
        return  $http.put(USER_END_POINT + '/' + id, item).then(function (res) {
            return res.data;
        });      
    }

    var deleteItem = function(item) {
        return $http.delete(USER_END_POINT + '/'+ item.id).then(function (res) {
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