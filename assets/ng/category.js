
var API_END_POINT = 'http://localhost:1337';
var CATEGORY_END_POINT = API_END_POINT + '/categories';
var PRODUCT_END_POINT  = API_END_POINT + '/products';
var app = angular.module('myApp', []);

app.controller('categoryController', function($scope, $http) {

    $scope.isCreate = true;
    $scope.btnName = 'Create';
    $scope.item  = {};

    $scope.init = function() {
        console.log("Product loaded ...");
        $scope.clearForm();
        $scope.getCategory();
    }

    $scope.getCategory = function() {
        $http.get(CATEGORY_END_POINT).then(function (response) {
            console.log(response.data);
            $scope.categories = response.data;
        });
    }

    $scope.saveItem = function() {
        if ($scope.isCreate) {
            $http.post(CATEGORY_END_POINT, $scope.item).then(function (res) {
                console.log("res: ", res);

            });
            console.log("createItem: ", $scope.item);
        } else {

            $http.put(CATEGORY_END_POINT + '/' + $scope.item.id,$scope.item).then(function (res) {
                console.log("res: ", res);
                
            });
        }
        $scope.clearForm();     
        $scope.getProducts();
    }

    $scope.deleteItem = function(item) {
        $scope.item = item;
        $http.delete(CATEGORY_END_POINT + '/'+ $scope.item.id).then(function (res) {
            console.log("res: ", res);
            $scope.getProducts();
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

    $scope.init();
});