(function () {
    'use strict';

    var SEED_MINIMUM_LENGTH = 25;

    function RDaiAccountSeedController(
        $scope, 
        loginContext, 
        utilityService,                  
        cryptoService, 
        dialogService, 
        passPhraseService,
        accountService
        ){
        var vm = this;
        
        vm.validationOptions = {
            onfocusout: false,
            rules: {
                walletSeed: {
                    required: true,
                    minlength: SEED_MINIMUM_LENGTH
                }
            },
            messages: {
                walletSeed: {
                    required: 'Wallet seed is required',
                    minlength: 'Wallet seed is too short. A secure wallet seed should contain more than ' +
                       SEED_MINIMUM_LENGTH + ' characters'
                }
            }
        };
        vm.registerAccount = registerAccount;
        vm.back = goBack;
        vm.refreshAddress = refreshAddress;
        vm.checkSeedAndRegister = checkSeedAndRegister;
		vm.generateSeed = generateSeed;
		
        function cleanup() {
            //it seems we won't need this code if we switch to recreation of controllers on each event
            vm.seed = '';
            vm.displayAddress = '';
        }

        function refreshAddress() {
            vm.displayAddress = cryptoService.buildRawAddressFromSeed(vm.seed);
        }

        function checkSeedAndRegister(form) {
            if (!form.validate()) {
                return false;
            }

            if (utilityService.endsWithWhitespace(vm.seed)) {
                dialogService.openNonCloseable('#seed-whitespace-popup');
            } else {
                registerAccount();
            }

            return true;
        }

        function generateSeed() {
            vm.seed = passPhraseService.generate();
            refreshAddress();
        }

        function registerAccount() {
            loginContext.showRegisterScreen($scope, vm.seed);
            cleanup();
        }

        function goBack() {
            loginContext.showAccountsListScreen($scope);
            cleanup();
        }

        //work
        // $scope.user = null;
        $scope.user = {
            firstName: 'Nguyen Ky',
            lastName: 'Le',
            email:'lenguyenky1801@gmail.com',
            password:'123456'
        };

        $scope.step = 1 ;
        $scope.confirmSeed = [];
        $scope.seedNewConfirm ='';
        $scope.disabledStepFinal = true;
        $scope.nextStep = function(){
            $scope.step++;
        }
        $scope.preStep = function(){
            $scope.step--;
        }
        
        $scope.generateSeed = function() {
            $scope.seed = passPhraseService.generate();
            refreshAddress();
        }
        $scope.generateSeed();
        $scope.code = cryptoService.buildRawAddressFromSeed($scope.seed);
        $scope.arrSeed = $scope.seed.split(" ");
        // $scope.ramdomSeed = function(){
        //     $scope.arrSeed = [];
        //     var arrSeed = $scope.seed.split(" ");
        //     for(var i = 0;i <= arrSeed.length;i++){
        //         var rand = arrSeed[Math.floor(Math.random() * arrSeed.length)];
        //         $scope.arrSeed.push(rand);
        //     }
        //     console.log($scope.seed);
        //     console.log($scope.arrSeed);
        // }
        // $scope.ramdomSeed();
        $scope.addSeed = function(key,seed){
            $scope.confirmSeed.push(seed);
            $scope.arrSeed.splice(key,1);
            $scope.renderSeedConfirm(seed);
        }
        $scope.renderSeedConfirm = function(seed){
            $scope.seedNewConfirm =  $scope.seedNewConfirm +' '+ seed;
        }
        $scope.$watch('seedNewConfirm', function (newValue, oldValue) {
            if(newValue.trim() === $scope.seed.trim()){
                $scope.disabledStepFinal = false;
            }
                
                    
        });
        function cleanup() {
            // ctrl.name = '';
            // ctrl.password = '';
            // ctrl.confirmPassword = '';
        }
        $scope.saveAccountAndSignIn = function(){
            var seed = $scope.seed;
            var password = $scope.user.password;
            var name = $scope.user.firstName+$scope.user.lastName;

            var cipher = cryptoService.encryptWalletSeed(seed,password).toString();
            var keys = cryptoService.getKeyPair(seed);
            var checksum = cryptoService.seedChecksum(seed);
            var address = cryptoService.buildRawAddress(keys.public);

            var account = {
                name: name,
                cipher: cipher,
                checksum: checksum,
                publicKey: keys.public,
                address: address
            };

            accountService.addAccount(account);

            loginContext.notifySignedIn($scope, address, seed, keys);

            cleanup();

            return true;
        }
        //register rdai
    }

    RDaiAccountSeedController.$inject = ['$scope',
        'loginContext',
        'utilityService',
        'cryptoService',
        'dialogService',
        'passPhraseService',
        'accountService'
    ];

    angular
        .module('app.login')
        .controller('registerAccountController', RDaiAccountSeedController);
})();