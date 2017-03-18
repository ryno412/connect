import template from './appicon.html';
import controller from './appicon.controller';
import './appicon.scss';

let appiconComponent = {
  restrict: 'E',
  bindings: {
    age : '@age',
    src: '@src'
  },
  template,
  controller
};

export default appiconComponent;
