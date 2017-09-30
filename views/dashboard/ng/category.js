var category = 'http://localhost:3000/categories';

var app = angular.module('myApp', []);

app.controller('productController', function($scope, $http) {

    $scope.isCreate = true;
    $scope.btnName = 'Create';
    $scope.item  = {};

    $scope.init = function() {
        console.log("Product loaded ...");
       // $scope.clearForm();
        $scope.getCategory();
    }

    $scope.getCategory = function() {
        $http.get(category).then(function (response) {
            console.log(response);
            $scope.categories = response.data.data;
        });
    }

    // $scope.saveItem = function() {
    //     if ($scope.isCreate) {
    //         $http.post(product, $scope.item).then(function (res) {
    //             console.log("res: ", res);

    //         });
    //         console.log("createItem: ", $scope.item);
    //     } else {

    //         $http.put(product + '/' + $scope.item._id,$scope.item).then(function (res) {
    //             console.log("res: ", res);
                
    //         });
    //     }
    //     $scope.clearForm();     
    //     $scope.getProducts();
    // }

    // $scope.deleteItem = function(item) {
    //     console.log("deleteItem ",item);
    //     $http.delete(product + '/'+ item._id).then(function (res) {
    //         console.log("res: ", res);
    //         $scope.getProducts();
    //     });
    // }

    // $scope.modifyItem = function(oldItem) {
    //     $scope.isCreate = false;
    //     $scope.btnName = 'Update';
    //     $scope.item = oldItem;
    // }

    // $scope.clearForm = function() {
    //     $scope.isCreate = true;
    //     $scope.btnName = 'Create';
    //     $scope.item  = {
    //         product_name: '',
    //         price: '',
    //         description: ''
    //     };
    // } 


    $scope.init();
});