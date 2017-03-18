import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import AppIcon from './appicon/appicon'

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  AppIcon
])

.name;

export default commonModule;
