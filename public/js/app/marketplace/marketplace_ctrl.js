(function () {
  angular
    .module('rdai')
    .controller('MarketplaceCtrl', [
      '$scope',
      '$rootScope',
      MarketplaceCtrl
    ]);

  function MarketplaceCtrl($scope, $rootScope) {
    $scope.data = {
    };
  }
})();
