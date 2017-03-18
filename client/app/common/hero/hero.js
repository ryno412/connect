import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';
import AppIcon from '../appicon/appicon'

let heroModule = angular.module('hero', [
  uiRouter,
  AppIcon
])

.component('hero', heroComponent)

.name;

export default heroModule;
