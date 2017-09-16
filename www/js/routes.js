angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.pagamento', {
    url: '/billing',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pagamento.html',
        controller: 'pagamentoCtrl'
      }
    }
  })

  .state('menu.historico', {
    url: '/history',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historico.html',
        controller: 'historicoCtrl'
      }
    }
  })

  .state('menu.configuraO', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraO.html',
        controller: 'configuraOCtrl'
      }
    }
  })

  .state('menu.ajuda', {
    url: '/help',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ajuda.html',
        controller: 'ajudaCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.meuStash', {
    url: '/mystash',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meuStash.html',
        controller: 'meuStashCtrl'
      }
    }
  })

  .state('menu.capturar', {
    url: '/capture',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capturar.html',
        controller: 'capturarCtrl'
      }
    }
  })

  .state('menu.selecionar', {
    url: '/select',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selecionar.html',
        controller: 'selecionarCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')


});