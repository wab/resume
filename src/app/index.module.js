/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ExperiencesController } from './experiences/experiences.controller';
import { FormationController } from './formation/formation.controller';
import { ReferencesController } from './references/references.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('resume', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('ExperiencesController', ExperiencesController)
  .controller('FormationController', FormationController)
  .controller('ReferencesController', ReferencesController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
