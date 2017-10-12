
app.controller('productController', function($scope, $http, PRODUCT_END_POINT,category) {
    
            $scope.isCreate = true;
            $scope.btnName = 'Create';
            $scope.item  = {};
        
            $scope.selectedCategory = {};
            $scope.listCategoriesName = [];
    
            $scope.init = function() {
                console.log("Product loaded ...");
                $scope.clearForm();
                $scope.getProduct();
    
                category.listCategoriesName().then(function(res){
                    $scope.listCategoriesName = res;
                })
            }
        
            $scope.getProduct = function() {
                $http.get(PRODUCT_END_POINT).then(function (response) {
                    console.log(response.data);
                    $scope.products = response.data;
                });
            }
        
            $scope.saveItem = function() {
                if ($scope.isCreate) {
        
                    $http.post(PRODUCT_END_POINT, $scope.item).then(function (res) {
                        console.log("res: ", res);
                    });
                    console.log("createItem: ", $scope.item);
                } else {
        
                    $http.put(PRODUCT_END_POINT + '/' + $scope.item.id,$scope.item).then(function (res) {
                        console.log("res: ", res);
                    });
                }
                $scope.clearForm();     
                $scope.getProduct();
            }
        
            $scope.deleteItem = function(item) {
                $http.delete(PRODUCT_END_POINT + '/'+ item.id).then(function (res) {
                    console.log("res: ", res);
                    $scope.getProduct();
                });
            }
        
            $scope.modifyItem = function(oldItem) {
                $scope.isCreate = false;
                $scope.btnName = 'Update';
                $scope.item = oldItem;
            }
        
            $scope.newItem = function(){
                $scope.clearForm();
            }
        
            $scope.clearForm = function() {
                $scope.isCreate = true;
                $scope.btnName = 'Create';
                $scope.item  = {
                    name: '',
                    description: ''
                };
            } 
        
            $scope.onCategoryChange = function(){
                console.log($scope.selectedCategory);
            }
    
            $scope.init();


});