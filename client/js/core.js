var productList = angular.module('productList', []);

function productController($scope, $http){
    $scope.formData = {};
    $http.get('/products').success(function(data){
        $scope.products = data;
        console.log(data);
    }).error(function(data){
        console.log(data);
    });
    $scope.createProduct = function() {
        $http.post('/products', $scope.formData).success(function(data){
            $scope.products = data;
            $scope.formData = {};
          }).error(function(data){console.log(data);})
    };
    $scope.deleteProduct = function(id){
        $http.delete('/products/' + id).success(function(data){
            $scope.products = data;
        }).error(function(data){console.log(data)});
    };
    
}