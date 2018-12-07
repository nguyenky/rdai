(function () {
  angular
    .module('rdai')
    .controller('SubscriptionsCtrl', [
      '$scope',
      '$rootScope',
      SubscriptionsCtrl
    ]);

  function SubscriptionsCtrl($scope, $rootScope) {
    $scope.data = {
    };

  }

})();
