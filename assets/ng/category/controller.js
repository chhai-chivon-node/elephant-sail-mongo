app.controller('CategoryController', function($scope, CategoryService) {

    $scope.isCreate = true;
    $scope.btnName = 'Create';
    $scope.item = {};

    $scope.selectedCategory = {};
    $scope.listCategoriesName = [];

    $scope.categories = [];

    $scope.init = function() {
        console.log("Categories loaded ...");
        $scope.clearForm();
        $scope.getItems();

        CategoryService.listCategoriesName().then(function(res) {
            $scope.listCategoriesName = res;
        });
    }


    $scope.getItems = function() {
        CategoryService.findAll().then(function(res){
            $scope.categories = res;
            console.log("categories items :",res);
        });
    }

    $scope.saveItem = function() {
        if ($scope.isCreate) {
            CategoryService.saveItem($scope.item).then(function(res){
                $scope.categories = res;
                $scope.getItems();
                $scope.clearForm();
            });
            console.log("createItem: ", $scope.item);
        } else {
            CategoryService.updateItem($scope.item.id,$scope.item).then(function(res){
                $scope.categories = res;
                $scope.getItems();
                $scope.clearForm();
            });
        }     
    }

    $scope.deleteItem = function(item) {
        CategoryService.deleteItem(item).then(function(res){
            $scope.categories = res;
            $scope.getItems();
        });
    }

    $scope.modifyItem = function(oldItem) {
        $scope.isCreate = false;
        $scope.btnName = 'Update';
        $scope.item = oldItem;
    }

    $scope.newItem = function() {
        $scope.clearForm();
    }

    $scope.clearForm = function() {
        $scope.isCreate = true;
        $scope.btnName = 'Create';
        $scope.item = {
            name: '',
            description: '',
            imageUrl:''
        };
    }

    $scope.onCategoryChange = function() {
        console.log($scope.selectedCategory);
    }
    $scope.init();

});
