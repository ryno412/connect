import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import MyApps from './myapps/myapps';
import AppDetail from './appdetail/appdetail'


let componentModule = angular.module('app.components', [
  Home,
  About,
  MyApps,
  AppDetail
])

.name;

export default componentModule;
