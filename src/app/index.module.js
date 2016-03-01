/* global malarkey:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { CompetencesController } from './competences/competences.controller';
import { ExperiencesController } from './experiences/experiences.controller';
import { FormationController } from './formation/formation.controller';
import { ReferencesController } from './references/references.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { HeaderDirective } from '../app/components/header/header.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('resume', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngAria', 'ngResource', 'ngRoute', 'iso.directives', 'viewhead'])
  .constant('malarkey', malarkey)
  .config(config)
  .config(routerConfig)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('CompetencesController', CompetencesController)
  .controller('ExperiencesController', ExperiencesController)
  .controller('FormationController', FormationController)
  .controller('ReferencesController', ReferencesController)
  .directive('mainheader', HeaderDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
