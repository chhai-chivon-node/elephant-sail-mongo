app.controller('PartnerController', function($scope,PartnerService) {
    
            $scope.isCreate = true;
            $scope.btnName = 'Create';
            $scope.item  = {};
         
            $scope.partners = [];

            $scope.selectedCategory = {};
    
            $scope.init = function() {
                console.log("Partner loaded ...");
                $scope.clearForm();
                $scope.getItems();
            }

            $scope.getItems = function() {
                PartnerService.findAll().then(function(res){
                    $scope.partners = res;
                    console.log("partner items",res);
                });
            }
        
            $scope.saveItem = function() {
                if ($scope.isCreate) {
                    PartnerService.saveItem($scope.item).then(function(res){
                        $scope.partners = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                    console.log("createItem: ", $scope.item);
                } else {
                    PartnerService.updateItem($scope.item.id,$scope.item).then(function(res){
                        $scope.partners = res;
                        $scope.getItems();
                        $scope.clearForm();
                    });
                }     
            }
        
            $scope.deleteItem = function(item) {
                PartnerService.deleteItem(item).then(function(res){
                    $scope.partners = res;
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
                    description: '',
                    image:''
                };
            } 

            $scope.init();
});