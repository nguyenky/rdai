(function () {
  angular
    .module('rdai')
    .controller('TransactionsCtrl', [
      '$scope',
      '$rootScope',
      TransactionsCtrl
    ]);

  function TransactionsCtrl($scope, $rootScope) {
    $scope.data = {
    };

  }

})();
