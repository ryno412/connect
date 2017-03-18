import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appiconComponent from './appicon.component';

let appiconModule = angular.module('appicon', [
  uiRouter
])

.component('appicon', appiconComponent)

.name;

export default appiconModule;
