angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.uCSDTriathlonApp', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uCSDTriathlonApp.html',
        controller: 'uCSDTriathlonAppCtrl'
      }
    }
  })

  .state('menu.individualWorkout', {
    url: '/individualworkout',
    views: {
      'side-menu21': {
        templateUrl: 'templates/individualWorkout.html',
        controller: 'individualWorkoutCtrl'
      }
    }
  })

  .state('menu.teamMatches', {
    url: '/teammatches',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teamMatches.html',
        controller: 'teamMatchesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.createNewMatch', {
    url: '/newMatch',
    views: {
      'side-menu21': {
        templateUrl: 'templates/createNewMatch.html',
        controller: 'createNewMatchCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/signup',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.logout', {
    url: '/logout',
    views: {
      'side-menu21': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});