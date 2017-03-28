import AppdetailModule from './appdetail'
import AppdetailController from './appdetail.controller';
import AppdetailComponent from './appdetail.component';
import AppdetailTemplate from './appdetail.html';

describe('Appdetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppdetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppdetailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
    //   let controller = makeController();
    //   expect(controller).to.have.property('name');
    // });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(AppdetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AppdetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AppdetailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AppdetailController);
      });
  });
});
