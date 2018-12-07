
app.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
  
    var registerState = {
      name: 'register',
      url: '/register',
      templateUrl: 'angularjs/dashboard/views/register.html'
    }

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'angularjs/dashboard/views/home.html',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        ], {
                            insertBefore: '#lazyload_placeholder'
                        })
                        .then(function() {
                            return $ocLazyLoad.load([
                                'js/animate.js'
                            ]);
                        });
                }]
            }
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(registerState);
    $stateProvider.state(homeState);
  });