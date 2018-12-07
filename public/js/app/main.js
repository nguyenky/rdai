angular
  .module('rdai',
    [
      'ngRoute',
      'ngSanitize',
      'ngAnimate',
      'ui.bootstrap'
    ]
  )
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../js/app/dashboard/dashboard.html'
      }).
      when('/marketplace', {
        templateUrl: '../js/app/marketplace/marketplace.html'
      }).
      when('/profile', {
        templateUrl: '../js/app/profile/profile.html'
      }).
      when('/assets', {
        templateUrl: '../js/app/assets/asset.html'
      }).
      when('/subscriptions', {
        templateUrl: '../js/app/subscriptions/subscriptions.html'
      }).
      when('/transactions', {
        templateUrl: '../js/app/transactions/transactions.html'
      }).
      otherwise({
        templateUrl: '../js/app/templates/not-found.html'
      });
  }]);
