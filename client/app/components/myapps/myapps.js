import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myappsComponent from './myapps.component';
import Api from '../../services/api';

let myappsModule = angular.module('myapps', [
  uiRouter,
  Api.name
])

.component('myapps', myappsComponent)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
  .state('myapps', {
    url: '/my-apps',
    component: 'myapps',
  });
})

.name;

export default myappsModule;
