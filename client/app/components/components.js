import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import MyApps from './myapps/myapps';

let componentModule = angular.module('app.components', [
  Home,
  About,
  MyApps
])

.name;

export default componentModule;
