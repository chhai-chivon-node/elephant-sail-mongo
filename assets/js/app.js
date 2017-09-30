// var app = angular.module('theApp', ['ui.router']);

// app.config(function ($stateProvider, $urlRouterProvider) {

//   $urlRouterProvider.otherwise('/admin');

//   $stateProvider
//     .state('home', {
//       url: '/home',
//       templateUrl: 'pages/home.html',
//       controller: 'adminController'
//     })
//     .state('category', {
//       url: '/category',
//       templateUrl: 'pages/category.html',
//       controller: 'adminCategoryController'
//     })
//     .state('product', {
//       url: '/product',
//       templateUrl: 'pages/product.html',
//       controller: 'adminProductController'
//     })
//     .state('customer', {
//       url: '/customer',
//       templateUrl: 'pages/customer.html',
//       controller: 'adminCustomerController'
//     })
//     .state('user', {
//       url: '/user',
//       templateUrl: 'pages/user.html',
//       controller: 'adminUserController'
//     })
//     .state('about', {
//       url: '/about',
//       templateUrl: 'pages/about.html'
//     })
//     .state('contact', {
//       url: '/contact',
//       templateUrl: 'pages/contact.html'
//     })
//     .state('admin', {
//       url: '/admin',
//       templateUrl: 'admin/index.html',
//       controller: 'adminMainController'

//     })

//     .state('admin-users', {
//       url: '/admin/users',
//       templateUrl: 'admin/users.html',
//       controller: 'adminUsersController'
//     })

//     .state('admin-posts', {
//       url: '/admin/posts',
//       templateUrl: 'admin/posts.html',
//       controller: 'adminPostsController'
//     });

// });

// // create the controller and inject Angular's $scope
// app.controller('mainController', function ($scope, $state) {
//   // create a message to display in our view
//   $scope.message = 'Everyone come and see how good I look!';

//   // $scope.$watch(function () {
//   //   return $state.$current.name
//   // }, function (newVal, oldVal) {
//   //   console.log("watch state change from old value [", oldVal, "] to value [", newVal, "]");
//   // });
// });

// app.controller('adminController', function ($rootScope, $scope) {
//   console.log('adminController loaded ...');
//   $rootScope.title = "Admin";
//   $rootScope.breadcrumb = "Admin";
//   $scope.message = 'Admin';
// });

// app.controller('adminCategoryController', function ($rootScope, $scope) {
//   console.log('adminCategoryController loaded ...');
//   $rootScope.title = "Category Controller";
//   $rootScope.breadcrumb = "Category";
//   $scope.message = 'Category';
// });

// app.controller('adminProductController', function ($rootScope, $scope) {
//   console.log('adminProductController loaded ...');
//   $rootScope.title = "Product Controller";
//   $rootScope.breadcrumb = "Product";
//   $scope.message = 'Product';
// });

// app.controller('adminCustomerController', function ($rootScope, $scope) {
//   console.log('adminCustomerController loaded ...');
//   $rootScope.title = "Customer Controller";
//   $rootScope.breadcrumb = "Customer";
//   $scope.message = 'Customer';
// });

// app.controller('adminUserController', function ($rootScope, $scope) {
//   console.log('adminUserController loaded ...');
//   $rootScope.title = "User Controller";
//   $rootScope.breadcrumb = "User";
//   $scope.message = 'User';
// });

// app.controller('adminPostsController', function ($rootScope, $scope) {
//   console.log('adminPostsController loaded ...');
//   $rootScope.title = "Admin Posts Controller";
//   $rootScope.breadcrumb = "Posts";
//   $scope.message = 'adminPostsController.';
// });
