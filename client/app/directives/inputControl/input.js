/**
 * Created by ryanford on 3/25/17.
 */
import angular from 'angular';
import inputControl from './directive';

let inputDirective = angular.module('inputcontrolMod', [])

.directive('inputcontrol', inputControl)
.name;

export default inputDirective;
