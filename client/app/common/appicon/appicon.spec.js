import AppiconModule from './appicon'
import AppiconController from './appicon.controller';
import AppiconComponent from './appicon.component';
import AppiconTemplate from './appicon.html';

describe('Appicon', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppiconModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppiconController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AppiconTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AppiconComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AppiconTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AppiconController);
      });
  });
});
