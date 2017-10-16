app.controller('SlideController', function($scope,SlideService) {
    
            $scope.isCreate = true;
            $scope.btnName = 'Create';
            $scope.item  = {};
         
            $scope.slides = [];

            $scope.selectedCategory = {};
    
            $scope.init = function() {
                console.log("Slide loaded ...");
                $scope.clearForm();
                $scope.getItems();
            }

            $scope.getItems = function() {
                SlideService.findAll().then(function(res){
                    $scope.slides = res;
                    console.log("slide items",res);
                });
            }
        
            $scope.saveItem = function() {
                if ($scope.isCreate) {
                    SlideService.saveItem($scope.item).then(function(res){
                        $scope.sides = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                    console.log("createItem: ", $scope.item);
                } else {
                    SlideService.updateItem($scope.item.id,$scope.item).then(function(res){
                        $scope.sides = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                }     
            }
        
            $scope.deleteItem = function(item) {
                SlideService.deleteItem(item).then(function(res){
                    $scope.sides = res;
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
                    title: '',
                    description: '',
                    image:''
                };
            } 

            $scope.init();
});