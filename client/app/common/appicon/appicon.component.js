import template from './appicon.html';
import controller from './appicon.controller';
import './appicon.scss';

let appiconComponent = {
  restrict: 'E',
  bindings: {
    alt: '@alt',
    link: '@link',
    src: '@src',
    title: '@title'
  },
  template,
  controller
};

export default appiconComponent;
