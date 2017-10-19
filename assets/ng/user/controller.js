app.controller('UserController', function($scope,UserService) {
    
            $scope.isCreate = true;
            $scope.btnName = 'Create';
            $scope.item  = {};
         
            $scope.users = [];
    
            $scope.init = function() {
                console.log("User loaded ...");
                $scope.clearForm();
                $scope.getItems();
            }

            $scope.getItems = function() {
                UserService.findAll().then(function(res){
                    $scope.users = res;
                    console.log("user items",res);
                });
            }
        
            $scope.saveItem = function() {
                if ($scope.isCreate) {
                    UserService.saveItem($scope.item).then(function(res){
                        $scope.users = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                    console.log("createItem: ", $scope.item);
                } else {
                    UserService.updateItem($scope.item.id,$scope.item).then(function(res){
                        $scope.users = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                }     
            }
        
            $scope.deleteItem = function(item) {
                UserService.deleteItem(item).then(function(res){
                    $scope.users = res;
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
                    firstName: '',
                    lastName: '',
                    email:'',
                    phoneNumber:'',
                    address:'',
                    password:'',
                };
            } 

            $scope.init();
});