import MyappsModule from './myapps'
import MyappsController from './myapps.controller';
import MyappsComponent from './myapps.component';
import MyappsTemplate from './myapps.html';

describe('Myapps', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyappsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyappsController();
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
      expect(MyappsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyappsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyappsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyappsController);
      });
  });
});
