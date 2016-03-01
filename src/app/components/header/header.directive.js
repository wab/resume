export function HeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true
  };

  return directive;
}

class HeaderController {
   constructor ($rootScope, $route) {
    'ngInject';

    var model = this;
    model.f = $rootScope.$on( "$routeChangeSuccess", function() {
      model.home = $route.current.home
    });

  }

}
