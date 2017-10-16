app.controller('categoryController', function($scope, $http, CATEGORY_END_POINT, category, FileUploader) {

    $scope.isCreate = true;
    $scope.btnName = 'Create';
    $scope.item = {};

    $scope.selectedCategory = {};
    $scope.listCategoriesName = [];

    $scope.init = function() {
        console.log("Product loaded ...");
        $scope.clearForm();
        $scope.getCategory();

        category.listCategoriesName().then(function(res) {
            $scope.listCategoriesName = res;
        })
    }


    $scope.getCategory = function() {
        $http.get(CATEGORY_END_POINT).then(function(response) {
            console.log(response.data);
            $scope.categories = response.data;
        });
    }

    $scope.saveItem = function() {

        if ($scope.isCreate) {
            $http.post(CATEGORY_END_POINT, $scope.item).then(function(res) {
                console.log("res: ", res);
            });
            console.log("createItem: ", $scope.item);
        }
        else {
            $http.put(CATEGORY_END_POINT + '/' + $scope.item.id, $scope.item).then(function(res) {
                console.log("res: ", res);

            });
        }
        $scope.clearForm();
        $scope.getCategory();
    }

    $scope.deleteItem = function(item) {
        $http.delete(CATEGORY_END_POINT + '/' + item.id).then(function(res) {
            console.log("res: ", res);
            $scope.getCategory();
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
            description: ''
        };
    }

    $scope.onCategoryChange = function() {
        console.log($scope.selectedCategory);
    }

    var uploader = $scope.uploader = new FileUploader({
        url: '/file/upload'
    });

    // FILTERS

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/ , options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };

    $scope.init();

});
