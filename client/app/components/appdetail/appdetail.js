import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appdetailComponent from './appdetail.component';

let appdetailModule = angular.module('appdetail', [
  uiRouter
])

.component('appdetail', appdetailComponent)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
  .state('app-detail', {
    url: '/app-detail/{id}',
    component: 'appdetail',
  });
})
.name;

export default appdetailModule;
