(function () {
  angular
    .module('rdai')
    .controller('DashboardCtrl', [
      '$scope',
      '$rootScope',
      DashboardCtrl
    ]);

  function DashboardCtrl($scope, $rootScope) {
    $scope.data = {
      publicAddress: '',
      balance: 0,
      recentTransactions: []
    };

    ZbsRdai.getPublicAddress().then(function (address) {
      console.log('publicAddress: ', address);
      $scope.data.publicAddress = address;
      $scope.$apply();
    });

    ZbsRdai.getBalance().then(function (balance) {
      console.log('balance: ', balance);
      $scope.data.balance = balance.balance;
      $scope.$apply();
    });

    ZbsRdai.getRecentTransactions().then(function(transactions) {
      console.log('recentTransactions: ', transactions);
      $scope.data.recentTransactions = transactions;
      $scope.$apply();
    });
  }

})();
