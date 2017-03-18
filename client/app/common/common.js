import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import AppIcon from './appicon/appicon'

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  AppIcon
])

.name;

export default commonModule;
