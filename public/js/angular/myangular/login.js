(function () {
    'use strict';
// uchiha-work
    function EdaiAccountListController($scope, accountService, dialogService, loginContext) {
        var list = this;
		list.accounts = [];
        list.removeCandidate = {};

        list.removeAccount = removeAccount;
        list.createAccount = createAccount;
        list.importAccount = importAccount;
        list.signIn = signIn;
        list.showRemoveWarning = showRemoveWarning;

        accountService.getAccounts().then(function (accounts) {
            list.accounts = accounts;
        });

        function showRemoveWarning(index) {
            list.removeIndex = index;
            list.removeCandidate = list.accounts[index];
            dialogService.open('#account-remove-popup');
        }

        function removeAccount() {
            if (list.removeCandidate) {
                accountService.removeAccountByIndex(list.removeIndex).then(function () {
                    list.removeCandidate = undefined;
                    list.removeIndex = undefined;
                });
            }
        }

        function createAccount() {
            loginContext.notifyGenerateSeed($scope);
        }

        function importAccount() {
            loginContext.showInputSeedScreen($scope);
        }

        function signIn(account) {
            loginContext.showLoginScreen($scope, account);
        }
        //rdai
        $scope.accounts = null;
        $scope.getListAccount = function(){
            accountService.getAccounts().then(function (accounts) {
                $scope.accounts = accounts;
                console.log($scope.accounts);
            });
        }
        $scope.getListAccount();
        $scope.signIn = function(account){
            loginContext.showLoginScreen($scope, account);
        }
    }

    EdaiAccountListController.$inject = ['$scope', 'accountService', 'dialogService', 'loginContext'];

    angular
        .module('app.login')
        .controller('rdaiAccountListController', EdaiAccountListController);
})();