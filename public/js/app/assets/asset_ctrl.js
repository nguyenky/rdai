(function () {
  angular
    .module('rdai')
    .controller('AssetCtrl', [
      '$scope',
      '$rootScope',
      '$uibModal',
      AssetCtrl
    ]);

  function AssetCtrl($scope, $rootScope, $uibModal) {
    $scope.data = {
      publicAddress: '',
      balance: 0,
      recentTransactions: []
    };

    $scope.showBuyModal = function() {
      $uibModal.open({
        templateUrl: '../js/app/assets/modal_buy.html',
        windowClass: 'show buy-modal', // Workaround .fade:not(.show) css
        size: 'sm',
        controller: function($scope) {
        }
      })
      .result
      .then(function() {

      }, function() {
      });
    };

    $scope.openCart = function() {
      console.log('TODO: open cart');
    }
  }
})();
