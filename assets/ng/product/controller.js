
app.controller('productController', function($scope,ProductService,CategoryService) {
    
            $scope.isCreate = true;
            $scope.btnName = 'Create';
            $scope.item  = {};
        
            $scope.selectedCategory = {};
            $scope.listCategoriesName = [];
    
            $scope.products = [];

            $scope.init = function() {
                console.log("Product loaded ...");
                $scope.clearForm();
                $scope.getItems();
    
                CategoryService.listCategoriesName().then(function(res){
                    $scope.listCategoriesName = res;
                })
            }
        
            $scope.getItems = function() {
                ProductService.findAll().then(function(res){
                    $scope.products = res;
                    console.log("slide items",res);
                });
            }
        
            $scope.saveItem = function() {
                if ($scope.isCreate) {
                    ProductService.saveItem($scope.item).then(function(res){
                        $scope.products = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                    console.log("createItem: ", $scope.item);
                } else {
                    ProductService.updateItem($scope.item.id,$scope.item).then(function(res){
                        $scope.products = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                }     
            }
        
            $scope.deleteItem = function(item) {
                ProductService.deleteItem(item).then(function(res){
                    $scope.products = res;
                    $scope.getItems();
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