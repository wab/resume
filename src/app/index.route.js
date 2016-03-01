export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      home: true
    })
    .when('/competences', {
      templateUrl: 'app/competences/competences.html',
      controller: 'CompetencesController',
      controllerAs: 'page',
      home: false
    })
    .when('/experiences', {
      templateUrl: 'app/experiences/experiences.html',
      controller: 'ExperiencesController',
      controllerAs: 'experiences',
      home: false
    })
    .when('/formation', {
      templateUrl: 'app/formation/formation.html',
      controller: 'FormationController',
      controllerAs: 'page',
      home: false
    })
    .when('/references', {
      templateUrl: 'app/references/references.html',
      controller: 'ReferencesController',
      controllerAs: 'page',
      home: false
    })
    .otherwise({
      redirectTo: '/'
    });
}
