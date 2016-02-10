export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/experiences', {
      templateUrl: 'app/experiences/experiences.html',
      controller: 'ExperiencesController',
      controllerAs: 'experience'
    })
    .when('/formation', {
      templateUrl: 'app/formation/formation.html',
      controller: 'FormationController',
      controllerAs: 'formation'
    })
    .when('/references', {
      templateUrl: 'app/references/references.html',
      controller: 'ReferencesController',
      controllerAs: 'references'
    })
    .otherwise({
      redirectTo: '/'
    });
}
