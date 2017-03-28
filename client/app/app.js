import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'font-awesome/css/font-awesome.css';
import 'normalize.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppDirectives from './directives/directives';


angular.module('app', [
    uiRouter,
    Common,
    Components,
    AppDirectives
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
