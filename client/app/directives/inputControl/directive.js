/**
 * Created by ryanford on 3/25/17.
 */
// import template from './myapps.html';
// import controller from './myapps.controller';
 import './input.scss';

let inputDirective = function (){
  return {
    restrict: 'AE',
    scope: {
      label : '@label',
      placeholder : '@placeholder',
      myvalue: '='
    },
    template: `<div class="input-control-container">
      <label class="input-control-label" {{controlname}}">{{label}} <span class="help-icon"></span></label>
      <input class="input-control" name="{{controlname}}" type="text" ng-model="myvalue" placeholder="{{placeholder}}" />
      </div>`,
    link  : function(scope, elem, attrs) {
      //scope.label = attrs.label;

      scope.format = 'placeholder'
      scope.controlname = attrs.controlname;
    }
  }
};

//inputDirective.$inject = ['$scope']
export default inputDirective;
