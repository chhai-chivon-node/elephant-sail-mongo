app.service('CategoryService', function ($http,CATEGORY_END_POINT) {

    var listCategoriesName = function() {
        return $http.get(CATEGORY_END_POINT+'/list/names').then(function(res){
            return res.data;
        });
    }

    var listCategoriesParent = function() {
        return $http.get(CATEGORY_END_POINT+'/list/parent').then(function(res){
            return res.data;
        });
    }

    var listCategoriesChild = function() {
        return $http.get(CATEGORY_END_POINT+'/list/child').then(function(res){
            return res.data;
        });
    }

    var findAll= function() {
        return $http.get(CATEGORY_END_POINT).then(function(res){
            return res.data;
        });
    }

    var find = function(item){
        return $http.get(CATEGORY_END_POINT+"/"+item.id).then(function(res){
            return res.data;
        }); 
    }

    var saveItem = function(item){
        return  $http.post(CATEGORY_END_POINT,item).then(function (res) {
                return res.data;
        });
    }

    var  updateItem = function(id, item ){
        return  $http.put(CATEGORY_END_POINT + '/' + id, item).then(function (res) {
            return res.data;
        });      
    }

    var deleteItem = function(item) {
        return $http.delete(CATEGORY_END_POINT + '/'+ item.id).then(function (res) {
            return res.data;
        });
    }

    return {
        listCategoriesChild: listCategoriesChild,
        listCategoriesParent: listCategoriesParent,
        listCategoriesName: listCategoriesName,
        findAll: findAll,
        find: find,
        saveItem: saveItem,
        updateItem: updateItem,
        deleteItem: deleteItem
    }
});
   

