import './input.scss';

let inputDirective = function (){
  return {
    restrict: 'AE',
    scope: {
      label : '@label',
      placeholder : '@placeholder',
      value: '='
    },
    template: `<div class="input-control-container">
      <label class="input-control-label" {{controlname}}">{{label}} <span class="help-icon"></span></label>
      <input class="input-control" name="{{controlname}}" type="text" ng-model="value" placeholder="{{placeholder}}" />
      </div>`,
    link  : function(scope, elem, attrs) {
      scope.format = 'placeholder'
      scope.controlname = attrs.controlname;
    }
  }
};

export default inputDirective;
