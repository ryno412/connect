import angular from 'angular';
import InputDirective from './inputControl/input'

let componentModule = angular.module('app.directives', [
 InputDirective
])
  .name;

export default componentModule;
