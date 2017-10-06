app.service('category', function ($http) {
    var listCategoriesName = function() {
        return $http.get(API_END_POINT+'/categories/name').then(function(res){
            return res.data;
        });
    }

    return {
        listCategoriesName: listCategoriesName
    }
});
   

