(function () {
  angular
    .module('rdai')
    .controller('ProfileCtrl', [
      '$scope',
      '$rootScope',
      ProfileCtrl
    ]);

  function ProfileCtrl($scope, $rootScope) {
    $scope.data = {
    };
  }

})();
